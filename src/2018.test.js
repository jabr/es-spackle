import { describe, it, expect, assertRejects, spy, assertSpyCall } from "./tests.js"

delete Promise.prototype.finally
await import('./2018.js')

describe('Promise.finally', () => {
  describe('on a rejected promise', () => {
    it('rejects with the original reason', async () => {
      const p = Promise.reject('reason')
      const fn = spy(() => 42)
      assertRejects(() => p.finally(fn), 'reason')
      try { await p } catch {}
      assertSpyCall(fn, 0, { args: [], returned: 42 })
    })
  })

  describe('on a resolved promise', () => {
    it('resolves with the original value', async () => {
      const p = Promise.resolve('value')
      const fn = spy(() => 42)
      expect(await p.finally(fn)).toBe('value')
      assertSpyCall(fn, 0, { args: [], returned: 42 })
    })
  })

  describe('that throws', () => {
    it('rejects the original promise with the reason from finally', async () => {
      const p = Promise.resolve('value')
      const fn = spy(() => { throw 'reason' })
      assertRejects(() => p.finally(fn), 'reason')
      await p
      assertSpyCall(fn, 0, { args: []})
    })
  })

  describe('that rejects', () => {
    it('rejects the original promise with the reason from finally', async () => {
      const p = Promise.resolve('value')
      const fn = spy(() => Promise.reject('reason'))
      assertRejects(() => p.finally(fn), 'reason')
      await p
      assertSpyCall(fn, 0, { args: []})
    })
  })

  describe('with no callback', () => {
    it('does nothing', async () => {
      const p = Promise.resolve('value')
      expect(await p.finally()).toBe('value')
      expect(await p.finally(null)).toBe('value')
      expect(await p.finally(42)).toBe('value')
      expect(await p.finally('xxx')).toBe('value')
    })
  })
})
