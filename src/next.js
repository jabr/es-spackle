import { define } from "./utils.js";

if (!Promise.try) {
  define(Promise, "try",
    function tryImpl(func) {
      return new Promise(resolve => resolve(func()));
    }
  );
}

// Uint8Array.from{Base64,Hex}
// Uint8Array.prototype.to{Base64,Hex}
// Uint8Array.prototype.setFrom{Base64,Hex}
// https://github.com/tc39/proposal-arraybuffer-base64
// @todo

// Iterator.range
// https://github.com/tc39/proposal-iterator.range
// @todo
