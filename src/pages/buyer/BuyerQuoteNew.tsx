import { useState } from "react";
import PortalLayout from "@/components/PortalLayout";
import { LayoutDashboard, BookOpen, FileText, ShoppingCart, User, CheckCircle } from "lucide-react";
import { buyerCatalogue } from "@/lib/data/buyer";

const navItems = [
  { label: 'Dashboard', path: '/buyer/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'Catalogue', path: '/buyer/catalogue', icon: <BookOpen className="h-4 w-4" /> },
  { label: 'My Quotes', path: '/buyer/quotes', icon: <FileText className="h-4 w-4" /> },
  { label: 'My Orders', path: '/buyer/orders', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Profile', path: '/buyer/profile', icon: <User className="h-4 w-4" /> },
];

const BuyerQuoteNew = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <PortalLayout navItems={navItems} portalName="Buyer Portal">
        <div className="max-w-lg mx-auto py-20 text-center">
          <CheckCircle className="h-16 w-16 text-status-green mx-auto mb-4" />
          <h2 className="text-xl font-bold text-foreground mb-2">Request Received</h2>
          <p className="text-muted-foreground">Your request has been received. Jessica will contact you within 24 hours.</p>
        </div>
      </PortalLayout>
    );
  }

  return (
    <PortalLayout navItems={navItems} portalName="Buyer Portal">
      <div className="space-y-6 max-w-2xl">
        <h1 className="text-xl font-bold text-foreground">Request a Quote</h1>
        <div className="bg-card rounded-xl border border-border p-6 space-y-5">
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1.5 font-medium">Product</label>
            <select className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-input text-foreground focus:border-primary focus:outline-none transition-colors">
              <option value="">Select a product</option>
              {buyerCatalogue.map(p => <option key={p.id} value={p.id}>{p.name} — {p.brand}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1.5 font-medium">Model / SKU</label>
            <input type="text" className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-input text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors" placeholder="e.g. ARC-BAR-M" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1.5 font-medium">Sizes & Quantity per Size</label>
            <textarea className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-input text-foreground placeholder-muted-foreground h-20 focus:border-primary focus:outline-none transition-colors" placeholder="e.g. S: 50, M: 100, L: 80" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1.5 font-medium">Total Quantity</label>
            <input type="number" className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-input text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors" placeholder="e.g. 230" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1.5 font-medium">Delivery Timeline Preference</label>
            <input type="text" className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-input text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors" placeholder="e.g. Within 4 weeks" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1.5 font-medium">Additional Notes</label>
            <textarea className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-input text-foreground placeholder-muted-foreground h-20 focus:border-primary focus:outline-none transition-colors" placeholder="Any special requirements..." />
          </div>
          <label className="flex items-center gap-2 text-sm text-foreground">
            <input type="checkbox" className="rounded border-border bg-input" />
            I'm interested in pre-order items
          </label>
          <button
            onClick={() => setSubmitted(true)}
            className="px-8 py-2.5 bg-accent text-accent-foreground font-medium rounded-lg text-sm hover:brightness-110 transition-all duration-150"
          >
            Submit Request
          </button>
        </div>
      </div>
    </PortalLayout>
  );
};

export default BuyerQuoteNew;
