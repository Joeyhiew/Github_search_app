import React from 'react';
import Card from './card';
import { shallow } from 'enzyme';

const setUp = (props={}) => {
    const component = shallow(<Card {...props}/>);
    return component;
}

describe('Card Component', () => {

    describe('No Data to display', ()=>{
        let component;
        beforeEach(()=> {
            const props ={
                data: [],
                attr: '',
            }
            component = setUp(props);
        })
        it('Should render No {Data}', ()=>{
            const wrapper = component.find('.noDataDiv');
            expect(wrapper.length).toBe(1);
        })
    });

    describe('Have data to display', () => {

        describe('Data is repository', ()=> {
            let component;
            beforeEach(()=> {
                const props ={
                    data: [{name:"Test1"}, {name:"Test2"}],
                    attr: 'Repositories'
                }
                component = setUp(props);
            });

            it('Should render Card', () => {
                const wrapper = component.find('.card');
                expect(wrapper.length).toBe(2);
            });

            it('Should render card title', () => {
                const wrapper = component.find('.card-title');
                expect(wrapper.length).toBe(2);
            });
        })

        describe('Data is organisation', ()=> {
            let component;
            beforeEach(()=> {
                const props ={
                    data: [{login:"Test1"}, {login:"Test2"}],
                    attr: 'Organisations'
                }
                component = setUp(props);
            });

            it('Should render Card', () => {
                const wrapper = component.find('.card');
                expect(wrapper.length).toBe(2);
            });

            it('Should render card title', () => {
                const wrapper = component.find('.card-title');
                expect(wrapper.length).toBe(2);
            });
        });

        describe('Wrong attribute tag', ()=> {
            let component;
            beforeEach(()=> {
                const props ={
                    data: [{login:"Test1"}, {login:"Test2"}],
                    attr: 'wrong'
                }
                component = setUp(props);
            });
            
            it('Should not render card title', () => {
                const wrapper = component.find('.card-title');
                expect(wrapper.length).toBe(0);
            });
        })

    })

})