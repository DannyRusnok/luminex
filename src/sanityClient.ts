import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-07-29',
  useCdn: false,
};

export const sanityClient = createClient(config);

export default sanityClient;
