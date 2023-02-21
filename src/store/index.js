import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import apiMiddleware from '../middlewares/apiMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(apiMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
