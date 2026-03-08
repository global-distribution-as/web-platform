import PortalLayout from "@/components/PortalLayout";
import { LayoutDashboard, BookOpen, FileText, ShoppingCart, User } from "lucide-react";
import { buyerProfile } from "@/lib/data/buyer";

const navItems = [
  { label: 'Dashboard', path: '/buyer/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'Catalogue', path: '/buyer/catalogue', icon: <BookOpen className="h-4 w-4" /> },
  { label: 'My Quotes', path: '/buyer/quotes', icon: <FileText className="h-4 w-4" /> },
  { label: 'My Orders', path: '/buyer/orders', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Profile', path: '/buyer/profile', icon: <User className="h-4 w-4" /> },
];

const BuyerProfile = () => (
  <PortalLayout navItems={navItems} portalName="Buyer Portal">
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-foreground">Company Profile</h1>
      <div className="bg-card rounded-xl border border-border p-6 max-w-2xl space-y-5">
        {[
          { label: 'Company Name', value: buyerProfile.companyName },
          { label: 'Contact Person', value: buyerProfile.contactPerson },
          { label: 'WeChat ID', value: buyerProfile.wechatId },
          { label: 'Email', value: buyerProfile.email },
          { label: 'Shipping Address', value: buyerProfile.shippingAddress },
          { label: 'Account Type', value: buyerProfile.accountType },
        ].map((f) => (
          <div key={f.label}>
            <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1.5 font-medium">{f.label}</label>
            <input type="text" defaultValue={f.value} className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-foreground bg-input focus:border-primary focus:outline-none transition-colors" readOnly />
          </div>
        ))}
        <button className="px-6 py-2.5 bg-accent text-accent-foreground font-medium rounded-lg text-sm hover:brightness-110 transition-all duration-150">
          Save Changes
        </button>
      </div>
    </div>
  </PortalLayout>
);

export default BuyerProfile;
