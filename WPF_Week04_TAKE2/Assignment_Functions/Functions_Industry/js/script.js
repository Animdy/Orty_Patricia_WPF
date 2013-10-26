// Patricia Orty
// Student ID 0004002218
// 10/25/13

// Assignment : Functions - Industry

//Goal: To figure out what office supplies need to be re-ordered.

//Declaration of variables used to gather information for calculation.

var pensItem;
var amountPens;
var paperReams;
var amountPaper;

//Alert to describe purpose of prompts.
alert("To help maintain a properly stocked inventory please answer the following questions\nabout the remaining amount of product you have and the amount you should have when fully stocked.");

//Definition of variables with prompts to gather information for calculation.
pensItem = prompt("How many boxes of pens do you currently have in inventory?");
amountPens = prompt("How many boxes of pens do you have when your inventory is full?");
paperReams = prompt("How many reams of paper do you currently have in inventory?");
amountPaper = prompt("How many reams do you have when your inventory is full?");

//Creation of function to house calculation to determine if stock needs to be reordered.
// Calculation will determine if stock needs to be reordered by taking total full inventory amount and dividing it by 4 then seeing if that number is greater than the current amount of stock. If the divided amount is larger than current amount of stock then result will be notification that stock needs to be reordered.
