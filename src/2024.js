import { define } from "./utils.js";

if (!Promise.withResolvers) {
  define(Promise, "withResolvers",
    function withResolvers() {
      let resolve;
      let reject;
      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      })
      console.log('custom wrt')
      return { promise, resolve, reject };
    }
  )
}

// {Object,Map}.groupBy
// @todo
