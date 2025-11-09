import { FoodItem, RestaurantType } from "@/types/food";

const restaurants: RestaurantType[] = ["Indian", "Chinese", "Italian", "Fast Food", "Desserts", "Beverages"];

const indianItems = [
  { name: "Samosa", desc: "Crispy fried pastry with spiced potato filling", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop" },
  { name: "Paneer Tikka", desc: "Grilled cottage cheese with aromatic spices", img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop" },
  { name: "Butter Chicken", desc: "Creamy tomato-based chicken curry", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop" },
  { name: "Biryani", desc: "Fragrant rice with spiced meat", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop" },
  { name: "Masala Dosa", desc: "South Indian crispy crepe with potato filling", img: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop" },
  { name: "Chole Bhature", desc: "Spicy chickpeas with fried bread", img: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400&h=300&fit=crop" },
];

const chineseItems = [
  { name: "Spring Rolls", desc: "Crispy rolls with veggie filling", img: "https://images.unsplash.com/photo-1619623012103-ee30ba3e8e37?w=400&h=300&fit=crop" },
  { name: "Hakka Noodles", desc: "Stir-fried noodles with vegetables", img: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&h=300&fit=crop" },
  { name: "Manchurian", desc: "Deep-fried veggie balls in spicy sauce", img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop" },
  { name: "Fried Rice", desc: "Stir-fried rice with mixed vegetables", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop" },
  { name: "Szechuan Chicken", desc: "Spicy chicken in Szechuan sauce", img: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop" },
];

const italianItems = [
  { name: "Margherita Pizza", desc: "Classic pizza with tomato and mozzarella", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop" },
  { name: "Pasta Alfredo", desc: "Creamy white sauce pasta", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop" },
  { name: "Bruschetta", desc: "Toasted bread with tomato topping", img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop" },
  { name: "Lasagna", desc: "Layered pasta with meat and cheese", img: "https://images.unsplash.com/photo-1619895092538-128341789043?w=400&h=300&fit=crop" },
  { name: "Tiramisu", desc: "Coffee-flavored Italian dessert", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop" },
];

const fastFoodItems = [
  { name: "Burger", desc: "Juicy beef burger with fresh toppings", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
  { name: "French Fries", desc: "Crispy golden potato fries", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop" },
  { name: "Hot Dog", desc: "Classic hot dog with mustard", img: "https://images.unsplash.com/photo-1612392061525-c3606c20a44b?w=400&h=300&fit=crop" },
  { name: "Chicken Wings", desc: "Spicy fried chicken wings", img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop" },
  { name: "Nachos", desc: "Tortilla chips with cheese dip", img: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=400&h=300&fit=crop" },
  { name: "Sandwich", desc: "Club sandwich with multiple layers", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop" },
  { name: "Tacos", desc: "Mexican tacos with salsa", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop" },
];

const dessertItems = [
  { name: "Chocolate Cake", desc: "Rich chocolate layered cake", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop" },
  { name: "Ice Cream", desc: "Assorted flavored ice cream", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop" },
  { name: "Brownie", desc: "Fudgy chocolate brownie", img: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&h=300&fit=crop" },
  { name: "Donut", desc: "Glazed sweet donut", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop" },
  { name: "Cheesecake", desc: "Creamy New York style cheesecake", img: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=400&h=300&fit=crop" },
];

const beverageItems = [
  { name: "Coffee", desc: "Hot brewed coffee", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop" },
  { name: "Fresh Juice", desc: "Freshly squeezed orange juice", img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop" },
  { name: "Smoothie", desc: "Mixed fruit smoothie", img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop" },
  { name: "Milkshake", desc: "Creamy chocolate milkshake", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop" },
  { name: "Mojito", desc: "Refreshing mint mojito", img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop" },
];

export const menuItems: FoodItem[] = [
  // Indian - 6 items
  ...indianItems.map((item, i) => ({
    id: i + 1,
    name: item.name,
    type: i % 2 === 0 ? "Veg" as const : "Non-Veg" as const,
    restaurant: "Indian" as RestaurantType,
    price: 120 + i * 10,
    img: item.img,
    description: item.desc,
  })),
  // Chinese - 5 items
  ...chineseItems.map((item, i) => ({
    id: i + 7,
    name: item.name,
    type: i % 3 === 0 ? "Non-Veg" as const : "Veg" as const,
    restaurant: "Chinese" as RestaurantType,
    price: 130 + i * 10,
    img: item.img,
    description: item.desc,
  })),
  // Italian - 5 items
  ...italianItems.map((item, i) => ({
    id: i + 12,
    name: item.name,
    type: "Veg" as const,
    restaurant: "Italian" as RestaurantType,
    price: 150 + i * 15,
    img: item.img,
    description: item.desc,
  })),
  // Fast Food - 7 items
  ...fastFoodItems.map((item, i) => ({
    id: i + 17,
    name: item.name,
    type: i % 2 === 0 ? "Veg" as const : "Non-Veg" as const,
    restaurant: "Fast Food" as RestaurantType,
    price: 100 + i * 12,
    img: item.img,
    description: item.desc,
  })),
  // Desserts - 5 items
  ...dessertItems.map((item, i) => ({
    id: i + 24,
    name: item.name,
    type: "Veg" as const,
    restaurant: "Desserts" as RestaurantType,
    price: 80 + i * 10,
    img: item.img,
    description: item.desc,
  })),
  // Beverages - 5 items
  ...beverageItems.map((item, i) => ({
    id: i + 29,
    name: item.name,
    type: "Veg" as const,
    restaurant: "Beverages" as RestaurantType,
    price: 60 + i * 8,
    img: item.img,
    description: item.desc,
  })),
];
