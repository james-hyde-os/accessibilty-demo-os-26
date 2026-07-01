import InaccessibleHeader from "@/app/components/InaccessibleHeader";
import InaccessibleFooter from "@/app/components/InaccessibleFooter";
import InaccessibleForm from "@/app/components/InaccessibleForm";
import InaccessibleTable from "@/app/components/InaccessibleTable";
import Image from "next/image";
import { MAIN_ID } from "../lib/constants";

export const metadata = {
  title: "Inaccessible Page - Accessibility Demo",
  description: "A page with various accessibility violations for comparison",
};

export default function InaccessiblePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main
        id={MAIN_ID}
        tabIndex={-1}
        className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full"
      >
        <div className="text-4xl font-bold mb-6">Inaccessible Page</div>

        <section className="mb-12">
          <p className="text-lg text-gray-700 mb-6 dark:text-gray-300">
            This page demonstrates common accessibility violations. It has been
            intentionally built without proper accessibility practices. This
            page contains the following issues:
          </p>
          <ul className="text-gray-700 ml-4 dark:text-gray-300">
            <li>Missing image alt text</li>
            <li>Poor color contrast ratios</li>
            <li>Form inputs without proper labels</li>
            <li>No semantic HTML (divs instead of nav, header, etc.)</li>
            <li>Missing ARIA attributes</li>
            <li>Inadequate keyboard navigation support</li>
            <li>Improper heading hierarchy</li>
            <li>Form validation without error announcements</li>
            <li>Touch targets smaller than 44x44px</li>
            <li>Ambiguous link text (&quot;click here&quot;)</li>
            <li>Placeholder-only labels (no persistent labels)</li>
            <li>Icon buttons without accessible names</li>
            <li>Information conveyed by color alone</li>
            <li>Decorative images with unnecessary alt text</li>
            <li>Animations that ignore motion preferences</li>
            <li>Poor tab/focus order</li>
            <li>Tables without proper header markup</li>
            <li>No language declaration on html element</li>
          </ul>
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">Header & footer</div>
          <div className="relative max-w-2xl">
            <InaccessibleHeader />
          </div>
        </section>
        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">Featured Image</div>
          <div className="relative h-100 w-100 max-w-2xl">
            <Image
              src="/images/business-logo.avif"
              alt=""
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <details className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
            <summary className="cursor-pointer font-semibold text-red-900">
              Why this is inaccessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Issue:</strong> Meaningful image has empty alt text
              </p>
              <p className="mb-3">
                Important images need descriptive alt text so screen readers can
                convey the image's content and purpose to users. Empty alt text
                is only for decorative images.
              </p>
              <p className="mb-2">
                <strong>Inaccessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<Image
  src="/images/business-logo.avif"
  alt=""
  fill
/>`}</pre>
              <p className="text-xs text-gray-600 mt-2">
                Screen reader: (skips image entirely - user misses content)
              </p>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">Product Information</div>
          <InaccessibleTable />
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">Get in Touch</div>
          <InaccessibleForm />
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">
            Form Validation (Inaccessible)
          </div>
          <form className="max-w-md">
            <div className="mb-4">
              <div className="text-sm font-medium mb-1">Email</div>
              <input
                type="email"
                className="w-full px-3 py-2 border border-red-500 rounded"
                placeholder="Enter email"
              />
              <div className="text-red-600 text-sm mt-1">
                Invalid email format
              </div>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Submit
            </button>
          </form>
          <details className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
            <summary className="cursor-pointer font-semibold text-red-900">
              Why this is inaccessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Issues:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>
                  Error message is visual only - no programmatic association
                  with input
                </li>
                <li>No aria-describedby linking the error to the input</li>
                <li>No role="status" to announce errors to screen readers</li>
                <li>Input uses div instead of label element</li>
              </ul>
              <p className="mb-2">
                <strong>Inaccessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<div className="text-sm font-medium mb-1">Email</div>
<input
  type="email"
  placeholder="Enter email"
/>
<div className="text-red-600 text-sm mt-1">
  Invalid email format
</div>`}</pre>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">
            Small Touch Targets (Inaccessible)
          </div>
          <div className="flex gap-2">
            <button className="px-2 py-1 bg-gray-400 text-white text-xs rounded">
              Tiny
            </button>
            <button className="px-2 py-1 bg-gray-400 text-white text-xs rounded">
              Buttons
            </button>
            <button className="px-2 py-1 bg-gray-400 text-white text-xs rounded">
              Here
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            These buttons are less than 44x44px - difficult for mobile/motor
            issues
          </p>
          <details className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
            <summary className="cursor-pointer font-semibold text-red-900">
              Why this is inaccessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Issue:</strong> Touch targets are too small (less than
                44x44px)
              </p>
              <p className="mb-3">
                Users with motor impairments, tremors, or using touch devices on
                mobile struggle to accurately tap small buttons. WCAG 2.5.5
                recommends minimum 44x44px.
              </p>
              <p className="mb-2">
                <strong>Inaccessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<button className="px-2 py-1 ... text-xs">
  Tiny
