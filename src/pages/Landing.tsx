import { Link } from "react-router-dom";
import Aurora from "@/components/Aurora";
import Logo from "@/components/Logo";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero — full viewport */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Photorealistic background */}
        <img
          src="/northern-lights-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay — 55 % black */}
        <div className="absolute inset-0 bg-black/[0.55]" />

        {/* Blue / teal vignette on edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(6,182,212,0.08) 75%, rgba(6,182,212,0.18) 100%)",
          }}
        />

        {/* Subtle animated aurora blended on top */}
        <div className="absolute inset-0 opacity-25 mix-blend-screen">
          <Aurora />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-0">
          <Logo className="h-12 md:h-14" variant="dark" />

          <div className="mt-12 mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-[200] text-white leading-[1.08] tracking-tight">
              Premium Equipment.
              <br />
              <span className="font-light text-white/90">Global Reach.</span>
            </h1>
          </div>

          <p className="text-base md:text-lg text-white/35 font-light mb-16 max-w-lg leading-relaxed">
            Connecting Europe's finest suppliers with buyers across Asia
          </p>

          <Link
            to="/login"
            className="px-10 py-2.5 text-sm font-normal tracking-wide text-white/85 rounded-lg border border-white/[0.15] bg-transparent backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/[0.25] hover:text-white transition-all duration-300"
          >
            Sign In
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-[#050510] border-t border-white/[0.04]">
        <p className="text-xs text-white/25 tracking-wide">
          © 2025 Global Distribution AS
        </p>
      </footer>
    </div>
  );
};

export default Landing;
