import { describe, it, expect } from "./tests.js"

delete Promise.allSettled
await import('./2020.js')

describe('Promise.allSettled', () => {
  describe('with an empty iterable', () => {
    it('resolves with an empty array', async () => {
      expect(await Promise.allSettled([])).toStrictEqual([])
    })
  })

  describe('with multiple promises', () => {
    it('returns an array with the status and results after all resolved or rejected', async () => {
      const a = Promise.withResolvers()
      const b = Promise.withResolvers()
      const c = Promise.withResolvers()
      const p = Promise.allSettled([a.promise, b.promise, c.promise])
      p.then(states => {
        expect(states[0]).toStrictEqual({status: 'fulfilled', value: 42})
        expect(states[1]).toStrictEqual({status: 'fulfilled', value: 'xx'})
        expect(states[2]).toStrictEqual({status: 'rejected', reason: new Error('failed!')})
      })
      a.resolve(42)
      b.resolve('xx')
      c.reject(new Error('failed!'))
      await p
    })
  })

  describe('with non-promise values', () => {
    it('returns an array with the values and a fulfilled status', async () => {
      const p = Promise.allSettled([42, 'xx'])
      p.then(states => {
        expect(states[0]).toStrictEqual({status: 'fulfilled', value: 42})
        expect(states[1]).toStrictEqual({status: 'fulfilled', value: 'xx'})
      })
      await p
    })
  })
})
