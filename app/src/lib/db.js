import { get, set } from './storage';

export const setToggleAll = (state) => {
  const db = get();

  set({...db, toggleAll: state });
}

export const setTodos = (todos) => {
  const db = get();

  set({...db, todos });
}

export const setFilter = (filter) => {
  const db = get();

  set({...db, filter });
}

export const getDB = () => {
  return get();
};
