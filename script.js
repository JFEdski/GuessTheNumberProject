/* Within the function called "randomNumber", it allows for a two parameters to be passed. One will be the value that is taken from the input from the HTML document. The other is a random number that has been generated.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/

function randomNumber(userGuess, computersNumber) {
    
    // YOUR CODE BELOW
    if (userGuess < 0 || userGuess > 100) {
        //console.log('Please enter a number between 1 and 100!');
        return('Please enter a number between 1 and 100!');
    }
    else if (userGuess < computersNumber) {
        //console.log('Higher!');
        return "Higher!";
    } else if (userGuess > computersNumber) {
        console.log('Lower!');
        return "Lower!";
    }
    if (userGuess == computersNumber) {
        //console.log('Correct!');
        return (`Correct! The number was ${userGuess}!`);
    }
    // YOUR CODE ABOVE
};


//* Have the Computer Guess your Number ---------------------------------------------
/* 
    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/

let currentNumber = 1;
let lowest = 0;
let highest = 100;

createGuess = () => {
    currentNumber = Math.floor((highest + lowest)/2);
    return currentNumber;
}

console.log(createGuess());


function startCompGuess() {
    // This should return a string that denotes the first guessed number
    return ("Is your number " + currentNumber + "?");
    
    // YOUR CODE ...
}

console.log(startCompGuess());

function compGuess(reply) {
    /* 
    The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating th elogic and response. 
    
    This should return a string indicating the computers response.
    */
    if (reply === 'lower') {
        highest = currentNumber;
        currentNumber = createGuess();
        return (`Your number is lower? Is it ${currentNumber}?`);
    } else if (reply === 'higher') {
        lowest = currentNumber;
        currentNumber = createGuess();
        return (`Your number is higher? Is it ${currentNumber}?`);
    } else if (reply === 'correct') {
        return (`I knew it was ${currentNumber}!`);
    }

}
