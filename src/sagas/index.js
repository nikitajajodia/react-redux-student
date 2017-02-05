import {
  fork
} from 'redux-saga/effects';
import User from './DateSaga';

export default function* root() {
  yield fork(User)
}