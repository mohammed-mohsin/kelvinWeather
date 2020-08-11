// 1 C = 274.15 K
const kelvin = 0;

// Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
const celsius = kelvin - 273;

// Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9 / 5) + 32;

// The Math.floor() function returns the largest integer less than or equal to a given number.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);