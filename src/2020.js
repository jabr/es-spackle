import { define } from "./utils.js";

function wrapPromise(promise) {
  return Promise.resolve(promise).then(
    value => ({ status: 'fulfilled', value }),
    reason => ({ status: 'rejected', reason })
  );
}

if (!Promise.allSettled) {
  define(Promise, "allSettled",
    function allSettled(promises) {
      return Promise.all([...promises].map(wrapPromise));
    }
  )
}

// String.prototype.matchAll
// @todo
