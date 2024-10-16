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

function toReversed() {
  const clone = this.slice();
  clone.reverse();
  return clone;
}

function toSorted(cmpFn) {
  const clone = this.slice();
  clone.sort(cmpFn);
  return clone;
}

function withImpl(index, value) {
  const clone = this.slice();
  const offset = index < 0 ? clone.length + index : index;
  if (offset < 0 || offset >= clone.length) {
    throw new RangeError(`Invalid index : ${index}`);
  }
  clone[offset] = value;
  return clone;
}

for (const klass of [ Array, ...typedArrays ]) {
  define(klass.prototype, "findLastIndex", findLastIndex);
  define(klass.prototype, "findLast", findLast);
  define(klass.prototype, "toReversed", toReversed);
  define(klass.prototype, "toSorted", toSorted);
  define(klass.prototype, "with", withImpl);
}

define(Array.prototype, "toSpliced",
  function toSpliced(start, count, ...items) {
    const clone = this.slice();
    clone.splice(start, count, ...items);
    return clone;
  }
);
