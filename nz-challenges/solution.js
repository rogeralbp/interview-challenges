
// Multiply two numbers without using the multiplication operator

const multiply = (a, b) => {

    let result = 0;

    const positiveNumber = Math.abs(b) == b;

    for(i = 0; i < Math.abs(b); i++) {

        result = positiveNumber ? result + a : result - a;
    }

    return result;

}

const a = multiply( 50, 50);
console.log( a );


// Get the highest number in an array iterating only once
// Iterating an array only once, create a function that removes: undefined, False, 0, or null
// Write function that flattens arrays on one level (separate arrays on levels)
// Writable function to count the number of times a word is repeated in array
// Check if a string is palindrome (words or phrases)