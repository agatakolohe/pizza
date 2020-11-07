# Pizza Parlor

#### Object-Oriented JavaScript Independent Project for Epicodus, 11-06-2020

#### By Agata Kolodziej

## Description

Fourth independent project for Epicodus. It is a website where a user can order a pizza. The user can choose which size and toppings they would like for their pizza. This project demonstrates what I have learned with object-oriented JavaScript. I created a form that will take user input and create constructors and protoype functions to determine the pizze order and price.

## Specifications

### Describe: Pizza()

| Test                                                             | Expect                                                                   |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------ |
| It will store user input for pizza created                       | Pizza(name, size, toppings).toEqual("order name", "small", "pepperoni"); |
| It will add price of user selected pizza size to total           | Pizza(size, total).toEqual("small", 10);                                 |
| It will alert use if no pizza size has been selected             | Pizza().toEqual(alert("Please choose a size"));                          |
| It will return a grand total price of complete pizza order       | Pizza(grandTotal).toEqual(20);                                           |
| It will display user's grand total as a string                   | Pizza(displayTotal).toEqual("Your total is: \$20")                       |
| It Will display user's full order when user clicks on order name | Pizza(showOrder).toEqual(Pizza Order)                                    |

### Describe: Topping()

| Test                                                          | Expect                                  |
| ------------------------------------------------------------- | --------------------------------------- |
| It will store user input for toppings selected                | Topping(toppings).toEqual("pepperoni"); |
| It will ask user to confirm if there is no input for toppings | Topping().toEqual(alert("Surprise!"));  |

## Setup/Installation Requirements

##### Software Requirements

1. Internet browser
2. A code editor such as VSCode to view and edit the code

##### View Online

- To view in browser click the GH-Pages link: [Pizza Parlor](URL)
- Type your order name into the text box
- Select pizza size and toppings
- Click Place your order
- View order total at the bottom of the screen
- Click on "Click here to see order details" to view full order

##### Open Locally

- Click on the link to my repository: [My Repository](https://github.com/agatakolohe/pizza.git)
- Click on the green "Code" button and copy the repository URL
- Open your terminal and use the command `git clone https://github.com/agatakolohe/pizza.git` into the directory you would like to clone the repository
- Open in text editor to view code and make changes

## Known Bugs

No known bugs present.

## Support and Contact Details

If any errors or bugs occur use Chrome DevTools or please email me, <agatakolohe@gmail.com>

## Technologies Used

CHANGE IF NECESSARY

- HTML
- CSS
- Bootstrap
- JavaScript
- jQuery
- VS Code
- GitHub

### License

This software is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

Copyright (c) 2020 Agata Kolodziej
