import type {RootState} from "../store.ts";
import type {RemoteData} from "../../utils/RemoteStateUtils.ts";


export const selectDruckwegState = (state: RootState) => state.druckweg;

export const selectDruckwegRemote = (state: RootState): RemoteData => selectDruckwegState(state).remote;

export const selectDruckwege = (state: RootState) => selectDruckwegState(state).druckwege;

export const selectCurrentPage = (state: RootState) => selectDruckwegState(state).currentPage;

export const selectSaveOnlineDruckwegOngoing = (state: RootState) =>
   selectDruckwegState(state).saveOnlineDruckwegOngoing;

export const selectSaveOnlineDruckwegTempVsnr = (state: RootState) =>
   selectDruckwegState(state).saveOnlineDruckwegTempVsnr;
