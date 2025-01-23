function calculator() {
  let calcHistory = document.querySelector('.calc-history');


  document.addEventListener('click', (e) => {
    let input = document.getElementById('calc-display');

    if (!e.target.classList.contains('btn')) return;
    else if (e.target.innerHTML === '=') {
      input.value = eval(input.value);
      let newHistory = document.createElement('p');
      newHistory.innerHTML = `&nbsp;${input.value}&nbsp;||&nbsp;`;
      calcHistory.append(newHistory);
    } else if (e.target.innerHTML === 'C') {
      input.value = input.value.slice(0, -1);
    } else if (e.target.innerHTML === '+/-') {
      input.value = `(-${input.value})`
    } else if (e.target.innerHTML === 'AC') {
      input.value = '';
    } else {
      input.value += e.target.innerHTML;
    };
  });



  function history() {
    let calcHistoryIcon = document.getElementById('history-icon');

    calcHistory.style.bottom = calcHistory.style.bottom || '-100vh';

    calcHistoryIcon.addEventListener('click', () => {
      if (calcHistory.style.bottom === '-100vh') {
        calcHistory.style.bottom = '0';
      } else {
        calcHistory.style.bottom = '-100vh';
      }
    });
  };
  history();
};


calculator();
