const textBlockSchema = {
  name: 'textBlock',
  label: 'Text Block',
  fields: [
    {
      name: 'title',
      type: 'string',
      label: 'Titel',
      isTitle: true,
      required: true,
    },
    {
      name: 'text',
      type: 'rich-text',
      label: 'Text',
      isBody: true,
    },
  ],
  ui: {
    previewSrc: '/blocks/rich-text.jpg',
    itemProps: (item) => {
      // Field values are accessed by item?.<Field name>
      return {
        label: item?.draft ? '* ' + item?.title : item?.title,
      }
    },
    defaultItem: () => {
      return {
        title: 'Text Block',
        text: {
          type: 'root',
          children: [
            {
              type: 'p',
              children: [
                {
                  type: 'text',
                  text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                },
              ],
            },
          ],
        },
      }
    },
  },
}

export default textBlockSchema
