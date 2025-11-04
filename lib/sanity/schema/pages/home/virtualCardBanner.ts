import { defineType } from "sanity";

export const virtualCardBanner = defineType({
  name: "virtualCardBanner",
  title: "Virtual Card Banner Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "buttonLink",
      title: "Button Link",
      type: "url",
    },
    {
      name: "cardImages",
      title: "Card Images",
      type: "object",
      fields: [
        {
          name: "primaryCard",
          title: "Primary Card",
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
        {
          name: "secondaryCard",
          title: "Secondary Card",
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
    {
      name: "showSection",
      title: "Show Section",
      type: "boolean",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});
