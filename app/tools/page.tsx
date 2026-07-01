"use client";

import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { MAIN_ID } from "../lib/constants";

export default function ToolsPage() {
  const tools = [
    {
      id: "inspect",
      title: "Inspecting Elements in Developer Tools",
      explanation:
        "Browser developer tools allow you to inspect the HTML structure of any webpage. You can examine elements, view their properties, check CSS styles, and verify semantic markup. This is a fundamental tool for accessibility testing.",
      documentation: [
        {
          title: "MDN Web Docs - Inspector",
          href: "https://developer.mozilla.org/en-US/docs/Tools/Inspector",
        },
      ],
      instructions: [
        'Right-click on any element on the webpage and select "Inspect" or "Inspect Element"',
        "Use the Inspector to examine HTML elements and their attributes",
        "Check for proper semantic HTML tags (nav, main, article, section, etc.)",
        "Verify that form inputs have associated labels",
        "Look for missing alt attributes on images",
        "Use the Accessibility tab (in some browsers) to check the Accessibility Tree",
      ],
    },
    {
      id: "accessibility-inspector",
      title: "Accessibility Inspector / Document Viewer",
      explanation:
        "The Accessibility Inspector is a browser developer tool that shows the accessibility tree—how assistive technologies like screen readers perceive your page. It displays the accessible name, role, and state of elements, helping you understand how your content is exposed to users with disabilities.",
      documentation: [
        {
          title: "Firefox Accessibility Inspector",
          href: "https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector",
        },
        {
          title: "Chrome DevTools Accessibility Features",
          href: "https://developer.chrome.com/docs/devtools/accessibility/reference/",
        },
        {
          title: "Safari Web Inspector Accessibility",
          href: "https://developer.apple.com/documentation/webdriver/investigating-web-automation-failures#Inspect-web-content-accessibility",
        },
      ],
      instructions: [
        "Open Developer Tools (F12 or Right-click > Inspect)",
        "Firefox: Click the 'Accessibility' tab in the DevTools panel",
        "Chrome: In the Elements panel, look for the 'Accessibility' subtab on the right sidebar (you may need to click >> to find it)",
        "Safari: Open Web Inspector and navigate to the Accessibility tab",
        "Select elements on the page using the element picker tool",
        "View the Accessibility Tree to see how the element appears to assistive technologies",
        "Check the 'Name' field to see the accessible name of the element",
        "Verify the 'Role' is correct (button, link, heading, etc.)",
        "Review other properties like 'State' and 'ARIA Attributes'",
        "Use this to identify missing labels, incorrect roles, or hidden content",
      ],
    },
    {
      id: "axe",
      title: "Axe DevTools",
      explanation:
        "Axe DevTools is a powerful browser extension by Deque that automatically scans your webpage for accessibility violations. It identifies issues related to WCAG 2.2 standards and provides detailed reports with severity levels and suggestions for fixes.",
      documentation: [
        {
          title: "Axe DevTools Official Site",
          href: "https://github.com/dequelabs/axe-core#axe-core",
        },
      ],
      instructions: [
        "Install the Axe DevTools extension from your browser's extension store",
        "Navigate to the webpage you want to test",
        "Open the Developer Tools, select the 'axe DevTools' tab in the Developer Tools",
        "Select 'Scan full page'",
        "Review the results organized by violation severity",
        "Click on each issue to get detailed information and recommendations",
      ],
    },
    {
      id: "contrast",
      title: "Contrast Checker",
      explanation:
        "The WebAIM Contrast Checker is a tool that helps you verify color contrast ratios between text and background colors. Proper contrast is essential for users with visual impairments and is a requirement of WCAG standards.",
      documentation: [
        {
          title: "WebAIM Contrast Checker",
          href: "https://webaim.org/resources/contrastchecker/",
        },
      ],
      instructions: [
        "Visit the WebAIM Contrast Checker website",
        "Enter the foreground (text) color in the first field",
        "Enter the background color in the second field (or use the color picker)",
        "Check the contrast ratio results",
        "Verify compliance with WCAG AA (4.5:1 for normal text) and AAA (7:1) standards",
        "Adjust colors as needed to meet compliance levels",
      ],
    },
    {
      id: "contrast-extension",
      title: "WCAG Contrast checker (Browser Extension)",
      explanation:
        "The Contrast Checker is a tool that helps you verify color contrast ratios between text and background colors. Proper contrast is essential for users with visual impairments and is a requirement of WCAG standards.",
      instructions: [
        "Install the WCAG Contrast checker browser extension from your browser's extension store",
        "Navigate to the webpage you want to test",
        "Click the extension icon in your browser toolbar",
        "The extension will automatically analyze the page and highlight areas with insufficient contrast, or",
        "Use the color picker to select text and background colors on the page",
      ],
    },
    {
      id: "headings",
      title: "Headings Map",
      explanation:
        "Headings Map is a browser extension that visualizes the heading hierarchy of a webpage. It helps you verify that headings follow a logical structure (h1 → h2 → h3) without skipping levels, which is important for screen reader users and document outline.",
      documentation: [
        {
          title: "Headings Map Extension",
          href: "https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi",
        },
      ],
      instructions: [
        "Install the Headings Map extension from your browser's extension store",
        "Navigate to the webpage you want to analyze",
        "Click the Headings Map icon in your browser toolbar",
        "View the heading structure displayed in a sidebar or popup",
        "Verify that headings follow a logical hierarchy",
        "Check for skipped heading levels (e.g., jumping from h1 to h3)",
        "Ensure only one h1 exists per page",
      ],
    },
    {
      id: "screenreader",
      title: "Screen Reader - VoiceOver (macOS) & Narrator (Windows)",
      explanation:
        "Screen readers are assistive technologies that read webpage content aloud. VoiceOver is built into macOS and iOS, while Narrator is built into Windows. Testing with screen readers helps you understand how users with visual impairments experience your website.",
      documentation: [
        {
          title: "macOS VoiceOver",
          href: "https://www.apple.com/accessibility/voiceover/",
        },
        {
          title: "Windows Narrator",
          href: "https://support.microsoft.com/en-us/windows/use-narrator-to-read-and-respond-to-emails-d94215e5-f9d9-47b8-90c6-b3f3131e318a",
        },
      ],
      instructions: [
        "macOS: Press Cmd + F5 to enable VoiceOver",
        "Windows: Press Win + Enter to enable Narrator",
        "Use keyboard navigation (Tab, Enter, Arrow keys) to move through the page",
        "Listen to how content is announced and in what order",
        "Verify that form labels are properly associated with inputs",
        "Check that images have descriptive alt text",
        "Test that all interactive elements are keyboard accessible",
        "Press Cmd + F5 (Mac) or Win + Enter (Windows) again to disable",
      ],
    },
    {
      id: "voicecontrol",
      title: "Voice Control - macOS & Voice Control - Windows",
      explanation:
        "Voice Control is a speech recognition feature that allows users to control their computer entirely by voice. macOS includes Voice Control, and Windows includes a similar Voice Control feature (available in Windows 11+). These tools are essential for users with motor impairments or those who cannot use traditional input methods. Testing with voice control helps ensure your website is navigable using voice commands.",
      documentation: [
        {
          title: "macOS Voice Control",
          href: "https://support.apple.com/en-us/102292",
        },
        {
          title: "Windows Voice Control",
          href: "https://support.microsoft.com/en-us/windows/voice-control-in-windows-11-efde6e24-8ecc-4bee-9cdd-ba76b752be4b",
        },
      ],
      instructions: [
        "macOS: Open System Preferences > Accessibility > Voice Control, then enable Voice Control",
        "Windows 11: Press Win + H to enable Voice Typing/Voice Control, or go to Settings > Accessibility > Speech",
        "Say commands like 'Show names' to see clickable elements labeled with numbers",
        "Say the number of an element to interact with it",
        "Use commands like 'Click', 'Scroll', 'Show grid' for various interactions",
        "Test form inputs by saying field names and values",
        "Verify that all interactive elements can be accessed by voice",
        "Practice common commands: 'Show numbers', 'Scroll down', 'Click button', 'Go back'",
        "macOS: Press Fn key twice or say 'Voice Control on/off' to toggle",
        "Windows: Press Win + H again or say 'Stop listening' to disable",
      ],
    },
    {
      id: "wave",
      title: "WAVE Evaluator",
      explanation:
        "WAVE (Web Accessibility Evaluation Tool) by WebAIM is a comprehensive tool that provides automated and manual accessibility testing. It can be used as a browser extension or web-based tool and provides detailed feedback on accessibility issues, alerts, and features.",
      documentation: [
        {
          title: "WAVE Web Accessibility Evaluation Tool",
          href: "https://wave.webaim.org/",
        },
      ],
      instructions: [
        "Install WAVE as a browser extension or visit the website",
        "Navigate to the webpage you want to evaluate",
        "Click the WAVE icon or enter the URL on the website",
        "Review the results with colored icons indicating issues",
        "Red: errors that need fixing",
        "Yellow: warnings or items to review",
        "Green: features that are implemented correctly",
        "Click on each icon to get detailed information and suggestions",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main
        id={MAIN_ID}
        tabIndex={-1}
        className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full"
      >
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Tools for Testing Accessibility
          </h2>
          <p className="text-lg text-gray-700 mb-8 dark:text-gray-300">
            Click on any tool below to learn more about it, including
            documentation links and basic instructions on how to use it for
            accessibility testing.
          </p>

          <Accordion.Root
            type="single"
            collapsible
            className="space-y-2 w-full"
          >
            {tools.map((tool) => (
              <Accordion.Item
                key={tool.id}
                value={tool.id}
                className="border border-gray-300 rounded-lg dark:border-gray-700"
              >
                <Accordion.Trigger className="flex items-center justify-between w-full px-6 py-4 text-left font-semibold text-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors dark:bg-gray-800 dark:hover:bg-gray-700">
                  <span className="text-gray-900">{tool.title}</span>
                  <ChevronDownIcon
                    className="w-5 h-5 text-gray-600 transition-transform duration-200 data-[state=open]:rotate-180"
                    aria-hidden="true"
                  />
                </Accordion.Trigger>

                <Accordion.Content className="px-6 py-4 bg-white dark:bg-gray-900">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        What is it?
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {tool.explanation}
                      </p>
                    </div>

                    {tool.documentation && (
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Documentation
                        </h3>
                        <ul className="space-y-2">
                          {tool.documentation.map((doc, i) => (
                            <li key={i}>
                              <a
                                href={doc.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                {doc.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        How to use it
                      </h3>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        {tool.instructions.map((instruction, idx) => (
                          <li key={idx} className="pl-2">
                            {instruction}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-bold mb-3 text-blue-900">
            Getting Started
          </h3>
          <p className="text-gray-700 mb-4">
            We recommend starting with browser developer tools to understand
            HTML structure, then using automated tools like Axe DevTools or WAVE
            to identify issues. Finally, test with keyboard navigation and
            screen readers to verify the user experience.
          </p>
          <Link
            href="/"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Back to Home
          </Link>
        </section>
      </main>
    </div>
  );
}
