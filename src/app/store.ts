import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import counterReducer from "../features/counter/counterSlice";
import sandwichReducer from "../features/sandwich/sandwichSlice";

import productReducer from "../features/products/productSlice";
import cartReducer from "../features/products/cart/cartSlice";

import authReducer from "../features/auth/authSlice";
import apodReducer from "../features/apod/apodSlice";

import { usersApi } from "../features/users/userApi";
import { weatherApi } from "../features/WeatherApp/types/weatherApi";

import cryptoReducer from "../features/crypto/cryptoSlice";
import { cryptoApi } from "../features/crypto/cryptoApi";

// -------------------- ROOT REDUCER --------------------

const rootReducer = combineReducers({
  counter: counterReducer,
  sandwich: sandwichReducer,
  products: productReducer,
  cart: cartReducer,
  auth: authReducer,
  apod: apodReducer,
  crypto: cryptoReducer,

  // RTK Query
  [usersApi.reducerPath]: usersApi.reducer,
  [weatherApi.reducerPath]: weatherApi.reducer,
  [cryptoApi.reducerPath]: cryptoApi.reducer,
});

// -------------------- PERSIST CONFIG --------------------

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    usersApi.reducerPath,
    weatherApi.reducerPath,
    "counter",
    "crypto",
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// -------------------- STORE --------------------

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefault) =>
    getDefault({ serializableCheck: false })
      .concat(weatherApi.middleware)
      .concat(usersApi.middleware)
      .concat(cryptoApi.middleware),
});

// -------------------- PERSISTOR --------------------

export const persistor = persistStore(store);

// -------------------- TYPES --------------------

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;