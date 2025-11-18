import { ThemeProvider } from '@emotion/react';
import { configureStore } from '@reduxjs/toolkit';
import { type RenderOptions, render as rtlRender } from '@testing-library/react';
import i18n from 'i18next';
import { merge } from 'lodash';
import type {PropsWithChildren, ReactElement} from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import contentSlice, { contentInitialState } from '../main/store/content/ContentSlice';
import userSlice, { userInitialState } from '../main/store/user/UserSlice';
import theme from '../main/styles/Theme';

const rootReducer = {
   user: userSlice,
   content: contentSlice,
};

type RootState = {
   user?: typeof userInitialState;
   content?: typeof contentInitialState;
};

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
   preloadedState?: RootState;
   store?: ReturnType<typeof configureStore>;
}

function render(
   ui: ReactElement,
   {
      preloadedState,
      store = configureStore({
         reducer: rootReducer,
         preloadedState: merge(
            {},
            {
               user: userInitialState,
               content: contentInitialState,
            },
            preloadedState
         ),
      }),
      ...renderOptions
   }: ExtendedRenderOptions = {}
) {
   function Wrapper({ children }: PropsWithChildren) {
      return (
         <Provider store={store}>
            <I18nextProvider i18n={i18n}>
               <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </I18nextProvider>
         </Provider>
      );
   }

   return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };

// exports: click, dblClick, type, clear, tab, hover, unhover, upload, selectOptions, deselectOptions, paste
export * from '@testing-library/user-event';
