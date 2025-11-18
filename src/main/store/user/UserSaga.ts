import { type AxiosResponse } from 'axios';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import Api from '../../api/Api';

import { selectUserRemote } from './UserSelector';
import {
   loadUserEnvironmentAction,
   loadUserEnvironmentErrorAction,
   loadUserEnvironmentSuccessAction,
   refreshAllAction,
} from './UserStoreTypes';
import {type RemoteData, RemoteLoadingState} from "../../utils/RemoteStateUtils.ts";
import type {UserEnvironment} from "../../../API-GEN/kundenprofil-app";

function* refreshAll(action: ReturnType<typeof refreshAllAction>): Generator<any, any, any> {
   console.info('App: startet...');
   const userRemote: RemoteData = yield select(selectUserRemote);
   if (userRemote.loadingState === RemoteLoadingState.notLoaded) {
      yield put(loadUserEnvironmentAction());
   }
}

function* fetchUserEnvironment(action: ReturnType<typeof loadUserEnvironmentAction>): Generator<any, any, any> {
   try {
      const response: AxiosResponse<UserEnvironment> = yield call(Api.fetchUserEnvironment);
      yield put(loadUserEnvironmentSuccessAction(response.data));
   } catch (error) {
      // todo error type
      yield put(loadUserEnvironmentErrorAction(error));
   }
}

export function* userSaga() {
   yield all([
      takeLatest(loadUserEnvironmentAction.type, fetchUserEnvironment),
      takeLatest(refreshAllAction.type, refreshAll),
   ]);
}
