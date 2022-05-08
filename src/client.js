import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: import.meta.env.VITE_APP_SANITY_PROJECT,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: import.meta.env.VITE_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
