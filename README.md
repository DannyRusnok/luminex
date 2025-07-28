# Luminex React App

This repository contains a minimal React project scaffolded without internet access. To run the project locally after installing dependencies, use the following commands:

```bash
npm install
npm start
```

The project was initialized manually and uses `react-scripts` for development and build tasks.

## Sanity CMS Integration

The project now includes a basic setup for fetching content from
[Sanity.io](https://www.sanity.io). The `@sanity/client` dependency is listed in
`package.json` and the `src/sanityClient.js` file configures the connection.

To use your own Sanity project:

1. Create a `.env` file at the project root and define the following variables:

   ```bash
   REACT_APP_SANITY_PROJECT_ID=yourProjectId
   REACT_APP_SANITY_DATASET=production
   ```

2. Install dependencies (requires internet access):

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

The `Gallery` component renders a simple image gallery below the heading on the
main page.
