[@fragment-dev/node-client](../README.md) / [Modules](../modules.md) / [src/errors](../modules/src_errors.md) / FragmentError

# Class: FragmentError

[src/errors](../modules/src_errors.md).FragmentError

## Hierarchy

- `Error`

  ↳ **`FragmentError`**

  ↳↳ [`InternalError`](src_errors.InternalError.md)

  ↳↳ [`BadRequestError`](src_errors.BadRequestError.md)

## Table of contents

### Constructors

- [constructor](src_errors.FragmentError.md#constructor)

### Properties

- [cause](src_errors.FragmentError.md#cause)
- [code](src_errors.FragmentError.md#code)
- [message](src_errors.FragmentError.md#message)
- [name](src_errors.FragmentError.md#name)
- [stack](src_errors.FragmentError.md#stack)
- [status](src_errors.FragmentError.md#status)
- [prepareStackTrace](src_errors.FragmentError.md#preparestacktrace)
- [stackTraceLimit](src_errors.FragmentError.md#stacktracelimit)

### Methods

- [captureStackTrace](src_errors.FragmentError.md#capturestacktrace)

## Constructors

### constructor

• **new FragmentError**(`«destructured»`): [`FragmentError`](src_errors.FragmentError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `FragmentErrorParams` |

#### Returns

[`FragmentError`](src_errors.FragmentError.md)

#### Overrides

Error.constructor

#### Defined in

[src/errors.ts:15](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/src/errors.ts#L15)

## Properties

### cause

• `Optional` `Readonly` **cause**: `Error` \| `ClientError`

#### Overrides

Error.cause

#### Defined in

[src/errors.ts:10](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/src/errors.ts#L10)

___

### code

• `Optional` `Readonly` **code**: `string`

#### Defined in

[src/errors.ts:13](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/src/errors.ts#L13)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1077

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1076

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1078

___

### status

• `Optional` `Readonly` **status**: `number`

#### Defined in

[src/errors.ts:11](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/src/errors.ts#L11)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:21
