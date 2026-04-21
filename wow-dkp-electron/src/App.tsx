import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navigation/Navbar";
import GuildsPage from "./pages/GuildsPage";
import NewGuildPage from "./pages/NewGuildPage";
import { ToastProvider } from "./context/toast-context";
import AuthPage from "./pages/AuthPage";
function App() {
  return (
    <ToastProvider>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guilds" element={<GuildsPage />} />
          <Route path="/guilds/new" element={<NewGuildPage />} />
          {/* auth */}
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
    </ToastProvider>
  );
}

export default App;
