import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, Menu, ShoppingCart, Package, Shield, Info, LogIn, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";
import { getUser } from "@/lib/auth";
import { Button } from "./ui/button";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    const checkUser = () => setUser(getUser());
    window.addEventListener("storage", checkUser);
    const interval = setInterval(checkUser, 1000);
    return () => {
      window.removeEventListener("storage", checkUser);
      clearInterval(interval);
    };
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/menu", label: "Menu", icon: Menu },
    { path: "/cart", label: "Cart", icon: ShoppingCart },
    { path: "/tracking", label: "Tracking", icon: Package },
    { path: "/admin", label: "Admin", icon: Shield },
    { path: "/about", label: "About", icon: Info },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🔥</span>
            <span className="text-xl font-bold">Lucifer Catering</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-lg transition-smooth hover:bg-white/20",
                    isActive && "bg-white/30 font-semibold"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            {user ? (
              <Link
                to="/dashboard"
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-lg transition-smooth hover:bg-white/20",
                  location.pathname === "/dashboard" && "bg-white/30 font-semibold"
                )}
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            ) : (
              <Button
                onClick={() => navigate("/login")}
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-white/20"
              >
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
            )}
          </nav>

          <nav className="flex md:hidden items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "p-2 rounded-lg transition-smooth hover:bg-white/20",
                    isActive && "bg-white/30"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
            {user ? (
              <Link
                to="/dashboard"
                className={cn(
                  "p-2 rounded-lg transition-smooth hover:bg-white/20",
                  location.pathname === "/dashboard" && "bg-white/30"
                )}
              >
                <LayoutDashboard className="h-5 w-5" />
              </Link>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="p-2 rounded-lg transition-smooth hover:bg-white/20"
              >
                <LogIn className="h-5 w-5" />
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
