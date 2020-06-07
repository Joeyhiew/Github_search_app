import Types from '../actions/types';
import SearchUser from './searchUser';
import initialState from './initialState';

describe('SearchUserReducer', ()=> {
    it('Should return default state', () => {
        const newState = SearchUser(undefined, {});
        expect(newState).toEqual(initialState);
    })

    it('Should return new state', () => {
        const change = [{title: 'Test 1'}]
        const newState = SearchUser(undefined, {
            type: Types.CHECK_USER_BEGIN,
            payload: change
        });
        expect(newState).toEqual({...initialState, loading: true});
    })
})