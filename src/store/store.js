import { compose, createStore, applyMiddleware } from 'redux'

// Redux Logger
import logger from 'redux-logger'

// Redux Persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Root-Reducer
import { rootReducer } from './root-reducer'

// Redux Thunk
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root', //persist the whole thing ( root level)
  storage, //localstorage
  //blacklist: ['user'],//which value to not persist 
  whitelist: ['cart']//which value to persist 
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Permite o Logger apenas se não for Env de Produção, e então remove o 'false' do array caso seja
const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean);

const composeEnchancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const composedEnchancers = composeEnchancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnchancers)

export const persistor = persistStore(store) 