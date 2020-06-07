import React from 'react';
import Header from './header';
import { shallow } from 'enzyme';

const setUp = () => {
    const component = shallow(<Header/>);
    return component;
}

describe('Header component', () => {

    let component;
    beforeEach(()=> {
        component = setUp();
    });

    it('Should render without errors', () => {
      const wrapper = component.find('.header_container')
      expect(wrapper.length).toBe(1);
    });

    it('Should render Logo', () => {
        const wrapper = component.find('.iconDiv')
        expect(wrapper.length).toBe(1);
    });
  })