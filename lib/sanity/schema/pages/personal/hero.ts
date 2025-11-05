import { defineType } from "sanity";

export const kobovaultPersonalHero = defineType({
  name: "kobovaultPersonalHero",
  title: "KoboVault Personal Hero",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "appStoreLink", title: "App Store Link", type: "url" },
    { name: "playStoreLink", title: "Play Store Link", type: "url" },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt Text", type: "string" }],
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt Text", type: "string" }],
    },
    { name: "showSection", title: "Show Section", type: "boolean", initialValue: true },
  ],
});


