import type {RootState} from "../store.ts";
import type {RemoteData} from "../../utils/RemoteStateUtils.ts";

export const selectContentState = (state: RootState) => state.content;

export const selectContentRemote = (state: RootState): RemoteData => selectContentState(state).remote;

export const selectContentParNummer = (state: RootState) => selectContentState(state).parNummer;

export const selectContentPartner = (state: RootState) => selectContentState(state).partner;

export const selectContentKundenprofil = (state: RootState) => selectContentState(state).kundenprofil;

export const selectContentDruckwege = (state: RootState) => selectContentState(state).druckwege;

export const selectContentHaushaltspartner = (state: RootState) => selectContentState(state).haushaltspartner;

export const selectContentSpartenMappings = (state: RootState) => selectContentState(state)?.spartenMappings;

export const selectKommunikationswege = (state: RootState) => selectContentState(state).kommunikationswege;

export const selectPartnerErweiterterHaushalt = (state: RootState) =>
   selectContentState(state).partnererweiterterhaushalt;
