import textBlockSchema from './text-block';

const fullWidthSectionSchema = {
  name: 'section',
  label: 'Full Width Section',
  fields: [
    {
      name: 'name',
      type: 'string',
      label: 'Section Name',
      required: true,
    },
    {
      name: 'blocks',
      type: 'object',
      label: 'Blocks',
      list: true,
      templates: [
        textBlockSchema,
      ],
    },
  ],
  ui: {
    previewSrc: '/blocks/full-width-section.jpg',
    itemProps: (item) => {
      // Field values are accessed by item?.<Field name>
      return {
        label: item?.draft ? '* ' + item?.name : item?.name,
      }
    },
    defaultItem: {
      name: 'Full Width Section',
    },
  },
}

export default fullWidthSectionSchema