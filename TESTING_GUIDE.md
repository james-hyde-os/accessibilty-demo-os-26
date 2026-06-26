# Testing & Verification Guide

This guide helps you test both pages and verify the accessibility differences.

## Quick Start Testing

### 1. Run the Development Server
```bash
npm run dev
```
Open http://localhost:3000 in your browser

### 2. Navigate to Both Pages
- Click "Accessible Page" link
- Navigate back and click "Inaccessible Page" link
- Compare how each page feels to use

## Keyboard Navigation Testing

### How to Test
1. Close your mouse/trackpad or simply avoid using it
2. Use **Tab** to move forward through interactive elements
3. Use **Shift+Tab** to move backward
4. Use **Enter** to activate buttons and submit forms
5. Use **Space** to toggle checkboxes and select options

### Expected Results

#### Accessible Page ✓
- ✓ All links and buttons are reachable via Tab
- ✓ Tab order is logical (top to bottom, left to right)
- ✓ Focused elements have a visible blue ring indicator
- ✓ Form fields are clearly focused
- ✓ All form inputs can be completed via keyboard
- ✓ Submit button is reachable and activatable

#### Inaccessible Page ✗
- ✗ Navigation may be harder to navigate
- ✗ No visible focus indicators
- ✗ Tab order may feel random
- ✗ Harder to know where focus is
- ✗ Form interaction is confusing without visual feedback

## Screen Reader Testing

### macOS - VoiceOver

**Enable VoiceOver:**
- Press `Control + Option + 8` (or System Settings → Accessibility → VoiceOver)

**Common Commands:**
- `VO + Right Arrow` - Read next item
- `VO + Left Arrow` - Read previous item
- `VO + U` - Open rotor (navigate by headings, links, etc.)
- `VO + Space` - Activate button/link
- `VO + Down Arrow` - Enter web content

**What to Test:**
1. Open the Accessible Page and use the rotor to navigate by headings
   - Should see: H1: "Fully Accessible Page", H2: "Featured Image", H2: "Product Information", etc.
   
2. Open the Inaccessible Page and use the rotor
   - Should NOT see proper heading hierarchy
   
3. Test form labels on both pages
   - Accessible: VoiceOver announces "Name, required, edit text"
   - Inaccessible: VoiceOver just says "edit text" (no label association)

4. Test tables on both pages
   - Accessible: VoiceOver announces table structure and cell relationships
   - Inaccessible: VoiceOver reads cells without context

### Windows - NVDA (Free)

**Download:** https://www.nvaccess.org/download/

**Enable NVDA:**
- Run the installer and launch NVDA

**Common Commands:**
- `Insert + Down Arrow` - Read all (continuous reading)
- `Ctrl + Home` - Jump to top
- `H` - Next heading
- `1` - Jump to H1
- `T` - Next table
- `Alt + Down Arrow` - Read cell content in tables

**What to Test:**
- Same testing procedures as VoiceOver above

### Chrome - ChromeVox

**Enable:**
1. Open Chrome Settings
2. Search for "ChromeVox"
3. Enable extension
4. Use `Ctrl + Alt + Z` to toggle on/off

## Automated Testing Tools

### 1. Axe DevTools (Browser Extension)

**Installation:**
- Chrome: [Axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnkpklempisson)

**How to Use:**
1. Open page to test
2. Click Axe DevTools icon
3. Click "Scan NOW"
4. Review violations and suggestions

**Expected Results:**
- **Accessible Page:** Few to no violations
- **Inaccessible Page:** Multiple violations including missing alt text, form labels, etc.

### 2. WAVE by WebAIM

**Access Online:** https://wave.webaim.org/

