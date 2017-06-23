import {
  CHANGE_TODO,
  ADD_TODO,
  REMOVE_TODO,
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

export const removeTodo = (key) => ({
  type: REMOVE_TODO,
  payload: key,
});

export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: filter,
});
