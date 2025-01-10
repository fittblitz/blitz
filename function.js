const keyword = [
    "oats overnight", 
    "oats banana pancakes", 
    "oats upma", 
    "oats smoothie bowl", 
    "oats savory masala",
    "oats and yogurt parfait",
    "oats porridge with fruits and nuts",
    "oats vegetable khichdi",
    "oats dosa",
    "oats uthappam",
    "oats and lentil soup",
    "oats risotto with veggies",
    "oats spinach pulao",
    "oats and paneer paratha",
    "oats Stuffed Capsicum",
    "oats burger patties",
    "oats vegetable paratha",
    "moong dal khichdi",
    "moong dal soup",
    "moong dal chilla",
    "moong dal tikki",
    "moong dal salad",
    "moong dal paratha",
    "moong dal dosa",
    "moong dal pulao",
    "moong dal and spinach soup",
    "moong dal and vegetable stew",
    "moong dal with palak",
    "moong dal porridge",
    "moong dal and methi thepla",
    "moong dal pancakes with vegetables",
    "moong dal khichdi with vegetables",
    "moong dal bhurji",
    "moong dal pakora",
    "moong dal vada",
    "moong dal and tomato curry",
    "moong dal and carrot soup",
    "moong dal masala",
    "moong dal and cauliflower sabzi",
    "moong dal and bottle gourd curry",
    "moong dal tadka",
    "moong dal and cucumber salad",
    "moong dal and bell pepper stir fry",
    "moong dal and tofu stir fry",
    "moong dal biryani",
    "moong dal and fenugreek leaves sabzi",
    "moong dal and mushroom stir fry",
    "moong dal stuffed paratha",
    "moong dal sprouts chaat",
    "Amla Ginger Shot",
    "Tulsi Lemon Infusion",
    "Turmeric Ginger Elixir",
    "Cucumber Mint Cooler",
    "Tomato Coriander Detox Drink",
    "Green Tea with Lemon",
    "Spinach Cucumber Refresher",
    "Beetroot Carrot Juice",
    "Hibiscus Iced Tea",
    "Pomegranate Mint Fizz",
    "Lemon Coconut Water Infusion",
    "Coriander Detox Water",
    "Ginger Lemon Jeera Drink",
    "Carrot Tomato Cooler",
    "Cabbage Celery Juice",
    "Lemon Turmeric Buttermilk",
    "Moringa Herbal Drink",
    "Neem Coriander Juice",
    "Bael Sherbet",
    "Mint Cucumber Sparkler",
    "Spinach-Cucumber Juice",
    "Beetroot Carrot Juice",
    "Moringa Lemon Water",
    "Coriander Spinach Cooler",
    "Amla Ginger Shot",
    "Mint Cucumber Drink",
    "Tomato Celery Juice",
    "Curry Leaf Infusion",
    "Kale Cucumber Juice",
    "Lemon Coconut Water",
    "Broccoli Spinach Juice",
    "Hibiscus Coriander Drink",
    "Drumstick Leaf Cooler",
    "Neem Lemon Tonic",
    "Cucumber Coriander Juice",
    "Ragi Buttermilk",
    "Lauki Mint Juice",
    "Fenugreek Seed Water",
    "Black Chana Soup",
    "Palak Tomato Juice",
    "Jowar Vegetable Upma",
    "Jowar Pancakes (Chilla) with Spinach",
    "Jowar Idli",
    "Jowar Dosa",
    "Jowar and Oats Porridge",
    "Jowar Vegetable Paratha",
    "Jowar Methi Thepla",
    "Jowar Poha with Vegetables",
    "Jowar and Lentil Adai",
    "Jowar Uttapam",
    "Jowar Khichdi with Moong Dal",
    "Jowar Roti with Vegetable Curry",
    "Jowar Bhakri with Green Chutney",
    "Jowar and Vegetable Pulao",
    "Jowar Veggie Wraps",
    "Jowar Biryani with Paneer",
    "Jowar Stuffed Paratha with Tofu Filling",
    "Jowar Tacos with Rajma Filling",
    "Jowar Flour Dumplings (Muthia)",
    "Jowar and Sprouts Salad",
    "Jowar Vegetable Handvo",
    "Jowar Crackers with Hummus",
    "Jowar Masala Puffs",
    "Jowar Onion Pakoras (Air-Fried)",
    "Jowar Masala Pancakes",
    "Jowar Veggie Cutlets",
    "Jowar Masala Balls (Steamed)",
    "Jowar Flour Sticks with Herbs",
    "Jowar Chakli (Baked)",
    "Jowar Popcorn Snack",
    "Jowar and Lentil Soup",
    "Jowar and Spinach Soup",
    "Jowar and Mixed Veggie Salad",
    "Jowar and Chickpea Salad",
    "Jowar and Grilled Paneer Salad",
    "Jowar Millet Soup with Herbs",
    "Jowar and Tomato Soup",
    "Jowar and Sprouts Soup",
    "Jowar Veggie Burgers",
    "Jowar Noodles with Stir-Fry Veggies",
    "Jowar Veggie Pizza Base",
    "Jowar Sushi Rolls",
    "Jowar Pasta with Tomato Basil Sauce",
    "Jowar Stuffed Bell Peppers",
    "Jowar Risotto with Mushrooms",
    "Jowar Flour Nachos with Salsa",
    "Jowar Wrap with Grilled Chicken",
    "Jowar Idli",
    "Mango Pineapple Smoothie",
    "Papaya Coconut Smoothie",
    "Banana Coconut Water Smoothie",
    "Pineapple Smoothie",
    "Mango Smoothie",
    "Kiwi Mango Smoothie",
    "Guava Lime Smoothie",
    "Pineapple Kale Smoothie",
    "Coconut Mango Smoothie",
    "Dragonfruit Pineapple Smoothie",
    "Orange Carrot Smoothie",
    "Lemon Mint Watermelon Smoothie",
    "Grapefruit Strawberry Smoothie",
    "Lime Blueberry Smoothie",
    "Spinach Pineapple Smoothie",
    "Kale Apple Banana Smoothie",
    "Avocado Mango Smoothie",
    "Cucumber Kiwi Smoothie",
    "Green Grapes Mint Smoothie",
    "Banana Cranberry Smoothie",
    "Apple Cinnamon Smoothie",
    "Pear Ginger Smoothie",
    "Apple Kale Smoothie",
    "Apple Carrot Smoothie",
    "Pear Spinach Smoothie",
    "Cherry Banana Smoothie",
    "Plum Raspberry Smoothie",
    "Watermelon Cucumber Smoothie",
    "Watermelon Mint Smoothie",
    "Nutty Seed Mix Smoothie",
    "Plum Smoothie",
    "Plum Smoothie with Optional Cranberries",
    "Coconut Water Chia Drink",
];

