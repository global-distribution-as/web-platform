import PortalLayout from "@/components/PortalLayout";
import StatusBadge from "@/components/StatusBadge";
import { LayoutDashboard, Package, Upload, ShoppingCart, User } from "lucide-react";
import { supplierProducts } from "@/lib/data/supplier";

const navItems = [
  { label: 'Dashboard', path: '/supplier/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'My Products', path: '/supplier/products', icon: <Package className="h-4 w-4" /> },
  { label: 'Upload Price List', path: '/supplier/upload', icon: <Upload className="h-4 w-4" /> },
  { label: 'Orders', path: '/supplier/orders', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Profile', path: '/supplier/profile', icon: <User className="h-4 w-4" /> },
];

const SupplierProducts = () => (
  <PortalLayout navItems={navItems} portalName="Supplier Portal">
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-foreground">My Products</h1>
      <div className="bg-card rounded-xl border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-gray-light">
              <th className="text-left p-3 font-medium text-muted-foreground">Product Name</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Brand</th>
              <th className="text-left p-3 font-medium text-muted-foreground">SKU</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Size</th>
              <th className="text-right p-3 font-medium text-muted-foreground">Qty</th>
              <th className="text-right p-3 font-medium text-muted-foreground">Price (NOK)</th>
              <th className="text-right p-3 font-medium text-muted-foreground">Discount %</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Est. Delivery</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {supplierProducts.map((p) => (
              <tr key={p.id} className="border-b border-border last:border-0 hover:bg-gray-light/50">
                <td className="p-3 font-medium text-foreground">{p.name}</td>
                <td className="p-3 text-muted-foreground">{p.brand}</td>
                <td className="p-3 text-muted-foreground font-mono text-xs">{p.sku}</td>
                <td className="p-3">{p.size}</td>
                <td className="p-3 text-right">{p.qty}</td>
                <td className="p-3 text-right font-medium">{p.priceNOK.toLocaleString()}</td>
                <td className="p-3 text-right">{p.discountRRP}%</td>
                <td className="p-3 text-muted-foreground">{p.estDelivery}</td>
                <td className="p-3"><StatusBadge status={p.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </PortalLayout>
);

export default SupplierProducts;
