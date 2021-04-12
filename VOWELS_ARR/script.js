const countVowels = str => Array.from(str)
    .filter(letter => 'ауоыиэяюёе'.includes(letter)).length;


console.log(countVowels('хеллоу'));