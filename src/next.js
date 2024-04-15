import { define } from "./utils.js";

if (!Promise.try) {
  define(
    Promise, "try",
    function tryImpl(func) {
      return new Promise(resolve => resolve(func()));
    }
  );
}

// ArrayBuffer
// - from{Base64,Hex}
// - protoype.to{Base64,Hex}
// https://github.com/tc39/proposal-arraybuffer-base64
// @todo
