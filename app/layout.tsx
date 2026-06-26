import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accessibility Demo - WCAG 2.2 Comparison",
  description:
    "A comparison website demonstrating accessible vs inaccessible design patterns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="bg-blue-600 text-white shadow-lg">
          <nav className="inline-flex items-center justify-between w-full">
            <div className="px-4 py-6">
              <h1 className="text-3xl font-bold">
                <a href="/quiz" className="text-white hover:text-blue-200">Accessibility Demo Site</a>
              </h1>
            </div>
            <ul className="flex space-x-4 px-4 py-2">
              <li><a href="/quiz" className="text-white hover:text-blue-200">Accessibility Quiz</a></li>
              <li><a href="/accessible" className="text-white hover:text-blue-200">Accessible Version</a></li>
              <li><a href="/inaccessible" className="text-white hover:text-blue-200">Inaccessible Version</a></li>
              <li><a href="/tools" className="text-white hover:text-blue-200">Testing Tools</a></li>
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
