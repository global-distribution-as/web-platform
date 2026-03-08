import PortalLayout from "@/components/PortalLayout";
import StatCard from "@/components/StatCard";
import { LayoutDashboard, Package, Upload, ShoppingCart, User } from "lucide-react";
import { supplierProducts, supplierOrders } from "@/lib/data/supplier";

const navItems = [
  { label: 'Dashboard', path: '/supplier/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'My Products', path: '/supplier/products', icon: <Package className="h-4 w-4" /> },
  { label: 'Upload Price List', path: '/supplier/upload', icon: <Upload className="h-4 w-4" /> },
  { label: 'Orders', path: '/supplier/orders', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Profile', path: '/supplier/profile', icon: <User className="h-4 w-4" /> },
];

const SupplierDashboard = () => (
  <PortalLayout navItems={navItems} portalName="Supplier Portal">
    <div className="space-y-6">
      <div className="bg-card rounded-xl border border-border p-6">
        <h1 className="text-xl font-bold text-foreground">Welcome back, Olympia Sport</h1>
        <p className="text-muted-foreground text-sm mt-1">Manage your products and orders</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard label="Products Listed" value={supplierProducts.length} />
        <StatCard label="Pending Orders" value={supplierOrders.filter(o => o.status === 'pending').length} />
        <StatCard label="Last Upload" value="2 days ago" />
      </div>
    </div>
  </PortalLayout>
);

export default SupplierDashboard;
