import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { remoteStateUtils } from '../../utils/RemoteStateUtils.ts';

import {
   DRUCKWEG_SLICE_NAME,
   type DruckwegDataSuccessPayload,
   type DruckwegStateType,
   loadDruckwegDataAction,
   loadDruckwegDataErrorAction,
   loadDruckwegDataSuccessAction,
   setCurrentPageAction,
} from './DruckwegStoreTypes';

export const druckwegInitialState: DruckwegStateType = {
   remote: remoteStateUtils.initRemote(),
   druckwege: undefined,
   ladeDruckwege: false,
   showDokumentView: false,
   loadingDokumentView: false,
   dokumentViewVsnr: 0,
   saveOnlineDruckwegOngoing: false,
   saveOnlineDruckwegTempVsnr: 0,
   saveOfflineDruckwegOngoing: false,
   onDruckKennzeichenSwitchValue: 'nein',
   currentPage: 0,
};

export const DruckwegSlice = createSlice({
   name: DRUCKWEG_SLICE_NAME,
   initialState: druckwegInitialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(loadDruckwegDataAction, (druckwegState, action: PayloadAction<string>) => {
            remoteStateUtils.markRemoteError(druckwegState.remote, action.payload);
         })
         .addCase(loadDruckwegDataSuccessAction, (druckwegState, action: PayloadAction<DruckwegDataSuccessPayload>) => {
            remoteStateUtils.markRemoteLoaded(druckwegState.remote);
            // do state stuff here
            const { druckwegeData } = action.payload;
            druckwegState.druckwege = druckwegeData;
         })
         .addCase(setCurrentPageAction, (druckwegState, action: PayloadAction<number>) => {
            remoteStateUtils.markRemoteLoaded(druckwegState.remote);
            // do state stuff here
            druckwegState.currentPage = action.payload;
         })
         .addCase(loadDruckwegDataErrorAction, (druckwegState, action: PayloadAction<string>) => {
            remoteStateUtils.markRemoteError(druckwegState.remote, action.payload);
            druckwegState.druckwege = undefined;
         });
   },
});

export default DruckwegSlice.reducer;
