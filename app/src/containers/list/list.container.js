import { connect } from 'react-redux';
import { ListView } from 'react-native';
import List from './list.component';
import todosSelector from './selectors';
import { FILTERS } from '../../constants';
import { changeTodo } from '../../actions/todo.actions';
import { addTodo, removeTodo } from '../../actions/todos.actions';
import { toggleTodo } from '../../actions/toggle.actions';
import { changeFilter } from '../../actions/filter.actions';
import { toggleAll } from '../../actions/toggleall.actions';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const filterItems = (items=[], filter=FILTERS.ALL) => {
  if (filter === FILTERS.ACTIVE) return items.filter((item) => !item.complete);
  if (filter === FILTERS.COMPLETE) return items.filter((item) => item.complete);
  return items;
}

const mapStateToProps = (state) => ({
  todo: state.todo,
  todos: ds.cloneWithRows(filterItems(todosSelector(state), state.filter) || []),
  nTodosActive: filterItems(state.todos || [], FILTERS.ACTIVE).length,
  filter: state.filter,
  loading: state.loading,
  toggleAll: state.toggleAll,
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddItem: () => dispatch(addTodo()),
    handleToggleAllComplete: () => dispatch(toggleAll()),
    handleChangeItem: (todo) => dispatch(changeTodo(todo)),
    handleRemoveItem: (key) => dispatch(removeTodo(key)),
    handleToggleComplete: (key, state) => dispatch(toggleTodo(key, state)),
    handleFilter: (filter) => dispatch(changeFilter(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
