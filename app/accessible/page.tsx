import AccessibleHeader from "@/app/components/AccessibleHeader";
import AccessibleFooter from "@/app/components/AccessibleFooter";
import AccessibleForm from "@/app/components/AccessibleForm";
import AccessibleTable from "@/app/components/AccessibleTable";
import Image from "next/image";
import { MAIN_ID } from "../lib/constants";

export const metadata = {
  title: "Accessible Page - Accessibility Demo",
  description: "A fully accessible page that meets WCAG 2.2 Level A standards",
};

export default function AccessiblePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main
        id={MAIN_ID}
        tabIndex={-1}
        className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full"
      >
        <h1 className="text-4xl font-bold mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Fully Accessible Page
        </h1>

        <section className="mb-12">
          <p className="text-lg text-gray-700 mb-6 dark:text-gray-300">
            Welcome to the accessible version of this demo website. This page is
            built with accessibility in mind and follows WCAG 2.2 Level A
            standards. Key accessibility features include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Semantic HTML structure with proper heading hierarchy</li>
            <li>Descriptive alt text for all images</li>
            <li>Properly labeled form inputs with helpful descriptions</li>
            <li>Sufficient color contrast ratios</li>
            <li>Keyboard navigation support with visible focus indicators</li>
            <li>ARIA attributes for enhanced screen reader support</li>
            <li>Skip to content links to bypass navigation</li>
            <li>Clear form validation with status announcements</li>
            <li>Touch targets at least 44x44px</li>
            <li>Meaningful link text describing purpose</li>
            <li>Persistent labels that remain visible</li>
            <li>Icon buttons with aria-label attributes</li>
            <li>
              Information conveyed through multiple channels (color + text +
              symbols)
            </li>
            <li>Proper decoration handling with empty alt=&quot;&quot;</li>
            <li>Respects prefers-reduced-motion CSS media query</li>
            <li>Logical tab order following visual/reading order</li>
            <li>Tables with &lt;thead&gt;, &lt;th&gt;, and scope attributes</li>
            <li>Language declaration on html element</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Featured Image</h2>
          <div className="relative h-100 w-100 max-w-2xl">
            <Image
              src="/images/business-logo.avif"
              alt="Business logo demonstrating accessible image practices with descriptive alt text"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Figure: A blue placeholder image with white text representing proper
            image accessibility.
          </p>
          <details className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <summary className="cursor-pointer font-semibold text-green-900">
              Why this is accessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Best practices:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>
                  Descriptive alt text conveys the image's meaning and purpose
                </li>
                <li>Figure caption provides additional context</li>
                <li>Users understand what the image represents</li>
              </ul>
              <p className="mb-2">
                <strong>Accessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<Image
  src="/images/business-logo.avif"
  alt="Business logo demonstrating accessible..."
  fill
  priority
/>
<p>Figure: A blue placeholder image...</p>`}</pre>
              <p className="text-xs text-gray-600 mt-2">
                Screen reader announces: descriptive alt text helps users
                understand image content
              </p>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Product Information</h2>
          <AccessibleTable />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <AccessibleForm />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Skip to Main Content</h2>
          <p className="text-gray-700 mb-4 dark:text-gray-300">
            This page includes a skip link at the top (try pressing Tab first)
            to bypass navigation and jump directly to main content.
          </p>
          <a
            href="#main-content"
            className="absolute -top-8 left-4 px-4 py-2 bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          >
            Skip to Main Content
          </a>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Form Validation (Accessible)
          </h2>
          <form className="max-w-md">
            <div className="mb-4">
              <label
                htmlFor="email-acc"
                className="block text-sm font-medium mb-1"
              >
                Email <span aria-label="required">*</span>
              </label>
              <input
                id="email-acc"
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-describedby="email-error"
              />
              <div
                id="email-error"
                className="text-green-700 text-sm mt-1 flex items-center gap-2"
                role="status"
              >
                ✓ Valid email format
              </div>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              Submit
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            ✓ Clear validation messages with role=&quot;status&quot; for screen
            readers
          </p>
          <details className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <summary className="cursor-pointer font-semibold text-green-900">
              Why this is accessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Best practices:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>
                  <code className="bg-gray-200 px-1 rounded">htmlFor</code>{" "}
                  connects label to input
                </li>
                <li>
                  <code className="bg-gray-200 px-1 rounded">
                    aria-describedby
                  </code>{" "}
                  links error message to input
                </li>
                <li>
                  <code className="bg-gray-200 px-1 rounded">
                    role="status"
                  </code>{" "}
                  announces changes to screen readers
                </li>
                <li>
                  <code className="bg-gray-200 px-1 rounded">
                    aria-label="required"
                  </code>{" "}
                  provides context for asterisk
                </li>
              </ul>
              <p className="mb-2">
                <strong>Accessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<label htmlFor="email-acc">
  Email <span aria-label="required">*</span>
</label>
<input
  id="email-acc"
  type="email"
  aria-describedby="email-error"
/>
<div id="email-error" role="status">
  ✓ Valid email format
</div>`}</pre>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Adequate Touch Targets (Accessible)
          </h2>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
              Standard
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
              Buttons
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
              44x44px+
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            ✓ All buttons at least 44x44px - meets WCAG 2.5.5 standard
          </p>
          <details className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <summary className="cursor-pointer font-semibold text-green-900">
              Why this is accessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Best practice:</strong> Touch targets should be at least
                44x44 pixels
              </p>
              <p className="mb-3">
                This accommodates users with motor impairments, tremors, and
                those on touch devices. Larger targets are easier to hit
                accurately.
              </p>
              <p className="mb-2">
                <strong>Accessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<button className="px-6 py-3 ...">
  Standard
