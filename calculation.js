console.log("calculation.js active");

/************** Using Anonymouse Functions ***************/

// var calcPromise = new Promise(function(resolve, reject) {
//   setTimeout(function(){
//     resolve (1 + 1);
//   }, 1000);
// });

// calcPromise.then(function(value) {
// 	return value + 2;
// }).then(function(nextValue){
// 	console.log("The final value is  ", nextValue);
// });



/************** Using Named Functions ***************/
//Produces cleaner code that is easier to read.
//Allows for easier unit testing.

var calcPromise = new Promise(function(resolve, reject) {
setTimeout(function(){
resolve (1 + 1);
}, 1000);
});

var calcPromise2 = new Promise(function(resolve, reject) {
setTimeout(function(){
resolve (1 + 1);
}, 500);
});

function addTwo(value){
	return value + 2;
}

function printFinalValue(nextValue){
	console.log("The final value is ", nextValue);
}

calcPromise
	.then(addTwo)
	.then(printFinalValue);

calcPromise
	.then(addTwo)
	.then(addTwo)
	.then(printFinalValue);










