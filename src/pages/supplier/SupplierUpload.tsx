import { useState } from "react";
import PortalLayout from "@/components/PortalLayout";
import { LayoutDashboard, Package, Upload, ShoppingCart, User } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface FormState {
  name: string;
  description: string;
  category: string;
  price_range: string;
}

const empty: FormState = { name: '', description: '', category: '', price_range: '' };

const categories = ['Jackets', 'Insulation', 'Softshell', 'Down', 'Fleece', 'Running'];

const navItems = [
  { label: 'Dashboard', path: '/supplier/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'My Products', path: '/supplier/products', icon: <Package className="h-4 w-4" /> },
  { label: 'Upload Price List', path: '/supplier/upload', icon: <Upload className="h-4 w-4" /> },
  { label: 'Orders', path: '/supplier/orders', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Profile', path: '/supplier/profile', icon: <User className="h-4 w-4" /> },
];

const SupplierUpload = () => {
  const [form, setForm] = useState<FormState>(empty);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const { error } = await supabase.from('products').insert([{ ...form, status: 'pending' }]);

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setForm(empty);
    }
    setSubmitting(false);
  };

  return (
    <PortalLayout navItems={navItems} portalName="Supplier Portal">
      <div className="space-y-6">
        <h1 className="text-xl font-bold text-foreground">Submit a Product</h1>

        <div className="bg-card rounded-xl border border-border p-6">
          <p className="text-sm text-muted-foreground mb-6">
            Products submitted here will be reviewed by the admin team before appearing in the buyer catalogue.
          </p>

          {success ? (
            <div className="rounded-xl border border-status-green/30 bg-status-green/10 p-6 text-center space-y-2">
              <p className="text-status-green font-semibold">Product submitted for review!</p>
              <p className="text-sm text-muted-foreground">The admin team will approve it before it appears in the catalogue.</p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-2 text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
              >
                Submit another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Product Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Beta AR Jacket"
                    className="w-full px-3 py-2.5 border border-border rounded-lg text-sm bg-input text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Category</label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 border border-border rounded-lg text-sm bg-input text-foreground focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select category</option>
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Price Range (USD)</label>
                <input
                  name="price_range"
                  value={form.price_range}
                  onChange={handleChange}
                  required
                  placeholder="e.g. $200–$250"
                  className="w-full px-3 py-2.5 border border-border rounded-lg text-sm bg-input text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Product details, materials, features..."
                  className="w-full px-3 py-2.5 border border-border rounded-lg text-sm bg-input text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="text-sm text-status-red">Failed to submit: {error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-2.5 bg-accent text-accent-foreground font-medium rounded-lg text-sm hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150"
              >
                {submitting ? 'Submitting…' : 'Submit for Review'}
              </button>
            </form>
          )}
        </div>
      </div>
    </PortalLayout>
  );
};

export default SupplierUpload;
