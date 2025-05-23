import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import adminReducer from "./adminSlice";
import userReducer from "./userSlice";
import { combineReducers } from "redux";
// Combine reducers
const rootReducer = combineReducers({
  admin: adminReducer,
  user: userReducer,
  
});

// Persist config
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
 