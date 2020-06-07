import React from 'react';
import Form from './form';
import { shallow } from 'enzyme';

const setUp = (props={}) => {
    const component = shallow(<Form {...props}/>);
    return component;
}

describe('Form Search Component', ()=>{

    let component;
    beforeEach(()=>{
        const props = {
            text: ''
        }
        component = setUp(props);
    })

    it('Should render without error', () => {
        const wrapper = component.find('.formDiv');
        expect(wrapper.length).toBe(1);
    })
})