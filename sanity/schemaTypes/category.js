const category = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      options: {
        list: [
          {title: 'Earlier Work', value: 'earlier-work'},
          {title: 'Abstract', value: 'abstract'},
          {title: 'Semi-Abstract', value: 'semi-abstract'},
          {title: 'Beauty of Nature', value: 'beauty-of-nature'},
          {title: 'Spiritual', value: 'spiritual'},
          {title: 'Miscellaneous', value: 'miscellaneous'},
          {title: 'Workshop', value: 'workshop'},
          {title: 'Exhibitions', value: 'exhibitions'},
          {title: 'Blog', value: 'blog'},
          {title: 'Available for Sale', value: 'available-for-sale'}
        ]
      },
      validation: Rule => Rule.required()
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
   
  ]
}
export default category