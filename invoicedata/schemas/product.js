export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'string',
    },
    {
      name: 'rate',
      title: 'Rate',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'title',
      rate: 'rate'
    },
  },
}