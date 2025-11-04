import { defineQuery } from "next-sanity";

// Press page specific queries
export const PRESS_PAGE_DATA_QUERY = defineQuery(`
  *[_type == "pressPage"][0] {
    _id,
    title,
    slug,
    heroSection {
      backgroundImage {
        asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      title,
      subtitle,
      featuredArticle->{
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
          title,
          color,
          backgroundColor
        },
        author,
        publishedAt,
        readTime
      }
    },
    recentArticlesSection {
      title,
      subtitle,
      showSection,
      limit
    },
    trendingArticlesSection {
      title,
      subtitle,
      badgeText,
      showSection,
      limit
    },
    insiderTipsSection {
      title,
      subtitle,
      showSection,
      tips[] {
        title,
        description,
        image {
          asset->{
            _id,
            url,
            metadata {
              dimensions
            }
          },
          alt
        },
        backgroundColor,
        textColor
      }
    },
    subscribeSection {
      title,
      subtitle,
      image {
        asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      buttonText,
      placeholderText,
      showSection
    },
    seo {
      metaTitle,
      metaDescription,
      keywords
    }
  }
`);

// Press page specific article queries (re-exported for convenience)
export {
  RECENT_ARTICLES_QUERY as RECENT_ARTICLES_FOR_PRESS_QUERY,
  TRENDING_ARTICLES_QUERY as TRENDING_ARTICLES_FOR_PRESS_QUERY,
  FEATURED_ARTICLES_QUERY as FEATURED_ARTICLE_FOR_HERO_QUERY,
} from "./articles";
