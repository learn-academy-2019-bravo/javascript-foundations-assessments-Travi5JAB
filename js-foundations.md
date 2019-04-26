# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.

string, number, boolean, -primitive data types
null, undefined, symbol

2. What's the difference between =, ==, and === in JavaScript?

= sets a variable equal to another value, number, string etc...
== asks if two variables are loosely equal to eachother (3 == "3") is true
=== is like == but strict (3 === "3") is false

3. What is the difference between an array's index and length?

an array length is the number of items in an array [1,2,3,4,5] length is 5
an array index is the value assigned to the place of a specific value in an array [1,2,3,4,5] index of 3 is 2

4. What are the three parts of a for loop?

set the value at the starting point (i=0) 0 is most common starting point in array
set condition of loop (i<5) often set to array or string length (i<arr.length)
set if variable (i) is increasing or decreasing in value with each loop (i++)(i--)

5. What is a function's declaration, argument, and call?

a declaration is the logic of a function

an argument is a placeholder in the function so that a variable may be passed into the function changing based on the value of the variable

the call is what the function will return

6. What are the three main steps in saving work to github?

git add
git commit
git push

7. What is the terminal command to move directories?

cd (change directory)

8. Do you have a suggestion for a Check In question?

no...

9. What was your favorite topic this week?

i enjoyed the car story and creating class extensions for different cars

10. What was your "A-ha!" moment this week?

i started to understand classes a lot better this week and how they might be used in future projects

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

this script will come back undefined there is no argument to pass into the function  
``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```

2. What is JSON? How does it relate to javascript objects?

JSON (Javascript Object Notation). it is a way to read and understand object information (name, age, height, etc..)

3. Describe a closure, what is it good for and how do you recognize one?

a closure allows access to an outer function's scope from within a function. it is seen when ther is a function called from within another function.
