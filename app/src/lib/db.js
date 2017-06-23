import { get, set } from './storage';

export const setTodos = (todos) => {
  get().then((data) => set({...data, todos }));
}

export const setCompleted = (completed) => {
  get().then((data) => set({...data, completed }));
}

export const setFilter = (filter) => {
  get().then((data) => {
    set({...data, filter });
  });
}

export const getDB = () => {
  return get();
};
