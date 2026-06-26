/* ==========================================================================
   EATEEZE CORE APPLICATION LOGIC & DATA
   ========================================================================== */

// 1. MOCK RECIPE DATABASE
const RECIPES_DB = [
  {
    id: "recipe-salmon-quinoa",
    title: "Lemon Herb Salmon & Quinoa Bowl",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&auto=format&fit=crop&q=60",
    tags: ["Gluten Free", "Dairy Free"],
    prepTime: "20 mins",
    calories: 520,
    macros: { protein: 38, carbs: 42, fats: 20 },
    micros: {
      sodium: { val: 420, percent: 18 },
      potassium: { val: 890, percent: 25 },
      vitamins: [
        { name: "Vitamin A", percent: 15 },
        { name: "Vitamin C", percent: 45 },
        { name: "Calcium", percent: 8 },
        { name: "Iron", percent: 20 },
        { name: "Vitamin D", percent: 80 }
      ]
    },
    ingredients: [
      { name: "Fresh Salmon Fillet", amount: 150, unit: "g" },
      { name: "Quinoa (uncooked)", amount: 60, unit: "g" },
      { name: "Fresh Broccoli Florets", amount: 100, unit: "g" },
      { name: "Olive Oil", amount: 1, unit: "tbsp" },
      { name: "Lemon Juice", amount: 2, unit: "tbsp" },
      { name: "Mixed Herbs (Dill, Parsley)", amount: 1, unit: "tbsp" },
      { name: "Garlic Clove (minced)", amount: 1, unit: "piece" }
    ],
    steps: [
      {
        title: "Cook the Quinoa",
        desc: "Rinse quinoa thoroughly. Bring 120ml water to a boil in a saucepan. Add the quinoa, cover, reduce heat to low, and simmer for 15 minutes until liquid is absorbed.",
        ingredients: ["Quinoa (uncooked)"]
      },
      {
        title: "Marinate the Salmon",
        desc: "Whisk together the olive oil, lemon juice, minced garlic, salt, and mixed herbs in a small bowl. Brush it evenly over the salmon fillet.",
        ingredients: ["Fresh Salmon Fillet", "Olive Oil", "Lemon Juice", "Mixed Herbs (Dill, Parsley)", "Garlic Clove (minced)"]
      },
      {
        title: "Sear Salmon and Steam Broccoli",
        desc: "Heat a non-stick skillet over medium-high heat. Place salmon skin-side down and cook for 4-5 minutes. Flip and cook for another 3 minutes. Meanwhile, steam broccoli for 5 minutes until tender-crisp.",
        ingredients: ["Fresh Salmon Fillet", "Fresh Broccoli Florets"]
      },
      {
        title: "Assemble and Garnish",
        desc: "Fluff the quinoa with a fork. Plate the quinoa, top with the seared salmon fillet and steamed broccoli. Drizzle with extra lemon juice if desired.",
        ingredients: ["Lemon Juice"]
      }
    ]
  },
  {
    id: "recipe-keto-chicken",
    title: "Keto Creamy Avocado Chicken Salad",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60",
    tags: ["Keto", "Gluten Free"],
    prepTime: "15 mins",
    calories: 610,
    macros: { protein: 44, carbs: 7, fats: 45 },
    micros: {
      sodium: { val: 580, percent: 25 },
      potassium: { val: 960, percent: 27 },
      vitamins: [
        { name: "Vitamin A", percent: 20 },
        { name: "Vitamin C", percent: 35 },
        { name: "Calcium", percent: 6 },
        { name: "Iron", percent: 15 },
        { name: "Vitamin E", percent: 30 }
      ]
    },
    ingredients: [
      { name: "Chicken Breast (cooked & shredded)", amount: 180, unit: "g" },
      { name: "Ripe Avocado", amount: 1, unit: "piece" },
      { name: "Mayonnaise (sugar-free)", amount: 2, unit: "tbsp" },
      { name: "Red Onion (finely diced)", amount: 30, unit: "g" },
      { name: "Fresh Cilantro (chopped)", amount: 2, unit: "tbsp" },
      { name: "Lime Juice", amount: 1, unit: "tbsp" },
      { name: "Bacon Strips (cooked & crumbled)", amount: 2, unit: "pieces" }
    ],
    steps: [
      {
        title: "Mash the Avocado Base",
        desc: "Cut the avocado, remove the pit, and scoop the flesh into a medium bowl. Mash with a fork, leaving it slightly chunky.",
        ingredients: ["Ripe Avocado"]
      },
      {
        title: "Mix Dressing Ingredients",
        desc: "Stir in mayonnaise, red onion, chopped cilantro, and lime juice into the mashed avocado until well combined. Season with a pinch of salt and pepper.",
        ingredients: ["Mayonnaise (sugar-free)", "Red Onion (finely diced)", "Fresh Cilantro (chopped)", "Lime Juice"]
      },
      {
        title: "Fold Chicken and Bacon",
        desc: "Gently fold in the shredded chicken breast and crumbled bacon bits until fully coated in the creamy dressing.",
        ingredients: ["Chicken Breast (cooked & shredded)", "Bacon Strips (cooked & crumbled)"]
      },
      {
        title: "Chill and Serve",
        desc: "Serve immediately or chill in the refrigerator for 30 minutes to let flavors meld. Perfect as-is or wrapped in lettuce leaves.",
        ingredients: []
      }
    ]
  },
  {
    id: "recipe-chickpea-bowl",
    title: "Vegan Golden Chickpea Buddha Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60",
    tags: ["Vegan", "Gluten Free", "Dairy Free"],
    prepTime: "25 mins",
    calories: 460,
    macros: { protein: 18, carbs: 64, fats: 14 },
    micros: {
      sodium: { val: 380, percent: 16 },
      potassium: { val: 780, percent: 22 },
      vitamins: [
        { name: "Vitamin A", percent: 120 },
        { name: "Vitamin C", percent: 80 },
        { name: "Calcium", percent: 15 },
        { name: "Iron", percent: 25 },
        { name: "Folate", percent: 40 }
      ]
    },
    ingredients: [
      { name: "Canned Chickpeas (drained & rinsed)", amount: 150, unit: "g" },
      { name: "Sweet Potato (cubed)", amount: 120, unit: "g" },
      { name: "Tahin Paste", amount: 1.5, unit: "tbsp" },
      { name: "Baby Spinach", amount: 50, unit: "g" },
      { name: "Turmeric Powder", amount: 0.5, unit: "tsp" },
      { name: "Olive Oil", amount: 1, unit: "tbsp" },
      { name: "Maple Syrup", amount: 1, unit: "tsp" },
      { name: "Lemon Juice", amount: 1, unit: "tbsp" }
    ],
    steps: [
      {
        title: "Roast Sweet Potato & Chickpeas",
        desc: "Preheat oven to 200°C (390°F). Toss cubed sweet potatoes and chickpeas in olive oil, turmeric, salt, and pepper. Spread on a baking sheet and roast for 20 minutes until sweet potatoes are tender and chickpeas are golden.",
        ingredients: ["Sweet Potato (cubed)", "Canned Chickpeas (drained & rinsed)", "Olive Oil", "Turmeric Powder"]
      },
      {
        title: "Whisk the Tahini Drizzle",
        desc: "In a small cup, whisk together tahini, maple syrup, lemon juice, and 1-2 tbsp warm water until it forms a smooth, pourable dressing.",
        ingredients: ["Tahin Paste", "Maple Syrup", "Lemon Juice"]
      },
      {
        title: "Prepare the Green Bed",
        desc: "Place the baby spinach in the bottom of a wide bowl. Arrange the roasted sweet potatoes and golden chickpeas on top.",
        ingredients: ["Baby Spinach"]
      },
      {
        title: "Drizzle and Serve",
        desc: "Pour the tahini maple dressing over the bowl contents. Toss lightly before eating, or eat in sections.",
        ingredients: ["Tahin Paste"]
      }
    ]
  },
  {
    id: "recipe-beef-stirfry",
    title: "Paleo Garlic Herb Beef Stir-Fry",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=60",
    tags: ["Paleo", "Gluten Free", "Dairy Free"],
    prepTime: "20 mins",
    calories: 550,
    macros: { protein: 42, carbs: 18, fats: 34 },
    micros: {
      sodium: { val: 620, percent: 27 },
      potassium: { val: 940, percent: 27 },
      vitamins: [
        { name: "Vitamin A", percent: 40 },
        { name: "Vitamin C", percent: 90 },
        { name: "Calcium", percent: 6 },
        { name: "Iron", percent: 30 },
        { name: "Vitamin B12", percent: 110 }
      ]
    },
    ingredients: [
      { name: "Flank Steak (thinly sliced)", amount: 180, unit: "g" },
      { name: "Bell Peppers (assorted, sliced)", amount: 120, unit: "g" },
      { name: "Snap Peas", amount: 80, unit: "g" },
      { name: "Coconut Aminos (soy sauce alternative)", amount: 3, unit: "tbsp" },
      { name: "Garlic Cloves (minced)", amount: 2, unit: "pieces" },
      { name: "Fresh Ginger (grated)", amount: 1, unit: "tsp" },
      { name: "Sesame Oil", amount: 1.5, unit: "tbsp" },
      { name: "Green Onions (sliced)", amount: 2, unit: "stalks" }
    ],
    steps: [
      {
        title: "Marinate the Steak",
        desc: "In a bowl, combine thinly sliced beef flank steak with coconut aminos, minced garlic, and grated fresh ginger. Let sit at room temp for 10 minutes.",
        ingredients: ["Flank Steak (thinly sliced)", "Coconut Aminos (soy sauce alternative)", "Garlic Cloves (minced)", "Fresh Ginger (grated)"]
      },
      {
        title: "Stir-Fry Vegetables",
        desc: "Heat 1 tbsp of sesame oil in a large skillet or wok over high heat. Add the bell pepper slices and snap peas, stir-frying for 3-4 minutes until vibrant but crisp. Remove veggies to a plate.",
        ingredients: ["Bell Peppers (assorted, sliced)", "Snap Peas", "Sesame Oil"]
      },
      {
        title: "Sear Beef",
        desc: "Add remaining sesame oil to the skillet. Drain marinade from beef and add beef to the smoking hot pan in a single layer. Sear without moving for 2 minutes, flip and cook 1 more minute until cooked through.",
        ingredients: ["Flank Steak (thinly sliced)", "Sesame Oil"]
      },
      {
        title: "Toss and Garnish",
        desc: "Return the cooked vegetables to the skillet, pour in the remaining marinade liquid, and toss everything together for 1 minute. Garnish with sliced green onions and serve.",
        ingredients: ["Green Onions (sliced)"]
      }
    ]
  },
  {
    id: "recipe-avocado-toast",
    title: "Mediterranean Smashed Chickpea Toast",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&auto=format&fit=crop&q=60",
    tags: ["Vegan", "Dairy Free"],
    prepTime: "10 mins",
    calories: 390,
    macros: { protein: 14, carbs: 55, fats: 12 },
    micros: {
      sodium: { val: 410, percent: 17 },
      potassium: { val: 620, percent: 18 },
      vitamins: [
        { name: "Vitamin A", percent: 8 },
        { name: "Vitamin C", percent: 25 },
        { name: "Calcium", percent: 10 },
        { name: "Iron", percent: 18 },
        { name: "Folate", percent: 35 }
      ]
    },
    ingredients: [
      { name: "Artisanal Whole Wheat Bread", amount: 2, unit: "slices" },
      { name: "Canned Chickpeas (rinsed)", amount: 100, unit: "g" },
      { name: "Ripe Avocado", amount: 0.5, unit: "piece" },
      { name: "Cherry Tomatoes (halved)", amount: 60, unit: "g" },
      { name: "Lemon Juice", amount: 1, unit: "tsp" },
      { name: "Dried Oregano & Red Pepper Flakes", amount: 1, unit: "pinch" }
    ],
    steps: [
      {
        title: "Mash Chickpeas and Avocado",
        desc: "Combine the rinsed chickpeas, half avocado, lemon juice, salt, and pepper in a bowl. Mash with a fork until chunky and paste-like.",
        ingredients: ["Canned Chickpeas (rinsed)", "Ripe Avocado", "Lemon Juice"]
      },
      {
        title: "Toast Bread",
        desc: "Toast the whole wheat artisanal bread slices in a toaster or oven until golden brown and crispy.",
        ingredients: ["Artisanal Whole Wheat Bread"]
      },
      {
        title: "Spread and Layer",
        desc: "Divide the avocado-chickpea mixture evenly between the toasted slices, smoothing it down.",
        ingredients: ["Artisanal Whole Wheat Bread"]
      },
      {
        title: "Top and Garnish",
        desc: "Top the toasts with halved cherry tomatoes. Sprinkle with dried oregano and red pepper flakes before serving.",
        ingredients: ["Cherry Tomatoes (halved)", "Dried Oregano & Red Pepper Flakes"]
      }
    ]
  },
  {
    id: "recipe-keto-shrimp",
    title: "Garlic Butter Lemon Shrimp & Zoodles",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=60",
    tags: ["Keto", "Gluten Free"],
    prepTime: "15 mins",
    calories: 450,
    macros: { protein: 32, carbs: 9, fats: 32 },
    micros: {
      sodium: { val: 680, percent: 29 },
      potassium: { val: 510, percent: 15 },
      vitamins: [
        { name: "Vitamin A", percent: 25 },
        { name: "Vitamin C", percent: 30 },
        { name: "Calcium", percent: 12 },
        { name: "Iron", percent: 22 },
        { name: "Vitamin B12", percent: 70 }
      ]
    },
    ingredients: [
      { name: "Raw Shrimp (peeled & deveined)", amount: 160, unit: "g" },
      { name: "Fresh Zucchini (spiralized)", amount: 200, unit: "g" },
      { name: "Unsalted Butter", amount: 2, unit: "tbsp" },
      { name: "Garlic Cloves (minced)", amount: 3, unit: "pieces" },
      { name: "Lemon Juice & Zest", amount: 1.5, unit: "tbsp" },
      { name: "Parmesan Cheese (grated)", amount: 2, unit: "tbsp" },
      { name: "Fresh Parsley (chopped)", amount: 1, unit: "tbsp" }
    ],
    steps: [
      {
        title: "Sauté the Garlic",
        desc: "Melt butter in a large skillet over medium heat. Add the minced garlic and sauté for 1-2 minutes until fragrant, being careful not to burn it.",
        ingredients: ["Unsalted Butter", "Garlic Cloves (minced)"]
      },
      {
        title: "Cook Shrimp",
        desc: "Add shrimp to the pan. Cook for 2-3 minutes per side until pink and opaque. Pour in lemon juice and zest, stirring to coat the shrimp.",
        ingredients: ["Raw Shrimp (peeled & deveined)", "Lemon Juice & Zest"]
      },
      {
        title: "Toss in Zoodles",
        desc: "Add spiralized zucchini noodles to the skillet. Toss gently with the shrimp and garlic butter sauce for 2 minutes just to warm through (do not overcook zoodles, or they get watery).",
        ingredients: ["Fresh Zucchini (spiralized)"]
      },
      {
        title: "Garnish and Plate",
        desc: "Transfer to a serving bowl. Garnish with chopped fresh parsley and grated parmesan cheese.",
        ingredients: ["Parmesan Cheese (grated)", "Fresh Parsley (chopped)"]
      }
    ]
  },
  {
    id: "recipe-curry-tofu",
    title: "Thai Coconut Tofu Curry",
    image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=600&auto=format&fit=crop&q=60",
    tags: ["Vegan", "Gluten Free", "Dairy Free"],
    prepTime: "25 mins",
    calories: 490,
    macros: { protein: 16, carbs: 32, fats: 34 },
    micros: {
      sodium: { val: 490, percent: 21 },
      potassium: { val: 710, percent: 20 },
      vitamins: [
        { name: "Vitamin A", percent: 90 },
        { name: "Vitamin C", percent: 110 },
        { name: "Calcium", percent: 35 },
        { name: "Iron", percent: 25 },
        { name: "Magnesium", percent: 20 }
      ]
    },
    ingredients: [
      { name: "Extra Firm Tofu (cubed)", amount: 150, unit: "g" },
      { name: "Light Coconut Milk", amount: 200, unit: "ml" },
      { name: "Thai Red Curry Paste", amount: 1.5, unit: "tbsp" },
      { name: "Mixed Bell Pepper & Carrot (sliced)", amount: 150, unit: "g" },
      { name: "Coconut Oil", amount: 1, unit: "tbsp" },
      { name: "Thai Basil Leaves", amount: 6, unit: "leaves" },
      { name: "Lime Wedge", amount: 1, unit: "piece" }
    ],
    steps: [
      {
        title: "Sear the Tofu",
        desc: "Heat coconut oil in a deep skillet over medium-high heat. Add cubed tofu and sear until golden on all sides, about 6-8 minutes. Remove and set aside.",
        ingredients: ["Extra Firm Tofu (cubed)", "Coconut Oil"]
      },
      {
        title: "Fry Curry Paste & Add Milk",
        desc: "Reduce heat to medium. Add curry paste to the pan and stir-fry for 1 minute until fragrant. Slowly whisk in the coconut milk, stirring to dissolve paste.",
        ingredients: ["Thai Red Curry Paste", "Light Coconut Milk"]
      },
      {
        title: "Simmer Vegetables & Tofu",
        desc: "Add sliced bell peppers and carrots to the skillet. Simmer for 5 minutes. Return seared tofu to the pan and cook for 3 more minutes until veggies are slightly soft.",
        ingredients: ["Extra Firm Tofu (cubed)", "Mixed Bell Pepper & Carrot (sliced)"]
      },
      {
        title: "Finish with Herbs",
        desc: "Stir in the fresh Thai basil leaves. Remove from heat and serve with a squeeze of fresh lime juice.",
        ingredients: ["Thai Basil Leaves", "Lime Wedge"]
      }
    ]
  },
  {
    id: "recipe-paleo-skillet",
    title: "Paleo Sweet Potato & Turkey Hash",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop&q=60",
    tags: ["Paleo", "Gluten Free", "Dairy Free"],
    prepTime: "25 mins",
    calories: 470,
    macros: { protein: 32, carbs: 36, fats: 22 },
    micros: {
      sodium: { val: 510, percent: 22 },
      potassium: { val: 990, percent: 28 },
      vitamins: [
        { name: "Vitamin A", percent: 180 },
        { name: "Vitamin C", percent: 50 },
        { name: "Calcium", percent: 8 },
        { name: "Iron", percent: 24 },
        { name: "Vitamin B6", percent: 45 }
      ]
    },
    ingredients: [
      { name: "Lean Ground Turkey", amount: 150, unit: "g" },
      { name: "Sweet Potato (diced small)", amount: 120, unit: "g" },
      { name: "Yellow Onion (diced)", amount: 50, unit: "g" },
      { name: "Olive Oil", amount: 1, unit: "tbsp" },
      { name: "Baby Kale", amount: 40, unit: "g" },
      { name: "Smoked Paprika & Garlic Powder", amount: 1, unit: "tsp" },
      { name: "Fresh Thyme Leaves", amount: 1, unit: "tsp" }
    ],
    steps: [
      {
        title: "Sauté Potatoes and Onions",
        desc: "Heat olive oil in a large cast-iron skillet over medium heat. Add diced sweet potatoes and onions. Cook, stirring occasionally, for 10-12 minutes until sweet potatoes are tender and browned.",
        ingredients: ["Sweet Potato (diced small)", "Yellow Onion (diced)", "Olive Oil"]
      },
      {
        title: "Brown the Turkey",
        desc: "Push potatoes to the sides of the skillet. Add lean ground turkey to the center. Season turkey with smoked paprika, garlic powder, salt, and pepper. Cook, breaking up meat with a spoon, for 6-8 minutes until cooked through.",
        ingredients: ["Lean Ground Turkey", "Smoked Paprika & Garlic Powder"]
      },
      {
        title: "Wilt the Greens",
        desc: "Mix potatoes and turkey together. Toss in baby kale and fresh thyme. Stir constantly for 2 minutes until the kale is wilted and tender.",
        ingredients: ["Baby Kale", "Fresh Thyme Leaves"]
      },
      {
        title: "Serve",
        desc: "Divide hash into serving dishes. Enjoy hot straight from the skillet.",
        ingredients: []
      }
    ]
  }
];

