import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import init from './init';

const store = createStore(reducers, applyMiddleware(logger, thunk));
init(store);

export default store;