const recipeDetails = {
    "oats overnight": {
        ingredients: [
            "Rolled oats (½ cup)",
            "Milk (or plant-based alternative) (¾ cup)",
            "Chia seeds (1 tbsp)",
            "Sweetener (honey/maple syrup) (optional)",
            "Toppings: fruit slices, peanut butter, or nuts"
        ],
        steps: [
            "Mix oats, milk, chia seeds, and sweetener in a jar.",
            "Let it sit in the fridge overnight.",
            "Top with your choice of fruit or peanut butter before serving."
        ]
    },
    "oats banana pancakes": {
        ingredients: [
            "Rolled oats (1 cup, ground into flour)",
            "Banana (1 ripe)",
            "Egg (1) or flaxseed meal (1 tbsp + 3 tbsp water)",
            "Milk (¼ cup)",
            "Baking powder (½ tsp)",
            "Cinnamon (optional)"
        ],
        steps: [
            "Blend all ingredients until smooth",
            "Cook small pancakes on a non-stick skillet over medium heat",
            "Serve with fresh fruit or a drizzle of honey"
        ]
    },
    "oats upma":{
        ingredients:[
            "Rolled oats (1 cup)",
            "Mixed vegetables (carrot, peas, beans) (½ cup)",
"Mustard seeds (1 tsp)",
"Curry leaves (5-6)",
"Onion (1, chopped)",
"Green chili (1-2, chopped)",
"Spices: turmeric (¼ tsp), salt to taste"
        ],
        steps:[
            "Dry roast oats for 3-4 minutes and set aside",
            "Heat oil, add mustard seeds, curry leaves, and onions, saute",
            "Add vegetables, spices, and cook until soft",
            "Add oats and water (¾ cup), cook until absorbed"
        ] 
    },

    "oats smoothie bowl":{
        ingredients:[
            "Rolled oats (¼ cup)",
"Frozen banana (1)",
"Almond milk (½ cup)",
"Greek yogurt (2 tbsp)",
"Toppings: berries, nuts, seeds, granola"
        ],
        steps:[
            "Blend oats, banana, almond milk, and yogurt until creamy",
            "Pour into a bowl and top with your favorite toppings"
        ] 
    },

    "oats savory masala":{
        ingredients:[
            "Rolled oats (1 cup)",
"Mixed vegetables (½ cup)",
"Tomato (1, chopped)",
"Onion (1, chopped)",
"Ginger-garlic paste (½ tsp)",
"Spices: turmeric, red chili powder, garam masala, salt (to taste)",
"Water (1½ cups)"
        ],
        steps:[
            "Roast oats and set aside",
            "Sauté onions, tomato, ginger-garlic paste; add spices and veggies",
"Add water, bring to a boil, and mix in oats",
"Cook for 5-7 minutes, stirring occasionally"
        ] 
    },

    "oats and yogurt parfait":{
        ingredients:[
            "Rolled oats (¼ cup)",
"Greek yogurt (½ cup)",
"Fruits (berries, banana slices)",
"Nuts and seeds for topping",
"Sweetener (optional)"
        ],
        steps:[
            "Layer oats, yogurt, and fruits in a glass or jar",
            "Repeat the layers and top with nuts and seeds",
            "Chill for 10-15 minutes or serve immediately"
        ] 
    },

    "oats porridge with fruits and nuts":{
        ingredients:[
            "Rolled oats (½ cup)",
"Milk or water (1 cup)",
"Sweetener (optional)",
"Toppings: fruits (apple, banana, berries), nuts (almonds, walnuts), seeds (chia, flax)"
        ],
        steps:[
            "Cook oats in milk or water over medium heat until creamy",
"Add sweetener if needed",
"Serve with fruits, nuts, and seeds on top"
        ] 
    },

    "oats vegetable khichdi":{
        ingredients:[
            "Rolled oats (½ cup)",
"Moong dal (split green gram) (¼ cup)",
"Mixed vegetables (carrot, peas, beans) (½ cup)",
"Onion (1, chopped)",
"Tomato (1, chopped)",
"Ginger-garlic paste (½ tsp)",
"Spices: turmeric (¼ tsp), cumin seeds (½ tsp), salt to taste",
"Water (2 cups)"
        ],
        steps:[
            "Wash moong dal and soak for 10 minutes",
"Heat oil, temper cumin seeds, and sauté onion and ginger-garlic paste",
"Add tomato, vegetables, spices, and cook for 3-4 minutes",
"Add dal, oats, water, and cook for 10-12 minutes until soft"
        ] 
    },

    "oats dosa":{
        ingredients:[
            "Rolled oats (1 cup, ground into flour)",
"Rice flour (½ cup)",
"Semolina (rava) (¼ cup)",
"Curd (½ cup)",
"Water (as needed)",
"Onion, green chili, and coriander (finely chopped)"
        ],
        steps:[
            "Mix oats flour, rice flour, semolina, curd, and water to make a thin batter",
"Add chopped onion, chili, and coriander",
"Heat a non-stick pan and pour batter in a circular motion",
"Cook until crisp and serve with chutney"
        ] 
    },

    "oats uthappam":{
        ingredients:[
            "Oats (1 cup, ground into flour)",
            "Semolina (rava) (½ cup)",
            "Curd (½ cup)",
            "Vegetables (onion, tomato, capsicum, grated carrot)",
            "Salt, green chili, and coriander to taste"
        ],
        steps:[
            "Mix oats flour, semolina, curd, and water into a thick batter",
            "Add salt and let it rest for 10 minutes",
            "Heat a pan, pour batter, and spread lightly. Top with veggies",
            "Cook on both sides and serve with chutney"
        ] 
    },

    "oats and lentil soup":{
        ingredients:[
            "Rolled oats (¼ cup)",
            "Red lentils (masoor dal) (½ cup)",
            "Onion, carrot, celery (chopped)",
            "Garlic (2 cloves, minced)",
            "Vegetable stock (3 cups)",
            "Spices: cumin, coriander, black pepper"
        ],
        steps:[
            "Sauté onion, garlic, carrot, and celery in olive oil",
            "Add lentils, oats, stock, and spices",
            "Simmer for 20-25 minutes until soft. Blend for a creamy texture if desired"
        ] 
    },

    "oats risotto with veggies":{
        ingredients:[
            "Rolled oats (1 cup)",
            "Mixed vegetables (mushrooms, zucchini, spinach) (1 cup)",
            "Onion (1, chopped)",
            "Garlic (2 cloves, minced)",
            "Vegetable stock (2 cups)",
            "Parmesan cheese (optional)"
        ],
        steps:[
            "Saute onion and garlic in olive oil. Add vegetables and cook",
            "Add oats and lightly toast them",
            "Gradually add stock, stirring until creamy. Top with Parmesan"
        ] 
    },
    "oats spinach pulao":{
        ingredients:[
            "Rolled oats (1 cup)",
            "Spinach (chopped) (1 cup)",
            "Onion (1, sliced)",
            "Ginger-garlic paste (½ tsp)",
            "Spices: cumin, turmeric, garam masala, salt"
        ],
        steps:[
            "Dry roast oats and set aside",
            "Sauté cumin, onion, ginger-garlic, and spinach. Add spices",
            "Add roasted oats and 1 cup water. Cook until fluffy"
        ] 
    },
    "oats and paneer paratha":{
        ingredients:[
            "Oats (½ cup, powdered)",
            "Whole wheat flour (1 cup)",
            "Paneer (grated) (½ cup)",
            "Spices: chili, cumin, coriander, salt"
        ],
        steps:[
            "Mix oats and wheat flour with water to form dough",
            "Prepare a paneer stuffing with spices",
            "Roll out dough, add stuffing, seal, and roll again",
            "Cook on a pan until golden brown" 
        ] 
    },
    "oats stuffed capsicum":{
        ingredients:[
            "Capsicum (3-4, halved and deseeded)",
            "Rolled oats (½ cup)",
            "Vegetables (carrot, peas, corn)",
            "Spices: chili, garam masala, salt",
            "Grated cheese (optional)"
        ],
        steps:[
            "Sauté veggies with spices and mix with oats",
            "Stuff the capsicum halves with the mixture",
            "Bake or cook in a pan until capsicum softens"
        ] 
    },
    "oats burger patties":{
        ingredients:[
            "Rolled oats (½ cup)",
            "Boiled potato (1, mashed)",
            "Vegetables (carrot, peas, onion, corn)",
            "Spices: chili, garam masala, salt",
            "Breadcrumbs (optional for coating)"
        ],
        steps:[
            "Mix oats, mashed potato, veggies, and spices",
            "Shape into patties and coat with breadcrumbs",
            "Pan-fry or bake until golden"
        ] 
    },
    "oats vegetable paratha":{
        ingredients:[
            "Rolled oats (½ cup, powdered)",
            "Whole wheat flour (1½ cups)",
            "Mixed vegetables (grated carrot, finely chopped spinach, boiled peas) (½ cup)",
            "Spices: Cumin powder, coriander powder, salt, red chili powder (to taste)",
            "Water (as needed)"
        ],
        steps:[
            "Combine oats flour, wheat flour, and vegetables in a bowl and Add spices",
            "Gradually add water and knead into a soft dough. Let it rest for 10-15 minutes",
            "Roll small balls of dough into parathas and cook on a hot griddle with a little oil",
            "Serve with curd"
        ] 
    },
    "moong dal khichdi":{
        ingredients:[
            "1 cup moong dal",
            "1/2 cup rice",
            "1 onion (chopped)",
            "1 tomato (chopped)",
            "1/2 tsp turmeric powder",
            "1/2 tsp cumin seeds",
            "Salt to taste",
            "1 tbsp ghee or oil",
            "Water (3-4 cups)"
        ],
        steps:[
            "Wash rice and moong dal together",
            "Heat ghee/oil in a pan, add cumin seeds",
            "Add onions and tomatoes, sauté till soft",
            "Add turmeric powder, rice, and dal. Mix well",
            "Add water and salt, cook until soft and mushy"
        ] 
    },
    "moong dal soup":{
        ingredients:[
            "1 cup moong dal",
            "1 onion (chopped)",
            "1 tomato (chopped)",
            "1 tsp ginger-garlic paste",
            "Salt to taste",
            "1/2 tsp cumin powder",
            "4 cups water",
            "Fresh coriander for garnish"
        ],
        steps:[
            "Wash moong dal and cook with water in a pressure cooker for 3-4 whistles",
            "In a pan, heat oil and sauté onions, ginger-garlic paste, and tomatoes",
            "Add cooked dal, cumin powder, and salt",
            "Simmer for 5-7 minutes and garnish with coriander leaves"
        ] 
    },
    "moong dal chilla":{
        ingredients:[
            "1 cup moong dal (soaked overnight)",
            "1/2 onion (chopped)",
            "1 green chili (chopped)",
            "1/2 tsp cumin seeds",
            "Salt to taste",
            "Water (to make batter)",
            "Oil for cooking"
        ],
        steps:[
            "Blend soaked moong dal into a smooth batter",
            "Add chopped onions, chili, cumin, and salt to the batter",
            "Heat a pan and grease with a little oil",
            "Pour a ladle of batter, spread it, and cook on both sides until crispy"
        ] 
    },
    "moong dal tikk":{
        ingredients:[
            "1 cup moong dal (boiled)",
            "1/2 tsp cumin powder",
            "1/4 tsp chili powder",
            "Salt to taste",
            "1 tbsp chopped coriander",
            "Oil for frying"
        ],
        steps:[
            "Mash the boiled moong dal",
            "Add spices, salt, and coriander to the mashed dal",
            "Shape the mixture into small tikkis",
            "Shallow fry the tikkis in oil until golden and crisp on both sides"
        ] 
    },
    "moong dal salad":{
        ingredients:[
            "1 cup boiled moong dal",
            "1 cucumber (chopped)",
            "1 tomato (chopped)",
            "1/4 red onion (chopped)",
            "1 tbsp lemon juice",
            "Salt and pepper to taste",
            "Fresh coriander"
        ],
        steps:[
            "In a bowl, combine boiled moong dal, cucumber, tomato, and onion",
            "Add lemon juice, salt, and pepper",
            "Garnish with coriander leaves and serve fresh"
        ] 
    },
    "moong dal paratha":{
        ingredients:[
            "1 cup moong dal (boiled)",
            "1/2 cup whole wheat flour",
            "1/4 tsp turmeric powder",
            "1/4 tsp cumin powder",
            "Salt to taste",
            "Water (for dough)",
            "Oil or ghee for cooking"
        ],
        steps:[
            "Mash the boiled moong dal",
            "Mix it with whole wheat flour, spices, and salt. Add water to form a dough",
            "Roll out the dough into flat parathas",
            "Cook on a griddle with a little oil or ghee until golden brown on both sides"
        ] 
    },
    "moong dal dosa":{
        ingredients:[
            "1 cup moong dal (soaked overnight)",
            "1/2 cup rice (soaked overnight)",
            "1/2 tsp cumin seeds",
            "Salt to taste",
            "Oil for cooking"
        ],
        steps:[
            "Grind soaked moong dal and rice into a smooth batter",
            "Add cumin seeds and salt to the batter",
            "Heat a non-stick pan, pour the batter, and spread it thin",
            "Cook until crispy, then flip and cook the other side"
        ] 
    },
    "moong dal pulao":{
        ingredients:[
            "1 cup moong dal",
            "1/2 cup rice",
            "1 onion (chopped)",
            "1 tomato (chopped)",
            "1/2 tsp cumin seeds",
            "1/2 tsp garam masala",
            "Salt to taste",
            "2 cups water",
            "1 tbsp ghee"
        ],
        steps:[
            "Heat ghee, sauté cumin seeds, onions, and tomatoes",
            "Add moong dal, rice, and spices. Stir well",
            "Add water and salt. Cook until the dal and rice are tender"
        ] 
    },
    "moong dal and spinach soup":{
        ingredients:[
            "1 cup moong dal",
            "1 cup spinach (chopped)",
            "1 onion (chopped)",
            "1 tomato (chopped)",
            "1 tsp ginger-garlic paste",
            "Salt and pepper to taste"
        ],
        steps:[
            "Cook moong dal in water until soft",
            "Sauté onions, ginger-garlic paste, and tomatoes",
            "Add spinach, cooked dal, salt, and pepper",
            "Simmer for 5-10 minutes and serve hot"
        ] 
    },
    "moong dal and vegetable stew":{
        ingredients:[
            "1 cup moong dal",
            "1 cup mixed vegetables (carrot, peas, beans)",
            "1 onion (chopped)",
            "1 tomato (chopped)",
            "1/2 tsp turmeric powder",
            "1/2 tsp cumin seeds",
            "Salt to taste"
        ],
        steps:[
            "Cook moong dal and vegetables in water until tender",
            "In a pan, heat oil and sauté cumin seeds, onions, and tomatoes",
            "Add the cooked dal and vegetables, turmeric, and salt",
            "Simmer for a few minutes, and serve hot"
        ] 
    },
    "moong dal with palak":{
        ingredients:[
            "1 cup moong dal",
            "2 cups spinach (chopped)",
            "1 onion (chopped)",
            "1 tomato (chopped)",
            "1/2 tsp cumin seeds",
            "Salt to taste"
        ],
        steps:[
            "Cook moong dal in water until soft",
            "Sauté cumin seeds, onions, and tomatoes in oil",
            "Add spinach and cook until wilted",
            "Add cooked dal, salt, and simmer for 5 minutes"
        ] 
    },
    "moong dal porridge":{
        ingredients:[
            "1 cup moong dal",
            "1/2 cup rice",
            "1/4 tsp cumin powder",
            "Salt to taste",
            "Ghee for tempering"
        ],
        steps:[
            "Cook moong dal and rice together in water",
            "Add cumin powder and salt",
            "Heat ghee in a pan and pour over the cooked porridge",
            "Serve warm"
        ] 
    },
    "moong dal and methi thepla":{
        ingredients:[
            "1 cup moong dal (soaked and ground)",
            "1/2 cup wheat flour",
            "1/2 cup methi (fenugreek) leaves (chopped)",
            "1/4 tsp turmeric powder",
            "1/2 tsp cumin powder",
            "Salt to taste",
            "Water (for dough)",
            "Oil for cooking"
        ],
        steps:[
            "Mix ground moong dal, wheat flour, methi leaves, and spices in a bowl",
            "Add water to make a soft dough",
            "Roll out dough into flat circles and cook on a griddle with oil until golden brown on both sides"
        ] 
    },
    "moong dal pancakes with vegetables":{
        ingredients:[
            "1 cup moong dal (soaked and ground)",
            "1/2 cup grated carrots and zucchini",
            "1/2 tsp cumin seeds",
            "Salt and pepper to taste",
            "1 tbsp chopped coriander",
            "Oil for cooking"
        ],
        steps:[
            "Mix ground moong dal with grated vegetables, cumin, salt, pepper, and coriander",
            "Heat a pan and grease with oil",
            "Pour a ladle of the batter and spread it into a pancake shape. Cook until golden brown on both sides"
        ] 
    },
    "moong dal khichdi with vegetables":{
        ingredients:[
            "1 cup moong dal",
            "1/2 cup rice",
            "1 cup mixed vegetables (carrot, peas, beans)",
            "1/2 tsp cumin seeds",
            "1/2 tsp turmeric powder",
            "Salt to taste",
            "4 cups water",
            "Ghee for tempering"
        ],
        steps:[
            "Wash rice and moong dal together. Heat ghee and temper cumin seeds",
            "Add turmeric powder, vegetables, and rice-dal mixture. Add water and salt",
            "Cook until soft and mushy. Serve warm"
        ] 
    },
    "moong dal bhurji":{
        ingredients:[
            "1 cup moong dal (boiled)",
            "1 onion (chopped)",
            "1 tomato (chopped)",
            "1/2 tsp turmeric powder",
            "1/2 tsp cumin seeds",
            "Salt to taste",
            "1 tbsp oil"
        ],
        steps:[
            "Heat oil, sauté cumin seeds, onions, and tomatoes",
            "Add boiled moong dal, turmeric powder, and salt",
            "Cook for 5 minutes, mash slightly, and serve"
        ] 
    },
    "moong dal pakora":{
        ingredients:[
            "1 cup moong dal (soaked and ground)",
            "1/4 cup chopped onion",
            "1-2 green chilies (chopped)",
            "1/2 tsp cumin seeds",
            "Salt to taste",
            "Water (to make batter)",
            "Oil for frying"
        ],
        steps:[
            "Mix ground moong dal, onions, green chilies, cumin, and salt",
            "Add water to form a thick batter",
            "Heat oil and drop spoonfuls of the batter into the hot oil. Fry until golden brown"
        ] 
    },
    "moong dal vada":{
        ingredients:[
            "1 cup moong dal (soaked and ground)",
            "1/4 tsp asafoetida (hing)",
            "1/2 tsp cumin seeds",
            "Salt to taste",
            "Oil for frying"
        ],
        steps:[
            "Mix ground moong dal with cumin seeds, asafoetida, and salt",
            "Shape the mixture into small vadas",
            "Heat oil and deep fry the vadas until crispy and golden"
        ] 
    },
    "moong dal and tomato curry":{
        ingredients:[
            "1 cup moong dal",
            "2 tomatoes (chopped)",
            "1/2 tsp turmeric powder",
            "1/2 tsp cumin seeds",
            "Salt to taste",
            "2 cups water",
            "Oil for tempering"
        ],
        steps:[
            "Cook moong dal with water until soft",
            "Heat oil, sauté cumin seeds, and tomatoes. Add turmeric powder and salt",
            "Add cooked dal and simmer for 5 minutes. Serve hot"
        ] 
    },
    "moong dal and carrot soup":{
        ingredients:[
            "1 cup moong dal",
            "1 cup carrots (chopped)",
            "1 onion (chopped)",
            "1 tomato (chopped)",
            "1 tsp ginger-garlic paste",
            "Salt and pepper to taste",
            "4 cups water"
        ],
        steps:[
            "Cook moong dal and carrots in water until soft",
            "Saute onions, ginger-garlic paste, and tomatoes in oil",
            "Add cooked dal and carrots, blend to smooth consistency. Season with salt and pepper"
        ] 
    },
    "moong dal masala":{
        ingredients:[
            "1 cup moong dal",
            "1 onion (chopped)",
            "2 tomatoes (chopped)",
            "1/2 tsp turmeric powder",
            "1/2 tsp garam masala",
            "Salt to taste",
            "2 tbsp oil"
        ],
        steps:[
            "Cook moong dal in water until soft",
            "Heat oil, sauté onions and tomatoes",
            "Add turmeric powder, garam masala, and salt",
            "Add cooked dal and simmer for a few minutes",
            "Serve hot"
        ] 
    },
    "moong dal and cauliflower sabzi":{
        ingredients:[
            "1 cup moong dal",
            "1 cup cauliflower florets",
            "1 onion (chopped)",
            "1 tomato (chopped)",
            "1/2 tsp cumin seeds",
            "Salt to taste",
            "1 tbsp oil"
        ],
        steps:[
            "Cook moong dal until soft. Heat oil, saute cumin seeds, onions, and tomatoes",
            "Add cauliflower and cook until tender. Add cooked moong dal and salt",
            "Simmer for a few minutes, then serve hot"
        ] 
    },
    "moong dal and bottle gourd curry":{
        ingredients:[
            "1 cup moong dal",
            "1 bottle gourd (chopped)",
            "1 onion (chopped)",
            "1 tomato (chopped)",
            "1/2 tsp turmeric powder",
            "Salt to taste",
            "2 cups water"
        ],
        steps:[
            "Cook moong dal and bottle gourd in water until soft",
            "Sauté onions, tomatoes, and spices in oil",
            "Add cooked dal and bottle gourd, simmer for 5 minutes"
        ] 
    },
    "moong dal tadka":{
        ingredients:[
            "1 cup moong dal",
            "1/2 tsp mustard seeds",
            "1/2 tsp cumin seeds",
            "1 dry red chili",
            "1 sprig curry leaves",
            "Salt to taste",
            "Ghee for tempering"
        ],
        steps:[
            "Cook moong dal until soft",
            "Heat ghee, add mustard seeds, cumin, red chili, and curry leaves",
            "Pour the tempering over the cooked dal and serve hot"
        ] 
    },
    "moong dal and cucumber salad":{
        ingredients:[
            "1 cup boiled moong dal",
            "1 cucumber (chopped)",
            "1/2 onion (chopped)",
            "1 tbsp lemon juice",
            "Salt and pepper to taste"
        ],
        steps:[
            "Mix boiled moong dal, cucumber, and onion in a bowl",
            "Add lemon juice, salt, and pepper. Toss well and serve fresh"
        ] 
    },
    "moong dal and bell pepper stir fry":{
        ingredients:[
            "1 cup moong dal (boiled)",
            "1 bell pepper (chopped",
            "1 onion (chopped)",
            "1/2 tsp cumin powder",
            "Salt and pepper to taste",
            "1 tbsp oi"
        ],
        steps:[
            "Heat oil, sauté onion and bell pepper until soft",
            "Add boiled moong dal, cumin powder, salt, and pepper",
            "Stir-fry for 5-7 minutes and serve"
        ] 
    },
    "moong dal and tofu stir fry":{
        ingredients:[
            "1 cup moong dal (boiled)",
            "1 cup tofu (cubed)",
            "1 bell pepper (chopped)",
            "1/2 tsp soy sauce",
            "1/2 tsp cumin seeds",
            "1 tbsp oil",
            "Salt and pepper to taste"
        ],
        steps:[
            "Heat oil in a pan, sauté cumin seeds and bell pepper",
            "Add tofu cubes and stir-fry until slightly golden",
            "Mix in boiled moong dal, soy sauce, salt, and pepper",
            "Stir-fry for 5 minutes and serve."
        ] 
    },
    "Moong Dal Biryani":{
        ingredients:[
            "1 cup moong dal",
            "1 cup basmati rice",
            "1 onion (sliced)",
            "1 tomato (chopped)",
            "1/2 cup mixed vegetables (carrot, peas, beans)",
            "1/2 tsp garam masala",
            "1/2 tsp cumin seeds",
            "2 cups water",
            "1 tbsp ghee"
        ],
        steps:[
            "Heat ghee, sauté cumin seeds, onion, and tomato",
            "Add rice, dal, vegetables, garam masala, and water",
            "Cover and cook until rice and dal are tender",
            "Fluff with a fork and serve warm"
        ] 
    },
    "moong dal and fenugreek leaves sabzi":{
        ingredients:[
            "1 cup moong dal (boiled)",
            "1 cup methi (fenugreek) leaves (chopped)",
            "1 onion (chopped)",
            "1 tomato (chopped)",
            "1/2 tsp turmeric powder",
            "1/2 tsp cumin seeds",
            "1 tbsp oil",
            "Salt to taste"
        ],
        steps:[
            "Heat oil, sauté cumin seeds, onion, and tomato",
            "Add methi leaves, turmeric, and salt. Cook until wilted",
            "Add boiled moong dal, mix well, and simmer for 5 minutes"
        ] 
    },
    "moong dal and mushroom stir fry":{
        ingredients:[
            "1 cup moong dal (boiled)",
            "1 cup mushrooms (sliced)",
            "1 onion (chopped)",
            "1/2 tsp black pepper",
            "1/2 tsp soy sauce",
            "1 tbsp oil",
            "Salt to taste"
        ],
        steps:[
            "Heat oil in a pan, sauté onion and mushrooms until soft",
            "Add boiled moong dal, soy sauce, salt, and pepper",
            "Stir-fry for 5 minutes and serve hot"
        ] 
    },
    "moong dal stuffed paratha":{
        ingredients:[
            "1 cup moong dal (cooked and mashed)",
            "1 cup whole wheat flour",
            "1/4 tsp turmeric powder",
            "1/4 tsp cumin powder",
            "Salt to taste",
            "Water (for dough)",
            "Oil or ghee for cooking"
        ],
        steps:[
            "Prepare dough with whole wheat flour, water, and salt",
            "Mix mashed moong dal with spices for stuffing",
            "Roll out dough, add stuffing, and seal. Roll into a paratha",
            "Cook on a griddle with ghee or oil until golden on both sides"
        ] 
    },
    "moong dal sprouts chaat":{
        ingredients:[
            "1 cup moong dal sprouts (steamed or raw)",
            "1 small onion (finely chopped)",
            "1 small tomato (finely chopped)",
            "1 small cucumber (finely chopped)",
            "1 green chili (finely chopped, optional)",
            "2 tbsp coriander leaves (chopped)",
            "1/2 tsp roasted cumin powder",
            "1/2 tsp chaat masala",
            "1/2 lemon (juiced)",
            "Salt to taste",
            "1 tbsp pomegranate seeds (optional, for garnish)"
        ],
        steps:[
            "In a bowl, mix moong dal sprouts, onion, tomato, cucumber, and green chili",
            "Add roasted cumin powder, chaat masala, and salt",
            "Squeeze lemon juice over the mixture and toss well",
            "Garnish with coriander leaves and pomegranate seeds",
            "Serve immediately as a refreshing snack or side dish"
        ] 
    },
    "Oats and Lentil Soup":{
        ingredients:[
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        steps:[
            "",
            "",
            ""
        ] 
    },
    "Oats and Lentil Soup":{
        ingredients:[
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        steps:[
            "",
            "",
            ""
        ] 
    },
    "Oats and Lentil Soup":{
        ingredients:[
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        steps:[
            "",
            "",
            ""
        ] 
    },
    "Oats and Lentil Soup":{
        ingredients:[
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        steps:[
            "",
            "",
            ""
        ] 
    },
    "Oats and Lentil Soup":{
        ingredients:[
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        steps:[
            "",
            "",
            ""
        ] 
    },
    "Oats and Lentil Soup":{
        ingredients:[
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        steps:[
            "",
            "",
            ""
        ] 
    },
    "Oats and Lentil Soup":{
        ingredients:[
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        steps:[
            "",
            "",
            ""
        ] 
    },
    "Oats and Lentil Soup":{
        ingredients:[
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        steps:[
            "",
            "",
            ""
        ] 
    },
    "Oats and Lentil Soup":{
        ingredients:[
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        steps:[
            "",
            "",
            ""
        ] 
    },
    "Oats and Lentil Soup":{
        ingredients:[
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        steps:[
            "",
            "",
            ""
        ] 
    },
    "Oats and Lentil Soup":{
        ingredients:[
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        steps:[
            "",
            "",
            ""
        ] 
    },
    
};

const text = document.getElementById("inputText");
const suggest = document.getElementById("container");
const showMessage = document.getElementById("showMessage");

// Function to show search suggestions
function showSuggest(query) {
    suggest.innerHTML = '';  // Clear previous suggestions
    if (query === '') {
        suggest.style.display = "none";
        return;
    }

    const filteredSuggestions = keyword.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredSuggestions.length === 0) {
        suggest.style.display = "none";
        return;
    }

    suggest.style.display = "block";
    filteredSuggestions.forEach(item => {
        const suggestBlock = document.createElement("div");
        suggestBlock.classList.add("suggestBlock");
        suggestBlock.textContent = item;
        suggestBlock.addEventListener("click", () => {
            text.value = item;
            suggest.style.display = "none";
            sendMessage(item);  // Pass selected item to sendMessage
        });
        suggest.appendChild(suggestBlock);
    });
}

// Function to send message and get response
function sendMessage(recipeName = '') {
    const message = text.value.trim() || recipeName;
    if (message === "") return;  // Prevent sending empty messages

    // Display user's message
    const userMessage = document.createElement("div");
    userMessage.textContent = `You: ${message}`;
    userMessage.classList.add("userMessage");
    showMessage.appendChild(userMessage);

    // Bot response: Check if the recipe exists in the details
    const botMessage = document.createElement("div");
    if (recipeDetails[message]) {
        // Display recipe ingredients and steps
        const { ingredients, steps } = recipeDetails[message];
        botMessage.textContent = `Bot: Here's the recipe for "${message}"`;

        const recipeDetailsDiv = document.createElement("div");
        recipeDetailsDiv.classList.add("recipe-details");

        // Add ingredients section
        const ingredientsHeading = document.createElement("h3");
        ingredientsHeading.textContent = "Ingredients:";
        recipeDetailsDiv.appendChild(ingredientsHeading);
        
        const ingredientsList = document.createElement("ul");
        ingredients.forEach(ingredient => {
            const li = document.createElement("li");
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });
        recipeDetailsDiv.appendChild(ingredientsList);

        // Add steps section
        const stepsHeading = document.createElement("h3");
        stepsHeading.textContent = "Steps:";
        recipeDetailsDiv.appendChild(stepsHeading);
        
        const stepsList = document.createElement("ol");
        steps.forEach(step => {
            const li = document.createElement("li");
            li.textContent = step;
            stepsList.appendChild(li);
        });
        recipeDetailsDiv.appendChild(stepsList);

        showMessage.appendChild(recipeDetailsDiv);
    } else {
        botMessage.textContent = `Bot: Sorry, I couldn't find a recipe for "${message}". Try a different one.`;
    }

    botMessage.classList.add("botMessage");
    showMessage.appendChild(botMessage);
    text.value = '';
    suggest.style.display = "none";  // Hide suggestions
    showMessage.scrollTop = showMessage.scrollHeight;  // Scroll to bottom
}
