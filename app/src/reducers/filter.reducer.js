import { FILTER_TODOS, FILTERS } from '../constants';

const reducer = (state=FILTERS.ALL, action={}) => {
  if (action.type === FILTER_TODOS) {
    return action.payload;
  }
  return state
}

export default reducer;
