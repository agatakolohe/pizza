// Business Logic for Pizza
function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.total = 0;
}
Pizza.prototype.addToppings = function (topping) {
  this.toppings.push(topping);
};
function Topping(topping) {
  this.topping = topping;
}
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
