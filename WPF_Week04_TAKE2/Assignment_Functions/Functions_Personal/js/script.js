// Patricia Orty
// Student ID 0004002218
// 10/25/13

// Assignment : Functions - Personal

//Goal: To determing outcome of coin toss set winner.

//Declaration of variable howManyRotations
var howManyRotations;

//Declaration of variable howManyTimes
var howManyTimes;

//Alert to explain prompts to follow to gather information for calculation
alert("Having trouble solving a problem. Well just answer the next two questions and we'll determine if you get heads or tails overall in your deciding coin flip.");

//Definition of variable howManyRotations with prompt
howManyRotations = prompt("How many times do you think the one coin flips in the air?");

//Definition of variable howManyTimes wtih prompt
howManyTimes = prompt("How many times are you going to flip the coin? Like is it best 2 out of 3... in which case the flip total would be 3...");

//Creation of function to calculatie coin toss overall outcome
//calculation of function to determine overall outcome by adding rotations and times then multiplying by three... takes that total and then uses Modulo to determine if result is even. If even result is HEADS and if odd result is TAILS.

function coinToss(rotations, times){
	var outcome = (((rotations + times) * 3) % 2 == 0) ? "HEADS" : "TAILS";
	return outcome;
}

//Function call to gather result of calculation.
var decision = coinToss(howManyRotations, howManyTimes);

