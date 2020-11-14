import { environment } from '../../environments/environment';

const baseURL = environment.apiEndpointUrl;

export const endpoints = {
  sampleEndpoint1: `${baseURL}/assets/mock/sampleEndpointResponse.json`,
};
