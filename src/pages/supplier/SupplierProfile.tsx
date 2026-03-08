import PortalLayout from "@/components/PortalLayout";
import { LayoutDashboard, Package, Upload, ShoppingCart, User } from "lucide-react";
import { supplierProfile } from "@/lib/data/supplier";

const navItems = [
  { label: 'Dashboard', path: '/supplier/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'My Products', path: '/supplier/products', icon: <Package className="h-4 w-4" /> },
  { label: 'Upload Price List', path: '/supplier/upload', icon: <Upload className="h-4 w-4" /> },
  { label: 'Orders', path: '/supplier/orders', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Profile', path: '/supplier/profile', icon: <User className="h-4 w-4" /> },
];

const SupplierProfile = () => (
  <PortalLayout navItems={navItems} portalName="Supplier Portal">
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-foreground">Company Profile</h1>
      <div className="bg-card rounded-xl border border-border p-6 max-w-2xl">
        <div className="space-y-5">
          {[
            { label: 'Company Name', value: supplierProfile.companyName },
            { label: 'Contact Person', value: supplierProfile.contactPerson },
            { label: 'Email', value: supplierProfile.email },
            { label: 'Phone', value: supplierProfile.phone },
            { label: 'Payment Terms', value: supplierProfile.paymentTerms },
            { label: 'Bank Details', value: supplierProfile.bankDetails || '—' },
          ].map((f) => (
            <div key={f.label}>
              <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1.5 font-medium">{f.label}</label>
              <input
                type="text"
                defaultValue={f.value}
                className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-foreground bg-input focus:border-primary focus:outline-none transition-colors"
                readOnly
              />
            </div>
          ))}
          <button className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg text-sm hover:brightness-110 transition-all duration-150">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </PortalLayout>
);

export default SupplierProfile;