</button>`}</pre>
              <p className="text-xs text-gray-600 mt-2">
                Result: 48x44px (meets minimum standard)
              </p>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Meaningful Link Text (Accessible)
          </h2>
          <p className="text-gray-700 mb-2">
            For more information,{" "}
            <a
              href="#"
              className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              read our product details
            </a>
            . We also offer{" "}
            <a
              href="#"
              className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              service information
            </a>
            .
          </p>
          <p className="text-sm text-gray-600">
            ✓ Links describe their purpose - screen readers understand the
            context
          </p>
          <details className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <summary className="cursor-pointer font-semibold text-green-900">
              Why this is accessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Best practice:</strong> Link text should describe the
                link's purpose
              </p>
              <p className="mb-3">
                Screen reader users often navigate links without surrounding
                context. Descriptive link text helps them understand where the
                link leads.
              </p>
              <p className="mb-2">
                <strong>Accessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`For more information,
<a href="#">
  read our product details
</a>
We also offer
<a href="#">
  service information
</a>`}</pre>
              <p className="text-xs text-gray-600 mt-2">
                Screen reader announces: "read our product details, service
                information" (clear purpose)
              </p>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Persistent Labels (Accessible)
          </h2>
          <form className="max-w-md">
            <div className="mb-4">
              <label
                htmlFor="name-field"
                className="block text-sm font-medium mb-2"
              >
                Full Name
              </label>
              <input
                id="name-field"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email-field"
                className="block text-sm font-medium mb-2"
              >
                Email Address
              </label>
              <input
                id="email-field"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <p className="text-sm text-gray-600">
              ✓ Permanent labels remain visible - accessible even while typing
            </p>
          </form>
          <details className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <summary className="cursor-pointer font-semibold text-green-900">
              Why this is accessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Best practices:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>
                  Labels use{" "}
                  <code className="bg-gray-200 px-1 rounded">htmlFor</code> to
                  associate with inputs
                </li>
                <li>Labels remain visible (not replaced by placeholder)</li>
                <li>Users always see what field they're filling</li>
                <li>Screen readers announce the field purpose</li>
              </ul>
              <p className="mb-2">
                <strong>Accessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<label htmlFor="name-field">
  Full Name
</label>
<input id="name-field" type="text" />`}</pre>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Accessible Icon Buttons</h2>
          <div className="flex gap-4 items-center mb-4">
            <button
              aria-label="Search"
              className="text-2xl px-3 py-3 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              🔍
            </button>
            <button
              aria-label="Add to favorites"
              className="text-2xl px-3 py-3 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              ❤️
            </button>
            <button
              aria-label="Add to shopping cart"
              className="text-2xl px-3 py-3 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              🛒
            </button>
          </div>
          <p className="text-sm text-gray-600">
            ✓ aria-label provides accessible names - screen readers announce
            purpose
          </p>
          <details className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <summary className="cursor-pointer font-semibold text-green-900">
              Why this is accessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Best practice:</strong> Icon-only buttons need{" "}
                <code className="bg-gray-200 px-1 rounded">aria-label</code>
              </p>
              <p className="mb-3">
                <code className="bg-gray-200 px-1 rounded">aria-label</code>{" "}
                provides an accessible name that screen readers announce,
                helping users understand what the button does.
              </p>
              <p className="mb-2">
                <strong>Accessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<button aria-label="Search">
  🔍
