import { defineType } from "sanity";

export const testimonials = defineType({
  name: "testimonials",
  title: "Testimonials Section",
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
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "title",
              title: "Title/Position",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "comment",
              title: "Comment",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "rating",
              title: "Rating",
              type: "number",
              validation: (Rule) => Rule.required().min(1).max(5),
            },
            {
              name: "image",
              title: "Profile Image",
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
