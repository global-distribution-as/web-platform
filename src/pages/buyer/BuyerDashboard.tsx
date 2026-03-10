import PortalLayout from "@/components/PortalLayout";
import StatCard from "@/components/StatCard";
import { LayoutDashboard, BookOpen, FileText, ShoppingCart, User, MessageCircle } from "lucide-react";

const navItems = [
  { label: 'Dashboard', path: '/buyer/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'Catalogue', path: '/buyer/catalogue', icon: <BookOpen className="h-4 w-4" /> },
  { label: 'My Quotes', path: '/buyer/quotes', icon: <FileText className="h-4 w-4" /> },
  { label: 'My Orders', path: '/buyer/orders', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Profile', path: '/buyer/profile', icon: <User className="h-4 w-4" /> },
];

const BuyerDashboard = () => (
  <PortalLayout navItems={navItems} portalName="Buyer Portal">
    <div className="space-y-6">
      <div className="bg-card rounded-xl border border-border p-6">
        <h1 className="text-xl font-bold text-foreground">Welcome back, Shanghai Sport Trade Co.</h1>
        <p className="text-muted-foreground text-sm mt-1">Browse our catalogue and manage your orders</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard label="Available Products" value={124} />
        <StatCard label="Active Quotes" value={2} />
        <StatCard label="Orders in Transit" value={1} />
      </div>
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
            <MessageCircle className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Your Account Manager</h3>
            <p className="text-foreground font-medium mt-1">Jessica Chen</p>
            <p className="text-muted-foreground text-sm">Asia Relations Manager</p>
            <p className="text-muted-foreground text-sm">WeChat: jessica_gdist</p>
            <p className="text-muted-foreground text-sm">jessica@globaldistribution.com</p>
          </div>
        </div>
      </div>
    </div>
  </PortalLayout>
);

export default BuyerDashboard;
