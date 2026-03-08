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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <Aurora />
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="backdrop-blur-xl bg-white/[0.04] rounded-2xl p-8 border border-white/[0.08]">
          <div className="text-center mb-8">
            <Logo className="h-10 mx-auto mb-4" variant="dark" />
            <h1 className="text-xl font-bold text-foreground">{portalName}</h1>
            {accentText && <p className="text-muted-foreground text-sm mt-1">{accentText}</p>}
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-muted-foreground text-sm block mb-1.5 font-medium">Email</label>
              <input type="email" className="w-full px-4 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground text-sm focus:border-primary focus:outline-none transition-colors" placeholder="email@company.com" />
            </div>
            <div>
              <label className="text-muted-foreground text-sm block mb-1.5 font-medium">Password</label>
              <input type="password" className="w-full px-4 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground text-sm focus:border-primary focus:outline-none transition-colors" placeholder="••••••••" />
            </div>
            <Link
              to={dashboardPath}
              className="block w-full py-2.5 bg-primary text-primary-foreground font-medium rounded-lg text-center hover:brightness-110 transition-all duration-150 text-sm"
            >
              Login
            </Link>
          </div>
          <Link to="/" className="block text-center text-muted-foreground text-xs mt-6 hover:text-foreground transition-colors duration-150">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
