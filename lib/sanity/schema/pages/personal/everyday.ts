import { defineType } from "sanity";

export const kobovaultPersonalEveryday = defineType({
  name: "kobovaultPersonalEveryday",
  title: "KoboVault Personal - Built for Everyday",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "text" },
    {
      name: "leftImage",
      title: "Left Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt Text", type: "string" }],
    },
    {
      name: "overlayImage",
      title: "Overlay Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt Text", type: "string" }],
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
            { name: "iconColor", title: "Icon Color", type: "string" },
            { name: "iconBg", title: "Icon Background", type: "string" },
          ],
        },
      ],
    },
    { name: "showSection", title: "Show Section", type: "boolean", initialValue: true },
  ],
});


