import { describe, it, expect, assertRejects } from "./tests.js"

delete Promise.withResolvers
delete Object.groupBy
delete Map.groupBy
await import("./2024.js")

describe('Promise.withResolvers', () => {
  it('returns a promise and resolve/reject functions', () => {
    const { promise, resolve, reject } = Promise.withResolvers()
    expect(promise).toBeInstanceOf(Promise)
    expect(resolve).toBeInstanceOf(Function)
    expect(reject).toBeInstanceOf(Function)
  })

  it('returns a resolve function that resolves the promise', async () => {
    const { promise, resolve } = Promise.withResolvers()
    resolve(42)
    expect(await promise).toBe(42)
  })

  it('returns a reject function that rejects the promise', async () => {
    const { promise, reject } = Promise.withResolvers()
    reject(new Error('rejected'))
    assertRejects(async () => { await promise }, 'rejected')
  })
})

describe('Object.groupBy', () => {
  const array = [
    { t: 'dog', n: 'ellie' },
    { t: 'cat', n: 'koala' },
    { t: 'dog', n: 'milo' },
    { t: 'dog', n: 'oscar' },
    { t: 'cat', n: 'edgar' },
  ]

  it('partitions entries by the returned key', () => {
    expect(
      Object.groupBy(array, ({t}) => t)
    ).toStrictEqual({
      dog: [
        { t: 'dog', n: 'ellie' },
        { t: 'dog', n: 'milo' },
        { t: 'dog', n: 'oscar' },
      ],
      cat: [
        { t: 'cat', n: 'koala' },
        { t: 'cat', n: 'edgar' },
      ],
    })
  })
})

describe('Map.groupBy', () => {
  class Pet { constructor(name) { this.name = name } }
  class Dog extends Pet {}
  class Cat extends Pet {}
  const array = [
    new Dog('ellie'),
    new Cat('koala'),
    new Dog('milo'),
    new Dog('oscar'),
    new Cat('edgar'),
  ]

  it('partitions entries by the returned key', () => {
    const map = Map.groupBy(array, (t) => t.constructor)
    expect(map.get(Dog)).toStrictEqual([ array[0], array[2], array[3] ])
    expect(map.get(Cat)).toStrictEqual([ array[1], array[4] ])
  })
})
