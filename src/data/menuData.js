const menuData = [
  {
    id: 1,
    name: "Tandoori Chicken",
    description:
      "Spicy grilled chicken with traditional Indian spices.",
    category: "Main Course",
    type: "non-veg",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
    ingredients: [
      { name: "Chicken", quantity: "500 gm" },
      { name: "Curd", quantity: "100 ml" },
      { name: "Spices", quantity: "50 gm" },
    ],
  },

  {
    id: 2,
    name: "Paneer Butter Masala",
    description:
      "Paneer cubes cooked in creamy tomato gravy.",
    category: "Main Course",
    type: "veg",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500",
    ingredients: [
      { name: "Paneer", quantity: "250 gm" },
      { name: "Butter", quantity: "50 gm" },
      { name: "Tomato", quantity: "2 pcs" },
    ],
  },

  {
    id: 3,
    name: "Spring Rolls",
    description:
      "Crispy rolls stuffed with vegetables.",
    category: "Starter",
    type: "veg",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=500",
    ingredients: [
      { name: "Cabbage", quantity: "100 gm" },
      { name: "Carrot", quantity: "50 gm" },
    ],
  },

  {
    id: 4,
    name: "Chocolate Brownie",
    description:
      "Rich chocolate dessert with soft texture.",
    category: "Dessert",
    type: "veg",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
    ingredients: [
      { name: "Chocolate", quantity: "200 gm" },
      { name: "Butter", quantity: "100 gm" },
    ],
  },
];

export default menuData;