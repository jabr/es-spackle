import { describe, it, expect } from "./tests.js"

delete Set.prototype.intersection
delete Set.prototype.union
delete Set.prototype.difference
delete Set.prototype.symmetricDifference
delete Set.prototype.isSubsetOf
delete Set.prototype.isSupersetOf
delete Set.prototype.isDisjointFrom
delete Promise.try
await import("./2025.js")

describe('Set.prototype', () => {
  const a = new Set([1,2,3])
  const aSub = new Set([1,2])
  const b = new Set([2,3,4])
  const c = new Set([4,5,6])
  const aUb = new Set([1,2,3,4,5,6])

  describe('.intersection', () => {
    it('returns a set containing only entries in both sets', () => {
      expect([...a.intersection(b)]).toStrictEqual([2,3])
      expect([...a.intersection(c)]).toStrictEqual([])
      expect([...b.intersection(c)]).toStrictEqual([4])
    })
  })

  describe('.union', () => {
    it('returns a set containing all entries in either set', () => {
      expect([...a.union(b)]).toStrictEqual([1,2,3,4])
      expect([...a.union(c)]).toStrictEqual([1,2,3,4,5,6])
      expect([...b.union(c)]).toStrictEqual([2,3,4,5,6])
    })
  })

  describe('.difference', () => {
    it('returns a set containing entries in the first set but not in the second', () => {
      expect([...a.difference(a)]).toStrictEqual([])
      expect([...a.difference(b)]).toStrictEqual([1])
      expect([...a.difference(c)]).toStrictEqual([1,2,3])
    })
  })

  describe('.symmetricDifference', () => {
    it('returns a set containing entries in the first or second set but not both', () => {
      expect([...a.symmetricDifference(a)]).toStrictEqual([])
      expect([...a.symmetricDifference(b)]).toStrictEqual([1,4])
      expect([...a.symmetricDifference(c)]).toStrictEqual([1,2,3,4,5,6])
    })
  })

  describe('.isSubsetOf', () => {
    it('returns true if the sets elements are in the second', () => {
      expect(a.isSubsetOf(a)).toBe(true)
      expect(aSub.isSubsetOf(a)).toBe(true)
      expect(a.isSubsetOf(aUb)).toBe(true)
    })

    it('returns false if the set has elements not in the second', () => {
      expect(a.isSubsetOf(b)).toBe(false)
      expect(a.isSubsetOf(aSub)).toBe(false)
      expect(a.isSubsetOf(c)).toBe(false)
      expect(aUb.isSubsetOf(a)).toBe(false)
    })
  })

  describe('.isSupersetOf', () => {
    it('returns true if the elements in the second set are all in the first', () => {
      expect(a.isSupersetOf(a)).toBe(true)
      expect(a.isSupersetOf(aSub)).toBe(true)
      expect(aUb.isSupersetOf(a)).toBe(true)
    })

    it('returns false if some elements of the second set are not in the first', () => {
      expect(a.isSupersetOf(b)).toBe(false)
      expect(aSub.isSupersetOf(a)).toBe(false)
      expect(a.isSupersetOf(c)).toBe(false)
      expect(a.isSupersetOf(aUb)).toBe(false)
    })
  })

  describe('.isDisjointFrom', () => {
    it('returns true if no elements in the first set are in the second', () => {
      expect(a.isDisjointFrom(c)).toBe(true)
      expect(c.isDisjointFrom(a)).toBe(true)
    })

    it('returns false if any elements in the first set are in the second', () => {
      expect(a.isDisjointFrom(b)).toBe(false)
      expect(a.isDisjointFrom(aSub)).toBe(false)
      expect(a.isDisjointFrom(aUb)).toBe(false)
    })
  })
})

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
