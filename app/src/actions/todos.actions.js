import {
  CHANGE_TODO,
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  TOGGLE_ALL,
  FILTER_TODOS,
  INIT_TODOS,
} from '../constants';

export const initTodos = (todos) => ({
  type: INIT_TODOS,
  payload: todos,
});

export const addTodo = () => {
  return (dispatch, getState) => {
    const { todo } = getState();

    if(todo.length > 0) {
      dispatch({ type: ADD_TODO, payload: getState().todo });
      dispatch({ type: CHANGE_TODO, payload: '' });
    }
  }
}

export const toggleTodo = (key, complete) => ({
  type: TOGGLE_TODO,
  payload: { key, complete },
});

export const toggleAllTodos = () => ({
  type: TOGGLE_ALL,
});

export const removeTodo = (key) => ({
  type: REMOVE_TODO,
  payload: key,
});

export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: filter,
});
