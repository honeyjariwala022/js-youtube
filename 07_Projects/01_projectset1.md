# Project related To DOM

## Project Link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution code

## Project 1

```javascript
console.log("Honey")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

##project 2 solution
```javascript
  const form = document.querySelector('form');
// This Usecase will give you empty value
// const higth=parseInt(document.querySelector('#hight').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give A valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give A valid Weight ${weight}`;
  } else {
    const bmi = weight / ((height * height) / 1000).toFixed(2);
    // show the result//
    results.innerHTML = `<span>${bmi}</span>`;
  }
  let bmi = 22; // tamaru BMI value ahi muko

if (bmi < 18.6) {
    console.log("Under Weight");
} 
else if (bmi >= 18.6 && bmi <= 24.9) {
    console.log("Normal Range");
} 
else {
    console.log("Overweight");
}

  // results.innerHTML = `Please Give A valid Height ${height}`;//
});

```

##project 3 solution
```javascript
  ##project 2 solution
    const clock=document.getElementById('clock')
// const clock=document.querySelector('clock')

setInterval(function(){
let date = new Date()
// console.log(date.toLocaleTimeString());
clock.innerHTML =date.toLocaleString();
},1000)
```

#project 4 solution
```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultparas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter A Valid Number');
  } else if (guess < 1) {
    alert('Please Enter A Number More Than 1');
  } else if (guess > 100) {
    alert('Please Enter A Number Less Than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number Was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed It Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number Is TOOO Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number Is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guesslot.innerHTML += `${guess},    `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guesslot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
```