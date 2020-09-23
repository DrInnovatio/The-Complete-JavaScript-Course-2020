/*
var firstName = "Brandon";
console.log(firstName);

var lastName = "Park";
var age = 39;

var fullAge = true;
console.log(fullAge);

document.write(`${firstName} ${lastName}. He is ${age} years old.`);

var job;
console.log(job);

job = "Developer"
console.log(job);
*/

// Variable naming rules. These are errors.

/* 
var 3years = 3;
var james/mark = "James and Mark"
var function = 23;   
*/

/*
var firstName = "Matthew";
var age = 28;

// Type Coercion
console.log(firstName + ' ' + age)

var job, isMarried;
job = "Developer";
isMarried = false;

console.log(firstName + " is a " + age + " years old " + job + '. Is he married? ' + isMarried);

// Variable mutation

age = 'Twenty eight';
job = "driver";
alert(firstName + " is a " + age + " years old " + job + '. Is he married? ' + isMarried);

var lastName = prompt("What is his last name?");
console.log(`${firstName} ${lastName}`)

*/
/*
// Basic Operations

var yearJohn = 2018 - 28;
var yearMark = 2018 - 33;
console.log(yearJohn)
console.log(yearMark)

var year = 2020;

var janeBorn = year - 22;
console.log(janeBorn)
console.log(`Jane will be leaving Australia in ${year + 3}.`)

var now, year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;

// Logical Operators

var johnOrder = ageJohn < ageMark;
console.log(johnOrder)

// Typeof operator

console.log(typeof johnOrder)
console.log(typeof ageJohn)
console.log(typeof "Mark is order than John.")

var x;
console.log(typeof x)

*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;

console.log(isFullAge)

// Multiple Addsignment

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y)
*/

// Coding Challenge 1
/*
var johnMass = 72;
var johnHeigh = 1.77;

var markMass = 91;
var markHeight = 1.80;

var johnBMI = johnMass / (johnHeigh * johnHeigh);
var markBMI = markMass / (markHeight * markHeight);


console.log(Math.floor(markBMI), Math.floor(johnBMI))

var comparison = johnBMI < markBMI;
console.log(comparison)

console.log(`Is Mark's BMI higher than John's? ${comparison}`)
*/

/******************************
 *   If / else statement
 * 
 * 
 var firstName = 'John';
var marriageStatus = 'single';

if (marriageStatus === 'married') {
  console.log(firstName + ' is married!!')
} else {
  console.log(firstName + ' will hopefully marry soon :) ')
}
 */

/********************
 * Boolean Logic

var firstName = 'Kelly';
var age = 16;

if (age < 13) {
  console.log(firstName + ' is a little girl.')
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.')
} else {
  console.log(firstName + ' is a lady.')
}

 */

/********************
 * The Ternary Operator and Switch Statement
 var firstName = "Amanda";
var age = 12;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink)

if (age >= 18) {
  var drink = "beer";
} else {
  var drink = "juice";
}
console.log(`${firstName} is able to drink ${drink}.`)

var num = 14;
num == 11 ? console.log("Correct") : console.log("wrong");


// Switch Statement

var name = "Ricky"
var job = prompt("What is he doing??")

switch (job) {
  case 'dev':
    console.log(name + " is programmer.")
    break;
  case 'driver':
    console.log(name + " is a Uber guy.")
    break;
  case 'nurse':
  case 'doctor':
    console.log(name + " working for the hospital.")
    break;
  default:
    console.log(name + " is doing something else.")
}

var speed = prompt("How fast he was driving at??");

switch (true) {
  case speed < 60:
    console.log("Speed up! You are on the highway.")
    break;

  case speed >= 60 && speed <= 100:
    console.log("It is a good speed. Keep going with it.")
    break;

  case speed > 100 && speed <= 120:
    console.log("Slow down!!")
    break;

  case speed > 120:
    console.log("Sorry. You've got a ticket!")
    break;
}
 */

/***********************
 * Truthy and Falsy values and quality operators
 * 
 * Falsy values : undefined, null, 0, '', NaN
 * 
 * Truthy values : NOT falsy values
 * 
 * 
 var height;

height = 23;

if (height || height === 0) {
  console.log("Variable is defined");
} else {
  console.log("Variable is NOT defined")
}

// Equality Operators

if (height == '23') {
  console.log("The == operator does type coercion!!")
}
 */
/*********
 * 
 * // CODING challenge 2

var johnTeam = (89 + 120 + 130) / 3;
var markTeam = (116 + 94 + 123) / 3;
var maryTeam = (97 + 134 + 105) / 3;

if (johnTeam > markTeam) {
  console.log(`John's team is winner, and the average score is ${johnTeam}.`)
} else if (johnTeam < markTeam) {
  console.log(`Mark's team is winner, and the average score is ${markTeam}.`)
} else {
  console.log("They are draw.")
}

/****************************************************************************************

if (johnTeam > markTeam && johnTeam > maryTeam) {
  console.log(`John's team is winner, and the average score is ${johnTeam}.`)

} else if (maryTeam > johnTeam && maryTeam > markTeam) {
  console.log(`Mary's team is winner, and the average score is ${maryTeam}.`)

} else if (markTeam > johnTeam && markTeam > maryTeam) {
  console.log(`Mark's team is winner, and the average score is ${markTeam}.`)
} else {
  console.log("There is a draw.")
}

*/

/************
 *  Functions
function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1991);
var ageMark = calculateAge(1977);
var ageJames = calculateAge(1981);
console.log(ageJohn, ageMark, ageJames);

// console.log(calculateAge(1954))

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`)
  } else {
    console.log(firstName + ' is already retired.')
  }

}

yearsUntilRetirement(1990, 'Kelly');
yearsUntilRetirement(1988, 'Will');
yearsUntilRetirement(1933, 'Bill');


function saving(income, outcome) {

  var total = income - outcome;

  if (total > 0) {
    console.log("You are still fine.")
  } else {
    console.log("You need to save your money more!")
  }
}

console.log(saving(500, 1000));
 */

