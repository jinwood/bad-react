import { call, takeEvery, put, delay } from 'redux-saga/effects';
import getTodos from '../api';
import { FETCH_DATA, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from './actions';

function* getTestData() {
  yield delay(1000); //ignore this
  const result = yield call(getTodos);
  yield put({ type: FETCH_DATA_SUCCESS, payload: result });
}

export default function* saga() {
  yield takeEvery(FETCH_DATA, getTestData);
}
