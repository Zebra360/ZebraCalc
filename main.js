let str = '';

let buttons = document.querySelectorAll('.btn');
let inputVal = document.getElementById('calc-display');
let calcHistoryIcon = document.getElementById('history-icon');
let calcHistory = document.querySelector('.calc-history');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      str = eval(str);
      inputVal.value = str;

      let aNewHis = document.createElement('p');
      aNewHis.innerHTML = `&nbsp;${str}&nbsp;||&nbsp;`;
      calcHistory.append(aNewHis);
    } else if (e.target.innerHTML == "AC") {
      str = '';
      inputVal.value = str;
    } else if (e.target.innerHTML == "X") {
      str = str.slice(0, -1);
      inputVal.value = str;
    } else if (e.target.innerHTML == '+/-') {
      str = `(-${str})`
      inputVal.value = str;
    } else {
      str += e.target.innerHTML;
      inputVal.value = str;
    }
  });
});

calcHistoryIcon.addEventListener('click', () => {
  if (calcHistory.style.bottom === '-100vh') {
    calcHistory.style.bottom = '0';
  } else {
    calcHistory.style.bottom = '-100vh';
  }
});