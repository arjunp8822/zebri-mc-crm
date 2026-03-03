export function PainPoints() {
  return (
    <section className="py-20 px-4 md:py-32 bg-gray-50/70">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold text-gray-900 leading-tight tracking-tight mb-12 md:mb-16">
          The problem isn&apos;t your tools.<br className="hidden md:block" />
          It&apos;s that you need six of them.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* Before */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 md:p-8">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Before Zebri</span>
            </div>
            <p className="text-sm font-semibold text-gray-800 mb-4">Friday, 2 days before the wedding</p>
            <ul className="space-y-3">
              {[
                "Couple details scattered across a Google Form",
                "Runsheet in a shared Google Doc (outdated)",
                "Pronunciation guide buried in your notes",
                "DJ sending WhatsApp messages about timing",
                "Photographer asking about ceremony order",
                "6 tabs open just to remember what to do",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 mt-0.5">
                    <line x1="18" x2="6" y1="6" y2="18" />
                    <line x1="6" x2="18" y1="6" y2="18" />
                  </svg>
                  <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-400 italic">
                Result: you mispronounce the bride&apos;s name. You skip a detail they specifically asked you to mention. You told yourself you&apos;d never let this happen again.
              </p>
            </div>
          </div>

          {/* After */}
          <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">With Zebri</span>
            </div>
            <p className="text-sm font-semibold text-gray-800 mb-4">Friday, 2 days before the wedding</p>
            <ul className="space-y-3">
              {[
                "Send one link — couple fills in everything",
                "Names, pronunciation, bridal party, cultural notes",
                "Timeline synced — they see what\u2019s happening when",
                "Scripts organised by section, ready to go",
                "On-the-night mode: dark screen, large text, next cue visible",
                "One tab. One source of truth. Zero stress.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-blue-100">
              <p className="text-xs text-blue-600 font-medium">
                Result: perfect pronunciation. Every detail nailed. You&apos;re confident. They&apos;re impressed.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 md:p-8">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-white">DM</span>
            </div>
            <div>
              <p className="text-base text-gray-700 leading-relaxed italic">
                &ldquo;I was using Google Docs, WhatsApp notes, and Excel. Zebri centralised everything. Now I&apos;m actually prepared instead of just hoping I&apos;ve got it right.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-800">Daniel M.</span>
                <span className="text-xs text-gray-400">&middot;</span>
                <span className="text-xs text-gray-500">35 weddings/year, Sydney</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
