import { type PayloadActionCreator, createAction } from '@reduxjs/toolkit';

import { USER_SLICE_NAME } from '../user/UserStoreTypes';
import type {RemoteData} from "../../utils/RemoteStateUtils.ts";
import type {Druckweg} from "../../../API-GEN/kundenprofil-app";

export interface DruckwegDataSuccessPayload {
   druckwegeData: Druckweg[];
}

export type DruckwegStateType = {
   remote: RemoteData;
   druckwege?: Druckweg[];
   ladeDruckwege: boolean;
   showDokumentView: boolean;
   loadingDokumentView: boolean;
   dokumentViewVsnr: number;
   saveOnlineDruckwegOngoing: boolean;
   saveOnlineDruckwegTempVsnr: number;
   saveOfflineDruckwegOngoing: boolean;
   onDruckKennzeichenSwitchValue: string;
   currentPage: number;
};

// SLICES
export const DRUCKWEG_SLICE_NAME = 'druckweg';

// ACTIONS
export const LOAD_DRUCKWEG_DATA = `${DRUCKWEG_SLICE_NAME}/loadDruckwegData`;
export const loadDruckwegDataAction: PayloadActionCreator<string, typeof LOAD_DRUCKWEG_DATA> =
   createAction(LOAD_DRUCKWEG_DATA);

export const SET_CURRENT_PAGE = `${USER_SLICE_NAME}/setCurrentPage`;
export const setCurrentPageAction: PayloadActionCreator<number, typeof SET_CURRENT_PAGE> =
   createAction(SET_CURRENT_PAGE);

export const LOAD_DRUCKWEG_DATA_SUCCESS = `${DRUCKWEG_SLICE_NAME}/loadDruckwegDataSuccess`;
export const loadDruckwegDataSuccessAction: PayloadActionCreator<
   DruckwegDataSuccessPayload,
   typeof LOAD_DRUCKWEG_DATA_SUCCESS
> = createAction(LOAD_DRUCKWEG_DATA_SUCCESS);

export const LOAD_DRUCKWEG_DATA_ERROR = `${DRUCKWEG_SLICE_NAME}/loadDruckwegDataError`;
export const loadDruckwegDataErrorAction: PayloadActionCreator<string, typeof LOAD_DRUCKWEG_DATA_ERROR> =
   createAction(LOAD_DRUCKWEG_DATA_ERROR);
