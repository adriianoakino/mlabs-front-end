import { createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reduces from './ducks';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reduces,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
