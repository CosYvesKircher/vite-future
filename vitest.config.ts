import { defineConfig } from 'vitest/config';

export default defineConfig({
   test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './setupTests.ts',
      css: true,
      // reporters: ['verbose'],
      // server: {
      //   deps: {
      //     inline: ["@mui/x-data-grid"],
      //   },
      // },
   },
});
