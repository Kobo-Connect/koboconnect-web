import { defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "About Us",
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
      initialValue: { current: "about-us" },
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
      name: "whatIsKoboSection",
      title: "What is Kobo Connect Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
          initialValue: "What is Kobo Connect?",
        },
        {
          name: "subtitle",
          title: "Section Subtitle",
          type: "string",
          initialValue: "Africa's next-generation super app.",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          rows: 5,
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
                  title: "Statistic Value",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "label",
                  title: "Statistic Label",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: "value",
                  subtitle: "label",
                },
              },
            },
          ],
          validation: (Rule) => Rule.min(3).max(3),
        },
        {
          name: "phoneImage",
          title: "Phone Image",
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
      name: "builtInAfricaSection",
      title: "Built in Africa Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
          initialValue: "Built In Africa For Africans.",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          rows: 4,
        },
        {
          name: "features",
          title: "Features List",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "text",
                  title: "Feature Text",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "href",
                  title: "Link (optional)",
                  type: "url",
                },
              ],
              preview: {
                select: {
                  title: "text",
                },
              },
            },
          ],
          validation: (Rule) => Rule.min(1).max(6),
        },
        {
          name: "cultureImage",
          title: "Culture Image",
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
      name: "missionSection",
      title: "Mission Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
        },
        {
          name: "description",
          title: "Mission Description",
          type: "text",
          rows: 4,
        },
        {
          name: "image",
          title: "Mission Image",
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
    },
    {
      name: "valuesSection",
      title: "Values Section",
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
          name: "values",
          title: "Company Values",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Value Title",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "description",
                  title: "Value Description",
                  type: "text",
                  rows: 3,
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "image",
                  title: "Value Image",
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
                {
                  name: "icon",
                  title: "Value Icon",
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
              preview: {
                select: {
                  title: "title",
                  media: "icon",
                },
              },
            },
          ],
          validation: (Rule) => Rule.min(1).max(6),
        },
      ],
    },
    {
      name: "teamSection",
      title: "Team Section",
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
          title: "Show Team Section",
          type: "boolean",
          initialValue: true,
        },
        {
          name: "teamMembers",
          title: "Team Members",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "name",
                  title: "Member Name",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "role",
                  title: "Member Role",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "image",
                  title: "Member Photo",
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
                {
                  name: "bio",
                  title: "Member Bio",
                  type: "text",
                  rows: 3,
                },
                {
                  name: "linkedin",
                  title: "LinkedIn URL",
                  type: "url",
                },
                {
                  name: "twitter",
                  title: "Twitter URL",
                  type: "url",
                },
              ],
              preview: {
                select: {
                  title: "name",
                  subtitle: "role",
                  media: "image",
                },
              },
            },
          ],
          validation: (Rule) => Rule.min(1).max(12),
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
        title: selection.title || "About Page",
      };
    },
  },
});
