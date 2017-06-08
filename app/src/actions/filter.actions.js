import { FILTER_TODOS } from '../constants';

export const changeFilter = (filter) => ({
  type: FILTER_TODOS,
  payload: filter,
});
