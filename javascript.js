
//Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum(x,y){
 return x + y;
}

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg(x,y,z){
  var result = x + y + z;
  return result/2;
}

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength(x){
  return x.length
}

// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan(x,y){
  if (x < y) {
    return "true";
  }
  else{
    return "false";
  }
}

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet(x){
  return ("Hello, ") + x + ("!");
}

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function madlib(w,x,y,z){
  return ("Oh hi there ") + w + (" what're you doing here at ") + x + (" I prefer to hangout at ") + y + (" rather than ") + z + (".");
}

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
  if(x>y){
    return x + " is larger";
  }
  else {
    return y + " is larger";
  }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
  if (x>y && x>z){
    return x + " is the largest";
  }
  else if (y>x && y>z){
    return y + " is the largest";
  }
  else{
    return z + " is the largest";
  }
}

// ------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ------------------

function isVowel(x){
  if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u" || x=== " "){
    return true;
  } else {
    return false;
  }
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function translate(string){
  var sentence = string;
  var answer = "";
  for (i = 0; i < sentence.length; i++){
    var letter = sentence[i];
    // Use isVowel instead!
    if (isVowel(sentence[i]) === false){
      answer += letter + "o" +letter;
    } else if (isVowel(sentence[i]) === true){
      answer += letter;
    }
  }
  return answer;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverseString(string) {
  var backwards = "";
  for(i = string.length - 1; i >= 0; i--){
    backwards += string[i];
  }
  return backwards;
}
