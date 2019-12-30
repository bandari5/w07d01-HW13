​// ------ FOR ALL THE EXCERCISES ONLY USE ARROW FUNCTIONS  ----- //
​


// PART 1:  USE MAP IN THE FOLLOWING EXCERCISES //

// A) write a function called swapCase that takes a string of words and uses .map and your newly written capitalize()
// function to return a string where every other word is in all caps.
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take.
// ex: swapCase('hello stranger , what do we have today? ') // => " HELLO stranger , WHAT do WE have TODAY ?"
var swapCase = function(string) {
  // Codeeeee
};
​
// Solution PART 1/A

const swapCase = swapString =>
 {
   let stringArr = swapString.split(' ')
   let arr = stringArr.map((word,index) => 
   {
  if (index % 2 === 0)
     {
    return word.toUpperCase()
     }
     else
     {
    return word
     }

    })
    return arr.join()

  }
 swapCase('hello stranger , what do we have today? ')

// B) Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.charCodeAt() .
// see if you can use Ascii code to acomplish this
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"
var shiftLetters = function(string) {
  // code!
};

// solution PART 1/B:
var word = "hello";
 let shiftLetters = word.split("").map((val, index) => {
   return String.fromCharCode(word.charCodeAt(index) + 1);
 }).join('');

  console.log(shiftLetters);


// PART 2: USE FOREACH IN THE FOLLOWING EXCERCISES

// A) Build a Deck
// Use a forEach() loop within another forEach() loop to build an array representing a deck of cards. A deck consists of 52 cards - 13 ranks in each of 4 suits.
// Then, display a list of every card in the deck. (Hint: Each element of the array should read something like "ace of spades" or "4 of hearts").
// The start of your output should look something like this:
// - ace of clubs
// - 2 of clubs 
// - 3 of clubs 
// - 4 of clubs 
// - 5 of clubs 
// - 6 of clubs 
// - 7 of clubs 
// - 8 of clubs 
// - 9 of clubs 
// - 10 of clubs 
// - jack of clubs 
// - queen of clubs 
// - king of clubs 
// - ace of diamonds
// - 2 of diamonds
// - 3 of diamonds 


// solution PART 2/A

var cardsdeck = [];
 var cards = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
 var suits = ["clubs","diamonds", "hearts", "spades"];

suits.forEach(function(suit) {
  cards.forEach(function(card) {
    cardsdeck.push([card + " of " + suit]);
  });
});

console.log(cardsdeck)


// B) Word Play
// Create a form where users may enter a sentence.
// Turn that sentence into an array using the split method.
// Then, loop through this array to build a new array out of every word in the sentence that is 3 or more characters in length.
// Finally, reverse the order of the new array, join it back together into a string, and display it to the user.


// solution PART 2/B

newArr=[];
 var WordPlay = (string) => {
   newS=string.split(" ")
   newS.forEach(function(element){
     if(element.length>=3){
       newArr.push(element)
       reverseNewArr=newArr.reverse();
     }
 })
 console.log(newArr)
 console.log(reverseNewArr.join())
 };
  WordPlay("hi , goodMorning")

