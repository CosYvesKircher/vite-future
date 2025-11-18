

import type {Druckweg, PartnerProfil} from "../../API-GEN/kundenprofil-app";
import type {AxiosResponse} from "axios";
import axiosBase from "../utils/rest/AxiosBase.ts";



function fetchPartnerDaten(parNummer: string): Promise<AxiosResponse<PartnerProfil>> {
   return axiosBase.get(`/partner/ladePartnerByParNummer?parNummer=${encodeURIComponent(parNummer)}`);
}

function fetchDruckwege(parNummer: string): Promise<AxiosResponse<Druckweg[]>> {
   return axiosBase.get(`/partner/ladeDruckwegeByParNummer?parNummer=${encodeURIComponent(parNummer)}`);
}

function fetchSaveOnlineDruckweg(vsnr: string) {
   return axiosBase.post('/partner/speichernOnlineDruckweg', vsnr);
}

function fetchSaveOfflineDruckweg(vsnr: string) {
   return axiosBase.post('/partner/speichernOfflineDruckweg', vsnr);
}

function fetchSwitchAllDruckwegeToOnline(druckwege: Druckweg[]) {
   return axiosBase.post('/partner/speichernAllDruckwegeToOnline', druckwege);
}

function fetchDruckAuftraege(params: any) {
   const vsnr: string = params.vsnr;
   const ladeAktuelleDruckauftraege = params.ladeAktuelleDruckauftraege;
   const ladeHistorischDruckauftraege = params.ladeHistorischDruckauftraege;

   return axiosBase.get(
      '/partner/ladeDruckauftraege?' +
         'vsnr=:vsnr' +
         '&ladeAktuelleDruckauftraege=:ladeAktuelleDruckauftraege' +
         '&ladeHistorischDruckauftraege=:ladeHistorischDruckauftraege',
      {
         vsnr,
         ladeAktuelleDruckauftraege,
         ladeHistorischDruckauftraege,
      }
   );
}

function fetchLadeErweiterterHaushalt(parNummer: string) {
   return axiosBase.get(`/partner/ladeErweiterterHaushalt?parNummer=${encodeURIComponent(parNummer)}`);
}

const partnerApi = {
   fetchPartnerDaten,
   fetchDruckwege,
   fetchSaveOnlineDruckweg,
   fetchSaveOfflineDruckweg,
   fetchDruckAuftraege,
   fetchSwitchAllDruckwegeToOnline,
   fetchLadeErweiterterHaushalt,
};

export default partnerApi;
