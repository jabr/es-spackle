import { define, globalIterator } from "./utils.js";

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

export function regExpEscape(string) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#escaping
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

define(RegExp, "escape", regExpEscape);

define(globalIterator(), "from",
  function *iteratorFrom(iteratorLike) {
    if (iteratorLike.next) {
      while (true) {
        const n = iteratorLike.next.call(iteratorLike);
        if (n.done) { return; }
        yield n.value;
      }
    }

    // just try iterating on it if we can just iterator on it
    for (const i of iteratorLike) {
      yield i;
    }
  }
);
