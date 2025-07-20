import { define, globalIterator } from "./utils.js";

const gIterator = globalIterator();

// https://github.com/tc39/proposal-iterator.range
define(gIterator, "range",
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

// https://github.com/tc39/proposal-joint-iteration
import { iteratorFrom } from './2025.js';
define(gIterator, "zip",
  function* zip(sources) {
    const iterators = sources.map(iteratorFrom);
    while (true) {
      const tuple = [];
      for (const it of iterators) {
        const n = it.next();
        // @todo: handle mode other than "shortest"
        if (n.done) { return; }
        tuple.push(n.value);
      }
      yield tuple;
    }
  }
);

define(gIterator, "zipKeyed",
  function* zipKeyed(sources) {
    const keyedIterators = Object.entries(sources).map(
      ([key, iteratorLike]) => [key, iteratorFrom(iteratorLike)]
    );
    while (true) {
      const value = {};
      for (const [key, it] of keyedIterators) {
        const n = it.next();
        // @todo: handle mode other than "shortest"
        if (n.done) { return; }
        value[key] = n.value;
      }
      yield value;
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

// https://github.com/tc39/proposal-math-clamp
define(Math, "clamp",
  function clamp(value, minimum, maximum) {
    return Math.min(Math.max(value, minimum), maximum);
  }
);