</button>`}</pre>
              <p className="text-xs text-gray-600 mt-2 mb-2">
                Result: ~32x20px (too small)
              </p>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">
            Ambiguous Link Text (Inaccessible)
          </div>
          <p className="text-gray-700 mb-2">
            For more information about our products,{" "}
            <a href="#" className="text-blue-600 underline">
              click here
            </a>
            . We also have{" "}
            <a href="#" className="text-blue-600 underline">
              click here
            </a>{" "}
            for our services.
          </p>
          <p className="text-sm text-gray-600">
            Screen reader users hear &quot;click here&quot; twice with no
            context
          </p>
          <details className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
            <summary className="cursor-pointer font-semibold text-red-900">
              Why this is inaccessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Issue:</strong> Generic link text doesn't describe the
                link's purpose
              </p>
              <p className="mb-3">
                Screen reader users often navigate by link text. "Click here"
                provides no context about where the link goes or what action it
                performs.
              </p>
              <p className="mb-2">
                <strong>Inaccessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`For more information,
<a href="#">click here</a>
We also have
<a href="#">click here</a>
for services.`}</pre>
              <p className="text-xs text-gray-600 mt-2">
                Screen reader reads: "click here, click here" (confusing)
              </p>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">
            Placeholder-Only Labels (Inaccessible)
          </div>
          <form className="max-w-md">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <p className="text-sm text-gray-600">
              Placeholder disappears when you type - no persistent label
            </p>
          </form>
          <details className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
            <summary className="cursor-pointer font-semibold text-red-900">
              Why this is inaccessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Issues:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>Placeholder disappears when user starts typing</li>
                <li>No associated label element for screen readers</li>
                <li>Users with cognitive disabilities lose context</li>
              </ul>
              <p className="mb-2">
                <strong>Inaccessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<input
  type="text"
  placeholder="Full Name"
/>`}</pre>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">
            Icon Button (Inaccessible)
          </div>
          <div className="flex gap-4 items-center">
            <button className="text-2xl hover:opacity-70">🔍</button>
            <button className="text-2xl hover:opacity-70">❤️</button>
            <button className="text-2xl hover:opacity-70">🛒</button>
            <p className="text-sm text-gray-600">
              No accessible names - screen readers say &quot;button&quot;
            </p>
          </div>
          <details className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
            <summary className="cursor-pointer font-semibold text-red-900">
              Why this is inaccessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Issue:</strong> Icon-only buttons lack accessible names
              </p>
              <p className="mb-3">
                Screen readers can't determine what these buttons do. Users hear
                "button" with no context.
              </p>
              <p className="mb-2">
                <strong>Inaccessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<button className="text-2xl">🔍</button>
<button className="text-2xl">❤️</button>
<button className="text-2xl">🛒</button>`}</pre>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">
            Color-Only Information (Inaccessible)
          </div>
          <div className="flex gap-4 mb-4">
            <div className="w-16 h-16 bg-green-500 rounded flex items-center justify-center text-white font-bold">
              ✓
            </div>
            <div className="w-16 h-16 bg-red-500 rounded flex items-center justify-center text-white font-bold">
              ✗
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Color-blind users can&apos;t distinguish meaning - no text
            alternative
          </p>
          <details className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
            <summary className="cursor-pointer font-semibold text-red-900">
              Why this is inaccessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Issue:</strong> Information conveyed by color alone
              </p>
              <p className="mb-3">
                Approximately 8% of men and 0.5% of women have color blindness.
                Users with low vision also struggle. Meaning must be conveyed
                through multiple channels: color + text + symbols.
              </p>
              <p className="mb-2">
                <strong>Inaccessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<div className="bg-green-500">✓</div>
<div className="bg-red-500">✗</div>`}</pre>
              <p className="text-xs text-gray-600 mt-2">
                Colorblind user sees: two boxes, but can't distinguish meaning
              </p>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">
            Decorative Image with Alt Text (Inaccessible)
          </div>
          <div className="relative h-20 w-20 mb-2">
            <Image
              src="/images/business-logo.avif"
              alt="This is just decoration but has descriptive alt text making it confusing"
              fill
              className="object-cover rounded"
            />
          </div>
          <p className="text-sm text-gray-600">
            Decorative images should have alt=&quot;&quot; but this has
            unnecessary description
          </p>
          <details className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
            <summary className="cursor-pointer font-semibold text-red-900">
              Why this is inaccessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Issue:</strong> Decorative images have descriptive alt
                text
              </p>
              <p className="mb-3">
                Purely decorative images should have empty alt text (
                <code className="bg-gray-200 px-1 rounded">alt=""</code>) so
                screen readers skip them. Descriptive alt text for decorative
                images creates noise and confusion.
              </p>
              <p className="mb-2">
                <strong>Inaccessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<Image
  src="/images/business-logo.avif"
  alt="This is just decoration but has..."
  fill
