import { AsyncStorage } from 'react-native';
const DB_KEY = 'todoapp';

/**
 * Gets stored data.
 *
 * @return {Promise}
 */
export const get = () => {
  return AsyncStorage.getItem(DB_KEY)
    .then((data) => {
      return JSON.parse(data || '{}');
    });
}

/**
 * Stores provided data.
 *
 * @param {Object} data to to be stored
 * @return {Promise}
 */
export const set = (data) => {
  return AsyncStorage.setItem(DB_KEY, JSON.stringify(data));
};