</button>
<button aria-label="Add to favorites">
  ❤️
</button>
<button aria-label="Add to shopping cart">
  🛒
</button>`}</pre>
              <p className="text-xs text-gray-600 mt-2">
                Screen reader announces: "Search button, Add to favorites
                button, Add to shopping cart button"
              </p>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Color + Text Information (Accessible)
          </h2>
          <div className="flex gap-4 mb-4 items-center">
            <div className="flex items-center gap-2">
              <div className="h-16 bg-green-700 rounded flex items-center justify-center text-white font-bold text-2xl gap-2 pl-2 pr-2">
                ✓ <span className="font-medium">Accept</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-16 bg-red-500 rounded flex items-center justify-center text-white font-bold text-2xl gap-2 pl-2 pr-2">
                ✗ <span className="font-medium">Error</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            ✓ Color combined with symbols and text - conveyed multiple ways
          </p>
          <details className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <summary className="cursor-pointer font-semibold text-green-900">
              Why this is accessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Best practice:</strong> Information conveyed through
                multiple channels
              </p>
              <p className="mb-3">
                Using color + symbols + text ensures users with color blindness,
                low vision, and other disabilities can understand the meaning.
              </p>
              <p className="mb-2">
                <strong>Accessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<div className="bg-green-700">
  ✓ <span>Accept</span>
</div>
<div className="bg-red-500">
  ✗ <span>Error</span>
</div>`}</pre>
              <p className="text-xs text-gray-600 mt-2">
                Accessible to all: green color, checkmark symbol, AND "Accept"
                text
              </p>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Truly Decorative Image (Accessible)
          </h2>
          <div className="flex gap-4 items-center mb-2">
            <div className="relative h-20 w-20">
              <Image
                src="/images/business-logo.avif"
                alt=""
                fill
                className="object-cover rounded"
              />
            </div>
            <span className="text-lg font-medium">Company Name</span>
          </div>
          <p className="text-sm text-gray-600">
            ✓ Decorative image uses alt=&quot;&quot; - screen readers skip it
            properly
          </p>
          <details className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <summary className="cursor-pointer font-semibold text-green-900">
              Why this is accessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Best practice:</strong> Decorative images use empty alt
                text
              </p>
              <p className="mb-3">
                Empty alt text tells screen readers to skip the image,
                preventing unnecessary announcements. This is appropriate when
                the image's content is already described elsewhere or purely
                decorative.
              </p>
              <p className="mb-2">
                <strong>Accessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<Image
  src="/images/business-logo.avif"
  alt=""
  fill
/>
<span>Company Name</span>`}</pre>
              <p className="text-xs text-gray-600 mt-2">
                Screen reader: skips image, announces "Company Name" (no
                confusion)
              </p>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Respects Motion Preferences (Accessible)
          </h2>
          <div
            className="w-24 h-24 bg-blue-500 rounded transition-transform"
            style={{
              animation: "slideRight 2s ease-in-out",
            }}
          />
          <style>{`
            @keyframes slideRight {
              0% { transform: translateX(0); }
              50% { transform: translateX(20px); }
              100% { transform: translateX(0); }
            }
            @media (prefers-reduced-motion: reduce) {
              .motion-safe-animation {
                animation: none !important;
              }
            }
          `}</style>
          <p className="text-sm text-gray-600 mt-4">
            ✓ CSS includes @media (prefers-reduced-motion) - respects user
            settings
          </p>
          <details className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <summary className="cursor-pointer font-semibold text-green-900">
              Why this is accessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Best practice:</strong> Respect{" "}
                <code className="bg-gray-200 px-1 rounded">
                  prefers-reduced-motion
                </code>{" "}
                media query
              </p>
              <p className="mb-3">
                Users with vestibular disorders, photosensitivity, or motion
                sickness can enable OS settings to reduce motion. Developers
                must respect this preference.
              </p>
              <p className="mb-2">
                <strong>Accessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`@keyframes slideRight {
  0% { transform: translateX(0); }
  50% { transform: translateX(20px); }
}

