//kelvin variable is constant
const kelvin = 0;
// celsius is 273 degree less than kelvin
var celsius = kelvin - 273;
// fahrenheit celsius * 9/5 + 32
var fahrenheit = celsius *(9/5) + 32;
// round down fahrenheit
var fahrenheit = Math.floor(fahrenheit);
//convet celsius to Newton scale
var newton = celsius * (33/100);
var newton = Math.floor(newton);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit, or ${newton} in Newton scale.`);