# Accessibility Demo Website

A Next.js project demonstrating the difference between an accessible website built to **WCAG 2.2 Level A** standards and one with common accessibility violations.

## Overview

This project provides two nearly identical pages to help developers learn about web accessibility:

- **Accessible Page** (`/accessible`) - Fully compliant with WCAG 2.2 Level A standards
- **Inaccessible Page** (`/inaccessible`) - Contains intentional accessibility violations

Both pages share the same layout and content structure but implement different accessibility practices.

## What's on Each Page

Both pages include:

1. **Header & Navigation** - Site navigation with links to both pages
2. **Page Heading** - Main title of the page
3. **Introductory Content** - Overview text explaining the page
4. **Image** - Demonstrates proper vs improper image accessibility
5. **Data Table** - Shows table structure and labeling best practices
6. **Contact Form** - Highlights form accessibility differences
7. **Footer** - Navigation and site information

## Accessibility Features Comparison

### Accessible Page ✓

#### HTML Structure
- Uses semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Proper heading hierarchy (h1 → h2 → h3)
- Descriptive link text

#### Images
- Includes descriptive alt text for all images
- Provides figure captions for context
- Example: `alt="A placeholder image demonstrating accessible image practices with descriptive alt text"`

#### Forms
- All inputs have associated `<label>` elements using `htmlFor`
- Form fields have descriptive `aria-describedby` attributes
- Helper text explains expected input
- Checkbox labels include explicit text
- Visual focus indicators (ring-2 focus rings)
- Required fields marked with aria labels

#### Tables
- Uses semantic table structure (`<caption>`, `<thead>`, `<tbody>`)
- Header cells have `scope="col"` attributes
- Row headers have `scope="row"` attributes
- Table has descriptive caption

