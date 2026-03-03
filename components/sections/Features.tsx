export function Features() {
  const features = [
    {
      title: "Timeline Builder",
      description: "Drag-and-drop timeline synced with couples. Edit on the fly.",
      icon: "⏱️",
    },
    {
      title: "Couple Portal",
      description: "One form. They fill once. You access always.",
      icon: "👥",
    },
    {
      title: "Script Organiser",
      description: "Opening, transitions, closing. Reusable templates by wedding.",
      icon: "📝",
    },
    {
      title: "On-The-Night Mode",
      description: "Dark mode built for live performance. Everything you need, nothing you don't.",
      icon: "🎯",
    },
  ];

  return (
    <section className="py-20 px-4 md:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-5xl mx-auto">
        <h2 style={{ fontSize: "42px", fontWeight: "700", marginBottom: "56px", color: "var(--text-primary)", lineHeight: "1.3" }}>
          Built for how you actually work.
        </h2>

        {/* Features with snapshots */}
        <div className="space-y-20">
          {/* Timeline Builder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div style={{ fontSize: "24px", marginBottom: "12px" }}>{features[0].icon}</div>
              <h3 style={{ fontSize: "24px", fontWeight: "700", color: "var(--text-primary)", marginBottom: "8px" }}>
                {features[0].title}
              </h3>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", marginBottom: "0" }}>
                {features[0].description}
              </p>
            </div>
            <div className="rounded border" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)", padding: "20px" }}>
              <div className="space-y-3">
                {[
                  { time: "5:30 PM", event: "Guests arrive", status: "complete" },
                  { time: "6:00 PM", event: "Ceremony begins", status: "current" },
                  { time: "6:45 PM", event: "First dance", status: "pending" },
                  { time: "7:15 PM", event: "Dinner", status: "pending" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-2 rounded text-sm border"
                    style={{
                      backgroundColor: item.status === "current" ? "#EFF6FF" : "#FFFFFF",
                      borderColor: item.status === "current" ? "var(--accent)" : "var(--border)",
                    }}
                  >
                    <span style={{ fontSize: "12px", fontFamily: "monospace", color: "var(--text-secondary)", minWidth: "50px" }}>
                      {item.time}
                    </span>
                    <span style={{ flex: 1, fontSize: "13px", color: "var(--text-primary)" }}>
                      {item.event}
                    </span>
                    <div style={{ cursor: "grab", color: "var(--text-secondary)", fontSize: "12px" }}>⋮</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Couple Portal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div style={{ fontSize: "24px", marginBottom: "12px" }}>{features[1].icon}</div>
              <h3 style={{ fontSize: "24px", fontWeight: "700", color: "var(--text-primary)", marginBottom: "8px" }}>
                {features[1].title}
              </h3>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", marginBottom: "0" }}>
                {features[1].description}
              </p>
            </div>
            <div className="rounded border" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)", padding: "20px" }}>
              <div className="space-y-4">
                <div>
                  <label style={{ fontSize: "12px", fontWeight: "600", color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                    Bride & Groom
                  </label>
                  <input
                    type="text"
                    value="Sarah Chen & Tom Williams"
                    readOnly
                    style={{ width: "100%", padding: "8px 12px", border: "1px solid var(--border)", borderRadius: "4px", fontSize: "13px", color: "var(--text-primary)", backgroundColor: "#FFFFFF" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: "600", color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                    Pronunciation
                  </label>
                  <input
                    type="text"
                    value="SAH-rah CHEN & Tom WIL-yums"
                    readOnly
                    style={{ width: "100%", padding: "8px 12px", border: "1px solid var(--accent)", borderRadius: "4px", fontSize: "13px", color: "var(--text-primary)", backgroundColor: "#EFF6FF" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: "600", color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                    Bridal Party
                  </label>
                  <div className="space-y-2">
                    {["Emma (Maid of Honor)", "Jessica (Sister)"].map((name, i) => (
                      <div key={i} style={{ padding: "6px 12px", backgroundColor: "#FFFFFF", border: "1px solid var(--border)", borderRadius: "4px", fontSize: "13px", color: "var(--text-primary)" }}>
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Script Organiser */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div style={{ fontSize: "24px", marginBottom: "12px" }}>{features[2].icon}</div>
              <h3 style={{ fontSize: "24px", fontWeight: "700", color: "var(--text-primary)", marginBottom: "8px" }}>
                {features[2].title}
              </h3>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", marginBottom: "0" }}>
                {features[2].description}
              </p>
            </div>
            <div className="rounded border" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)", padding: "20px" }}>
              <div className="space-y-0">
                {["Opening", "Transitions", "Closing"].map((section, i) => (
                  <div key={i} style={{ borderBottom: i < 2 ? "1px solid var(--border)" : "none" }}>
                    <div style={{ padding: "12px", cursor: "pointer", userSelect: "none" }}>
                      <p style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-primary)", margin: "0" }}>
                        {section}
                      </p>
                    </div>
                    {i === 0 && (
                      <div style={{ padding: "0 12px 12px 12px", fontSize: "13px", color: "var(--text-secondary)" }}>
                        "Good evening, everyone. I'm [Your Name], and I have the absolute honour of being MC for this beautiful couple..."
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* On-The-Night Mode */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div style={{ fontSize: "24px", marginBottom: "12px" }}>{features[3].icon}</div>
              <h3 style={{ fontSize: "24px", fontWeight: "700", color: "var(--text-primary)", marginBottom: "8px" }}>
                {features[3].title}
              </h3>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", marginBottom: "0" }}>
                {features[3].description}
              </p>
            </div>
            <div className="rounded border" style={{ borderColor: "var(--border)", backgroundColor: "#1F2937", padding: "24px", color: "#FFFFFF", minHeight: "200px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Now
                </p>
                <h4 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "0" }}>
                  First Dance
                </h4>
              </div>

              <div style={{ borderTop: "1px solid #374151", paddingTop: "16px" }}>
                <p style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Next Up
                </p>
                <p style={{ fontSize: "14px", color: "#FFFFFF", marginBottom: "0" }}>
                  Toasts & Tributes
                </p>
                <p style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "4px" }}>
                  9:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
