import * as ActionTypes from '../constants/constants';

const initialState = { companies: [] };

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
  case ActionTypes.ADD_COMPANIES :
    return {
      companies: action.companies,
    };
  default:
    return state;
  }
};

export default companyReducer;
