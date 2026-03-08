import PortalLayout from "@/components/PortalLayout";
import { LayoutDashboard, Users, UserCheck, Package, ShoppingCart, Warehouse, Settings } from "lucide-react";
import { adminSuppliers } from "@/lib/data/admin";

const navItems = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'Suppliers', path: '/admin/suppliers', icon: <Users className="h-4 w-4" /> },
  { label: 'Buyers', path: '/admin/buyers', icon: <UserCheck className="h-4 w-4" /> },
  { label: 'Products', path: '/admin/products', icon: <Package className="h-4 w-4" /> },
  { label: 'Orders', path: '/admin/orders', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Inventory', path: '/admin/inventory', icon: <Warehouse className="h-4 w-4" /> },
  { label: 'Settings', path: '/admin/settings', icon: <Settings className="h-4 w-4" /> },
];

const AdminSuppliers = () => (
  <PortalLayout navItems={navItems} portalName="Admin Portal" variant="admin">
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-foreground">Suppliers</h1>
      <div className="bg-card rounded-xl border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Supplier</th>
              <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Contact</th>
              <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Location</th>
              <th className="text-right p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Products</th>
              <th className="text-right p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Orders</th>
              <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Payment</th>
              <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Last Active</th>
              <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {adminSuppliers.map((s, i) => (
              <tr key={s.id} className={`border-b border-border last:border-0 hover:bg-white/[0.02] transition-colors ${i % 2 === 1 ? 'bg-surface-elevated/50' : ''}`}>
                <td className="p-3 font-medium text-foreground">{s.name}</td>
                <td className="p-3 text-muted-foreground">{s.contact}</td>
                <td className="p-3 text-muted-foreground">{s.location}</td>
                <td className="p-3 text-right text-foreground">{s.productsListed}</td>
                <td className="p-3 text-right text-foreground">{s.activeOrders}</td>
                <td className="p-3 text-muted-foreground">{s.paymentTerms}</td>
                <td className="p-3 text-muted-foreground">{s.lastActive}</td>
                <td className="p-3"><button className="text-xs text-primary hover:text-primary/80 font-medium transition-colors">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </PortalLayout>
);

export default AdminSuppliers;
