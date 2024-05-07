[@fragment-dev/node-client](../README.md) / [Modules](../modules.md) / [src/errors](../modules/src_errors.md) / BadRequestError

# Class: BadRequestError

[src/errors](../modules/src_errors.md).BadRequestError

## Hierarchy

- [`FragmentError`](src_errors.FragmentError.md)

  ↳ **`BadRequestError`**

## Table of contents

### Constructors

- [constructor](src_errors.BadRequestError.md#constructor)

### Properties

- [cause](src_errors.BadRequestError.md#cause)
- [code](src_errors.BadRequestError.md#code)
- [message](src_errors.BadRequestError.md#message)
- [name](src_errors.BadRequestError.md#name)
- [stack](src_errors.BadRequestError.md#stack)
- [status](src_errors.BadRequestError.md#status)
- [prepareStackTrace](src_errors.BadRequestError.md#preparestacktrace)
- [stackTraceLimit](src_errors.BadRequestError.md#stacktracelimit)

### Methods

- [captureStackTrace](src_errors.BadRequestError.md#capturestacktrace)

## Constructors

### constructor

• **new BadRequestError**(`«destructured»`): [`BadRequestError`](src_errors.BadRequestError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `FragmentErrorParams` |

#### Returns

[`BadRequestError`](src_errors.BadRequestError.md)

#### Overrides

[FragmentError](src_errors.FragmentError.md).[constructor](src_errors.FragmentError.md#constructor)

#### Defined in

[src/errors.ts:47](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/src/errors.ts#L47)

## Properties

### cause

• `Optional` `Readonly` **cause**: `Error` \| `ClientError`

#### Inherited from

[FragmentError](src_errors.FragmentError.md).[cause](src_errors.FragmentError.md#cause)

#### Defined in

[src/errors.ts:10](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/src/errors.ts#L10)

___

### code

• `Optional` `Readonly` **code**: `string`

#### Inherited from

[FragmentError](src_errors.FragmentError.md).[code](src_errors.FragmentError.md#code)

#### Defined in

[src/errors.ts:13](https://github.com/fragment-dev/fragment-node/blob/d9b3e3dab3bfd13099e0fa6fa53b21a517c92a9c/src/errors.ts#L13)

___

### message

• **message**: `string`

#### Inherited from

[FragmentError](src_errors.FragmentError.md).[message](src_errors.FragmentError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1077

___

### name

• **name**: `string`

#### Inherited from

[FragmentError](src_errors.FragmentError.md).[name](src_errors.FragmentError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1076

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[FragmentError](src_errors.FragmentError.md).[stack](src_errors.FragmentError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1078

___

### status

• `Optional` `Readonly` **status**: `number`

#### Inherited from

[FragmentError](src_errors.FragmentError.md).[status](src_errors.FragmentError.md#status)

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

[FragmentError](src_errors.FragmentError.md).[prepareStackTrace](src_errors.FragmentError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[FragmentError](src_errors.FragmentError.md).[stackTraceLimit](src_errors.FragmentError.md#stacktracelimit)

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

[FragmentError](src_errors.FragmentError.md).[captureStackTrace](src_errors.FragmentError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:21
