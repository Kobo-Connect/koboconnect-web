import { defineType } from "sanity";

export const getStartedCta = defineType({
  name: "getStartedCta",
  title: "Get Started CTA Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ratingText",
      title: "Rating Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ratingValue",
      title: "Rating Value",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(5),
    },

    {
      name: "ratingDescription",
      title: "Rating Description",
      type: "string",
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
      name: "footerText",
      title: "Footer Text",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      subtitle: "ratingText",
    },
  },
});
