import { render, screen } from '@testing-library/react';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { text } from 'express';

configure({ adapter: new Adapter() });

describe('counter testing', () => {
  let wrapper;

  beforeEach(() => { wrapper = shallow(<App />) })
  
  // Application State & Structure
  test('render the title of counter', () => {
    expect(wrapper.find("h1").text()).toContain("this is counter app")
  });
  test('render the value of state in a div', () => {
    expect(wrapper.find("#counter-value").text()).toBe("0")
  })

  // Increment Block
  test('render a button with text of `increment`', () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment")
  })
  test('render click event of INCREMENT button and INCREMENT counter value', () => {
    wrapper.find("#increment-btn").simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("1")
  })

  // Decrement Block
  test('render a button with text of `Decrement`', () => {
    expect(wrapper.find("#decrement-btn").text()).toBe("Decrement")
  })
  test('render click event of DECREMENT button and DECREMENT counter value', () => {
    wrapper.find("#decrement-btn").simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("-1")
  })
});



