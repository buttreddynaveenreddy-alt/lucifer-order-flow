export type RestaurantType = "Indian" | "Chinese" | "Italian" | "Fast Food" | "Desserts" | "Beverages";

export interface FoodItem {
  id: number;
  name: string;
  type: "Veg" | "Non-Veg";
  restaurant: RestaurantType;
  price: number;
  img: string;
  description?: string;
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: "placed" | "preparing" | "out-for-delivery" | "delivered";
  timestamp: number;
}
