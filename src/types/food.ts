export interface FoodItem {
  id: number;
  name: string;
  type: "Veg" | "Non-Veg";
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
