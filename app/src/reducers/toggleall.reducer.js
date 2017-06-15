import { TOGGLE_ALL } from '../constants';

const reducer = (state=false, action={}) => {
  if (TOGGLE_ALL === action.type) {
    return action.payload.state;
  }
  return state;
}

export default reducer;
