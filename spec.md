# Typed Batch Ledger Entries — SDK Specification

Status: draft
Applies to: `fragment-python`, `node-client`, `fragment-go`, `fragment-ruby`

"MUST", "MUST NOT", "SHOULD", and "MAY" are used in the RFC 2119 sense.
Sections marked **[Normative]** are binding and conformance-tested. Sections
marked **[Informative]** are explanatory and bind nothing.

---

## 1. Problem and scope

`addLedgerEntries(entries: [AddLedgerEntryInput!]!)` commits a batch of Ledger
Entries atomically. `AddLedgerEntryInput` is `{ entry: LedgerEntryInput!, ik:
SafeString! }`, and `LedgerEntryInput.parameters` is an opaque `JSON` scalar.

A batch therefore takes one list of one input type, and GraphQL cannot express
the parameter types of an individual entry within it. Callers are left passing
untyped maps.

Each SDK closes this gap at code-generation time by deriving typed payloads from
the per-entry-type `addLedgerEntry` operations already generated for a Schema.
Those operations encode both missing facts: the entry type as a string literal,
and each parameter bound to a typed operation variable.

**In scope:** the rules for deriving typed payloads from `.graphql` operations,
and the JSON those payloads produce.

**Out of scope:** the shape of each language's API. Classes, discriminated
unions, interfaces, and structs are all conforming, and SDKs SHOULD choose
whatever is idiomatic. Nothing in this document constrains the surface a caller
touches, only what goes on the wire and what gets derived from what.

---

## 2. Derivation **[Normative]**

### 2.1 Recognition

An operation is a **typed entry operation** if and only if all hold:

1. It is a `mutation`.
2. It has a name.
3. Its selection set contains exactly one selection.
4. That selection is a field named `addLedgerEntry`.
5. That field has an `entry` argument whose value is an inline object literal.
6. That object has a `type` field whose value is a **string literal**.

An operation that fails any condition MUST be skipped silently. It MUST NOT be
an error. This is what excludes the SDKs' own `addLedgerEntry` and
`addLedgerEntryRuntime`, whose `type` is a variable.

Generators MUST NOT require a particular operation name. Naming conventions
(`PostAuthCapture`, etc.) are informative only.

### 2.2 Identity

A payload's identity is the pair **(`type`, `typeVersion`)**.

`typeVersion` is the integer literal in the `entry` object if present, otherwise
**1** (§2.5). Identity MUST NOT be the entry type alone: the same type at two
versions has different parameter sets, and collapsing them drops one and posts
the wrong version. Because unpinned normalises to 1, an unpinned operation and
one pinning `typeVersion: 1` share an identity and describe the same model.

Two operations MAY map to the same identity — for example a second operation
with a different selection set. Because the Fragment CLI and API guarantee that
no two Ledger Entries share a `(type, typeVersion)` pair, such operations
necessarily declare the same parameters. Generators MUST deduplicate them; the
first occurrence in input order wins. Generators MAY additionally error if the
parameter sets differ, since that indicates the `.graphql` is stale relative to
the Schema.

### 2.3 Parameters

If the `entry` object has a `parameters` field whose value is an inline object
literal, each of its fields is considered in source order:

- If the field's value is **not** a variable reference, it MUST be skipped. The
  value is fixed by the operation and MUST NOT become a caller-supplied field.
- Otherwise it yields a parameter whose **wire name** is the field name,
  verbatim.
- The parameter's type and required-ness come from the matching **variable
  definition**, not from the field name. A non-null variable type
  (`String!`) is required; anything else is optional.

If `parameters` is absent, or is a variable rather than an inline object, the
payload has no typed parameters. Generators SHOULD still emit a payload for the
entry type, with parameters falling back to the language's untyped map.

### 2.3a Common fields

Everything above is derived from the source operation, because only the
operation knows it. The rest of a payload is fixed by `LedgerEntryInput` and does
not vary by entry type.

A payload MUST expose all of:

| Field | Notes |
| --- | --- |
| `ik` | argument of `addLedgerEntry`, not a field of `entry` |
| `ledger` | as an idempotency key, e.g. a `ledger_ik` field |
| `posted` | |
| `description` | |
| `tags` | |
| `groups` | |
| `conditions` | |

`lines` is the one `LedgerEntryInput` field a payload MUST NOT expose, because it
cannot be combined with an entry that has a `type`. `type`, `typeVersion` and
`parameters` are derived (§2.1, §2.2, §2.3) and MUST NOT be caller-supplied.

