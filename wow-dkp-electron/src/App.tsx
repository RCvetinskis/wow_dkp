import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navigation/Navbar";
import GuildsPage from "./pages/GuildsPage";
import NewGuildPage from "./pages/NewGuildPage";
import { ToastProvider } from "./context/toast-context";
import AuthPage from "./pages/AuthPage";
import { AuthProvider, useAuth } from "./context/auth-context";
import MyGuildsPage from "./pages/MyGuildsPage";
import GuildPage from "./pages/GuildPage";
import GuildEditPage from "./pages/GuildEditPage";

function App() {
  const { user } = useAuth();
  console.log(user);
  return (
    <AuthProvider>
      <ToastProvider>
        <Navbar />
        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/guilds" element={<GuildsPage />} />

            {/* auth */}
            {!user && <Route path="/auth" element={<AuthPage />} />}

            {/* authenticated */}
            <Route path="/guilds/new" element={<NewGuildPage />} />
            <Route path="/guilds/me" element={<MyGuildsPage />} />
            <Route path="/guilds/:id" element={<GuildPage />} />
            <Route path="/guilds/:id/edit" element={<GuildEditPage />} />
          </Routes>
        </div>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