// 2. USER PROFILE STATE MANAGEMENT
const STATE = {
  user: {
    name: "Alex",
    goal: "Lose weight",
    restrictions: ["Gluten Free"]
  },
  currentTab: "feed",
  searchQuery: "",
  activeRecipeId: null,
  activeDetailTab: "ingredients",
  servingsCount: 2,
  weeklyPlan: {},
  cooking: {
    recipeId: null,
    currentStepIndex: 0
  }
};

// Calorie targets mapping based on goal
const GOAL_PARAMETERS = {
  "Lose weight": {
    calRangeMin: 350,
    calRangeMax: 500,
    targetMacros: { protein: 30, carbs: 35, fats: 35 } // 30% Pro, 35% Carb, 35% Fat
  },
  "Build muscle": {
    calRangeMin: 600,
    calRangeMax: 800,
    targetMacros: { protein: 40, carbs: 35, fats: 25 } // 40% Pro, 35% Carb, 25% Fat
  },
  "Eat clean": {
    calRangeMin: 400,
    calRangeMax: 600,
    targetMacros: { protein: 30, carbs: 45, fats: 25 } // 30% Pro, 45% Carb, 25% Fat
  }
};

// 3. RECIPE RANKING ALGORITHM
function calculateMatchScore(recipe, userGoal) {
  const goalParams = GOAL_PARAMETERS[userGoal];
  if (!goalParams) return 90; // Default fallback

  // Calorie Score (35 points max)
  let calorieScore = 0;
  const calVal = recipe.calories;
  if (calVal >= goalParams.calRangeMin && calVal <= goalParams.calRangeMax) {
    calorieScore = 35;
  } else {
    // Calculate distance to boundaries
    const distance = calVal < goalParams.calRangeMin 
      ? goalParams.calRangeMin - calVal 
      : calVal - goalParams.calRangeMax;
    // Penalty: 1 point per 15 calories away
    calorieScore = Math.max(0, 35 - Math.floor(distance / 15));
  }

  // Macro Ratio Score (65 points max)
  // Calculate recipe's macro energy contributions
  const pCal = (recipe.macros ? recipe.macros.protein : 0) * 4;
  const cCal = (recipe.macros ? recipe.macros.carbs : 0) * 4;
  const fCal = (recipe.macros ? recipe.macros.fats : 0) * 9;
  const totalCal = pCal + cCal + fCal;
  
  const recipePct = totalCal > 0 ? {
    protein: Math.round((pCal / totalCal) * 100),
    carbs: Math.round((cCal / totalCal) * 100),
    fats: Math.round((fCal / totalCal) * 100)
  } : { protein: 0, carbs: 0, fats: 0 };

  const targetPct = goalParams.targetMacros;
  
  // Calculate absolute sum of differences
  const pDiff = Math.abs(recipePct.protein - targetPct.protein);
  const cDiff = Math.abs(recipePct.carbs - targetPct.carbs);
  const fDiff = Math.abs(recipePct.fats - targetPct.fats);
  const totalDiff = pDiff + cDiff + fDiff;

  // Max difference is 200. Penalty: 65 * (totalDiff / 100)
  const macroScore = Math.max(0, 65 - Math.round((totalDiff / 120) * 65));

  const finalScore = Math.min(100, Math.max(50, calorieScore + macroScore));
  return finalScore;
}