**Do not derive this set from the operation.** A source operation binds only the
entry fields the CLI chose to expose, and that choice has already changed between
CLI versions: one generation binds `tags`, `groups` and `conditions` while
another binds `typeVersion` instead, and neither binds `description`. The
operation is a codegen input, never the transport. A typed payload travels as an
`AddLedgerEntryInput` on `addLedgerEntries`, so what the operation binds places no
limit on what the payload may carry. Deriving the set would invent a restriction
the API does not have and would move a payload's surface whenever the CLI
changed.

When `LedgerEntryInput` gains a field, this list is what has to be updated, in
one place, for all four SDKs.

### 2.4 Ordering

Parameters MUST retain the order in which they appear in the source
`parameters: {...}` literal. Generators MUST NOT reorder them — not
alphabetically, and not required-first. All four generators read the same
document, so source order is the only ordering they can agree on without
coordination.

### 2.5 Naming and escaping

The payload's name is derived from the entry type and MUST always carry the
version it resolves to.

A name therefore depends only on that payload's own identity, never on which
other operations are in the input. Suffixing only when versions collide would
mean adding a second version later renames the first, breaking every existing
call site for a purely additive Schema change (§2.6).

An operation that pins no `typeVersion` MUST be normalised to **1** — for its
identity (§2.2), its name, and its wire payload alike. An entry with no
`typeVersion` resolves to version 1 server-side, never to the latest version, so
`1` and unspecified are equivalent and the SDK may state the resolved value.
Normalising early is what keeps the name and the wire from disagreeing: a model
called `V1` that posted no version at all would mislead every reader of it.

This is the one case where an SDK supplies a value the operation did not state.
It is permitted only because the resolution rule is fixed; §3.2's requirement to
omit unset fields still applies to every other field.

Local identifiers MAY be escaped however the language requires — reserved words,
casing, export rules, collisions with SDK-provided members. Escaping is local.
The wire name MUST remain the verbatim parameter name from the Schema (§3.3).

Escaping can make two parameters land on one identifier: `user_id` and `userId`
both reduce to `user_id`. Within a payload, local field names MUST be unique.
The first occurrence in source order keeps the plain name and later ones are
suffixed, the same way model names are disambiguated above. Escaping a
parameter this way MUST NOT change its wire name, so each still carries its own
value. SDKs SHOULD warn when it happens, because the caller ends up using a name
they did not choose.

A language whose declaration form silently accepts a duplicate is the dangerous
case. Python is one: a repeated pydantic field declaration keeps the last, and
both wire keys then take a single value.

### 2.6 Backward compatibility

Code generation MUST be backward-compatible across additive and
order-only Schema changes. Specifically, none of the following may break caller
source code:

- **Adding a new entry type**, or a new version of an existing one.
- **Reordering the parameters** of an existing entry type (§2.4).
- **Adding a new optional parameter** to an existing entry type.

Renaming or removing a parameter, and removing an entry type, are breaking
Schema changes and are outside this guarantee.

Two consequences worth stating, since neither is obvious:

- A generated identifier MUST depend only on its own payload's identity, never
  on which other operations are present in the input (§2.5). Context-sensitive
  naming turns an addition into a rename.
- Parameters MUST be caller-supplied **by name**, not by position. Python, Node,
  and Ruby get this from the language. Go permits unkeyed struct literals, where
  reordering two same-typed parameters silently swaps values rather than failing
  to compile; the Go SDK MUST require keyed literals.

**Verification:** not expressible in the shared fixtures, since generated source
is language-specific. Each SDK MUST instead carry a **snapshot test** over its
generated output, so any change to generated identifiers or signatures surfaces
as a reviewable diff rather than silently. Snapshots are language-specific and
live in the SDK repo, not here.

---

## 3. Wire contract **[Normative]**

### 3.1 Shape

A batch serializes as:

```json
{"entries": [
  {"ik": "<string>",
   "entry": {"ledger": {"ik": "<string>"},
             "type": "<entry type>",
             "typeVersion": 2,
             "posted": "<timestamp>",
             "description": "<string>",
             "parameters": {"<wire name>": "<value>"},
             "tags": [], "groups": [], "conditions": []}}
]}
```

Entry order MUST be preserved. The API returns results in the same order.

### 3.2 Omission

A field the caller did not set MUST be omitted. It MUST NOT be serialized as
`null`. `null` is a meaningful value the caller may pass deliberately, and the
two MUST remain distinguishable.

Language hazards: Go's `omitempty` conflates zero values (`""`, `0`, `false`)
with unset and MUST NOT be relied on — use pointers or a custom marshaller.
TypeScript's `InputMaybe<T> = T | null` invites wire-visible `null` and MUST NOT
be used for these types; use `?:` with `| undefined`.

### 3.3 Names

Schema parameter names go on the wire verbatim. Any local escaping (§2.5) MUST
be reversed during serialization via an explicit mapping. No SDK may camelCase,
snake_case, or otherwise normalize a parameter name on the wire.

