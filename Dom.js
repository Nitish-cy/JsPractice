// BackgroundChanger
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  //console.log(button);
  button.addEventListener('click', function (e) {
    //console.log(e);
    // console.log(e.target);
    if (e.target.id) {
      body.style.backgroundColor = e.target.id;
    }
  });
});
//BMI calculator

const form = document.querySelector('form');

//console.log(form);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const h = parseInt(document.querySelector('#height').value);
  // console.log(h);
  const w = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (h === '' || isNaN(h) || h < 0) {
    results.innerHTML = 'please Enter a valid number';
  } else if (w === '' || isNaN(w) || w < 0) {
    results.innerHTML = 'please Enter a valid number';
  } else {
    const BMI = (w / ((h * h) / 10000)).toFixed(2);
    results.innerHTML = BMI;
  }
});

