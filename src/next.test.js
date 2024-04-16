import { describe, it, expect } from "./tests.js"

delete Promise.try
await import("./next.js")

describe('Promise.try', () => {
  it('returns a promise', () => {
    expect(Promise.try(() => null)).toBeInstanceOf(Promise)
  })

  describe('with a function returning a value', () => {
    it('returns a resolved promise with that value', async () => {
      const p = Promise.try(() => 42)
      expect(await p).toBe(42)
    })
  })

  describe('with a function returning a promise', () => {
    it('returns that pending promise', async () => {
      const { promise, resolve } = Promise.withResolvers()
      const p = Promise.try(() => promise)
      p.then((v) => expect(v).toBe(42))
      resolve(42)
      await p
    })
  })
})
