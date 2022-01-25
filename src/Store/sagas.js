import { all, fork } from 'redux-saga/effects'
import authSaga from './Auth/saga';

export default function* rootSaga() {
    yield all([
        authSaga(),
    ])
}