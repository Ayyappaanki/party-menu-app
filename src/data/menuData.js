const menuData = [
  
  {
    id: 1,
    name: "Spring Rolls",
    description:
      "Crispy rolls stuffed with vegetables.",
    category: "Starter",
    type: "veg",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=500",
    ingredients: [
      {
        name: "Cabbage",
        quantity: "100 gm",
      },
      {
        name: "Carrot",
        quantity: "50 gm",
      },
    ],
  },

  {
    id: 2,
    name: "Chicken Wings",
    description:
      "Spicy grilled chicken wings.",
    category: "Starter",
    type: "non-veg",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500",
    ingredients: [
      {
        name: "Chicken",
        quantity: "250 gm",
      },
      {
        name: "Spices",
        quantity: "50 gm",
      },
    ],
  },

  // MAIN COURSE
  {
    id: 3,
    name: "Paneer Butter Masala",
    description:
      "Paneer cubes cooked in creamy tomato gravy.",
    category: "Main Course",
    type: "veg",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500",
    ingredients: [
      {
        name: "Paneer",
        quantity: "250 gm",
      },
      {
        name: "Butter",
        quantity: "50 gm",
      },
      {
        name: "Tomato",
        quantity: "2 pcs",
      },
    ],
  },

  {
    id: 4,
    name: "Tandoori Chicken",
    description:
      "Traditional spicy grilled chicken.",
    category: "Main Course",
    type: "non-veg",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
    ingredients: [
      {
        name: "Chicken",
        quantity: "500 gm",
      },
      {
        name: "Curd",
        quantity: "100 ml",
      },
    ],
  },

  // DESSERT
  {
    id: 5,
    name: "Chocolate Brownie",
    description:
      "Rich chocolate dessert with soft texture.",
    category: "Dessert",
    type: "veg",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
    ingredients: [
      {
        name: "Chocolate",
        quantity: "200 gm",
      },
      {
        name: "Butter",
        quantity: "100 gm",
      },
    ],
  },

  {
    id: 6,
    name: "Ice Cream Sundae",
    description:
      "Vanilla ice cream with toppings.",
    category: "Dessert",
    type: "veg",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
    ingredients: [
      {
        name: "Ice Cream",
        quantity: "2 Scoops",
      },
      {
        name: "Chocolate Syrup",
        quantity: "50 ml",
      },
    ],
  },

  // SIDES
  {
    id: 7,
    name: "French Fries",
    description:
      "Crispy golden potato fries.",
    category: "Sides",
    type: "veg",
    image:
      "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500",
    ingredients: [
      {
        name: "Potato",
        quantity: "200 gm",
      },
      {
        name: "Salt",
        quantity: "10 gm",
      },
    ],
  },

  {
    id: 8,
    name: "Garlic Bread",
    description:
      "Toasted bread with garlic butter.",
    category: "Sides",
    type: "veg",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500",
    ingredients: [
      {
        name: "Bread",
        quantity: "4 slices",
      },
      {
        name: "Garlic Butter",
        quantity: "30 gm",
      },
    ],
  },
];

export default menuData;