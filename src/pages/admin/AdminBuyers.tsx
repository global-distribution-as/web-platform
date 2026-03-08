import PortalLayout from "@/components/PortalLayout";
import { LayoutDashboard, Users, UserCheck, Package, ShoppingCart, Warehouse, Settings } from "lucide-react";
import { adminBuyers } from "@/lib/data/admin";

const navItems = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'Suppliers', path: '/admin/suppliers', icon: <Users className="h-4 w-4" /> },
  { label: 'Buyers', path: '/admin/buyers', icon: <UserCheck className="h-4 w-4" /> },
  { label: 'Products', path: '/admin/products', icon: <Package className="h-4 w-4" /> },
  { label: 'Orders', path: '/admin/orders', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Inventory', path: '/admin/inventory', icon: <Warehouse className="h-4 w-4" /> },
  { label: 'Settings', path: '/admin/settings', icon: <Settings className="h-4 w-4" /> },
];

const AdminBuyers = () => (
  <PortalLayout navItems={navItems} portalName="Admin Portal" variant="admin">
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-foreground">Buyers</h1>
      <div className="bg-card rounded-xl border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Buyer</th>
              <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">WeChat</th>
              <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Location</th>
              <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Type</th>
              <th className="text-right p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Orders</th>
              <th className="text-right p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Quotes</th>
              <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Manager</th>
              <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {adminBuyers.map((b, i) => (
              <tr key={b.id} className={`border-b border-border last:border-0 hover:bg-white/[0.02] transition-colors ${i % 2 === 1 ? 'bg-surface-elevated/50' : ''}`}>
                <td className="p-3 font-medium text-foreground">{b.name}</td>
                <td className="p-3 text-muted-foreground font-mono text-xs">{b.wechatId}</td>
                <td className="p-3 text-muted-foreground">{b.location}</td>
                <td className="p-3 text-muted-foreground">{b.accountType}</td>
                <td className="p-3 text-right text-foreground">{b.totalOrders}</td>
                <td className="p-3 text-right text-foreground">{b.activeQuotes}</td>
                <td className="p-3 text-muted-foreground">{b.accountManager}</td>
                <td className="p-3"><button className="text-xs text-primary hover:text-primary/80 font-medium transition-colors">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </PortalLayout>
);

export default AdminBuyers;
