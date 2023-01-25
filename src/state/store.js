import { combineReducers, configureStore } from "@reduxjs/toolkit";
import customSlice from "./customSlice"
import ContactSlice  from "./contactSlice"

import { persistStore, persistReducer, FLUSH, REHYDRATE, PERSIST, PAUSE, PURGE, REGISTER } from 'redux-persist';


import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};


const reducers = combineReducers({
    demo:customSlice,
    demoContact: ContactSlice
})

const persistedReducer = persistReducer(persistConfig, reducers);



export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export let persistor = persistStore(store);





