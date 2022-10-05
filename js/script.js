// Business Logic for Pizza ---
function Pizza(pizzaSize, pizzaToppings) {
  this.toppings = [...pizzaToppings];
  this.size = pizzaSize;
}

Pizza.prototype.addPrice = function () {
  if (this.size === "small") {
    this.price = 10 + this.toppings.length * 2;
  } else if (this.size === "medium") {
    this.price = 15 + this.toppings.length * 2;
  } else if (this.size === "large") {
    this.price = 20 + this.toppings.length * 2;
  };
}; 

// User Interface Logic -----

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
  let newOrder = new Pizza(inputtedSize, selectedToppings);
  newOrder.addPrice();
  document.querySelector("div#result").style.display = "block";
  document.querySelector("span#result").innerText = "$"+newOrder.price;
}

window.addEventListener("load", function () {
  this.document.querySelector("form#newOrder")
  .addEventListener("submit", handleFormSubmission);
});
