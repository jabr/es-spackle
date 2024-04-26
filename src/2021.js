import { define } from "./utils.js";

function reversePromise(promise) {
  return new Promise(
    (resolve, reject) => Promise.resolve(promise).then(reject).catch(resolve)
  );
}

define(Promise, "any",
  function any(promises) {
    return reversePromise(
      Promise.all([...promises].map(reversePromise))
    ).catch(errors => {
      const error = new Error('All promises were rejected');
      error.errors = errors;
      throw error;
    });
  }
);

import { regExpEscape } from './next.js';
define(String.prototype, "replaceAll",
  function replaceAll(pattern, replacement) {
    if (pattern instanceof RegExp) {
      if (!pattern.global) {
        throw new TypeError("non-global RegExp");
      }
      return this.replace(pattern, replacement);
    }
    return this.replace(new RegExp(regExpEscape(pattern), "g"), replacement);
  }
);
