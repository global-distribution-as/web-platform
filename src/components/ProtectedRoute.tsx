import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

const ProtectedRoute = () => {
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthenticated(!!session);
      setChecking(false);
    });
  }, []);

  if (checking) return null;
  if (!authenticated) return <Navigate to="/admin" replace />;
  return <Outlet />;
};

export default ProtectedRoute;
