import React from 'react';
import Spinner from './spinner';
import { shallow } from 'enzyme';

const setUp = (props={}) => {
    const component = shallow(<Spinner {...props}/>);
    return component;
}

describe('Spinner component', () => {

    describe('Have loading', () => {
        
        let component;
        beforeEach(() => {
            const props = {
                loading: true
            };
            component = setUp(props);
        });

        it('Should render without errors', () => {
            const wrapper = component.find('.spinnerDiv');
            expect(wrapper.length).toBe(1);
        })
    });

    describe('No loading', () => {

        let component;
        beforeEach(() => {
            component = setUp()
        });

        it('Should no render', ()=> {
            const wrapper = component.find('.spinnerDiv');
            expect(wrapper.length).toBe(0);
        });

    });

})