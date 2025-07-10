import { describe, it, expect } from "./tests.js"

delete globalThis.Iterator
Uint8Array.prototype.toBase64 = undefined
Uint8Array.prototype.toHex = undefined
Uint8Array.fromBase64 = undefined
Uint8Array.fromHex = undefined
await import("./next.js")

describe('Iterator.range', () => {
  it('returns an interator for the given range [n,m)', () => {
    expect([...Iterator.range(3, 7)]).toStrictEqual([3, 4, 5, 6])
  })

  it('returns an iterator from [0,n) when only one argument is given', () => {
    expect([...Iterator.range(5)]).toStrictEqual([0, 1, 2, 3, 4])
  })

  it('returns nothing when the start is greater or equal to the end', () => {
    expect([...Iterator.range(7, 3)]).toStrictEqual([])
  })

  it('increments by the optional step value', () => {
    expect([...Iterator.range(0, 10, 2)]).toStrictEqual([0, 2, 4, 6, 8])
  })

  it('returns nothing when the step is 0', () => {
    expect([...Iterator.range(3, 7, 0)]).toStrictEqual([])
  })

  it('decrements by the step value when negative and start is greater than end', () => {
    expect([...Iterator.range(7, 3, -1)]).toStrictEqual([7, 6, 5, 4])
  })

  it('returns nothing when the step is negative and start is less than or equal to the end', () => {
    expect([...Iterator.range(3, 7, -1)]).toStrictEqual([])
  })
})

describe('Uint8Array', () => {
  const array = new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]);

  describe('.prototype', () => {
    describe('.toBase64', () => {
      it('returns the expected string', () => {
        expect(array.toBase64()).toBe('SGVsbG8gV29ybGQ=')
      })
    })

    describe('.toHex', () => {
      it('returns the expected string', () => {
        expect(array.toHex()).toBe('48656c6c6f20576f726c64')
      })
    })
  })

  describe('.fromBase64', () => {
    it('returns the expected array', () => {
      expect(Uint8Array.fromBase64('SGVsbG8gV29ybGQ=')).toStrictEqual(array)
    })
  })

  describe('.fromHex', () => {
    it('returns the expected array', () => {
      expect(Uint8Array.fromHex('48656c6c6f20576f726c64=')).toStrictEqual(array)
    })
  })
})
