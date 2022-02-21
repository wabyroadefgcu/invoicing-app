export default {
  name: 'invoice',
  title: 'Invoice',
  type: 'document',
  fields: [
    {
      name: 'customer',
      title: 'Customer',
      type: 'reference',
      to: {type: 'customer'},
    },
    {
      name: 'invoiceNumber',
      title: 'Invoice Number',
      type: 'string',
    },
    {
      name: 'customerNameOverride',
      title: 'Customer Name Override',
      type: 'string',
    },
    {
      name: 'customerAddressOverride',
      title: 'Customer Address Override',
      type: 'string',
    },
    {
      name: 'customerEmailAddressOverride',
      title: 'Customer Email Address Override',
      type: 'string',
    },
    {
      name: 'customerPhoneOverride',
      title: 'Customer Phone Number Override',
      type: 'string',
    },
    {
      name: 'lineItems',
      title: 'Line Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'invoiceLineItem'},
        },
      ],
    },
    {
      name: 'taxable',
      title: 'Taxable',
      type: 'boolean',
    },
    {
      name: 'invoiceDate',
      title: 'Invoice Date',
      type: 'datetime',
    },
    {
      name: 'invoiceTotal',
      title: 'Invoice Total',
      type: 'number',
    },
  ],
}