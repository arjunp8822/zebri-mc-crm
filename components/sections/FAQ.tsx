"use client";

import { useState } from "react";

export function FAQ() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const faqs = [
    {
      id: "pro-only",
      q: "Is Zebri only for professional MCs?",
      a: "Yes. We built this specifically for MCs doing 25+ weddings per year. If you do fewer than 10, Zebri isn\u2019t the right fit. That\u2019s intentional.",
    },
    {
      id: "crm",
      q: "Is this a CRM?",
      a: "No. Zebri is not a client database. It\u2019s a command centre for running individual weddings. Couple details, timeline, scripts, on-the-night mode. That\u2019s it.",
    },
    {
      id: "launch",
      q: "When is this launching?",
      a: "We\u2019re targeting Q3 2026 for general availability. Right now we\u2019re in founding member testing with early adopters who shape the final product.",
    },
    {
      id: "pricing",
      q: "How much will Zebri cost?",
      a: "TBD. But founding members get 40% off the eventual price, locked in forever. You\u2019re getting the best deal possible.",
    },
    {
      id: "feedback",
      q: "Can I give feedback?",
      a: "That\u2019s the whole point. You\u2019ll have direct access to our team via Slack. Tell us what\u2019s working, what\u2019s not, what you need next.",
    },
    {
      id: "global",
      q: "Is this available outside Australia?",
      a: "Yes. Zebri is being built for MCs everywhere. We\u2019re launching globally and want your feedback regardless of where you are.",
    },
    {
      id: "after-signup",
      q: "What happens after I sign up?",
      a: "You\u2019ll receive one email confirming your spot. When beta access opens, we\u2019ll invite founding members first. No spam, no drip campaigns \u2014 just one email when it\u2019s time.",
    },
  ];

  return (
    <section className="py-20 px-4 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold text-gray-900 leading-tight tracking-tight mb-12 md:mb-16">
          Questions.
        </h2>

        <div>
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-gray-100 last:border-b-0"
            >
              <button
                onClick={() =>
                  setExpanded(expanded === faq.id ? null : faq.id)
                }
                className="w-full flex items-center justify-between gap-4 text-left py-5 md:py-6 group"
              >
                <span className="text-[15px] font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-colors">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className={`text-gray-500 transition-transform duration-200 ${expanded === faq.id ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  expanded === faq.id ? "max-h-40 pb-5 md:pb-6" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gray-500 leading-relaxed pr-10">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            Still have questions?{" "}
            <a
              href="https://instagram.com/zebrimc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              DM us on Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
