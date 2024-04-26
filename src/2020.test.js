import { describe, it, expect, assertThrows } from "./tests.js"

delete Promise.allSettled
delete String.prototype.matchAll
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

describe('String.prototype.matchAll', () => {
  const str = "test1test2"

  describe('with a simple string', () => {
    it('is converted to a global regexp', () => {
      const matches = [...str.matchAll('te.t')]
      expect(Array.from(matches[0])).toStrictEqual(["test"])
      expect(matches[0].index).toBe(0)
      expect(Array.from(matches[1])).toStrictEqual(["test"])
      expect(matches[1].index).toBe(5)
    })
  })

  describe('with a regexp', () => {
    describe('without global flag', () => {
      assertThrows(() => {
        str.matchAll(/./, 'x')
      }, TypeError, 'non-global RegExp')
    })

    describe('with global flag', () => {
      const matches = [...str.matchAll(/t(e)(st(\d?))/g)]
      expect(Array.from(matches[0])).toStrictEqual(["test1", "e", "st1", "1"])
      expect(matches[0].index).toBe(0)
      expect(Array.from(matches[1])).toStrictEqual(["test2", "e", "st2", "2"])
      expect(matches[1].index).toBe(5)
    })
  })
})
