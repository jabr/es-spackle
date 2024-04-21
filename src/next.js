import { define } from "./utils.js";

// https://github.com/tc39/proposal-promise-try
define(Promise, "try",
  function tryImpl(func) {
    return new Promise(resolve => resolve(func()));
  }
);

// https://github.com/tc39/proposal-iterator.range
if (!Iterator) globalThis.Iterator = {};
define(Iterator, "range",
  // @todo: support "inclusive" option
  function *range(start, end = undefined, step = 1) {
    if (end === undefined) {
      end = start
      start = 0
    }
    while ((step < 0 && start > end) || (step > 0 && start < end)) {
      yield start
      start += step
    }
  }
);

// https://github.com/tc39/proposal-arraybuffer-base64
// @todo: Uint8Array.prototype.setFrom{Base64,Hex}
define(Uint8Array.prototype, "toBase64",
  // @todo: support "alphabet" and "lastChunkHandling" options
  function toBase64() {
    return btoa(String.fromCharCode(...this))
  }
);

define(Uint8Array.prototype, "toHex",
  function toHex() {
    return [...this].map(byte => (byte & 0xff).toString(16).padStart(2, '0')).join('')
  }
);

define(Uint8Array, "fromBase64",
  // @todo: support "alphabet" and "lastChunkHandling" options
  function fromBase64(string) {
    return Uint8Array.from(atob(string), char => char.charCodeAt(0))
  }
);

define(Uint8Array, "fromHex",
  function fromHex(string) {
    return Uint8Array.from(
      string.match(/[a-zA-Z0-9]{2}/g) || [],
      byte => parseInt(byte, 16)
    )
  }
);
