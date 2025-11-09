import { FoodItem } from "@/types/food";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { ShoppingCart } from "lucide-react";

interface MenuItemProps {
  item: FoodItem;
  onAddToCart: (item: FoodItem) => void;
}

const MenuItem = ({ item, onAddToCart }: MenuItemProps) => {
  return (
    <Card className="overflow-hidden transition-smooth hover:shadow-hover hover:-translate-y-1 animate-scale-in group">
      <div className="relative h-48 overflow-hidden bg-gradient-card">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Badge
          variant={item.type === "Veg" ? "default" : "destructive"}
          className="absolute top-2 right-2"
        >
          {item.type}
        </Badge>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs">
            {item.restaurant}
          </Badge>
        </div>
        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
        <p className="text-xl font-bold text-primary">₹{item.price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onAddToCart(item)}
          className="w-full"
          size="sm"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuItem;
