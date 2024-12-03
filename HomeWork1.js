//1.1. ES6 - Methods (examples, explanations).

// Definition - Methods are functions on a certain object. 
// Instead of holding a value, like properties, they perform actions.


// Array Methods:
// 1. Create an empty array to use as a shopping list. 
// 2. Add Milk, Bread, and Apples to your list.
// 3. Update "Bread" with Bananas and Eggs. 
// 4. Remove the last item from the array and output it into the console. 
// 5. Sort the list alphabetically. 
// 6. Find and output the index value of Milk. 
// 7. After Bananas, add Carrots and Lettuce. 
// 8. Create a new list containing Juice and Pop.
// 9. Combine both lists, adding the new list twice to the end of the first list. 
// 10. Get the last index value of Pop and output it to the console. 
// 11. Your final list should look like this:

let newarr = [];
newarr.push("Milk", "Bread", "Apples");
newarr.splice(1, 1, "Bananas", "Eggs");
newarr.pop();
newarr.sort();
console.log(newarr.lastIndexOf("Milk"));
newarr.splice(1, 0, "Carrots", "Lettuce");


let newarr1 = ["Juice", "Pop"];
console.log(newarr);
newarr = newarr.concat(newarr1);
newarr = newarr.concat(newarr1);
console.log(newarr);
console.log(newarr.lastIndexOf("Pop"));

//Define Methods

// Add properties that aren't accessible from outside.
// with #,  the firstname and lastname properties cannot be accessed 
// from outside the class
//  It is considered good practice to make fields private as much as possible and provide access
// to them using getters and setters

class Person {
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }

    get firstname() {
        return this.#firstname;
    }

    set firstname(firstname) {
        this.#firstname = firstname;
    }

    get lastname() {
        return this.#lastname;
    }
    set lastname(lastname) {
        this.#lastname = lastname;
    }

    greet() {
        console.log("Hi there! I'm", this.firstname);
    }

    compliment(name, object) {
        return "That's a wonderful " + object + ", " + name;
    }

}

let p = new Person("Maaike", "van Putten");
p.greet();

let compliment = p.compliment("Harry", "hat");
console.log(compliment);

let l = new Person("Maaike", "van Putten");
console.log("Hi", l.firstname);

let r = new Person("Maria", "Saga");
console.log(r.firstname);



class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }

    move() {
        console.log("moving at", this.currentSpeed);
    }

    accelerate(amount) {
        this.currentSpeed += amount;
    }
}

class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed);
        this.fuel = fuel;
    }

    doWheelie() {
        console.log("Driving on one wheel!");
    }
}

let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();


// Using the array map() method, update an array's contents.
// Take the following steps: 1. Create an array of numbers. 
// 2. Using the array map method and an anonymous function, 
// return an updated array, multiplying all the numbers in the array by 2. Output the result into the console. 
// 3. As an alternative method, use the arrow function format 
// to multiply each element of the array by 2 with the array map() method in one line of code. 
// 4. Log the result onto the console.

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(num) {
    return num * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// arrow function
const doubledNumbersArrow = numbers.map(num => num * 2);
console.log(doubledNumbersArrow); // [2, 4, 6, 8, 10]


//Remove duplicates from the array using filter() and indexOf()
// 1. Create an array of names of people. Make sure you include duplicates. The exercise will remove the duplicate names.
// 2. Using the filter() method, assign the results of each item from the array as arguments within an anonymous function. 
// 3. Using the value, index, and array arguments, return the filtered result. You can set the return value to true temporarily as this will build the new array
// with all the results in the original array. 3. Add a console.log call within the function that will output the index value of the current item in the array. 
// Also add the value so you can see the results of the item value that has the current index number and the first matching result from the array's index value.
const names = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];

// Use filter() to remove duplicates
const uniqueNames = names.filter((value, index, array) => {
    console.log(`Index: ${index}, Value: ${value}, First Match: ${array.indexOf(value)}`);
    return array.indexOf(value) === index;
});

