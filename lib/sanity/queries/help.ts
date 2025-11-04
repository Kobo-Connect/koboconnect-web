import { defineQuery } from "next-sanity";

// Help Page Queries
export const HELP_PAGE_QUERY = defineQuery(`
  *[_type == "helpPage"][0] {
    _id,
    title,
    slug,
    heroSection {
      badge,
      title,
      subtitle,
      backgroundImage {
        asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        },
        alt
      }
    },
    faqs[]->{
      _id,
      question,
      answer,
      order,
      published
    }
  }
`);

// FAQ Queries
export const ALL_FAQ_ITEMS_QUERY = defineQuery(`
  *[_type == "faqItem" && published == true] | order(order asc, _createdAt desc) {
    _id,
    question,
    answer,
    category->{
      _id,
      title
    },
    order,
    published
  }
`);

export const FAQ_ITEM_BY_ID_QUERY = defineQuery(`
  *[_type == "faqItem" && _id == $id][0] {
    _id,
    question,
    answer,
    category->{
      _id,
      title
    },
    order,
    published
  }
`);
