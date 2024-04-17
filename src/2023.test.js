import { describe, it, expect, beforeEach } from "./tests.js"

delete Array.prototype.findLast
delete Array.prototype.findLastIndex
Int8Array.prototype.findLast = undefined
Int8Array.prototype.findLastIndex = undefined
await import("./2023.js")

describe('Array.prototype', () => {
  let array
  beforeEach(() => {
    array = ['a', 'bb', 'cccc', 'dd', 'eee']
  })

  describe('.findLast', () => {
    it('returns undefined if none are found', () => {
      expect(array.findLast(x => x.length > 5)).toBeUndefined()
    })

    it('returns the last item found', () => {
      expect(array.findLast(x => x.length === 2)).toBe('dd')
    })

    it('binds thisArg to callback invocation', () => {
      const thisArg = 3
      expect(array.findLast(function (x) { return x.length > this }, thisArg)).toBe('cccc')
    })
  })

  describe('.findLastIndex', () => {
    it('returns -1 if none are found', () => {
      expect(array.findLastIndex(x => x.length > 5)).toBe(-1)
    })

    it('returns the last item found', () => {
      expect(array.findLastIndex(x => x.length === 2)).toBe(3)
    })

    it('binds thisArg to callback invocation', () => {
      const thisArg = 3
      expect(array.findLastIndex(function (x) { return x.length > this }, thisArg)).toBe(2)
    })
  })
})

describe('%TypedArray%.prototype', () => {
  let array
  beforeEach(() => {
    array = new Int8Array([10, -5, 4, 3, -10, 3])
  })

  describe('.findLast', () => {
    it('returns undefined if none are found', () => {
      expect(array.findLast(x => x > 10)).toBeUndefined()
    })

    it('returns the last item found', () => {
      expect(array.findLast(x => x < 0)).toBe(-10)
    })

    it('binds thisArg to callback invocation', () => {
      const thisArg = 3
      expect(array.findLast(function (x) { return x > this }, thisArg)).toBe(4)
    })
  })

  describe('.findLastIndex', () => {
    it('returns -1 if none are found', () => {
      expect(array.findLastIndex(x => x > 10)).toBe(-1)
    })

    it('returns the last item found', () => {
      expect(array.findLastIndex(x => x < 0)).toBe(4)
    })

    it('binds thisArg to callback invocation', () => {
      const thisArg = 3
      expect(array.findLastIndex(function (x) { return x > this }, thisArg)).toBe(2)
    })
  })
})
