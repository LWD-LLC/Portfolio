import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "bn96cm6n",
    dataset: "production",
    apiVersion: '2021-10-08',
    useCdn: true,
})