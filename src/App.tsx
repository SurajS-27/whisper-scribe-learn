
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import UploadPage from "./pages/UploadPage";
import DocumentPage from "./pages/DocumentPage";
import SummariesPage from "./pages/SummariesPage";
import PodcastsPage from "./pages/PodcastsPage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            
            {/* Protected routes */}
            <Route path="/dashboard" element={
              <RequireAuth>
                <DashboardPage />
              </RequireAuth>
            } />
            <Route path="/upload" element={
              <RequireAuth>
                <UploadPage />
              </RequireAuth>
            } />
            <Route path="/document/:id" element={
              <RequireAuth>
                <DocumentPage />
              </RequireAuth>
            } />
            <Route path="/summaries" element={
              <RequireAuth>
                <SummariesPage />
              </RequireAuth>
            } />
            <Route path="/podcasts" element={
              <RequireAuth>
                <PodcastsPage />
              </RequireAuth>
            } />
            <Route path="/settings" element={
              <RequireAuth>
                <SettingsPage />
              </RequireAuth>
            } />
            
            {/* 404 route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          
          <Toaster />
          <Sonner />
        </AuthProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
