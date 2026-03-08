import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import LoginPage from "./components/LoginPage";
import NotFound from "./pages/NotFound";

// Supplier
import SupplierDashboard from "./pages/supplier/SupplierDashboard";
import SupplierProducts from "./pages/supplier/SupplierProducts";
import SupplierUpload from "./pages/supplier/SupplierUpload";
import SupplierOrders from "./pages/supplier/SupplierOrders";
import SupplierProfile from "./pages/supplier/SupplierProfile";

// Buyer
import BuyerDashboard from "./pages/buyer/BuyerDashboard";
import BuyerCatalogue from "./pages/buyer/BuyerCatalogue";
import BuyerQuotes from "./pages/buyer/BuyerQuotes";
import BuyerQuoteNew from "./pages/buyer/BuyerQuoteNew";
import BuyerOrders from "./pages/buyer/BuyerOrders";
import BuyerProfile from "./pages/buyer/BuyerProfile";

// Admin
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminSuppliers from "./pages/admin/AdminSuppliers";
import AdminBuyers from "./pages/admin/AdminBuyers";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminInventory from "./pages/admin/AdminInventory";
import AdminSettings from "./pages/admin/AdminSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />

          {/* Supplier Portal */}
          <Route path="/supplier" element={<LoginPage portalName="Supplier Portal" dashboardPath="/supplier/dashboard" />} />
          <Route path="/supplier/dashboard" element={<SupplierDashboard />} />
          <Route path="/supplier/products" element={<SupplierProducts />} />
          <Route path="/supplier/upload" element={<SupplierUpload />} />
          <Route path="/supplier/orders" element={<SupplierOrders />} />
          <Route path="/supplier/profile" element={<SupplierProfile />} />

          {/* Buyer Portal */}
          <Route path="/buyer" element={<LoginPage portalName="Buyer Portal" dashboardPath="/buyer/dashboard" />} />
          <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
          <Route path="/buyer/catalogue" element={<BuyerCatalogue />} />
          <Route path="/buyer/quotes" element={<BuyerQuotes />} />
          <Route path="/buyer/quotes/new" element={<BuyerQuoteNew />} />
          <Route path="/buyer/orders" element={<BuyerOrders />} />
          <Route path="/buyer/profile" element={<BuyerProfile />} />

          {/* Admin Portal */}
          <Route path="/admin" element={<LoginPage portalName="Admin Portal" dashboardPath="/admin/dashboard" accentText="Internal Access Only" />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/suppliers" element={<AdminSuppliers />} />
          <Route path="/admin/buyers" element={<AdminBuyers />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/inventory" element={<AdminInventory />} />
          <Route path="/admin/settings" element={<AdminSettings />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
