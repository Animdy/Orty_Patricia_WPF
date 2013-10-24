// Function Worksheet : Circumference

var radius = prompt("What is the radius of your circle?");

var answer = function(radius){
	var circ = radius * 2;
	return circ;
}

var circTotal = answer(radius);

console.log(circTotal);

//not sure what the circumference formula is or how to get pi to work correctly and check
//so to make sure I could get a return I set it this way with a simpliar calculation.