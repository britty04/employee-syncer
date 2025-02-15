
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, KeyRound } from "lucide-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-teal-50">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,transparent_0%,#ffffff60_15%,#ffffff60_85%,transparent_100%)] pattern-grid-lg opacity-10" />
      <Card className="w-full max-w-md relative z-10 shadow-2xl">
        <CardHeader className="space-y-4 pb-8">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <User size={32} className="text-primary" />
          </div>
          <CardTitle className="text-2xl text-center">FR8 Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full text-lg h-11 transition-all hover:scale-[1.02]">
              Login
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Default credentials: admin / admin123
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