console.log(uniqueNames); // [ 'Laurence', 'Mike', 'Larry', 'Kim', 'Joanne' ]


// String Methods


// Using string manipulation, create a function that will return a string with the first letter of all the words capitalized and the rest of the letters in lowercase. 
// You should transform the sentence thIs will be capiTalized for each word into This Will Be Capitalized For Each Word: 
// 1. Create a string with several words that have letters with different cases, a mix of upper and lowercase words. 
// 2. Create a function that gets a string as an argument, which will be the value that we will manipulate. 
// 3. In the function first transform everything to lowercase letters. 
// 4. Create an empty array that can hold the values of the words when we capitalize them.
// 5. Convert the phrase into words in an array using the split() method. 
// 6. Loop through each one of the words that are now in the new array, so you can select each one independently. You can use forEach() for this.
// 7. Using slice() isolate the first letter in each word, then transform it to uppercase. Again using slice(), get the remaining value of the word without including the first letter. 
// Then concatenate the two together to form the word that is now capitalized. 
// 8. Add the new capitalized word into the blank array that you created. By the end of the loop you should have an array with all the words as separate items in the new array. 
// 9. Take the array of updated words and using the join() method, transform them back into a string with spaces between each word. 
// 10. Return the value of the newly updated string with capitalized words that can then be output into the console.


// =============================================== 1.5. Arrays 

const inputString = "heLLo worLd! proGramMing in JAVAscript is FuN.";

function capitalizeWords(inputString) {
    const lowerCaseString = inputString.toLowerCase();
    const wordsArray = lowerCaseString.split(" ");
    let capitalizedWords = [];

    for (let i = 0; i < wordsArray.length; i++) {
        const capitalizedWord = wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
        capitalizedWords.push(capitalizedWord);
    }

    return capitalizedWords.join(" ");
}

const input = "thIs will be capiTalized for each word";
console.log(capitalizeWords(input)); // This Will Be Capitalized For Each Word

// for -  gives explicit control
// for ... of - Simplifies iteration over array elements.
// map() - concise and immutable
// reduce() - accumulates the result while iterating
// for ... in - iterates



// Output the date with the full month name into the console. 
// When converting to or from arrays, remember that they are zero-based: 
// 1. Set up a date object, which can be any date in the future or past. 
// Log the date out into the console to see how it is typically output as a date object. 
// 2. Set up an array with all the named months of the year. Keep them in 
// sequential order so that they will match the date month output. 
// 3. Get the day from the date object value, using getDate(). 
// 4. Get the year from the date object value, using getFullYear().
// 5. Get the month of the date object value, using getMonth(). 
// 6. Set up a variable to hold the date of the date object and output
// the month using the numeric value as the index for the array month name. 
// Due to arrays being zero-based and the month returning a value of 1-12, the result needs to be subtracted by one. 
// 7. Output the result into the console.

const date = new Date(2024, 6, 15);
console.log(date);

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


const day = date.getDate(); // 15

const year = date.getFullYear(); // 2024

const monthIndex = date.getMonth(); // 6 (July)

const fullMonthName = monthNames[monthIndex]; // "July"

const formattedDate = `${fullMonthName} ${day}, ${year}`;
console.log(formattedDate); // "July 15, 2024"



// ============================================================================= 1.2 Difference between var, let, and const.


let nr1 = 12;
var nr2 = 8;
const PI = 3.14159;

// let and var are both used for variables that might have a new value assigned to them somewhere in the program.

// var has global scope and let has block scope. 
// var's global scope means that you can use the variables defined with var in the entire script.
// On the other hand, let's block scope means you can only use variables defined with let
// in the specific block of code in which they were defined. 
// A block of code will always start with { and end with }, which is how you can recognize them.

// const is used for variables that only get a value assigned once— for example, the value of pi, which will not change. 
// If you try reassigning a value declared with const, you will get an error: Uncaught TypeError: Assignment to constant variable.

// const someConstant = 3; 
// someConstant = 4;


// ============================================================================= 1.3 Spread operator.

