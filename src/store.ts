import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productReducer from "./components/slice/slice";
import cartReducer from "./components/slice/slice";
import rootSaga from "./components/saga/saga";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
