import { TOGGLE_TODO, TOGGLE_INIT } from '../constants';

export const toggleInitTodos = (keys) => ({
  type: TOGGLE_INIT,
  payload: keys || [],
});

export const toggleTodo = (key, complete) => ({
  type: TOGGLE_TODO,
  payload: { key, complete },
});
