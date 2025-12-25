 const publication = {
  name: 'publication',
  title: 'Publication',
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
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'type',
      title: 'Publication Type',
      type: 'string',
      options: {
        list: [
          {title: 'Book', value: 'book'},
          {title: 'Article', value: 'article'},
          {title: 'Research Paper', value: 'research'},
          {title: 'Catalogue', value: 'catalogue'},
          {title: 'Other', value: 'other'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'publishedYear',
      title: 'Published Year',
      type: 'number',
      validation: Rule => Rule.min(1980).max(new Date().getFullYear())
    },
    {
      name: 'publisher',
      title: 'Publisher',
      type: 'string'
    },
    {
      name: 'isbn',
      title: 'ISBN',
      type: 'string'
    },
    {
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      options: {
        accept: 'application/pdf'
      }
    },
    {
      name: 'externalLink',
      title: 'External Link',
      type: 'url'
    },
    {
      name: 'featured',
      title: 'Featured Publication',
      type: 'boolean'
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    }
  ]
}
export default publication