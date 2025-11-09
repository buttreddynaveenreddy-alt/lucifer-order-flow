import { useState } from "react";
import { menuItems } from "@/lib/menuData";
import MenuItem from "@/components/MenuItem";
import { FoodItem, RestaurantType } from "@/types/food";
import { getCart, saveCart } from "@/lib/storage";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu = () => {
  const [typeFilter, setTypeFilter] = useState<"All" | "Veg" | "Non-Veg">("All");
  const [restaurantFilter, setRestaurantFilter] = useState<RestaurantType | "All">("All");
  const { toast } = useToast();

  const filteredItems = menuItems.filter((item) => {
    const matchesType = typeFilter === "All" || item.type === typeFilter;
    const matchesRestaurant = restaurantFilter === "All" || item.restaurant === restaurantFilter;
    return matchesType && matchesRestaurant;
  });

  const handleAddToCart = (item: FoodItem) => {
    const cart = getCart();
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    saveCart(cart);
    toast({
      title: "Added to Cart",
      description: `${item.name} has been added to your cart`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 animate-fade-in">🍴 Our Menu</h1>
        <p className="text-muted-foreground mb-8 animate-fade-in">
          Explore dishes from various restaurants
        </p>

        <div className="mb-6 animate-slide-up">
          <h3 className="text-sm font-semibold mb-2">Restaurant Type</h3>
          <Tabs value={restaurantFilter} onValueChange={(v) => setRestaurantFilter(v as typeof restaurantFilter)}>
            <TabsList className="flex-wrap h-auto">
              <TabsTrigger value="All">All</TabsTrigger>
              <TabsTrigger value="Indian">Indian</TabsTrigger>
              <TabsTrigger value="Chinese">Chinese</TabsTrigger>
              <TabsTrigger value="Italian">Italian</TabsTrigger>
              <TabsTrigger value="Fast Food">Fast Food</TabsTrigger>
              <TabsTrigger value="Desserts">Desserts</TabsTrigger>
              <TabsTrigger value="Beverages">Beverages</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="mb-8 animate-slide-up">
          <h3 className="text-sm font-semibold mb-2">Food Type</h3>
          <Tabs value={typeFilter} onValueChange={(v) => setTypeFilter(v as typeof typeFilter)}>
            <TabsList>
              <TabsTrigger value="All">All Items</TabsTrigger>
              <TabsTrigger value="Veg">Vegetarian</TabsTrigger>
              <TabsTrigger value="Non-Veg">Non-Vegetarian</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No items found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