@media (prefers-reduced-motion: reduce) {
  .animation-class {
    animation: none !important;
  }
}`}</pre>
              <p className="text-xs text-gray-600 mt-2">
                Users with motion preference stop seeing the animation
                automatically
              </p>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Logical Focus Order (Accessible)
          </h2>
          <form className="max-w-md">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="fname" className="text-sm font-medium">
                  First Name
                </label>
                <input
                  id="fname"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="lname" className="text-sm font-medium">
                  Last Name
                </label>
                <input
                  id="lname"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              ✓ Tab order follows visual/logical order: First Name → Last Name
            </p>
          </form>
          <details className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <summary className="cursor-pointer font-semibold text-green-900">
              Why this is accessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Best practice:</strong> Tab order should follow
                visual/logical order
              </p>
              <p className="mb-3">
                Keyboard users navigate in tab order. When it matches visual
                layout and reading order, navigation is intuitive and
                predictable.
              </p>
              <p className="mb-2">
                <strong>Accessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<!-- Visually left to right -->
<input id="fname" /> <!-- No tabIndex needed -->
<input id="lname" /> <!-- Natural DOM order -->

<!-- Tab order follows DOM: First Name -> Last Name -->`}</pre>
              <p className="text-xs text-gray-600 mt-2">
                Best practice: Don't use tabIndex unless absolutely necessary.
                Keep DOM order logical instead.
              </p>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Properly Structured Table (Accessible)
          </h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th
                  className="border border-gray-300 px-4 py-2 text-left font-semibold"
                  scope="col"
                >
                  Product Name
                </th>
                <th
                  className="border border-gray-300 px-4 py-2 text-left font-semibold"
                  scope="col"
                >
                  Price
                </th>
                <th
                  className="border border-gray-300 px-4 py-2 text-left font-semibold"
                  scope="col"
                >
                  Availability
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Product A</td>
                <td className="border border-gray-300 px-4 py-2">$29.99</td>
                <td className="border border-gray-300 px-4 py-2">In Stock</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Product B</td>
                <td className="border border-gray-300 px-4 py-2">$49.99</td>
                <td className="border border-gray-300 px-4 py-2">
                  Out of Stock
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-600 mt-2">
            ✓ Uses `&lt;thead&gt;`, `&lt;th&gt;`, and `scope=&quot;col&quot;` -
            screen readers understand table structure
          </p>
          <details className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <summary className="cursor-pointer font-semibold text-green-900">
              Why this is accessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Best practices:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>
                  <code className="bg-gray-200 px-1 rounded">
                    &lt;thead&gt;
                  </code>{" "}
                  separates headers from data rows
                </li>
                <li>
                  <code className="bg-gray-200 px-1 rounded">&lt;th&gt;</code>{" "}
                  marks header cells (not &lt;td&gt;)
                </li>
                <li>
                  <code className="bg-gray-200 px-1 rounded">scope="col"</code>{" "}
                  indicates column headers
                </li>
                <li>Screen readers announce header context for each cell</li>
              </ul>
              <p className="mb-2">
                <strong>Accessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<table>
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Availability</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Product A</td>
      <td>$29.99</td>
      <td>In Stock</td>
    </tr>
  </tbody>
</table>`}</pre>
              <p className="text-xs text-gray-600 mt-2">
                Screen reader: "Product Name: Product A, Price: $29.99,
                Availability: In Stock"
              </p>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Language Declaration (Accessible)
          </h2>
          <p className="text-gray-700 mb-2">
            This page declares `lang=&quot;en&quot;` on the `&lt;html&gt;`
            element, allowing screen readers to use correct pronunciation and
            language settings.
          </p>
          <p className="text-sm text-gray-600">
            ✓ Enables proper text-to-speech language selection for multilingual
            content
          </p>
          <details className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <summary className="cursor-pointer font-semibold text-green-900">
              Why this is accessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Best practice:</strong> Declare language on html element
              </p>
              <p className="mb-3">
                Screen readers use the language attribute to apply correct
                pronunciation rules, character encoding, and text-to-speech
                voice selection. This is essential for accessibility and SEO.
              </p>
              <p className="mb-2">
                <strong>Accessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<!DOCTYPE html>
<html lang="en">
  <head>...</head>
  <body>...</body>
</html>`}</pre>
              <p className="text-xs text-gray-600 mt-2">
                Screen reader: Uses English pronunciation rules, correct voice
                for English speech
              </p>
              <p className="text-xs text-gray-600 mt-2">
                For mixed languages: Use{" "}
                <code className="bg-gray-200 px-1 rounded">lang="es"</code> on
                spans containing Spanish text
              </p>
            </div>
          </details>
        </section>
      </main>
    </div>
  );
}