/>`}</pre>
              <p className="text-xs text-gray-600 mt-2">
                Screen reader announces lengthy description for a decorative
                element
              </p>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">
            Animated Content (Inaccessible)
          </div>
          <div
            className="w-24 h-24 bg-blue-500 rounded"
            style={{
              animation: "bounce 1s infinite",
            }}
          />
          <style>{`
            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
            }
          `}</style>
          <p className="text-sm text-gray-600 mt-2">
            Animation ignores prefers-reduced-motion - may cause vestibular
            issues
          </p>
          <details className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
            <summary className="cursor-pointer font-semibold text-red-900">
              Why this is inaccessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Issue:</strong> Animations don't respect{" "}
                <code className="bg-gray-200 px-1 rounded">
                  prefers-reduced-motion
                </code>
              </p>
              <p className="mb-3">
                Users with vestibular disorders, photosensitivity, or motion
                sickness may experience discomfort. Users can set OS preferences
                to reduce motion, which developers must respect.
              </p>
              <p className="mb-2">
                <strong>Inaccessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
// No @media (prefers-reduced-motion) check`}</pre>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">
            Poor Focus Order (Inaccessible)
          </div>
          <form className="max-w-md">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">First Name</label>
                <input
                  type="text"
                  tabIndex={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  tabIndex={1}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Tab order: Last Name → First Name (not left to right)
            </p>
          </form>
          <details className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
            <summary className="cursor-pointer font-semibold text-red-900">
              Why this is inaccessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Issue:</strong> Tab order doesn't follow visual/logical
                order
              </p>
              <p className="mb-3">
                Users navigating by keyboard follow the tab order. If it doesn't
                match visual layout, it's confusing and breaks logical flow.
              </p>
              <p className="mb-2">
                <strong>Inaccessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<!-- Visually left to right -->
<input tabIndex={3} /> <!-- First visually -->
<input tabIndex={1} /> <!-- Second visually -->

<!-- But tab order: 1st input (tabIndex 1) -> 2nd input (tabIndex 3) -->`}</pre>
              <p className="text-xs text-gray-600 mt-2">
                Keyboard users experience: focus jumps to Last Name first
                (confusing)
              </p>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">
            Table Without Proper Headers (Inaccessible)
          </div>
          <table className="w-full border-collapse border border-gray-300">
            <tr>
              <td className="border border-gray-300 px-4 py-2">Product A</td>
              <td className="border border-gray-300 px-4 py-2">$29.99</td>
              <td className="border border-gray-300 px-4 py-2">In Stock</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Product B</td>
              <td className="border border-gray-300 px-4 py-2">$49.99</td>
              <td className="border border-gray-300 px-4 py-2">Out of Stock</td>
            </tr>
          </table>
          <p className="text-sm text-gray-600 mt-2">
            No `&lt;th&gt;` headers - screen readers read cells without context
          </p>
          <details className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
            <summary className="cursor-pointer font-semibold text-red-900">
              Why this is inaccessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Issues:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>Uses only &lt;td&gt; elements - no header semantics</li>
                <li>No &lt;thead&gt; to distinguish headers from data</li>
                <li>Screen readers can't announce column context</li>
              </ul>
              <p className="mb-2">
                <strong>Inaccessible Code:</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<table>
  <tr>
    <td>Product A</td>
    <td>$29.99</td>
    <td>In Stock</td>
  </tr>
</table>`}</pre>
              <p className="text-xs text-gray-600 mt-2">
                Screen reader reads: "Product A, $29.99, In Stock" (no labels)
              </p>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">
            Missing Language Declaration
          </div>
          <p className="text-gray-700 mb-2">
            This page is missing `lang=&quot;en&quot;` on the `&lt;html&gt;`
            tag.
          </p>
          <p className="text-sm text-gray-600">
            Screen readers use wrong language/pronunciation for content
          </p>
          <details className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
            <summary className="cursor-pointer font-semibold text-red-900">
              Why this is inaccessible
            </summary>
            <div className="mt-3 text-sm text-gray-700">
              <p className="mb-2">
                <strong>Issue:</strong> Missing language declaration on html
                element
              </p>
              <p className="mb-3">
                Screen readers use the language attribute to apply correct
                pronunciation rules. Without it, they guess or use the user's
                default language, resulting in incorrect pronunciation and
                unintelligible text-to-speech.
              </p>
              <p className="mb-2">
                <strong>Inaccessible Code (Current):</strong>
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">{`<!DOCTYPE html>
<html>
  <head>...</head>
  <body>...</body>
</html>`}</pre>
              <p className="text-xs text-gray-600 mt-1">
                Screen reader: Uses wrong pronunciation (e.g., English text read
                as Spanish)
              </p>
            </div>
          </details>
        </section>
      </main>
    </div>
  );
}
