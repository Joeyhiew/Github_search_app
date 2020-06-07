import Types from './types';

export const searchUsername = text => {
    return  {
        type: 'TO_SEARCH',
        payload: text
    }
}

export function fetchUserRepo(text) {
    return dispatch => {
      dispatch(fetchRepoBegin());
      return fetch('https://api.github.com/users/' +text + '/repos')
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchRepoSuccess(json));
          console.log(json)
          return json;
        })
        .catch(error => dispatch(fetchRepoFailure(error)));
    };
  }

export function fetchUserOrg(text) {
  return dispatch => {
    dispatch(fetchOrgBegin());
    return fetch('https://api.github.com/users/' +text + '/orgs')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchOrgSuccess(json));
        return json.products;
      })
      .catch(error => dispatch(fetchOrgFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchRepoBegin = () => ({
  type: Types.FETCH_REPO_BEGIN
});

export const fetchRepoSuccess = products => ({
  type: Types.FETCH_REPO_SUCCESS,
  payload: { products }
});

export const fetchRepoFailure = error => ({
  type: Types.FETCH_REPO_FAILURE,
  payload: { error }
});


export const fetchOrgBegin = () => ({
  type: Types.FETCH_ORG_BEGIN
});

export const fetchOrgSuccess = products => ({
  type: Types.FETCH_ORG_SUCCESS,
  payload: { products }
});

export const fetchOrgFailure = error => ({
  type: Types.FETCH_ORG_FAILURE,
  payload: { error }
});