import * as ActionTypes from '../constants/constants';

// const baseURL = process.env.BASE_URL || (`http://localhost:3000`);

export function addCompanies(companies) {
  return {
    type: ActionTypes.ADD_COMPANIES,
    companies,
  };
}

export function fetchCompanies() {
  return (dispatch) => {
    return fetch(`/api/getCompanies`)
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
    fetch(`/api/addCompany`, {
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

export function updateCompany(company) {
  return {
    type: ActionTypes.UPDATE_COMPANY,
    company,
  };
}

export function updateCompanyRequest(company, fields) {
  return (dispatch) => {
    fetch(`/api/updateCompany`, {
      method: 'post',
      body: JSON.stringify({
        companyId: company._id,
        name: fields.name,
        earnings: fields.earnings,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then((res) => res.json()).then(res => dispatch(updateCompany(res.company)));
  };
}

export function deleteCompany(company) {
  return {
    type: ActionTypes.DELETE_COMPANY,
    company,
  };
}

export function deleteCompanyRequest(company) {
  return (dispatch) => {
    fetch(`/api/deleteCompany`, {
      method: 'post',
      body: JSON.stringify({
        companyId: company._id,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then(() => dispatch(deleteCompany(company)));
  };
}
