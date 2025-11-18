import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
   plugins: [react()],
   resolve: {
      preserveSymlinks: false,
      dedupe: [
         'react',
         'react-dom',
         '@mui/material',
         '@mui/icons-material',
         '@mui/system',
         '@emotion/react',
         '@emotion/styled',
         'react-is',
         '@mui/utils',
      ],
   },
   build: {
      minify: false, // Optional: Schnelleres Build
      sourcemap: true, // Für besseres Debugging
      commonjsOptions: {
         include: [/node_modules/], // Behandelt CommonJS in node_modules
         transformMixedEsModules: true, // Wichtig für gemischte Module
      },
   },
   server: {
      watch: {
         followSymlinks: true,
         usePolling: true, // Wichtig für yarn link
         interval: 1000, // Schnellere Erkennung
      },
      fs: {
         allow: ['..'], // Erlaubt Zugriff auf verlinkte Packages außerhalb des Projekts
      },
   },
});