// The spread operator is a special operator. 
// It consists of three dots used before a referenced expression or string,
// and it spreads out the arguments or elements of an array. 

let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];

// The elements of the spread operator become individual elements in the array. 
// The spread operator spreads the array to individual elements in the new array. 


//It can also be used to send multiple arguments to a function,

function addTwoNumbers(x, y) {
    console.log(x + y);
}
let arr = [5, 9];
addTwoNumbers(...arr);

// This operator avoids having to copy a long array or string into a function, which saves time and reduces code complexity.

function addFourNumbers(x, y, z, a) {
    console.log(x + y + z + a);
}

let arr1 = [5, 9];
let arr2 = [6, 7];
addFourNumbers(...arr1, ...arr2);
addFourNumbers(5, 9, 6, 7);



// ============================================================================= 1.4 Objects: How to iterate over an object, deep copy.

// line 178

let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
};
for (let prop in car) {
    console.log(car[prop]);
}

for (let prop in car) {
    console.log(prop);
}

for (let key of Object.keys(car)) {
    console.log(key);
}

for (let key of Object.values(car)) {
    console.log(key);
}

let arrKeys = Object.keys(car);
for (let i = 0; i < arrKeys.length; i++) {
    console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
}

for (const [key, value] of Object.entries(car)) {
    console.log(key, ":", value);
}


// Deep Copy
// Means creating an entirely independent copy of an object or array, so that changes
// don't affect the original
// In JavaScript, creating a deep copy is more complex than a shallow copy because 
// it involves recursively copying all properties, including nested objects and arrays.

const original = {
    name: "Alice",
    age: 25,
    address: {
        city: "Wonderland",
        zip: "12345",
    },
};

// Create a deep copy
const deepCopy = JSON.parse(JSON.stringify(original));

// Modify the copied object
deepCopy.address.city = "Gotham";

console.log("Original:", original.address.city); // Wonderland
console.log("Deep Copy:", deepCopy.address.city); // Gotham

// structuredClone(value) only for node >= 17
//  EG: obj = eval(uneval(o)) , but only for firefox
// To clone in a speedy way try:
// JSON.parse(JSON.stringify(obj)) 



//==================================================  1.5. Arrays - accessor, iteration, and mutator methods (which they are, how to use them).

// Accessor Methods: methods that retrieve values form an array but do not modify the original array.
// at() - returns the element of the specified index
// copywithin() - copies a section of an array to another position within the same array
// indexOf() - Return the first index of a specified value otherwise returns -1
// includes() - prtty intuitive(true/false)
// join() - join all array elems. in a single string, separated by a specified separator or default(,)
// slice - see 1.1
let a = [10, 20, 30, 40];
console.log(a.at(2));
console.log(a.at(-1));

// Iteration: loop through array elements
//forEach() -  execute a function once for each array
let c = [1, 2, 3];
c.forEach((element, index) => {
    console.log(`Element at index ${index} is ${element}`);
});
//map() - creates a new array populated with the results of calling a provided function on every elem in the array

let b = [1, 2, 3];
let doubled = b.map((x) => x * 2);
console.log(doubled); // [2, 4, 6]

// filter() - creates a new array with all elems that pass the test
let d = [1, 2, 3, 4];
let evenNumbers = d.filter((x) => x % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Mutator Methods: modify the array itself
//push, pop -- see 1.1


//==================================================1.6. Promises. Callback.

//Promises

// With Promises, we can organize the sequence of our code in a slightly easier-tomaintain way.
// A Promise is a special object that connects code that needs to produce a result and the code that needs to use this result in the next step.

let promise = new Promise(function(resolve, reject) {
    // do something that might take a while    
    // let's just set x instead for this example      
    let x = 20;
    if (x > 10) {
        resolve(x);
    } else {
        reject("Too low"); // on error    
    }
});

promise.then(
    function(value) {
        console.log("Success:", value);
    },

    function(error) {
        console.log("Error:", error);
    }
);


const promise1 = new Promise((resolve, reject) => {
        reject("oops... ");
    })
    .then(value => {
        console.log(value);
        return "we";
    })
    .then(value => {
        console.log(value);
        return "can";
    })
    .then(value => {
        console.log(value);
        return "chain";
    })
    .then(value => {
        console.log(value);
        return "promises";
    })
    .then(value => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
    })


