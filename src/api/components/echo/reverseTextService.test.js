const assert = require('chai').assert
const reverseText = require('./reverseTextService')

describe('reverseText', () => {
  it('should return "olleh', () => {
    const result = reverseText('hello')
    assert.equal(result, 'olleh')
  })

  it('should return a string', () => {
    const result = reverseText('hello')
    assert.typeOf(result, 'String')
  })

  it('should return an invalid argument type error', () => {
    assert.throws(() => { reverseText(0) }, Error, 'Invalid argument type')
  })
})