### 3.4 Equivalence profile

**Baseline (required):** *semantic* equivalence. For the same logical batch,
every SDK MUST produce the same key set, nesting, and values, with unset fields
omitted. Key ordering is unconstrained.

**Strict (optional):** *byte* equivalence. Additionally requires:

- **Canonical key order:** keys are emitted in lexicographic order by wire name
  at every level, *except* `parameters`, which uses source order per §2.4.
  Chosen because it is mechanical and needs no coordination beyond this
  sentence. `fragment-python` satisfies it incidentally, since ariadne-codegen
  emits input-type fields alphabetically — an artifact, not a guarantee, so it
  is fixture-enforced rather than assumed.
- **Encoder settings:** Python `json.dumps(ensure_ascii=False,
  separators=(',', ':'))`; Go a replacement `graphql.Client` using
  `SetEscapeHTML(false)`, because `encoding/json` escapes `<`, `>`, `&` even
  inside a custom `MarshalJSON`.
- **No float-typed parameters** — Go renders `float64(1)` as `1`, Python as
  `1.0`. Fragment already binds `Int64`/`Int96` to strings, so this is mostly
  moot.

> **Open decision.** The strict profile conflicts with the Node design in which
> the generated types describe the wire shape directly and the caller's object
> literal *is* the request body — key order there is caller-controlled and can
> only be canonicalized by adding the runtime transform that design exists to
> avoid. Adopt strict only if byte-equality is genuinely required (request
> signing, cross-SDK golden diffs). The baseline is recommended.

### 3.5 Mixing

An SDK MUST allow raw, untyped entry inputs and typed payloads in the same
batch. Raw inputs bypass §3.2 — a caller who explicitly passes `null` gets
`null` — and this asymmetry is accepted.

### 3.6 Accepting and serialising

Everything a batch method accepts MUST serialise. Widening the accepted type
past what the transport actually converts turns a compile-time rejection into a
runtime failure, and the wider signature is what makes the failure reachable.

Language hazard: the Python SDK's transport recurses into request variables with
`isinstance(value, list)`, so an argument typed as a broader sequence has to be
narrowed to a list before it reaches the encoder. A tuple otherwise satisfies
the signature, skips conversion, and reaches the JSON encoder holding model
objects.

---

## 4. Batch semantics **[Normative]**

- The batch is **atomic**: either every entry commits or none do. On error,
  nothing was written, and callers MUST NOT implement partial-batch
  reconciliation.
- Idempotency keys are **per entry**, not per batch. `isIkReplay` is reported
  per result, so a retried partially-replayed batch reports which entries had
  already committed.
- The response is the union `AddLedgerEntriesResult | AddLedgerEntriesError |
  BadRequestError | InternalError`, discriminated on `__typename`. SDKs MUST
  require callers to narrow before reading `results`.
- `AddLedgerEntriesError` reports per-entry failures. Alongside the usual `code`,
  `message` and `retryable` it carries `errors`, one element per failing entry,
  each with the `ik` that identifies it. An SDK MUST surface that list rather
  than collapsing it to the top-level message, since the `ik` is what tells a
  caller which entry to fix.

---

## 5. Conformance

Each SDK MUST implement a runner over the shared fixtures in
`spec/conformance/`. A fixture is a directory containing:

| File | Purpose |
| --- | --- |
| `input.graphql` | operations fed to the generator |
| `case.json` | the logical batch: which payloads, with which values |
| `expected.json` | the JSON the SDK must produce |

`case.json` names payloads by **entry type and version**, not by generated
identifier, so it stays language-neutral.

| Fixture | Asserts |
| --- | --- |
| `001-basic` | recognition, nesting, parameter extraction |
| `002-type-versions` | §2.2 — v1 and v2 produce distinct payloads |
| `003-reserved-names` | §2.5/§3.3 — escaping never reaches the wire |
| `004-param-order` | §2.4 — source order, not required-first |
| `005-unset-omitted` | §3.2 — omitted, never `null` |
| `006-non-ascii` | §3.4 — encoding agreement |

Comparison is by parsed-JSON equality under the baseline profile, and by byte
equality under the strict profile.

---

## 6. Known gaps **[Informative]**

- No behavior here has been verified against a live API. Server tolerance for an
  entry object with `lines` absent and `type` present is untested in every SDK.
- `addLedgerEntries` exists in the published schema but is absent from the Ruby
  SDK's pinned `fragment.schema.json`, where `graphql-client` validates at parse
  time and so fails at client construction.
- In Go and Ruby the operation documents are synced from
  `fragment-dev/graphql-queries`; the batch operation must land there or be
  overwritten by the next sync.
- The built-in single-entry `addLedgerEntry` operation declares no `$conditions`
  variable, so it cannot express everything a typed payload carries.
