import { AsyncStorage } from 'react-native';
const DB_KEY = 'todoapp';

export const get = () => {
  return AsyncStorage.getItem(DB_KEY)
    .then((data) => {
      return JSON.parse(data) || {};
    });
}

export const set = (data) => {
  AsyncStorage.getItem(DB_KEY, JSON.stringify(data));
};
