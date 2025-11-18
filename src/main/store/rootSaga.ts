import { all, fork } from 'redux-saga/effects';

import { contentSaga } from './content/ContentSaga';
import { userSaga } from './user/UserSaga';

function* rootSaga() {
   yield all([fork(userSaga), fork(contentSaga)]);
}

export default rootSaga;
