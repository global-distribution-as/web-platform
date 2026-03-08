import PortalLayout from "@/components/PortalLayout";
import StatusBadge from "@/components/StatusBadge";
import { LayoutDashboard, Package, Upload, ShoppingCart, User } from "lucide-react";
import { supplierUploads } from "@/lib/data/supplier";

const navItems = [
  { label: 'Dashboard', path: '/supplier/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'My Products', path: '/supplier/products', icon: <Package className="h-4 w-4" /> },
  { label: 'Upload Price List', path: '/supplier/upload', icon: <Upload className="h-4 w-4" /> },
  { label: 'Orders', path: '/supplier/orders', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Profile', path: '/supplier/profile', icon: <User className="h-4 w-4" /> },
];

const SupplierUpload = () => (
  <PortalLayout navItems={navItems} portalName="Supplier Portal">
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-foreground">Upload Price List</h1>

      <div className="bg-card rounded-xl border border-border p-8">
        <div className="border-2 border-dashed border-border rounded-xl p-12 text-center">
          <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
          <p className="text-foreground font-medium mb-1">Drag and drop your file here</p>
          <p className="text-muted-foreground text-sm mb-4">CSV or Excel files accepted</p>
          <button className="px-6 py-2 bg-navy text-primary-foreground rounded-lg text-sm font-medium hover:bg-navy/90 transition-colors">
            Browse Files
          </button>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="text-sm text-gold hover:text-gold/80 font-medium transition-colors">
            ↓ Download Template
          </button>
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-x-auto">
        <div className="p-4 border-b border-border">
          <h2 className="font-semibold text-foreground">Upload History</h2>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-gray-light">
              <th className="text-left p-3 font-medium text-muted-foreground">Filename</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Date</th>
              <th className="text-right p-3 font-medium text-muted-foreground">Products Imported</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {supplierUploads.map((u, i) => (
              <tr key={i} className="border-b border-border last:border-0">
                <td className="p-3 font-medium text-foreground">{u.filename}</td>
                <td className="p-3 text-muted-foreground">{u.date}</td>
                <td className="p-3 text-right">{u.productsImported}</td>
                <td className="p-3"><StatusBadge status={u.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </PortalLayout>
);

export default SupplierUpload;
