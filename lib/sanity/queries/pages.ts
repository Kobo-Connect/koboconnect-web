import { defineQuery } from "next-sanity";

// Page Queries
export const PRESS_PAGE_QUERY = defineQuery(`
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

export const ABOUT_PAGE_QUERY = defineQuery(`
  *[_type == "aboutPage"][0] {
    _id,
    title,
    slug,
    heroSection,
    missionSection,
    valuesSection,
    teamSection,
    seo
  }
`);

export const HOME_PAGE_QUERY = defineQuery(`
  *[_type == "homePage"][0] {
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
      mainTitle,
      typewriterWords,
      afterTypewriterText,
      appName,
      description,
      heroImage {
        asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      appStoreLink,
      playStoreLink
    },
    koboConnectSection {
      subtitle,
      mainTitle,
      description,
      servicesImage {
        asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      contactInfo[] {
        title,
        value,
        icon {
          asset->{
            _id,
            url,
            metadata {
              dimensions
            }
          },
          alt
        }
      }
    },
    solutionSection {
      title,
      subtitle,
      solutions[] {
        title,
        description
      }
    },
    innovativeApproach {
      _id,
      title,
      description,
      showSection
    },
    faqSection,
    seo {
      metaTitle,
      metaDescription,
      keywords
    }
  }
`);

export const CONTACT_US_PAGE_QUERY = defineQuery(`
  *[_type == "contactUsPage"][0] {
     _id,
     title,
     slug,
     heroSection,
     mapImage,
     contactOptions,
     seo
  }
`);
