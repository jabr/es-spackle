import { define } from "./utils.js";

if (!Array.prototype.flat) {
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
}

if (!Array.prototype.flatMap) {
  define(Array.prototype, "flatMap",
    function flatMap(callback) {
      return this.map(callback).flat();
    }
  );
}

if (!Object.fromEntries) {
  define(Object, "fromEntries",
    function fromEntries(pairs) {
      const obj = {}
      for (const [key, value] of pairs) {
        obj[key] = value
      }
      return obj
    }
  );
}

if (!String.prototype.trimStart) {
  define(String.prototype, "trimStart",
    function trimStart() {
      return this.replace(/^\s+/, '');
    }
  );
}

if (!String.prototype.trimEnd) {
  define(String.prototype, "trimEnd",
    function trimEnd() {
      return this.replace(/\s+$/, '');
    }
  );
}
