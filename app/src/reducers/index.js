import { combineReducers } from 'redux';
import todos from './todos.reducer';
import filter from './filter.reducer';
import todo from './todo.reducer';
import loading from './loading.reducer';
import toggleAll from './toggleall.reducer';

export default combineReducers({
  todos,
  filter,
  todo,
  loading,
  toggleAll,
});
