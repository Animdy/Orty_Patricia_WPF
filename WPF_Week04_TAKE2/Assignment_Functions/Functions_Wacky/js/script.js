// Patricia Orty
// Student ID 0004002218
// 10/25/13

// Assignment : Functions - Wacky

//Goal: Calculation to predict results of virtual potion mixture.

//Declaration of variables used to gather information for calucation.
var toads;
var root;
var dragonNail;
var nameWish;

//Alert to describe purpose of following prompts to gather information for calculation.
alert("Here at Wonda's Web of the Wide World Potion Imporium we've designed away to mix your potions without a coldron and send the results through the wired. No fuss, no muss!\nNo more cleaning up from the boiling and no more toiling with finding ingredients.\nJust tell me how much of the next three ingredients and we'll tell you if it worked or etc.\nHappy spell-binding to our neo-webcasters!");

//Definition of variables with prompts to gather information for calculation.
nameWish = prompt("Name the purpose of your potion? ...is it for love? ...money?");
toads = prompt("Toads are sensitive and can help bring change... how many would you like to use?");
root = prompt("Roots bind to the soil and root us in our ways... how many would you like to dip in to help your potion stick?");
dragonNail = prompt("People are stuborn... just like the nails of dragons. Fire tested and harder than diamonds.\nHow many would you like to drop in to add an edge to your blessed brew?");

//Definition and declaration of anonomous function to house calculation for potion.
var potion = function(amount, ingredient, other, potionName){
	if((amount > ingredient) && (other > ingredient)){
		var outcome ="Your wishes in " + potionName + " shall be granted.";
	} else if(amount == ingredient || other == ingredient){
		var outcome ="You do not feel strongly enough either way to get your desired outcome in " + potionName + ".";
	} else{
		var outcome ="Concentrate harder on your desire and try to mix the potion again.";
	}

	return outcome;
}

//Call of anonymous function
var result = potion(toads, root, dragonNail, nameWish);

//console.log to show results of function
console.log(result);
