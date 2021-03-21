function countVowels(str) {
    const vowels = str.match(/[ауоыиэяюёе]/gi);
    return vowels === null ? 0 : vowels.length;
}

console.log(countVowels('хеллоу'));