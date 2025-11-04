import { defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "footerLinks",
      title: "Footer Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Section Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "links",
              title: "Links",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Link Title",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: "href",
                      title: "Link URL",
                      type: "url",
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                },
              ],
              validation: (Rule) => Rule.required().min(1),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Platform Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "href",
              title: "Social Media URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "icon",
              title: "Icon",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: "bottomLogo",
      title: "Bottom Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "description",
      subtitle: "footerLinks.0.title",
    },
  },
});
