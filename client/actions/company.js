export const SHOW_COMPANIES = 'SHOW_COMPANIES';

export function showCompanies(json) {
  return {
    type: SHOW_COMPANIES,
    companies: json.data.children.map(child => child.data)
  };
}

export function fetchCompanies() {
  return dispatch => {
    return fetch('/api/companies')
      .then(req => req.json())
      .then(json => dispatch(showCompanies(json)));
  };
}
