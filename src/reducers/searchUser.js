import Types from '../actions/types';
import initialState from './initialState';

const searchUser = (state = initialState, action) => {
    switch (action.type) {
        case Types.TO_SEARCH :
            return {
                ...state,
                text: action.payload
            };
        case Types.FETCH_REPO_BEGIN:
            return {
                ...state,
                loading: true,
                repoError: null
            };

        case Types.FETCH_REPO_SUCCESS:
            return {
                ...state,
                loading: false,
                repo: action.payload.products
            };

        case Types.FETCH_REPO_FAILURE:
            return {
                ...state,
                loading: false,
                repoError: action.payload.error,
                repo: []
            };
            case Types.FETCH_ORG_BEGIN:
                return {
                    ...state,
                    loading: true,
                    orgError: null
                };
    
            case Types.FETCH_ORG_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    org: action.payload.products
                };
    
            case Types.FETCH_ORG_FAILURE:
                return {
                    ...state,
                    loading: false,
                    orgError: action.payload.error,
                    org: []
                };
            case Types.CHECK_USER_BEGIN:
                return {
                    ...state,
                    loading: true,
                    error: null,
                    userFound: null,
                    profile: [],
                };
    
            case Types.CHECK_USER_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    profile: action.payload.products,
                    userFound: true
                };
    
            case Types.CHECK_USER_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload.error,
                    profile: [],
                    userFound: false
                };
            
        default:
            return state;
    }
}
export default searchUser;