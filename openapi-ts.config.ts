import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig([
   {
      input: '../rest-specs/kundenprofil-verwalten-bas.openapi.json',
      output: './src/API-GEN/kundenprofil-verwalten-bas',
   },
   {
      input: '../rest-specs/partner-ermitteln-bas.openapi.json',
      output: './src/API-GEN/partner-ermitteln-bas',
   },
   {
      input: '../rest-specs/partner-haushalt-verwalten-bas.openapi.json',
      output: './src/API-GEN/partner-haushalt-verwalten-bas',
   },
   {
      input: '../rest-specs/vertraege-ermitteln-bas.openapi.json',
      output: './src/API-GEN/vertraege-ermitteln-bas',
   },
   {
      input: '../target/apidocs/openapi.json',
      output: './src/API-GEN/kundenprofil-app',
   },
]);
