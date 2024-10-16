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
  - globalThis [^browser]
  - Promise.allSettled
  - String.prototype.matchAll [^matchall]
* ES2021
  - Promise.any [^aggerror]
  - String.prototype.replaceAll
* ES2022
  - Object.hasOwn
  - String.prototype.at
  - Array.prototype.at
  - %TypedArray%.prototype.at [^bigint]
* ES2023
  - Array.prototype.findLast
  - Array.prototype.findLastIndex
  - %TypedArray%.prototype.findLast [^bigint]
  - %TypedArray%.prototype.findLastIndex [^bigint]
  - Array.prototype.toReversed
  - Array.prototype.toSorted
  - Array.prototype.toSpliced
  - Array.prototype.with
  - %TypedArray%.prototype.toReversed [^bigint]
  - %TypedArray%.prototype.toSorted [^bigint]
  - %TypedArray%.prototype.with [^bigint]
* ES2024
  - Promise.withResolvers
  - Object.groupBy
  - Map.groupBy
* ES2025
  - Set.prototype.intersection
  - Set.prototype.union
  - Set.prototype.difference
  - Set.prototype.symmetricDifference
  - Set.prototype.isSubsetOf
  - Set.prototype.isSupersetOf
  - Set.prototype.isDisjointFrom
  - Promise.try
* ESNext
  - Iterator.range [^range]
  - Uint8Array.fromBase64 [^base64]
  - Uint8Array.fromHex
  - Uint8Array.prototype.toBase64 [^base64]
  - Uint8Array.prototype.toHex
  - RegExp.escape

[^browser]: Only polyfills for browser environments.
[^matchall]: Returns an array as an iterable.
[^range]: Options parameter and inclusive setting are not yet implemented.
[^base64]: Options for base64 alphabet and overflow handling are not yet implemented.
[^aggerror]: Throws an Error (not an AggregateError) but it has the aggregate errors property.
[^bigint]: Polyfills are not yet supported on BigInt typed arrays.

## License

This project is licensed under the terms of the [MIT license](LICENSE.txt).
