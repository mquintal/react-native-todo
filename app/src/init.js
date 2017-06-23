import { getDB } from './lib/db';
import { changeFilter } from './actions/filter.actions';
import { initTodos } from './actions/todos.actions';
import { toggleInitTodos } from './actions/toggle.actions';

const init = (store) => {
    getDB().then((data) => {
      store.dispatch(changeFilter(data.filter || 'ALL'));
      store.dispatch(initTodos(data.todos || []));
      store.dispatch(toggleInitTodos(data.completed || []));
    });
}

export default init;
