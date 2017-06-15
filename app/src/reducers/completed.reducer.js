import { TOGGLE_TODO, TOGGLE_ALL } from '../constants';

const reducer = (state = [], action = {}) => {
  if (action.type === TOGGLE_TODO) {
    const { key } = action.payload;
    const position = state.indexOf(key);

    if( position === -1 ) {
      return [...state, key];
    }
    state.splice(position, 1);
  } else if (action.type === TOGGLE_ALL){
    return action.payload.state ? action.payload.keys : [];
  }
  return state;
}

export default reducer;
