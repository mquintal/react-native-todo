import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  TOGGLE_ALL,
} from '../constants';

const reducer = (state=[], action={}) => {

  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        key: Date.now(),
        text: action.payload,
        complete: false,
      }];
      break;
    case REMOVE_TODO:
      return state.filter((item) => item.key !== action.payload);
      break;
    case TOGGLE_TODO:
      const {key, complete} = action.payload;

      return state.map((item) => {
        if (item.key === key) {
          return {...item, complete };
        }
        return item;
      });
      break;
    case TOGGLE_ALL:
      return state.map((item) => ({...item, complete : action.payload}));
      break;
    default:
  }

  return state;
};

export default reducer;
