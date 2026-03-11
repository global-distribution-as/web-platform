import { useTranslation } from "react-i18next";
import PortalLayout from "@/components/PortalLayout";
import StatusBadge from "@/components/StatusBadge";
import { LayoutDashboard, BookOpen, FileText, ShoppingCart, User } from "lucide-react";
import { buyerOrders } from "@/lib/data/buyer";

const navItems = [
  { label: 'Dashboard', path: '/buyer/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'Catalogue', path: '/buyer/catalogue', icon: <BookOpen className="h-4 w-4" /> },
  { label: 'My Quotes', path: '/buyer/quotes', icon: <FileText className="h-4 w-4" /> },
  { label: 'My Orders', path: '/buyer/orders', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Profile', path: '/buyer/profile', icon: <User className="h-4 w-4" /> },
];

const BuyerOrders = () => {
  const { t } = useTranslation();
  return (
    <PortalLayout navItems={navItems} portalName="Buyer Portal">
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-foreground">{t('my_orders')}</h1>
        <div className="bg-card rounded-xl border border-border overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">{t('order_id')}</th>
                <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">{t('products')}</th>
                <th className="text-right p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">{t('qty')}</th>
                <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">{t('order_date')}</th>
                <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">{t('shipment')}</th>
                <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">{t('est_arrival')}</th>
                <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">{t('tracking')}</th>
              </tr>
            </thead>
            <tbody>
              {buyerOrders.map((o, i) => (
                <tr key={o.id} className={`border-b border-border last:border-0 hover:bg-white/[0.02] transition-colors ${i % 2 === 1 ? 'bg-surface-elevated/50' : ''}`}>
                  <td className="p-3 font-mono text-xs font-medium text-foreground">{o.id}</td>
                  <td className="p-3 text-foreground">{o.products}</td>
                  <td className="p-3 text-right text-foreground">{o.qty}</td>
                  <td className="p-3 text-muted-foreground">{o.orderDate}</td>
                  <td className="p-3"><StatusBadge status={o.shipmentStatus} /></td>
                  <td className="p-3 text-muted-foreground">{o.estArrival}</td>
                  <td className="p-3 font-mono text-xs text-muted-foreground">{o.trackingRef}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PortalLayout>
  );
};

export default BuyerOrders;
