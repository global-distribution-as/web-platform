import { useTranslation } from "react-i18next";
import PortalLayout from "@/components/PortalLayout";
import { LayoutDashboard, BookOpen, FileText, ShoppingCart, User } from "lucide-react";
import { buyerProfile } from "@/lib/data/buyer";

const navItems = [
  { label: 'Dashboard', path: '/buyer/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'Catalogue', path: '/buyer/catalogue', icon: <BookOpen className="h-4 w-4" /> },
  { label: 'My Quotes', path: '/buyer/quotes', icon: <FileText className="h-4 w-4" /> },
  { label: 'My Orders', path: '/buyer/orders', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Profile', path: '/buyer/profile', icon: <User className="h-4 w-4" /> },
];

const BuyerProfile = () => {
  const { t } = useTranslation();

  const fields = [
    { label: t('company_name_label'), value: buyerProfile.companyName },
    { label: t('contact_person'), value: buyerProfile.contactPerson },
    { label: t('wechat_id'), value: buyerProfile.wechatId },
    { label: t('email'), value: buyerProfile.email },
    { label: t('shipping_address'), value: buyerProfile.shippingAddress },
    { label: t('account_type'), value: buyerProfile.accountType },
  ];

  return (
    <PortalLayout navItems={navItems} portalName="Buyer Portal">
      <div className="space-y-6">
        <h1 className="text-xl font-bold text-foreground">{t('company_profile')}</h1>
        <div className="bg-card rounded-xl border border-border p-6 max-w-2xl space-y-5">
          {fields.map((f) => (
            <div key={f.label}>
              <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1.5 font-medium">{f.label}</label>
              <input type="text" defaultValue={f.value} className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-foreground bg-input focus:border-primary focus:outline-none transition-colors" readOnly />
            </div>
          ))}
          <button className="px-6 py-2.5 bg-accent text-accent-foreground font-medium rounded-lg text-sm hover:brightness-110 transition-all duration-150">
            {t('save_changes')}
          </button>
        </div>
      </div>
    </PortalLayout>
  );
};

export default BuyerProfile;
