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
            <label className="text-sm text-muted-foreground block mb-1">Product</label>
            <select className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-background">
              <option value="">Select a product</option>
              {buyerCatalogue.map(p => <option key={p.id} value={p.id}>{p.name} — {p.brand}</option>)}
            </select>
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Model / SKU</label>
            <input type="text" className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-background" placeholder="e.g. ARC-BAR-M" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Sizes & Quantity per Size</label>
            <textarea className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-background h-20" placeholder="e.g. S: 50, M: 100, L: 80" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Total Quantity</label>
            <input type="number" className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-background" placeholder="e.g. 230" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Delivery Timeline Preference</label>
            <input type="text" className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-background" placeholder="e.g. Within 4 weeks" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Additional Notes</label>
            <textarea className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-background h-20" placeholder="Any special requirements..." />
          </div>
          <label className="flex items-center gap-2 text-sm text-foreground">
            <input type="checkbox" className="rounded border-border" />
            I'm interested in pre-order items
          </label>
          <button
            onClick={() => setSubmitted(true)}
            className="px-8 py-2.5 bg-gold text-navy font-semibold rounded-lg text-sm hover:bg-gold/90 transition-colors"
          >
            Submit Request
          </button>
        </div>
      </div>
    </PortalLayout>
  );
};

export default BuyerQuoteNew;
