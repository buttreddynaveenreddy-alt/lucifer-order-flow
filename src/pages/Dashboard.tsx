import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, logout } from "@/lib/auth";
import { getOrders } from "@/lib/storage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LogOut, ShoppingBag, Package, TrendingUp, User } from "lucide-react";
import { Order } from "@/types/food";

const Dashboard = () => {
  const [user, setUser] = useState(getUser());
  const [orders, setOrders] = useState<Order[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    setOrders(getOrders());
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const totalSpent = orders.reduce((sum, order) => sum + order.total, 0);
  const completedOrders = orders.filter(o => o.status === "delivered").length;

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {user?.username}!</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-hover transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{orders.length}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {completedOrders} completed
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-hover transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">₹{totalSpent}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Across all orders
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-hover transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Account</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm font-medium">{user?.email}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Member since today
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Recent Orders
            </CardTitle>
            <CardDescription>Track your order history and status</CardDescription>
          </CardHeader>
          <CardContent>
            {orders.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No orders yet</p>
                <Button onClick={() => navigate("/menu")} className="mt-4">
                  Start Ordering
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.slice().reverse().map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">Order #{order.id.slice(0, 8)}</span>
                        <Badge variant={order.status === "delivered" ? "default" : "secondary"}>
                          {order.status.replace("-", " ")}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {order.items.length} items • ₹{order.total}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(order.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => navigate("/tracking")}
                    >
                      Track
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
