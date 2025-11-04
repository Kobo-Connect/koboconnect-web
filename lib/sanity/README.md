# Sanity Schema Documentation - Press Page

This document describes the Sanity schemas created for the Kobo App press page, allowing full customization from the Sanity Studio.

## Schema Overview

The press page schema consists of three main document types:

1. **Category** - Article categories with customizable colors
2. **Article** - Individual articles with rich content and metadata
3. **Press Page** - Main page configuration with all customizable sections

## Schema Types

### 1. Category Schema (`category.ts`)

**Purpose**: Defines article categories with visual customization options.

**Fields**:
- `title` (string): Category name (e.g., "Finance", "Health", "Lifestyle")
- `slug` (slug): URL-friendly identifier
- `description` (text): Optional category description
- `color` (string): Hex color for category badge text (e.g., "#51427F")
- `backgroundColor` (string): Hex color for category badge background (e.g., "#F6F4FF")

**Usage**: Categories are referenced by articles and used to style category badges throughout the press page.

### 2. Article Schema (`article.ts`)

**Purpose**: Individual articles with rich content, metadata, and categorization.

**Key Fields**:
- `title` (string): Article title
- `slug` (slug): URL-friendly identifier
- `description` (text): Short description/excerpt
- `content` (rich text): Full article content with formatting and images
- `featuredImage` (image): Main article image with alt text
- `category` (reference): Links to Category document
- `author` (string): Author name
- `publishedAt` (datetime): Publication date
- `readTime` (number): Estimated reading time in minutes

**Content Management**:
- `featured` (boolean): Mark as featured for hero section
- `trending` (boolean): Mark as trending for trending section
- `recent` (boolean): Mark as recent for recent articles section
- `tags` (array): Searchable tags

**SEO Fields**:
- `seo.metaTitle`: Custom meta title
- `seo.metaDescription`: Meta description
- `seo.keywords`: SEO keywords

**Ordering Options**:
- Published date (newest/oldest)
- Title (A-Z)

### 3. Press Page Schema (`pressPage.ts`)

**Purpose**: Main page configuration allowing full customization of all sections.

#### Hero Section
- `backgroundImage`: Hero background image
- `title`: Hero section title
- `subtitle`: Hero section description
- `featuredArticle`: Optional reference to featured article

#### Recent Articles Section
- `title`: Section title (default: "Our recent articles")
- `subtitle`: Section description
- `showSection`: Toggle section visibility
- `limit`: Number of articles to display (1-12)

#### Trending Articles Section
- `title`: Section title (default: "Trending articles you need to check out")
- `subtitle`: Section description
- `badgeText`: Badge text (default: "Trending")
- `showSection`: Toggle section visibility
- `limit`: Number of articles to display (1-12)

#### Insider Tips Section
- `title`: Section title
- `subtitle`: Section description
- `showSection`: Toggle section visibility
- `tips`: Array of tip objects with:
  - `title`: Tip title
  - `description`: Tip description
  - `image`: Tip image
  - `backgroundColor`: Background color (hex)
  - `textColor`: Text color (hex)

#### Subscribe Section
- `title`: Section title
- `subtitle`: Section description
- `image`: Section image
- `buttonText`: Subscribe button text
- `placeholderText`: Email input placeholder
- `showSection`: Toggle section visibility

## Queries

The schema includes comprehensive queries for fetching data:

### Page Queries
- `PRESS_PAGE_QUERY`: Get main press page configuration
- `ARTICLE_BY_SLUG_QUERY`: Get individual article by slug

### Article Queries
- `ALL_ARTICLES_QUERY`: Get all articles with full data
- `FEATURED_ARTICLES_QUERY`: Get featured articles
- `RECENT_ARTICLES_QUERY`: Get recent articles
- `TRENDING_ARTICLES_QUERY`: Get trending articles
- `ARTICLES_BY_CATEGORY_QUERY`: Get articles by category

### Category Queries
- `ALL_CATEGORIES_QUERY`: Get all categories

## Usage in Components

### Example: Fetching Press Page Data

```typescript
import { client } from '@/lib/sanity/client'
import { PRESS_PAGE_QUERY } from '@/lib/sanity/queries'

const pressPageData = await client.fetch(PRESS_PAGE_QUERY)
```

### Example: Fetching Recent Articles

```typescript
import { client } from '@/lib/sanity/client'
import { RECENT_ARTICLES_QUERY } from '@/lib/sanity/queries'

const recentArticles = await client.fetch(RECENT_ARTICLES_QUERY)
```

## Studio Customization

The schema allows content editors to:

1. **Create and manage categories** with custom colors
2. **Write and publish articles** with rich content
3. **Configure page sections** including titles, descriptions, and visibility
4. **Customize visual elements** like colors and images
5. **Manage article placement** in different sections (featured, trending, recent)
6. **Control SEO settings** for better search visibility

## Content Workflow

1. **Create Categories**: Set up article categories with colors
2. **Write Articles**: Create articles and assign to categories
3. **Configure Page**: Set up press page sections and content
4. **Publish**: Articles and page changes go live immediately

## Best Practices

1. **Consistent Categories**: Use consistent category names and colors
2. **Quality Images**: Ensure all images have proper alt text
3. **SEO Optimization**: Fill in SEO fields for better search visibility
4. **Content Organization**: Use tags and categories effectively
5. **Regular Updates**: Keep content fresh with regular article publishing

## Integration Notes

- All schemas are fully integrated with the existing Sanity configuration
- Queries use `defineQuery` for optimal performance
- Images include hotspot configuration for responsive cropping
- Rich text content supports formatting and embedded images
- All color fields validate hex color codes
