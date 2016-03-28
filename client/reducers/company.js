import * as ActionTypes from '../constants/constants';

const initialState = { companies: [] };

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
  case ActionTypes.ADD_COMPANIES :
    return {
      companies: action.companies,
    };
  case ActionTypes.ADD_COMPANY :
    return {
      companies: [
        {
          name: action.name,
          earnings: action.earnings,
          _id: action._id,
        },
        ...state.companies,
      ],
    };
  default:
    return state;
  }
};

export default companyReducer;
