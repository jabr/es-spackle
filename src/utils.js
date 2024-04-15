export function define(object, property, implementation) {
  Object.defineProperty(object, property, {
    value: implementation,
    configurable: true,
    enumerable: false,
    writable: true
  });
}
