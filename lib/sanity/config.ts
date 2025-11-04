"use client";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schema";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const token = process.env.SANITY_API_TOKEN!;

export default defineConfig({
  basePath: "/studio", // `basePath` must match the route of your Studio
  projectId,
  dataset,
  plugins: [structureTool()],
  token,
  schema: { types: schemaTypes },
});
