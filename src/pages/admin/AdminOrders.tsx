import PortalLayout from "@/components/PortalLayout";
import StatusBadge from "@/components/StatusBadge";
import { LayoutDashboard, Users, UserCheck, Package, ShoppingCart, Warehouse, Settings } from "lucide-react";
import { adminOrders } from "@/lib/data/admin";

const navItems = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'Suppliers', path: '/admin/suppliers', icon: <Users className="h-4 w-4" /> },
  { label: 'Buyers', path: '/admin/buyers', icon: <UserCheck className="h-4 w-4" /> },
  { label: 'Products', path: '/admin/products', icon: <Package className="h-4 w-4" /> },
  { label: 'Orders', path: '/admin/orders', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Inventory', path: '/admin/inventory', icon: <Warehouse className="h-4 w-4" /> },
  { label: 'Settings', path: '/admin/settings', icon: <Settings className="h-4 w-4" /> },
];

const AdminOrders = () => (
  <PortalLayout navItems={navItems} portalName="Admin Portal" variant="admin">
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-foreground">All Orders</h1>
      <div className="bg-card rounded-xl border border-border overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border bg-gray-light">
              <th className="text-left p-2 font-medium text-muted-foreground">Order ID</th>
              <th className="text-left p-2 font-medium text-muted-foreground">Buyer</th>
              <th className="text-left p-2 font-medium text-muted-foreground">Products</th>
              <th className="text-right p-2 font-medium text-muted-foreground">Qty</th>
              <th className="text-right p-2 font-medium text-muted-foreground">Cost (NOK)</th>
              <th className="text-right p-2 font-medium text-muted-foreground">Sale (USD)</th>
              <th className="text-right p-2 font-medium text-muted-foreground">Margin</th>
              <th className="text-right p-2 font-medium text-muted-foreground">Deposit %</th>
              <th className="text-right p-2 font-medium text-muted-foreground">Balance</th>
              <th className="text-left p-2 font-medium text-muted-foreground">Type</th>
              <th className="text-left p-2 font-medium text-muted-foreground">Stock</th>
              <th className="text-left p-2 font-medium text-muted-foreground">Shipping</th>
              <th className="text-left p-2 font-medium text-muted-foreground">Notes</th>
            </tr>
          </thead>
          <tbody>
            {adminOrders.map((o) => (
              <tr key={o.id} className="border-b border-border last:border-0 hover:bg-gray-light/50">
                <td className="p-2 font-mono font-medium text-foreground">{o.id}</td>
                <td className="p-2 text-foreground">{o.buyer}</td>
                <td className="p-2 text-muted-foreground">{o.products}</td>
                <td className="p-2 text-right">{o.qty}</td>
                <td className="p-2 text-right font-mono">{o.supplierCostNOK.toLocaleString()}</td>
                <td className="p-2 text-right font-mono">${o.salePriceUSD.toLocaleString()}</td>
                <td className="p-2 text-right font-medium">{o.marginPct}%</td>
                <td className="p-2 text-right">{o.depositPaid}%</td>
                <td className="p-2 text-right font-mono">${o.balanceDueUSD.toLocaleString()}</td>
                <td className="p-2">{o.orderType}</td>
                <td className="p-2"><StatusBadge status={o.stockStatus} /></td>
                <td className="p-2"><StatusBadge status={o.shippingStatus} /></td>
                <td className="p-2 text-muted-foreground">{o.notes || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </PortalLayout>
);

export default AdminOrders;
