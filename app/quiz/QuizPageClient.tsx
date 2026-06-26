"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";

const expectedIssues = [
  {
    id: "no-nav",
    description: "No navigation landmarks",
    keywords: ["nav", "navigation element", "landmark", "no nav", "semantic nav"],
  },
  {
    id: "missing-alt",
    description: "Missing image alt text",
    keywords: ["missing alt", "no alt", "alt text", "alt=\"\""],
  },
  {
    id: "unlabeled-inputs",
    description: "Unlabeled form inputs",
    keywords: ["label", "unlabeled", "no label", "associated label"],
  },
  {
    id: "ambiguous-link-text",
    description: "Ambiguous link text",
    keywords: ["click here", "read more", "link text", "ambiguous link"],
  },
  {
    id: "poor-contrast",
    description: "Poor color contrast",
    keywords: ["contrast", "low contrast", "poor contrast", "colour", 'color'],
  },
  {
    id: "bad-table-structure",
    description: "Table without proper headers",
    keywords: ["table header", "<th>", "headers", "scope", "no header"],
  },
  {
    id: "placeholder-label",
    description: "Placeholder-only labels",
    keywords: ["placeholder", "placeholder-only", "no permanent label", "label disappears"],
  },
  {
    id: "icon-button-label",
    description: "Icon buttons without accessible names",
    keywords: ["aria-label", "accessible name", "icon button", "no label"],
  },
  {
    id: "motion-preference",
    description: "Animation ignores prefers-reduced-motion",
    keywords: ["motion", "reduce motion", "animation", "prefers-reduced-motion"],
  },
  {
    id: "poor-focus-order",
    description: "Poor focus/tab order",
    keywords: ["tab order", "focus order", "tabindex", "keyboard order"],
  },
  {
    id: "heading-order",
    description: "Document heading order is not correct",
    keywords: ['heading order', 'header ordering']
  },
  {
    id: "incorrect-aria-role",
    description: "Incorrect ARIA role usage",
    keywords: ['aria role', 'incorrect role', 'wrong role', 'article']
  },
  {
    id: 'non-visible text',
    description: "Off screen, non-visible text is present on the page",
    keywords: ['hidden text', 'offscreen text', 'non-visible text', 'invisible text']
  }
];

