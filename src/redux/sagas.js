import { call, takeEvery, put, delay } from "redux-saga/effects";
import getTodos from "../api";
import { FETCH_DATA, fetchDataSuccess, fetchDataError } from "./actions";

function* getTestData() {
  try {
    yield delay(1000); //ignore this
    const result = yield call(getTodos);
    // yield put({ type: FETCH_DATA_SUCCESS, payload: result });
    yield put(fetchDataSuccess(result));
  } catch (e) {
    yield put(fetchDataError(e));
  }
}

export default function* saga() {
  yield takeEvery(FETCH_DATA, getTestData);
}
