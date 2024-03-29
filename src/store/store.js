import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { logger } from "redux-logger";
import { rootReducer } from "./root-reducer";

const persisConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persisConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === "production" && logger].filter(
  Boolean
);

const composeEnhancer =
  (process.env.NODE_ENV === "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
