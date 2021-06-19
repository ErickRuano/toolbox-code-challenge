const assert = require('chai').assert
const checkPalindrome = require('./checkPalindromeService')

describe('checkPalindrome', () => {
  it('should return false', () => {
    const result = checkPalindrome('hello')
    assert.equal(result, false)
  })

  it('should return true', () => {
    const result = checkPalindrome('hellolleh')
    assert.equal(result, true)
  })

  it('should return a boolean', () => {
    const result = checkPalindrome('hellolleh')
    assert.typeOf(result, 'boolean')
  })

  it('should return an invalid argument type error', () => {
    assert.throws(() => { checkPalindrome(0) }, Error, 'Invalid argument type')
  })
})
