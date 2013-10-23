// Screencast : Parameters and Arguments



calcArea(30, 20);

//w=30, h=20 

function calcArea(w, h){
	var area = w * h;
	console.log(area);
}


function dogYears(age){  //parameters (storage container)
	var dogYears = age * 7;
	console.log("Sparky is " + dogYears + " years old.");
}
dogYears(10); //arguements
var age1 = 4;  // can use arguements to pass variable information to parameters
dogYears(age1);