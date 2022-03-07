const sanityClient = require('@sanity/client');
const imageUrlBuilder = require('@sanity/image-url');
//const blocksToHtml = require('@sanity/block-content-to-html');

// passing the env vars to Sanity.io
const sanity = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});


const input = {
  id: "testid",
  name: "uiInsertedProduct",
  rate: 20,
  description: "This product was added by the function"
};

exports.handler = async () => {
  // this query asks for all products in order of title ascending
//  const query = '*[_type=="product"] | order(title asc)';
  // const products = await sanity.fetch(query).then((results) => {
  //   // then it iterates over each product
  //   const allProducts = results.map((product) => {
  //     // & assigns its properties to output
  //     const output = {
  //       id: product._id,
  //       name: product.title,
  //       rate: product.rate,
  //       description: product.description
  //     };

  //     return output;
  //   });
  //   // this log lets us see that we're getting the projects
  //   // we can delete this once we know it works
  //   console.log(allProducts);

  //   // now it will return all of the products and the properties requested
  //   return allProducts;
  //   return input
  // });



  // return {
  //   statusCode: 200,
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(input),
  // };

  const { payload } = JSON.parse(event.body)
  const result = await client.create({ 
    _id: `product.${uuid()}`,
    _type: 'product.form', ...payload })
  callback(null, {
    statusCode: 200
  })

};

// const sanityClient = require('@sanity/client')
// const { uuid } = require('@sanity/uuid')
// const client = sanityClient({
//   projectId: 'zv292tg5',
//   dataset: 'production',
//   token: process.env.SANITY_TOKEN
// })

// exports.handler = async function (event, context, callback) {
//   const { payload } = JSON.parse(event.body)
//   const result = await client.create({ 
//     _id: `submission.${uuid()}`
//     _type: 'submission.form', ...payload })
//   callback(null, {
//     statusCode: 200
//   })
// }