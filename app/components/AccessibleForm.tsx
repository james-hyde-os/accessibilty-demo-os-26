"use client";

import { useState } from "react";

export default function AccessibleForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Contact Form</h2>

      {submitted && (
        <div
          role="status"
          aria-live="polite"
          className="mb-4 p-4 bg-green-100 text-green-800 rounded"
        >
          Thank you for your submission!
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name <span aria-label="required">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-describedby="name-help"
        />
        <p id="name-help" className="text-sm text-gray-600 mt-1">
          Please enter your full name
        </p>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email <span aria-label="required">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-describedby="email-help"
        />
        <p id="email-help" className="text-sm text-gray-600 mt-1">
          We&apos;ll never share your email
        </p>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message <span aria-label="required">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject
        </label>
        <select
          id="subject"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a subject</option>
          <option value="inquiry">General Inquiry</option>
          <option value="support">Support</option>
          <option value="feedback">Feedback</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="subscribe" className="flex items-center">
          <input
            id="subscribe"
            type="checkbox"
            className="mr-2 focus:ring-2 focus:ring-blue-500"
          />
          Subscribe to our newsletter
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
}
