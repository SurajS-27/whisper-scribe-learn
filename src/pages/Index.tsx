
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function Index() {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-primary/50 mb-4"></div>
          <div className="h-4 w-24 bg-muted rounded"></div>
        </div>
      </div>
    );
  }
  
  // If user is authenticated, redirect to dashboard, otherwise to auth page
  return <Navigate to={user ? "/dashboard" : "/auth"} replace />;
}
