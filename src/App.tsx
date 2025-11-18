import AppRootContainer from './AppRootContainer.tsx';

import { ThemeProvider } from '@mui/material';
import { StoreProvider } from './main/store/StoreProvider.tsx';
import theme from './main/styles/Theme.ts';

const App = () => (
   <StoreProvider>
      <ThemeProvider theme={theme}>
         <AppRootContainer />
      </ThemeProvider>
   </StoreProvider>
);

export default App;