/*****************************************
 * Function Statement and Expression
 */

// Function Declaration
// function whatDoYouDo(job, firstName){}

// Function expression 
/****
 var whatDoYouDo = function (job, name) {
  switch (job) {
    case 'teacher':
      return `${name} is teaching math.`;
    case 'dev':
      return `${name} is coding every day.`;
    case 'driver':
      return `${name} is Uber driver.`;
    default:
      return `${name} is retired already.`;
  }
}

console.log(whatDoYouDo('teacher', 'Matthew'))
console.log(whatDoYouDo('dev', 'Jully'))
console.log(whatDoYouDo('driver', 'Kelly'))
console.log(whatDoYouDo('cook', 'Chloe'))

var soccerPlayers = function (name, team) {
  switch (name) {
    case 'Pogba':
      return `${name} is in ${team}`;
    case 'Jisung':
      return `${name} is in ${team}`;
    case 'Messi':
      return `${name} is in ${team}`;
    case 'huengmin':
      return `${name} is in ${team}`;
    default:
      return `${name} is retired already.`;
  }
}

console.log(soccerPlayers('Pogba', 'Paris'));
console.log(soccerPlayers('Jisung', 'ManU'));
console.log(soccerPlayers('Messi', 'FC-Barcelona'));
console.log(soccerPlayers('huengmin', 'Tottonhump'));
console.log(soccerPlayers('Ronaldo', 'Juventus'));
 */

/*********
 * Array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1949);

console.log(names.length)

names[0] = "Ben";
console.log(names)

names[5] = "Marry";
console.log(names)

var john = ['John', 'Smith', 1990, 'teacher', true];

john.push('blue');

// The unshift() method adds new items to the beginning of an array, and returns the new length.
//   Note: This method changes the length of an array.
//     Tip: To add new items at the end of an array, use the push() method.

john.unshift('Mr');
john.unshift('Brisbane');
console.log(john)

john.shift();
console.log(john)

var dev = john.indexOf('Dev') == 2 ? "Not Dev" : " Dev ";
console.log(dev)

// console.log(`His name is ${john[0]}.`)
// console.log(`His last name is ${john[1]}.`)
// console.log(`He was born in ${john[2]}.`)
// console.log(`His is a ${john[3]}.`)

if (john[4] == false) {
  console.log("He is looking for a special lady.")
} else {
  console.log("He is married.")
}

var cars = new Array('Toyota', 'Audi', 'Benz', 'BMW', 'Hyundai');

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i])
}
 */

/*******
 * Coding Challenge 3
 function tipCalculator(bill){
  var percentage;

  if(bill < 50){
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200){
    percentage = 0.15;
  } else {
    percentage = 0.1
  }

  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])]

var finalValues = [bills[0] + tips[0],
bills[1] + tips[1],
bills[2] + tips[2]]

console.log(tips, finalValues);
 */

/*********************
 * Objects and Properties
// Object Literal
var man = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
}

console.log(man)
console.log(man.firstName)
console.log(man['lastName'])

var x = 'family';
console.log(man[x])

man.job = 'designer';
man['isMarried'] = true;
console.log(man)

var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane["lastName"] = 'Smith';
console.log(jane)

// new object syntex
var car = new Object();
car.name = 'Roger';
car.year = 2019;
car.engine = 'battery';
car.maker = 'Tesla';
console.log(car)

car['maker'] = 'Toyota';
console.log(car)

var man = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function () {
    this.age = 2018 - this.birthYear;
  }
};

man.calcAge();
console.log(man)
*/

/***************************
 * CODING CHALLENGE 4
var man1 = {
  name: 'John Smith',
  weight: 78,
  height: 1.78,

  CalcBmi: function () {
    this.bmi = this.weight / this.height ^ 2;
    return this.bmi;
  }
}

var man2 = {
  name: 'Nathan Ng',
  weight: 50,
  height: 1.68,

  CalcBmi: function () {
    this.bmi = this.weight / this.height ^ 2;
    return this.bmi;
  }
}

man1.CalcBmi();
man2.CalcBmi();
console.log(man1, man2)

if (man1.CalcBmi() > man2.CalcBmi()) {
  console.log(man1.name + ' has higher BMI of ' + man1.bmi)
} else if (man1.bmi < man2.bmi) {
  console.log(man2.name + ' has higher BMI of ' + man2.bmi)
} else {
  console.log("They have the same BMI.")
}

*/

/****************************
 * Loops and iteration

for (var i = 0; i < 20; i += 2) {
  console.log(i)
}

var i = 0;
while (i < man3.length) {
  console.log(man3[i]);
  i++;
}

var man3 = ['John', 'Gandal', 1990, 'Developer', false, 'blue'];

for (var i = 0; i < man3.length; i++) {
  if (typeof man3[i] !== 'string') continue;
  console.log(man3[i]);
}
console.log("=========")

for (var i = 0; i < man3.length; i++) {
  if (typeof man3[i] !== 'string') break;
  console.log(man3[i]);
}

// Looping backwards
console.log("=============")

for (var i = man3.length - 1; i >= 0; i--) {
  console.log(man3[i])
}
 */

/*****************
 * CODING CHALLENGE 5
 * 
 * 
 */

// The first Part

var john = {
  fullName: 'John hardy',
  bills: [124, 48, 268, 180, 42],

  calcTips: function () {
    this.tips = [],
      this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {

      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
}

john.calcTips();
console.log(john)