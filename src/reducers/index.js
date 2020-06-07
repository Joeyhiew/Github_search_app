import { combineReducers } from 'redux';
import searchUser from './searchUser';

const allReducers = combineReducers({
    user: searchUser,
})
export default allReducers;