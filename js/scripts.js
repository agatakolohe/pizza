// Business Logic for Pizza
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}
Pizza.prototype.pizzaSize = function (size) {
  this.size += size;
};
