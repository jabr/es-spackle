import { describe, it, beforeEach, expect } from "./tests.js"

delete Object.hasOwn
delete Array.prototype.at
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

describe('%Indexable%.prototype.at', () => {
  const indexable = ['a', 'b', 'c']

  it('supports zero and positive indexes', () => {
    expect(indexable.at(0)).toBe('a')
    expect(indexable.at(1)).toBe('b')
    expect(indexable.at(2)).toBe('c')
  })

  it('supports negative indexes', () => {
    expect(indexable.at(-1)).toBe('c')
    expect(indexable.at(-2)).toBe('b')
    expect(indexable.at(-3)).toBe('a')
  })

  it('returns undefined for out-of-bound indexes', () => {
    expect(indexable.at(4)).toBeUndefined()
    expect(indexable.at(-4)).toBeUndefined()
  })
})
