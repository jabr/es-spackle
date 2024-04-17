import { describe, it, beforeEach, expect } from "./tests.js"

delete Object.hasOwn
delete Array.prototype.at
delete String.prototype.at
Float64Array.prototype.at = undefined
await import("./2022.js")

describe('Object.hasOwn', () => {
  let parent
  let child

  beforeEach(() => {
    parent = { a: 1, b: 2 }
    child = Object.create(parent)
    child.b = 3
    child.c = 4
  })

  it('returns false for inherited properties', () => {
    expect(Object.hasOwn(child, 'a')).toBe(false)
  })

  it('returns true for properties defined on itself', () => {
    expect(Object.hasOwn(parent, 'a')).toBe(true)
    expect(Object.hasOwn(child, 'c')).toBe(true)
  })

  it('returns true for inherited properties overriden on itself', () => {
    expect(Object.hasOwn(parent, 'b')).toBe(true)
    expect(Object.hasOwn(child, 'b')).toBe(true)
  })
})

describe('Array.prototype.at', () => {
  const array = ['a', 'b', 'c']

  it('supports zero and positive indexes', () => {
    expect(array.at(0)).toBe('a')
    expect(array.at(1)).toBe('b')
    expect(array.at(2)).toBe('c')
  })

  it('supports negative indexes', () => {
    expect(array.at(-1)).toBe('c')
    expect(array.at(-2)).toBe('b')
    expect(array.at(-3)).toBe('a')
  })

  it('returns undefined for out-of-bound indexes', () => {
    expect(array.at(4)).toBeUndefined()
    expect(array.at(-4)).toBeUndefined()
  })
})

describe('String.prototype.at', () => {
  const string = 'abc'

  it('supports zero and positive indexes', () => {
    expect(string.at(0)).toBe('a')
    expect(string.at(1)).toBe('b')
    expect(string.at(2)).toBe('c')
  })

  it('supports negative indexes', () => {
    expect(string.at(-1)).toBe('c')
    expect(string.at(-2)).toBe('b')
    expect(string.at(-3)).toBe('a')
  })

  it('returns undefined for out-of-bound indexes', () => {
    expect(string.at(4)).toBeUndefined()
    expect(string.at(-4)).toBeUndefined()
  })
})

describe('%TypedArray%.prototype.at', () => {
  const array = new Float64Array([ 0.1, 2.3e6, Math.PI ])

  it('supports zero and positive indexes', () => {
    expect(array.at(0)).toBe(0.1)
    expect(array.at(1)).toBe(2.3e6)
    expect(array.at(2)).toBe(Math.PI)
  })

  it('supports negative indexes', () => {
    expect(array.at(-1)).toBe(Math.PI)
    expect(array.at(-2)).toBe(2.3e6)
    expect(array.at(-3)).toBe(0.1)
  })

  it('returns undefined for out-of-bound indexes', () => {
    expect(array.at(4)).toBeUndefined()
    expect(array.at(-4)).toBeUndefined()
  })
})
