function myCalc(a) {
    return new Function('return ' + a)();
}

console.log(myCalc(4*2));