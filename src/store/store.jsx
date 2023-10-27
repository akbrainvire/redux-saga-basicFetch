import userReducer from "../slices/userSlice";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import userSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(userSaga);

export default store;
