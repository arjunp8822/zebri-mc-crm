"use client";

export function Hero() {
  return (
    <section className="pt-24 pb-20 px-4 md:pt-36 md:pb-32 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy + CTA */}
          <div className="space-y-8">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-md bg-amber-50 border border-amber-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-semibold text-amber-800 tracking-wide">
                Only 8 spots left &middot; Closes March 30
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-5">
              <h1 className="text-[2.75rem] md:text-[3.25rem] font-bold leading-[1.12] tracking-tight text-gray-900">
                Your entire wedding workflow is&nbsp;held together by&nbsp;tabs.
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                Google Docs. WhatsApp. PDFs. Your brain. Zebri replaces all of it with one command centre built for MCs doing 25+ weddings a&nbsp;year.
              </p>
            </div>

            {/* Inline email CTA */}
            <div className="pt-2">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3.5 border border-gray-200 rounded-md text-sm text-gray-900 bg-white placeholder:text-gray-400 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md text-sm whitespace-nowrap transition-colors shadow-sm shadow-blue-600/20"
                >
                  Claim Your Spot
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-2.5">
                No credit card required. Free beta access for founding members.
              </p>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {[
                  "bg-blue-500",
                  "bg-emerald-500",
                  "bg-amber-500",
                  "bg-violet-500",
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`w-7 h-7 rounded-full ${color} border-2 border-white flex items-center justify-center`}
                  >
                    <span className="text-[10px] font-bold text-white">
                      {["JM", "KL", "SR", "AT"][i]}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">
                  12 MCs in beta
                </span>
                , averaging 30+ weddings/yr
              </p>
            </div>
          </div>

          {/* Right: Dashboard mock */}
          <div className="hidden lg:block">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden shadow-xl shadow-gray-200/60 bg-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 bg-gray-50/80">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-gray-800 tracking-tight">
            zebri
          </span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-400"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
          <span className="text-xs text-gray-500">Chen &amp; Williams</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-50 border border-emerald-200">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            <span className="text-[10px] font-medium text-emerald-700">
              Synced
            </span>
          </div>
          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-[9px] font-bold text-white">AP</span>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-44 border-r border-gray-100 bg-gray-50/50 p-3 space-y-1 hidden xl:block">
          {[
            {
              label: "Overview",
              active: false,
              icon: (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              ),
            },
            {
              label: "Timeline",
              active: true,
              icon: (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              ),
            },
            {
              label: "Scripts",
              active: false,
              icon: (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                </svg>
              ),
            },
            {
              label: "Couple Details",
              active: false,
              icon: (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded text-[11px] font-medium cursor-pointer transition-colors ${
                item.active
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              <span className={item.active ? "text-blue-600" : "text-gray-400"}>
                {item.icon}
              </span>
              {item.label}
            </div>
          ))}

          {/* Weddings list in sidebar */}
          <div className="pt-3 mt-3 border-t border-gray-100">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2.5 mb-2">
              Upcoming
            </p>
            {[
              { couple: "Chen & Williams", date: "Mar 15", active: true },
              { couple: "Davis & Park", date: "Mar 22", active: false },
              { couple: "Taylor & Singh", date: "Apr 5", active: false },
            ].map((w, i) => (
              <div
                key={i}
                className={`px-2.5 py-1.5 rounded text-[11px] cursor-pointer transition-colors ${
                  w.active
                    ? "bg-white text-gray-800 font-medium shadow-sm border border-gray-100"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <div className="truncate">{w.couple}</div>
                <div className="text-[10px] text-gray-400">{w.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 min-w-0">
          {/* Top info bar */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-gray-900">
                Chen &amp; Williams Wedding
              </h3>
              <p className="text-[11px] text-gray-400 mt-0.5">
                March 15, 2026 &middot; The Grounds of Alexandria
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <button className="px-2.5 py-1 text-[10px] font-semibold bg-gray-900 text-white rounded transition-colors hover:bg-gray-800">
                Go Live
              </button>
            </div>
          </div>

          {/* Two column content */}
          <div className="grid grid-cols-5 gap-3">
            {/* Timeline - main column */}
            <div className="col-span-3 space-y-2">
              <div className="flex items-center justify-between mb-1">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  Timeline
                </p>
                <button className="text-[10px] text-blue-600 font-medium hover:text-blue-700">
                  + Add
                </button>
              </div>
              {[
                {
                  time: "5:00 PM",
                  event: "Guests arrive",
                  status: "done",
                  duration: "30m",
                },
                {
                  time: "5:30 PM",
                  event: "Ceremony begins",
                  status: "done",
                  duration: "45m",
                },
                {
                  time: "6:15 PM",
                  event: "Cocktail hour",
                  status: "current",
                  duration: "45m",
                },
                {
                  time: "7:00 PM",
                  event: "Reception entrance",
                  status: "upcoming",
                  duration: "15m",
                },
                {
                  time: "7:15 PM",
                  event: "First dance",
                  status: "upcoming",
                  duration: "10m",
                },
                {
                  time: "7:30 PM",
                  event: "Toasts & speeches",
                  status: "upcoming",
                  duration: "30m",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2.5 px-2.5 py-2 rounded text-[12px] border transition-colors group ${
                    item.status === "current"
                      ? "bg-blue-50 border-blue-200"
                      : item.status === "done"
                        ? "bg-white border-gray-100 opacity-60"
                        : "bg-white border-gray-100 hover:border-gray-200"
                  }`}
                >
                  {/* Status dot */}
                  <div
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      item.status === "current"
                        ? "bg-blue-500"
                        : item.status === "done"
                          ? "bg-gray-300"
                          : "bg-gray-200"
                    }`}
                  />
                  <span
                    className={`font-mono text-[10px] w-12 flex-shrink-0 ${item.status === "current" ? "text-blue-600 font-semibold" : "text-gray-400"}`}
                  >
                    {item.time}
                  </span>
                  <span
                    className={`flex-1 truncate ${item.status === "current" ? "text-blue-800 font-semibold" : item.status === "done" ? "text-gray-500 line-through" : "text-gray-700"}`}
                  >
                    {item.event}
                  </span>
                  <span className="text-[10px] text-gray-300 group-hover:text-gray-400 transition-colors">
                    {item.duration}
                  </span>
                  {/* Drag handle */}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-gray-200 group-hover:text-gray-400 cursor-grab flex-shrink-0 transition-colors"
                  >
                    <circle cx="9" cy="5" r="1.5" />
                    <circle cx="15" cy="5" r="1.5" />
                    <circle cx="9" cy="12" r="1.5" />
                    <circle cx="15" cy="12" r="1.5" />
                    <circle cx="9" cy="19" r="1.5" />
                    <circle cx="15" cy="19" r="1.5" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Right panel - Couple details + Script */}
            <div className="col-span-2 space-y-3">
              {/* Couple quick info */}
              <div className="rounded border border-gray-100 p-2.5 bg-gray-50/50">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Couple
                </p>
                <div className="space-y-1.5">
                  <div>
                    <p className="text-[11px] font-semibold text-gray-800">
                      Sarah Chen &amp; Tom Williams
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-blue-500"
                      >
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      </svg>
                      <span className="text-[10px] text-blue-600 font-medium">
                        SAH-rah CHEN
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-gray-400">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                    <span>Bridal party: 4</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-gray-400">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                    </svg>
                    <span>Cultural: Chinese tea ceremony</span>
                  </div>
                </div>
              </div>

              {/* Script preview */}
              <div className="rounded border border-gray-100 p-2.5 bg-gray-50/50">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                    Script
                  </p>
                  <span className="text-[9px] text-gray-400">3 sections</span>
                </div>
                <div className="flex gap-1 mb-2">
                  {["Opening", "Toasts", "Closing"].map((tab, i) => (
                    <span
                      key={tab}
                      className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                        i === 0
                          ? "bg-gray-800 text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>
                <div className="text-[10px] text-gray-400 leading-relaxed line-clamp-3">
                  &ldquo;Good evening everyone, and welcome to the wedding
                  of Sarah and Tom. My name is...&rdquo;
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded border border-gray-100 p-2 bg-gray-50/50 text-center">
                  <p className="text-sm font-bold text-gray-800">142</p>
                  <p className="text-[9px] text-gray-400">Guests</p>
                </div>
                <div className="rounded border border-gray-100 p-2 bg-gray-50/50 text-center">
                  <p className="text-sm font-bold text-gray-800">6h</p>
                  <p className="text-[9px] text-gray-400">Duration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
