import { createSelector } from 'reselect';

const todosSelector = (state = {}) => state.todos;
const completedSelector = (state = {}) => state.completed;

export default createSelector(
  todosSelector,
  completedSelector,
  (todos, completed) => {
    return (todos || []).map(todo => {
      if(completed.indexOf(todo.key) > -1) {
        return {...todo, complete: true}
      }
      return todo;
    });
  }
);
