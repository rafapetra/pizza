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




//
// Business Logic for Pizza ---
function Pizza(pizzaToppings, pizzaSize) {
  this.toppings = pizzaToppings;
  this.size = pizzaSize;
}

Pizza.prototype.addToppings = function(topping) {
  this.toppings = topping;
}


// Business Logic for Toppings -- 
function Toppings(firstTopping, secondTopping, thirdTopping) {
  this.first = firstTopping;
  this.second = firstTopping;
  this.third = firstTopping;
}

Toppings.prototype.allToppings = function() {
  return this.first + this.second + this.third;
};
