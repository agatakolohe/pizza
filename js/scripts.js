// Business Logic for Cart()

function Cart() {
  this.pizzas = [];
  this.currentId = 0;
}
Cart.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
};
Cart.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};
Cart.prototype.findPizza = function (id) {
  for (let i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i].id == id) {
      return this.pizzas[i];
    }
  }
  return false;
};

// Business Logic for Pizza()

function Pizza(name, size, cheese, protein, veggies, extras, sauces) {
  this.name = name;
  this.size = size;
  this.cheese = cheese;
  this.protein = protein;
  this.veggies = veggies;
  this.extras = extras;
  this.sauces = sauces;
  this.total = 0;
  this.grandTotal = 0;
}
Pizza.prototype.verifyName = function () {
  if (this.name === "") {
    return alert("Please enter a name of the order");
  } else {
    return alert("Thank you " + this.name + "! Enjoy your pizza!");
  }
};
Pizza.prototype.pizzaSizePrice = function () {
  if (this.size === "large") {
    return (this.total += 30);
  } else if (this.size === "medium") {
    return (this.total += 20);
  } else if (this.size === "small") {
    return (this.total += 10);
  } else {
    return alert("Please choose a size");
  }
};
Pizza.prototype.cheesePrice = function () {
  if (this.cheese === "vegancheese") {
    return (this.total += 10);
  } else if (this.cheese === "nocheese") {
    return confirm("Are you sure you don't want cheese?");
  }
};
Pizza.prototype.extrasPrice = function () {
  if (this.extras === "pineapple") {
    return (this.total += 5);
  } else if (this.extras === "bacon") {
    return (this.total += 3);
  } else {
    return (this.total += 2);
  }
};
Pizza.prototype.saucesPrice = function () {
  if (this.sauces === "ranch") {
    return (this.total += 5);
  } else if (this.sauces === "balsamic") {
    return (this.total += 3);
  } else {
    return (this.total += 2);
  }
};
Pizza.prototype.addTotal = function () {
  return (this.grandTotal += this.total);
};

// User Interface Logic

let pizzaCart = new Cart();

function displayOrderDetails(orderToDisplay) {
  let orderTotal = $("ul#pizzatotals");
  let htmlForOrderInfo = "";
  orderToDisplay.pizzas.forEach(function (pizza) {
    htmlForOrderInfo +=
      "<li id=" +
      pizza.id +
      ">" +
      pizza.name +
      ", your total is: $" +
      pizza.grandTotal +
      ". Click here to see order details.</li>";
  });
  orderTotal.html(htmlForOrderInfo);
}
function showOrder(pizzaId) {
  const pie = pizzaCart.findPizza(pizzaId);
  $(".receipt").show();
  $(".order-name").text(pie.name);
  $(".pizzasize").text(pie.size);
  $(".chosen-cheese").text(pie.cheese);
  $(".chosen-protein").text(pie.protein);
  $(".chosen-veggies").text(pie.veggies);
  $(".chosen-extras").text(pie.extras);
  $(".chosen-sauces").text(pie.sauces);
}
function attachOrderListeners() {
  $("ul#pizzatotals").on("click", "li", function () {
    showOrder(this.id);
  });
}
$(document).ready(function () {
  attachOrderListeners();
  $("form#pizza-order").submit(function (event) {
    event.preventDefault();
    const inputtedName = $("input#name").val();
    const inputtedPizzaSize = $("input:radio[name=pizza-size]:checked").val();
    const inputtedCheese = $("input:radio[name=cheese]:checked").val();
    const inputtedProtein = $("input:radio[name=protein]:checked").val();
    const inputtedVeggies = $("input:radio[name=veggies]:checked").val();
    const inputtedExtras = $("input:radio[name=extras]:checked").val();
    const inputtedSauces = $("input:radio[name=sauces]:checked").val();
    let newPizzaOrder = new Pizza(
      inputtedName,
      inputtedPizzaSize,
      inputtedCheese,
      inputtedProtein,
      inputtedVeggies,
      inputtedExtras,
      inputtedSauces
    );

    newPizzaOrder.pizzaSizePrice();
    newPizzaOrder.cheesePrice();
    newPizzaOrder.extrasPrice();
    newPizzaOrder.saucesPrice();
    newPizzaOrder.verifyName();
    newPizzaOrder.addTotal();
    pizzaCart.addPizza(newPizzaOrder);
    displayOrderDetails(pizzaCart);
    console.log(newPizzaOrder.name);
  });
});
