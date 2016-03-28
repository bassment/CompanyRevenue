import { SHOW_COMPANIES } from '../actions/company';

export default function company(state = {items: []}, action) {
  switch (action.type) {
  case SHOW_COMPANIES: {
    return Object.assign({}, state, {
      items: action.posts
    });
  }
  default: {
    return state;
  }
  }
}
