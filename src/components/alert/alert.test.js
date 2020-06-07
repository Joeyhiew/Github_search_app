import React from 'react';
import Alert from './alert';
import { shallow } from 'enzyme';

const setUp = (props={}) => {
    const component = shallow(<Alert {...props}/>);
    return component;
}

describe('Alert Component', () => {
    
    describe('Have error', () => {
        let component;
        beforeEach(() => {
            const props = {
                error: true
            };
            component = setUp(props);
        });

        it('Should render without errors', ()=> {
            const wrapper = component.find('.alertDiv');
            expect(wrapper.length).toBe(1);
        });

    });

    describe('No error', ()=> {
        let component;
        beforeEach(() => {
            component = setUp();
        });

        it('Should not render', ()=>{
            const wrapper = component.find('.alertDiv');
            expect(wrapper.length).toBe(0);
        });
    });
})