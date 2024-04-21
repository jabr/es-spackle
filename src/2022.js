import { define, typedArrays } from "./utils.js"

define(Object, "hasOwn",
  function hasOwn(object, property) {
    return Object.prototype.
      hasOwnProperty.call(object, property);
  }
);

function atImpl(index) {
  if (index < 0) { index += this.length; }
  return this[index];
}

for (const klass of [ Array, String, ...typedArrays ]) {
  define(klass.prototype, "at", atImpl);
}
