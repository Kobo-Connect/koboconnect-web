import { defineType } from "sanity";

export const kobovaultPersonalBenefits = defineType({
  name: "kobovaultPersonalBenefits",
  title: "KoboVault Personal - More Benefits",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "text" },
    {
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
          ],
        },
      ],
    },
    { name: "showSection", title: "Show Section", type: "boolean", initialValue: true },
  ],
});


