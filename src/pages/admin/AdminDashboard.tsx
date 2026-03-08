import PortalLayout from "@/components/PortalLayout";
import StatCard from "@/components/StatCard";
import { LayoutDashboard, Users, UserCheck, Package, ShoppingCart, Warehouse, Settings } from "lucide-react";
import { adminRecentQuotes, adminPendingUploads } from "@/lib/data/admin";

const navItems = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'Suppliers', path: '/admin/suppliers', icon: <Users className="h-4 w-4" /> },
  { label: 'Buyers', path: '/admin/buyers', icon: <UserCheck className="h-4 w-4" /> },
  { label: 'Products', path: '/admin/products', icon: <Package className="h-4 w-4" /> },
  { label: 'Orders', path: '/admin/orders', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Inventory', path: '/admin/inventory', icon: <Warehouse className="h-4 w-4" /> },
  { label: 'Settings', path: '/admin/settings', icon: <Settings className="h-4 w-4" /> },
];

export { navItems as adminNavItems };

const AdminDashboard = () => (
  <PortalLayout navItems={navItems} portalName="Admin Portal" variant="admin">
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <StatCard label="Total Suppliers" value={8} />
        <StatCard label="Total Buyers" value={23} />
        <StatCard label="Active Orders" value={11} />
        <StatCard label="Pending Quotes" value={6} />
        <StatCard label="Products" value={124} />
        <StatCard label="Orders This Month" value={14} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border border-border">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold text-foreground text-sm">Recent Quote Requests</h2>
          </div>
          <div className="divide-y divide-border">
            {adminRecentQuotes.map((q, i) => (
              <div key={i} className="p-3 flex justify-between text-sm">
                <div>
                  <p className="font-medium text-foreground">{q.buyer}</p>
                  <p className="text-muted-foreground text-xs">{q.product}</p>
                </div>
                <span className="text-muted-foreground text-xs">{q.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold text-foreground text-sm">Pending Supplier Uploads</h2>
          </div>
          <div className="divide-y divide-border">
            {adminPendingUploads.map((u, i) => (
              <div key={i} className="p-3 flex justify-between text-sm">
                <p className="font-medium text-foreground">{u.supplier}</p>
                <span className="text-muted-foreground text-xs">{u.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </PortalLayout>
);

export default AdminDashboard;
