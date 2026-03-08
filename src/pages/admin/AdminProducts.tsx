import PortalLayout from "@/components/PortalLayout";
import StatusBadge from "@/components/StatusBadge";
import { LayoutDashboard, Users, UserCheck, Package, ShoppingCart, Warehouse, Settings } from "lucide-react";
import { adminProducts } from "@/lib/data/admin";

const navItems = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'Suppliers', path: '/admin/suppliers', icon: <Users className="h-4 w-4" /> },
  { label: 'Buyers', path: '/admin/buyers', icon: <UserCheck className="h-4 w-4" /> },
  { label: 'Products', path: '/admin/products', icon: <Package className="h-4 w-4" /> },
  { label: 'Orders', path: '/admin/orders', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Inventory', path: '/admin/inventory', icon: <Warehouse className="h-4 w-4" /> },
  { label: 'Settings', path: '/admin/settings', icon: <Settings className="h-4 w-4" /> },
];

const AdminProducts = () => (
  <PortalLayout navItems={navItems} portalName="Admin Portal" variant="admin">
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-foreground">Master Product List</h1>
      <div className="bg-card rounded-xl border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-gray-light">
              <th className="text-left p-3 font-medium text-muted-foreground">Product</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Brand</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Supplier</th>
              <th className="text-right p-3 font-medium text-muted-foreground">Supplier (NOK)</th>
              <th className="text-right p-3 font-medium text-muted-foreground">Our Price (USD)</th>
              <th className="text-right p-3 font-medium text-muted-foreground">Margin %</th>
              <th className="text-right p-3 font-medium text-muted-foreground">Stock</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {adminProducts.map((p) => (
              <tr key={p.id} className="border-b border-border last:border-0 hover:bg-gray-light/50">
                <td className="p-3 font-medium text-foreground">{p.product}</td>
                <td className="p-3 text-muted-foreground">{p.brand}</td>
                <td className="p-3 text-muted-foreground">{p.supplier}</td>
                <td className="p-3 text-right font-mono">{p.supplierPriceNOK.toLocaleString()}</td>
                <td className="p-3 text-right font-mono">${p.ourPriceUSD}</td>
                <td className="p-3 text-right font-medium">{p.marginPct}%</td>
                <td className="p-3 text-right">{p.stockLevel}</td>
                <td className="p-3"><StatusBadge status={p.status} /></td>
                <td className="p-3"><button className="text-xs text-gold hover:text-gold/80 font-medium">Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </PortalLayout>
);

export default AdminProducts;
