import type {RemoteData} from "../../utils/RemoteStateUtils.ts";
import type {
    Druckweg,
    Kundenprofil,
    Partner,
    PartnerErweiterterHaushalt,
    PartnerProfil, SpartenMapping
} from "../../../API-GEN/kundenprofil-app";
import {createAction, type PayloadActionCreator} from "@reduxjs/toolkit";


export interface ContentDataSuccessPayload {
   partnerProfilData: PartnerProfil;
   druckwegeData: Druckweg[];
   erweiterterHaushaltData: PartnerErweiterterHaushalt;
}

// TODO DUMMY Klassen entfernen, sobald die echten Schnittstellen da sind
class KommunikationsWeg {
}

export type ContentStateType = {
   remote: RemoteData;
   parNummer?: string;
   partner?: Partner;
   kundenprofil?: Kundenprofil;
   druckwege?: Druckweg[];
   spartenMappings?: SpartenMapping[];
   haushaltspartner?: Partner[];
   kommunikationswege: KommunikationsWeg[];
   partnererweiterterhaushalt?: Partner[];
   editVsnr: boolean;
};

// SLICES
export const CONTENT_SLICE_NAME = 'content';

// ACTIONS
export const LOAD_CONTENT_DATA = `${CONTENT_SLICE_NAME}/loadContentData`;
export const loadContentDataAction: PayloadActionCreator<string, typeof LOAD_CONTENT_DATA> =
   createAction(LOAD_CONTENT_DATA);

export const LOAD_CONTENT_DATA_SUCCESS = `${CONTENT_SLICE_NAME}/loadContentDataSuccess`;
export const loadContentDataSuccessAction: PayloadActionCreator<
   ContentDataSuccessPayload,
   typeof LOAD_CONTENT_DATA_SUCCESS
> = createAction(LOAD_CONTENT_DATA_SUCCESS);

export const LOAD_CONTENT_DATA_ERROR = `${CONTENT_SLICE_NAME}/loadContentDataError`;
export const loadContentDataErrorAction: PayloadActionCreator<string, typeof LOAD_CONTENT_DATA_ERROR> =
   createAction(LOAD_CONTENT_DATA_ERROR);
