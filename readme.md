# Light-weight polyfills for EcmaScript 2018+

* _ES2018_
  - _Promise.prototype.finally_
* ES2019
  - Array.prototype.flat
  - _Array.prototype.flatMap_
  - Object.fromEntries
  - String.prototype.trimStart
  - String.prototype.trimEnd
* _ES2020_
  - _Promise.allSettled_
  - _String.prototype.matchAll_
* _ES2021_
  - _Promise.any_
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
  - Iterator.range [^1]
  - Uint8Array.fromBase64 [^2]
  - Uint8Array.fromHex
  - Uint8Array.prototype.toBase64 [^2]
  - Uint8Array.prototype.toHex

## Notes

- Italicized functions are not yet implemented.
[^1]: Options parameter and inclusive setting are not yet implemented.
[^2]: Options for base64 alphabet and overflow handling are not yet implemented.

## License

This project is licensed under the terms of the [MIT license](LICENSE.txt).
