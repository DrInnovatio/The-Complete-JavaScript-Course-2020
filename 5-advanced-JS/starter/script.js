/*
// Function constructor

var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  // this.calculateAge = function () {
  //   console.log(2016 - this.yearOfBirth);
  // }
}

Person.prototype.calculateAge = function () {
  console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1982, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

var car = {
  maker: 'Toyota',
  model: 'Camry',
  year: '2019',
  price: '21000',
}

var Vehicle = function (maker, model, year, price) {

  this.maker = maker;
  this.model = model;
  this.year = year;
  this.price = price;

  this.discount = function () {
    console.log(this.price - (this.price * 0.15))
  }
}

Vehicle.prototype.tyre = 'new';

var car1 = new Vehicle('Honda', 'RX-D', 2001, 10000);
var car = new Vehicle('Nisan', 'OKP-28', 2011, 13000);

console.log(car1.discount())
console.log(car)
console.log(car.tyre)
*/

//=================================================================
//=================================================================

// Object.create
/*
var personProto = {
  calculateAge: function () {
    console.log(2016 - this.yearOfBirth)
  }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOgBirth = 1988;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOgBirth: { value: 1969 },
  job: { value: 'designer' }
});

*/

// Primitives vs objects
/*
var obj1 = {
  name: 'Luke',
  age: 26
}

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age)
console.log(obj2.age)

var age = 27;
var obj3 = {
  name: 'Brandon',
  city: 'Seoul'
};

function change(a, b) {
  a = 30;
  b.city = 'New York';
}

change(age, obj3);

console.log(age);
change(age, obj3);
console.log(obj3.city);
*/

// Passing functions as argument

/*
var years = [1990, 1965, 1937, 1900, 2005];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);


console.log(ages);
console.log(rates);
*/

// Functions returning functions
/*
function interviewQuestion(job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + ', can you please explain what UX designer is?');
    }
  } else if (job !== 'teacher') {
    return function (name) {
      console.log(name + ' , what subject do you teach?')
    }
  } else {
    return function (name) {
      console.log(name + ' , what do you do??')
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');

designerQuestion('Amy');
designerQuestion('Brenda');
designerQuestion('Carl');
*/

/*
// Immediately Invoked Function Expressions (IIFE)

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}

game();

(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(2);

(function (product, price) {
  var result = `${product} is $${price}!!`;
  console.log(result)
})('Play station', 399);

(function lottary() {
  var randomNumbers = [];
  var firstNum = [];
  var added = true;

  for (i = 0; i <= 6; i++) {

    var num = parseInt(Math.random() * 45) + 1
    firstNum.push(num);

    if (num !== firstNum[i]) {
      randomNumbers.push();
    } else {
      added = false;
    }
    randomNumbers.sort((a, b) => a - b);
  }
  console.log(`Your lucky numbers are ${randomNumbers}`)
})();

(function (name) {
  console.log(`My name is ${name}`)
})('Mike');

(function (name, age, job, home) {
  console.log(`My name is ${name} and is ${age} years ole. I am a ${job} and live in ${home}.`)
})('Harry', '33', 'Developer', 'West end');

*/
//=================================================================
//=================================================================

// Closures Closures Closures Closures Closures Closures Closures Closures Closures Closures Closures Closures Closures Closures   // Closures Closures Closures Closures Closures Closures Closures Closures Closures Closures Closures Closures Closures Closures   // Closures Closures Closures Closures Closures Closures Closures Closures Closures Closures Closures Closures Closures Closures

/*
function retirement(retirementAge) {
  var a = ' years left until retirement.'
  return function (yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
retirementUS(1990);
retirement(66)(1990);

var retirementGermany = retirement(65);
var retirementJapan = retirement(70);

retirementGermany(1978);
retirementJapan(1967);

function interviewQuestion(job) {
  return function (name) {

    if (job === 'designer') {
      console.log(name + ', can you please explain what UX designer is?');
    } else if (job === 'teacher') {
      console.log(name + ' , what subject do you teach?')
    } else {
      console.log(name + ' , what do you do??')
    }
  }
}

interviewQuestion('teacher')('Karl');
interviewQuestion('designer')('Jimmy');

function finalPrice(price) {
  return function (product, country) {
    var a = price - (price * 0.25);
    console.log(`The final price of ${product} is $${a} and made in ${country}`)
  }
}

var boxingDay = finalPrice(3200)
boxingDay('Laptop')

var playStation = finalPrice(780)
playStation('Play Station');

finalPrice(4500)('iPad', 'America');

*/

/* Bind, Call and Apply

var harry = {
  name: 'Harry',
  age: 28,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good' + timeOfDay + ' , ladies and gentlemen! I\'m ' + this.name + ' , I\'m a ' + this.job + ' and I\'m ' +
        this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log("Hey! What's up?" + timeOfDay + ' , ladies and gentlemen! I\'m ' + this.name + ' , I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' +
        this.age + ' years old.')
    }
  }
}

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
}

harry.presentation('formal', 'morning');
harry.presentation.call(emily, 'friendly', 'afternoon');
// harry.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = harry.presentation.bind(harry, 'friendly');
johnFriendly('morning');
johnFriendly('night');

*/
/*
// Coding Question

(function () {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion =
    function () {
      console.log(this.question);

      for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ' : ' + this.answers[i]);
      }
    }

  Question.prototype.checkAnswer =
    function (ans) {
      if (ans === this.correct) {
        console.log('Correct answer!!');
      } else {
        console.log('Wrong Answer!! Try again !!')
      }
    }

  var q1 = new Question('Is JavaScript the coolest programming language in the world??', ['Yes', 'No'], 0);
  var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Mike', 'Jonas'], 2);
  var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

  var questions = [q1, q2, q3];

  var n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();

  var answer = parseInt(prompt('Please select the correct answer.'));

  questions[n].checkAnswer(answer);
})();
*/
(function () {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion =
    function () {
      console.log(this.question);

      for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ' : ' + this.answers[i]);
      }
    }

  Question.prototype.checkAnswer =
    function (ans, callback) {
      var sc;
      if (ans === this.correct) {
        console.log('Correct answer!!');
        sc = callback(true);
      } else {
        console.log('Wrong Answer!! Try again !!')
        sc = callback(false)
      }
      this.displayScore(sc);
    }

  Question.prototype.displayScore = function (score) {
    console.log('Your current score is : ' + score);
    console.log("=============================================")
  }

  var q1 = new Question('Is JavaScript the coolest programming language in the world??', ['Yes', 'No'], 0);
  var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Mike', 'Jonas'], 2);
  var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function (correct) {
      if (correct) {
        sc++;
      }
      return sc;
    }
  }

  var keepScore = score();

  function nextQuestion() {

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = prompt('Please select the correct answer.');

    if (answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }
  nextQuestion();
})();