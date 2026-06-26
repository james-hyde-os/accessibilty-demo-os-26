import Link from "next/link";

export default function InaccessibleHeader() {
  return (
    <div className="bg-gray-500 text-gray-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-3xl font-bold mb-4">Accessibility Demo Site</div>
        <div>
          <ul className="flex flex-wrap gap-4">
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
      </div>
    </div>
  );
}
