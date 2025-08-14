/**
 * @type {import('tinacms').Collection}
 */

import fullWidthSectionSchema from '../templates/full-width-section';

export default {
  label: "Page Content",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    {
      name: 'sections',
      type: 'object',
      label: 'Sections',
      list: true,
      ui: {
        visualSelector: true,
      },
      templates: [fullWidthSectionSchema],
    },
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      return undefined;
    },
  },
};
