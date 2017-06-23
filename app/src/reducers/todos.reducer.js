import {
  ADD_TODO,
  REMOVE_TODO,
  INIT_TODOS,
} from '../constants';
import { setTodos } from '../lib/db';

const reducer = (state=[], action={}) => {
  let newState = state;

  switch (action.type) {
    case INIT_TODOS:
      return action.payload;
      break;
    case ADD_TODO:
      newState = [...state, {
        key: Date.now(),
        text: action.payload,
      }];
      setTodos(newState);
      break;
    case REMOVE_TODO:
      newState = state.filter((item) => item.key !== action.payload);
      setTodos(newState);
      break;
    default:
  }
  return newState;
};

export default reducer;
