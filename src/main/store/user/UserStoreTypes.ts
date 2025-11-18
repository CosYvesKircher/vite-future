import { type PayloadActionCreator, createAction } from '@reduxjs/toolkit';

import { type RemoteData } from '../../utils/RemoteStateUtils.ts';
import type {UserEnvironment} from "../../../API-GEN/kundenprofil-app";

export type UserStateType = {
   remote: RemoteData;
   environment?: UserEnvironment;
};

// SLICES
export const USER_SLICE_NAME = 'user';

// ACTIONS
export const REFRESH_ALL = `${USER_SLICE_NAME}/refreshAll`;
export const refreshAllAction: PayloadActionCreator<undefined, typeof REFRESH_ALL> = createAction(REFRESH_ALL);

export const LOAD_USER_ENVIRONMENT = `${USER_SLICE_NAME}/loadUserEnvironment`;
export const loadUserEnvironmentAction: PayloadActionCreator<undefined, typeof LOAD_USER_ENVIRONMENT> =
   createAction(LOAD_USER_ENVIRONMENT);

export const LOAD_USER_ENVIRONMENT_SUCCESS = `${USER_SLICE_NAME}/loadUserEnvironmentSuccess`;
export const loadUserEnvironmentSuccessAction: PayloadActionCreator<
   UserEnvironment,
   typeof LOAD_USER_ENVIRONMENT_SUCCESS
> = createAction(LOAD_USER_ENVIRONMENT_SUCCESS);

export const LOAD_USER_ENVIRONMENT_ERROR = `${USER_SLICE_NAME}/loadUserEnvironmentError`;
export const loadUserEnvironmentErrorAction: PayloadActionCreator<string, typeof LOAD_USER_ENVIRONMENT_ERROR> =
   createAction(LOAD_USER_ENVIRONMENT_ERROR);
