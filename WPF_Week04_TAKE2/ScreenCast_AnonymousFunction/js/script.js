// Screencast : Anonymous Functions

function functionName(){

} //is a setup for a function or procedure (difference based on return)



var functionName = function(){
	//code to run
} // is setup for an anonymous function (sits inside a variable)

var calcArea = function(width, height){
	var area = width * height;
	return area;
}

var a = calcArea(20,30);