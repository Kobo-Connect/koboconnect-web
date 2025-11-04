import { defineQuery } from "next-sanity";

// Article Queries
export const ALL_ARTICLES_QUERY = defineQuery(`
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    content,
    featuredImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    category->{
      _id,
      title,
      slug,
      color,
      backgroundColor
    },
    author,
    publishedAt,
    readTime,
    featured,
    trending,
    recent,
    tags,
    seo
  }
`);

export const FEATURED_ARTICLES_QUERY = defineQuery(`
  *[_type == "article" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    featuredImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    category->{
      _id,
      title,
      slug,
      color,
      backgroundColor
    },
    author,
    publishedAt,
    readTime,
    tags
  }
`);

export const RECENT_ARTICLES_QUERY = defineQuery(`
  *[_type == "article" && recent == true] | order(publishedAt desc) [0...6] {
    _id,
    title,
    slug,
    description,
    featuredImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    category->{
      _id,
      title,
      slug,
      color,
      backgroundColor
    },
    author,
    publishedAt,
    readTime,
    tags
  }
`);

export const TRENDING_ARTICLES_QUERY = defineQuery(`
  *[_type == "article" && trending == true] | order(publishedAt desc) [0...6] {
    _id,
    title,
    slug,
    description,
    featuredImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    category->{
      _id,
      title,
      slug,
      color,
      backgroundColor
    },
    author,
    publishedAt,
    readTime,
    tags
  }
`);

export const ARTICLE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    content,
    featuredImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    category->{
      _id,
      title,
      slug,
      color,
      backgroundColor
    },
    author,
    publishedAt,
    readTime,
    featured,
    trending,
    recent,
    tags,
    seo
  }
`);

export const ARTICLES_BY_CATEGORY_QUERY = defineQuery(`
  *[_type == "article" && category._ref == $categoryId] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    featuredImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    category->{
      _id,
      title,
      slug,
      color,
      backgroundColor
    },
    author,
    publishedAt,
    readTime,
    tags
  }
`);