// Filters & Ranks all recipes
function getFilteredAndRankedRecipes() {
  let list = [...RECIPES_DB];

  // 1. Filter strictly by user's restrictions
  if (STATE.user.restrictions.length > 0) {
    list = list.filter(recipe => {
      // Recipe must have ALL selected restriction tags
      return STATE.user.restrictions.every(rest => recipe.tags.includes(rest));
    });
  }

  // 2. Filter by search query if any
  if (STATE.searchQuery.trim() !== "") {
    const query = STATE.searchQuery.toLowerCase();
    list = list.filter(recipe => {
      const title = recipe.title || "";
      const ingredients = recipe.ingredients || [];
      const tags = recipe.tags || [];
      
      const matchTitle = title.toLowerCase().includes(query);
      const matchIngredients = ingredients.some(ing => (ing.name || "").toLowerCase().includes(query));
      const matchTags = tags.some(tag => (tag || "").toLowerCase().includes(query));
      return matchTitle || matchIngredients || matchTags;
    });
  }

  // 3. Score and Rank recipes
  const scoredList = list.map(recipe => ({
    ...recipe,
    matchScore: calculateMatchScore(recipe, STATE.user.goal)
  }));

  // Sort by match score descending
  scoredList.sort((a, b) => b.matchScore - a.matchScore);

  return scoredList;
}

// 4. WEEKLY MEAL PLAN GENERATOR (Goal based recommendations)
function generateWeeklyMealPlan() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const plan = {};
  
  // Get matching recipes for our current profile
  let matchingRecipes = getFilteredAndRankedRecipes();
  
  // Fallback to database if matching filter yields empty
  if (matchingRecipes.length === 0) {
    matchingRecipes = [...RECIPES_DB];
  }

  if (matchingRecipes.length === 0) {
    STATE.weeklyPlan = {};
    return;
  }

  days.forEach((day, index) => {
    // Pick different meals for variety using modulo
    const mealB = matchingRecipes[index % matchingRecipes.length];
    const mealL = matchingRecipes[(index + 1) % matchingRecipes.length];
    const mealD = matchingRecipes[(index + 2) % matchingRecipes.length];

    plan[day] = {
      breakfast: mealB,
      lunch: mealL,
      dinner: mealD
    };
  });

  STATE.weeklyPlan = plan;
}

// 5. CALCULATE PROFILE INTAKE SUMMARIES (For Macros Dashboard)
function calculateDailyMacrosSummary() {
  // Let's summarize the total nutrients for today (using Tuesday as "today's" logged meals)
  const todayMeals = STATE.weeklyPlan["Tuesday"] || {
    breakfast: RECIPES_DB[0],
    lunch: RECIPES_DB[1],
    dinner: RECIPES_DB[2]
  };

  const summary = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
    sodium: 0,
    potassium: 0,
    vitamins: {}
  };

  const meals = [todayMeals.breakfast, todayMeals.lunch, todayMeals.dinner];
  meals.forEach(meal => {
    if (!meal) return;
    summary.calories += meal.calories || 0;
    summary.protein += (meal.macros ? meal.macros.protein : 0);
    summary.carbs += (meal.macros ? meal.macros.carbs : 0);
    summary.fats += (meal.macros ? meal.macros.fats : 0);
    
    if (meal.micros) {
      if (meal.micros.sodium) summary.sodium += meal.micros.sodium.val || 0;
      if (meal.micros.potassium) summary.potassium += meal.micros.potassium.val || 0;
      
      const vitamins = meal.micros.vitamins || [];
      vitamins.forEach(vit => {
        if (!summary.vitamins[vit.name]) {
          summary.vitamins[vit.name] = 0;
        }
        summary.vitamins[vit.name] += vit.percent || 0;
      });
    }
  });

  // Calculate average percentage of vitamins (sum / 3, capped at 150)
  Object.keys(summary.vitamins).forEach(key => {
    summary.vitamins[key] = Math.min(150, Math.round(summary.vitamins[key] / 3));
  });

  return summary;
}

// 6. SCREEN TRANSITION LOGIC
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add("active");
  }
}

// Nav Tab Switcher
function handleTabSwitch(tabName) {
  STATE.currentTab = tabName;
  
  // Update Nav visual indicators
  document.querySelectorAll(".nav-tab").forEach(tab => {
    if (tab.dataset.tab === tabName) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  // Update Tab Panel visibility
  document.querySelectorAll(".tab-panel").forEach(panel => {
    if (panel.id === `panel-${tabName}`) {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
  });

  // Render specific content if required
  if (tabName === "feed") {
    renderRecipeFeed();
  } else if (tabName === "plan") {
    renderMealPlanner();
  } else if (tabName === "macros") {
    renderMacrosDashboard();
  } else if (tabName === "profile") {
    renderProfileSettings();
  }
}

// 7. RENDERING FUNCTIONS

// A. Feed Screen Rendering
function renderRecipeFeed() {
  const rankedRecipes = getFilteredAndRankedRecipes();
  
  const recommendedList = document.getElementById("recommended-list");
  const freshList = document.getElementById("fresh-today-list");
  
  recommendedList.innerHTML = "";
  freshList.innerHTML = "";

  document.getElementById("welcome-user").textContent = `Hey ${STATE.user.name}!`;

  if (rankedRecipes.length === 0) {
    recommendedList.innerHTML = `
      <div class="empty-feed-placeholder">
        <p>No recipes match your active restrictions & search query.</p>
        <button class="btn btn-secondary btn-sm" id="btn-reset-filters-feed" style="margin-top: 10px;">Clear Filters</button>
      </div>
    `;
    freshList.innerHTML = `<div class="empty-feed-placeholder"><p>Clear filters above to discover recipes.</p></div>`;
    
    document.getElementById("btn-reset-filters-feed").addEventListener("click", () => {
      STATE.searchQuery = "";
      document.getElementById("search-input").value = "";
      STATE.user.restrictions = [];
      syncRestrictionPillsOnboarding();
      syncRestrictionPillsProfile();
      renderRecipeFeed();
    });
    return;
  }

  // Recommended for You (Horizontal Scroll)
  // Show top matching items (up to 4 items)
  const recommendedItems = rankedRecipes.slice(0, 4);
  recommendedItems.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "white-card recommended-card";
    card.addEventListener("click", () => openRecipeDetails(recipe.id));

    let tagBadges = recipe.tags.map(t => `<span class="mini-pill-tag">${t}</span>`).join("");
    
    card.innerHTML = `
      <div class="card-img-box">
        <img src="${recipe.image}" alt="${recipe.title}">
        <span class="card-match-badge">${recipe.matchScore}% Match</span>
        <div class="card-meta-tags">${tagBadges}</div>
      </div>
      <div class="card-body">
        <h4>${recipe.title}</h4>
        <div class="card-stats">
          <span class="stat-cal"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c0 0-5 5-5 10a5 5 0 0 0 10 0c0-5-5-10-5-10z"/><path d="M12 12v4"/></svg> ${recipe.calories} kcal</span>
          <span class="stat-time"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${recipe.prepTime}</span>
        </div>
      </div>
    `;
    recommendedList.appendChild(card);
  });

  // Fresh Today (Vertical List)
  // Display remaining or all recipes
  rankedRecipes.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "list-recipe-card";
    card.addEventListener("click", () => openRecipeDetails(recipe.id));

    let tagLine = recipe.tags.map(t => `<span>${t}</span>`).join("");

    card.innerHTML = `
      <div class="card-image">
        <img src="${recipe.image}" alt="${recipe.title}">
      </div>
      <div class="card-info">
        <div>
          <h4>${recipe.title}</h4>
          <div class="tag-line">${tagLine}</div>
        </div>
        <div class="footer-stats">
          <span class="stat-cal" style="color: var(--primary-deep); font-weight: 700;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c0 0-5 5-5 10a5 5 0 0 0 10 0c0-5-5-10-5-10z"/><path d="M12 12v4"/></svg> ${recipe.calories} kcal</span>
          <span class="stat-time"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${recipe.prepTime}</span>
        </div>
      </div>
    `;
    freshList.appendChild(card);
  });
}

