import InaccessibleHeader from "@/app/components/InaccessibleHeader";
import InaccessibleFooter from "@/app/components/InaccessibleFooter";
import InaccessibleForm from "@/app/components/InaccessibleForm";
import InaccessibleTable from "@/app/components/InaccessibleTable";
import Image from "next/image";

export const metadata = {
  title: "Inaccessible Page - Accessibility Demo",
  description: "A page with various accessibility violations for comparison",
};

export default function InaccessiblePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <InaccessibleHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full">
        <div className="text-4xl font-bold mb-6">Inaccessible Page</div>

        <section className="mb-12">
          <p className="text-lg text-gray-700 mb-6">
            This page demonstrates common accessibility violations. It has been
            intentionally built without proper accessibility practices. This
            page contains the following issues:
          </p>
          <ul className="text-gray-700 ml-4">
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
          <div className="text-2xl font-bold mb-4">Featured Image</div>
          <div className="relative h-100 w-100 max-w-2xl">
            <Image
              src="/images/business-logo.avif"
              alt=""
              fill
              className="object-cover rounded-lg"
            />
          </div>
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
          <div className="text-2xl font-bold mb-4">Form Validation (Inaccessible)</div>
          <form className="max-w-md">
            <div className="mb-4">
              <div className="text-sm font-medium mb-1">Email</div>
              <input
                type="email"
                className="w-full px-3 py-2 border border-red-500 rounded"
                placeholder="Enter email"
              />
              <div className="text-red-600 text-sm mt-1">Invalid email format</div>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Submit
            </button>
          </form>
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">Small Touch Targets (Inaccessible)</div>
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
            These buttons are less than 44x44px - difficult for mobile/motor issues
          </p>
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">Ambiguous Link Text (Inaccessible)</div>
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
            Screen reader users hear &quot;click here&quot; twice with no context
          </p>
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">Placeholder-Only Labels (Inaccessible)</div>
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
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">Icon Button (Inaccessible)</div>
          <div className="flex gap-4 items-center">
            <button className="text-2xl hover:opacity-70">🔍</button>
            <button className="text-2xl hover:opacity-70">❤️</button>
            <button className="text-2xl hover:opacity-70">🛒</button>
            <p className="text-sm text-gray-600">No accessible names - screen readers say &quot;button&quot;</p>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">Color-Only Information (Inaccessible)</div>
          <div className="flex gap-4 mb-4">
            <div className="w-16 h-16 bg-green-500 rounded flex items-center justify-center text-white font-bold">
              ✓
            </div>
            <div className="w-16 h-16 bg-red-500 rounded flex items-center justify-center text-white font-bold">
              ✗
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Color-blind users can&apos;t distinguish meaning - no text alternative
          </p>
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">Decorative Image with Alt Text (Inaccessible)</div>
          <div className="relative h-20 w-20 mb-2">
            <Image
              src="/images/business-logo.avif"
              alt="This is just decoration but has descriptive alt text making it confusing"
              fill
              className="object-cover rounded"
            />
          </div>
          <p className="text-sm text-gray-600">
            Decorative images should have alt=&quot;&quot; but this has unnecessary description
          </p>
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">Animated Content (Inaccessible)</div>
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
            Animation ignores prefers-reduced-motion - may cause vestibular issues
          </p>
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">Poor Focus Order (Inaccessible)</div>
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
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">Table Without Proper Headers (Inaccessible)</div>
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
        </section>

        <section className="mb-12">
          <div className="text-2xl font-bold mb-4">Missing Language Declaration</div>
          <p className="text-gray-700 mb-2">
            This page is missing `lang=&quot;en&quot;` on the `&lt;html&gt;` tag.
          </p>
          <p className="text-sm text-gray-600">
            Screen readers use wrong language/pronunciation for content
          </p>
        </section>
      </main>

      <InaccessibleFooter />
    </div>
  );
}
