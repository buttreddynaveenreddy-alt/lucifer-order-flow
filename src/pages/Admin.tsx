import { useState, useEffect } from "react";
import { getOrders, updateOrderStatus } from "@/lib/storage";
import { Order } from "@/types/food";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Package, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

const Admin = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    const allOrders = getOrders();
    setOrders(allOrders.reverse()); // Show latest first
  };

  const handleUpdateStatus = (orderId: string, status: Order["status"]) => {
    updateOrderStatus(orderId, status);
    loadOrders();
    toast({
      title: "Order Updated",
      description: `Order #${orderId} has been marked as ${status.replace("-", " ")}`,
    });
  };

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "placed":
        return "default";
      case "preparing":
        return "secondary";
      case "out-for-delivery":
        return "outline";
      case "delivered":
        return "destructive";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 animate-fade-in">
          <Shield className="inline mr-2" />
          Admin Portal
        </h1>
        <p className="text-muted-foreground mb-8 animate-fade-in">
          Manage all orders and track deliveries
        </p>

        {orders.length === 0 ? (
          <Card className="p-12 text-center animate-scale-in">
            <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-semibold mb-2">No orders yet</h2>
            <p className="text-muted-foreground">
              Orders will appear here once customers place them
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.map((order, index) => (
              <Card
                key={order.id}
                className="p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">
                      Order #{order.id}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {new Date(order.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <Badge variant={getStatusColor(order.status)}>
                    {order.status.replace("-", " ")}
                  </Badge>
                </div>

                <div className="space-y-2 mb-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="text-sm flex justify-between">
                      <span>
                        {item.name} x {item.quantity}
                      </span>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mb-4">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-primary">₹{order.total}</span>
                  </div>
                </div>

                {order.status !== "delivered" && (
                  <div className="space-y-2">
                    {order.status === "placed" && (
                      <Button
                        className="w-full"
                        size="sm"
                        onClick={() =>
                          handleUpdateStatus(order.id, "preparing")
                        }
                      >
                        Mark as Preparing
                      </Button>
                    )}
                    {order.status === "preparing" && (
                      <Button
                        className="w-full"
                        size="sm"
                        onClick={() =>
                          handleUpdateStatus(order.id, "out-for-delivery")
                        }
                      >
                        Mark as Out for Delivery
                      </Button>
                    )}
                    {order.status === "out-for-delivery" && (
                      <Button
                        className="w-full"
                        size="sm"
                        variant="secondary"
                        onClick={() =>
                          handleUpdateStatus(order.id, "delivered")
                        }
                      >
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Mark as Delivered
                      </Button>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
