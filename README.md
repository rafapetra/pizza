Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Pizza.addToppings
Code: let pizza = new Pizza();
      let newOrder = new Toppings("pineapple");
      pizza.addToppings(newOrder);
      pizza.toppings;
Expected Output: Toppings {first: 'pineapple', second: undefined, third: undefined}

Describe: Toppings()
Test: It should return a Toppings object with three properties for toppings"
Code: const toppings = new Toppings('pineapple', 'anchovies', 'olives);
Expected Output: Toppings {first: 'pineapple', second: 'anchovies', third: 'olives'}

Describe: Toppings.combineToppings
Code: let pizza = new Pizza();
      let newOrder = new Toppings("pineapple");
      pizza.addToppings(newOrder);
      pizza.toppings;
Expected Output: Toppings {first: 'pineapple', second: undefined, third: undefined}

Describe: Pizza.addSize
Code: let pizza = new Pizza();
      let NewOrderSize = "user input for size"
      pizza.addSize(NewOrderSize)
      pizza;
Expected Output: Pizza {toppings: undefined size: 'user input for size'}

Describe: Pizza.addPrice
Test: It should return $10
Code: newOrder(small, pepperoni);
Expected Output: Pizza {toppings: pepperoni size: small, price: 10}

