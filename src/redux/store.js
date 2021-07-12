import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import formReducer from "./form/form-reducer";
// import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const store = createStore(rootReducer, composeWithDevTools());
// const persistConfig = {
//   key: "items",
//   storage,
//   blacklist: ["filter"],
// };

const roodReducer = combineReducers({
  contacts: formReducer,
  // contacts: persistReducer(persistConfig, formReducer),
});
// const persistedReducer = persistReducer(persistConfig, roodReducer);

const store = configureStore({
  reducer: roodReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});
const persistor = persistStore(store);

export default { store, persistor };
