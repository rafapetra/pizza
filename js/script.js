// Business Logic for Pizza ---
function Pizza(pizzaSize, pizzaToppings) {
  this.toppings = [pizzaToppings];
  this.size = pizzaSize;
}

Pizza.prototype.addPrice = function (price) {
  this.price = 0;
  if (this.size.includes("small")) {
    this.price = 10 + this.toppings[0].length * 2;
  } else if (this.size.includes("medium")) {
    this.price = 15 + this.toppings[0].length * 2;
  } else if (this.size.includes("large")) {
    this.price = 20 + this.toppings[0].length * 2;
  };

  this.toppings.forEach(function(element, i, array){
  });
}; 

// User Interface Logic -----

let newOrder = new Pizza();

function handleFormSubmission(event) {
  event.preventDefault();
  //Getting size input
  const inputtedSize = document.querySelector(
    "input[name='size']:checked"
  ).value;

  //Getting toppings inputs into array
  const selectedToppings = [];
  const checkboxes = document.querySelectorAll(
    "input[name='toppings']:checked"
  );

  for (let i = 0; i < checkboxes.length; i++) {
    selectedToppings.push(checkboxes[i].value);
  }

  newOrder.toppings = selectedToppings;
  newOrder.size = inputtedSize;
  newOrder.addPrice();
  document.querySelector("div#result").style.display = "block";

  document.querySelector("span#result").innerText = "$"+newOrder.price;
  
}

window.addEventListener("load", function () {
  this.document.querySelector("form#newOrder")
  .addEventListener("submit", handleFormSubmission);
});
