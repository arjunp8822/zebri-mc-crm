export function PainPoints() {
  return (
    <section className="py-20 px-4 md:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-4xl mx-auto">
        <h2 style={{ fontSize: "42px", fontWeight: "700", marginBottom: "48px", color: "var(--text-primary)", lineHeight: "1.3" }}>
          The problem is the workflow, not the tools.
        </h2>

        {/* Before section */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ backgroundColor: "var(--bg-secondary)", padding: "32px", borderRadius: "6px", marginBottom: "32px" }}>
            <p style={{ fontSize: "13px", fontWeight: "700", color: "var(--accent)", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Before Zebri
            </p>

            <div style={{ lineHeight: "1.8" }}>
              <p style={{ fontSize: "16px", color: "var(--text-primary)", marginBottom: "16px" }}>
                <strong>Friday, 2 days before the wedding</strong>
              </p>
              <p style={{ fontSize: "15px", color: "var(--text-secondary)", marginBottom: "12px" }}>
                You have the couple's details scattered across a Google Form you sent them. The runsheet is in a shared Google Doc (outdated). Their pronunciation guide is... somewhere in your notes. The DJ has sent 3 WhatsApp messages about the timing. The photographer is asking about the ceremony order. You're opening 6 tabs just to remember what you need to do.
              </p>
              <p style={{ fontSize: "15px", color: "var(--text-secondary)", marginBottom: "12px" }}>
                By the night of the wedding, you've memorized half of it. You mispronounce the bride's middle name. You skip over a detail the couples specifically asked you to mention. You're stressed. They're frustrated. You told yourself you'd never let this happen again.
              </p>
            </div>
          </div>

          {/* After section */}
          <div style={{ backgroundColor: "#F0F9FF", padding: "32px", borderRadius: "6px" }}>
            <p style={{ fontSize: "13px", fontWeight: "700", color: "var(--accent)", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              With Zebri
            </p>

            <div style={{ lineHeight: "1.8" }}>
              <p style={{ fontSize: "16px", color: "var(--text-primary)", marginBottom: "16px" }}>
                <strong>Friday, 2 days before the wedding</strong>
              </p>
              <p style={{ fontSize: "15px", color: "var(--text-secondary)", marginBottom: "12px" }}>
                You send them one link. They fill in their details once: names (with pronunciation guides), bridal party, cultural notes, dietary needs. Everything lands in Zebri. Your timeline is synced—they can see what's happening and when. Your scripts are organized and ready.
              </p>
              <p style={{ fontSize: "15px", color: "var(--text-secondary)", marginBottom: "12px" }}>
                The night of the wedding, you open Zebri's On-The-Night Mode. Dark background. Large text. Current item highlighted. Your next cue is right there. No tabs. No confusion. Just you and the timeline. Perfect pronunciation guides. Every detail nailed. You're confident. They're impressed.
              </p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "32px" }}>
          <p style={{ fontSize: "16px", fontStyle: "italic", color: "var(--text-primary)", marginBottom: "12px" }}>
            "I was using Google Docs, WhatsApp notes, and Excel. Zebri centralised everything. Now I'm actually prepared instead of just hoping I've got it right."
          </p>
          <p style={{ fontSize: "14px", fontWeight: "500", color: "var(--text-secondary)" }}>
            — MC doing 35 weddings/year
          </p>
        </div>
      </div>
    </section>
  );
}