// B. Recipe Detail Screen Rendering
function openRecipeDetails(recipeId) {
  const recipe = RECIPES_DB.find(r => r.id === recipeId);
  if (!recipe) return;

  STATE.activeRecipeId = recipeId;
  STATE.servingsCount = 2; // Default starting count
  STATE.activeDetailTab = "ingredients";

  // Fill in Header & Image
  document.getElementById("detail-hero-img").src = recipe.image;
  document.getElementById("detail-recipe-title").textContent = recipe.title;

  // Add tag line
  const tagsRow = document.getElementById("detail-tags-row");
  tagsRow.innerHTML = `<span class="detail-badge goal-type">${STATE.user.goal}</span>`;
  recipe.tags.forEach(t => {
    tagsRow.innerHTML += `<span class="detail-badge restriction">${t}</span>`;
  });

  // Populate quick stats
  document.getElementById("detail-calories").textContent = `${recipe.calories} kcal`;
  document.getElementById("detail-time").textContent = recipe.prepTime;
  const matchScore = calculateMatchScore(recipe, STATE.user.goal);
  document.getElementById("detail-match-score").textContent = `${matchScore}%`;

  // Render sub-tabs content
  updateDetailTabsContainer(recipe);

  // Set default tabs trigger active state
  document.querySelectorAll(".detail-tab-btn").forEach(btn => {
    if (btn.dataset.detailTab === "ingredients") {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  document.querySelectorAll(".detail-panel").forEach(panel => {
    if (panel.id === "detail-tab-ingredients") {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
  });

  // Show screen details
  showScreen("screen-detail");
}

function updateDetailTabsContainer(recipe) {
  // 1. Ingredients rendering
  document.getElementById("servings-value").textContent = STATE.servingsCount;
  const listContainer = document.getElementById("detail-ingredients-list");
  listContainer.innerHTML = "";

  recipe.ingredients.forEach(ing => {
    // Dynamic serving calculation (base calculations are set for 2 servings)
    const scaledAmount = Math.round((ing.amount / 2) * STATE.servingsCount * 10) / 10;
    
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="ing-name">${ing.name}</span>
      <span class="ing-qty">${scaledAmount} ${ing.unit}</span>
    `;
    listContainer.appendChild(li);
  });

  // 2. Prep Timeline rendering
  const prepTimeline = document.getElementById("detail-prep-steps");
  prepTimeline.innerHTML = "";
  recipe.steps.forEach((step, idx) => {
    const stepDiv = document.createElement("div");
    stepDiv.className = "prep-step";
    stepDiv.innerHTML = `
      <div class="prep-step-num-box">
        <div class="prep-step-number">${idx + 1}</div>
        <div class="prep-step-line"></div>
      </div>
      <div class="prep-step-info">
        <h4>${step.title}</h4>
        <p>${step.desc}</p>
      </div>
    `;
    prepTimeline.appendChild(stepDiv);
  });

  // 3. Nutrition Summary
  document.getElementById("detail-macro-protein").textContent = `${recipe.macros.protein}g`;
  document.getElementById("detail-macro-carbs").textContent = `${recipe.macros.carbs}g`;
  document.getElementById("detail-macro-fats").textContent = `${recipe.macros.fats}g`;

  // Vitamins & Minerals
  const microsList = document.getElementById("detail-micros-list");
  microsList.innerHTML = "";

  const sodium = (recipe.micros && recipe.micros.sodium) ? recipe.micros.sodium : { val: 0, percent: 0 };
  const potassium = (recipe.micros && recipe.micros.potassium) ? recipe.micros.potassium : { val: 0, percent: 0 };
  const vitamins = (recipe.micros && recipe.micros.vitamins) ? recipe.micros.vitamins : [];
 
  // Insert Sodium details
  const naDiv = document.createElement("div");
  naDiv.className = "collapsible-list-item";
  naDiv.innerHTML = `
    <div class="col-item-header">
      <span class="col-item-name">Sodium</span>
      <span class="col-item-val">${sodium.val} mg (${sodium.percent}%)</span>
    </div>
    <div class="progress-bar-container mini">
      <div class="progress-bar-fill green-accent" style="width: ${Math.min(100, sodium.percent)}%;"></div>
    </div>
  `;
  microsList.appendChild(naDiv);
 
  // Insert Potassium details
  const kDiv = document.createElement("div");
  kDiv.className = "collapsible-list-item";
  kDiv.innerHTML = `
    <div class="col-item-header">
      <span class="col-item-name">Potassium</span>
      <span class="col-item-val">${potassium.val} mg (${potassium.percent}%)</span>
    </div>
    <div class="progress-bar-container mini">
      <div class="progress-bar-fill teal-accent" style="width: ${Math.min(100, potassium.percent)}%;"></div>
    </div>
  `;
  microsList.appendChild(kDiv);
 
  // Insert Vitamins list
  vitamins.forEach(vit => {
    const vitDiv = document.createElement("div");
    vitDiv.className = "collapsible-list-item";
    vitDiv.innerHTML = `
      <div class="col-item-header">
        <span class="col-item-name">${vit.name}</span>
        <span class="col-item-val">${vit.percent}% DV</span>
      </div>
      <div class="progress-bar-container mini">
        <div class="progress-bar-fill green-accent" style="width: ${Math.min(100, vit.percent)}%;"></div>
      </div>
    `;
    microsList.appendChild(vitDiv);
  });
}

// C. Weekly Planner Panel Rendering
function renderMealPlanner() {
  const container = document.getElementById("plan-days-container");
  container.innerHTML = "";

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  days.forEach(day => {
    const dayData = STATE.weeklyPlan[day];
    if (!dayData) return;

    const daySection = document.createElement("div");
    daySection.className = "plan-day-section";

    // Count calories for the day
    const totalDayCals = dayData.breakfast.calories + dayData.lunch.calories + dayData.dinner.calories;

    daySection.innerHTML = `
      <h3>${day} <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><path d="M12 2c0 0-5 5-5 10a5 5 0 0 0 10 0c0-5-5-10-5-10z"/><path d="M12 12v4"/></svg> ${totalDayCals} kcal total</span></h3>
      <div class="plan-meals-grid">
        <!-- Breakfast -->
        <div class="plan-meal-item" data-id="${dayData.breakfast.id}">
          <span class="meal-time-tag">Breakfast</span>
          <img src="${dayData.breakfast.image}" alt="${dayData.breakfast.title}">
          <div class="meal-summary-info">
            <h4>${dayData.breakfast.title}</h4>
            <p><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${dayData.breakfast.prepTime} &bull; <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><path d="M12 2c0 0-5 5-5 10a5 5 0 0 0 10 0c0-5-5-10-5-10z"/><path d="M12 12v4"/></svg> ${dayData.breakfast.calories} kcal</p>
          </div>
        </div>
        <!-- Lunch -->
        <div class="plan-meal-item" data-id="${dayData.lunch.id}">
          <span class="meal-time-tag" style="background-color: var(--primary-light-bg); color: var(--primary-light);">Lunch</span>
          <img src="${dayData.lunch.image}" alt="${dayData.lunch.title}">
          <div class="meal-summary-info">
            <h4>${dayData.lunch.title}</h4>
            <p><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${dayData.lunch.prepTime} &bull; <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><path d="M12 2c0 0-5 5-5 10a5 5 0 0 0 10 0c0-5-5-10-5-10z"/><path d="M12 12v4"/></svg> ${dayData.lunch.calories} kcal</p>
          </div>
        </div>
        <!-- Dinner -->
        <div class="plan-meal-item" data-id="${dayData.dinner.id}">
          <span class="meal-time-tag" style="background: rgba(224, 64, 251, 0.12); color: #E040FB;">Dinner</span>
          <img src="${dayData.dinner.image}" alt="${dayData.dinner.title}">
          <div class="meal-summary-info">
            <h4>${dayData.dinner.title}</h4>
            <p><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${dayData.dinner.prepTime} &bull; <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><path d="M12 2c0 0-5 5-5 10a5 5 0 0 0 10 0c0-5-5-10-5-10z"/><path d="M12 12v4"/></svg> ${dayData.dinner.calories} kcal</p>
          </div>
        </div>
      </div>
    `;

    // Hook click listeners to detail screens
    daySection.querySelectorAll(".plan-meal-item").forEach(item => {
      item.addEventListener("click", () => {
        openRecipeDetails(item.dataset.id);
      });
    });

    container.appendChild(daySection);
  });
}

// D. Macros Dashboard Panel Rendering
function renderMacrosDashboard() {
  const summary = calculateDailyMacrosSummary();

  // Populate totals
  document.getElementById("donut-calories-val").textContent = summary.calories.toLocaleString();
  document.getElementById("stat-sodium-val").textContent = `${summary.sodium.toLocaleString()} mg`;
  document.getElementById("stat-potassium-val").textContent = `${summary.potassium.toLocaleString()} mg`;

  // Sodium limit (2300mg is RDA)
  const sodiumPct = Math.min(100, Math.round((summary.sodium / 2300) * 100));
  const potassiumPct = Math.min(100, Math.round((summary.potassium / 3500) * 100));

  document.getElementById("bar-sodium-fill").style.width = `${sodiumPct}%`;
  document.getElementById("bar-sodium-fill").parentElement.nextElementSibling.textContent = `${sodiumPct}% of Daily Limit`;
  document.getElementById("bar-potassium-fill").style.width = `${potassiumPct}%`;
  document.getElementById("bar-potassium-fill").parentElement.nextElementSibling.textContent = `${potassiumPct}% of Daily Target`;

  // Recalculate segment values for donut ring
  // Protein (4 kcal/g), Carbs (4 kcal/g), Fats (9 kcal/g)
  const pCal = summary.protein * 4;
  const cCal = summary.carbs * 4;
  const fCal = summary.fats * 9;
  const totalCal = pCal + cCal + fCal;

  const pPct = totalCal > 0 ? Math.round((pCal / totalCal) * 100) : 0;
  const cPct = totalCal > 0 ? Math.round((cCal / totalCal) * 100) : 0;
  const fPct = totalCal > 0 ? (100 - pPct - cPct) : 0;

  document.getElementById("donut-protein-stat").textContent = `${summary.protein}g (${pPct}%)`;
  document.getElementById("donut-carbs-stat").textContent = `${summary.carbs}g (${cPct}%)`;
  document.getElementById("donut-fats-stat").textContent = `${summary.fats}g (${fPct}%)`;

  // Draw segments (SVG stroke-dasharray styling)
  // Circumference of circles is 100 (r = 15.9155)
  const pSegment = document.querySelector(".circle-segment-protein");
  const cSegment = document.querySelector(".circle-segment-carbs");
  const fSegment = document.querySelector(".circle-segment-fats");

  // Format: stroke-dasharray="[length] [remaining]"
  // Set offset positions sequentially
  pSegment.setAttribute("stroke-dasharray", `${pPct}, 100`);
  pSegment.setAttribute("stroke-dashoffset", "0");

  cSegment.setAttribute("stroke-dasharray", `${cPct}, 100`);
  cSegment.setAttribute("stroke-dashoffset", `-${pPct}`);

  fSegment.setAttribute("stroke-dasharray", `${fPct}, 100`);
  fSegment.setAttribute("stroke-dashoffset", `-${pPct + cPct}`);

  // Populate Vitamins Collapsible List
  const vitaminsList = document.getElementById("vitamins-breakdown-list");
  vitaminsList.innerHTML = "";
  
  Object.keys(summary.vitamins).forEach(key => {
    const pct = summary.vitamins[key];
    const row = document.createElement("div");
    row.className = "collapsible-list-item";
    row.innerHTML = `
      <div class="col-item-header">
        <span class="col-item-name">${key}</span>
        <span class="col-item-val">${pct}% DV</span>
      </div>
      <div class="progress-bar-container mini">
        <div class="progress-bar-fill green-accent" style="width: ${Math.min(100, pct)}%;"></div>
      </div>
    `;
    vitaminsList.appendChild(row);
  });
}

// E. Profile Panel Settings Rendering
function renderProfileSettings() {
  // Sync goal buttons
  document.querySelectorAll(".goal-pill-btn").forEach(btn => {
    if (btn.dataset.goal === STATE.user.goal) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Sync restriction pills
  syncRestrictionPillsProfile();
}

function syncRestrictionPillsProfile() {
  document.querySelectorAll(".profile-pills .pill-btn").forEach(btn => {
    const tag = btn.dataset.restriction;
    if (STATE.user.restrictions.includes(tag)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function syncRestrictionPillsOnboarding() {
  document.querySelectorAll("#screen-onboarding .pill-btn").forEach(btn => {
    const tag = btn.dataset.restriction;
    if (STATE.user.restrictions.includes(tag)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// F. Fullscreen Cooking Mode Screen Rendering
function startCookingMode(recipeId) {
  const recipe = RECIPES_DB.find(r => r.id === recipeId);
  if (!recipe) return;

  STATE.cooking.recipeId = recipeId;
  STATE.cooking.currentStepIndex = 0;

  renderCookingStep();
  showScreen("screen-cooking");
}

function renderCookingStep() {
  const recipe = RECIPES_DB.find(r => r.id === STATE.cooking.recipeId);
  if (!recipe) return;

  const stepIdx = STATE.cooking.currentStepIndex;
  const step = recipe.steps[stepIdx];

  // Top header indicators
  document.getElementById("cooking-step-badge").textContent = `Step ${stepIdx + 1} of ${recipe.steps.length}`;
  
  // Progress fill
  const pct = Math.round(((stepIdx + 1) / recipe.steps.length) * 100);
  document.getElementById("cooking-progress-fill").style.width = `${pct}%`;

  // Content
  document.getElementById("cooking-step-title").textContent = `${stepIdx + 1}. ${step.title}`;
  document.getElementById("cooking-step-desc").textContent = step.desc;

  // Ingredients checklist for current step
  const checklist = document.getElementById("cooking-step-ingredients-list");
  checklist.innerHTML = "";

  if (step.ingredients.length === 0) {
    checklist.parentElement.style.display = "none";
  } else {
    checklist.parentElement.style.display = "block";
    
    // Find matching items from base recipe
    step.ingredients.forEach((ingName, idx) => {
      const matchIng = recipe.ingredients.find(i => 
        i.name.toLowerCase().includes(ingName.toLowerCase()) || 
        ingName.toLowerCase().includes(i.name.toLowerCase())
      );
      const scaledVal = matchIng ? Math.round((matchIng.amount / 2) * STATE.servingsCount * 10) / 10 : "";
      const unit = matchIng ? matchIng.unit : "";
      
      const label = document.createElement("label");
      label.className = "check-item";
      label.innerHTML = `
        <input type="checkbox" id="chk-ing-${idx}">
        <span>${ingName} ${scaledVal ? `(${scaledVal} ${unit})` : ""}</span>
      `;
      checklist.appendChild(label);
    });
  }

  // Footer nav adjustments
  const prevBtn = document.getElementById("cooking-prev-btn");
  const nextBtn = document.getElementById("cooking-next-btn");

  if (stepIdx === 0) {
    prevBtn.style.visibility = "hidden";
  } else {
    prevBtn.style.visibility = "visible";
  }

  if (stepIdx === recipe.steps.length - 1) {
    nextBtn.querySelector("span").textContent = "Finish";
  } else {
    nextBtn.querySelector("span").textContent = "Next";
  }
}

// 8. SIMULATED AI RECIPE GENERATION

// Lock flag to prevent concurrent generators
let isGeneratingAI = false;

function executeAIGenerationFlow(onComplete) {
  if (isGeneratingAI) return;
  isGeneratingAI = true;

  showScreen("screen-ai-loader");
  const bar = document.getElementById("loader-bar-fill");
  const text = document.getElementById("loader-status-text");

  bar.style.width = "0%";
  
  const statuses = [
    { text: "Scanning dietary restrictions...", time: 0 },
    { text: "Optimizing calorie boundaries...", time: 1000 },
    { text: "Rebalancing macronutrient levels...", time: 2000 },
    { text: "Synthesizing customized recipes...", time: 3000 },
    { text: "Plating fresh ingredients...", time: 4000 }
  ];

  statuses.forEach(status => {
    setTimeout(() => {
      text.textContent = status.text;
    }, status.time);
  });

  // Animate loader progress bar
  let progress = 0;
  const interval = setInterval(() => {
    progress += 2;
    bar.style.width = `${progress}%`;
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        // Build new recipe dynamically
        const newRecipe = buildCustomRecipeFromAI();
        // Insert at start of DB
        RECIPES_DB.unshift(newRecipe);
        
        // Refresh plans and details
        generateWeeklyMealPlan();
        
        isGeneratingAI = false;
        onComplete();
      }, 500);
    }
  }, 100);
}

function buildCustomRecipeFromAI() {
  const goal = STATE.user.goal;
  const restrictions = STATE.user.restrictions;
  const params = GOAL_PARAMETERS[goal] || GOAL_PARAMETERS["Lose weight"];

  // Dynamic names matching diets
  let title = "AI Custom Grilled Plate";
  let image = "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60";
  let tags = [...restrictions];
  
  let ingredients = [
    { name: "Lean Chicken Breast", amount: 150, unit: "g" },
    { name: "Steamed Sweet Potato", amount: 120, unit: "g" },
    { name: "Organic Asparagus", amount: 80, unit: "g" },
    { name: "Extra Virgin Olive Oil", amount: 1, unit: "tbsp" },
    { name: "Fresh Garlic Cloves", amount: 2, unit: "pieces" }
  ];

  let steps = [
    {
      title: "Clean and Season",
      desc: "Wash the chicken breast and asparagus. Season the chicken generously with garlic powder, salt, and pepper, rub with olive oil.",
      ingredients: ["Lean Chicken Breast", "Extra Virgin Olive Oil"]
    },
    {
      title: "Steam Veggies",
      desc: "Steam the sweet potato cubes and asparagus for 6 minutes until tender-crisp.",
      ingredients: ["Steamed Sweet Potato", "Organic Asparagus"]
    },
    {
      title: "Grill Chicken",
      desc: "Heat a grill pan over medium-high heat. Cook chicken for 6 minutes per side until the internal temperature reaches 74°C (165°F).",
      ingredients: ["Lean Chicken Breast"]
    },
    {
      title: "Assemble and Plate",
      desc: "Slice the grilled chicken and arrange alongside the steamed sweet potatoes and asparagus, drizzling with remaining olive oil.",
      ingredients: []
    }
  ];

  if (restrictions.includes("Vegan")) {
    title = "AI Golden Turmeric Tempeh Bowl";
    image = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60";
    ingredients = [
      { name: "Organic Tempeh (cubed)", amount: 150, unit: "g" },
      { name: "Fresh Broccoli & Spinach", amount: 120, unit: "g" },
      { name: "Organic Turmeric Powder", amount: 0.5, unit: "tsp" },
      { name: "Tahini Dressing", amount: 2, unit: "tbsp" },
      { name: "Fresh Garlic Cloves", amount: 2, unit: "pieces" }
    ];
    steps = [
      {
        title: "Prep Greens and Tempeh",
        desc: "Wash and dry the organic spinach and broccoli. Cube the tempeh and toss with turmeric, salt, and pepper.",
        ingredients: ["Organic Tempeh (cubed)", "Organic Turmeric Powder"]
      },
      {
        title: "Sauté Aromatics",
        desc: "Heat a small amount of water or olive oil in a pan. Sauté the minced garlic cloves for 1 minute until fragrant.",
        ingredients: ["Fresh Garlic Cloves"]
      },
      {
        title: "Sear Tempeh and Veggies",
        desc: "Add seasoned tempeh to the hot pan. Cook for 4 minutes per side until golden. Toss in the fresh broccoli and spinach in the final minute to steam.",
        ingredients: ["Organic Tempeh (cubed)", "Fresh Broccoli & Spinach"]
      },
      {
        title: "Plate and Drizzle",
        desc: "Arrange the seared tempeh and greens in a bowl. Drizzle with the creamy tahini dressing.",
        ingredients: ["Tahini Dressing"]
      }
    ];
  } else if (restrictions.includes("Keto")) {
    title = "AI Herb Butter Ribeye Steak & Asparagus";
    image = "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60";
    ingredients = [
      { name: "Ribeye Steak", amount: 180, unit: "g" },
      { name: "Fresh Asparagus Spears", amount: 120, unit: "g" },
      { name: "Grass-Fed Butter", amount: 2, unit: "tbsp" },
      { name: "Fresh Rosemary & Thyme", amount: 1, unit: "tsp" },
      { name: "Fresh Garlic Cloves", amount: 2, unit: "pieces" }
    ];
    steps = [
      {
        title: "Season Steak",
        desc: "Pat the ribeye steak dry with paper towels. Season generously with coarse salt, black pepper, and minced fresh rosemary.",
        ingredients: ["Ribeye Steak", "Fresh Rosemary & Thyme"]
      },
      {
        title: "Melt Herb Butter",
        desc: "Melt the grass-fed butter in a hot cast-iron skillet over medium-high heat. Add the crushed garlic cloves.",
        ingredients: ["Grass-Fed Butter", "Fresh Garlic Cloves"]
      },
      {
        title: "Sear Steak and Asparagus",
        desc: "Place the steak in the hot skillet. Sear for 3-4 minutes per side, spooning the herb butter over the steak. Toss asparagus into the pan during the final 3 minutes.",
        ingredients: ["Ribeye Steak", "Fresh Asparagus Spears"]
      },
      {
        title: "Rest and Plate",
        desc: "Let the steak rest for 5 minutes. Arrange the steak slices alongside the tender asparagus, drizzling with remaining pan juices.",
        ingredients: []
      }
    ];
  } else if (restrictions.includes("Paleo")) {
    title = "AI Lemon Pesto Turkey Patties";
    image = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop&q=60";
    ingredients = [
      { name: "Ground Turkey Breast", amount: 160, unit: "g" },
      { name: "Baby Zucchini & Cauliflower", amount: 120, unit: "g" },
      { name: "Cold-Pressed Avocado Oil", amount: 1, unit: "tbsp" },
      { name: "Fresh Basil Pesto (dairy-free)", amount: 2, unit: "tbsp" },
      { name: "Fresh Garlic Cloves", amount: 2, unit: "pieces" }
    ];
    steps = [
      {
        title: "Form Turkey Patties",
        desc: "In a bowl, mix ground turkey with minced garlic, salt, and pepper. Shape into 3 even circular patties.",
        ingredients: ["Ground Turkey Breast", "Fresh Garlic Cloves"]
      },
      {
        title: "Sauté Veggies",
        desc: "Heat avocado oil in a skillet. Sauté baby zucchini and cauliflower pieces until browned and tender, then set aside.",
        ingredients: ["Baby Zucchini & Cauliflower", "Cold-Pressed Avocado Oil"]
      },
      {
        title: "Sear Patties",
        desc: "Add patties to the hot skillet. Cook for 5 minutes per side until the internal temperature reaches 74°C (165°F).",
        ingredients: ["Ground Turkey Breast"]
      },
      {
        title: "Plate and Drizzle",
        desc: "Arrange turkey patties over the sautéed zucchini and cauliflower. Drizzle the dairy-free pesto over the patties.",
        ingredients: ["Fresh Basil Pesto (dairy-free)"]
      }
    ];
  } else if (restrictions.includes("Gluten Free") && restrictions.includes("Dairy Free")) {
    title = "AI Garlic Chicken Avocado Rice Bowl";
    image = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60";
    ingredients = [
      { name: "Chicken Breast (cubed)", amount: 150, unit: "g" },
      { name: "Ripe Avocado (sliced)", amount: 1, unit: "piece" },
      { name: "Jasmine Rice (cooked)", amount: 100, unit: "g" },
      { name: "Cold-Pressed Olive Oil", amount: 1, unit: "tbsp" },
      { name: "Coconut Aminos", amount: 2, unit: "tbsp" },
      { name: "Fresh Garlic Cloves", amount: 2, unit: "pieces" }
    ];
    steps = [
      {
        title: "Marinate Chicken",
        desc: "Toss cubed chicken breast with minced garlic, olive oil, and coconut aminos in a bowl. Let marinate for 5 minutes.",
        ingredients: ["Chicken Breast (cubed)", "Cold-Pressed Olive Oil", "Coconut Aminos", "Fresh Garlic Cloves"]
      },
      {
        title: "Pan-Fry Chicken",
        desc: "Cook the marinated chicken in a hot skillet for 6-8 minutes, stirring frequently, until golden and cooked through.",
        ingredients: ["Chicken Breast (cubed)"]
      },
      {
        title: "Assemble Bowl",
        desc: "Place the warm cooked jasmine rice in a bowl. Arrange the garlic chicken over the top.",
        ingredients: ["Jasmine Rice (cooked)"]
      },
      {
        title: "Garnish and Serve",
        desc: "Add the sliced avocado to the bowl. Drizzle with extra coconut aminos to taste.",
        ingredients: ["Ripe Avocado (sliced)"]
      }
    ];
  }

  // Calculate strict calorie target matching current user constraints
  const targetCals = Math.round((params.calRangeMin + params.calRangeMax) / 2);
  
  // Calculate macros corresponding to target percentages
  const targetProtGrams = Math.round((targetCals * (params.targetMacros.protein / 100)) / 4);
  const targetCarbGrams = Math.round((targetCals * (params.targetMacros.carbs / 100)) / 4);
  const targetFatGrams = Math.round((targetCals * (params.targetMacros.fats / 100)) / 9);

  return {
    id: `recipe-ai-generated-${Date.now()}`,
    title: title,
    image: image,
    tags: tags.length > 0 ? tags : ["Clean Eating"],
    prepTime: "18 mins",
    calories: targetCals,
    macros: { protein: targetProtGrams, carbs: targetCarbGrams, fats: targetFatGrams },
    micros: {
      sodium: { val: 450, percent: 19 },
      potassium: { val: 820, percent: 23 },
      vitamins: [
        { name: "Vitamin A", percent: 85 },
        { name: "Vitamin C", percent: 120 },
        { name: "Calcium", percent: 15 },
        { name: "Iron", percent: 25 },
        { name: "Zinc", percent: 18 }
      ]
    },
    ingredients: ingredients,
    steps: steps
  };
}

// ==========================================================================
// 9. EVENT LISTENERS AND APP INITIALIZATION
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {

  // Login screen buttons
  document.getElementById("btn-login").addEventListener("click", () => {
    const email = document.getElementById("login-email").value.trim();
    if (email) {
      // Extract name from email prefix
      const nameFromEmail = email.split("@")[0];
      STATE.user.name = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
    }
    showScreen("screen-onboarding");
  });

  document.getElementById("btn-continue-guest").addEventListener("click", () => {
    STATE.user.name = "Guest";
    showScreen("screen-onboarding");
  });

  document.getElementById("login-signup-link").addEventListener("click", () => {
    showScreen("screen-onboarding");
  });

  // Save Preferences inline button — toggle .saved for green state
  document.getElementById("btn-save-preferences").addEventListener("click", function() {
    this.classList.add("saved");
  }, { capture: true }); // runs before the main save handler below

  // Onboarding Goal Cards Click
  document.querySelectorAll("#screen-onboarding .goal-card").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll("#screen-onboarding .goal-card").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      STATE.user.goal = card.dataset.goal;
    });
  });

  // Onboarding Restrictions Pills Click
  document.querySelectorAll("#screen-onboarding .pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const rest = btn.dataset.restriction;
      if (STATE.user.restrictions.includes(rest)) {
        STATE.user.restrictions = STATE.user.restrictions.filter(r => r !== rest);
        btn.classList.remove("active");
      } else {
        STATE.user.restrictions.push(rest);
        btn.classList.add("active");
      }
    });
  });

  // Onboarding Save Button Click
  document.getElementById("btn-save-preferences").addEventListener("click", () => {
    executeAIGenerationFlow(() => {
      // Sync values to profile settings
      syncRestrictionPillsProfile();

      // Update welcome text and profile card with the logged-in user's name
      updateUserDisplay();

      // Go to feed tab
      handleTabSwitch("feed");
      showScreen("screen-main");
    });
  });

  // Bottom Navigation Tabs Click
  document.querySelectorAll(".bottom-nav .nav-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      handleTabSwitch(tab.dataset.tab);
    });
  });

  // Search Bar input
  document.getElementById("search-input").addEventListener("input", (e) => {
    STATE.searchQuery = e.target.value;
    renderRecipeFeed();
  });

  // Custom AI Generation Trigger
  document.getElementById("btn-generate-recipe").addEventListener("click", () => {
    executeAIGenerationFlow(() => {
      handleTabSwitch("feed");
      // Scroll feed back to top and focus on new item
      document.querySelector(".main-content").scrollTop = 0;
    });
  });

  // Detail screen Back Button click
  document.getElementById("detail-back-btn").addEventListener("click", () => {
    showScreen("screen-main");
  });

  // Detail tab switching click
  document.querySelectorAll(".detail-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.dataset.detailTab;
      STATE.activeDetailTab = tabId;

      document.querySelectorAll(".detail-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      document.querySelectorAll(".detail-panel").forEach(p => {
        if (p.id === `detail-tab-${tabId}`) {
          p.classList.add("active");
        } else {
          p.classList.remove("active");
        }
      });
    });
  });

  // Servings size adjustments steppers
  document.getElementById("servings-minus").addEventListener("click", () => {
    if (STATE.servingsCount > 1) {
      STATE.servingsCount--;
      const recipe = RECIPES_DB.find(r => r.id === STATE.activeRecipeId);
      updateDetailTabsContainer(recipe);
    }
  });

  document.getElementById("servings-plus").addEventListener("click", () => {
    STATE.servingsCount++;
    const recipe = RECIPES_DB.find(r => r.id === STATE.activeRecipeId);
    updateDetailTabsContainer(recipe);
  });

  // Start Cooking Mode button click
  document.getElementById("btn-start-cooking").addEventListener("click", () => {
    startCookingMode(STATE.activeRecipeId);
  });

  // Cooking Mode header close button click
  document.getElementById("cooking-close-btn").addEventListener("click", () => {
    showScreen("screen-detail");
  });

  // Cooking step navigation buttons click
  document.getElementById("cooking-prev-btn").addEventListener("click", () => {
    if (STATE.cooking.currentStepIndex > 0) {
      STATE.cooking.currentStepIndex--;
      renderCookingStep();
    }
  });

  document.getElementById("cooking-next-btn").addEventListener("click", () => {
    const recipe = RECIPES_DB.find(r => r.id === STATE.cooking.recipeId);
    if (!recipe) return;

    if (STATE.cooking.currentStepIndex < recipe.steps.length - 1) {
      STATE.cooking.currentStepIndex++;
      renderCookingStep();
    } else {
      // Completed cooking! Show nice alert and go back
      alert(`Congratulations! You have successfully plated: "${recipe.title}"! Enjoy your delicious AI-precision meal!`);
      showScreen("screen-detail");
    }
  });

  // Profile active goal picking click
  document.querySelectorAll(".profile-goal-picker .goal-pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".profile-goal-picker .goal-pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      STATE.user.goal = btn.dataset.goal;
      generateWeeklyMealPlan(); // Sync plan in real-time
    });
  });

  // Profile active restriction pills click
  document.querySelectorAll(".profile-pills .pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const rest = btn.dataset.restriction;
      if (STATE.user.restrictions.includes(rest)) {
        STATE.user.restrictions = STATE.user.restrictions.filter(r => r !== rest);
        btn.classList.remove("active");
      } else {
        STATE.user.restrictions.push(rest);
        btn.classList.add("active");
      }
      generateWeeklyMealPlan(); // Sync plan in real-time
    });
  });

  // Profile Rebuild Engine button click
  document.getElementById("btn-profile-rebuild").addEventListener("click", () => {
    executeAIGenerationFlow(() => {
      syncRestrictionPillsOnboarding();
      handleTabSwitch("feed");
      showScreen("screen-main");
    });
  });

  // Macros Expandable Vitamins List toggle click
  document.getElementById("btn-toggle-vitamins").addEventListener("click", (e) => {
    const btn = e.currentTarget;
    const content = document.getElementById("vitamins-breakdown-list");
    btn.classList.toggle("active");
    content.classList.toggle("hidden");
  });

  // Re-generate Weekly plan button click in Plan tab
  document.getElementById("regenerate-plan-btn").addEventListener("click", () => {
    executeAIGenerationFlow(() => {
      handleTabSwitch("plan");
    });
  });

  // Top header filter button click in Feed (redirects to profile screen to adjust filter targets)
  document.getElementById("feed-filter-btn").addEventListener("click", () => {
    handleTabSwitch("profile");
  });

  // Theme toggle (Light / Dark mode)
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeLabel = document.getElementById("theme-label");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isLight = document.documentElement.classList.toggle("light-mode");
      themeToggleBtn.classList.toggle("active", isLight);
      themeLabel.textContent = isLight ? "Dark Mode" : "Light Mode";
    });
  }

  // INITIALIZE BASE WEEKLY PLAN & INTAKE ON STARTUP
  generateWeeklyMealPlan();
  syncRestrictionPillsOnboarding();

});

// ==========================================================================
// HELPER: Update displayed username in feed header and profile card
// ==========================================================================
function updateUserDisplay() {
  const name = STATE.user.name || "User";
  // Update feed welcome text (top left of feed panel)
  const welcomeEl = document.getElementById("welcome-user");
  if (welcomeEl) {
    welcomeEl.textContent = `Hey ${name}!`;
  }
  // Update profile avatar initials and name
  const avatarEl = document.getElementById("profile-avatar");
  if (avatarEl) {
    const initials = name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
    avatarEl.textContent = initials;
  }
  const usernameEl = document.getElementById("profile-username");
  if (usernameEl) {
    usernameEl.textContent = name;
  }
}

// ==========================================================================
// NEW CALCULATORS DASHBOARD LOGIC
// ==========================================================================

let currentUnitSystem = "us";

function updateUnitInputs(system) {
  currentUnitSystem = system;
  const rowHeight = document.getElementById("row-height");
  const rowWeight = document.getElementById("row-weight");
  if (!rowHeight || !rowWeight) return;

  if (system === "us") {
    rowHeight.innerHTML = `
      <div class="calc-input-group height-ft-group">
        <label class="calc-label">Height (feet)</label>
        <input type="number" id="calc-height-ft" class="calc-input-field" value="5" min="1" max="8">
      </div>
      <div class="calc-input-group height-in-group">
        <label class="calc-label">Height (inches)</label>
        <input type="number" id="calc-height-in" class="calc-input-field" value="10" min="0" max="11">
      </div>
    `;
    rowWeight.innerHTML = `
      <div class="calc-input-group">
        <label class="calc-label">Weight (lbs)</label>
        <input type="number" id="calc-weight-us-lbs" class="calc-input-field" value="165" min="30" max="800">
      </div>
    `;
  } else if (system === "metric") {
    rowHeight.innerHTML = `
      <div class="calc-input-group">
        <label class="calc-label">Height (cm)</label>
        <input type="number" id="calc-height-cm" class="calc-input-field" value="178" min="80" max="250">
      </div>
    `;
    rowWeight.innerHTML = `
      <div class="calc-input-group">
        <label class="calc-label">Weight (kg)</label>
        <input type="number" id="calc-weight-kg" class="calc-input-field" value="75" min="20" max="400">
      </div>
    `;
  } else if (system === "other") {
    rowHeight.innerHTML = `
      <div class="calc-input-group">
        <label class="calc-label">Height (meters)</label>
        <input type="number" id="calc-height-m" class="calc-input-field" value="1.78" min="0.5" max="2.5" step="0.01">
      </div>
    `;
    rowWeight.innerHTML = `
      <div class="calc-input-row" style="width: 100%; gap: 16px;">
        <div class="calc-input-group" style="flex: 1;">
          <label class="calc-label">Weight (stones)</label>
          <input type="number" id="calc-weight-stone" class="calc-input-field" value="11" min="1" max="60">
        </div>
        <div class="calc-input-group" style="flex: 1;">
          <label class="calc-label">Weight (lbs)</label>
          <input type="number" id="calc-weight-other-lbs" class="calc-input-field" value="11" min="0" max="13">
        </div>
      </div>
    `;
  }
}

function runFoodEnergyConversion() {
  const inputValEl = document.getElementById("converter-input-val");
  const fromEl = document.getElementById("converter-from");
  const toEl = document.getElementById("converter-to");
  const outputEl = document.getElementById("converter-output-display");
  if (!inputValEl || !fromEl || !toEl || !outputEl) return;

  const val = parseFloat(inputValEl.value);
  if (isNaN(val)) {
    outputEl.textContent = "--";
    return;
  }

  const from = fromEl.value;
  const to = toEl.value;

  // Convert "from" to kcal base
  let kcal = 0;
  if (from === "kcal") kcal = val;
  else if (from === "cal") kcal = val / 1000;
  else if (from === "kJ") kcal = val / 4.184;
  else if (from === "J") kcal = val / 4184;

  // Convert kcal base to "to"
  let result = 0;
  if (to === "kcal") result = kcal;
  else if (to === "cal") result = kcal * 1000;
  else if (to === "kJ") result = kcal * 4.184;
  else if (to === "J") result = kcal * 4184;

  outputEl.textContent = result.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 4 });
}

function calculateCalorieAndBMI() {
  const ageEl = document.getElementById("calc-age");
  if (!ageEl) return;

  const age = parseInt(ageEl.value);
  const gender = document.querySelector('input[name="calc-gender"]:checked').value;
  const activity = document.getElementById("calc-activity").value;

  const settingsUnit = document.getElementById("calc-settings-unit").value;
  const formula = document.getElementById("calc-settings-formula").value;
  const bodyFat = parseFloat(document.getElementById("calc-bodyfat").value || 20);

  if (isNaN(age) || age < 15 || age > 80) {
    alert("Please enter a valid age between 15 and 80.");
    return;
  }

  let heightCm = 0;
  let weightKg = 0;

  if (currentUnitSystem === "us") {
    const ft = parseFloat(document.getElementById("calc-height-ft").value);
    const inch = parseFloat(document.getElementById("calc-height-in").value || 0);
    const lbs = parseFloat(document.getElementById("calc-weight-us-lbs").value);

    if (isNaN(ft) || ft < 1 || isNaN(lbs) || lbs < 30) {
      alert("Please enter valid height and weight values.");
      return;
    }
    heightCm = (ft * 12 + inch) * 2.54;
    weightKg = lbs * 0.45359237;
  } else if (currentUnitSystem === "metric") {
    const cm = parseFloat(document.getElementById("calc-height-cm").value);
    const kg = parseFloat(document.getElementById("calc-weight-kg").value);

    if (isNaN(cm) || cm < 80 || isNaN(kg) || kg < 20) {
      alert("Please enter valid height and weight values.");
      return;
    }
    heightCm = cm;
    weightKg = kg;
  } else if (currentUnitSystem === "other") {
    const m = parseFloat(document.getElementById("calc-height-m").value);
    const stones = parseFloat(document.getElementById("calc-weight-stone").value);
    const lbs = parseFloat(document.getElementById("calc-weight-other-lbs").value || 0);

    if (isNaN(m) || m < 0.5 || isNaN(stones) || stones < 1) {
      alert("Please enter valid height and weight values.");
      return;
    }
    heightCm = m * 100;
    weightKg = (stones * 14 + lbs) * 0.45359237;
  }

  // Calculate BMR
  let bmr = 0;
  if (formula === "mifflin") {
    if (gender === "male") {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
    }
  } else if (formula === "harris") {
    if (gender === "male") {
      bmr = 13.397 * weightKg + 4.799 * heightCm - 5.677 * age + 88.362;
    } else {
      bmr = 9.247 * weightKg + 3.098 * heightCm - 4.330 * age + 447.593;
    }
  } else if (formula === "katch") {
    const lbm = weightKg * (1 - bodyFat / 100);
    bmr = 370 + 21.6 * lbm;
  }

  // Get activity factor
  let factor = 1.2;
  if (activity === "bmr") factor = 1.0;
  else if (activity === "sedentary") factor = 1.2;
  else if (activity === "light") factor = 1.375;
  else if (activity === "moderate") factor = 1.465;
  else if (activity === "active") factor = 1.55;
  else if (activity === "very_active") factor = 1.725;
  else if (activity === "extra_active") factor = 1.9;

  const tdee = bmr * factor;

  // Calculate BMI
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  // Render BMI Results
  const bmiScoreEl = document.getElementById("calc-bmi-score");
  const bmiLabelEl = document.getElementById("calc-bmi-label");
  const bmiMarkerEl = document.getElementById("calc-bmi-marker");
  const bmiTargetEl = document.getElementById("calc-bmi-weight-target");

  const roundedBmi = bmi.toFixed(1);
  bmiScoreEl.textContent = roundedBmi;

  let category = "Healthy Weight";
  let cls = "normal";
  let markerPct = 0;

  if (bmi < 18.5) {
    category = "Underweight";
    cls = "underweight";
    markerPct = Math.max(0, ((bmi - 10) / 8.5) * 25);
  } else if (bmi < 25) {
    category = "Healthy Weight";
    cls = "normal";
    markerPct = 25 + ((bmi - 18.5) / 6.5) * 37.5;
  } else if (bmi < 30) {
    category = "Overweight";
    cls = "overweight";
    markerPct = 62.5 + ((bmi - 25) / 5) * 19.5;
  } else {
    category = "Obese";
    cls = "obese";
    markerPct = Math.min(99, 82 + ((bmi - 30) / 10) * 18);
  }

  bmiScoreEl.className = `calc-bmi-score ${cls}`;
  bmiLabelEl.textContent = category;
  if (bmiMarkerEl) bmiMarkerEl.style.left = `${markerPct}%`;

  // BMI Healthy Weight target ranges
  const minHealthyKg = 18.5 * (heightM * heightM);
  const maxHealthyKg = 25.0 * (heightM * heightM);

  if (currentUnitSystem === "us") {
    const minLbs = minHealthyKg * 2.20462262;
    const maxLbs = maxHealthyKg * 2.20462262;
    bmiTargetEl.textContent = `Healthy weight range for your height: ${minLbs.toFixed(1)} lbs - ${maxLbs.toFixed(1)} lbs`;
  } else if (currentUnitSystem === "metric") {
    bmiTargetEl.textContent = `Healthy weight range for your height: ${minHealthyKg.toFixed(1)} kg - ${maxHealthyKg.toFixed(1)} kg`;
  } else if (currentUnitSystem === "other") {
    const minStones = Math.floor((minHealthyKg * 2.20462262) / 14);
    const minLbsRemainder = Math.round((minHealthyKg * 2.20462262) % 14);
    const maxStones = Math.floor((maxHealthyKg * 2.20462262) / 14);
    const maxLbsRemainder = Math.round((maxHealthyKg * 2.20462262) % 14);
    bmiTargetEl.textContent = `Healthy weight range for your height: ${minStones} st ${minLbsRemainder} lbs - ${maxStones} st ${maxLbsRemainder} lbs`;
  }

  // Render Calorie Targets
  const multiplier = (settingsUnit === "kilojoules") ? 4.184 : 1.0;
  const unitLabel = (settingsUnit === "kilojoules") ? "kJ/day" : "Calories/day";

  const targets = [
    { id: "cal-target-maintain", factor: 0, label: "Maintain weight", pct: 100 },
    { id: "cal-target-lose-mild", factor: -250, label: "Mild weight loss", sub: "0.25 kg/week", pct: 90 },
    { id: "cal-target-lose-weight", factor: -500, label: "Weight loss", sub: "0.5 kg/week", pct: 79 },
    { id: "cal-target-lose-extreme", factor: -1000, label: "Extreme weight loss", sub: "1.0 kg/week", pct: 59 },
    { id: "cal-target-gain-mild", factor: 250, label: "Mild weight gain", sub: "0.25 kg/week", pct: 110 },
    { id: "cal-target-gain-weight", factor: 500, label: "Weight gain", sub: "0.5 kg/week", pct: 121 },
    { id: "cal-target-gain-fast", factor: 1000, label: "Fast weight gain", sub: "1.0 kg/week", pct: 141 }
  ];

  let anyUnderLimit = false;

  targets.forEach(t => {
    const itemEl = document.getElementById(t.id);
    if (!itemEl) return;

    let calVal = tdee + t.factor;
    const customPct = Math.round((calVal / tdee) * 100);

    if (calVal < 1500) {
      if (t.id === "cal-target-lose-extreme" || t.id === "cal-target-lose-weight") {
        anyUnderLimit = true;
      }
    }

    const valueText = `${Math.round(calVal * multiplier).toLocaleString()} ${unitLabel}`;
    itemEl.querySelector(".cal-target-value").textContent = valueText;
    itemEl.querySelector(".cal-target-percent").textContent = `${customPct}%`;
  });

  // Disclaimer warning toggle
  const disclaimerEl = document.getElementById("cal-result-disclaimer");
  if (disclaimerEl) {
    if (anyUnderLimit) {
      disclaimerEl.style.display = "block";
      const kcalLimit = 1500;
      const displayLimit = Math.round(kcalLimit * multiplier);
      disclaimerEl.textContent = `Please consult with a doctor when losing 1 kg or more per week since it requires that you consume less than the minimum recommendation of ${displayLimit.toLocaleString()} ${unitLabel}.`;
    } else {
      disclaimerEl.style.display = "none";
    }
  }

  window.lastTDEE = tdee;
  window.lastMultiplier = multiplier;
  window.lastUnitLabel = unitLabel;

  renderZigzagTable(1);
  renderActivityLevelsTable(tdee, multiplier, unitLabel);

  document.getElementById("calculator-results").classList.remove("hidden");
}

function renderZigzagTable(scheduleNum) {
  const tdee = window.lastTDEE;
  const mult = window.lastMultiplier;
  const label = window.lastUnitLabel;
  if (!tdee) return;

  const wrapper = document.getElementById("zigzag-schedule-table");
  if (!wrapper) return;

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let html = `
    <table class="styled-table">
      <thead>
        <tr>
          <th>Day</th>
          <th>Mild weight loss (0.25 kg/week)</th>
          <th>Weight loss (0.5 kg/week)</th>
        </tr>
      </thead>
      <tbody>
  `;

  days.forEach((day, index) => {
    let mildLossCal = 0;
    let weightLossCal = 0;

    if (scheduleNum === 1) {
      if (day === "Saturday" || day === "Sunday") {
        mildLossCal = tdee;
        weightLossCal = tdee;
      } else {
        mildLossCal = tdee - 350;
        weightLossCal = tdee - 700;
      }
    } else {
      const mildWaveOffsets = [-500, -333, -167, 0, -83, -250, -417];
      mildLossCal = tdee + mildWaveOffsets[index];

      const lossWaveOffsets = [-925, -642, -358, -75, -217, -500, -783];
      weightLossCal = tdee + lossWaveOffsets[index];
    }

    html += `
      <tr>
        <td><strong>${day}</strong></td>
        <td>${Math.round(mildLossCal * mult).toLocaleString()} ${label}</td>
        <td>${Math.round(weightLossCal * mult).toLocaleString()} ${label}</td>
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>
  `;

  wrapper.innerHTML = html;
}

function renderActivityLevelsTable(tdee, mult, label) {
  const tbody = document.querySelector("#table-activity-levels tbody");
  if (!tbody) return;

  const activitySelect = document.getElementById("calc-activity");
  let currentFactor = 1.2;
  const actVal = activitySelect.value;
  if (actVal === "bmr") currentFactor = 1.0;
  else if (actVal === "sedentary") currentFactor = 1.2;
  else if (actVal === "light") currentFactor = 1.375;
  else if (actVal === "moderate") currentFactor = 1.465;
  else if (actVal === "active") currentFactor = 1.55;
  else if (actVal === "very_active") currentFactor = 1.725;
  else if (actVal === "extra_active") currentFactor = 1.9;

  const bmr = tdee / currentFactor;

  const levels = [
    { name: "Basal Metabolic Rate (BMR)", factor: 1.0 },
    { name: "Sedentary: little or no exercise", factor: 1.2 },
    { name: "Light: exercise 1-3 times/week", factor: 1.375 },
    { name: "Moderate: exercise 4-5 times/week", factor: 1.465 },
    { name: "Active: daily exercise or intense exercise 3-4 times/week", factor: 1.55 },
    { name: "Very Active: intense exercise 6-7 times/week", factor: 1.725 },
    { name: "Extra Active: very intense exercise daily, or physical job", factor: 1.9 }
  ];

  tbody.innerHTML = "";

  levels.forEach(lvl => {
    const lvlTdee = bmr * lvl.factor;
    const diffCal = lvlTdee - tdee;

    let weightDiffText = "";
    if (currentUnitSystem === "us") {
      const lbs = (diffCal * 7) / 3500;
      const sign = lbs >= 0 ? "+" : "";
      weightDiffText = `${sign}${lbs.toFixed(2)} lbs`;
    } else {
      const kg = (diffCal * 7) / 7700;
      const sign = kg >= 0 ? "+" : "";
      weightDiffText = `${sign}${kg.toFixed(2)} kg`;
    }

    const row = document.createElement("tr");
    row.innerHTML = `
      <td><strong>${lvl.name}</strong></td>
      <td>${weightDiffText}</td>
    </tr>
    `;
    tbody.appendChild(row);
  });
}

function clearCalculator() {
  document.getElementById("calculator-form").reset();
  updateUnitInputs(currentUnitSystem);
  document.getElementById("calculator-results").classList.add("hidden");
  window.lastTDEE = null;
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize unit inputs
  updateUnitInputs("us");

  // 2. Unit system tabs toggler
  document.querySelectorAll(".calculator-unit-tabs .unit-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".calculator-unit-tabs .unit-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      updateUnitInputs(btn.dataset.unit);
      
      if (window.lastTDEE) {
        calculateCalorieAndBMI();
      }
    });
  });

  // 3. Settings panel toggle
  const settingsToggleBtn = document.getElementById("btn-toggle-calc-settings");
  const settingsPanel = document.getElementById("calc-settings-panel");
  if (settingsToggleBtn && settingsPanel) {
    settingsToggleBtn.addEventListener("click", () => {
      const isHidden = settingsPanel.classList.toggle("hidden");
      settingsToggleBtn.textContent = isHidden ? "+ Settings" : "- Settings";
    });
  }

  // 4. Formula select toggle body fat row
  const formulaSelect = document.getElementById("calc-settings-formula");
  const bodyFatRow = document.getElementById("row-bodyfat");
  if (formulaSelect && bodyFatRow) {
    formulaSelect.addEventListener("change", () => {
      if (formulaSelect.value === "katch") {
        bodyFatRow.classList.remove("hidden");
      } else {
        bodyFatRow.classList.add("hidden");
      }
    });
  }

  // 5. Calculate and Clear buttons
  const calcBtn = document.getElementById("btn-calc-calculate");
  const clearBtn = document.getElementById("btn-calc-clear");
  if (calcBtn) calcBtn.addEventListener("click", calculateCalorieAndBMI);
  if (clearBtn) clearBtn.addEventListener("click", clearCalculator);

  // 6. Food Energy Converter event listeners
  const convertBtn = document.getElementById("btn-convert");
  const convertClearBtn = document.getElementById("btn-converter-clear");
  const converterInput = document.getElementById("converter-input-val");
  const converterFrom = document.getElementById("converter-from");
  const converterTo = document.getElementById("converter-to");

  if (convertBtn) convertBtn.addEventListener("click", runFoodEnergyConversion);
  if (convertClearBtn) {
    convertClearBtn.addEventListener("click", () => {
      if (converterInput) converterInput.value = 1;
      runFoodEnergyConversion();
    });
  }
  
  [converterInput, converterFrom, converterTo].forEach(el => {
    if (el) el.addEventListener("input", runFoodEnergyConversion);
    if (el) el.addEventListener("change", runFoodEnergyConversion);
  });

  // Initial converter run
  runFoodEnergyConversion();

  // 7. Explanatory Accordion drawers
  document.querySelectorAll(".calc-accordion-item").forEach(item => {
    const trigger = item.querySelector(".accordion-trigger-btn");
    const content = item.querySelector(".accordion-panel-content");
    if (trigger && content) {
      trigger.addEventListener("click", () => {
        const isActive = trigger.classList.toggle("active");
        content.classList.toggle("hidden", !isActive);
      });
    }
  });

  // 8. Zigzag schedule tabs toggler
  document.querySelectorAll(".zigzag-schedule-selector .zigzag-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".zigzag-schedule-selector .zigzag-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderZigzagTable(parseInt(btn.dataset.schedule));
    });
  });
});
