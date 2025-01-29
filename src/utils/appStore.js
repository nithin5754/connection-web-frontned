import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import requestReducer from "./requestSlice";
import connectionReducer from "./connectionSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const rootReducers = combineReducers({
  user: userReducer,
  feed: feedReducer,
  request: requestReducer,
  connections: connectionReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const appStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let appPersister = persistStore(appStore);

export { appPersister, appStore };
