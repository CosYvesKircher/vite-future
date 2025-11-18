import { all, call, put, takeLatest } from 'redux-saga/effects';
import Api from '../../api/Api';
import { loadDruckwegDataSuccessAction } from '../druckweg/DruckwegStoreTypes';
import { loadContentDataAction, loadContentDataErrorAction, loadContentDataSuccessAction } from './ContentStoreTypes';
import type {Druckweg, PartnerErweiterterHaushalt, PartnerProfil} from "../../../API-GEN/kundenprofil-app";


function* fetchContentData(action: ReturnType<typeof loadContentDataAction>): Generator<any, any, any> {
   const parNummer = action.payload;
   try {
      const [partnerProfilResponse, druckwegeResponse, erweiterterPartnerHaushaltResponse] = yield all([
         yield call(Api.fetchPartnerDaten, parNummer),
         yield call(Api.fetchDruckwege, parNummer),
         yield call(Api.fetchLadeErweiterterHaushalt, parNummer),
      ]);
      const partnerProfilData: PartnerProfil = partnerProfilResponse.data;
      const druckwegeData: Druckweg[] = druckwegeResponse.data;
      const erweiterterHaushaltData: PartnerErweiterterHaushalt = erweiterterPartnerHaushaltResponse.data;
      yield put(loadContentDataSuccessAction({ partnerProfilData, druckwegeData, erweiterterHaushaltData }));
      yield put(loadDruckwegDataSuccessAction({ druckwegeData }));
   } catch (e: any) {
      //todo
      yield put(loadContentDataErrorAction(e));
   }
}

export function* contentSaga() {
   yield all([takeLatest(loadContentDataAction.type, fetchContentData)]);
}
