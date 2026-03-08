import { Link, useLocation } from "react-router-dom";
import { ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

interface NavItem {
  label: string;
  path: string;
  icon: ReactNode;
}

interface PortalLayoutProps {
  children: ReactNode;
  navItems: NavItem[];
  portalName: string;
  variant?: 'default' | 'admin';
}

const PortalLayout = ({ children, navItems, portalName, variant = 'default' }: PortalLayoutProps) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const headerBg = variant === 'admin' ? 'bg-[hsl(220,45%,16%)]' : 'bg-navy';

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed md:static z-50 h-full w-64 bg-navy flex flex-col transition-transform duration-200 ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-4 border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="h-6 w-auto" variant="light" />
          </Link>
          <p className="text-xs text-sidebar-foreground/60 mt-1">{portalName}</p>
        </div>

        <nav className="flex-1 py-4 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                isActive(item.path)
                  ? 'text-gold border-l-3 border-gold bg-sidebar-accent'
                  : 'text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 border-l-3 border-transparent'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <Link to="/" className="text-xs text-sidebar-foreground/50 hover:text-sidebar-foreground/80 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className={`${headerBg} h-14 flex items-center px-4 md:px-6 shrink-0`}>
          <button onClick={() => setMobileOpen(true)} className="md:hidden text-primary-foreground mr-3">
            <Menu className="h-5 w-5" />
          </button>
          <h2 className="text-primary-foreground font-medium text-sm">{portalName}</h2>
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-light p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PortalLayout;
