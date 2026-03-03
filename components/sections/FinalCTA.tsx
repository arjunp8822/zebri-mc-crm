import { SignupForm } from "@/components/ui/SignupForm";

export function FinalCTA() {
  return (
    <section id="final-cta" className="py-20 px-4 md:py-32 bg-gray-50/70">
      <div className="max-w-2xl mx-auto">
        {/* Headline with urgency */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-md bg-amber-50 border border-amber-200 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-xs font-semibold text-amber-800 tracking-wide">
              8 of 20 spots remaining
            </span>
          </div>
          <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold text-gray-900 leading-tight tracking-tight mb-4">
            Join the founding team.
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Closes March 30, 2026. Lock in 40% off forever + direct access to the team.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 md:p-8 shadow-sm mb-6">
          <SignupForm variant="default" />
        </div>

        {/* Trust line */}
        <p className="text-center text-xs text-gray-400 mb-10">
          No credit card required. We&apos;ll send one email when beta access opens.
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {[
            { value: "40%", label: "Lifetime discount" },
            { value: "Direct", label: "Team access" },
            { value: "Q3 2026", label: "Beta launch" },
          ].map((stat, i) => (
            <div key={i} className="text-center rounded-lg border border-gray-200 bg-white py-4 px-3">
              <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-[11px] text-gray-500 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
