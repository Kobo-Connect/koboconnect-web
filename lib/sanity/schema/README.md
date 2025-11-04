# Sanity Schema Organization

This document explains the organized structure of Sanity schemas for the Kobo App project.

## Folder Structure

```
lib/sanity/schema/
├── shared/                    # Shared schemas used across multiple pages
│   ├── article.ts            # Article schema (used by press, blog, etc.)
│   ├── category.ts           # Category schema (used by articles, etc.)
│   └── index.ts              # Exports all shared schemas
├── pages/                    # Page-specific schemas
│   ├── press/                # Press page schemas
│   │   ├── pressPage.ts      # Press page configuration
│   │   └── index.ts          # Exports press schemas
│   ├── about/                # About page schemas (future)
│   │   ├── aboutPage.ts      # About page configuration
│   │   ├── teamMember.ts     # Team member schema
│   │   └── index.ts          # Exports about schemas
│   ├── careers/              # Careers page schemas (future)
│   │   ├── careersPage.ts    # Careers page configuration
│   │   ├── jobPosting.ts     # Job posting schema
│   │   └── index.ts          # Exports careers schemas
│   └── index.ts              # Exports all page schemas
└── index.ts                  # Main index exporting all schemas
```

## Schema Categories

### Shared Schemas (`/shared/`)

These schemas are used across multiple pages and features:

- **Article** (`article.ts`): Individual articles with rich content, metadata, and categorization
- **Category** (`category.ts`): Article categories with customizable colors and styling

### Page-Specific Schemas (`/pages/`)

These schemas are specific to individual pages:

#### Press Page (`/pages/press/`)
- **Press Page** (`pressPage.ts`): Main press page configuration with all customizable sections

#### About Page (`/pages/about/`) - Future
- **About Page** (`aboutPage.ts`): About page configuration
- **Team Member** (`teamMember.ts`): Team member profiles
- **Company Values** (`companyValue.ts`): Company values and principles

#### Careers Page (`/pages/careers/`) - Future
- **Careers Page** (`careersPage.ts`): Careers page configuration
- **Job Posting** (`jobPosting.ts`): Individual job postings
- **Department** (`department.ts`): Job departments/categories

## Benefits of This Structure

### 1. **Scalability**
- Easy to add new pages without cluttering the root schema folder
- Clear separation between shared and page-specific schemas
- Each page can have multiple related schemas

### 2. **Maintainability**
- Related schemas are grouped together
- Easy to find and modify page-specific schemas
- Clear import/export structure

### 3. **Team Collaboration**
- Different team members can work on different page schemas
- Reduced merge conflicts
- Clear ownership of different schema areas

### 4. **Code Organization**
- Follows Next.js app directory structure
- Consistent with modern React/Next.js patterns
- Easy to understand for new team members

## Adding New Schemas

### Adding a Shared Schema

1. Create the schema file in `/shared/`
2. Add the export to `/shared/index.ts`
3. The schema will be automatically included in the main export

### Adding a Page Schema

1. Create the schema file in the appropriate page folder (e.g., `/pages/about/`)
2. Add the export to the page's `index.ts` file
3. The schema will be automatically included in the main export

### Adding a New Page

1. Create a new folder in `/pages/` (e.g., `/pages/contact/`)
2. Create an `index.ts` file in the new folder
3. Add the new page schemas to `/pages/index.ts`
4. Create your page-specific schemas

## Example: Adding About Page Schemas

```typescript
// lib/sanity/schema/pages/about/aboutPage.ts
import { defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    // About page fields
  ],
});

// lib/sanity/schema/pages/about/teamMember.ts
import { defineType } from "sanity";

export default defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    // Team member fields
  ],
});

// lib/sanity/schema/pages/about/index.ts
import aboutPage from './aboutPage'
import teamMember from './teamMember'

export const aboutSchemas = [
  aboutPage,
  teamMember,
]
```

## Import Structure

The main schema index automatically imports all schemas:

```typescript
// lib/sanity/schema/index.ts
import { sharedSchemas } from './shared'
import { pageSchemas } from './pages'

export const schemaTypes = [
  ...sharedSchemas,
  ...pageSchemas,
]
```

This structure ensures that:
- All schemas are automatically included
- New schemas are automatically picked up
- The Sanity Studio configuration remains clean and simple

## Migration Notes

The existing schemas have been moved to this new structure:
- `article.ts` → `shared/article.ts`
- `category.ts` → `shared/category.ts`
- `pressPage.ts` → `pages/press/pressPage.ts`

All imports and exports have been updated to maintain compatibility.
