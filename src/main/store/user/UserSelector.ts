import type {RootState} from "../store.ts";
import type {RemoteData} from "../../utils/RemoteStateUtils.ts";


export const selectUserState = (state: RootState) => state.user;

export const selectUserRemote = (state: RootState): RemoteData => selectUserState(state).remote;
