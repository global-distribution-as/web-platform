import { Link } from "react-router-dom";
import Aurora from "@/components/Aurora";
import logo from "@/assets/logo.png";
import { Globe, Truck, Headphones } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <Aurora />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="backdrop-blur-xl bg-navy/60 rounded-2xl p-8 md:p-12 border border-white/10">
            <img src={logo} alt="Global Distribution AS" className="h-12 md:h-16 mx-auto mb-8" />
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
              Your Trusted Partner for Premium European Sports Equipment
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-10">
              Connecting quality suppliers with buyers across Asia and beyond
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/supplier"
                className="w-full sm:w-auto px-8 py-3 bg-navy text-primary-foreground font-semibold rounded-lg border border-white/20 hover:bg-navy/80 transition-colors text-center"
              >
                Supplier Portal
              </Link>
              <Link
                to="/buyer"
                className="w-full sm:w-auto px-8 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors text-center"
              >
                Buyer Portal
              </Link>
              <Link
                to="/admin"
                className="text-primary-foreground/50 hover:text-primary-foreground/80 text-sm underline transition-colors"
              >
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Curated Selection', desc: 'Premium European sports equipment, carefully sourced from trusted suppliers.' },
              { icon: Truck, title: 'Reliable Fulfillment', desc: 'End-to-end logistics management from warehouse to your door.' },
              { icon: Headphones, title: 'Dedicated Support', desc: 'Personal account managers with local language support.' },
            ].map((f) => (
              <div key={f.title} className="bg-card p-8 rounded-xl border border-border text-center">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <f.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-gray-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Suppliers list available stock', desc: 'Upload your product inventory and pricing through our supplier portal.' },
              { step: '02', title: 'We manage everything', desc: 'Pricing, logistics, and communication — all handled by our team.' },
              { step: '03', title: 'Buyers receive orders', desc: 'Confirmed orders shipped and tracked directly to your location.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="text-4xl font-bold text-gold mb-4">{s.step}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-8 px-6">
        <div className="max-w-5xl mx-auto text-center text-primary-foreground/60 text-sm space-y-1">
          <p className="font-medium text-primary-foreground/80">Global Distribution AS</p>
          <p>contact@globaldistribution.com</p>
          <p>Org.nr. 936 946 666 · © 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
