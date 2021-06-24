
import React from 'react';
// import renderer from 'react-test-renderer';
import { render, shallow, mount } from 'enzyme';

import Results from './results.jsx';

describe('A suite', () => {

  it('Should blah blah', ()=>{
    const wrapper = mount(<Results echoes={[{"text":"hola","reversedText":"aloh","isPalindrome":false}]}></Results>);
    expect(wrapper.find(Results).length).toEqual(1);
  })

  // const component = renderer.create(
  //   <Results echoes={[{"text":"hola","reversedText":"aloh","isPalindrome":false}]}></Results>,
  // );



  // let tree = component.toJSON();



  // // expect(
  // //   getByTestId(document.documentElement, 'html-element'),
  // // ).toBeInTheDocument()
  // // expect(getByTestId(document.documentElement, 'svg-element')).toBeInTheDocument()
  // expect(
  //   queryByTestId(document.documentElement, 'does-not-exist'),
  // ).not.toBeInTheDocument()
  

  
});