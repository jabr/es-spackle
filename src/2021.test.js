import { describe, it, expect, assertRejects, assertThrows } from "./tests.js"

delete Promise.any
delete String.prototype.replaceAll
await import('./2021.js')

describe('Promise.any', () => {
  describe('with an empty iterable', () => {
    it('rejects with an aggregate error', async () => {
      assertRejects(() => Promise.any([]), 'All promises were rejected')
    })
  })

  describe('with multiple resolving promises', () => {
    it('resolves with the first promise to resolve', async () => {
      const a = Promise.withResolvers()
      const b = Promise.withResolvers()
      const c = Promise.withResolvers()
      const p = Promise.any([a.promise, b.promise, c.promise])
      p.then(v => expect(v).toBe(42))
      b.resolve(42)
      a.resolve('xx')
      await p
    })
  })

  describe('with multiple rejecting promises and one resolving promise', () => {
    it('resolves with the resolving promise', async () => {
      const a = Promise.withResolvers()
      const b = Promise.withResolvers()
      const c = Promise.withResolvers()
      const p = Promise.any([a.promise, b.promise, c.promise])
      p.then(v => expect(v).toBe(42))
      a.reject(new Error('fail 1!'))
      c.reject(new Error('fail 2!'))
      b.resolve(42)
      await p
    })
  })

  describe('with all promises rejecting', () => {
    it('rejects with an error containing all of the rejections', async () => {
      const a = Promise.withResolvers()
      const b = Promise.withResolvers()
      const c = Promise.withResolvers()
      const p = Promise.any([a.promise, b.promise, c.promise])
      p.catch(e => expect(e.message).toBe('All promises were rejected'))
      a.reject(new Error('fail 1!'))
      b.reject(new Error('fail 2!'))
      c.reject(new Error('fail 3!'))
      assertRejects(() => p)
    })
  })
})

describe('String.prototype.replaceAll', () => {
  describe('with a simple string', () => {
    it('replaces all instances of the string', () => {
      expect("a-a-a".replaceAll('a', 'b')).toBe("b-b-b")
    })
  })

  describe('with a string containing regexp characters', () => {
    it('replaces all instances of the string (not as a regexp', () => {
      expect("a-b-.*-.*".replaceAll('.*', 'x')).toBe('a-b-x-x')
    })
  })

  describe('with a regexp', () => {
    describe('without global flag', () => {
      assertThrows(() => {
        "a-b-c".replaceAll(/./, 'x')
      }, TypeError, 'non-global RegExp')
    })

    describe('with global flag', () => {
      expect("a-b-c".replaceAll(/./g, 'x')).toBe('xxxxx')
    })
  })
})
