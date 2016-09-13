// Square Area
// Create a function called computeArea that 
// takes two arguments: width and height. 
// It returns the area of a square whose width 
// is width and height is height. So computeArea(2, 2)
//  would return 4, 
// and computeArea(3, 5) would return 15.


function computeArea(width, height) {
  // your code here
  return width * height;
}


// Temperature Conversion
// Create two functions, one called celsToFahr 
// that converts Celsius to Fahrenheit,
//  and another called fahrToCels that converts 
//  Fahrenheit to Celsius. celsToFahr takes one 
//  argument, celsTemp, 
// and fahrToCels takes one argument, fahrTemp.


function celsToFahr(celsTemp) {
  // your code here
  return celsTemp * 9/5 + 32;
}

function fahrToCels(fahrTemp) {
  // your code here
  return (fahrTemp - 32) * 5/9;
}


// Is Divisible
// Write a function called isDivisible that takes
//  two arguments: divisee and divisor. 
//  This function should return true if divisee 
//  can be divided by divisor with no remainder, 
// otherwise it should return false. 
// So isDivisible(18, 3) should be true,
//  while isDivisible(15, 4) should be false.

// Note that we haven't covered boolean values
//  in depth in this lesson yet. 
//  All you need to know to complete this drill
//   is that true is represented by the keyword 
//   true and false with the keyword false.

function isDivisible(divisee, divisor) {
   // your code here
  if (divisee % divisor === 0) {
    return true;
  }
  else {
    return false;
  }
}





