
import React from 'react'
import { render, shallow, mount } from 'enzyme'

import Results from './results.jsx'

const echoes = {
  none: [],
  single: [{ text: 'hola', reversedText: 'aloh', isPalindrome: false }],
  multiple: [{ text: 'hola', reversedText: 'aloh', isPalindrome: false }, { text: 'ana', reversedText: 'ana', isPalindrome: true }]
}

describe('Results component', () => {
  it('Should have one result with text hola', () => {
    const wrapper = mount(<Results echoes={echoes.single} />)
    expect(wrapper.find('p[id="text-0"]').text()).toEqual('Original text: hola')
  })

  it('Should have one result with isPalindrome false and one with isPalindrome true', () => {
    const wrapper = mount(<Results echoes={echoes.multiple} />)
    expect(wrapper.find('p[id="isPalindrome-0"]').text()).toEqual('Is Palindrome: true')
    expect(wrapper.find('p[id="isPalindrome-1"]').text()).toEqual('Is Palindrome: false')
  })
})
