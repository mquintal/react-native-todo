import { TOGGLE_LOADING } from '../constants';

const reducer = (state=true, action={}) => {
  if (TOGGLE_LOADING === action.type) {
    return !state;
  }
  return state;
};

export default reducer;
