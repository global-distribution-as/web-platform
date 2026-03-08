import { Link } from "react-router-dom";
import PortalLayout from "@/components/PortalLayout";
import StatusBadge from "@/components/StatusBadge";
import { LayoutDashboard, BookOpen, FileText, ShoppingCart, User } from "lucide-react";
import { buyerQuotes } from "@/lib/data/buyer";

const navItems = [
  { label: 'Dashboard', path: '/buyer/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'Catalogue', path: '/buyer/catalogue', icon: <BookOpen className="h-4 w-4" /> },
  { label: 'My Quotes', path: '/buyer/quotes', icon: <FileText className="h-4 w-4" /> },
  { label: 'My Orders', path: '/buyer/orders', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Profile', path: '/buyer/profile', icon: <User className="h-4 w-4" /> },
];

const BuyerQuotes = () => (
  <PortalLayout navItems={navItems} portalName="Buyer Portal">
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">My Quotes</h1>
        <Link to="/buyer/quotes/new" className="px-4 py-2 bg-gold text-navy font-semibold rounded-lg text-sm hover:bg-gold/90 transition-colors">
          New Quote Request
        </Link>
      </div>
      <div className="bg-card rounded-xl border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-gray-light">
              <th className="text-left p-3 font-medium text-muted-foreground">Quote ID</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Products</th>
              <th className="text-right p-3 font-medium text-muted-foreground">Qty</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Requested</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Deposit</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Notes</th>
            </tr>
          </thead>
          <tbody>
            {buyerQuotes.map((q) => (
              <tr key={q.id} className="border-b border-border last:border-0 hover:bg-gray-light/50">
                <td className="p-3 font-mono text-xs font-medium text-foreground">{q.id}</td>
                <td className="p-3 text-foreground">{q.products}</td>
                <td className="p-3 text-right">{q.qty}</td>
                <td className="p-3 text-muted-foreground">{q.requestedDate}</td>
                <td className="p-3"><StatusBadge status={q.status} /></td>
                <td className="p-3 text-muted-foreground">{q.depositRequired}</td>
                <td className="p-3 text-muted-foreground text-xs">{q.notes || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </PortalLayout>
);

export default BuyerQuotes;
