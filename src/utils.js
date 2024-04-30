export function define(object, property, implementation) {
  if (!object[property]) {
    Object.defineProperty(object, property, {
      value: implementation,
      configurable: true,
      enumerable: false,
      writable: true
    });
  }
}

export function global() {
  if (typeof globalThis === 'undefined') {
    if (typeof window !== 'undefined') {
      window.globalThis = window;
    }
  }
  return globalThis;
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
  // @todo: need to check if BigInt arrays exists as they were added in ES2020
  // BigInt64Array,
  // BigUint64Array,
];
