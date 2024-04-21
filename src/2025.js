import { define } from "./utils.js";

if (!Set.prototype.intersection) {
  define(Set.prototype, "intersection",
    function intersection(other) {
      if (this.size > other.size) return other.intersection(this);
      return new Set([...this].filter(e => other.has(e)));
    }
  );
}

if (!Set.prototype.union) {
  define(Set.prototype, "union",
    function union(other) {
      return new Set([...this, ...other]);
    }
  );
}

if (!Set.prototype.difference) {
  define(Set.prototype, "difference",
    function difference(other) {
      return new Set([...this].filter(e => !other.has(e)));
    }
  );
}

if (!Set.prototype.symmetricDifference) {
  define(Set.prototype, "symmetricDifference",
    function symmetricDifference(other) {
      return this.difference(other).union(other.difference(this));
    }
  );
}

if (!Set.prototype.isSubsetOf) {
  define(Set.prototype, "isSubsetOf",
    function isSubsetOf(other) {
      return [...this].every(e => other.has(e));
    }
  );
}

if (!Set.prototype.isSupersetOf) {
  define(Set.prototype, "isSupersetOf",
    function isSupersetOf(other) {
      return other.isSubsetOf(this);
    }
  );
}

if (!Set.prototype.isDisjointFrom) {
  define(Set.prototype, "isDisjointFrom",
    function isDisjointFrom(other) {
      return ![...this].some(e => other.has(e));
    }
  );
}
