// B6+
// Написать чистую функцию для форматирования числа заданной по форматной строке, например:
// console.log( formatNumber(2.3,"# ### ###.##") );
// // выдаёт "2.30"
// console.log( formatNumber(12345.368,"# ### ###.##") );
// // выдаёт "12 345.37"
// В форматной строке символ "#":
// - после запятой кодирует обязательную цифру, т.е. после запятой в данном примере должно быть
// ровно два знака, в любом числе;
// - до запятой кодирует НЕобязательную цифру, т.е. до запятой в данном примере должно быть столь
// ко знаков, сколько требуется для отображения целой части числа.