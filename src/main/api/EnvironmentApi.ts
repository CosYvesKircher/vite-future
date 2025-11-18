import axiosBase from "../utils/rest/AxiosBase.ts";

function fetchUserEnvironment() {
   return axiosBase.get('/env');
}

const environmentApi = {
   fetchUserEnvironment,
};

export default environmentApi;
