// sanity/schemaTypes/artwork.js
export default {
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'titleHindi',
      title: 'Title (Hindi)',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'gallery',
      title: 'Additional Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}]
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'year',
      title: 'Year Created',
      type: 'number',
      validation: Rule => Rule.required().min(1980).max(new Date().getFullYear())
    },
    {
      name: 'medium',
      title: 'Medium',
      type: 'string',
      options: {
        list: [
          {title: 'Acrylic on Canvas', value: 'acrylic'},
          {title: 'Oil on Canvas', value: 'oil'},
          {title: 'Mixed Media', value: 'mixed'},
          {title: 'Other', value: 'other'}
        ]
      }
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'object',
      fields: [
        {name: 'width', title: 'Width (cm)', type: 'number'},
        {name: 'height', title: 'Height (cm)', type: 'number'}
      ]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'price',
      title: 'Price (₹)',
      type: 'number'
    },
    {
      name: 'availabilityStatus',
      title: 'Availability',
      type: 'string',
      options: {
        list: [
          {title: 'Available for Sale', value: 'available'},
          {title: 'Sold', value: 'sold'},
          {title: 'Private Collection', value: 'private'},
          {title: 'Not for Sale', value: 'nfs'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured Artwork',
      type: 'boolean'
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    }
  ]
}