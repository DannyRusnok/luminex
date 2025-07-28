import sanityClient from '@sanity/client';

// Configuration for Sanity client. Replace the placeholders with your project
// specific settings. These values can also be provided via environment
// variables in a .env file.
export default sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || '<your-project-id>',
  dataset: process.env.REACT_APP_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-06-01',
});
