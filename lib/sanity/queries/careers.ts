import { defineQuery } from "next-sanity";

// Careers page specific queries
export const CAREERS_PAGE_DATA_QUERY = defineQuery(`
  *[_type == "careersPage"][0] {
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
    benefitsSection {
      title,
      subtitle,
      benefits[] {
        title,
        description,
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
    cultureSection {
      title,
      description,
      cultureImages[] {
        asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        },
        alt,
        caption
      }
    },
    openPositionsSection {
      title,
      subtitle,
      showSection
    },
    seo {
      metaTitle,
      metaDescription,
      keywords
    }
  }
`);

// Query for open positions (could be expanded to fetch from a separate positions collection)
export const OPEN_POSITIONS_QUERY = defineQuery(`
  *[_type == "jobPosition" && isActive == true] {
    _id,
    title,
    location,
    description,
    requirements,
    benefits,
    publishedAt,
    department,
    employmentType,
    experienceLevel,
    salaryRange,
    applicationUrl
  } | order(publishedAt desc)
`);
