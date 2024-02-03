import { combineReducers, configureStore } from "@reduxjs/toolkit"
import users from "./reducer/sliceUser"
import persistReducer from "redux-persist/es/persistReducer"
import storage from "redux-persist/lib/storage"
import persistStore from "redux-persist/es/persistStore"

const rootReducer = combineReducers({
	users: users,
})

const persistConfig = {
	key: "root",
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
})

export const persistor = persistStore(store)
