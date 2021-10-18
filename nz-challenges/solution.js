
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
console.log('Exercise #1 ', a );


// Get the highest number in an array iterating only once

const getBiggest = ( array ) =>  array.reduce( ( accumulator, element ) => accumulator > element ? accumulator : element ) 

const b = getBiggest( [50, 1560, 30, 66, 1, 0, -2000 ] );

console.log('Exercise #2 ',  b );

// Iterating an array only once, create a function that removes: undefined, False, 0, or null

const cleanArray = ( array ) =>  array.reduce( ( accumulator, element ) => {

    if ( element ) {

        accumulator.push( element )
    }

    return accumulator

} , []  )

const c = cleanArray( [1, undefined, 25, null, 0, 4590] );

console.log('Exercise #3 ',  c ); // -> [ 1, 25, 4590 ]

// Write function that flattens arrays on one level (separate arrays on levels)



// Writable function to count the number of times a word is repeated in array
// Check if a string is palindrome (words or phrases)