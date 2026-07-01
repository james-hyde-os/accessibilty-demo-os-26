import Link from "next/link";

export default function AccessibleHeader() {
  return (
    <header className="bg-blue-600 text-white shadow-lg dark:bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-4">Accessibility Demo Site</h1>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link
                href="/accessible"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 px-2 py-1 rounded"
              >
                Accessible Page
              </Link>
            </li>
            <li>
              <Link
                href="/inaccessible"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 px-2 py-1 rounded"
              >
                Inaccessible Page
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
