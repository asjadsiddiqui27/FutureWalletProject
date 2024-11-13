import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist';

import appReducer from './Reducers/DataReducer';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  app: appReducer,
});



const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig,rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };


