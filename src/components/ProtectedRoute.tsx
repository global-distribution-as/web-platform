import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

interface ProtectedRouteProps {
  role: 'admin' | 'supplier' | 'buyer';
  loginPath: string;
}

type Status = 'checking' | 'unauthorized' | 'wrong-role' | 'ok';

const ProtectedRoute = ({ role, loginPath }: ProtectedRouteProps) => {
  const [status, setStatus] = useState<Status>('checking');

  useEffect(() => {
    const check = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setStatus('unauthorized');
        return;
      }
      const { data } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .single();
      setStatus(data?.role === role ? 'ok' : 'wrong-role');
    };
    check();
  }, [role]);

  if (status === 'checking') return null;
  if (status === 'unauthorized') return <Navigate to={loginPath} replace />;
  if (status === 'wrong-role') return <Navigate to="/unauthorized" replace />;
  return <Outlet />;
};

export default ProtectedRoute;
