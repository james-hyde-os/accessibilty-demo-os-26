"use client";

import { useState } from "react";

export default function InaccessibleForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-xl font-bold mb-4">Contact Form</div>

      {submitted && (
        <div className="mb-4 p-4 bg-green-500 text-green-600 rounded">
          Thank you for your submission!
        </div>
      )}

      <div className="mb-4">
        <div className="block text-sm font-medium mb-1">
          Name <span className="text-red-500">*</span>
        </div>
        <input
          type="text"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <div className="block text-sm font-medium mb-1">
          Email <span className="text-red-500">*</span>
        </div>
        <input
          type="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <div className="block text-sm font-medium mb-1">
          Message <span className="text-red-500">*</span>
        </div>
        <textarea
          required
          rows={5}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        ></textarea>
      </div>

      <div className="mb-4">
        <div className="block text-sm font-medium mb-1">Subject</div>
        <select className="w-full px-3 py-2 border border-gray-300 rounded">
          <option value="">Select a subject</option>
          <option value="inquiry">General Inquiry</option>
          <option value="support">Support</option>
          <option value="feedback">Feedback</option>
        </select>
      </div>

      <div className="mb-6">
        <input type="checkbox" className="mr-2" />
        Subscribe to our newsletter
      </div>

      <button
        type="submit"
        className="bg-gray-500 text-gray-600 px-4 py-2 rounded font-medium hover:bg-gray-600"
      >
        Submit
      </button>
    </form>
  );
}
