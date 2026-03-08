import PortalLayout from "@/components/PortalLayout";
import { LayoutDashboard, Users, UserCheck, Package, ShoppingCart, Warehouse, Settings, UserPlus } from "lucide-react";
import { adminTeam } from "@/lib/data/admin";

const navItems = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: 'Suppliers', path: '/admin/suppliers', icon: <Users className="h-4 w-4" /> },
  { label: 'Buyers', path: '/admin/buyers', icon: <UserCheck className="h-4 w-4" /> },
  { label: 'Products', path: '/admin/products', icon: <Package className="h-4 w-4" /> },
  { label: 'Orders', path: '/admin/orders', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Inventory', path: '/admin/inventory', icon: <Warehouse className="h-4 w-4" /> },
  { label: 'Settings', path: '/admin/settings', icon: <Settings className="h-4 w-4" /> },
];

const roleColors: Record<string, string> = {
  'Founder': 'bg-gold/10 text-gold',
  'Partner': 'bg-blue-100 text-blue-800',
  'Distribution Manager (Asia)': 'bg-emerald-100 text-emerald-800',
};

const AdminSettings = () => (
  <PortalLayout navItems={navItems} portalName="Admin Portal" variant="admin">
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-foreground">Settings</h1>

      <div className="bg-card rounded-xl border border-border">
        <div className="p-4 border-b border-border">
          <h2 className="font-semibold text-foreground">Team Members</h2>
        </div>
        <div className="divide-y divide-border">
          {adminTeam.map((m) => (
            <div key={m.name} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {m.name[0]}
                </div>
                <div>
                  <p className="font-medium text-foreground">{m.name}</p>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${roleColors[m.role] || 'bg-gray-100 text-gray-800'}`}>
                    {m.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border p-6 max-w-md">
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <UserPlus className="h-4 w-4" /> Invite Team Member
        </h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-background" placeholder="team@globaldistribution.com" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Role</label>
            <select className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-background">
              <option>Partner</option>
              <option>Distribution Manager</option>
              <option>Viewer</option>
            </select>
          </div>
          <button className="px-6 py-2.5 bg-gold text-navy font-semibold rounded-lg text-sm hover:bg-gold/90 transition-colors">
            Send Invite
          </button>
        </div>
      </div>
    </div>
  </PortalLayout>
);

export default AdminSettings;
