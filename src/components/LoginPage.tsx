import { Link } from "react-router-dom";
import Aurora from "@/components/Aurora";
import Logo from "@/components/Logo";

interface LoginPageProps {
  portalName: string;
  dashboardPath: string;
  accentText?: string;
}

const LoginPage = ({ portalName, dashboardPath, accentText }: LoginPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Aurora />
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="backdrop-blur-xl bg-navy/60 rounded-2xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <Logo className="h-8 mx-auto mb-4" variant="light" />
            <h1 className="text-xl font-bold text-primary-foreground">{portalName}</h1>
            {accentText && <p className="text-primary-foreground/50 text-sm mt-1">{accentText}</p>}
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-primary-foreground/70 text-sm block mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-primary-foreground placeholder-white/30 text-sm" placeholder="email@company.com" />
            </div>
            <div>
              <label className="text-primary-foreground/70 text-sm block mb-1">Password</label>
              <input type="password" className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-primary-foreground placeholder-white/30 text-sm" placeholder="••••••••" />
            </div>
            <Link
              to={dashboardPath}
              className="block w-full py-2.5 bg-gold text-navy font-semibold rounded-lg text-center hover:bg-gold/90 transition-colors text-sm"
            >
              Login
            </Link>
          </div>
          <Link to="/" className="block text-center text-primary-foreground/40 text-xs mt-6 hover:text-primary-foreground/60">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
