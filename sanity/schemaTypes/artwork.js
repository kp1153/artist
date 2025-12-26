import CloudinaryImageInput from './CloudinaryImageInput'
import MultiImageInput from './MultiImageInput'
import { hindiToRoman } from './hindiToRoman'

const artwork = {
  name: 'post',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => {
          const romanized = hindiToRoman(input);
          const timePart = new Date()
            .toISOString()
            .replace(/[-:.TZ]/g, "")
            .slice(0, 14);
          return `${romanized}-${timePart}`;
        },
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main Image (Cloudinary URL)',
      type: 'string',
      components: {
        input: CloudinaryImageInput,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'galleryImage',
          fields: [
            {
              name: 'url',
              title: 'Image URL',
              type: 'string',
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
          ],
        },
      ],
      components: {
        input: MultiImageInput,
      },
    },
    {
      name: 'youtubeVideos',
      title: 'YouTube Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'youtubeVideo',
          fields: [
            {
              name: 'url',
              title: 'YouTube URL',
              type: 'url',
              validation: Rule => Rule.uri({ scheme: ['http', 'https'] }),
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'category',
      title: 'Category',
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
      name: 'createdDate',
      title: 'Date Created',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
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
      name: 'views',
      title: 'Views Count',
      type: 'number',
      initialValue: 0
    }
  ]
}

export default artwork