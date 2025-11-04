# Help Page Sanity Schema

This document describes the simplified Sanity schemas created for the Help page, including FAQ management and content customization.

## Schema Overview

The help page consists of two main document types:

1. **Help Page** (`helpPage.ts`) - Main page configuration with FAQ references
2. **FAQ Item** (`faqItem.ts`) - Individual FAQ questions and answers

## Schema Types

### 1. Help Page Schema (`helpPage.ts`)

**Purpose**: Main help page configuration with customizable sections.

**Fields**:
- `title` (string): Page title (default: "Help")
- `slug` (slug): URL-friendly identifier
- `heroSection` (object): Hero section configuration
  - `badge` (string): Badge text (default: "Help")
  - `title` (string): Hero title
  - `subtitle` (text): Hero description
  - `backgroundImage` (image): Hero background image
- `faqs` (array): References to FAQ items to display on the page

### 2. FAQ Item Schema (`faqItem.ts`)

**Purpose**: Individual FAQ questions and answers with simple text content.

**Fields**:
- `question` (string): FAQ question
- `answer` (text): FAQ answer (simple text)
- `order` (number): Display order
- `published` (boolean): Control visibility

**Features**:
- Simple text answers (no rich text formatting)
- Ordering system for display sequence
- Publishing control for draft/published states

## Content Management Features

### FAQ Organization
- **Direct References**: Select specific FAQs to display on the help page
- **Ordering**: Control display sequence with order field
- **Publishing Control**: Show/hide FAQs as needed

### Content Customization
- **Simple Text Answers**: Clean, readable FAQ answers
- **Hero Section**: Customizable page header with background image
- **FAQ Selection**: Choose which FAQs to display on the help page

### External Search Integration
- **Algolia Search**: Search functionality handled externally
- **Simple Structure**: Optimized for external search indexing

## Queries

### Help Page Queries
- `HELP_PAGE_QUERY`: Get complete help page configuration with FAQ references
- `ALL_FAQ_ITEMS_QUERY`: Get all published FAQs
- `FAQ_ITEM_BY_ID_QUERY`: Get specific FAQ item

## Usage Examples

### Fetching Help Page Data
```typescript
import { client } from '@/lib/sanity/client'
import { HELP_PAGE_QUERY } from '@/lib/sanity/queries/help'

const helpPageData = await client.fetch(HELP_PAGE_QUERY)
```

### Fetching FAQs
```typescript
import { ALL_FAQ_ITEMS_QUERY } from '@/lib/sanity/queries/help'

const faqs = await client.fetch(ALL_FAQ_ITEMS_QUERY)
```

### Using FAQ References in Help Page
```typescript
// FAQs are automatically included in the help page query
const helpPageData = await client.fetch(HELP_PAGE_QUERY)
const faqs = helpPageData.faqs // Array of FAQ items
```

## Components

### Help Page Components
- **Hero**: Displays hero section with background image and text
- **Accordion**: FAQ display with simple text support (receives FAQs as props)

### Component Features
- **Fallback Data**: Graceful handling when Sanity data is unavailable
- **Props-based FAQs**: FAQs passed directly from help page data
- **Simple Text Rendering**: Clean display of FAQ answers
- **Responsive Design**: Mobile-friendly layout
- **External Search Ready**: Optimized for Algolia integration

## Content Workflow

### For Content Editors
1. **Create FAQs**: Add questions with simple text answers
2. **Organize Content**: Use ordering to control display sequence
3. **Configure Help Page**: Set up hero section and select FAQs to display
4. **Publish**: Content goes live immediately

### For Developers
1. **Schema Integration**: All schemas automatically included
2. **Query Usage**: Import queries from organized structure
3. **Component Updates**: Components handle Sanity data with fallbacks
4. **Type Safety**: Full TypeScript support throughout
5. **External Search**: Ready for Algolia integration

## Best Practices

### Content Management
1. **Use Categories**: Organize FAQs logically
2. **Simple Answers**: Keep FAQ answers clear and concise
3. **Ordering**: Use display order to prioritize important FAQs
4. **Regular Updates**: Keep content fresh and relevant
5. **Publishing Control**: Use draft/published states effectively

### Technical Implementation
1. **Fallback Data**: Always provide fallbacks for missing content
2. **Loading States**: Show appropriate loading indicators
3. **Error Handling**: Gracefully handle API failures
4. **Performance**: Use efficient queries and caching
5. **Accessibility**: Ensure proper semantic markup
6. **Search Integration**: Prepare data structure for Algolia indexing

## Integration Notes

- All schemas are fully integrated with the existing Sanity configuration
- Queries use `defineQuery` for optimal performance
- Images include hotspot configuration for responsive cropping
- Simple text structure optimized for external search indexing
- Clean, minimal schema structure for easy maintenance
- Ready for Algolia search integration
