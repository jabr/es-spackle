import { describe, it } from "https://deno.land/std/testing/bdd.ts"
import { expect } from "https://deno.land/std/expect/mod.ts"

console.log(Promise, Promise.withResolvers)
delete Promise.withResolvers
console.log(Promise, Promise.withResolvers)
await import("./2024.js")
console.log(Promise, Promise.withResolvers)

describe('Promise.withResolvers', () => {
  it('returns a promise and its resolve and reject functions', async () => {
    const { promise, resolve, reject } = Promise.withResolvers()
    expect(promise).toBeInstanceOf(Promise)
    expect(resolve).toBeInstanceOf(Function)
    expect(reject).toBeInstanceOf(Function)
    resolve(42)
    expect(await promise).toBe(42)
  })
})
