//  question 1......... 

//write a program to take 'city' name as input from user if user enters "karachi" welcome the user like this.
//"welcome to the city of lights"

// let city = prompt("from which city you from \n karachi \n hyderabad \n islamabad \n lahore \n rawalpindi")

// Convert the input to lowercase
// city = city.toLowerCase();

// if(city === "karachi"){
//     document.write("welcome to the city of lights")
// }else {
//     document.write("welcome to the " + " " + city)
// }



//........................................................................................................................................



// question 2.........

// write a program to take "gender" as input from gender . if the user is male , give the message "good morning sir" .
// if the suer is female , give the message "good morning ma'am "

// let gender =prompt("please write down your gender \n Male \n Female")

// gender= gender.toLowerCase()

// if (gender === "male") {
//     document.write('Good Morning Sir')
// }else if (gender === "female"){
//     document.write("Good Morning Ma'am")
// }else{
//     document.write("please select your gender from the options we gave you")
// }


// .......................................................................................................................................


//QUESTION 3 ...........

// write a program to take input color of the road traffic signal from the user & show the message according to this table.


// let signalColor = prompt("please let us know what's the color of the signal so we can tell you the instruction you must be follow \n Red \n Yellow \n Gree")

// signalColor = signalColor.toLowerCase()

// if (signalColor === "red") {
//     document.write("Must Stop")
// }else if(signalColor === "yellow"){
//     document.write("Ready To Move")
// }else if (signalColor === "green"){
//     document.write("Go Now")
// }else{
//     document.write('invalid color')
// }


//........................................................................................................................................


//QUESTION 4


// write a program to take input remaining fuel in car (in liters) from user . if the current fuel is less than 0.25 liters show the message . " please refill the fuel in your car" 



// let fuel = prompt("Please enter the remaining fuel in your car (in liters):");

// // Convert the input to a number (since prompt returns a string)
// fuel = parseFloat(fuel);

// // Check if the fuel is less than 0.25 liters
// if (fuel < 0.25) {
//     document.write("Please refill the fuel in your car");
// } else {
//     document.write("You have enough fuel in your car.");
// }



//........................................................................................................................................



// QUESTION 5 



// Run this script, & check whether alert message would be displayed or not. Record the outputs.

//a.
//  let a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }


// //b.
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }


// //c.
//  let c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }


// // d.
// let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost){
// alert("The cost equals"); 
// }
// e. if (true){
// alert("True");
// }
// if (false){
//  alert("False");
// }
// //f. 
//  if("car" < "cat"){
//     alert("car is smaller than cat");
// }


//......................................................................................................................................



// QUESTION 6.............

//Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as per following table:



// let sub1 = parseInt(prompt("Enter the obtained marks in English"));
// let sub2 = parseInt(prompt("Enter the obtained marks in Computer"));
// let sub3 = parseInt(prompt("Enter the obtained marks in Maths"));

// let totalmarks = parseInt(prompt("Enter the total marks for each subject"));

// let totalObtainedMarks = sub1 + sub2 + sub3;

// document.write("MARKS SHEET" + "<br>");
// document.write('TOTAL MARKS: ' + totalmarks * 3 + "<br>");  // Total marks for all subjects
// document.write("MARKS OBTAINED: " + totalObtainedMarks + "<br>");

// let percentage = (totalObtainedMarks / (totalmarks * 3)) * 100;  // Calculate percentage
// document.write("PERCENTAGE: " + percentage + "%" + "<br>");

// if (percentage >= 80) {
//     document.write("GRADE: A-ONE" + "<br>");
//     document.write("REMARKS: EXCELLENT");
// } else if (percentage >= 70) {
//     document.write("GRADE: A" + "<br>");
//     document.write("REMARKS: GOOD");
// } else if (percentage >= 60) {
//     document.write("GRADE: B" + "<br>");
//     document.write("REMARKS: YOU NEED TO IMPROVE");
// } else {
//     document.write("GRADE: FAIL" + "<br>");
//     document.write("REMARKS: SORRY");
// };


//...................................................................................................................................




//QUESTION 7

//  Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


// let secretNumber = Math.floor(Math.random() * 10) + 1;

// let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));


// if (userGuess === secretNumber) {
//     document.write("Bingo! Correct answer.");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     document.write("Close enough to the correct answer.");
// } else {
//     document.write("Sorry, that's not the correct answer.");
// }



//........................................................................................................................................



// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
// 9. Write a program that checks whether the given input is an
// even number or an odd number.



// let number = parseInt(prompt("Enter a number to check if it is divisible by 3:"));


// if (number % 3 === 0) {
//     document.write("The number " + number + " is divisible by 3.");
// } else {
//     document.write("The number " + number + " is not divisible by 3.");
// }



//..................................................................................................................................



// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”



// let temperature = parseInt(prompt("Enter the temperature:"));


// if (temperature > 40) {
//     document.write("It is too hot outside.");
// } else if (temperature > 30) {
//     document.write("The Weather today is Normal.");
// } else if (temperature > 20) {
//     document.write("Today's Weather is cool.");
// } else if (temperature > 10) {
//     document.write("OMG! Today's weather is so Cool.");
// } else {
//     document.write("It is very cold outside.");
// }




//..................................................................................................................................




// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.



// Prompt the user to input the first number, second number, and operation
// let num1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));
// let operation = prompt("Enter the operation (+, -, *, /, %):");

// let result;

// if (operation === "+") {
//     result = num1 + num2;
//     document.write("Result: " + result);
// } else if (operation === "-") {
//     result = num1 - num2;
//     document.write("Result: " + result);
// } else if (operation === "*") {
//     result = num1 * num2;
//     document.write("Result: " + result);
// } else if (operation === "/") {
//     if (num2 !== 0) {
//         result = num1 / num2;
//         document.write("Result: " + result);
//     } else {
//         document.write("Error: Division by zero is not allowed.");
//     }
// } else if (operation === "%") {
//     if (num2 !== 0) {
//         result = num1 % num2;
//         document.write("Result: " + result);
//     } else {
//         document.write("Error: Division by zero is not allowed.");
//     }
// } else {
//     document.write("Invalid operation entered.");
// }
