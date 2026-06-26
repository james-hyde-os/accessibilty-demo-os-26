# Accessibility Audit: Violations Guide

This document details all accessibility violations on the Inaccessible Page and the corrections made on the Accessible Page.

## Violations Summary

### 1. Non-Semantic HTML Structure

**Violation:** Inaccessible page uses `<div>` elements instead of semantic HTML

**Code (Inaccessible):**
```jsx
<div className="bg-blue-600 text-white shadow-lg">
  <div className="text-3xl font-bold mb-4">Accessibility Demo Site</div>
  <div>
    <ul className="flex flex-wrap gap-4">
      {/* Navigation items */}
    </ul>
  </div>
</div>
```

**Code (Accessible):**
```jsx
<header className="bg-blue-600 text-white shadow-lg">
  <h1 className="text-3xl font-bold mb-4">Accessibility Demo Site</h1>
  <nav aria-label="Main navigation">
    <ul className="flex flex-wrap gap-4">
      {/* Navigation items */}
    </ul>
  </nav>
</header>
```

**Why It Matters:**
- Screen reader users can't identify structural sections
- Assistive technologies can't properly announce page landmarks
- Semantic HTML provides context and meaning

**WCAG Criterion:** 4.1.1 Parsing (Level A)

---

### 2. Missing Image Alt Text

**Violation:** Image has empty or missing `alt` attribute

**Code (Inaccessible):**
```jsx
<Image
  src="https://via.placeholder.com/600x300/cccccc/999999?text=Inaccessible+Image"
  alt=""
  fill
  className="object-cover rounded-lg"
/>
```

**Code (Accessible):**
```jsx
<Image
  src="https://via.placeholder.com/600x300/3B82F6/FFFFFF?text=Accessible+Image"
  alt="A placeholder image demonstrating accessible image practices with descriptive alt text"
  fill
  className="object-cover rounded-lg"
  priority
/>
```

**Why It Matters:**
- Screen reader users won't know what the image depicts
- Search engines can't index image content
- Visually impaired users miss important information

**WCAG Criterion:** 1.1.1 Non-text Content (Level A)

---

### 3. Form Inputs Without Labels

**Violation:** Form inputs use `<div>` for labels instead of `<label>` elements

**Code (Inaccessible):**
```jsx
<div className="mb-4">
  <div className="block text-sm font-medium mb-1">
    Name <span className="text-red-500">*</span>
  </div>
  <input
    type="text"
    required
    className="w-full px-3 py-2 border border-gray-300 rounded"
  />
</div>
```

**Code (Accessible):**
```jsx
<div className="mb-4">
  <label htmlFor="name" className="block text-sm font-medium mb-1">
    Name <span aria-label="required">*</span>
  </label>
  <input
    id="name"
    type="text"
    required
    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    aria-describedby="name-help"
  />
  <p id="name-help" className="text-sm text-gray-600 mt-1">
    Please enter your full name
  </p>
</div>
```

**Why It Matters:**
- Screen readers can't associate labels with inputs
- Clicking label doesn't focus the input
- Users don't understand what each field is for
- Smaller click targets for mobile users

**WCAG Criterion:** 4.1.2 Name, Role, Value (Level A)

---

### 4. Poor Color Contrast

**Violation:** Low contrast between text and background colors

**Code (Inaccessible):**
```jsx
<div className="bg-gray-500 text-gray-600 shadow-lg">
  {/* Gray text on gray background */}
</div>
```

**Contrast Ratio:** Approximately 1.5:1 (fails WCAG AA requirement)

**Code (Accessible):**
```jsx
<header className="bg-blue-600 text-white shadow-lg">
  {/* White text on blue background */}
</header>
```

**Contrast Ratio:** Approximately 8.5:1 (exceeds WCAG AAA requirement)

**Why It Matters:**
- Hard to read for users with color blindness
- Difficult for users with low vision
- Affects readability for everyone in bright sunlight

**WCAG Criterion:** 1.4.3 Contrast (Minimum) (Level AA)

---

### 5. Missing Focus Indicators

**Violation:** No visible focus outline on interactive elements

**Code (Inaccessible):**
```jsx
<a className="hover:underline">
  {/* No focus indicator */}
</a>
```

**Code (Accessible):**
```jsx
<Link
  href="/accessible"
  className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 px-2 py-1 rounded"
>
  Accessible Page
</Link>
```

**Why It Matters:**
- Keyboard users can't see where focus is
- Essential for navigation without a mouse
- Fails accessibility standards entirely

**WCAG Criterion:** 2.4.7 Focus Visible (Level AA)

---

### 6. Improper Heading Hierarchy

**Violation:** Using `<div>` instead of heading elements for page structure

**Code (Inaccessible):**
```jsx
<div className="text-4xl font-bold mb-6">Inaccessible Page</div>
<div className="text-2xl font-bold mb-4">Featured Image</div>
<div className="text-2xl font-bold mb-4">Product Information</div>
```

**Code (Accessible):**
```jsx
<h1 className="text-4xl font-bold mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500">
  Fully Accessible Page
</h1>
<h2 className="text-2xl font-bold mb-4">Featured Image</h2>
<h2 className="text-2xl font-bold mb-4">Product Information</h2>
```

**Why It Matters:**
- Screen reader users navigate pages via headings
- Helps users understand page structure
- Search engines use heading hierarchy for indexing

