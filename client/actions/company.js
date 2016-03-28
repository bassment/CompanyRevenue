import * as ActionTypes from '../constants/constants';

const baseURL = process.env.BASE_URL || (`http://localhost:3000`);

export function addCompanies(companies) {
  return {
    type: ActionTypes.ADD_COMPANIES,
    companies,
  };
}

export function fetchCompanies() {
  return (dispatch) => {
    return fetch(`${baseURL}/api/getCompanies`)
      .then((response) => {
        return response.json();
      })
      .then((response) => dispatch(addCompanies(response.companies)));
  };
}

export function addCompany(company) {
  return {
    type: ActionTypes.ADD_COMPANY,
    name: company.name,
    earnings: company.earnings,
    _id: company._id,
  };
}

export function addCompanyRequest(company) {
  return (dispatch) => {
    fetch(`${baseURL}/api/addCompany`, {
      method: 'post',
      body: JSON.stringify({
        company: {
          name: company.name,
          earnings: company.earnings,
        },
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then((res) => res.json()).then(res => dispatch(addCompany(res.company)));
  };
}

export function deletePost(company) {
  return {
    type: ActionTypes.DELETE_COMPANY,
    company,
  };
}

export function deletePostRequest(company) {
  return (dispatch) => {
    fetch(`${baseURL}/api/deleteCompany`, {
      method: 'post',
      body: JSON.stringify({
        companyId: company._id,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then(() => dispatch(deletePost(company)));
  };
}
