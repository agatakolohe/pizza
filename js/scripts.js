// Business Logic for Receipt
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
// Business Logic for Pizza
function Pizza(name, size) {
  this.name = name;
  this.size = size;
  this.toppings = [];
  this.total = 0;
  this.grandTotal = 0;
}
Pizza.prototype.addToppings = function (topping) {
  this.toppings.push(topping);
};
Pizza.prototype.toppingPrice = function () {
  if (this.toppings.length >= 5) {
    return (this.total += 15);
  } else if (this.toppings.length === 0) {
    return confirm("Are you sure you don't want any toppings?");
  } else if (this.toppings.length <= 5) {
    return (this.total += 10);
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
Pizza.prototype.addTotal = function () {
  //add tax and delivery fee
  return (this.grandTotal += this.total);
};
// Pizza.prototype.showTotal = function () {
//   return this.name + ", your total is: $" + this.grandTotal;
// };
//Business Logic for Topping()
function Topping(cheese, meat, veggies) {
  this.cheese = cheese;
  this.meat = meat;
  this.veggies = veggies;
}
// User Interface Logic
let pizzaReceipt = new Cart();

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
      "</li>";
  });
  orderTotal.html(htmlForOrderInfo);
}
function showOrder(pizzaId) {
  const pie = pizzaReceipt.findPizza(pizzaId);
  $(".receipt").show();
  $(".order-name").text(pie.name);
  $(".pizzasize").text(pie.size);
  pie.toppings.forEach(function (topping) {
    $(".chosen-cheese").text(topping.cheese);
    $(".chosen-protein").text(topping.meat);
    $(".chosen-veggies").text(topping.veggies);
  });
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
    let newPizzaOrder = new Pizza(inputtedName, inputtedPizzaSize);
    let newToppings = new Topping(
      inputtedCheese,
      inputtedProtein,
      inputtedVeggies
    );
    newPizzaOrder.addToppings(newToppings);
    newPizzaOrder.toppingPrice();
    newPizzaOrder.pizzaSizePrice();
    newPizzaOrder.addTotal();
    pizzaReceipt.addPizza(newPizzaOrder);
    displayOrderDetails(pizzaReceipt);
    // $(".total").text(
    //   inputtedName + ", your total is: $" + newPizzaOrder.grandTotal
    // );
    // console.log(newPizzaOrder);
    // console.log(newPizzaOrder.toppings);
  });
});
