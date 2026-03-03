export function Rewards() {
  const rewards = [
    {
      icon: "💰",
      title: "40% Off Forever",
      description: "Founding members lock in lifetime discounted pricing. When Zebri launches, you've already won.",
    },
    {
      icon: "🎯",
      title: "Shape the Product",
      description: "Your feedback directly influences what we build. You're not a beta tester—you're a co-creator.",
    },
    {
      icon: "👥",
      title: "Direct Access to the Team",
      description: "No ticket system. No support queue. Direct Slack channel with the team. Real people answering real questions.",
    },
  ];

  return (
    <section className="py-20 px-4 md:py-32" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-5xl mx-auto">
        <h2 style={{ fontSize: "42px", fontWeight: "700", marginBottom: "56px", color: "var(--text-primary)", lineHeight: "1.3" }}>
          Founding members get real rewards.
        </h2>

        {/* Rewards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rewards.map((reward, i) => (
            <div
              key={i}
              className="rounded border p-8"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "#FFFFFF",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>
                {reward.icon}
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "var(--text-primary)", marginBottom: "8px" }}>
                {reward.title}
              </h3>
              <p style={{ fontSize: "15px", color: "var(--text-secondary)", marginBottom: "0", lineHeight: "1.6" }}>
                {reward.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA callout */}
        <div style={{ marginTop: "48px", padding: "32px", borderRadius: "6px", backgroundColor: "#EFF6FF", border: "1px solid var(--accent)" }}>
          <p style={{ fontSize: "16px", color: "var(--text-primary)", marginBottom: "0", lineHeight: "1.6" }}>
            <strong>This is only for founding members.</strong> Once the 20 spots fill, the next batch won't get these benefits. The clock is ticking.
          </p>
        </div>
      </div>
    </section>
  );
}
