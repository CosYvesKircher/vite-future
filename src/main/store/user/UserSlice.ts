import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { remoteStateUtils } from '../../utils/RemoteStateUtils.ts';

import {
   loadUserEnvironmentAction,
   loadUserEnvironmentErrorAction,
   loadUserEnvironmentSuccessAction,
   USER_SLICE_NAME,
   type UserStateType,
} from './UserStoreTypes';
import type {UserEnvironment} from "../../../API-GEN/kundenprofil-app";
import axiosBase from "../../utils/rest/AxiosBase.ts";

export const userInitialState: UserStateType = {
   remote: remoteStateUtils.initRemote(),
   environment: undefined,
};

export const UserSlice = createSlice({
   name: USER_SLICE_NAME,
   initialState: userInitialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(loadUserEnvironmentAction, (userState, action: PayloadAction<undefined>) => {
            remoteStateUtils.markRemoteLoading(userState.remote);
         })
         .addCase(loadUserEnvironmentSuccessAction, (userState, action: PayloadAction<UserEnvironment>) => {
            remoteStateUtils.markRemoteLoaded(userState.remote);
            const restTimeout = action.payload.restTimeout;
            if (restTimeout) {
               axiosBase.defaults.timeout = restTimeout;
            }
         })
         .addCase(loadUserEnvironmentErrorAction, (userState, action: PayloadAction<string>) => {
            remoteStateUtils.markRemoteError(userState.remote, action.payload);
         });
   },
});

export default UserSlice.reducer;