**How to Use:**
1. Copy your local URL (e.g., http://localhost:3000/accessible)
2. Paste in WAVE
3. Review errors, warnings, and contrast checks

**Key Things to Look For:**
- Red flags = WCAG violations
- Yellow warnings = Best practice issues
- Check contrast checker for color pairs

### 3. Lighthouse (Built into Chrome)

**How to Use:**
1. Right-click page → Inspect → Lighthouse tab
2. Select "Accessibility"
3. Click "Analyze page load"
4. Review score and suggestions

**Expected Results:**
- **Accessible Page:** ~95-100 score
- **Inaccessible Page:** ~40-60 score

## Manual Color Contrast Testing

### Use a Contrast Checker

**Online Tools:**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio](https://contrast-ratio.com/)

### Test Each Page

**Accessible Page:**
1. Header: Blue (#3B82F6) on White → Ratio ~8.5:1 ✓
2. Text: Black on White → Ratio ~21:1 ✓
3. All meet WCAG AAA (7:1 for large text)

**Inaccessible Page:**
1. Header: Gray (#888888) on Gray (#555555) → Ratio ~1.5:1 ✗
2. Text: Gray (#666666) on Gray background → Hard to read ✗
3. Fails WCAG AA (4.5:1 required)

## Image Alt Text Testing

### Test on Accessible Page
1. Open page
2. Right-click on image
3. Check image properties/attributes
4. Should see: `alt="A placeholder image demonstrating accessible image practices with descriptive alt text"`

### Test on Inaccessible Page
1. Right-click on image
2. Alt text is empty
3. Image is inaccessible to screen readers

### Browser Inspector Testing
1. Press F12 to open Developer Tools
2. Inspect the image element
3. Look at the HTML to see alt attribute

## Form Testing

### Accessible Page Form

**Keyboard Test:**
1. Tab to Name field
2. Type a name
3. Tab to Email field
4. Type an email
5. Tab to Message
6. Type a message
7. Tab through remaining fields
8. Submit form
9. Should see success message with `aria-live` announcement

**Screen Reader Test:**
- Read name field: "Name, required, edit text. Please enter your full name"
- Read email field: "Email, required, edit text. We'll never share your email"
- All fields properly announced

### Inaccessible Page Form

**Keyboard Test:**
1. Tab through form
2. No visible focus indicators
3. Form still works but harder to use
4. Success message not announced to screen readers

**Screen Reader Test:**
- Read name field: Just "edit text" - no label!
- No field descriptions announced
- No indication of required fields

## Heading Structure Testing

### Using Browser Extensions

**SEO Quake or HeadingsMap:**
1. Install extension
2. Click to see page structure
3. View heading outline

**Expected Results:**
- **Accessible:** Proper h1 → h2 → h2 structure
- **Inaccessible:** No heading structure shown

### Manual Testing
1. Right-click → Inspect Element
2. Look at page HTML
3. Count `<h1>`, `<h2>`, `<h3>` tags

**Accessible:**
```
<h1>Fully Accessible Page</h1>
<h2>Featured Image</h2>
<h2>Product Information</h2>
<h2>Get in Touch</h2>
```

**Inaccessible:**
```
<div>Inaccessible Page</div>
<div>Featured Image</div>
<div>Product Information</div>
```

## Table Testing

### Inspect Table Markup

**Accessible Table:**
- Has `<caption>`
- Headers have `scope="col"`
- Row headers have `scope="row"`
- Uses proper `<thead>`, `<tbody>`

**Inaccessible Table:**
- No caption
- Uses inline styles only
- No scope attributes
- Cannot be read properly by assistive tech

### Screen Reader Testing
1. Use table navigation (T key in NVDA, U+Down Arrow in VoiceOver)
2. Should announce table structure
3. Should announce which cell you're in

## Checklist for Both Pages

### Semantic HTML
- [ ] Page has `<header>` element
- [ ] Page has `<nav>` element with `aria-label`
- [ ] Page has `<main>` element
- [ ] Page has `<footer>` element
- [ ] Headings are actual heading tags, not divs

### Images
- [ ] All images have `alt` attributes
- [ ] Alt text is descriptive
- [ ] Decorative images have empty alt (`alt=""`)
- [ ] Images have context (captions, surrounding text)

### Forms
- [ ] All inputs have `<label>` elements
- [ ] Labels have `htmlFor` attribute matching input `id`
- [ ] Required fields are marked
- [ ] Helper text explains expected input
- [ ] Form provides accessible feedback

### Navigation
- [ ] Tab order is logical
- [ ] Focus indicators are visible
- [ ] All links and buttons are keyboard accessible
- [ ] Navigation is consistent across pages

### Color & Contrast
- [ ] Text meets 4.5:1 contrast ratio
- [ ] Links are identifiable without color alone
- [ ] Color is not the only method of information conveyance

### Accessibility
- [ ] Page passes automated accessibility tests
- [ ] Page works with keyboard only
- [ ] Page works with screen readers
- [ ] Page works with browser zoom (up to 200%)

## Common Findings

### Accessible Page
- ✓ All WCAG 2.2 Level A criteria met
- ✓ High accessibility score in Lighthouse
- ✓ Easy to navigate with keyboard
- ✓ Works well with screen readers
- ✓ Good color contrast throughout

### Inaccessible Page
- ✗ Missing alt text on images
- ✗ Form inputs without labels
- ✗ Poor color contrast
- ✗ No visible focus indicators
- ✗ Non-semantic HTML
- ✗ Table structure not properly marked
- ✗ Navigation not marked with `<nav>`
- ✗ No ARIA attributes for live regions
- ✗ Fails automated accessibility checks

## Resources

- [WCAG 2.2 Testing Procedures](https://www.w3.org/WAI/test-evaluate/)
- [WebAIM Testing Accessibility](https://webaim.org/articles/)
- [Deque University - Testing Accessibility](https://dequeuniversity.com/)
- [The Accessibility Tree](https://www.w3.org/TR/accessibility-tree-1.2/)
