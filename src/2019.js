import { define } from "./utils.js";

define(Array.prototype, "flat",
  function flat(depth = 1) {
    return this.reduce((arr, entry) => {
      if (Array.isArray(entry)) {
        return arr.concat(
          depth > 1 ? entry.flat(depth - 1) : entry
        );
      }
      return arr.concat([entry]);
    }, []);
  }
);

define(Array.prototype, "flatMap",
  function flatMap(callback) {
    return this.map(callback).flat();
  }
);

define(Object, "fromEntries",
  function fromEntries(pairs) {
    const obj = {}
    for (const [key, value] of pairs) {
      obj[key] = value
    }
    return obj
  }
);

define(String.prototype, "trimStart",
  function trimStart() {
    return this.replace(/^\s+/, '');
  }
);

define(String.prototype, "trimEnd",
  function trimEnd() {
    return this.replace(/\s+$/, '');
  }
);
