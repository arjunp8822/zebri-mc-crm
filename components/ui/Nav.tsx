export function Nav() {
  return (
    <nav className="sticky top-0 z-50 h-16 border-b backdrop-blur-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderColor: "var(--border)" }}>
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>
          Zebri
        </div>

        {/* CTA Button */}
        <a
          href="#final-cta"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "var(--accent)", color: "#FFFFFF" }}
        >
          Join Beta
          <span className="text-xs">→</span>
        </a>
      </div>
    </nav>
  );
}
