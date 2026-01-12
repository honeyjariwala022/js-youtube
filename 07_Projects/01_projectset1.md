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