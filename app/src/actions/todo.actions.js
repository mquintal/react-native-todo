import { CHANGE_TODO } from '../constants';

export const changeTodo = (todo) => ({
  type: CHANGE_TODO,
  payload: todo,
});
