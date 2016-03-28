import * as ActionTypes from '../constants/constants';

const baseURL = process.env.BASE_URL || (`http://localhost:3000`);

export function addPosts(companies) {
  return {
    type: ActionTypes.ADD_COMPANIES,
    companies,
  };
}

export function fetchCompanies() {
  return (dispatch) => {
    return fetch(`${baseURL}/api/getCompanies`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => dispatch(addPosts(response.companies)));
  };
}
