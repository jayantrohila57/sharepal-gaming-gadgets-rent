"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "How can I rent from SharePal?",
    a:
      "Browse products, select your delivery and pickup dates, add items to cart, complete verification, and pay online. We deliver to your doorstep in Bangalore.",
  },
  {
    q: "If I rent multiple products, do I need to extend the rental duration for all or partial extension is possible?",
    a:
      "You can extend rentals for individual items in your order. Partial extension is supported from your order dashboard.",
  },
  {
    q: "When does the rental start?",
    a:
      "Your rental starts on the day after delivery. Delivery and pickup days are not charged as rental days.",
  },
  {
    q: "What will be the condition of the products at the time of delivery?",
    a:
      "All products are quality-checked, sanitized, and delivered in working condition with required accessories.",
  },
  {
    q: "Why is verification required?",
    a:
      "Verification helps us prevent fraud and protect high-value gear. A valid ID and address proof are required before dispatch.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:p-8">
      <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
        Frequently Asked Questions (FAQs)
      </h2>
      <ul className="mt-6 divide-y divide-gray-100">
        {FAQ_ITEMS.map((item, i) => {
          const open = openIndex === i;
          return (
            <li key={item.q}>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-gray-900 md:text-base"
              >
                {item.q}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gray-500 transition ${open ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden text-sm text-gray-600 transition-all ${
                  open ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                {item.a}
              </div>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="mt-6 w-full rounded-xl bg-gray-100 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-200"
      >
        View more FAQ&apos;s
      </button>
    </section>
  );
}
