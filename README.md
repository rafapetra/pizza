# Luigi's Pizza Website

#### By _Rafael Petrachini_

A website for a fictional pizza restaurant.
https://rafapetra.github.io/pizza/

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

A website for a fictional pizza restaurant, where the user can build a custom pizza, choosing sizes and toppings, and calculate the final price. With HTML, CSS and JavaScript.\

## Setup/Installation Requirements

1. Clone this repository to your desktop.
2. Navigate to the top level of the directory.
3. Open index.html in your browser.

## Known Bugs

* N/A

## License

MIT

Copyright (c) [2022] [Rafael Petrachini]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Test-Driven Development 

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