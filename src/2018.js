import { define } from "./utils.js";

define(Promise.prototype, "finally",
  function finallyImpl(fn) {
    if (typeof fn !== 'function') { return this.then(null, null); }
    const P = this.constructor || Promise;
    const wrappedFn = cb => P.resolve(fn()).then(cb);
    return this.then(
      value => wrappedFn(() => value),
      reason => wrappedFn(() => P.reject(reason))
    );
  }
);
