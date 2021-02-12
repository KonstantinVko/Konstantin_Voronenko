let userInputYear = prompt('Введите год');

const checkCentury = year => Math.ceil(year/100);

alert('Это ' + checkCentury(userInputYear) + ' век!')


