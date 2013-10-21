// Screencast : Loops

console.log('----------LOOPS----------');

var b = 10; //sets up index

//While Loop --example right now is an infinite loop... as it will just keep over.
/* while (b > 0){
	console.log(b);
}
*/


//in order to break it being infinite you must add an increment or decrement that will end out

while ( b > 0 ){ //checks condition
	console.log(b + 'kegs on the wall');
	b--; //increments or decrements index    b-- (decrements by 1)   b++ (increments by 1)
}