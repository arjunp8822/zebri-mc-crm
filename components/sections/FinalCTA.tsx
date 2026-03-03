import { SignupForm } from "@/components/ui/SignupForm";

export function FinalCTA() {
  return (
    <section id="final-cta" className="py-20 px-4 md:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-2xl mx-auto">
        {/* Headline with urgency */}
        <div className="text-center mb-12 md:mb-16">
          <h2 style={{ fontSize: "42px", fontWeight: "700", color: "var(--text-primary)", marginBottom: "16px", lineHeight: "1.3" }}>
            Only 8 spots left.
          </h2>
          <p style={{ fontSize: "18px", color: "var(--text-secondary)", marginBottom: "0", lineHeight: "1.6" }}>
            Closes December 15. Get 40% off forever + direct access to the team.
          </p>
        </div>

        {/* Form */}
        <div className="mb-12">
          <SignupForm variant="default" />
        </div>

        {/* Trust/friction removal */}
        <div style={{ textAlign: "center", fontSize: "13px", color: "var(--text-secondary)", marginBottom: "24px" }}>
          <p style={{ margin: "0" }}>No credit card required. We'll send one email when beta access opens.</p>
        </div>

        {/* Stats grid - emphasize reward */}
        <div className="grid grid-cols-3 gap-4 md:gap-8" style={{ paddingTop: "24px", borderTop: "1px solid var(--border)" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "28px", fontWeight: "700", color: "var(--text-primary)", marginBottom: "4px" }}>
              40%
            </div>
            <div style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
              Lifetime Discount
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "28px", fontWeight: "700", color: "var(--text-primary)", marginBottom: "4px" }}>
              Direct Access
            </div>
            <div style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
              To the Team
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "28px", fontWeight: "700", color: "var(--text-primary)", marginBottom: "4px" }}>
              Q3 2024
            </div>
            <div style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
              Beta Launch
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
