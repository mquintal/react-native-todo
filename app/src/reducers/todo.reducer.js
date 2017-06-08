import { CHANGE_TODO } from '../constants';

const reducer = (state='', action) => {
  if(action.type === CHANGE_TODO) {
    return action.payload;
  }
  return state;
}

export default reducer;
