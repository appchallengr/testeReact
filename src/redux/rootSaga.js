import { all, call } from 'redux-saga/effects';
import { checkSaga } from './main/checklist';

export default function* rootSaga() {
  yield all([call(checkSaga)]);
}
