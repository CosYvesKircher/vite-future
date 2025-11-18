import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import queryString from 'query-string';
import AppUI from './AppUI';

import { loadContentDataAction } from '../../store/content/ContentStoreTypes';
import { selectUserRemote } from '../../store/user/UserSelector';
import { refreshAllAction } from '../../store/user/UserStoreTypes';
import { RemoteLoadingState } from '../../utils/RemoteStateUtils.ts';

function AppContainer() {
   const dispatch = useDispatch();
   const userRemoteState = useSelector(selectUserRemote);

   // Initiales Laden und triggern der User saga
   useEffect(() => {
      if (userRemoteState.loadingState === RemoteLoadingState.notLoaded) {
         console.log('AppContainer: dispatch refreshAllAction');
         dispatch(refreshAllAction());
      }
   }, [dispatch, userRemoteState]);

   const queryParams = useMemo(() => queryString.parse(document.location.search) || {}, [document.location.search]);

   useEffect(() => {
      if (userRemoteState.loadingState !== RemoteLoadingState.loaded) return;
      let parNummer = queryParams.parNummer;
      if (Array.isArray(parNummer)) {
         parNummer = parNummer[0];
      }
      if (parNummer) {
         dispatch(loadContentDataAction(parNummer));
      }
   }, [queryParams, userRemoteState, dispatch]);

   return <AppUI />;
}

export default AppContainer;
