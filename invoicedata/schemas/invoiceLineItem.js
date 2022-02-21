export default {
  name: 'invoiceLineItem',
  title: 'Invoice Line Item',
  type: 'document',
  fields: [
    {
      name: 'hours',
      title: 'Hours',
      type: 'integer',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: {type: 'product'},
    },
  ],
}