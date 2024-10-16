import { describe, it, expect, beforeEach } from "./tests.js"

delete Array.prototype.findLast
delete Array.prototype.findLastIndex
delete Array.prototype.toReversed
delete Array.prototype.toSorted
delete Array.prototype.with
delete Array.prototype.toSpliced
Int8Array.prototype.findLast = undefined
Int8Array.prototype.findLastIndex = undefined
Int8Array.prototype.toReversed = undefined
Int8Array.prototype.toSorted = undefined

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

  describe('.toReversed', () => {
    it('returns the array reversed', () => {
      expect(array.toReversed()).toEqual(['eee', 'dd', 'cccc', 'bb', 'a'])
    })

    it('does not modify the original array', () => {
      expect(array.toReversed()).toBeInstanceOf(Array)
      expect(array).toEqual(['a', 'bb', 'cccc', 'dd', 'eee'])
    })
  })

  describe('.toSorted', () => {
    it('returns the array sorted', () => {
      expect(array.toSorted()).toEqual(['a', 'bb', 'cccc', 'dd', 'eee'])
    })

    it('does not modify the original array', () => {
      expect(array.toSorted()).toBeInstanceOf(Array)
      expect(array).toEqual(['a', 'bb', 'cccc', 'dd', 'eee'])
    })

    describe('with a comparison function', () => {
      const cmp = (a, b) => a.length - b.length

      it('uses the comparison function to sort', () => {
        expect(array.toSorted(cmp)).toEqual(['a', 'bb', 'dd', 'eee', 'cccc'])
      })

      it('does not modify the original array', () => {
        expect(array.toSorted(cmp)).toBeInstanceOf(Array)
        expect(array).toEqual(['a', 'bb', 'cccc', 'dd', 'eee'])
      })
    })
  })

  describe('.with', () => {
    it('returns the array with the indexed value replaced', () => {
      expect(array.with(2, 'ZZZ')).toEqual(['a', 'bb', 'ZZZ', 'dd', 'eee'])
    })

    it('does not modify the original array', () => {
      expect(array.with(2, 'ZZZ')).toBeInstanceOf(Array)
      expect(array).toEqual(['a', 'bb', 'cccc', 'dd', 'eee'])
    })

    describe('with a negative index', () => {
      it('replaces the value at the index from the end of the array', () => {
        expect(array.with(-1, 'ZZZ')).toEqual(['a', 'bb', 'cccc', 'dd', 'ZZZ'])
      })
    })

    describe('with an index out-of-bounds', () => {
      it('too small throws a RangeError', () => {
        expect(() => array.with(-10, 'ZZZ')).toThrow(RangeError)
      })

      it('too large throws a RangeError', () => {
        expect(() => array.with(10, 'ZZZ')).toThrow(RangeError)
      })
    })
  })

  describe('.toSpliced', () => {
    it('returns the array with the spliced values', () => {
      expect(array.toSpliced(2, 2, 'x', 'y', 'z')).toEqual(['a', 'bb', 'x', 'y', 'z', 'eee'])
    })

    it('does not modify the original array', () => {
      expect(array.toSpliced(2, 2, 'x', 'y', 'z')).toBeInstanceOf(Array)
      expect(array).toEqual(['a', 'bb', 'cccc', 'dd', 'eee'])
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

  describe('.toReversed', () => {
    it('returns the array reversed', () => {
      expect(array.toReversed()).toEqual(new Int8Array([3, -10, 3, 4, -5, 10]))
    })

    it('does not modify the original array', () => {
      expect(array.toReversed()).toBeInstanceOf(Int8Array)
      expect(array).toEqual(new Int8Array([10, -5, 4, 3, -10, 3]))
    })
  })

  describe('.toSorted', () => {
    it('returns the array sorted', () => {
      expect(array.toSorted()).toEqual(new Int8Array([-10, -5, 3, 3, 4, 10]))
    })

    it('does not modify the original array', () => {
      expect(array.toSorted()).toBeInstanceOf(Int8Array)
      expect(array).toEqual(new Int8Array([10, -5, 4, 3, -10, 3]))
    })

    describe('with a comparison function', () => {
      const cmp = (a, b) => Math.abs(a) - Math.abs(b)

      it('uses the comparison function to sort', () => {
        expect(array.toSorted(cmp)).toEqual(new Int8Array([3, 3, 4, -5, 10, -10]))
      })

      it('does not modify the original array', () => {
        expect(array.toSorted(cmp)).toBeInstanceOf(Int8Array)
        expect(array).toEqual(new Int8Array([10, -5, 4, 3, -10, 3]))
      })
    })
  })

  describe('.with', () => {
    it('returns the array with the indexed value replaced', () => {
      expect(array.with(2, 42)).toEqual(new Int8Array([10, -5, 42, 3, -10, 3]))
    })

    it('does not modify the original array', () => {
      expect(array.with(2, 42)).toBeInstanceOf(Int8Array)
      expect(array).toEqual(new Int8Array([10, -5, 4, 3, -10, 3]))
    })

    describe('with a negative index', () => {
      it('replaces the value at the index from the end of the array', () => {
        expect(array.with(-1, 42)).toEqual(new Int8Array([10, -5, 4, 3, -10, 42]))
      })
    })

    describe('with an index out-of-bounds', () => {
      it('too small throws a RangeError', () => {
        expect(() => array.with(-10, 42)).toThrow(RangeError)
      })

      it('too large throws a RangeError', () => {
        expect(() => array.with(10, 42)).toThrow(RangeError)
      })
    })
  })
})
