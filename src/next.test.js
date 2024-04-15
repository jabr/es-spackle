import { describe, it } from "https://deno.land/std/testing/bdd.ts"
import { expect } from "https://deno.land/std/expect/mod.ts"

console.log(Promise, Promise.try)
delete Promise.try
console.log(Promise, Promise.try)
await import("./next.js")
console.log(Promise, Promise.try)

describe('Promise.try', () => {
  it('returns a resolved promise with return value of the passed function', async () => {
    const f = () => 42
    const p = Promise.try(f)
    expect(p).toBeInstanceOf(Promise)
    console.log(p)
    expect(await p).toBe(42)
  })
})
