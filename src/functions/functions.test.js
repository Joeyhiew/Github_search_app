import React from 'react';
import { checkNull, checkFound } from './functions';

describe('Test checkNull', () => {

    describe('Null data', ()=> {

        it('Should return true', () => {
            const data = []
            expect(checkNull(data)).toBe(true);
        })

    })

    describe('correct data', ()=> {

        it('Should return false', () => {
            const data = [{name:"test1"}, {name:"test2"}]
            expect(checkNull(data)).toBe(false);
        })

    });

    describe('undefined data', ()=> {

        it('Should return true', () => {
            expect(checkNull(undefined)).toBe(true);
        })

    });
})

describe('Test checkFound', () => {

    describe('UserFound is true', () => {
        it('Should return true', () => {
            expect(checkFound(true)).toBe(true);
        });
    });

    describe('UserFound is false', () => {
        it('Should return false', ()=> {
            expect(checkFound(false)).toBe(false);
        });
    });

    describe('Userfound is undefined', () => {
        it('Should return false', () => {
            expect(checkFound(undefined)).toBe(false);
        })
    })
})