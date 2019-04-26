// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
divThree = (num) => (num % 3 === 0) ? `Yes ${num} is divisable by 3` : `No there is a remainder of ${num%3}`
;
console.log(divThree(4));
console.log(divThree(6));
console.log("");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you.
// Write a function that returns a description of you.
var helloMe = {first_name: "Travis",
                last_name: "Baker",
                gender: "Male",
                phone_type: "cell",
                phone: "619-916-1969"}
function aboutMe(obj){
  var{first_name, last_name, gender, phone_type, phone}=obj
    return `Hello my name is ${obj.first_name} ${obj.last_name}. I am a ${obj.gender}. You can reach me on my ${obj.phone_type} phone at ${obj.phone}`
}
console.log(aboutMe(helloMe));
console.log("");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
var groceryList = ["bananas", "milk", "eggs", "soap", "juice"]

function listFilter(arr){
  var newArr = []
  for(i=0; i<arr.length; i++){
    if(i % 2 === 0){
      newArr.push(arr[i])
    }
  }return newArr
}
console.log(listFilter(groceryList));
console.log("");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters
// in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included
// in the parameter.
var string = "learn"
var number = 77

function alphabetSoup(str){
  if(typeof str != "string"){
    return "Not A String"
  }else{
  var arr = str.split('')
    var alpha = arr.sort()
      return alpha.join('')
    }
}

console.log(alphabetSoup(string));
console.log(alphabetSoup(number));
console.log("");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each
 // array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

function animalNums(arr,arr2){
  var newArr = []
  for(i= 0; i<arr.length; i++){
    var cc = arr[i] +" "+ arr2[i]
    newArr.push(cc)
  }return newArr
}



console.log(animalNums(nums,nouns));
// output should be: "9 ducks", etc
console.log("");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the
// numbers multiplied by 5.
var numArr =[5,9,74,12,5]
mult5 = (array) =>{
  let newArr = array.map(value => value * 5)
        return newArr
}
console.log(mult5(numArr));
