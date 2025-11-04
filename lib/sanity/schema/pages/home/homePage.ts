import { defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
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
              title: "Alt Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          name: "mainTitle",
          title: "Main Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "typewriterWords",
          title: "Typewriter Words",
          type: "array",
          of: [{ type: "string" }],
          validation: (Rule) => Rule.required().min(1),
        },
        {
          name: "afterTypewriterText",
          title: "After Typewriter Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "appName",
          title: "App Name",
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
          name: "heroImage",
          title: "Hero Image",
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
          name: "appStoreLink",
          title: "App Store Link",
          type: "url",
        },
        {
          name: "playStoreLink",
          title: "Play Store Link",
          type: "url",
        },
      ],
    },
    {
      name: "koboConnectSection",
      title: "Kobo Connect Section",
      type: "object",
      fields: [
        {
          name: "subtitle",
          title: "Subtitle",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "mainTitle",
          title: "Main Title",
          type: "array",
          of: [
            {
              type: "block",
              styles: [
                { title: "Normal", value: "normal" },
                { title: "H1", value: "h1" },
                { title: "H2", value: "h2" },
                { title: "H3", value: "h3" },
                { title: "H4", value: "h4" },
                { title: "H5", value: "h5" },
                { title: "H6", value: "h6" },
              ],
              marks: {
                decorators: [
                  { title: "Strong", value: "strong" },
                  { title: "Emphasis", value: "em" },
                  { title: "Code", value: "code" },
                ],
                annotations: [
                  {
                    title: "URL",
                    name: "link",
                    type: "object",
                    fields: [
                      {
                        title: "URL",
                        name: "href",
                        type: "url",
                      },
                    ],
                  },
                ],
              },
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "description",
          title: "Description",
          type: "array",
          of: [{ type: "text" }],
          validation: (Rule) => Rule.required().min(1),
        },
        {
          name: "servicesImage",
          title: "Services Image",
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
          name: "contactInfo",
          title: "Contact Information",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "value",
                  title: "Value",
                  type: "string",
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
      ],
    },
    {
      name: "solutionSection",
      title: "Solution Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "subtitle",
          title: "Subtitle",
          type: "text",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "solutions",
          title: "Solutions",
          type: "array",
          of: [
            {
              type: "object",
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
              ],
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        },
      ],
    },
    {
      name: "innovativeApproach",
      title: "Innovative Approach Section",
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
          name: "showSection",
          title: "Show Section",
          type: "boolean",
          initialValue: true,
        },
      ],
    },

    {
      name: "faqSection",
      title: "FAQ Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
          initialValue: "FAQ",
        },
        {
          name: "subtitle",
          title: "Subtitle",
          type: "text",
          validation: (Rule) => Rule.required(),
          initialValue: "Frequently Asked Questions",
        },
        {
          name: "faqs",
          title: "FAQs",
          type: "array",
          of: [{ type: "reference", to: [{ type: "faqItem" }] }],
          validation: (Rule) => Rule.required().min(1),
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
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
        },
        {
          name: "keywords",
          title: "Keywords",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
});
