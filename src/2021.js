import { define } from "./utils.js";

function reversePromise(promise) {
  return new Promise(
    (resolve, reject) => Promise.resolve(promise).then(reject).catch(resolve)
  );
}

if (!Promise.any) {
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
}

// String.prototype.replaceAll
// @todo
