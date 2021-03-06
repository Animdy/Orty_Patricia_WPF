// Patricia Orty
// Student ID 0004002218
// 10/10/13

// Assignment : Expressions - Wacky

//Goal of this calculation will be to determine how many claps it will take to revive a fallen fairy, like Tinkerbell in Disney's Peter Pan.

//Declaration of variables used in calculation
var howOld;
var whatHour;
var howManyPeople;

//Alert message to explain the prompts to collect information for the calculation.
alert("Wondering in the woods and see what looks like a falling star? \nUpon further inspection you find it's not a star but a sparkling lil' person with wings? \nWell you've found a fallen fairy and how do you revive this fallen will 'o wisp?\nCLAP! But for how long you ask? Answer the following questions to find out!");

//Defining previously declared variables as prompts to gather information for calculation.
howOld = prompt("How old are you today?");
whatHour = prompt("What hour is it currently?\n(Choose a number between 1 & 24)");
howManyPeople = prompt ("How many people are you going to get clapping with you?");

//Placing calculation data in an array
var clapStats = [howOld, whatHour, howManyPeople];

//Calculating how many claps necessary by taking a base clap amount of 225,000 and minusing it by howOld then multiplying the result by whatHour and divides by howManyPeople.
var neededClaps = (225000 - clapStats [0]) * clapStats [1] / clapStats [2];

//console.log to show calculation result

console.log("You and the " + howManyPeople + " people with you will need to clap " + neededClaps + " times to save your fallen fairy.");