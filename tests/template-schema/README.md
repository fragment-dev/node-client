# template-schema

Vendored from [`fragment-dev/graphql-queries`](https://github.com/fragment-dev/graphql-queries)
(`template-schema/`). Do not edit these files by hand — copy them in again
instead, and re-run `yarn update-test-schema`.

| File | What it is |
| --- | --- |
| `schema.json` | A Fragment template Schema (marketplace). |
| `queries.graphql` | Entry-posting mutations the Fragment CLI generates from it. |
| `queries.runtime-args.graphql` | The same mutations, generated with `--include-runtime-args`. |

The two operation sets bind different entry fields — one binds `typeVersion`,
the other binds `tags`, `groups` and `conditions` — which is why both are here.
What an operation binds is a codegen input, never the transport, so the typed
batch payloads derived from either must be identical. The committed clients in
`tests/fixtures/generated-template-client.ts` and
`generated-template-runtime-args-client.ts` are the snapshots that hold that,
and any change to a generated identifier or signature shows up as a diff there.
