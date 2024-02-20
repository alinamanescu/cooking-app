const meals = [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      description: "Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
      price: 12.99,
    },
    {
      id: 2,
      name: "Chicken Tikka Masala",
      description: "Creamy tomato-based curry with tender chicken pieces, served with rice.",
      price: 14.99,
    },
    {
      id: 3,
      name: "Grilled Salmon",
      description: "Fresh salmon fillet grilled to perfection, served with roasted vegetables.",
      price: 16.99,
    },
    {
      id: 4,
      name: "Vegetable Stir-Fry",
      description: "Assorted vegetables stir-fried in a savory sauce, served with noodles.",
      price: 10.99,
    },
    {
      id: 5,
      name: "Margherita Pizza",
      description:
        "Classic Italian pizza topped with tomato sauce, mozzarella cheese, and basil leaves.",
      price: 11.99,
    },
    {
      id: 6,
      name: "Caesar Salad",
      description: "Fresh romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
      price: 8.99,
    },
    {
      id: 7,
      name: "Beef Burger",
      description: "Juicy beef patty with lettuce, tomato, onion, and pickles, served with fries.",
      price: 9.99,
    },
    {
      id: 8,
      name: "Fish and Chips",
      description: "Beer-battered fish fillets served with crispy fries and tartar sauce.",
      price: 13.99,
    },
    {
      id: 9,
      name: "Pad Thai",
      description: "Thai stir-fried rice noodles with shrimp, tofu, bean sprouts, and peanuts.",
      price: 15.99,
    },
    {
      id: 10,
      name: "Sushi Platter",
      description: "Assorted sushi rolls including California, spicy tuna, and salmon avocado.",
      price: 18.99,
    },
    {
      id: 11,
      name: "Chicken Caesar Wrap",
      description:
        "Grilled chicken, romaine lettuce, Parmesan cheese, and Caesar dressing wrapped in a tortilla.",
      price: 9.49,
    },
    {
      id: 12,
      name: "Mushroom Risotto",
      description:
        "Creamy Arborio rice cooked with mushrooms, onions, white wine, and Parmesan cheese.",
      price: 12.49,
    },
    {
      id: 13,
      name: "BBQ Ribs",
      description:
        "Tender pork ribs smothered in barbecue sauce, served with coleslaw and cornbread.",
      price: 17.99,
    },
    {
      id: 14,
      name: "Shrimp Scampi",
      description:
        "Garlicky shrimp sautéed in butter, white wine, and lemon juice, served over pasta.",
      price: 16.49,
    },
    {
      id: 15,
      name: "Vegetarian Lasagna",
      description: "Layers of pasta, marinara sauce, ricotta cheese, and assorted vegetables.",
      price: 13.49,
    },
    {
      id: 16,
      name: "Tofu Teriyaki Bowl",
      description:
        "Grilled tofu glazed with teriyaki sauce, served with steamed rice and vegetables.",
      price: 11.49,
    },
    {
      id: 17,
      name: "Beef Tacos",
      description:
        "Soft corn tortillas filled with seasoned ground beef, lettuce, cheese, and salsa.",
      price: 10.99,
    },
    {
      id: 18,
      name: "Eggplant Parmesan",
      description:
        "Breaded and fried eggplant slices layered with marinara sauce and melted mozzarella cheese.",
      price: 14.49,
    },
    {
      id: 19,
      name: "Chicken Noodle Soup",
      description:
        "Hearty soup made with chicken, vegetables, and egg noodles, seasoned to perfection.",
      price: 8.99,
    },
    {
      id: 20,
      name: "Beef Stroganoff",
      description:
        "Tender strips of beef cooked in a creamy mushroom sauce, served over egg noodles.",
      price: 15.99,
    },
    {
      id: 21,
      name: "Greek Salad",
      description:
        "Fresh lettuce, tomatoes, cucumbers, olives, onions, and feta cheese, dressed with olive oil and vinegar.",
      price: 9.49,
    },
    {
      id: 22,
      name: "Hawaiian Pizza",
      description: "Pizza topped with tomato sauce, cheese, ham, and pineapple.",
      price: 11.99,
    },
    {
      id: 23,
      name: "Beef Burrito",
      description:
        "Large flour tortilla filled with seasoned ground beef, rice, beans, cheese, and salsa.",
      price: 10.99,
    },
    {
      id: 24,
      name: "Lemon Herb Roast Chicken",
      description:
        "Roasted chicken seasoned with lemon, garlic, and herbs, served with roasted potatoes.",
      price: 16.99,
    },
    {
      id: 25,
      name: "Veggie Burger",
      description:
        "Plant-based patty made with vegetables and grains, served with lettuce, tomato, and vegan mayo.",
      price: 12.49,
    },
  ];
  
  // filter menu by ID
  
  const filterByID = (id = 1) => meals.find((meal) => meal.id === id);

  // get random (single) menu
  const getRandomMeal = () => {
    const randomIndex = Math.floor(Math.random() * meals.length);
    return meals[randomIndex];
  };

  export { meals, filterByID, getRandomMeal };