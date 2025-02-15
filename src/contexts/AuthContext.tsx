
import { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface AuthContextType {
  user: { username: string; role: string } | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ username: string; role: string } | null>(null);
  const navigate = useNavigate();

  const login = (username: string, password: string) => {
    // Check for correct credentials (case-insensitive username)
    if (username.toLowerCase() === "admin" && password === "admin123") {
      setUser({ username: "admin", role: "admin" });
      toast.success("Welcome back, Admin!");
      navigate("/");
    } else {
      toast.error("Invalid credentials. Use admin/admin123");
    }
  };

  const logout = () => {
    setUser(null);
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
