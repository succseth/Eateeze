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
          <span>🔥 ${recipe.calories} kcal</span>
          <span>⏱️ ${recipe.prepTime}</span>
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
          <span style="color: var(--primary-deep); font-weight: 700;">🔥 ${recipe.calories} kcal</span>
          <span>⏱️ ${recipe.prepTime}</span>
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
      <h3>${day} <span>🔥 ${totalDayCals} kcal total</span></h3>
      <div class="plan-meals-grid">
        <!-- Breakfast -->
        <div class="plan-meal-item" data-id="${dayData.breakfast.id}">
          <span class="meal-time-tag">Breakfast</span>
          <img src="${dayData.breakfast.image}" alt="${dayData.breakfast.title}">
          <div class="meal-summary-info">
            <h4>${dayData.breakfast.title}</h4>
            <p>⏱️ ${dayData.breakfast.prepTime} &bull; 🔥 ${dayData.breakfast.calories} kcal</p>
          </div>
        </div>
        <!-- Lunch -->
        <div class="plan-meal-item" data-id="${dayData.lunch.id}">
          <span class="meal-time-tag" style="background-color: var(--primary-light-bg); color: var(--primary-light);">Lunch</span>
          <img src="${dayData.lunch.image}" alt="${dayData.lunch.title}">
          <div class="meal-summary-info">
            <h4>${dayData.lunch.title}</h4>
            <p>⏱️ ${dayData.lunch.prepTime} &bull; 🔥 ${dayData.lunch.calories} kcal</p>
          </div>
        </div>
        <!-- Dinner -->
        <div class="plan-meal-item" data-id="${dayData.dinner.id}">
          <span class="meal-time-tag" style="background: rgba(224, 64, 251, 0.12); color: #E040FB;">Dinner</span>
          <img src="${dayData.dinner.image}" alt="${dayData.dinner.title}">
          <div class="meal-summary-info">
            <h4>${dayData.dinner.title}</h4>
            <p>⏱️ ${dayData.dinner.prepTime} &bull; 🔥 ${dayData.dinner.calories} kcal</p>
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
      const matchIng = recipe.ingredients.find(i => i.name.includes(ingName) || ingName.includes(i.name));
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
  const params = GOAL_PARAMETERS[goal];

  // Dynamic names matching diets
  let title = "AI Custom Grilled Plate";
  let image = "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60";
  let tags = [...restrictions];

  if (restrictions.includes("Vegan")) {
    title = "AI Golden Turmeric Tempeh Bowl";
    image = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60";
  } else if (restrictions.includes("Keto")) {
    title = "AI Herb Butter Ribeye Steak & Asparagus";
    image = "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60";
  } else if (restrictions.includes("Paleo")) {
    title = "AI Lemon Pesto Turkey Patties";
    image = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop&q=60";
  } else if (restrictions.includes("Gluten Free") && restrictions.includes("Dairy Free")) {
    title = "AI Garlic Chicken Avocado Rice Bowl";
    image = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60";
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
    ingredients: [
      { name: "AI Premium Selected Protein", amount: 160, unit: "g" },
      { name: "AI Nutrient Dense Greens", amount: 120, unit: "g" },
      { name: "Cold-Pressed Avocado Oil", amount: 1, unit: "tbsp" },
      { name: "Bespoke Herb Seasoning Blend", amount: 1, unit: "tsp" },
      { name: "Fresh Garlic Cloves", amount: 2, unit: "pieces" }
    ],
    steps: [
      {
        title: "Clean and Season",
        desc: "Wash the premium protein and organic greens under cool water. Dry thoroughly, then rub down the protein with the bespoke herb seasoning blend and a pinch of pink salt.",
        ingredients: ["AI Premium Selected Protein", "Bespoke Herb Seasoning Blend"]
      },
      {
        title: "Sauté Aromatics",
        desc: "Heat the cold-pressed avocado oil in a flat-bottom pan over medium heat. Sauté the crushed garlic cloves for 1 minute until lightly toasted and fragrant.",
        ingredients: ["Cold-Pressed Avocado Oil", "Fresh Garlic Cloves"]
      },
      {
        title: "Sear Protein Plate",
        desc: "Add seasoned protein to the hot oil. Sear for 4 minutes on each side until fully cooked and outer glaze is formed. Toss in the nutrient greens in the final minute to gently steam them.",
        ingredients: ["AI Premium Selected Protein", "AI Nutrient Dense Greens"]
      },
      {
        title: "Plate and Drizzle",
        desc: "Slice the seared protein, arrange it beautifully over the bed of steamed greens, and drizzle with the remaining aromatic oil from the pan.",
        ingredients: []
      }
    ]
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
      alert(`🎉 Congratulations! You have successfully plated: "${recipe.title}"! Enjoy your delicious AI-precision meal!`);
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
