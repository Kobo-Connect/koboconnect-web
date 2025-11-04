import { defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "color",
      title: "Category Color",
      type: "string",
      description: "Hex color code for category badge (e.g., #51427F)",
      validation: (Rule) =>
        Rule.regex(/^#[0-9A-F]{6}$/i, "Please enter a valid hex color code"),
    },
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      description:
        "Hex color code for category badge background (e.g., #F6F4FF)",
      validation: (Rule) =>
        Rule.regex(/^#[0-9A-F]{6}$/i, "Please enter a valid hex color code"),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});
