import { defineType } from "sanity";

export default defineType({
  name: "careersPage",
  title: "Careers Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "Careers",
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
      initialValue: { current: "careers" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
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
      name: "benefitsSection",
      title: "Benefits Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
        },
        {
          name: "subtitle",
          title: "Section Subtitle",
          type: "text",
          rows: 2,
        },
        {
          name: "benefits",
          title: "Work Benefits",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Benefit Title",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "description",
                  title: "Benefit Description",
                  type: "text",
                  rows: 2,
                },
                {
                  name: "icon",
                  title: "Benefit Icon",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    {
                      name: "alt",
                      type: "string",
                      title: "Alternative Text",
                    },
                  ],
                },
              ],
              preview: {
                select: {
                  title: "title",
                  media: "icon",
                },
              },
            },
          ],
          validation: (Rule) => Rule.min(1).max(12),
        },
      ],
    },
    {
      name: "cultureSection",
      title: "Culture Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
        },
        {
          name: "subtitle",
          title: "Section Subtitle",
          type: "text",
          rows: 2,
        },
        {
          name: "description",
          title: "Culture Description",
          type: "text",
          rows: 4,
        },
        {
          name: "cultureImages",
          title: "Culture Images",
          type: "array",
          description:
            "Images to display in the culture section (up to 7 images recommended)",
          of: [
            {
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
                {
                  name: "caption",
                  type: "string",
                  title: "Caption (optional)",
                },
              ],
              preview: {
                select: {
                  title: "alt",
                  media: "asset",
                },
              },
            },
          ],
          validation: (Rule) => Rule.max(7).min(1),
          options: {
            layout: "grid",
          },
        },
      ],
    },
    {
      name: "openPositionsSection",
      title: "Open Positions Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
        },
        {
          name: "subtitle",
          title: "Section Subtitle",
          type: "text",
          rows: 2,
        },
        {
          name: "showSection",
          title: "Show Open Positions",
          type: "boolean",
          initialValue: true,
        },
      ],
    },
    {
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          validation: (Rule) => Rule.max(60),
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.max(160),
        },
        {
          name: "keywords",
          title: "Keywords",
          type: "array",
          of: [{ type: "string" }],
          options: {
            layout: "tags",
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return {
        title: selection.title || "Careers Page",
      };
    },
  },
});
