export enum RemoteLoadingState {
   loaded = 'loaded',
   loading = 'loading',
   notLoaded = 'not loaded',
   error = 'error',
}

export interface RemoteData {
   loadingState: RemoteLoadingState;
   remoteError: string | null;
}

export const remoteStateUtils = {
   initRemote(): RemoteData {
      return {
         loadingState: RemoteLoadingState.notLoaded,
         remoteError: null,
      };
   },
   markRemoteLoading(remoteData: RemoteData) {
      remoteData.loadingState = RemoteLoadingState.loading;
   },
   markRemoteLoaded(remoteData: RemoteData) {
      remoteData.loadingState = RemoteLoadingState.loaded;
   },
   markRemoteError(remoteData: RemoteData, error: string) {
      remoteData.loadingState = RemoteLoadingState.error;
      remoteData.remoteError = error;
   },
};
