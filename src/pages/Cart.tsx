import { useState, useEffect } from "react";
import { getCart, saveCart, clearCart, saveOrder } from "@/lib/storage";
import { CartItem, Order } from "@/types/food";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const updateQuantity = (id: number, change: number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter((item) => item.quantity > 0);

    setCart(updatedCart);
    saveCart(updatedCart);
  };

  const removeItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    saveCart(updatedCart);
    toast({
      title: "Item Removed",
      description: "Item has been removed from your cart",
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast({
        title: "Cart is Empty",
        description: "Please add items to your cart before placing an order",
        variant: "destructive",
      });
      return;
    }

    const order: Order = {
      id: Date.now().toString(),
      items: cart,
      total,
      status: "placed",
      timestamp: Date.now(),
    };

    saveOrder(order);
    clearCart();
    setCart([]);

    toast({
      title: "Order Placed!",
      description: "Your order has been placed successfully",
    });

    navigate("/tracking");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 animate-fade-in">
          <ShoppingBag className="inline mr-2" />
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <Card className="p-12 text-center animate-scale-in">
            <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Add some delicious items from our menu
            </p>
            <Button onClick={() => navigate("/menu")}>Browse Menu</Button>
          </Card>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <Card key={item.id} className="p-6 animate-fade-in">
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.type}</p>
                    <p className="text-primary font-bold mt-1">₹{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}

            <Card className="p-6 bg-accent/30">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold">Total:</span>
                <span className="text-3xl font-bold text-primary">₹{total}</span>
              </div>
              <Button onClick={handlePlaceOrder} className="w-full" size="lg">
                Place Order
              </Button>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
