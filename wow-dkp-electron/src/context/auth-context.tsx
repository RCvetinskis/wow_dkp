import { User } from "@/types/general";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext<{
  user: User | null;
  setUser: (u: User | null) => void;
}>({
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  });

  useEffect(() => {
    const handler = () => {
      const raw = localStorage.getItem("user");
      setUser(raw ? JSON.parse(raw) : null);
    };

    globalThis.addEventListener("auth-change", handler);
    return () => globalThis.removeEventListener("auth-change", handler);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
