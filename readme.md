# Light-weight polyfills for EcmaScript 2018+

* ES2018
  - Promise.prototype.finally
* ES2019
  - Array.prototype.flat
  - _Array.prototype.flatMap_
  - Object.fromEntries
  - String.prototype.trimStart
  - String.prototype.trimEnd
* ES2020
  - Promise.allSettled
  - _String.prototype.matchAll_
* ES2021
  - Promise.any [^aggerror]
  - _String.prototype.replaceAll_
* ES2022
  - Object.hasOwn
  - String.prototype.at
  - Array.prototype.at
  - %TypedArray%.prototype.at
* ES2023
  - Array.prototype.findLast
  - Array.prototype.findLastIndex
  - %TypedArray%.prototype.findLast
  - %TypedArray%.prototype.findLastIndex
* ES2024
  - Promise.withResolvers
  - Object.groupBy
  - Map.groupBy
* _ES2025_
  - _Set.prototype.intersection_
  - _Set.prototype.union_
  - _Set.prototype.difference_
  - _Set.prototype.symmetricDifference_
  - _Set.prototype.isSubsetOf_
  - _Set.prototype.isSupersetOf_
  - _Set.prototype.isDisjointFrom_
* ESNext
  - Promise.try
  - Iterator.range [^range]
  - Uint8Array.fromBase64 [^base64]
  - Uint8Array.fromHex
  - Uint8Array.prototype.toBase64 [^base64]
  - Uint8Array.prototype.toHex

_Italicized functions are not yet implemented._
[^range]: Options parameter and inclusive setting are not yet implemented.
[^base64]: Options for base64 alphabet and overflow handling are not yet implemented.
[^aggerror]: Throws an Error (not an AggregateError) but it has the aggregate errors property.

## License

This project is licensed under the terms of the [MIT license](LICENSE.txt).
