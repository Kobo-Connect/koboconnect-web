import { defineType } from "sanity";

export default defineType({
  name: "faqItem",
  title: "FAQ Item",
  type: "document",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "answer",
      title: "Answer",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first within the category",
      initialValue: 0,
    },
    {
      name: "published",
      title: "Published",
      type: "boolean",
      description: "Unpublished FAQs won't appear on the help page",
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Question A-Z",
      name: "questionAsc",
      by: [{ field: "question", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "question",
      answer: "answer",
    },
    prepare(selection) {
      const { answer } = selection;
      return {
        ...selection,
        answer: answer && `Answer: ${answer}`,
      };
    },
  },
});
