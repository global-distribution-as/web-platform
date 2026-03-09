import { useEffect, useState } from "react";
import PortalLayout from "@/components/PortalLayout";
import StatCard from "@/components/StatCard";
import { LayoutDashboard, Users, UserCheck, Package, ShoppingCart, Warehouse, Settings } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Inquiry {
  id: string;
  buyer_name: string;
  company: string;
  contact: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  created_at: string;
}

interface PendingProduct {
  id: string;
  name: string;
  category: string;
  price_range: string;
  created_at: string;
}

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

const statusColors: Record<string, string> = {
  new: 'text-status-blue bg-status-blue/10',
  read: 'text-status-amber bg-status-amber/10',
  replied: 'text-status-green bg-status-green/10',
};

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [pendingProducts, setPendingProducts] = useState<PendingProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const [{ data: inqData }, { data: prodData }] = await Promise.all([
      supabase.from('inquiries').select('*').order('created_at', { ascending: false }),
      supabase.from('products').select('id, name, category, price_range, created_at').eq('status', 'pending').order('created_at', { ascending: false }),
    ]);
    setInquiries(inqData ?? []);
    setPendingProducts(prodData ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const updateInquiryStatus = async (id: string, status: 'read' | 'replied') => {
    await supabase.from('inquiries').update({ status }).eq('id', id);
    setInquiries(prev => prev.map(i => i.id === id ? { ...i, status } : i));
  };

  const approveProduct = async (id: string) => {
    await supabase.from('products').update({ status: 'active' }).eq('id', id);
    setPendingProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
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
          {/* Inquiries */}
          <div className="bg-card rounded-xl border border-border">
            <div className="p-4 border-b border-border">
              <h2 className="font-semibold text-foreground text-sm">Inquiries</h2>
            </div>
            {loading ? (
              <div className="p-4 space-y-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="h-10 bg-surface-elevated rounded animate-pulse" />
                ))}
              </div>
            ) : inquiries.length === 0 ? (
              <p className="p-4 text-sm text-muted-foreground">No inquiries yet.</p>
            ) : (
              <div className="divide-y divide-border">
                {inquiries.map((q) => (
                  <div key={q.id} className="p-3 hover:bg-white/[0.02] transition-colors">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div>
                        <p className="font-medium text-foreground text-sm">{q.buyer_name}</p>
                        <p className="text-muted-foreground text-xs">{q.company} · {q.contact}</p>
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide shrink-0 ${statusColors[q.status]}`}>
                        {q.status}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate mb-2">{q.message}</p>
                    <div className="flex gap-2">
                      {q.status === 'new' && (
                        <button
                          onClick={() => updateInquiryStatus(q.id, 'read')}
                          className="text-[11px] text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                          Mark as read
                        </button>
                      )}
                      {q.status !== 'replied' && (
                        <button
                          onClick={() => updateInquiryStatus(q.id, 'replied')}
                          className="text-[11px] text-status-green hover:text-status-green/80 font-medium transition-colors"
                        >
                          Mark as replied
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pending Products */}
          <div className="bg-card rounded-xl border border-border">
            <div className="p-4 border-b border-border">
              <h2 className="font-semibold text-foreground text-sm">Pending Supplier Uploads</h2>
            </div>
            {loading ? (
              <div className="p-4 space-y-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="h-10 bg-surface-elevated rounded animate-pulse" />
                ))}
              </div>
            ) : pendingProducts.length === 0 ? (
              <p className="p-4 text-sm text-muted-foreground">No pending uploads.</p>
            ) : (
              <div className="divide-y divide-border">
                {pendingProducts.map((p) => (
                  <div key={p.id} className="p-3 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                    <div>
                      <p className="font-medium text-foreground text-sm">{p.name}</p>
                      <p className="text-muted-foreground text-xs">{p.category} · {p.price_range}</p>
                    </div>
                    <button
                      onClick={() => approveProduct(p.id)}
                      className="text-[11px] text-status-green hover:text-status-green/80 font-semibold transition-colors shrink-0"
                    >
                      Approve
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </PortalLayout>
  );
};

export default AdminDashboard;
