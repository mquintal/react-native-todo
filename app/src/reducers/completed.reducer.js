import { TOGGLE_TODO, TOGGLE_ALL, TOGGLE_INIT } from '../constants';
import { setCompleted } from '../lib/db';

const reducer = (state = [], action = {}) => {
  let newState = state;

  if(action.type === TOGGLE_INIT) {
    return action.payload;
  } else if (action.type === TOGGLE_TODO) {
    const { key } = action.payload;
    const position = state.indexOf(key);

    if (position === -1) {
      newState = [...newState, key];
    } else {
      newState.splice(position, 1);
    }
    setCompleted(newState);
  } else if (action.type === TOGGLE_ALL) {
    newState = action.payload.state ? action.payload.keys : [];
    setCompleted(newState);
  }
  return newState;
}

export default reducer;
