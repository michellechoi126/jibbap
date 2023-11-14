const recipes = [
    {
        name: 'Tteokbokki (Spicy Rice Cakes)',
        pic: 'https://drivemehungry.com/wp-content/uploads/2021/02/tteokbokki-korean-rice-cakes-5.jpg',
        main_ingredients: [
            '350g Korean rice cakes', 
            '150g Korean fish cakes', 
            '2 cups Korean soup stock', 
            '60g onion'
        ],
        sauce_ingredients: [
            '3 tbsp gochujang', 
            '1.5 tbsp sugar', 
            '1 tbsp soy sauce', 
            '1 tsp minced garlic', 
            '1 tsp gochugaru'
        ],
        instructions: [
            '1. Unless your rice cakes are soft already, soak them in warm water for 10 mins.', 
            '2. Boil the soup stock in a shallow pot over medium high heat and dissolve the tteokbokki sauce by stirring it with a spatula. Once the seasoned stock is boiling, add the rice cakes, fish cakes and onion. Boil them a further 3 to 5 mins until the rice cakes are fully cooked. Then, to thicken the sauce and to deepen the flavor, simmer it over low heat for a further 2 to 4 mins.', 
            '3. Add the sesame oil, sesame seeds, and green onion then quickly stir. Serve warm.']
    },
    {
        name: 'Kimchi Jjigae Stew',
        pic: 'https://www.koreanbapsang.com/wp-content/uploads/2014/03/DSC5893-3.jpg',
        main_ingredients: [
            '1 pound kimchi, cut into bite size pieces', 
            '¼ cup kimchi brine', 
            '½ pound pork shoulder (or pork belly)', 
            '½ package of tofu (optional), sliced into ½ inch thick bite size pieces', 
            '3 green onions', 
            '1 medium onion, sliced (1 cup)', 
            '1 teaspoon kosher salt', 
            '2 teaspoons sugar', 
            '2 teaspoons gochugaru (Korean hot pepper flakes)', 
            '1 tablespoon gochujang (hot pepper paste)', 
            '1 teaspoon toasted sesame oil', 
            '2 cups of anchovy stock (or chicken or beef broth)'
        ],
        instructions: [
            '1. Place the kimchi and kimchi brine in a shallow pot. Add pork and onion', 
            '2. Slice 2 green onions diagonally and add them to the pot.', 
            '3. Add salt, sugar, hot pepper flakes, and hot pepper paste. Drizzle sesame oil over top and add the anchovy stock', 
            '4. Cover and cook for 10 minutes over medium high heat.', 
            '5. Open and mix in the seasonings with a spoon. Lay the tofu over top.', 
            '6. Cover and cook another 10 to 15 minutes over medium heat.', 
            '7. Chop 1 green onion and put it on the top of the stew. Remove from the heat and serve right away with rice.'
        ]
    },
    {
        name: 'Pajeon (Korean Pancake)',
        pic: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/vimdb/270697.jpg',
        main_ingredients: [
            '½ cup cake flour', 
            '½ tsp Diamond Crystal kosher salt', 
            '½ cup cold water or sparkling water',
            '1 bunch green onions/scallions', 
            '½ large egg (beaten; use half an egg per pancake)', 
            '1½ Tbsp neutral oil', 
            '4 oz shrimp (cleaned and deveined)'
        ],
        sauce_ingredients: [
            '1 Tbsp soy sauce', 
            '½ Tbsp rice vinegar', 
            '1 tsp green onions/scallions (thinly sliced)', 
            '¼ tsp gochugaru (Korean pepper flakes)', 
            '¼ tsp toasted white and black sesame seeds', 
            '⅛ tsp sugar'
        ],
        instructions: [
            '1. Gather all the ingredients.', 
            '2. Combine all the ingredients for the spicy dipping sauce. Set aside.', 
            '3. Cut off the ends of 1 bunch green onions/scallions. Then, cut the scallions in half crosswise. If you are worried about flipping a large pancake, cut the scallions shorter and make smaller round pancakes so you can easily flip them.', 
            '4. Beat ½ large egg in a small bowl. Set aside half an egg per pancake for cooking.', 
            '5. To make the batter, combine cake flour and Diamond Crystal kosher salt in a medium bowl. Slowly add cold water or sparkling water(you may not need all of it!) and whisk until just combined. The batter should be thinner than a Western breakfast pancake batter and thicker than a crepe batter. Do not overmix the batter because it will create gluten and the pancake will not have a good texture.', '6. Place a nonstick frying pan over medium - high heat. When it is hot, add neutral oil.Then, spread out the scallions on the bottom of the pan and add shrimp on top.', 
            '7. Drizzle the batter on top to cover the scallions and shrimp. Make sure there is just enough batter between the ingredients so that they will hold together. Take care not to add too much batter, though, or you will end up with doughy pancakes.', 
            '8. Lightly drizzle the beaten egg (I use half an egg for one pancake) over the batter.Cook for 3 minutes, until the edges of the pancake get crispy and the bottom is golden brown. Flip the pancake using a relatively large spatula or two spatulas, one in each hand. Cook for another 3 minutes, pressing down the pancake with the spatula occasionally, until the pancake is crispy and golden brown. Flip one last time and cook for 30 seconds.', 
            '9. Transfer the pancake to a cutting board. Cut into small pieces and enjoy with the spicy dipping sauce.'
        ]
    }
]

/* === DOM Elements === */
const navEl = document.querySelector('nav');
const hamburgEl = document.querySelector('#hamburger');


