import { defineQuery } from "next-sanity";

// About page specific queries
export const ABOUT_PAGE_DATA_QUERY = defineQuery(`
  *[_type == "aboutPage"][0] {
    _id,
    title,
    slug,
    heroSection {
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
    whatIsKoboSection {
      title,
      subtitle,
      description,
      stats[] {
        value,
        label
      },
      phoneImage {
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
    builtInAfricaSection {
      title,
      description,
      features[] {
        text,
        href
      },
      cultureImage {
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
    missionSection {
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
      }
    },
    valuesSection {
      title,
      subtitle,
      values[] {
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
    teamSection {
      title,
      subtitle,
      showSection,
      teamMembers[] {
        name,
        role,
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
        bio,
        linkedin,
        twitter
      }
    },
    seo {
      metaTitle,
      metaDescription,
      keywords
    }
  }
`);

// Additional queries for about page sections
export const WHAT_IS_KOBO_SECTION_QUERY = defineQuery(`
  *[_type == "aboutPage"][0] {
    whatIsKoboSection {
      title,
      subtitle,
      description,
      stats[] {
        value,
        label
      },
      phoneImage {
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
  }
`);

export const BUILT_IN_AFRICA_SECTION_QUERY = defineQuery(`
  *[_type == "aboutPage"][0] {
    builtInAfricaSection {
      title,
      description,
      features[] {
        text,
        href
      },
      cultureImage {
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
  }
`);
