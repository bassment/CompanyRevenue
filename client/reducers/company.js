import update from 'react-addons-update';

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
  case ActionTypes.UPDATE_COMPANY :
    return Object.assign({}, state, {
      companies: state.companies.map((company) => {
        if (company._id === action.company._id) {
          return Object.assign({}, company, {
            name: action.company.name,
            earnings: action.company.earnings,
          });
        }

        return company;
      }),
    });
  case ActionTypes.DELETE_COMPANY :
    return {
      companies: state.companies.filter((company) => company._id !== action.company._id),
    };
  case ActionTypes.ADD_CHILD_COMPANY :
    return Object.assign({}, state, {
      companies: state.companies.map((company) => {
        if (company._id === action.parentId) {
          return Object.assign({}, company, {
            children: [
              action.child,
              ...company.children,
            ],
          });
        }

        return company;
      }),
    });
  default:
    return state;
  }
};

export default companyReducer;
