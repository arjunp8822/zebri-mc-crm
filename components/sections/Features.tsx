export function Features() {
  return (
    <section className="py-20 px-4 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 md:mb-20">
          <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold text-gray-900 leading-tight tracking-tight">
            Built for how you actually work.
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-xl">
            Four tools that replace everything you&apos;re duct-taping together right now.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {/* 1. Timeline Builder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Timeline Builder
              </h3>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Drag and drop timeline synced with the couple. Edit on the fly. Everyone sees the same schedule, so nobody is asking &ldquo;what time is first dance?&rdquo;
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Real time sync with couples</span>
              </div>
            </div>
            <TimelineMock />
          </div>

          {/* 2. Couple Portal (ALTERNATED) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <CouplePortalMock />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Couple Portal
              </h3>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Send one link. They fill in names, pronunciation guides, bridal party, cultural notes. You never chase details again.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Pronunciation guides built in</span>
              </div>
            </div>
          </div>

          {/* 3. Script Organiser */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <line x1="10" x2="8" y1="9" y2="9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Script Organiser
              </h3>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Opening, transitions, closing. All in collapsible sections. Reuse templates across weddings. Stop copying from old Google Docs.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Reusable templates by section</span>
              </div>
            </div>
            <ScriptMock />
          </div>

          {/* 4. Night Mode (ALTERNATED) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <NightModeMock />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Night Mode
              </h3>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Dark interface built for live performance. Large text, current item highlighted, next cue visible. No tabs, no clutter. Just you and the timeline.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Works offline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineMock() {
  const items = [
    { time: "5:00 PM", event: "Guests arrive", status: "done" as const },
    { time: "5:30 PM", event: "Ceremony begins", status: "done" as const },
    { time: "6:15 PM", event: "Cocktail hour", status: "current" as const },
    { time: "7:00 PM", event: "Grand entrance", status: "upcoming" as const },
    { time: "7:15 PM", event: "First dance", status: "upcoming" as const },
  ];

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-lg shadow-gray-100/80">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gray-900 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
          </div>
          <span className="text-xs font-semibold text-gray-700">Timeline</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
          <span className="text-[10px] text-emerald-600 font-medium">Synced</span>
        </div>
      </div>
      <div className="space-y-1.5">
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm border transition-all group ${
              item.status === "current"
                ? "bg-gray-900 border-gray-900 text-white"
                : item.status === "done"
                  ? "bg-gray-50/50 border-transparent opacity-40"
                  : "bg-white border-gray-100 hover:border-gray-200"
            }`}
          >
            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
              item.status === "current" ? "bg-white" : item.status === "done" ? "bg-gray-300" : "bg-gray-200"
            }`} />
            <span className={`font-mono text-[11px] w-14 flex-shrink-0 ${
              item.status === "current" ? "text-gray-400" : "text-gray-400"
            }`}>
              {item.time}
            </span>
            <span className={`flex-1 text-[13px] ${
              item.status === "current" ? "font-semibold text-white" : item.status === "done" ? "text-gray-400 line-through" : "text-gray-700"
            }`}>
              {item.event}
            </span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className={`cursor-grab flex-shrink-0 transition-colors ${item.status === "current" ? "text-gray-600" : "text-gray-200 group-hover:text-gray-400"}`}>
              <circle cx="9" cy="5" r="1.5" /><circle cx="15" cy="5" r="1.5" />
              <circle cx="9" cy="12" r="1.5" /><circle cx="15" cy="12" r="1.5" />
              <circle cx="9" cy="19" r="1.5" /><circle cx="15" cy="19" r="1.5" />
            </svg>
          </div>
        ))}
      </div>
      {/* Add item hint */}
      <div className="mt-2 px-3 py-2 border border-dashed border-gray-200 rounded-md text-center">
        <span className="text-[11px] text-gray-400">+ Add timeline item</span>
      </div>
    </div>
  );
}

function CouplePortalMock() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-lg shadow-gray-100/80">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gray-900 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
          </div>
          <span className="text-xs font-semibold text-gray-700">Couple Details</span>
        </div>
        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-semibold rounded-full border border-emerald-100">Submitted</span>
      </div>
      <div className="space-y-3.5">
        <div>
          <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">Names</label>
          <div className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-md text-[13px] text-gray-800 font-medium">
            Mia Russo &amp; Luca Bianchi
          </div>
        </div>
        <div>
          <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
            <span className="flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /></svg>
              Pronunciation Guide
            </span>
          </label>
          <div className="px-3 py-2 bg-blue-50 border border-blue-200 rounded-md text-[13px] text-blue-800 font-semibold">
            MEE·ah ROO·so &amp; LOO·ka bee·AN·kee
          </div>
        </div>
        <div>
          <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">Bridal Party</label>
          <div className="space-y-1.5">
            {[
              { name: "Sofia Russo", role: "Maid of Honour" },
              { name: "Giulia Bianchi", role: "Sister" },
              { name: "Priya Patel", role: "Bridesmaid" },
            ].map((person, i) => (
              <div key={i} className="flex items-center justify-between px-3 py-2 bg-gray-50 border border-gray-100 rounded-md">
                <span className="text-[13px] text-gray-700">{person.name}</span>
                <span className="text-[10px] text-gray-400 font-medium">{person.role}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">Cultural Notes</label>
          <div className="px-3 py-2 bg-amber-50 border border-amber-100 rounded-md text-[12px] text-amber-800">
            Italian family traditions. Tarantella dance after dinner. No bouquet toss.
          </div>
        </div>
      </div>
    </div>
  );
}

function ScriptMock() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-lg shadow-gray-100/80 overflow-hidden">
      <div className="px-5 pt-5 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gray-900 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><polyline points="14 2 14 8 20 8" /></svg>
          </div>
          <span className="text-xs font-semibold text-gray-700">Scripts</span>
        </div>
        <span className="text-[10px] text-gray-400">Mia &amp; Luca</span>
      </div>

      <div className="border-t border-gray-100">
        {/* Opening - expanded */}
        <div className="border-b border-gray-100">
          <div className="flex items-center gap-2 px-5 py-3 cursor-pointer hover:bg-gray-50 transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
              <path d="m6 9 6 6 6-6" />
            </svg>
            <span className="text-[13px] font-semibold text-gray-800">Opening</span>
            <span className="text-[10px] text-gray-400 ml-auto">2 min</span>
          </div>
          <div className="px-5 pb-4 pl-9">
            <p className="text-[12px] text-gray-500 leading-relaxed">
              &ldquo;Good evening, everyone. My name is [Your Name], and it is an absolute honour to be your MC tonight for the wedding of Mia and Luca.&rdquo;
            </p>
            <p className="text-[12px] text-gray-400 leading-relaxed mt-2">
              &ldquo;Before we get started, I want to acknowledge the Russo and Bianchi families for bringing us all together...&rdquo;
            </p>
          </div>
        </div>

        {/* Transitions - collapsed */}
        <div className="border-b border-gray-100">
          <div className="flex items-center gap-2 px-5 py-3 cursor-pointer hover:bg-gray-50 transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
              <path d="m9 18 6-6-6-6" />
            </svg>
            <span className="text-[13px] font-semibold text-gray-800">Transitions</span>
            <span className="text-[10px] text-gray-400 ml-auto">4 cues</span>
          </div>
        </div>

        {/* Toasts - collapsed */}
        <div className="border-b border-gray-100">
          <div className="flex items-center gap-2 px-5 py-3 cursor-pointer hover:bg-gray-50 transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
              <path d="m9 18 6-6-6-6" />
            </svg>
            <span className="text-[13px] font-semibold text-gray-800">Toasts</span>
            <span className="text-[10px] text-gray-400 ml-auto">3 speakers</span>
          </div>
        </div>

        {/* Closing - collapsed */}
        <div>
          <div className="flex items-center gap-2 px-5 py-3 cursor-pointer hover:bg-gray-50 transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
              <path d="m9 18 6-6-6-6" />
            </svg>
            <span className="text-[13px] font-semibold text-gray-800">Closing</span>
            <span className="text-[10px] text-gray-400 ml-auto">1 min</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function NightModeMock() {
  return (
    <div className="rounded-lg overflow-hidden shadow-xl shadow-gray-900/20 bg-gray-950 border border-gray-800">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 py-2.5 border-b border-gray-800/60">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">Live</span>
        </div>
        <span className="text-[10px] text-gray-600 font-mono">8:42 PM</span>
      </div>

      {/* Current item */}
      <div className="px-6 py-7">
        <p className="text-[10px] text-gray-600 uppercase tracking-wider font-semibold mb-2">Now</p>
        <h4 className="text-4xl font-bold text-white mb-1.5">First Dance</h4>
        <p className="text-sm text-gray-500">Mia &amp; Luca &middot; &ldquo;At Last&rdquo; by Etta James</p>

        {/* Progress bar */}
        <div className="mt-5 h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-white rounded-full transition-all"></div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[10px] text-gray-600 font-mono">2:18</span>
          <span className="text-[10px] text-gray-600 font-mono">3:30</span>
        </div>
      </div>

      {/* Next up */}
      <div className="px-6 pb-6 pt-1">
        <div className="border-t border-gray-800/60 pt-4">
          <p className="text-[10px] text-gray-600 uppercase tracking-wider font-semibold mb-3">Next Up</p>
          <div className="flex items-center justify-between bg-gray-900 rounded-lg px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-gray-200">Toasts &amp; Speeches</p>
              <p className="text-[11px] text-gray-500 mt-0.5">Best man, then maid of honour</p>
            </div>
            <span className="text-xs font-mono text-gray-400 bg-gray-800 px-2.5 py-1 rounded">8:55</span>
          </div>
        </div>
      </div>
    </div>
  );
}
