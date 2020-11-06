// Business Logic for Pizza
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.total = 0;
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
