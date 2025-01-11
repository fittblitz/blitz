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
    "amla ginger shot",
    "tulsi lemon infusion",
    "turmeric ginger elixir",
    "cucumber mint cooler",
    "tomato coriander detox drink",
    "green tea with lemon",
    "spinach cucumber refresher",
    "beetroot carrot juice",
    "hibiscus iced tea",
    "pomegranate mint fizz",
    "lemon coconut water infusion",
    "coriander detox water",
    "ginger lemon jeera drink",
    "carrot tomato cooler",
    "cabbage celery juice",
    "lemon turmeric buttermilk",
    "moringa herbal drink",
    "neem coriander juice",
    "bael sherbet",
    "mint cucumber sparkler",
    "spinach cucumber juice",
    "beetroot carrot juice",
    "moringa lemon water",
    "coriander spinach cooler",
    "amla ginger shot",
    "mint cucumber drink",
    "tomato celery juice",
    "curry leaf infusion",
    "kale cucumber juice",
    "lemon coconut water",
    "broccoli spinach juice",
    "hibiscus coriander drink",
    "drumstick leaf cooler",
    "neem lemon tonic",
    "cucumber coriander juice",
    "ragi buttermilk",
    "lauki mint juice",
    "fenugreek seed water",
    "black chana soup",
    "palak tomato juice",
    "jowar vegetable upma",
    "jowar pancakes (chilla) with spinach",
    "jowar idli",
    "jowar dosa",
    "jowar and oats porridge",
    "jowar vegetable paratha",
    "jowar methi thepla",
    "jowar poha with vegetables",
    "jowar and lentil adai",
    "jowar uttapam",
    "jowar khichdi with moong dal",
    "jowar roti with vegetable curry",
    "jowar bhakri with green chutney",
    "jowar and vegetable pulao",
    "jowar veggie wraps",
    "jowar biryani with paneer",
    "jowar stuffed paratha with tofu filling",
    "jowar tacos with rajma filling",
    "jowar flour dumplings (muthia)",
    "jowar and sprouts salad",
    "jowar vegetable handvo",
    "jowar crackers with hummus",
    "jowar masala puffs",
    "jowar onion pakoras (air fried)",
    "jowar masala pancakes",
    "jowar veggie cutlets",
    "jowar masala balls (steamed)",
    "jowar flour sticks with herbs",
    "jowar chakli (baked)",
    "jowar popcorn snack",
    "jowar and lentil soup",
    "jowar and spinach soup",
    "jowar and mixed veggie salad",
    "jowar and chickpea salad",
    "jowar and grilled paneer salad",
    "jowar millet soup with herbs",
    "jowar and tomato soup",
    "jowar and sprouts soup",
    "jowar veggie burgers",
    "jowar noodles with stir fry veggies",
    "jowar veggie pizza base",
    "jowar sushi rolls",
    "jowar pasta with tomato basil sauce",
    "jowar stuffed bell peppers",
    "jowar risotto with mushrooms",
    "jowar flour nachos with salsa",
    "jowar wrap with grilled chicken",
    "jowar idli",
    "mango pineapple smoothie",
    "papaya coconut smoothie",
    "banana coconut water smoothie",
    "pineapple smoothie",
    "mango smoothie",
    "kiwi mango smoothie",
    "guava lime smoothie",
    "pineapple kale smoothie",
    "coconut mango smoothie",
    "dragonfruit pineapple smoothie",
    "orange carrot smoothie",
    "lemon mint watermelon smoothie",
    "grapefruit strawberry smoothie",
    "lime blueberry smoothie",
    "spinach pineapple smoothie",
    "kale apple banana smoothie",
    "avocado mango smoothie",
    "cucumber kiwi smoothie",
    "green grapes mint smoothie",
    "banana cranberry smoothie",
    "apple cinnamon smoothie",
    "pear ginger smoothie",
    "apple kale smoothie",
    "apple carrot smoothie",
    "pear spinach smoothie",
    "cherry banana smoothie",
    "plum raspberry smoothie",
    "watermelon cucumber smoothie",
    "watermelon mint smoothie",
    "nutty seed mix smoothie",
    "plum smoothie",
    "plum smoothie with optional cranberries",
    "coconut water chia drink",
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
    "amla ginger shot":{
        ingredients:[
            "2 amla",
            "1/2 inch ginger",
            "a pinch of black salt",
            "water"
        ],
        steps:[
            "Blend amla, ginger, and water",
            "Strain and add black salt",
            "Serve fresh"
        ] 
    },
    "tulsi lemon infusion":{
        ingredients:[
            "8 tulsi leaves",
            "1/2 lemon",
            "warm water"
        ],
        steps:[
            "Steep tulsi leaves in warm water for 5 minutes",
            "Add lemon juice and serve"
        ] 
    },
    "turmeric ginger elixir":{
        ingredients:[
            "1/2 inch turmeric root",
            "1/2 inch ginger",
            "black pepper",
            "warm water"
        ],
        steps:[
            "Blend turmeric and ginger in warm water",
            "Add a pinch of black pepper and serve"
        ] 
    },
    "cucumber mint cooler":{
        ingredients:[
            "1 cucumber",
            "6 mint leaves",
            "1/2 lemon",
            "water"
        ],
        steps:[
            "Blend cucumber, mint, and water",
            "Strain, add lemon juice, and serve chilled"
        ] 
    },
    "tomato coriander detox drink":{
        ingredients:[
            "2 tomatoes",
            "6 coriander leaves",
            "1/2 lemon",
            "black salt"
        ],
        steps:[
            "Blend tomatoes, coriander, and water",
            "Strain, add lemon juice and black sal"
        ] 
    },
    "green tea with lemon":{
        ingredients:[
            "1 green tea bag",
            "1/2 lemon",
            "hot water"
        ],
        steps:[
            "Steep green tea bag in hot water",
            "Add lemon juice and serve warm"
        ] 
    },
    "spinach cucumber refresher":{
        ingredients:[
            "1 handful spinach",
            "1 cucumber",
            "1/2 lemon",
            "water"
        ],
        steps:[
            "Blend spinach, cucumber, and water",
            "Strain, add lemon juice, and serve"
        ] 
    },
    "beetroot carrot juice":{
        ingredients:[
            "1 beetroot",
            "2 carrots",
            "1/2 lemon"
        ],
        steps:[
            "Blend beetroot and carrots",
            "Strain, add lemon juice, and serve fresh"
        ] 
    },
    "hibiscus iced tea":{
        ingredients:[
            "2 dried hibiscus petals",
            "1 cinnamon stick",
            "water"
        ],
        steps:[
            "Boil hibiscus and cinnamon in water",
            "Cool, strain, and serve"
        ] 
    },
    "pomegranate mint fizz":{
        ingredients:[
            "1 cup pomegranate seeds",
            "6 mint leaves",
            "sparkling water"
        ],
        steps:[
            "Blend pomegranate and mint, then strain",
            "Add sparkling water and serve"
        ] 
    },
    "lemon coconut water infusion":{
        ingredients:[
            "1 glass coconut wate",
            "1/2 lemon"
        ],
        steps:[
            "Mix coconut water with lemon juice",
            "Serve chilled"
        ] 
    },
    "coriander detox water":{
        ingredients:[
            "1 handful coriander leaves",
            "1/2 lemon",
            "water"
        ],
        steps:[
            "Blend coriander leaves with water",
            "Strain, add lemon juice, and serve"
        ] 
    },
    "ginger lemon jeera drink":{
        ingredients:[
            "1/2 inch ginger",
            "1/2 tsp roasted cumin",
            "1/2 lemon",
            "warm water"
        ],
        steps:[
            "Blend ginger with water, add cumin and lemon",
            "Serve warm"
        ] 
    },
    "carrot tomato cooler":{
        ingredients:[
            "2 carrots",
            "1 tomato",
            "black pepper"
        ],
        steps:[
            "Blend carrots and tomato",
            "Strain, add black pepper, and serve"
        ] 
    },
    "cabbage celery juice":{
        ingredients:[
            "1/2 cup cabbage",
            "1 celery stalk",
            "1/2 lemon"
        ],
        steps:[
            "Blend cabbage and celery with water",
            "Strain, add lemon juice, and serve"
        ] 
    },
    "lemon turmeric buttermilk":{
        ingredients:[
            "1 glass buttermilk",
            "1/4 tsp turmeric",
            ", black salt"
        ],
        steps:[
            "Mix turmeric and black salt in buttermilk",
            "Serve chilled"
        ] 
    },
    "moringa herbal drink":{
        ingredients:[
            "1 tbsp fresh moringa leaves",
            "1/2 lemon",
            "warm wate"
        ],
        steps:[
            "Steep moringa in warm water for 5 minutes",
            "Add lemon juice and serve"
        ] 
    },
    "neem coriander juice":{
        ingredients:[
            "5 tender neem leaves",
            "1 handful coriander",
            "water"
        ],
        steps:[
            "Blend neem and coriander with water",
            "Strain and serve fresh"
        ] 
    },
    "bael sherbet (wood apple)":{
        ingredients:[
            "1 bael fruit",
            "water",
            "black salt"
        ],
        steps:[
            "Scoop out bael pulp and mash in water",
            "Strain, add black salt, and serve"
        ] 
    },
    "mint cucumber sparkler":{
        ingredients:[
            "1 cucumber",
            "6 mint leaves",
            "sparkling water"
        ],
        steps:[
            "Blend cucumber and mint, strain",
            "Add sparkling water and serve"
        ] 
    },
    "spinach cucumber juice":{
        ingredients:[
            "1 cup spinach",
            "1 cucumber",
            "1/2 lemon",
            "water",
            "3-5 curry leaves"
        ],
        steps:[
            "Blend spinach, cucumber, 3-5 curry leaves and water",
            "Strain, add lemon juice, and serve"
        ] 
    },
    "beetroot carrot juice":{
        ingredients:[
            "1 beetroot",
            "2 carrots",
            "1/2 lemon"
        ],
        steps:[
            "Blend beetroot and carrots, 3-5 curry leaves",
            "Strain, add lemon juice, and serve"
        ] 
    },
    "moringa lemon water":{
        ingredients:[
            "1 tbsp moringa leaves",
            "1/2 lemon",
            "warm water"
        ],
        steps:[
            "Steep moringa leaves in warm water",
            "Add lemon juice and serve"
        ] 
    },
    "coriander spinach cooler":{
        ingredients:[
            "1 handful coriander",
            "1 cup spinach",
            "3-5 curry leaves",
            "water"
        ],
        steps:[
            "Blend coriander, spinach, 3-5 curry leaves and water",
            "Strain and serve chilled"
        ] 
    },
    "amla ginger shot":{
        ingredients:[
            "2 amla",
            "1/2 inch ginger",
            "black salt",
            "3-5 curry leaves",
            "water"
        ],
        steps:[
            "Blend amla, ginger, 3-5 curry leaves and water",
            "Strain, add black salt, and serve"
        ] 
    },
    "mint cucumber drink":{
        ingredients:[
            "1 cucumber",
            "6 mint leaves",
            "3-5 curry leaves",
            "1/2 lemon"
        ],
        steps:[
            "Blend cucumber and mint, 3-5 curry leaves with water",
            "Strain, add lemon juice, and serve"
        ] 
    },
    "tomato celery juice":{
        ingredients:[
            "2 tomatoes",
            "1 celery stalk",
            "black salt"
        ],
        steps:[
            "Blend tomatoes and celery, 3-5 curry leaves with water",
            "Strain, add black salt, and serve"
        ] 
    },
    "curry leaf infusion":{
        ingredients:[
            "1 handful curry leaves",
            "1/2 lemon",
            "warm water"
        ],
        steps:[
            "Steep curry leaves in warm water for 5 minutes",
            "Add lemon juice and serve"
        ] 
    },
    "kale cucumber juice":{
        ingredients:[
            "1 cup kale",
            "1 cucumber",
            "3-5 curry leaves",
            "water"
        ],
        steps:[
            "Blend kale, cucumber, and water",
            "Strain and serve chilled"
        ] 
    },
    "lemon coconut water":{
        ingredients:[
            "1 glass coconut water",
            "3-5 curry leaves",
            "1/2 lemon"
        ],
        steps:[
            "Mix coconut water with lemon juice",
            "Serve fresh"
        ] 
    },
    "broccoli spinach juice":{
        ingredients:[
            "1/2 cup broccoli",
            "3-5 curry leaves",
            "1 cup spinach",
            "lemon"
        ],
        steps:[
            "Blend broccoli and spinach with water",
            "Strain, add lemon juice, and serve"
        ] 
    },
    "hibiscus coriander drink":{
        ingredients:[
            "2 hibiscus petals",
            "1 handful coriander",
            "3-5 curry leaves",
            "water"
        ],
        steps:[
            "Blend hibiscus and coriander with water",
            "Strain and serve fresh"
        ] 
    },
    "drumstick leaf cooler":{
        ingredients:[
            "1 cup drumstick leaves",
            "3-5 curry leaves",
            "1/2 lemon",
            "water"
        ],
        steps:[
            "Blend drumstick leaves with water",
            "Strain, add lemon juice, and serve"
        ] 
    },
    "neem lemon Tonic":{
        ingredients:[
            "5 tender neem leaves",
            "3-5 curry leaves",
            "1/2 lemon",
            "water"
        ],
        steps:[
            "Blend neem leaves, 3-5 curry leaves, with water",
            "Strain, add lemon juice, and serve"
        ] 
    },
    "cucumber coriander juice":{
        ingredients:[
            "1 cucumber",
            "3-5 curry leaves",
            "1 handful coriander",
            "lemon"
        ],
        steps:[
            "Blend cucumber and coriander, 3-5 curry leaves with water",
            "Strain, add lemon juice, and serve"    
        ] 
    },
    "ragi buttermilk":{
        ingredients:[
            "1 tbsp ragi flour",
            "3-5 1 glass buttermilk",
            "salt"
        ],
        steps:[
            "Mix ragi flour with buttermilk",
            "Add salt and serve chilled"
        ] 
    },
    "lauki mint Juice":{
        ingredients:[
            "1 cup lauki",
            "6 mint leaves",
            "3-5 curry leaves",
            "lemon juice"
        ],
        steps:[
            "Blend lauki and mint, 3-5 curry leaves with water",
            "Strain, add lemon juice, and serve",
        ] 
    },
    "fenugreek seed water":{
        ingredients:[
            "1 tsp fenugreek seeds",
            "1/2 lemon",
            "warm water"
        ],
        steps:[
            "Soak fenugreek seeds overnight",
            "Add lemon juice and serve"
        ] 
    },
    "black chana soup":{
        ingredients:[
            "1/2 cup boiled black chana",
            "garlic",
            "cumin"
        ],
        steps:[
            "Blend boiled chana with water",
            "Add garlic and cumin for flavor"
        ] 
    },
    "palak tomato juice":{
        ingredients:[
            "1 cup palak",
            "2 tomatoes",
            "3-5 curry leaves",
            "water"
        ],
        steps:[
            "Blend palak and tomatoes, 3-5 curry leaves with water",
            "Strain and serve fresh"
        ] 
    },
    "jowar vegetable upma":{
        ingredients:[
            "Jowar rava: 1 cup",
"Mixed vegetables (carrot, beans, peas): 1 cup",
"Mustard seeds: 1 tsp",
"Curry leaves: 8-10",
"Green chilies: 2, chopped",
"Water: 2 cups",
"Salt: To taste"
        ],
        steps:[
            "Dry roast jowar rava and set aside.",
            "Heat oil, add mustard seeds, curry leaves, and chilies.",
            "Sauté vegetables, add water and salt, and bring to a boil.",
            "Stir in jowar rava and cook until water is absorbed."
        ] 
    },
    "jowar pancakes (chilla) with spinach":{
        ingredients:[
            "Jowar flour: 1 cup",
            "Spinach: 1/2 cup, chopped",
"Green chilies: 2, chopped",
"Ginger: 1/2 tsp, grated",
"Salt: To taste",
"Water: As needed"
        ],
        steps:[
            "Mix all ingredients with water to make a smooth batter.",
            "Heat a pan, pour batter, and spread into a thin circle.",
            "Cook on both sides until golden."
        ] 
    },
    "jowar idli":{
        ingredients:[
            "Jowar flour: 1 cup",
"Urad dal batter: 1/2 cup",
"Water: As needed",
"Salt: To taste",
"Eno: 1 tsp"
        ],
        steps:[
            "Mix jowar flour with urad dal batter and water to make a thick batter.",
            "Add salt and Eno, mix gently.",
            "Pour into idli molds and steam for 12-15 minutes."
        ] 
    },
    "jowar dosa":{
        ingredients:[
            "Jowar flour: 1 cup",
"Rice flour: 1/4 cup",
"Curd: 2 tbsp",
"Water: As needed",
"Salt: To taste"
        ],
        steps:[
            "Mix all ingredients into a thin batter.",
            "Heat a dosa tawa, pour batter, and spread thinly.",
            "Cook on both sides until crispy."
        ] 
    },
    "jowar and oats porridge":{
        ingredients:[
            "Jowar flour: 2 tbsp",
"Oats: 2 tbsp",
"Water: 2 cups",
"Salt: To taste",
"Optional spices: Black pepper, cumin powder"
        ],
        steps:[
            "Mix jowar flour and oats with water in a pot.",
            "Cook on medium heat, stirring until thickened.",
            "Add salt and optional spices before serving."
        ] 
    },
    "jowar vegetable paratha":{
        ingredients:[
            "Jowar flour: 1 cup",
"Grated vegetables (carrot, zucchini): 1/2 cup",
"Salt and spices: As needed",
"Water: As needed"
        ],
        steps:[
            "Mix jowar flour, vegetables, salt, and spices; knead into a soft dough.",
            "Roll into parathas and cook on a tawa with minimal oil."
        ] 
    },
    "jowar methi thepla":{
        ingredients:[
            "Jowar flour: 1 cup",
"Fresh methi leaves: 1/2 cup, chopped",
"Curd: 2 tbsp",
"Salt and spices: As needed",
"Water: As needed"
        ],
        steps:[
            "Combine ingredients into a soft dough.",
            "Roll thin theplas and cook on a tawa with a little oil."
        ] 
    },
    "jowar poha with vegetables":{
        ingredients:[
            "Jowar poha: 1 cup",
            "Mixed vegetables (carrot, beans, peas): 1/2 cup",
            "Mustard seeds: 1 tsp",
            "Curry leaves: 8-10",
            "Green chilies: 2, chopped"
        ],
        steps:[
            "Rinse jowar poha and set aside.",
            "Heat oil, add mustard seeds, curry leaves, and chilies.",
            "Sauté vegetables, add poha, and cook for 2-3 minutes"
        ] 
    },  
    "jowar and lentil adai":{
        ingredients:[
            "Jowar flour: 1 cup",
            "Soaked moong dal: 1/2 cup",
            "Spices: Turmeric, red chili powder, salt",
            "Water: As needed"
        ],
        steps:[
            "Grind soaked moong dal and mix with jowar flour.",
            "Add spices and water to form a batter.",
            "Cook on a tawa like pancakes."
        ] 
    },
    "jowar uttapam":{
        ingredients:[
            "Jowar flour: 1 cup",
            "Rice flour: 1/4 cup",
            "Curd: 2 tbsp",
            "Chopped vegetables (onion, tomato, chili): 1/2 cup"
        ],
        steps:[
            "Mix flours, curd, and water to make a batter.",
            "Pour batter onto a hot tawa, top with vegetables, and cook on both sides"
        ] 
    },
    "jowar khichdi with moong dal":{
        ingredients:[
            "Jowar grains: 1/2 cup (soaked overnight)",
            "Moong dal: 1/4 cup",
            "Mixed vegetables: 1 cup",
            "Spices: Turmeric, cumin seeds, salt",
            "Water: 3 cups"
        ],
        steps:[
            "Pressure cook soaked jowar, moong dal, and vegetables with spices for 3-4 whistles.",
            "Simmer to desired consistency and serve hot."
        ] 
    },
    "jowar roti with vegetable curry":{
        ingredients:[
            "Jowar flour: 1 cup",
            "Water: As needed",
            "Mixed vegetables (carrot, beans, peas): 2 cups",
            "Spices: Garam masala, turmeric, cumin seeds, salt"
        ],
        steps:[
            "Knead jowar flour with warm water into a soft dough. Roll into thin rotis and cook on a tawa.",
            "Saute vegetables with spices, add water, and simmer until cooked. Serve with rotis."
        ] 
    },
    "jowar bhakri with green chutney":{
        ingredients:[
            "Jowar flour: 1 cup",
            "Water: As needed",
            "Green chutney: Coriander, mint, green chilies, garlic, and lemon juice"
        ],
        steps:[
            "Knead jowar flour with warm water, shape into thick flatbreads, and cook on a tawa.",
            "Blend chutney ingredients into a paste and serve with hot bhakris."
        ] 
    },
    "jowar and vegetable pulao":{
        ingredients:[
            "Jowar grains: 1 cup (soaked overnight)",
            "Mixed vegetables: 1 cup",
            "Spices: Bay leaf, cloves, cumin, garam masala, salt",
            "Water: 2 cups"
        ],
        steps:[
            "Cook soaked jowar grains with water until soft.",
            "Saute vegetables and spices, mix with jowar, and cook for 5 minutes."
        ] 
    },
    "jowar veggie wraps":{
        ingredients:[
            "Jowar rotis: 2",
            "Grated vegetables (carrot, cabbage, capsicum): 1 cup",
            "Yogurt or hummus: 2 tbsp",
            "Spices: Salt, black pepper"
        ],
        steps:[
            "Spread yogurt or hummus on a jowar roti.",
            "Add spiced vegetables, roll, and serve."
        ] 
    },
    "jowar biryani with paneer":{
        ingredients:[
            "Jowar grains: 1 cup (soaked overnight)",
            "Paneer: 100g, cubed",
            "Mixed vegetables: 1 cup",
            "Spices: Bay leaf, cinnamon, cloves, biryani masala, salt",
            "Water: 2 cups"
        ],
        steps:[
            "Cook soaked jowar grains with water until soft.",
            "Sauté vegetables, paneer, and spices, then layer with jowar. Cover and cook for 10 minutes."
        ] 
    },
    "jowar stuffed paratha with tofu filling":{
        ingredients:[
            "Jowar flour: 1 cup",
            "Tofu: 1/2 cup, crumbled",
            "Spices: Salt, cumin, chili powder"
        ],
        steps:[
            "Knead jowar flour into a soft dough.",
            "Stuff dough balls with spiced tofu, roll, and cook on a tawa."
        ] 
    },
    "jowar tacos with rajma filling":{
        ingredients:[
            "Jowar rotis: 2",
            "Cooked rajma: 1/2 cup",
            "Chopped vegetables: 1 cup (onion, tomato, lettuce)",
            "Spices: Taco seasoning or chili powder"
        ],
        steps:[
            "Sauté rajma with spices and layer on jowar rotis.",
            "Add vegetables, fold, and serve."
        ] 
    },
    "jowar flour dumplings (muthia)":{
        ingredients:[
            "Jowar flour: 1 cup",
            "Grated vegetables (bottle gourd, carrot): 1/2 cup",
            "Spices: Turmeric, chili powder, sesame seeds, salt",
            "Yogurt: 2 tbsp"
        ],
        steps:[
            "Mix ingredients into a dough, shape into logs, and steam for 15 minutes.",
            "Slice and temper with sesame seeds and curry leaves."
        ] 
    },
    "jowar and sprouts salad":{
        ingredients:[
            "Cooked jowar grains: 1 cup",
            "Mixed sprouts: 1/2 cup",
            "Chopped vegetables: 1 cup (cucumber, tomato, onion)",
            "Lemon juice: 1 tbsp",
            "Salt and pepper: To taste"
        ],
        steps:[
            "Mix jowar grains, sprouts, and vegetables in a bowl.",
            "Season with lemon juice, salt, and pepper"
        ] 
    },
    "jowar vegetable handvo":{
        ingredients:[
            "Jowar flour: 1 cup",
            "Grated vegetables (zucchini, carrot): 1/2 cup",
            "Yogurt: 1/4 cup",
            "Spices: Salt, turmeric, chili powder, sesame seeds",
            "Eno: 1 tsp"  
        ],
        steps:[
            "Mix flour, vegetables, yogurt, and spices into a batter. Add Eno just before steaming.",
            "Pour batter into a greased dish, sprinkle sesame seeds, and steam for 20 minutes."
        ] 
    },
    "jowar crackers with hummus":{
        ingredients:[
            "Jowar flour: 1 cup",
            "Olive oil: 2 tbsp",
            "Mixed herbs: 1 tsp",
            "Salt: To taste"
        ],
        steps:[
            "Mix ingredients into a dough, roll thin, and cut into shapes.",
            "Bake at 180°C for 12-15 minutes until crispy. Serve with hummus."
        ] 
    },
    "jowar masala puffs":{
        ingredients:[
            "Jowar flour: 1 cup",
            "Baking powder: 1/2 tsp",
            "Spices: Chili powder, cumin powder, salt",
            "Water: As needed"
        ],
        steps:[
            "Mix flour, baking powder, spices, and water into a thick batter.",
            "Drop small portions into hot oil or bake at 180°C until puffy and crispy."
        ] 
    },
    "jowar onion pakoras (air fried)":{
        ingredients:[
            "Jowar flour: 1 cup",
            "Sliced onions: 1 cup",
            "Spices: Turmeric, chili powder, salt",
            "Water: As needed"
        ],
        steps:[
            "Mix onions with flour, spices, and water into a thick batter.",
            "Shape small pakoras, air-fry at 200°C for 12-15 minutes."
        ] 
    },
    "jowar masala pancakes":{
        ingredients:[
            "Jowar flour: 1 cup",
            "Chopped vegetables (onion, tomato, capsicum): 1/2 cup",
            "Spices: Turmeric, chili powder, salt",
            "Water: As needed"
        ],
        steps:[
            "Mix all ingredients into a batter.",
            "Cook small pancakes on a non-stick pan until golden on both sides."
        ] 
    },
    "jowar veggie cutlets":{
        ingredients:[
            "Cooked jowar grains: 1 cup",
            "Mashed boiled potatoes: 1/2 cup",
            "Grated vegetables (carrot, peas): 1/2 cup",
            "Spices: Garam masala, chili powder, salt"
        ],
        steps:[
            "Mix all ingredients",
            "shape into cutlets",
            "shallow-fry or bake until golden"
        ] 
    },
    "jowar masala balls (steamed)":{
        ingredients:[
            "Jowar flour: 1 cup",
            "Grated vegetables (carrot, cabbage): 1/2 cup",
            "Spices: Turmeric, chili powder, salt",
            "Water: As needed"
        ],
        steps:[
            "Mix ingredients into a dough",
            "Shape into small balls",
            "Steam for 10-12 minutes until cooked."
        ] 
    },
    "jowar flour sticks with herbs":{
        ingredients:[
            "Jowar flour: 1 cup",
            "Mixed herbs: 1 tsp",
            "Olive oil: 2 tbsp",
            "Salt: To taste"
        ],
        steps:[
            "Mix flour, herbs, oil, and water into a dough.",
            "Roll into thin sticks, bake at 180°C for 10-12 minutes."
        ] 
    },
    "jowar chakli (baked)":{
        ingredients:[
            "Jowar flour: 1 cup",
            "Sesame seeds: 1 tsp",
            "Spices: Chili powder, cumin powder, salt",
            "Water: As needed"
        ],
        steps:[
            "Mix ingredients into a dough, shape into spirals using a chakli press.",
            "Bake at 180°C for 15-18 minutes until crispy.",
            ""
        ] 
    },
    "jowar popcorn snack":{
        ingredients:[
            "Popped jowar: 2 cups",
            "Olive oil: 1 tsp",
            "Spices: Chili powder, chaat masala, salt"  
        ],
        steps:[
            "Toss popped jowar with olive oil and spices.",
            "Serve as a light and crunchy snack."
        ] 
    },
    "jowar and lentil soup":{
        ingredients:[
            "Cooked jowar grains: 1/2 cup",
            "Yellow lentils (moong dal): 1/4 cup",
            "Onion and tomato: 1 each, chopped",
            "Spices: Turmeric, cumin, salt",
            "Water: 2 cups"
        ],
        steps:[
            "Cook lentils with water, onion, tomato, and spices.",
            "Add cooked jowar and simmer for 5-7 minutes."
        ] 
    },
    "jowar and spinach soup":{
        ingredients:[
            "Cooked jowar grains: 1/2 cup",
            "Spinach: 1 cup, chopped",
            "Garlic: 2 cloves, minced",
            "Salt and pepper: To taste",
            "Water or broth: 2 cups"
        ],
        steps:[
            "Sauté garlic and spinach in a pot.",
            "Add water, cooked jowar, and simmer for 5 minutes. Blend slightly if desired."
        ] 
    },
    "jowar and mixed veggie salad":{
        ingredients:[
            "Cooked jowar grains: 1 cup",
            "Chopped vegetables (cucumber, tomato, carrot): 1 cup",
            "Lemon juice: 1 tbsp",
            "Salt and pepper: To taste"
        ],
        steps:[
            "Mix jowar grains and vegetables in a bowl.",
            "Drizzle with lemon juice, salt, and pepper. Toss and serve"
        ] 
    },
    "jowar and chickpea salad":{
        ingredients:[
            "Cooked jowar grains: 1 cup",
            "Boiled chickpeas: 1/2 cup",
            "Chopped onion and bell peppers: 1/2 cup",
            "Olive oil: 1 tbsp",
            "Lemon juice: 1 tbsp"
        ],
        steps:[
            "Combine jowar, chickpeas, and vegetables.",
            "Add olive oil, lemon juice, salt, and toss well."
        ] 
    },
    "jowar and grilled paneer salad":{
        ingredients:[
            "Cooked jowar grains: 1 cup",
            "Grilled paneer cubes: 1/2 cup",
            "Chopped lettuce, cucumber, and tomato: 1 cup",
            "Dressing: Olive oil, salt, pepper"
        ],
        steps:[
            "Mix jowar grains, grilled paneer, and vegetables.",
            "Drizzle with dressing and serve fresh."
        ] 
    },
    "jowar millet soup with herbs":{
        ingredients:[
            "Cooked jowar grains: 1/2 cup",
            "Mixed herbs (thyme, parsley): 1 tsp",
            "Garlic: 2 cloves, minced",
            "Salt and pepper: To taste",
            "Water or vegetable broth: 2 cups"
        ],
        steps:[
            "Sauté garlic and herbs in a pot.",
            "Add water, cooked jowar, salt, and pepper, and simmer for 7-10 minutes"
        ] 
    },
    "jowar and tomato soup":{
        ingredients:[
            "Cooked jowar grains: 1/2 cup",
            "Tomatoes: 3, chopped",
            "Onion: 1, chopped",
            "Garlic: 2 cloves, minced",
            "Water or broth: 2 cups"
        ],
        steps:[
            "Sauté onion and garlic, add tomatoes and cook until soft.",
            "Blend the mixture, add cooked jowar, and simmer for 5 minutes."
        ] 
    },
    "jowar and sprouts soup":{
        ingredients:[
            "Cooked jowar grains: 1/2 cup",
            "Mixed sprouts: 1/2 cup",
            "Onion and garlic: 1 each, chopped",
            "Spices: Salt, pepper, cumin",
            "Water or broth: 2 cups"
        ],
        steps:[
            "Sauté onion and garlic, add sprouts, cooked jowar, and water.",
            "Season with spices and simmer for 7-10 minutes."
        ] 
    },
    "jowar veggie burgers":{
        ingredients:[
            "Cooked jowar grains: 1/2 cup",
            "Mashed boiled potatoes: 1/2 cup",
            "Grated vegetables (carrot, zucchini): 1/2 cup",
            "Spices: Salt, pepper, cumin powder",
            "Burger buns: 2"
        ],
        steps:[
            "Mix jowar, potatoes, vegetables, and spices. Shape into patties and grill.",
            "Assemble in buns with lettuce, tomato, and sauce of choice."
        ] 
    },
    "jowar noodles with stir fry veggies":{
        ingredients:[
            "Jowar noodles: 1 cup (store-bought or homemade)",
            "Stir-fry vegetables (capsicum, carrot, broccoli): 1 cup",
            "Soy sauce: 1 tbsp",
            "Garlic: 2 cloves, minced"
        ],
        steps:[
            "Boil noodles and set aside.",
            "Stir-fry garlic and vegetables.",
            "add soy sauce and noodles.",
            "Toss and serve."
        ] 
    },
    "jowar veggie pizza base":{
        ingredients:[
            "Jowar flour: 1 cup",
            "Yogurt: 1/4 cup",
            "Mixed vegetables: 1/2 cup",
            "Tomato sauce and cheese: As needed"
        ],
        steps:[
            "Mix jowar flour and yogurt into a dough. Roll out and cook on a tawa",
            "Spread tomato sauce, add vegetables and cheese, and bake until golden."
        ] 
    },
    "jowar sushi rolls":{
        ingredients:[
            "Cooked jowar grains: 1/2 cup",
            "Nori sheets: 2",
            "Julienned vegetables (carrot, cucumber, avocado): 1/2 cup",
            "Soy sauce: For dipping"
        ],
        steps:[
            "Spread cooked jowar on nori sheets, add vegetables, and roll tightly.",
            "Slice into pieces and serve with soy sauce."
        ] 
    },
    "jowar pasta with tomato basil sauce":{
        ingredients:[
            "Jowar pasta: 1 cup (store-bought or homemade)",
            "Tomato puree: 1 cup",
            "Basil leaves: Few",
            "Garlic: 2 cloves, minced"
        ],
        steps:[
            "Cook pasta and set aside.",
            "Sauté garlic, add tomato puree and basil, then mix with pasta."
        ] 
    },
    "jowar stuffed bell peppers":{
        ingredients:[
            "Cooked jowar grains: 1 cup",
            "Bell peppers: 2 (halved and deseeded)",
            "Grated vegetables (carrot, zucchini): 1/2 cup",
            "Cheese: 2 tbsp"
        ],
        steps:[
            "Mix jowar and vegetables, stuff into bell pepper halves.",
            "Top with cheese and bake at 180°C for 15-20 minutes."
        ] 
    },
    "jowar risotto with mushrooms":{
        ingredients:[
            "Cooked jowar grains: 1 cup",
            "Mushrooms: 1 cup, sliced",
            "Garlic: 2 cloves, minced",
            "Vegetable broth: 2 cups"
        ],
        steps:[
            "Sauté garlic and mushrooms, add cooked jowar.",
            "Pour broth gradually, cook until creamy."
        ] 
    },
    "jowar flour nachos with salsa":{
        ingredients:[
            "Jowar flour: 1 cup",
            "Spices: Chili powder, salt",
            "Tomato salsa: 1/2 cup"
        ],
        steps:[
            "Mix jowar flour, spices, and water into a dough. Roll thin, cut into triangles, and bake until crispy.",
            "Serve with tomato salsa."
        ] 
    },
    "jowar wrap with grilled chicken":{
        ingredients:[
            "Jowar rotis: 2",
            "Grilled chicken strips: 1/2 cup",
            "Lettuce, tomato, and cucumber: 1/2 cup",
            "Yogurt-based sauce: 2 tbsp"
        ],
        steps:[
            "Layer grilled chicken and vegetables on a jowar roti.",
            "Add yogurt sauce, wrap, and serve."
        ] 
    },
    "jowar idli":{
        ingredients:[
            "1 cup jowar flour",
            "1/4 cup rice flour",
            "1/2 cup yogurt",
            "1/2 tsp baking soda",
            "1/2 tsp salt (or to taste)",
            "Water (as needed)"
        ],
        steps:[
            "In a mixing bowl, combine jowar flour, rice flour, salt, and yogurt.",
            "Add water little by little to make a smooth batter (similar to regular idli batter consistency).",
            "Add baking soda and mix well.",
            "Grease the idli molds with oil and pour the batter into each mold.",
            "Steam the idlis for about 10-15 minutes or until they are cooked and firm to touch.",
            "Serve hot with chutney or sambar."
        ] 
    },
    "mango pineapple smoothie":{
        ingredients:[
            "1 cup mango (diced)",
            "1 cup pineapple (diced)",
            "1 cup coconut water",
            "2-3 Ice cubes"
        ],
        steps:[
            "Blend mango, pineapple, and coconut water until smooth.",
            "Garnish with chia seeds and flaxseeds."
        ] 
    },
    "papaya coconut smoothie":{
        ingredients:[
            "1 cup papaya (diced)",
            "1/2 cup coconut milk",
            "1/2 cup plain water",
            "2-3 Ice cubes"
        ],
        steps:[
            "Blend papaya, coconut milk, and water until smooth.",
            "Sprinkle sunflower seeds and pumpkin seeds on top.",
        ] 
    },
    "banana coconut water smoothie":{
        ingredients:[
            "1 ripe banana",
            "1 cup coconut water (or plain water if not available)",
            "1/4 tsp cinnamon (optional)",
            "2-3 Ice cubes"
        ],
        steps:[
            "Blend banana and coconut water until creamy.",
            "Top with sunflower seeds and chia seeds."
        ] 
    },
    "pineapple smoothie":{
        ingredients:[
            "1 cup pineapple (diced)",
            "1/2 cup plain water",
            "2-3 Ice cubes"
        ],
        steps:[
            "Blend pineapple, orange, and water until smooth.",
            "Garnish with sesame seeds and flaxseeds."
        ] 
    },
    "mango smoothie":{
        ingredients:[
            "1 cup mango (diced)",
            "1 cup Curd",
            "1/2 cup plain water",
            "2-3 Ice cubes"
        ],
        steps:[
            "Blend mango, passionfruit, and water until smooth.",
            "Sprinkle chia seeds and pumpkin seeds on top."
        ] 
    },
    "kiwi mango smoothie":{
        ingredients:[
            "1 kiwi (peeled and sliced)",
            "1/2 cup mango (diced)",
            "1/2 cup plain water",
            "2-3 Ice cubes"
        ],
        steps:[
            "Blend kiwi, mango, and water until smooth.",
            "Top with sunflower seeds and hemp seeds."
        ] 
    },
    "guava lime smoothie":{
        ingredients:[
            "1 guava (seeded and diced)",
            "1 tbsp lime juice",
            "1/2 cup plain water",
            "2-3 Ice cubes"
        ],
        steps:[
            "Blend guava, lime juice, and water until smooth.",
            "Garnish with pumpkin seeds and chia seeds."
        ] 
    },
    "pineapple kale smoothie":{
        ingredients:[
            "1 cup pineapple (diced)",
            "1/2 cup kale (chopped)",
            "1/2 cup plain water"
        ],
        steps:[
            "Blend pineapple, kale, and water until smooth.",
            "Sprinkle sesame seeds and flaxseeds for garnish."
        ] 
    },
    "coconut mango smoothie":{
        ingredients:[
            "1 cup mango (diced)",
            "1/2 cup coconut milk",
            "1/2 cup plain water",
            "2-3 Ice cubes"
        ],
        steps:[
            "Blend mango, coconut milk, and water until smooth.",
            "Garnish with sunflower seeds and chia seeds."
        ] 
    },
    "dragonfruit pineapple smoothie":{
        ingredients:[
            "1 cup dragonfruit (diced)",
            "1/2 cup pineapple (diced)",
            "1/2 cup plain water",
            "2-3 Ice cubes"
        ],
        steps:[
            "Blend dragonfruit, pineapple, and water until smooth.",
            "Top with flaxseeds and pumpkin seeds."
        ] 
    },
    "orange carrot smoothie":{
        ingredients:[
            "1 orange (peeled and segmented)",
            "1/2 cup carrot (grated or diced)",
            "1/2 cup plain water",
            "2-3 Ice cubes"
        ],
        steps:[
            "Blend orange, carrot, and water until smooth.",
            "Garnish with chia seeds and sunflower seeds."
        ] 
    },
    "lemon mint watermelon smoothie":{
        ingredients:[
            "1 cup watermelon (diced)",
            "1 tbsp lemon juice",
            "4 or 5 fresh mint leaves",
            "2-3 Ice cubes",
            "1/2 cup plain water"
        ],
        steps:[
            "Blend watermelon, lemon juice, mint leaves, and water until smooth.",
            "Sprinkle flaxseeds and pumpkin seeds on top."
        ] 
    },
    "grapefruit strawberry smoothie":{
        ingredients:[
            "1 grapefruit (peeled and segmented)",
            "1/2 cup strawberries (fresh or thawed if frozen)",
            "1/2 cup plain water",
            "2-3 Ice cubes"
        ],
        steps:[
            "Blend grapefruit, strawberries, and water until smooth.",
            "Garnish with chia seeds and sesame seeds."
        ] 
    },
    "lime blueberry smoothie":{
        ingredients:[
            "1 cup blueberries (fresh or thawed if frozen)",
            "1 tbsp lime juice",
            "1/2 cup plain water",
            "2-3 Ice cubes"
        ],
        steps:[
            "Blend blueberries, lime juice, and water until smooth.",
            "Top with hemp seeds and sunflower seeds."
        ] 
    },
    "spinach pineapple smoothie":{
        ingredients:[
            "1 cup spinach (washed)",
            "1 cup pineapple (diced)",
            "1/2 cup plain water"
        ],
        steps:[
            "Blend spinach, pineapple, and water until smooth.",
            "Garnish with chia seeds and flaxseeds."
        ] 
    },
    "kale apple banana smoothie":{
        ingredients:[
            "1/2 cup kale (chopped)",
            "1 apple (cored and sliced)",
            "1/2 banana",
            "1/2 cup plain water"
        ],
        steps:[
            "Blend kale, apple, banana, and water until smooth.",
            "Top with sunflower seeds and pumpkin seeds."
        ] 
    },
    "avocado mango smoothie":{
        ingredients:[
            "1/2 avocado",
            "1/2 cup mango (diced)",
            "1/2 cup plain water"
        ],
        steps:[
            "Blend avocado, mango, and water until creamy.",
            "Sprinkle flaxseeds and sesame seeds on top."
        ] 
    },
    "cucumber kiwi smoothie":{
        ingredients:[
            "1/2 cup cucumber (sliced)",
            "1 kiwi (peeled and sliced)",
            "1/2 cup plain water"
        ],
        steps:[
            "Blend cucumber, kiwi, and water until smooth.",
            "Garnish with hemp seeds and chia seeds."
        ] 
    },
    "green grapes mint smoothie":{
        ingredients:[
            "1 cup green grapes (seedless)",
            "4 or 5 fresh mint leaves",
            "1/2 cup plain water"
        ],
        steps:[
            "Blend grapes, mint leaves, and water until smooth.",
            "Top with pumpkin seeds and flaxseeds."
        ] 
    },
    "banana cranberry smoothie":{
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

function showSuggest(query) {
    suggest.innerHTML = '';  
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
            sendMessage(item); 
        });
        suggest.appendChild(suggestBlock);
    });
}

function sendMessage(recipeName = '') {
    const message = text.value.trim() || recipeName;
    if (message === "") return;  

    const userMessage = document.createElement("div");
    userMessage.textContent = `You: ${message}`;
    userMessage.classList.add("userMessage");
    showMessage.appendChild(userMessage);

    const botMessage = document.createElement("div");
    if (recipeDetails[message]) {
        const { ingredients, steps } = recipeDetails[message];
        botMessage.textContent = `Blitz: Here's the recipe for "${message}"`;

        const recipeDetailsDiv = document.createElement("div");
        recipeDetailsDiv.classList.add("recipe-details");

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
        botMessage.textContent = `Blitz: Sorry, I couldn't find a recipe for "${message}". Try a different one.`;
    }

    botMessage.classList.add("botMessage");
    showMessage.appendChild(botMessage);
    text.value = '';
    suggest.style.display = "none";  
    showMessage.scrollTop = showMessage.scrollHeight;  
}