#### Color & Contrast
- High color contrast ratios (blue #3B82F6 on white, white on dark backgrounds)
- Color is never the only means of conveying information
- Focus indicators provide visual feedback

#### Navigation & Keyboard Support
- All interactive elements are keyboard accessible
- Focus indicators are clearly visible
- Navigation includes `aria-label` attributes for clarity

#### Form Validation
- Uses `role="status"` and `aria-live="polite"` for success messages
- Screen reader friendly feedback

### Inaccessible Page ✗

#### HTML Structure
- Uses `<div>` elements instead of semantic HTML
- No `<header>`, `<nav>`, `<main>`, or `<footer>` elements
- Improper heading hierarchy

#### Images
- Missing `alt` attribute (empty alt text)
- No figure captions or context
- Image is purely decorative in terms of accessibility

#### Forms
- Input fields use `<div>` labels instead of `<label>` elements
- No `htmlFor` or `id` associations
- No helper text or descriptions
- No `aria-describedby` attributes
- Checkboxes lack proper labels
- No focus indicators
- No aria-labels for required fields

#### Tables
- Uses inline styles instead of semantic structure
- Missing `<caption>` element
- No `scope` attributes on headers
- No table header structure
- Harder to navigate with assistive technology

#### Color & Contrast
- Low color contrast (gray #666666 on gray #888888 background)
- Text may be hard to read for users with color blindness
- No visible focus indicators
- Red asterisks to indicate required fields (color only)

#### Navigation & Keyboard Support
- Limited keyboard navigation support
- No visible focus management
- Forms lack proper focus management

#### Form Validation
- No `role="status"` or `aria-live` attributes
- Screen reader users won't be notified of form submission
- No accessible feedback mechanism

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Navigation

- **Home Page** (`/`) - Overview and links to both demo pages
- **Accessible Page** (`/accessible`) - WCAG 2.2 Level A compliant
- **Inaccessible Page** (`/inaccessible`) - With accessibility violations

## Testing Accessibility

### Screen Reader Testing
Use these tools to test the pages with screen readers:
- **macOS**: VoiceOver (Cmd+F5)
- **Windows**: NVDA (free, [https://www.nvaccess.org/](https://www.nvaccess.org/))
- **Windows**: JAWS (commercial)
- **Chrome**: ChromeVox extension

### Keyboard Navigation
Test by using Tab and Shift+Tab to navigate through interactive elements. The accessible page should have clear focus indicators.

### Automated Testing
Use accessibility testing tools:
- **Axe DevTools** browser extension
- **WAVE** - WebAIM's Web Accessibility Evaluation Tool
- **Lighthouse** - Built into Chrome DevTools

### Manual Testing Checklist

- [ ] Keyboard navigation works throughout the site
- [ ] Focus indicators are visible on all interactive elements
- [ ] Heading hierarchy is logical (h1 → h2 → h3, etc.)
- [ ] Images have meaningful alt text
- [ ] Form labels are properly associated with inputs
- [ ] Table headers are marked as scope="col" or scope="row"
- [ ] Color contrast meets WCAG AA standards (4.5:1 for text)
- [ ] No color used as the only means of conveyance
- [ ] Navigation is consistent across pages
- [ ] Form validation is accessible (aria-live regions)

## WCAG 2.2 Level A Compliance

The **Accessible Page** addresses the following WCAG 2.2 Level A criteria:

### Perceivable
- **1.1.1 Non-text Content**: Images have alt text
- **1.4.1 Use of Color**: Information isn't conveyed by color alone

### Operable
- **2.1.1 Keyboard**: All functionality available via keyboard
- **2.4.1 Bypass Blocks**: Navigation isn't repeated
- **2.4.3 Focus Order**: Focus order is logical
- **2.4.7 Focus Visible**: Focus indicators are visible

### Understandable
- **3.2.1 On Focus**: No unexpected context changes on focus
- **3.3.1 Error Identification**: Errors are clearly identified
- **3.3.4 Error Prevention**: Submissions can be confirmed

### Robust
- **4.1.1 Parsing**: Valid HTML structure
- **4.1.2 Name, Role, Value**: Components properly exposed

## Key Accessibility Improvements

1. **Semantic HTML** - Use `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`
2. **Heading Hierarchy** - Use h1-h6 in order, one h1 per page
3. **Image Alt Text** - Describe images concisely and meaningfully
4. **Form Labels** - Always use `<label>` elements associated with inputs
5. **Color Contrast** - Maintain 4.5:1 ratio for text on background
6. **Keyboard Navigation** - Ensure all features work with keyboard
7. **Focus Management** - Show visible focus indicators
8. **ARIA Attributes** - Use when semantic HTML isn't sufficient
9. **Consistent Navigation** - Keep navigation consistent across pages
10. **Error Handling** - Provide clear feedback and instructions

## Technologies Used

- **Next.js 16** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **React 19** - UI library

## File Structure

```
app/
├── accessible/
│   └── page.tsx           # Accessible demo page
├── inaccessible/
│   └── page.tsx           # Inaccessible demo page
├── components/
│   ├── AccessibleHeader.tsx      # Semantic header component
│   ├── AccessibleFooter.tsx      # Semantic footer component
│   ├── AccessibleForm.tsx        # Accessible form component
│   ├── AccessibleTable.tsx       # Accessible table component
│   ├── InaccessibleHeader.tsx    # Non-semantic header
│   ├── InaccessibleFooter.tsx    # Non-semantic footer
│   ├── InaccessibleForm.tsx      # Inaccessible form
│   └── InaccessibleTable.tsx     # Inaccessible table
├── layout.tsx             # Root layout
├── page.tsx               # Home page
└── globals.css            # Global styles
```

## Resources

- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [Web Content Accessibility Guidelines (WCAG) Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [WebAIM - Web Accessibility In Mind](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)
- [MDN - Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Deque University](https://dequeuniversity.com/)

## License

This project is open source and available for educational purposes.

## Learning Goals

Use this project to understand:
- How to build accessible websites
- Common accessibility mistakes to avoid
- How assistive technologies interact with websites
- WCAG 2.2 Level A compliance requirements
- Best practices for semantic HTML
- Form accessibility patterns
- Image accessibility techniques
- Color contrast and readability
- Keyboard navigation implementation

