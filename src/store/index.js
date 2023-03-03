import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import apiMiddleware from '../middlewares/apiMiddleware';
import authMiddleware from '../middlewares/authMiddleware';
import rankingMiddleware from '../middlewares/rankingMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(apiMiddleware, authMiddleware, rankingMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
