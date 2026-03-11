import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PortalLayout from "@/components/PortalLayout";
import StatusBadge from "@/components/StatusBadge";
import { LayoutDashboard, BookOpen, FileText, ShoppingCart, User } from "lucide-react";
import { buyerQuotes } from "@/lib/data/buyer";

const navItems = [
  { label: 'Dashboard', path: '/buyer/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'Catalogue', path: '/buyer/catalogue', icon: <BookOpen className="h-4 w-4" /> },
  { label: 'My Quotes', path: '/buyer/quotes', icon: <FileText className="h-4 w-4" /> },
  { label: 'My Orders', path: '/buyer/orders', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Profile', path: '/buyer/profile', icon: <User className="h-4 w-4" /> },
];

const BuyerQuotes = () => {
  const { t } = useTranslation();
  return (
    <PortalLayout navItems={navItems} portalName="Buyer Portal">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">{t('my_quotes')}</h1>
          <Link to="/buyer/quotes/new" className="px-4 py-2 bg-accent text-accent-foreground font-medium rounded-lg text-sm hover:brightness-110 transition-all duration-150">
            {t('new_quote_request')}
          </Link>
        </div>
        <div className="bg-card rounded-xl border border-border overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">{t('quote_id')}</th>
                <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">{t('products')}</th>
                <th className="text-right p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">{t('qty')}</th>
                <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">{t('requested')}</th>
                <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">{t('status')}</th>
                <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">{t('deposit_col')}</th>
                <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">{t('notes')}</th>
              </tr>
            </thead>
            <tbody>
              {buyerQuotes.map((q, i) => (
                <tr key={q.id} className={`border-b border-border last:border-0 hover:bg-white/[0.02] transition-colors ${i % 2 === 1 ? 'bg-surface-elevated/50' : ''}`}>
                  <td className="p-3 font-mono text-xs font-medium text-foreground">{q.id}</td>
                  <td className="p-3 text-foreground">{q.products}</td>
                  <td className="p-3 text-right text-foreground">{q.qty}</td>
                  <td className="p-3 text-muted-foreground">{q.requestedDate}</td>
                  <td className="p-3"><StatusBadge status={q.status} /></td>
                  <td className="p-3 text-muted-foreground">{q.depositRequired}</td>
                  <td className="p-3 text-muted-foreground text-xs">{q.notes || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PortalLayout>
  );
};

export default BuyerQuotes;
