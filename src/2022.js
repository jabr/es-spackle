import { define } from "./utils.js"

if (!Object.hasOwn) {
  define(Object, "hasOwn",
    function hasOwn(object, property) {
      return Object.prototype.
        hasOwnProperty.call(object, property);
    }
  );
}

// {Array,...}.prototype.at
// @todo
