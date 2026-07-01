import Link from "next/link";
import { MAIN_ID } from "./lib/constants";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main
        id={MAIN_ID}
        tabIndex={-1}
        className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full"
      >
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Welcome</h2>
          <p className="text-lg text-gray-700 mb-6 dark:text-gray-300">
            This project demonstrates the difference between an accessible
            website built to WCAG 2.2 Level A standards and one with common
            accessibility violations.
          </p>
          <p className="text-lg text-gray-700 mb-8 dark:text-gray-300">
            Click on either link below to compare the two approaches.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Link
              href="/accessible"
              className="p-6 bg-green-50 border-2 border-green-500 rounded-lg hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-green-950/30 dark:border-green-700"
            >
              <h3 className="text-xl font-bold mb-2 text-green-700">
                ✓ Accessible Page
              </h3>
              <p className="text-gray-700 mb-4">
                This page follows WCAG 2.2 Level A standards with:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Semantic HTML structure</li>
                <li>Proper heading hierarchy</li>
                <li>Alt text on images</li>
                <li>Labeled form inputs</li>
                <li>Good color contrast</li>
                <li>Keyboard navigation</li>
                <li>ARIA attributes</li>
              </ul>
            </Link>

            <Link
              href="/inaccessible"
              className="p-6 bg-red-50 border-2 border-red-500 rounded-lg hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:bg-red-950/30 dark:border-red-700"
            >
              <h3 className="text-xl font-bold mb-2 text-red-700">
                ✗ Inaccessible Page
              </h3>
              <p className="text-gray-700 mb-4">
                This page has common accessibility violations:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Non-semantic HTML</li>
                <li>Poor heading hierarchy</li>
                <li>Missing alt text</li>
                <li>Unlabeled form inputs</li>
                <li>Low color contrast</li>
                <li>Limited keyboard support</li>
                <li>Missing ARIA</li>
              </ul>
            </Link>

            <Link
              href="/quiz"
              className="p-6 bg-yellow-50 border-2 border-yellow-500 rounded-lg hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:bg-yellow-950/30 dark:border-yellow-700"
            >
              <h3 className="text-xl font-bold mb-2 text-yellow-700">
                ? Accessibility Quiz
              </h3>
              <p className="text-gray-700 mb-4">
                Test your ability to spot accessibility issues from the
                inaccessible example page.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Review the page examples</li>
                <li>Enter likely problems</li>
                <li>Submit for instant feedback</li>
              </ul>
            </Link>
          </div>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-12 dark:bg-blue-950/30 dark:border-blue-900">
          <h3 className="text-lg font-bold mb-3 text-blue-900">
            What You&lsquo;ll Find on Each Page
          </h3>
          <ul className="space-y-2 text-gray-700 mb-7">
            <li>
              <strong>Header & Navigation:</strong> With consistent styling and
              link navigation
            </li>
            <li>
              <strong>Page Title Heading:</strong> Using semantic heading
              hierarchy
            </li>
            <li>
              <strong>Introductory Content:</strong> Explaining the page concept
            </li>
            <li>
              <strong>Featured Image:</strong> Demonstrating image accessibility
              differences
            </li>
            <li>
              <strong>Product Table:</strong> Showing proper vs improper table
              markup
            </li>
            <li>
              <strong>Contact Form:</strong> Highlighting form accessibility
              practices
            </li>
            <li>
              <strong>Footer:</strong> With navigation and site information
            </li>
          </ul>
          <h3 className="text-lg font-bold mb-3 text-blue-900">
            Testing Accessibility
          </h3>
          <p className="text-gray-700 mb-4">
            Testing accessibilty isnt hard and most of the tools you can use are
            free, or built into your browser and laptop. Have a look at the list
            of tools that the we recommend for testing, based on the tools from
            the GOV UK accessibilty tools.
          </p>
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/tools"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Explore Testing Tools →
            </Link>
          </div>
          <ul className="text-gray-700 space-y-1 list-disc pl-12 dark:text-gray-300">
            <li>Inspecting elements in developer tools</li>
            <li>Axe DevTools</li>
            <li>Contrast Checker</li>
            <li>Headings Map</li>
            <li>Screen Reader - VoiceOver for MacOS, Narrator for Windows</li>
            <li>WAVE Evaluator</li>
          </ul>
        </section>
        <section className="bg-gray-100 p-6 rounded-lg border border-gray-300 mb-12 px-4">
          <h3 className="text-lg font-bold mb-3 text-gray-900">
            More materials
          </h3>
          <ul className="space-y-2 text-gray-700 mb-7">
            <li>
              <a
                href="https://www.w3.org/WAI/WCAG22/quickref/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                WCAG 2.2 Quick Reference
              </a>
            </li>
            <li>
              <a
                href="https://www.w3.org/WAI/test-evaluate/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                W3C Accessibility Testing Tools
              </a>
            </li>
            <li>
              <a
                href="https://www.gov.uk/service-manual/helping-people-to-use-your-service/testing-for-accessibility"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GOV UK Testing for accessibility
              </a>
            </li>
            <li>
              <a
                href="https://accessibility.education.gov.uk/tools-testing/tools"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GOV UK Accessibility Tools
              </a>
            </li>
            <li>
              <a
                href="https://www.w3.org/WAI/test-evaluate/tools/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Jest Axe
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-sm text-gray-300">
            &copy; 2026 Accessibility Demo Site. Use this to learn about web
            accessibility best practices.
          </p>
        </div>
      </footer>
    </div>
  );
}
