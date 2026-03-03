"use client";

import { useState } from "react";

export function FAQ() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const faqs = [
    {
      id: "pro-only",
      q: "Is Zebri only for professional MCs?",
      a: "Yes. We built this specifically for MCs doing 25+ weddings per year. If you do fewer than 10, Zebri isn't the right fit. That's intentional.",
    },
    {
      id: "crm",
      q: "Is this a CRM?",
      a: "No. Zebri is not a client database. It's a command centre for running individual weddings. Couple details, timeline, scripts, on-the-night mode. That's it.",
    },
    {
      id: "launch",
      q: "When is this launching?",
      a: "We're targeting Q3 2024 for general availability. Right now we're in founding member testing with early adopters who shape the final product.",
    },
    {
      id: "pricing",
      q: "How much will Zebri cost?",
      a: "TBD. But founding members get 40% off the eventual price, locked in forever. You're getting the best deal possible.",
    },
    {
      id: "feedback",
      q: "Can I give feedback?",
      a: "That's the whole point. You'll have direct access to our team via Slack. Tell us what's working, what's not, what you need next.",
    },
    {
      id: "global",
      q: "Is this available outside Australia?",
      a: "Yes. Zebri is being built for MCs everywhere. We're launching globally and want your feedback regardless of where you are.",
    },
  ];

  return (
    <section className="py-20 px-4 md:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-3xl mx-auto">
        <h2 style={{ fontSize: "42px", fontWeight: "700", marginBottom: "56px", color: "var(--text-primary)", lineHeight: "1.3" }}>
          Questions.
        </h2>

        {/* FAQ items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="border-b py-6 md:py-8 transition-colors"
              style={{ borderColor: "var(--border)" }}
            >
              <button
                onClick={() => setExpanded(expanded === faq.id ? null : faq.id)}
                className="w-full flex items-start justify-between gap-4 text-left hover:opacity-70 transition-opacity"
              >
                <span style={{ fontSize: "16px", fontWeight: "600", color: "var(--text-primary)", lineHeight: "1.5" }}>
                  {faq.q}
                </span>
                <span style={{ fontSize: "20px", color: "var(--text-secondary)", flexShrink: 0, marginTop: "2px" }}>
                  {expanded === faq.id ? "−" : "+"}
                </span>
              </button>

              {expanded === faq.id && (
                <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid var(--border)" }}>
                  <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.7", margin: "0" }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid var(--border)", textAlign: "center" }}>
          <p style={{ fontSize: "15px", color: "var(--text-secondary)", marginBottom: "0" }}>
            Still have questions?{" "}
            <a
              href="https://instagram.com/zebrimc"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent)", fontWeight: "500", textDecoration: "none" }}
            >
              DM us on Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
