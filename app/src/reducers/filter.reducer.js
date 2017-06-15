import { FILTER_TODOS, FILTERS } from '../constants';
import { setFilter } from '../lib/db';

const reducer = (state=FILTERS.ALL, action={}) => {

  if (action.type === FILTER_TODOS) {
    setFilter(action.payload);
    return action.payload;
  }
  return state;
}

export default reducer;
