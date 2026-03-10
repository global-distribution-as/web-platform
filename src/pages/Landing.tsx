import { Link } from "react-router-dom";
import Aurora from "@/components/Aurora";
import Logo from "@/components/Logo";
import { Globe, Truck, Headphones, ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Aurora />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Logo className="h-12 md:h-16 mx-auto mb-6" variant="dark" />
          <p className="uppercase text-xs md:text-sm tracking-[0.2em] text-foreground/40 font-medium mb-8">
            Global Distribution AS
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-[1.1] tracking-tight">
            Premium Equipment.
            <br />
            <span className="text-accent">Global Reach.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Connecting Europe's finest suppliers with buyers across Asia
          </p>
          <div className="flex items-center justify-center">
            <Link
              to="/login"
              className="px-10 py-3.5 backdrop-blur-xl bg-white/[0.06] text-foreground font-medium rounded-xl border border-white/[0.1] hover:bg-white/[0.1] transition-all duration-150 text-sm"
            >
              Sign In
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-16 tracking-tight">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: 'Curated Selection', desc: 'Premium European sports equipment, carefully sourced from trusted suppliers.' },
              { icon: Truck, title: 'Reliable Fulfillment', desc: 'End-to-end logistics management from warehouse to your door.' },
              { icon: Headphones, title: 'Dedicated Support', desc: 'Personal account managers with local language support.' },
            ].map((f) => (
              <div key={f.title} className="bg-card p-8 rounded-xl border border-border hover:-translate-y-0.5 transition-all duration-150 group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                  <f.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-16 tracking-tight">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px bg-border" />
            {[
              { step: '01', title: 'Suppliers list available stock', desc: 'Upload your product inventory and pricing through our supplier portal.' },
              { step: '02', title: 'We manage everything', desc: 'Pricing, logistics, and communication — all handled by our team.' },
              { step: '03', title: 'Buyers receive orders', desc: 'Confirmed orders shipped and tracked directly to your location.' },
            ].map((s) => (
              <div key={s.step} className="text-center relative">
                <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-accent font-bold text-lg">{s.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-16 px-6 border-y border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: '500+', label: 'Products' },
            { num: '50+', label: 'Suppliers' },
            { num: '12', label: 'Countries' },
            { num: '99%', label: 'On-Time' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">{s.num}</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[hsl(240,12%,3%)] border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Logo className="h-8" variant="dark" />
          </div>
          <div className="text-center md:text-left text-muted-foreground text-sm space-y-0.5">
            <p>contact@globaldistribution.com</p>
            <p>Org.nr. 936 946 666 · © 2025</p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/login" className="text-muted-foreground hover:text-foreground transition-colors duration-150">Sign In</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
