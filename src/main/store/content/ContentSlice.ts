import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { remoteStateUtils } from '../../utils/RemoteStateUtils.ts';

import {
   CONTENT_SLICE_NAME,
   type ContentDataSuccessPayload,
    type ContentStateType,
   loadContentDataAction,
   loadContentDataErrorAction,
   loadContentDataSuccessAction,
} from './ContentStoreTypes';

export const contentInitialState: ContentStateType = {
   remote: remoteStateUtils.initRemote(),
   parNummer: undefined,
   partner: undefined,
   kundenprofil: undefined,
   druckwege: undefined,
   haushaltspartner: undefined,
   kommunikationswege: [],
   editVsnr: false,
   partnererweiterterhaushalt: undefined,
};

export const ContentSlice = createSlice({
   name: CONTENT_SLICE_NAME,
   initialState: contentInitialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(loadContentDataAction, (contentState, action: PayloadAction<string>) => {
            contentState.parNummer = action.payload;
            remoteStateUtils.markRemoteLoading(contentState.remote);
         })
         .addCase(loadContentDataSuccessAction, (contentState, action: PayloadAction<ContentDataSuccessPayload>) => {
            remoteStateUtils.markRemoteLoaded(contentState.remote);
            // do state stuff here
            const { partnerProfilData, druckwegeData, erweiterterHaushaltData } = action.payload;
            contentState.partner = partnerProfilData.partner;
            contentState.kundenprofil = partnerProfilData.kundenprofil;
            contentState.haushaltspartner = partnerProfilData.haushaltsPartner;
            contentState.spartenMappings = partnerProfilData.spartenMappings;
            contentState.partnererweiterterhaushalt = erweiterterHaushaltData.haushaltsPartner;
            contentState.druckwege = druckwegeData;
         })
         .addCase(loadContentDataErrorAction, (contentState, action: PayloadAction<string>) => {
            remoteStateUtils.markRemoteError(contentState.remote, action.payload);
            contentState.parNummer = undefined;
            contentState.partner = undefined;
            contentState.kundenprofil = undefined;
            contentState.druckwege = undefined;
            contentState.haushaltspartner = undefined;
         });
   },
});

export default ContentSlice.reducer;
