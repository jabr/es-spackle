import { define } from "./utils.js";

define(Set.prototype, "intersection",
  function intersection(other) {
    if (this.size > other.size) return other.intersection(this);
    return new Set([...this].filter(e => other.has(e)));
  }
);

define(Set.prototype, "union",
  function union(other) {
    return new Set([...this, ...other]);
  }
);

define(Set.prototype, "difference",
  function difference(other) {
    return new Set([...this].filter(e => !other.has(e)));
  }
);

define(Set.prototype, "symmetricDifference",
  function symmetricDifference(other) {
    return this.difference(other).union(other.difference(this));
  }
);

define(Set.prototype, "isSubsetOf",
  function isSubsetOf(other) {
    return [...this].every(e => other.has(e));
  }
);

define(Set.prototype, "isSupersetOf",
  function isSupersetOf(other) {
    return other.isSubsetOf(this);
  }
);

define(Set.prototype, "isDisjointFrom",
  function isDisjointFrom(other) {
    return ![...this].some(e => other.has(e));
  }
);

define(Promise, "try",
  function tryImpl(func) {
    return new Promise(resolve => resolve(func()));
  }
);
