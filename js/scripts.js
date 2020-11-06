// Business Logic for Pizza
function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.total = 0;
  this.grandTotal = 0;
}
Pizza.prototype.addToppings = function (topping) {
  this.toppings.push(topping);
};
function Topping(cheese, meat, veggies) {
  this.cheese = cheese;
  this.meat = meat;
  this.veggies = veggies;
}
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
  return "Your Total is: $" + this.grandTotal;
};
