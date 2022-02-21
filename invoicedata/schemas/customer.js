export default {
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'emailAddress',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'totalBalance',
      title: 'Total Balance',
      type: 'number',
    },
  ],
}