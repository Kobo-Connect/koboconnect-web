import { defineType } from "sanity";

export default defineType({
  name: "pressPage",
  title: "Press Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "Press",
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
      initialValue: { current: "press" },
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
              type: "string",
              title: "Alternative Text",
              validation: (Rule) => Rule.required(),
            },
          ],
          validation: (Rule) => Rule.required(),
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
          name: "featuredArticle",
          title: "Featured Article",
          type: "reference",
          to: { type: "article" },
          description: "Select an article to feature in the hero section",
        },
      ],
    },
    {
      name: "recentArticlesSection",
      title: "Recent Articles Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
          initialValue: "Our recent articles",
        },
        {
          name: "subtitle",
          title: "Section Subtitle",
          type: "string",
          initialValue: "Stay informed with our latest insights",
        },
        {
          name: "showSection",
          title: "Show Section",
          type: "boolean",
          initialValue: true,
        },
        {
          name: "limit",
          title: "Number of Articles to Show",
          type: "number",
          initialValue: 3,
          validation: (Rule) => Rule.min(1).max(12),
        },
      ],
    },
    {
      name: "trendingArticlesSection",
      title: "Trending Articles Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
          initialValue: "Trending articles you need to check out",
        },
        {
          name: "subtitle",
          title: "Section Subtitle",
          type: "string",
          initialValue:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros.",
        },
        {
          name: "badgeText",
          title: "Badge Text",
          type: "string",
          initialValue: "Trending",
        },
        {
          name: "showSection",
          title: "Show Section",
          type: "boolean",
          initialValue: true,
        },
        {
          name: "limit",
          title: "Number of Articles to Show",
          type: "number",
          initialValue: 3,
          validation: (Rule) => Rule.min(1).max(12),
        },
      ],
    },
    {
      name: "insiderTipsSection",
      title: "Insider Tips Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
          initialValue: "Insider tips and tricks for maximum efficiency",
        },
        {
          name: "subtitle",
          title: "Section Subtitle",
          type: "string",
          initialValue:
            "Discover valuable insights to optimize your business and maximize efficiency.",
        },
        {
          name: "showSection",
          title: "Show Section",
          type: "boolean",
          initialValue: true,
        },
        {
          name: "tips",
          title: "Tips and Tricks",
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
                  rows: 3,
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "image",
                  title: "Image",
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
                  name: "backgroundColor",
                  title: "Background Color",
                  type: "string",
                  description: "Hex color code (e.g., #EBFFFB)",
                  validation: (Rule) =>
                    Rule.regex(
                      /^#[0-9A-F]{6}$/i,
                      "Please enter a valid hex color code"
                    ),
                },
                {
                  name: "textColor",
                  title: "Text Color",
                  type: "string",
                  description: "Hex color code (e.g., #010101)",
                  validation: (Rule) =>
                    Rule.regex(
                      /^#[0-9A-F]{6}$/i,
                      "Please enter a valid hex color code"
                    ),
                },
              ],
              preview: {
                select: {
                  title: "title",
                  media: "image",
                },
              },
            },
          ],
          validation: (Rule) => Rule.min(1).max(6),
        },
      ],
    },
    {
      name: "subscribeSection",
      title: "Subscribe Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          initialValue: "Read more articles like this",
        },
        {
          name: "subtitle",
          title: "Subtitle",
          type: "string",
          initialValue:
            "Lorem ipsum dolor sit amet, consectetur adip elit. Praesent eget leo ac eros facilisis finibus.",
        },
        {
          name: "image",
          title: "Image",
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
          name: "buttonText",
          title: "Button Text",
          type: "string",
          initialValue: "Subscribe",
        },
        {
          name: "placeholderText",
          title: "Email Placeholder Text",
          type: "string",
          initialValue: "Enter your email",
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
        title: selection.title || "Press Page",
      };
    },
  },
});
