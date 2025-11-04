# Sanity Queries Organization

This folder contains all Sanity queries organized by feature/entity type for better maintainability and discoverability.

## Folder Structure

```
lib/sanity/queries/
├── articles.ts          # Article-related queries
├── categories.ts        # Category-related queries
├── pages.ts            # Page configuration queries
├── press.ts            # Press page specific queries
├── index.ts            # Main export file
└── README.md           # This documentation
```

## Query Files

### `articles.ts`
Contains all article-related queries:
- `ALL_ARTICLES_QUERY` - Get all articles with full data
- `FEATURED_ARTICLES_QUERY` - Get featured articles
- `RECENT_ARTICLES_QUERY` - Get recent articles
- `TRENDING_ARTICLES_QUERY` - Get trending articles
- `ARTICLE_BY_SLUG_QUERY` - Get individual article by slug
- `ARTICLES_BY_CATEGORY_QUERY` - Get articles by category

### `categories.ts`
Contains category-related queries:
- `ALL_CATEGORIES_QUERY` - Get all categories
- `CATEGORY_BY_SLUG_QUERY` - Get category by slug

### `pages.ts`
Contains page configuration queries:
- `PRESS_PAGE_QUERY` - Get press page configuration
- `ABOUT_PAGE_QUERY` - Get about page configuration
- `CAREERS_PAGE_QUERY` - Get careers page configuration

### `press.ts`
Contains press page specific queries:
- `PRESS_PAGE_DATA_QUERY` - Get complete press page data
- `RECENT_ARTICLES_FOR_PRESS_QUERY` - Re-exported from articles.ts
- `TRENDING_ARTICLES_FOR_PRESS_QUERY` - Re-exported from articles.ts
- `FEATURED_ARTICLE_FOR_HERO_QUERY` - Re-exported from articles.ts

### `index.ts`
Main export file that re-exports all queries for easy importing:
```typescript
// You can import from the main index
import { ALL_ARTICLES_QUERY, PRESS_PAGE_QUERY } from '@/lib/sanity/queries'

// Or import from specific files
import { ALL_ARTICLES_QUERY } from '@/lib/sanity/queries/articles'
import { PRESS_PAGE_QUERY } from '@/lib/sanity/queries/pages'
```

## Usage Examples

### Importing Queries

```typescript
// Import from main index (recommended for most cases)
import { 
  ALL_ARTICLES_QUERY, 
  PRESS_PAGE_QUERY 
} from '@/lib/sanity/queries'

// Import from specific files (for better tree-shaking)
import { ALL_ARTICLES_QUERY } from '@/lib/sanity/queries/articles'
import { PRESS_PAGE_QUERY } from '@/lib/sanity/queries/pages'
```

### Using in Components

```typescript
// In a Server Component
async function PressPage() {
  const pressData = await client.fetch(PRESS_PAGE_QUERY)
  const articles = await client.fetch(ALL_ARTICLES_QUERY)
  
  return <div>...</div>
}

// With parameters
async function ArticlePage({ slug }: { slug: string }) {
  const article = await client.fetch(ARTICLE_BY_SLUG_QUERY, { slug })
  
  return <div>...</div>
}
```

## Benefits of This Organization

### 1. **Discoverability**
- Easy to find queries related to specific features
- Clear naming convention
- Logical grouping

### 2. **Maintainability**
- Related queries are grouped together
- Easy to update queries for specific features
- Reduced file size and complexity

### 3. **Reusability**
- Queries can be easily imported where needed
- No duplication of similar queries
- Consistent query structure

### 4. **Scalability**
- Easy to add new query files for new features
- Clear separation of concerns
- Team-friendly organization

## Adding New Queries

### For Existing Features
Add new queries to the appropriate existing file:

```typescript
// In articles.ts
export const ARTICLES_BY_AUTHOR_QUERY = defineQuery(`
  *[_type == "article" && author == $author] | order(publishedAt desc) {
    // query fields
  }
`);
```

### For New Features
Create a new query file:

```typescript
// In queries/products.ts
import { defineQuery } from "next-sanity";

export const ALL_PRODUCTS_QUERY = defineQuery(`
  *[_type == "product"] {
    // query fields
  }
`);

// Then export from index.ts
export * from './products';
```

## Best Practices

1. **Use descriptive names** that clearly indicate what the query returns
2. **Include all necessary fields** in each query to avoid over-fetching
3. **Use consistent field ordering** across similar queries
4. **Document complex queries** with comments when needed
5. **Export from index.ts** to make imports easier
6. **Keep related queries together** in the same file
7. **Use re-exports** to avoid duplication while maintaining convenience
