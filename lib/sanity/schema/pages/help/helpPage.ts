import { defineType } from "sanity";

export default defineType({
  name: "helpPage",
  title: "Help Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "Help",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      initialValue: { current: "help" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
        {
          name: "badge",
          title: "Badge Text",
          type: "string",
          initialValue: "Help",
        },
        {
          name: "title",
          title: "Hero Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "subtitle",
          title: "Hero Subtitle",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.required(),
        },
        {
          name: "backgroundImage",
          title: "Background Image",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              validation: (Rule) => Rule.required(),
            },
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "faqs",
      title: "FAQ Items",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "faqItem" },
        },
      ],
      description: "Select FAQ items to display on the help page",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return {
        title: selection.title || "Help Page",
      };
    },
  },
});
