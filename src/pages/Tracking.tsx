import { useState, useEffect } from "react";
import { getOrders } from "@/lib/storage";
import { Order } from "@/types/food";
import OrderTracker from "@/components/OrderTracker";
import { Card } from "@/components/ui/card";
import { Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Tracking = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadOrders = () => {
      const allOrders = getOrders();
      setOrders(allOrders.reverse()); // Show latest first
    };
    loadOrders();

    // Simulate order progress
    const interval = setInterval(() => {
      const allOrders = getOrders();
      if (allOrders.length > 0) {
        const latestOrder = allOrders[allOrders.length - 1];
        if (latestOrder.status !== "delivered") {
          // Progress the order status
          const statuses: Order["status"][] = ["placed", "preparing", "out-for-delivery", "delivered"];
          const currentIndex = statuses.indexOf(latestOrder.status);
          if (currentIndex < statuses.length - 1) {
            // Update would happen here - for demo, we'll just reload
            loadOrders();
          }
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const latestOrder = orders[0];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 animate-fade-in">
          <Package className="inline mr-2" />
          Order Tracking
        </h1>

        {!latestOrder ? (
          <Card className="p-12 text-center animate-scale-in">
            <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-semibold mb-2">No active orders</h2>
            <p className="text-muted-foreground mb-6">
              Place an order to track its progress
            </p>
            <Button onClick={() => navigate("/menu")}>Browse Menu</Button>
          </Card>
        ) : (
          <div className="space-y-8 animate-slide-up">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Order #{latestOrder.id}
              </h2>
              <OrderTracker order={latestOrder} />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Order Details</h3>
              <div className="space-y-2">
                {latestOrder.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span className="font-semibold">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">₹{latestOrder.total}</span>
                  </div>
                </div>
              </div>
            </Card>

            {orders.length > 1 && (
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Previous Orders</h3>
                <div className="space-y-2">
                  {orders.slice(1, 6).map((order) => (
                    <div
                      key={order.id}
                      className="flex justify-between items-center p-3 bg-accent/30 rounded-lg text-sm"
                    >
                      <span>Order #{order.id}</span>
                      <span className="text-muted-foreground capitalize">
                        {order.status.replace("-", " ")}
                      </span>
                      <span className="font-semibold">₹{order.total}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracking;
