import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { ContentSlice } from './content/ContentSlice';
import { CONTENT_SLICE_NAME } from './content/ContentStoreTypes';
import { DruckwegSlice } from './druckweg/DruckwegSlice';
import { DRUCKWEG_SLICE_NAME } from './druckweg/DruckwegStoreTypes';
import rootSaga from './rootSaga';
import { UserSlice } from './user/UserSlice';
import { USER_SLICE_NAME } from './user/UserStoreTypes';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
   reducer: {
      [USER_SLICE_NAME]: UserSlice.reducer,
      [CONTENT_SLICE_NAME]: ContentSlice.reducer,
      [DRUCKWEG_SLICE_NAME]: DruckwegSlice.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            // Ignore these action types
            ignoredActions: ['user/loadUserEnvironment', 'user/loadUserEnvironmentSuccess'],
            // Ignore these field paths in all actions
            ignoredActionPaths: ['meta.arg', 'payload.timestamp', `payload.originalRequest`],
            // Ignore these paths in the state
            ignoredPaths: ['items.dates'],
         },
      }).concat(sagaMiddleware),
   // devTools: process.env.NODE_ENV !== 'production',
   devTools: true,
});

sagaMiddleware.run(rootSaga);
//  other sagas

export type RootState = ReturnType<typeof store.getState>;