**WCAG Criterion:** 1.3.1 Info and Relationships (Level A)

---

### 7. Inaccessible Tables

**Violation:** Tables lack semantic structure and header associations

**Code (Inaccessible):**
```jsx
<table style={{ width: "100%", borderCollapse: "collapse" }}>
  <thead style={{ backgroundColor: "#ccc" }}>
    <tr>
      <th style={{ border: "1px solid #ddd", padding: "8px" }}>Product Name</th>
      {/* No scope attribute */}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: "1px solid #ddd", padding: "8px" }}>Widget A</td>
      {/* No association with headers */}
    </tr>
  </tbody>
</table>
```

**Code (Accessible):**
```jsx
<table className="w-full border-collapse border border-gray-300">
  <caption className="text-left font-bold mb-2">
    Product Information and Pricing
  </caption>
  <thead className="bg-gray-200">
    <tr>
      <th scope="col" className="border border-gray-300 px-4 py-2 text-left font-bold">
        Product Name
      </th>
      {/* scope="col" identifies header cells */}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-300 px-4 py-2 font-medium" scope="row">
        Widget A
      </td>
      {/* scope="row" for row headers */}
    </tr>
  </tbody>
</table>
```

**Why It Matters:**
- Screen readers can't understand table relationships
- Data is meaningless without proper associations
- Users can't navigate tables efficiently

**WCAG Criterion:** 1.3.1 Info and Relationships (Level A)

---

### 8. Missing Form Status Messages

**Violation:** No accessible feedback for form submission

**Code (Inaccessible):**
```jsx
{submitted && (
  <div className="mb-4 p-4 bg-green-500 text-green-600 rounded">
    Thank you for your submission!
  </div>
)}
```

**Code (Accessible):**
```jsx
{submitted && (
  <div
    role="status"
    aria-live="polite"
    className="mb-4 p-4 bg-green-100 text-green-800 rounded"
  >
    Thank you for your submission!
  </div>
)}
```

**Why It Matters:**
- Screen reader users won't be notified of status changes
- Users with visual impairments may miss confirmation
- ARIA live regions alert users to dynamic updates

**WCAG Criterion:** 4.1.3 Status Messages (Level AAA)

---

### 9. Checkbox Without Proper Label

**Violation:** Checkbox input lacks associated label

**Code (Inaccessible):**
```jsx
<input type="checkbox" className="mr-2" />
Subscribe to our newsletter
```

**Code (Accessible):**
```jsx
<label htmlFor="subscribe" className="flex items-center">
  <input
    id="subscribe"
    type="checkbox"
    className="mr-2 focus:ring-2 focus:ring-blue-500"
  />
  Subscribe to our newsletter
</label>
```

**Why It Matters:**
- Screen readers can't associate text with checkbox
- Clicking text doesn't check the box
- Smaller hit area for motor impairments

**WCAG Criterion:** 4.1.2 Name, Role, Value (Level A)

---

### 10. No Navigation Semantics

**Violation:** Navigation lacks `<nav>` element and `aria-label`

**Code (Inaccessible):**
```jsx
<ul className="flex flex-wrap gap-4">
  <li><Link href="/accessible">Accessible Page</Link></li>
  <li><Link href="/inaccessible">Inaccessible Page</Link></li>
</ul>
```

**Code (Accessible):**
```jsx
<nav aria-label="Main navigation">
  <ul className="flex flex-wrap gap-4">
    <li>
      <Link
        href="/accessible"
        className="hover:underline focus:outline-none focus:ring-2 focus:ring-white..."
      >
        Accessible Page
      </Link>
    </li>
    <li>
      <Link href="/inaccessible" className="...">
        Inaccessible Page
      </Link>
    </li>
  </ul>
</nav>
```

**Why It Matters:**
- Screen reader users can't identify navigation regions
- Multiple navigation areas can't be distinguished
- Users can't skip repeated navigation

**WCAG Criterion:** 1.3.1 Info and Relationships (Level A)

---

## Testing Tools

To identify these violations yourself, use:

1. **Axe DevTools** - Browser extension for automated testing
2. **WAVE** - WebAIM's Evaluation Tool
3. **Lighthouse** - Chrome DevTools built-in tool
4. **NVDA** - Free screen reader (Windows)
5. **JAWS** - Commercial screen reader
6. **VoiceOver** - Built into macOS

## Summary of Key Differences

| Aspect | Inaccessible | Accessible |
|--------|-------------|------------|
| **HTML Structure** | `<div>` only | Semantic elements |
| **Images** | Empty alt text | Descriptive alt text |
| **Form Labels** | `<div>` labels | `<label>` elements |
| **Color Contrast** | 1.5:1 | 8.5:1 |
| **Focus Indicators** | None | Visible rings |
| **Headings** | `<div>` with styles | `<h1>`, `<h2>` |
| **Tables** | No structure | Proper `<caption>`, `scope` |
| **Status Messages** | Static divs | `aria-live` regions |
| **Navigation** | Plain lists | `<nav>` with `aria-label` |
| **Keyboard Support** | Limited | Full support |

## Resources for Learning More

- [WCAG 2.2 Success Criteria](https://www.w3.org/WAI/WCAG22/quickref/)
- [WebAIM: Web Accessibility In Mind](https://webaim.org/)
- [MDN: Web Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [The A11Y Project](https://www.a11yproject.com/)
