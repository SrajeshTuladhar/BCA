// //Immutable and Mutable  values

// let array1 = ['a', 'b', 'c'];
// let array2 = ['a', 'b', 'c'];

// console.log( array1 === array2 );

// console.log( array1[0] === array2[0] );


// //Type conversions

// let sam;
// console.log(sam)
// console.log(sam + array1)

// let car = {name:"Maruti", speed: 120, color:"Red"}
// console.log(sam + car)


//Hoisting

// let scope = "global";
// function f() {
//  console.log(scope); 
//  var scope = "local"; 
//  console.log(scope);
// }

// f()

// Var and Let

// //var
// console.log(x);
// var x=5;
// console.log(x);

// //let
// console.log(x);
// let x=5;
// console.log(x);


// //The expression x * y evaluates to the product of the values of the expressions x and y

// x * y


// // This function returns the square of the value passed to it.

// var square = function(x) { return x * x; }


// f(0) // f is the function expression; 0 is the argument expression.
// Math.max(x,y,z) // Math.max is the function; x, y and z are the arguments.
// a.sort() // a.sort is the function; there are no arguments.


// //Object with arguments
// new Object()
// new Point(2,3)

// //Object without arguments
// new Object
// new Date


// const arr = [1, 2, 3];

// // Assign all array values to 0
// for (let i = 0; i < arr.length; arr[i++] = 0) /* empty statement */ ;

// console.log(arr);
// // [0, 0, 0]

// var i,j,sum;
// for(i = 0, j = 10 ; i < 10 ; i++, j--){
    
// }

// var x = 23;

// (function(){
//   var x = 43;
//   (function random(){
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// })();

const student = {
  name: "John",
  school: "freeCodeCamp",
};

console.log(student);

