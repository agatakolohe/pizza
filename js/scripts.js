// Business Logic for Pizza
function Pizza(size, name) {
  this.name = name;
  this.size = size;
  this.toppings = [];
  this.total = 0;
  this.grandTotal = 0;
}
Pizza.prototype.addToppings = function (topping) {
  this.toppings.push(topping);
};
// function Topping(cheese, meat, veggies) {
//   this.cheese = cheese;
//   this.meat = meat;
//   this.veggies = veggies;
// }
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
Pizza.prototype.showTotal = function () {
  return this.name + ", your total is: $" + this.grandTotal;
};
//Business Logic for Topping()
function Topping(cheese, meat, veggies) {
  this.cheese = cheese;
  this.meat = meat;
  this.veggies = veggies;
}
// User Interface Logic
//let pizzaOrder = new Pizza(); /// idk if this needs to be here

$(document).ready(function () {
  $("form#pizza-order").submit(function (event) {
    event.PreventDefault();
    const inputtedName = $("input#name").val();
    const inputtedPizzaSize = $("input:radio[name=pizza-size]:checked").val();
    const inputtedCheese = $("input:checkbox[name=cheese]:checked").val();
    const inputtedProtein = $("input:checkbox[name=protein]:checked").val();
    const inputtedVeggies = $("input:checkbox[name=veggies]:checked").val();
    let newPizzaOrder = new Pizza(inputtedName, inputtedPizzaSize);
    let newToppings = new Topping(
      inputtedCheese,
      inputtedProtein,
      inputtedVeggies
    );
  });
});
