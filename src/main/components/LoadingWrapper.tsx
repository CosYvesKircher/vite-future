import { CircularProgress } from '@mui/material';
import React from 'react';
import { RemoteLoadingState } from '../utils/RemoteStateUtils.ts';
import Widget from './Widget';

export interface LoadingWrapperProps {
   remoteLoadingState: RemoteLoadingState;
   widgetLoadingTitle: string;
   widgetErrorText: string;
   children: React.ReactNode;
}

function LoadingWrapper({ remoteLoadingState, widgetLoadingTitle, widgetErrorText, children }: LoadingWrapperProps) {
   if (remoteLoadingState === RemoteLoadingState.loaded) {
      return <>{children}</>;
   } else if (remoteLoadingState === RemoteLoadingState.loading) {
      return (
         <Widget title={widgetLoadingTitle}>
            <CircularProgress />
         </Widget>
      );
   } else if (remoteLoadingState === RemoteLoadingState.notLoaded) {
      return (
         <Widget title={widgetLoadingTitle}>
            <CircularProgress />
         </Widget>
      );
   } else {
      return <Widget title={widgetLoadingTitle}>{widgetErrorText}</Widget>;
   }
}

export default LoadingWrapper;
