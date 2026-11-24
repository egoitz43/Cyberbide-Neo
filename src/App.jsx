import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import { GameProvider } from '@/context/GameProvider';
import { SoundProvider } from '@/context/SoundProvider';
import LivingBackground from '@/components/LivingBackground';
// Add page imports here
import Home from '@/pages/Home';
import World from '@/pages/World';
import Mission from '@/pages/Mission';
import Profile from '@/pages/Profile';
import Medals from '@/pages/Medals';
import Ranking from '@/pages/Ranking';
import Settings from '@/pages/Settings';
import Diploma from '@/pages/Diploma';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/world/:worldId" element={<World />} />
      <Route path="/mission/:worldId/:missionId" element={<Mission />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/medals" element={<Medals />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/diploma" element={<Diploma />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <GameProvider>
          <SoundProvider>
            <Router>
              <LivingBackground />
              <ScrollToTop />
              <AuthenticatedApp />
            </Router>
          </SoundProvider>
        </GameProvider>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App