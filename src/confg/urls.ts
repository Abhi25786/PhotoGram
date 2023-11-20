const APP_BASE_URL = 'http://localhost:3000';
export const getApiUrl = (endpoint: string) => APP_BASE_URL + endpoint;
//-------- Object containing API endpoints.

const apiEndpoints = {
  LOGIN: getApiUrl('/login'),
};

export default apiEndpoints;
