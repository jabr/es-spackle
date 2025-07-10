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
  - RegExp.escape
* ESNext
  - Iterator.range [^range]
  - Uint8Array.fromBase64 [^base64]
  - Uint8Array.fromHex
  - Uint8Array.prototype.toBase64 [^base64]
  - Uint8Array.prototype.toHex

[^browser]: Only polyfills for browser environments.
[^matchall]: Returns an array as an iterable.
[^range]: Options parameter and inclusive setting are not yet implemented.
[^base64]: Options for base64 alphabet and overflow handling are not yet implemented.
[^aggerror]: Throws an Error (not an AggregateError) but it has the aggregate errors property.
[^bigint]: Polyfills are not yet supported on BigInt typed arrays.

## Build

Run `just dist` to create `dist/all.js` _(currently 4.3k uncompressed)_. It requires [esbuild](https://esbuild.github.io/) and also generates the sourcemap at `dist/all.js.map`.

If you don't have [just](https://just.systems/man/en/packages.html) installed, the `esbuild` command is:

```
esbuild --target=es2017 --bundle --minify --sourcemap --outdir=./dist/ ./src/all.js
```

## License

This project is licensed under the terms of the [MIT license](LICENSE.txt).
