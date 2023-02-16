import { compose, createStore, applyMiddleware, Middleware } from "redux";

// Redux Logger
import logger from "redux-logger";

// Redux Persist
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Root-Reducer
import { rootReducer } from "./root-reducer";

// Redux Thunk
// import thunk from 'redux-thunk'

//Redux Saga
import createSagaMiddleware from "redux-saga";
//Root-Saga
import { rootSaga } from "./root-saga";

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfigs = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfigs = {
  key: "root", //persist the whole thing ( root level)
  storage, //localstorage
  //blacklist: ['user'],//which value to not persist
  whitelist: ["cart"], //which value to persist
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Permite o Logger apenas se não for Env de Produção, e então remove o 'false' do array caso seja
const middleWares = [process.env.NODE_ENV !== "production" && logger, sagaMiddleware].filter(
  (middleware): middleware is Middleware => Boolean(middleware)
); // usando o Saga

// const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean); // usando o Thunk

const composeEnchancer =
  (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnchancers = composeEnchancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnchancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
