import { defineQuery } from "next-sanity";

// Category Queries
export const ALL_CATEGORIES_QUERY = defineQuery(`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    color,
    backgroundColor
  }
`);

export const CATEGORY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    color,
    backgroundColor
  }
`);
