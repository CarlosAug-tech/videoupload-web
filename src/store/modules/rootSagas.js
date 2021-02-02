import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import video from './video/sagas';

export default function* rootSagas() {
  return yield all([auth, user, video]);
}