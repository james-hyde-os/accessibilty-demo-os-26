import Link from "next/link";

export default function AccessibleFooter() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav aria-label="Footer navigation" className="mb-6">
          <ul className="flex flex-wrap gap-6">
            <li>
              <Link
                href="/accessible"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 px-2 py-1 rounded"
              >
                Accessible Page
              </Link>
            </li>
            <li>
              <Link
                href="/inaccessible"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 px-2 py-1 rounded"
              >
                Inaccessible Page
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-sm text-gray-300">
          &copy; 2026 Accessibility Demo Site. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
