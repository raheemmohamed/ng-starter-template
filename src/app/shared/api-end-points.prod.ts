import { environment } from '../../environments/environment.prod';

const baseURL = environment.apiEndpointUrl;

export const endpoints = {
  sampleEndpoint1: `${baseURL}/sampleEndpoints`,
};
