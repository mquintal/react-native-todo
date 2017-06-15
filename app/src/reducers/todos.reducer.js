import {
  ADD_TODO,
  REMOVE_TODO,
  INIT_TODOS,
} from '../constants';
import { setTodos } from '../lib/db';

const reducer = (state=[], action={}) => {
  switch (action.type) {
    case INIT_TODOS:
      return action.payload;
      break;
    case ADD_TODO:
      return [...state, {
        key: Date.now(),
        text: action.payload,
      }];
      break;
    case REMOVE_TODO:
      return state.filter((item) => item.key !== action.payload);
      break;
    default:
  }
  return state;
};

export default reducer;
