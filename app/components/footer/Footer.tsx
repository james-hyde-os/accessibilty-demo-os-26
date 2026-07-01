import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const footerLinks = [
  { label: "Accessible version", href: "/accessible" },
  { label: "Inaccessible version", href: "/inaccessible" },
  { label: "Accessibility quiz", href: "/quiz" },
  { label: "Testing tools", href: "/tools" },
];

export default function Footer() {
  return (
    <footer className="mt-12 bg-gray-800 text-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <NavigationMenu.Root aria-label="Footer navigation">
          <NavigationMenu.List className="flex flex-wrap items-center gap-3 sm:gap-4">
            {footerLinks.map((link) => (
              <NavigationMenu.Item key={link.href}>
                <NavigationMenu.Link
                  href={link.href}
                  className="rounded px-2 py-1 text-sm text-gray-300 underline-offset-4 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800"
                >
                  {link.label}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
        <p className="text-sm text-gray-300">
          &copy; 2026 Accessibility demonstation, James Hyde. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
