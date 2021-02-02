import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import persistReducer from './persistReducer';

import rootSagas from './modules/rootSagas';
import rootReducers from './modules/rootReducers';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducer(rootReducers), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export { store, persistor };
