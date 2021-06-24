
import React from 'react';
import { render, shallow, mount } from 'enzyme';

import Results from './results.jsx';

const echoes = {
  none : [],
  single : [{"text":"hola","reversedText":"aloh","isPalindrome":false}],
  multiple : [{"text":"hola","reversedText":"aloh","isPalindrome":false}, {"text":"ana","reversedText":"ana","isPalindrome":true}],
}

describe('A suite', () => {

  it('Should blah blah', ()=>{
    const wrapper = mount(<Results echoes={echoes.single}></Results>);
    expect(wrapper.find('p[id="text-0"]').text()).toEqual('Original text: hola');
  })

  

  
});