/*
function interviewQuestion(job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + ', can you please explain what UX designer is?');
    }
  } else if (job === 'teacher') {
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
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('Amy');
designerQuestion('Brenda');
designerQuestion('Carl');

function shape(stuff) {
  if (stuff === 'red') {
    return function (area) {
      console.log(`The area is ${area * area}`)
    }
  } else if (stuff === 'blue') {
    return function (area) {
      console.log(`The area is ${area * area / 2}`)
    }
  } else if (stuff === 'yellow') {
    return function (area) {
      console.log(`The area is ${area * 2 * 3.14}`)
    }
  }
}

var square = shape('red');
var triangle = shape('blue');
var circle = shape('yellow')
square(10)
triangle(9)
circle(2)
*/

// powerBall numbers

/*
function powerBall() {

  var lottoNumber = [];

  function createNumber() {

    if (lottoNumber.length < 7) {
      let randomNumbers = Math.floor(Math.random() * 35) + 1;

      if (notSame(randomNumbers)) {
        lottoNumber.push(randomNumbers);
      }
      createNumber();
    }

    function notSame(randomNumbers) {
      return lottoNumber.every((e) => randomNumbers !== e);
    }
  }
  createNumber();
  return lottoNumber.sort((a, b) => a - b);
}

function pbNumber() {
  let pb = Math.floor(Math.random() * 20) + 1;
  return pb;
}

let winningNumbers = powerBall();
var powerBallNumber = pbNumber();

console.log(`Your seven winning numbers are ${winningNumbers} , and power ball number is ${powerBallNumber}`)
*/

var foo = [];

function randomNumbers() {
  for (i = 0; i < 6; i++) {
    var newNumbers = parseInt(Math.random() * 50) + 1;
    foo.push(newNumbers);
  }
  console.log(foo)
}

randomNumbers();

function notSame(randomNumbers) {
  return lottoNumber.every((e) => randomNumbers !== e);
}