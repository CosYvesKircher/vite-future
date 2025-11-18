import { Colors, cosmosTheme } from '@cos/rcl-future/theme';
import { createTheme, type ThemeOptions } from '@mui/material';
// Importiere responsive Style-Funktionen (ggf. anpassen)

const breakpoints: ThemeOptions['breakpoints'] = {
   keys: ['xs', 'sm', 'md', 'lg', 'xl'],
   values: {
      xs: 0,
      sm: 600,
      md: 700,
      lg: 1100,
      xl: 1920,
   },
};

const childTheme: ThemeOptions = {
   typography: {
      body1: {
         fontSize: '0.8rem', // 16px
      },
      body2: {
         fontSize: '0.6rem', // 16px
      },
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
   },
   components: {
      // MuiTypography: {
      //   styleOverrides: responsiveTypography(cosmosThemeMCD)
      // },
      // MuiMenuItem: {
      //   styleOverrides: responsiveMenuItem(cosmosThemeMCD)
      // },
      // MuiTableCell: {
      //   styleOverrides: responsiveTableCell(cosmosThemeMCD)
      // },
      MuiDivider: {
         styleOverrides: {
            root: {
               width: '100%',
               borderColor: Colors.COSMOS_GRAU_DARKER_2,
               borderWidth: '1px',
            },
         },
      },
      MuiAutocomplete: {
         defaultProps: {
            openOnFocus: true,
            disableClearable: true,
         },
      },
      MuiToggleButton: {
         styleOverrides: {
            root: {
               textTransform: 'none',
               marginTop: '1.5rem',
            },
         },
      },
      MuiCard: {
         styleOverrides: {
            root: {
               height: '100%',
            },
         },
      },
   },
};

const theme = createTheme({ ...cosmosTheme, breakpoints, spacing: 4 }, childTheme);

export default theme;
