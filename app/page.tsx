import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { Features } from "@/components/sections/Features";
import { Rewards } from "@/components/sections/Rewards";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="w-full">
        <Hero />
        <PainPoints />
        <Features />
        <Rewards />
        <FAQ />
        <FinalCTA />

        {/* Footer */}
        <footer className="py-12 px-4 border-t" style={{ backgroundColor: "#FFFFFF", borderColor: "var(--border)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left mb-8">
              <div>
                <h3 className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>
                  Zebri
                </h3>
                <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
                  The Wedding MC Command Centre
                </p>
              </div>
              <div className="flex gap-6 text-sm items-center">
                <a
                  href="https://instagram.com/zebrimc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity flex items-center gap-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 1.44c2.136 0 2.39.01 3.233.047.78.036 1.203.166 1.485.276.373.145.64.319.92.6.28.28.454.547.6.92.11.282.24.705.275 1.485.037.843.047 1.097.047 3.233 0 2.136-.01 2.39-.047 3.233-.036.78-.166 1.203-.276 1.485-.145.373-.319.64-.6.92-.28.28-.547.454-.92.6-.282.11-.705.24-1.485.275-.843.037-1.097.047-3.233.047s-2.39-.01-3.233-.047c-.78-.036-1.203-.166-1.485-.276-.373-.145-.64-.319-.92-.6-.28-.28-.454-.547-.6-.92-.11-.282-.24-.705-.275-1.485C1.45 10.39 1.44 10.136 1.44 8c0-2.136.01-2.39.047-3.233.036-.78.166-1.203.276-1.485.145-.373.319-.64.6-.92.28-.28.547-.454.92-.6.282-.11.705-.24 1.485-.275C5.61 1.45 5.864 1.44 8 1.44m0-1.44C5.826 0 5.556.012 4.7.049 3.85.086 3.27.222 2.76.42 2.23.627 1.79.894 1.36 1.324.93 1.754.663 2.194.456 2.724.258 3.234.122 3.814.085 4.664.048 5.52.036 5.79.036 8c0 2.21.012 2.48.049 3.336.037.85.173 1.43.371 1.94.207.53.474.97.904 1.4.43.43.87.697 1.4.904.51.198 1.09.334 1.94.371.856.037 1.126.049 3.336.049 2.21 0 2.48-.012 3.336-.049.85-.037 1.43-.173 1.94-.371.53-.207.97-.474 1.4-.904.43-.43.697-.87.904-1.4.198-.51.334-1.09.371-1.94.037-.856.049-1.126.049-3.336 0-2.21-.012-2.48-.049-3.336-.037-.85-.173-1.43-.371-1.94-.207-.53-.474-.97-.904-1.4C14.23 1.364 13.79 1.097 13.26.89 12.75.692 12.17.556 11.32.519 10.464.482 10.194.47 8 .47z" />
                    <path d="M8 3.864c-2.297 0-4.136 1.84-4.136 4.136 0 2.297 1.84 4.136 4.136 4.136 2.297 0 4.136-1.84 4.136-4.136 0-2.297-1.84-4.136-4.136-4.136zM8 10.4c-1.492 0-2.4-1.019-2.4-2.4 0-1.492 1.019-2.4 2.4-2.4 1.492 0 2.4 1.019 2.4 2.4 0 1.492-1.019 2.4-2.4 2.4zM12.272 3.744c.536 0 .972-.436.972-.972 0-.536-.436-.972-.972-.972-.536 0-.972.436-.972.972 0 .536.436.972.972.972z" />
                  </svg>
                  Instagram
                </a>
                <a
                  href="mailto:hello@zebri.com"
                  className="hover:opacity-70 transition-opacity flex items-center gap-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 4h12M2 4l6 4.5 6-4.5M2 4v8c0 1 .5 1.5 1.5 1.5h9c1 0 1.5-.5 1.5-1.5V4" />
                  </svg>
                  Contact
                </a>
              </div>
            </div>
            <div className="border-t pt-8 text-center text-xs" style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>
              <p style={{ margin: "0" }}>© 2024 Zebri. Built for professional wedding MCs.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
