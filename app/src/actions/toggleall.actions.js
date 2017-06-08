import { TOGGLE_ALL } from '../constants';

export const toggleAll = () => {
  return (dispatch, getState) => {
    dispatch({ type: TOGGLE_ALL, payload: !getState().toggleAll });
  };
};
