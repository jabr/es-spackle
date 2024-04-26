import { define } from "./utils.js";

function wrapPromise(promise) {
  return Promise.resolve(promise).then(
    value => ({ status: 'fulfilled', value }),
    reason => ({ status: 'rejected', reason })
  );
}

define(Promise, "allSettled",
  function allSettled(promises) {
    return Promise.all([...promises].map(wrapPromise));
  }
);

define(String.prototype, "matchAll",
  function matchAll(pattern) {
    if (pattern instanceof RegExp && !pattern.global) {
      throw new TypeError("non-global RegExp");
    }

    const regexp = new RegExp(pattern, "g");
    const matches = [];
    let match;
    while ((match = regexp.exec(this))) matches.push(match);
    return matches;
  }
);
