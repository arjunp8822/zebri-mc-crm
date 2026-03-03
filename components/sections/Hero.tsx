"use client";

import { SignupForm } from "@/components/ui/SignupForm";

export function Hero() {
  return (
    <section className="pt-20 pb-32 px-4 md:pt-32 md:pb-48" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Copy + CTA */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border text-xs font-medium" style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--accent)" }}></span>
              Only 8 spots left · Closes Dec 15
            </div>

            {/* Headline - Creates tension */}
            <div className="space-y-4">
              <h1 style={{ fontSize: "48px", fontWeight: "700", lineHeight: "1.2", color: "var(--text-primary)" }}>
                Your wedding runsheet is scattered across 6 different tools.
              </h1>
              <p style={{ fontSize: "18px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                Stop juggling Google Docs, WhatsApp, PDFs, and your brain. Zebri brings it all into one command centre, built for MCs doing 25+ weddings a year.
              </p>
            </div>

            {/* Inline email CTA */}
            <div className="pt-4">
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 border rounded text-sm outline-none"
                    style={{
                      borderColor: "var(--border)",
                      backgroundColor: "#FFFFFF",
                      color: "var(--text-primary)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.boxShadow = "0 0 0 2px rgba(59, 130, 246, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  <button
                    className="px-6 py-3 font-semibold rounded text-white transition hover:opacity-90 text-sm whitespace-nowrap"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    Request Access
                  </button>
                </div>
                <p style={{ fontSize: "12px", color: "var(--text-secondary)" }}>No credit card required. Free beta access for founding members.</p>
              </div>
            </div>

            {/* Social proof */}
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px" }}>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
                <span style={{ color: "var(--text-primary)", fontWeight: "500" }}>12+ MCs already in beta</span>, doing 30+ weddings per year
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
    <div className="rounded border overflow-hidden shadow-lg" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}>
      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: "var(--border)", backgroundColor: "#FFFFFF" }}>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F57" }}></div>
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FFBD2E" }}></div>
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27C93F" }}></div>
        </div>
        <div className="flex-1 text-xs text-center font-medium" style={{ color: "var(--text-secondary)" }}>
          Zebri Dashboard
        </div>
      </div>

      {/* Content: Shows multiple features in context */}
      <div className="p-6" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="grid grid-cols-3 gap-4">
          {/* Sidebar - Couple details */}
          <div className="col-span-1 space-y-4">
            <div style={{ backgroundColor: "var(--bg-secondary)", padding: "12px", borderRadius: "4px" }}>
              <p style={{ fontSize: "12px", fontWeight: "600", color: "var(--text-secondary)", marginBottom: "8px" }}>COUPLE</p>
              <p style={{ fontSize: "14px", fontWeight: "600", color: "var(--text-primary)" }}>Sarah & Tom</p>
              <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "4px" }}>May 15, 2024</p>
            </div>
          </div>

          {/* Main: Timeline */}
          <div className="col-span-2 space-y-3">
            <p style={{ fontSize: "12px", fontWeight: "600", color: "var(--text-secondary)", marginBottom: "8px" }}>TIMELINE</p>
            {[
              { time: "5:30", event: "Guests arrive", status: "complete" },
              { time: "6:00", event: "Ceremony begins", status: "current" },
              { time: "6:45", event: "Photos", status: "pending" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-2 rounded text-sm border"
                style={{
                  backgroundColor: item.status === "current" ? "#EFF6FF" : "var(--bg-secondary)",
                  borderColor: item.status === "current" ? "var(--accent)" : "var(--border)",
                }}
              >
                <span style={{ fontSize: "12px", fontFamily: "monospace", color: "var(--text-secondary)" }}>
                  {item.time}
                </span>
                <span style={{ flex: 1, fontSize: "13px", color: "var(--text-primary)" }}>
                  {item.event}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scripts preview at bottom */}
        <div style={{ borderTop: "1px solid var(--border)", marginTop: "12px", paddingTop: "12px" }}>
          <p style={{ fontSize: "12px", fontWeight: "600", color: "var(--text-secondary)", marginBottom: "8px" }}>SCRIPTS</p>
          <div className="flex gap-2">
            {["Opening", "Transitions", "Closing"].map((tab) => (
              <div
                key={tab}
                className="px-2 py-1 rounded text-xs font-medium cursor-pointer transition"
                style={{
                  backgroundColor: tab === "Opening" ? "var(--accent)" : "var(--bg-secondary)",
                  color: tab === "Opening" ? "#FFFFFF" : "var(--text-secondary)",
                  fontSize: "11px",
                }}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
