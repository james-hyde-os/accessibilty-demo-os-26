import Link from "next/link";

export default function InaccessibleFooter() {
  return (
    <div className="bg-gray-500 text-gray-600 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <ul className="flex flex-wrap gap-6">
            <li>
              <Link href="/accessible" className="hover:underline">
                Accessible Page
              </Link>
            </li>
            <li>
              <Link href="/inaccessible" className="hover:underline">
                Inaccessible Page
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-sm text-gray-400">
          &copy; 2026 Accessibility Demo Site
        </p>
      </div>
    </div>
  );
}
