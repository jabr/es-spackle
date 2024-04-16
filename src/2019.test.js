import { describe, it, expect } from "./tests.js"

delete Array.prototype.flat
delete Object.fromEntries
delete String.prototype.trimStart
delete String.prototype.trimEnd
await import("./2019.js")

describe('Array.prototype.flat', () => {
  describe('with a flat array', () => {
    it('returns the array', () => {
      expect(['a', 'b', 'c'].flat()).toStrictEqual(['a', 'b', 'c'])
    })
  })

  describe('with a nested array', () => {
    it('returns a flattened array', () => {
      expect(['a', ['b1', 'b2'] , 'c'].flat()).toStrictEqual(['a', 'b1', 'b2', 'c'])
    })
  })

  describe('with a deeply nested array', () => {
    const array = ['a', ['b1', 'b2'], ['c1', ['c2a', 'c2b']]]

    describe('and no depth specified', () => {
      it('returns an array flatten one level', () => {
        expect(array.flat()).toStrictEqual([
          'a',
          'b1',
          'b2',
          'c1',
          ['c2a', 'c2b']
        ])
      })
    })

    describe('and a large depth specified', () => {
      it('returns a completely flattened array', () => {
        expect(array.flat(10)).toStrictEqual([
          'a',
          'b1',
          'b2',
          'c1',
          'c2a',
          'c2b',
        ])
      })
    })
  })
})

describe('Object.fromEntries', () => {
  describe('with an empty array', () => {
    it('returns an empty object', () => {
      expect(Object.fromEntries([])).toStrictEqual({})
    })
  })

  describe('with an array of key/value pairs', () => {
    it('returns an object with the key/value pairs', () => {
      expect(
        Object.fromEntries([['a', 101], ['b', 202], ['c', 303]])
      ).toStrictEqual({
        a: 101,
        b: 202,
        c: 303,
      })
    })
  })
})

describe('String.prototype.trimStart', () => {
  it('does nothing if there is no whitespace at the start', () => {
    expect("abc".trimStart()).toBe("abc")
  })

  it('does not remove whitespace from the end', () => {
    expect("abc \n".trimStart()).toBe("abc \n")
  })

  it('removes whitespace from the start', () => {
    expect(" \t\n\v abc".trimStart()).toBe("abc")
    expect(" \t\n\v abc\n".trimStart()).toBe("abc\n")
  })
})

describe('String.prototype.trimEnd', () => {
  it('does nothing if there is no whitespace at the end', () => {
    expect("abc".trimEnd()).toBe("abc")
  })

  it('does not remove whitespace from the start', () => {
    expect("  abc".trimEnd()).toBe("  abc")
  })

  it('removes whitespace from the end', () => {
    expect("abc \t\n\v ".trimEnd()).toBe("abc")
    expect("\tabc \t\n\v ".trimEnd()).toBe("\tabc")
  })
})
