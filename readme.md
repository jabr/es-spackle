# Light-weight polyfills for EcmaScript 2018+

* ES2018
  - Promise.prototype.finally
* ES2019
  - Array.prototype.flat
  - Array.prototype.flatMap
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
  - Set.prototype.intersection
  - Set.prototype.union
  - Set.prototype.difference
  - Set.prototype.symmetricDifference
  - Set.prototype.isSubsetOf
  - Set.prototype.isSupersetOf
  - Set.prototype.isDisjointFrom
* ESNext
  - Promise.try
  - Iterator.range [^range]
  - Uint8Array.fromBase64 [^base64]
  - Uint8Array.fromHex
  - Uint8Array.prototype.toBase64 [^base64]
  - Uint8Array.prototype.toHex
  - RegExp.escape

_Italicized functions are not yet implemented._
[^range]: Options parameter and inclusive setting are not yet implemented.
[^base64]: Options for base64 alphabet and overflow handling are not yet implemented.
[^aggerror]: Throws an Error (not an AggregateError) but it has the aggregate errors property.

## License

This project is licensed under the terms of the [MIT license](LICENSE.txt).
