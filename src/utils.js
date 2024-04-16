export function define(object, property, implementation) {
  Object.defineProperty(object, property, {
    value: implementation,
    configurable: true,
    enumerable: false,
    writable: true
  });
}

export const typedArrays = [
  Int8Array,
  Uint8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  // @todo?
  // BigInt64Array,
  // BigUint64Array,
];
