import environmentApi from './EnvironmentApi';
import partnerApi from './PartnerApi';

const Api = {
   ...environmentApi,
   ...partnerApi,
};

export default Api;
