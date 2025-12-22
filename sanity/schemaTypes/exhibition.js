// sanity/schemaTypes/exhibition.js
export default {
  name: 'exhibition',
  title: 'Exhibition',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Exhibition Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Solo', value: 'solo'},
          {title: 'Group', value: 'group'}
        ]
      }
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string'
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}