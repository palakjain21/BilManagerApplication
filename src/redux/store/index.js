import { configureStore } from "@reduxjs/toolkit";
import { billReducer } from "../reducer/bills";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";
// const reducer = combineReducers({
//   bills: billReducer,
// });

// const initialState = {};
let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    bills: billReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  //   initialState,
});
sagaMiddleware.run(rootSaga);
export default store;
