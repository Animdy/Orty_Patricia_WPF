// Screencast : Functions - Basic Structure


var width = 5;

function outptMsg(){
	console.log("Hello World");
}

function calcArea(){
	var width = 20;
	var height =30;
	var area = width * height;
	console.log(area);
}

//have to invoke(CALL) to get a function to run : functionName();

calcArea(); //shows width used is that within the function.

console.log(width); //shows width outside the function when not refering to the function is used.