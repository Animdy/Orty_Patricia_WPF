// Patricia Orty
// Student ID 0004002218
// 9/15/13

// Assignment : Expressions - Wacky

//This expression is suppost to be Wacky, soooo I went with an absurd theme of sock Gnomes. 
//Probably had to do with that I just did laundry but anyway... 
//this expression's goal is going to be to calculate the number of socks a person would have to pay to the sock Gnomes,
//in order to have no socks missing after the drying of their clothes for one year. Enjoy!

//Declaring the variables for later use in this expression.
var howManyStripedSocks;
var howManyToes;
var howManyWool;
var howManyWashesMo;

//Placing in a series of  3 alerts to explain the prompts for information to follow.

alert("Do you end up SEARCHING after you do laundry for your FAVORITE SOCK?\nDO YOU WISH you had a CHOICE over what the laundry Gnomes would take?");
alert("Well you're in LUCK MY FRIEND!\nTODAY IS YOUR LUCKY DAY!!");
alert("Answer the next few questions and we shall calculate \nyour NECESSARY YEARLY SOCK PAYMENT!!!\nIMAGINE being able to launder your clothing with the \npeace of mind that you WILL NOT LOSE 1 sock for 1 year! \nIMAGINE the possibilities.\n\n\t\tBest Jammy Regards,\n\t\tToesy Rosey-Jam the Gnome");

//Prompts being created to gather information for the expression calculations later.

howManyStripedSocks = prompt("Let's start our calculation for a fuzzy tariff,\nto our stubby sock fashionista Gnomes, with...\n\t...HOW MANY striped socks to you own?");

howManyToes = prompt("5, 10 or 2! How many toes do you cover with socks a day?");

howManyWool = prompt("Do you act like a wolf and don WOOLEY SOCKS...\nIf YES, HOW MANY Wool sock pairs do you own?");

howManyWashesMo = prompt("How many times a month do you drown....err...WASH your socks?");

//Gathering all the now defined variables in an array for save keeping.

var laundrySudz = [howManyStripedSocks, howManyToes, howManyWool, howManyWashesMo];

//Setting up Calculation-1 which will times howManyStripedSocks by howManyToes and add 1 to the total. I'm using parseFloat because I don't want numbers ignored after decimal points yet.

var stripedToes = parseFloat(laundrySudz[0]) * parseFloat(laundrySudz[1]) + 1;

//Setting up Calculation-2 which times howManyWool by howManyWashesMo and minuses 2.

var wooleyWashes = parseFloat(laundrySudz[2]) * parseFloat(laundrySudz[3]) - 2;

//Setting up Calculation-3 to combine 1 & 2 by dividing stripedToes by wooleyWashes times 25.

var gnomeTariff = stripedToes / wooleyWashes * 25;


//adding parseInt to gnomeTariff in console.log final output so that only a whole number is shown.

console.log("Now for the love of stripey toes & fear of wooley washes, we gnomes shall spare your little piggy's socky blankets \nfor a total of " + parseInt(gnomeTariff) + " pairs of fashionably NEW socks a year. Take it... Or ... we will (teehee).\nSincerely,\nTiny Nale-Hangz Jr. the Gnome");
