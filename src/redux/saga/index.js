import { all } from "redux-saga/effects";
import billsSaga from "./BillsSaga";

export default function* rootSaga() {
  yield all([...billsSaga]);
}