export default function QuizPageClient() {
  const [answers, setAnswers] = useState<string[]>(Array(expectedIssues.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [goToAnswers, setGoToAnswers] = useState(true);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const answersSection = document.getElementById("quiz-answers");
      setGoToAnswers(window.scrollY > (answersSection?.offsetTop || 0));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const feedback = useMemo(() => {
    if (!submitted) {
      return [];
    }

    return expectedIssues.map((issue) => {
      const matched = answers.some((answer) =>
        issue.keywords.some((keyword) =>
          answer.toLowerCase().includes(keyword.toLowerCase())
        )
      );

      return matched
        ? `Good job: ${issue.description} detected.`
        : `Missed: ${issue.description}.`;
    });
  }, [answers, submitted]);

  const handleAnswerChange = (index: number, value: string) => {
    const next = [...answers];
    next[index] = value;
    setAnswers(next);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const matched = expectedIssues.filter((issue) =>
      answers.some((answer) =>
        issue.keywords.some((keyword) =>
          answer.toLowerCase().includes(keyword.toLowerCase())
        )
      )
    );

    setScore(matched.length);
    setSubmitted(true);
  };

  const handleScrollAction = () => {
    setScrollHeight(window.scrollY);
    if (goToAnswers){
      document.getElementById("quiz-answers")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed bottom-4 right-4 z-50">
        <button
          type="button"
          onClick={handleScrollAction}
          className="inline-flex items-center px-4 py-3 bg-blue-600 text-white rounded-2xl shadow-lg cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label={goToAnswers ? "Jump to the answers section" : "Back to top of the quiz"}
        >
          {goToAnswers ? "Go to answers" : "Back to Quiz"}
        </button>
      </div>
      

      <main className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full">
        <div id="quiz-top" className="bg-yellow-100 text-yellow-900 border border-yellow-300 rounded-lg mb-12">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-3">Accessibility Quiz</h1>
            <p className="text-lg text-yellow-900/90 mb-3">
            This page includes the same kinds of inaccessible patterns found in the
            inaccessible example. Use the tools page to inspect the page and then
            name as many problems as you can.
            </p>
            <p className="text-gray-800">
              <Link
                href="/tools"
                className="font-semibold underline hover:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-900 focus:ring-offset-2"
              >
                Visit the tools page
              </Link>{" "}
              to examine the page structure, colors, labels, and keyboard behavior.
            </p>
          </div>
        </div>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Quiz Instructions</h2>
          <p className="text-gray-700 mb-4">
            Below are multiple examples of accessibility problems. The page itself
            does not label them for you. Use the examples and your own observations
            to enter the accessibility issue you think is present.
          </p>
          <p className="text-gray-700 mb-6">
            Enter one issue per line and click <strong>Submit answers</strong> to get
            scored. Try to identify as many of the following as you can:
          </p>
        </section>

        <section id="quiz-answers" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Your answers</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {Array.from({ length: expectedIssues.length }).map((_, index) => (
              <div key={index}>
                <label
                  htmlFor={`answer-${index}`}
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Problem {index + 1}
                </label>
                <input
                  id={`answer-${index}`}
                  type="text"
                  value={answers[index]}
                  onChange={(event) => handleAnswerChange(index, event.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter a likely accessibility issue"
                />
              </div>
            ))}

            <button
              type="submit"
              className="inline-flex items-center justify-center px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit answers
            </button>
          </form>

          {submitted && (
            <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
              <h3 className="text-xl font-bold mb-3">Quiz results</h3>
              <p className="text-gray-800 mb-3">
                You correctly identified <strong>{score}</strong> of{' '}
                <strong>{expectedIssues.length}</strong> expected issues.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {feedback.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {score < expectedIssues.length && (
                <p className="text-sm text-gray-600 mt-4">
                  If you missed any issues, review the examples again and try
                  identifying the missing patterns on the tools page.
                </p>
              )}
            </div>
          )}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Inaccessible quiz</h2>
          <div className="space-y-10">
            <div className="rounded-lg border border-gray-300 bg-gray-50 p-6">
              <p className="text-gray-700 mb-4">
                The elements below intentionally includes accessibility issues. Try
                to identify them without relying on labels or explanations.
              </p>

              <p className="text-red-700 mb-4">
                <strong>There can be more than one issue per item, try to identify all of them!</strong>
              </p>

              <div className="mb-8">
                <div className="text-2xl font-bold mb-2">Header and navigation</div>
                <div className="space-x-4 bg-green-100 border-green-900 border text-white p-4 rounded-lg mb-2">
                  <a href="#" className="text-blue-600 hover:underline">
                    Home
                  </a>
                  <a href="#" className="text-blue-600 hover:underline">
                    Products
                  </a>
                  <a href="#" className="text-blue-600 hover:underline">
                    Contact
                  </a>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-2xl font-bold mb-2">Featured image</div>
                <div className="relative h-100 w-full max-w-xl bg-gray-300 rounded-lg overflow-hidden mb-2">
                  <img
                    src="/images/business-logo.avif"
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>

              <div className="mb-8">
                <div className="text-2xl font-bold mb-2">Form</div>
                <form className="max-w-md space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="px-3 py-2 bg-gray-700 text-white rounded"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              <div className="mb-8">
                <div className="text-2xl font-bold mb-2">Mobile Buttons</div>
                <div className="flex gap-2">
                  <button className="px-2 py-1 bg-gray-400 text-white text-xs rounded">
                    Yes
                  </button>
                  <button className="px-2 py-1 bg-gray-400 text-white text-xs rounded">
                    No
                  </button>
                  <button className="px-2 py-1 bg-gray-400 text-white text-xs rounded">
                    Maybe
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-2xl font-bold mb-2">Links</div>
                <p className="text-gray-700">
                  Read more about this by <a href="#" className="text-blue-600 underline">clicking here</a>.
                  For support, <a href="#" className="text-blue-600 underline">clicking here</a>.
                </p>
              </div>

              <div className="mb-8">
                <div className="text-2xl font-bold mb-2">Information graphics</div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-green-500 rounded flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div className="w-16 h-16 bg-red-500 rounded flex items-center justify-center text-white font-bold">
                    ✗
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-2xl font-bold mb-2">Image purpose</div>
                <div className="relative mb-2 bg-gray-300 rounded-lg overflow-hidden border">
                  <div className="flex items-center gap-3 bg-white px-4 py-2">
                  <div className="relative h-10 w-10 rounded-lg overflow-hidden">
                    <img
                      src="/images/link.svg"
                      alt="This is just decoration but has descriptive alt text"
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Quick Links</h3>
                  </div>
                  <ul className="ml-15 my-5">
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        Link 3
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-2xl font-bold mb-2">Animated content</div>
                <div
                  className="w-24 h-24 bg-blue-500 rounded"
                  style={{ animation: "bounce 1s infinite" }}
                />
              </div>

              <div className="mb-8">
                <div className="text-2xl font-bold mb-2">Table</div>
                <table className="w-full border-collapse border border-gray-300">
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Product A</td>
                      <td className="border border-gray-300 px-4 py-2">$29.99</td>
                      <td className="border border-gray-300 px-4 py-2">In stock</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Product B</td>
                      <td className="border border-gray-300 px-4 py-2">$49.99</td>
                      <td className="border border-gray-300 px-4 py-2">Out of stock</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mb-8">
                <div className="text-2xl font-bold mb-2">Form</div>
                <form className="grid grid-cols-2 gap-4 max-w-xl">
                  <div>
                    <label>First Name</label>
                    <input
                      type="text"
                      tabIndex={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input
                      type="text"
                      tabIndex={1}
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                    />
                  </div>
                </form>
              </div>

              <div className="mb-8">
                <div className="text-2xl font-bold mb-2">Buttons</div>
                <div className="flex gap-4">
                  <button type="button" className="px-3 py-2 bg-green-400 text-green-700 rounded">
                    <span>Accept</span>
                  </button>
                  <button type="button" className="px-3 py-2 bg-red-400 text-red-700 rounded">
                    <span>Decline</span>
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-2xl font-bold mb-2">Text Structure</div>
                <article className="bg-white p-5 border border-gray-300" role="navigation">
                  <h1 className="text-3xl font-bold mt-4 mb-1">An Essay about Accessibilty</h1>
                  <h2 className="text-2xl font-bold mt-6 mb-1">Introduction</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <h2 className="text-2xl font-bold mt-6 mb-1">Background</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <h3 className="text-xl font-bold mt-2 mb-1">Historic accessibilty - pre-1900</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <h3 className="text-xl font-bold mt-2 mb-1">The beginnings of accessibilty - 1900-1950</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <h2 className="text-xl font-bold mt-2 mb-1">Modern accessibilty - 1950-2000</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <h2 className="text-2xl font-bold mt-6 mb-1">Development team actions</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <h4 className="text-lg font-bold mt-2 mb-1">Ticket refinement & Acceptance Criteria</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <h4 className="text-lg font-bold mt-2 mb-1">Development</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <h4 className="text-lg font-bold mt-2 mb-1">Testing</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <h4 className="text-lg font-bold mt-2 mb-1">Accessibility Statements</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </article>
              </div>

              <div className="absolute" style={{ left: '-1000px',}}>
                <div className="text-2xl font-bold mb-2">Hidden text and element</div>
                <p>You can't see this text, but it is acceptable to a screen reader, and it&quot;s going to read it out.</p>
              </div>

              <style>{`
                @keyframes bounce {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-20px); }
                }
              `}</style>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-sm text-gray-300">
            &copy; 2026 Accessibility Demo Site. Use this quiz to practice spotting
            accessibility problems.
          </p>
        </div>
      </footer>
    </div>
  );
}
