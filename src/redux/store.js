import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { filterReducer } from './filterSlice';
import { credentialsSlice } from './credentialsSlice';
import { contactsApi } from './contactsSlice';
import { authApi } from './authSlice';

const persistConfig = { key: 'authCredentials', storage };
const persistedReducer = persistReducer(
  persistConfig,
  credentialsSlice.reducer
);

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [credentialsSlice.name]: persistedReducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);
