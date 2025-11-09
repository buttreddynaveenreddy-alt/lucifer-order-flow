import { FoodItem } from "@/types/food";

export const menuItems: FoodItem[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: i % 2 === 0 ? `Veg Delight ${i + 1}` : `Non-Veg Special ${i + 1}`,
  type: i % 2 === 0 ? "Veg" : "Non-Veg",
  price: 100 + i * 5,
  img: `https://images.unsplash.com/photo-${1546069900 + i * 100}?w=400&h=300&fit=crop&q=80`,
  description: i % 2 === 0 
    ? "Fresh vegetables with aromatic spices" 
    : "Tender meat cooked to perfection",
}));
