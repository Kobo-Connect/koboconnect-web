import { defineType } from "sanity";

export const ourApps = defineType({
  name: "ourApps",
  title: "Our Apps Section",
  type: "document",
  fields: [
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
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
      name: "appImage",
      title: "App Image",
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
      name: "stats",
      title: "Statistics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "value",
              title: "Value",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
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
      name: "showSection",
      title: "Show Section",
      type: "boolean",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
});
