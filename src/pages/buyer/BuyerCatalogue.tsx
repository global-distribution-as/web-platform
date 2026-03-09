import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PortalLayout from "@/components/PortalLayout";
import StatusBadge from "@/components/StatusBadge";
import { LayoutDashboard, BookOpen, FileText, ShoppingCart, User, Search } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  sizes: string[];
  availability: 'in-stock' | 'pre-order' | 'limited';
  price_range: string;
}

const navItems = [
  { label: 'Dashboard', path: '/buyer/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'Catalogue', path: '/buyer/catalogue', icon: <BookOpen className="h-4 w-4" /> },
  { label: 'My Quotes', path: '/buyer/quotes', icon: <FileText className="h-4 w-4" /> },
  { label: 'My Orders', path: '/buyer/orders', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Profile', path: '/buyer/profile', icon: <User className="h-4 w-4" /> },
];

const BuyerCatalogue = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (error) {
        setError(error.message);
      } else {
        setProducts(data ?? []);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
    const matchBrand = !brandFilter || p.brand === brandFilter;
    const matchCategory = !categoryFilter || p.category === categoryFilter;
    return matchSearch && matchBrand && matchCategory;
  });

  const categories = [...new Set(products.map(p => p.category))];
  const brands = [...new Set(products.map(p => p.brand))];

  return (
    <PortalLayout navItems={navItems} portalName="Buyer Portal">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-xl font-bold text-foreground">Product Catalogue</h1>
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg text-sm bg-input text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 border border-border rounded-lg text-sm bg-input text-foreground focus:border-primary focus:outline-none transition-colors"
          >
            <option value="">All Categories</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
            className="px-3 py-2 border border-border rounded-lg text-sm bg-input text-foreground focus:border-primary focus:outline-none transition-colors"
          >
            <option value="">All Brands</option>
            {brands.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-card rounded-xl border border-border overflow-hidden animate-pulse">
                <div className="h-40 bg-surface-elevated" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-surface-elevated rounded w-3/4" />
                  <div className="h-3 bg-surface-elevated rounded w-1/2" />
                  <div className="h-8 bg-surface-elevated rounded" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-status-red/30 bg-status-red/10 p-4 text-sm text-status-red">
            Failed to load products: {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p) => (
              <div key={p.id} className="bg-card rounded-xl border border-border overflow-hidden hover:-translate-y-px hover:border-border/80 transition-all duration-150 group">
                <div className="h-40 bg-surface-elevated flex items-center justify-center">
                  <span className="text-muted-foreground text-xs">Product Image</span>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{p.name}</h3>
                    <p className="text-sm text-muted-foreground">{p.brand}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Sizes: {p.sizes.join(', ')}</span>
                    <StatusBadge status={p.availability} />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{p.price_range}</p>
                  <Link
                    to="/buyer/quotes/new"
                    className="block w-full py-2 bg-accent text-accent-foreground font-medium rounded-lg text-center text-sm hover:brightness-110 transition-all duration-150"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full text-center text-sm text-muted-foreground py-12">No products match your filters.</p>
            )}
          </div>
        )}
      </div>
    </PortalLayout>
  );
};

export default BuyerCatalogue;
