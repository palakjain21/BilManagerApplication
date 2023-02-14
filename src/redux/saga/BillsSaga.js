import { takeEvery, put } from "redux-saga/effects";
import api from "../../api";
import {
  ADD_BILL,
  ADD_BILL_FAILURE,
  ADD_BILL_START,
  DELETE_BILL,
  DELETE_BILL_FAILURE,
  DELETE_BILL_START,
  GET_BILLS,
  GET_BILLS_FAILURE,
  GET_BILLS_START,
  UPDATE_BILL,
  UPDATE_BILL_FAILURE,
  UPDATE_BILL_START,
} from "../action-types/bills";
export function* getBillsSaga() {
  try {
    const bills = api.getBills();
    yield put({ type: GET_BILLS, bills });
  } catch (error) {
    yield put({ type: GET_BILLS_FAILURE, error });
  }
}

export function* createBillsSaga(action) {
  try {
    const bill = api.postBill(action.data);
    yield put({ type: ADD_BILL, data: bill });
  } catch (error) {
    yield put({ type: ADD_BILL_FAILURE, data: {} });
  }
}

export function* editBillsSaga(action) {
  try {
    const bills = api.editBill(action.data);
    yield put({ type: UPDATE_BILL, data: bills });
  } catch (error) {
    yield put({ type: UPDATE_BILL_FAILURE, error });
  }
}

export function* deleteBillsSaga(action) {
  try {
    const bills = api.deleteBill(action.data.id);
    yield put({ type: DELETE_BILL, bills });
  } catch (error) {
    yield put({ type: DELETE_BILL_FAILURE, error });
  }
}

const billsSaga = [
  takeEvery(GET_BILLS_START, getBillsSaga),
  takeEvery(ADD_BILL_START, createBillsSaga),
  takeEvery(UPDATE_BILL_START, editBillsSaga),
  takeEvery(DELETE_BILL_START, deleteBillsSaga),
];
export default billsSaga;
