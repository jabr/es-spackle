import { define, typedArrays } from "./utils.js";

function findLastIndex(callback, callbackThis) {
  for (let index = this.length - 1; index >= 0; index--) {
    if (callback.call(callbackThis, this[index], index, this)) {
      return index;
    }
  }
  return -1;
}

function findLast(callback, callbackThis) {
  return this[this.findLastIndex(callback, callbackThis)];
}

for (const klass of [ Array, ...typedArrays ]) {
  define(klass.prototype, "findLastIndex", findLastIndex);
  define(klass.prototype, "findLast", findLast);
}
