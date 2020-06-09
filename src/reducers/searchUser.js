import Types from '../actions/types';
import initialState from './initialState';

const searchUser = (state = initialState, action) => {
    switch (action.type) {
        case Types.TO_SEARCH:
            return Object.assign(
                {}, 
                state, 
                {
                    text: action.payload
                }
            )

        case Types.FETCH_REPO_BEGIN:
            return Object.assign(
                {}, 
                state, 
                {
                    loading: true, 
                    repoError: null
                }
            )

        case Types.FETCH_REPO_SUCCESS:
            return Object.assign(
                {}, 
                state, 
                {
                    loading: false, 
                    repo: action.payload.products
                }
            )

        case Types.FETCH_REPO_FAILURE:
            return Object.assign(
                {}, 
                state, 
                {
                    loading: false, 
                    repo: [], 
                    repoError: action.payload.error
                }
            )

        case Types.FETCH_ORG_BEGIN:
            return  Object.assign(
                {}, 
                state, 
                {
                    loading: true, 
                    orgError: null
                }
            )

        case Types.FETCH_ORG_SUCCESS:
            return Object.assign(
                {}, 
                state, 
                {
                    loading: false, 
                    org: action.payload.products
                }
            )

        case Types.FETCH_ORG_FAILURE:
            return Object.assign(
                {}, 
                state, 
                {
                    loading: false, 
                    org: [], 
                    orgError: action.payload.error
                }
            )

        case Types.CHECK_USER_BEGIN:
            return Object.assign(
                {}, 
                state, 
                {
                    loading: true, 
                    error: null, 
                    userFound: null, 
                    profile: []
                }
            )


        case Types.CHECK_USER_SUCCESS:
            return Object.assign(
                {}, 
                state, 
                {
                    loading: false, 
                    profile: action.payload.products, 
                    userFound: true
                }
            )

        case Types.CHECK_USER_FAILURE:
            return Object.assign(
                {},
                state,
                {
                    loading: false, 
                    error: action.payload.error, 
                    profile: [], 
                    userFound: false
                }
            )
            
        default:
            return state;
    };
};
export default searchUser;