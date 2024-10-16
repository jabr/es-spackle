import { define } from "./utils.js";

define(Promise, "withResolvers",
  function withResolvers() {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    })
    return { promise, resolve, reject };
  }
);

define(Object, "groupBy",
  function groupBy(array, callback) {
    const obj = {}
    let index = 0
    for (const entry of array) {
      const key = callback(entry, index++);
      (obj[key] ??= []).push(entry);
    }
    return obj
  }
);

define(Map, "groupBy",
  function groupBy(array, callback) {
    const map = new Map;
    let index = 0
    for (const entry of array) {
      const key = callback(entry, index++);
      let entries = map.get(key);
      if (!entries) { map.set(key, entries = []); }
      entries.push(entry);
    }
    return map
  }
);
