import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../../api';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_REQUEST':
    case 'CHECK_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_ALL_SUCCESS':
      return {
        ...state,
        list: action.list,
        loading: false,
        error: null,
      };
    case 'GET_ALL_FAILURE':
    case 'CHECK_FAILURE':
      return {
        ...state,
        loading: false,
        error: true,
      };
    case 'CHECK_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

export const getAll = () => ({ type: 'GET_ALL_REQUEST' });
const getCheckAsync = function*(action) {
  try {
    const list = yield call(api.getAll);
    list.map((e,index)=>{
      e.id = index;
      e.checked = false;
    })
    yield put({ type: 'GET_ALL_SUCCESS', list });
  } catch (error) {
    yield put({ type: 'GET_ALL_FAILURE', error });
  }
};

export const checkElement = element => ({ type: 'CHECK_REQUEST', element });
const checkEelementAsync = function*(action) {
  try {
    const element = action.element;
    element.checked = !element.checked;
    console.log(element)
    yield put({ type: 'CHECK_SUCCESS', element });
  } catch (error) {
    yield put({ type: 'CHECK_FAILURE', error });
  }
};


export function* checkSaga() {
  yield all([
    takeLatest('GET_ALL_REQUEST', getCheckAsync),
    takeLatest('CHECK_REQUEST', checkEelementAsync),
  ]);
}