// Callbacks
//useful for  asynchronous functions 
//It is just a function that takes another function as an argument, which is then called when the rest of the initial function has finished

function doSomething(callback) {
    callback();
}

function sayHi() {
    console.log("Hi!");
}
doSomething(sayHi);


function doFlexibleStuff(executeStuff) {
    executeStuff();
    console.log("Inside doFlexibleStuffFunction.");
}

let youGotThis = function() {
    console.log("You're doing really well, keep coding!");
};
setTimeout(youGotThis, 1000);




// =======================================1.7. Async. Await.
//With the async keyword, we can make a function return a Promise.
//This makes the Promises nicer to read and look a lot like synchronous (non-concurrent) code. 
//We can use this await keyword to wait until the Promise is done. await only works in an asynchronous function.

function saySomething(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("something" + x);
        }, 2000);
    });
}
async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
}
talk(2);
talk(4);
talk(8);

//How to use await to wait on a Promise inside an async function. 
//Using await and async, create a counter with timeout(), and increment a global counter value. 
//1. Create a global value for a counter. 
//2. Create a function that takes one argument. Return the result of a new Promise, setting a setTimeout()
//function that will contain the resolve instance. 3. Increment the counter within setTimeout(), adding one every second.
//Resolve the Promise with the value of the counter and the value of the variable that was in the function argument. 
//4. Create an asynchronous function that outputs into the console the value of the global counter and the value of the argument of the function. 
//5. Create a variable to capture the returned resolve value from the await function. Output that result into the console. 
//6. Create a loop to iterate 6 times, incrementing the value and invoking the async function, passing the value of the increment variable as the 
//parameter in the function. 
//The results should look like the following: ready 1 counter:0 ready 2 counter:0 ready 3 counter:0 x value 1 counter:1 x value 2 counter:2 x value 3 counter:3

let globalCounter = 0;

function incrementCounter(value) {
    return new Promise((resolve) => {
        // Increment the counter every second 
        let count = 0;
        const interval = setInterval(() => {
            count++;
            console.log(`x value ${value} counter:${count}`);

            // After 3 increments, resolve the promise
            if (count === 3) {
                clearInterval(interval); // Stop 
                resolve({
                    counter: count,
                    argument: value
                });
            }
        }, 1000);
    });
}

async function asyncCounter(value) {
    console.log(`ready ${value} counter:${globalCounter}`);
    // Await the result of incrementCounter
    const result = await incrementCounter(value);
    // Output
    console.log(`Returned resolve: counter:${result.counter}, argument:${result.argument}`);
}
async function runCounter() {
    for (let i = 1; i <= 6; i++) {
        // counter
        globalCounter++;
        // Invoke the async function
        await asyncCounter(i);
    }
}

// Invoke the runCounter function
runCounter();


// ========================================================== 1.8. Closures.
//The closure allows a function to access variables from its outer (enclosing) function even after the outer function has finished execution
// It create private variables that cannot be accessed directly from the outside world but can be accessed through the closure.


function outerFunction(outerVariable) {
    // This is the outer function scope
    return function innerFunction(innerVariable) {
        // This is the inner function scope
        console.log('Outer Variable:', outerVariable);
        console.log('Inner Variable:', innerVariable);
    }
}

const closureFunction = outerFunction('outer value');
closureFunction('inner value');

// EG 2

function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
            console.log('Count:', count);
        },
        decrement: function() {
            count--;
            console.log('Count:', count);
        },
        getCount: function() {
            console.log('Current Count:', count);
            return count;
        }
    };
}

const counter = createCounter();

counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.getCount(); // Current Count: 2
counter.decrement(); // Count: 1
counter.getCount(); // Current Count: 1