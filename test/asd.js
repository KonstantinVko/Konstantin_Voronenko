class Anagram {
    constructor(word) {
        this.word = word;
    }

    get uniqChars() {
        var chars = this.word.split('').filter((letter, index) => this.word.indexOf(letter,index+1) === -1);
        chars.sort();
        return chars;
    }

    get countByChars() {
        return this.uniqChars.map((letter) => {
            return this.word.replace(new RegExp(`[^${letter}]`, 'g'), '').length;
        });
    }

    static factorial(n) {
        if(n <= 1) {
            return 1;
        }
        return n * Anagram.factorial(n - 1);
    }

    get nbDiffWords() {
        var numberOfWords = Anagram.factorial(this.word.length);
        var dividers = this.countByChars.map((count) => Anagram.factorial(count));
        dividers.forEach((divider) => { numberOfWords /= divider});
        return numberOfWords;
    }

    getSliceIndexes(letter) {
        var fromIndex = 0;
        var letterIndex = this.uniqChars.indexOf(letter);
        for(var currentLetterIndex = 0; currentLetterIndex < letterIndex; currentLetterIndex++) {
            var currentLetter = this.uniqChars[currentLetterIndex];
            fromIndex += this.getSliceSize(currentLetter);
        }
        var toIndex = fromIndex + this.getSliceSize(letter) - 1;
        return {from: fromIndex, to: toIndex};
    }

    getSliceSize(letter) {
        return (new Anagram(this.word.replace(letter, ''))).nbDiffWords;
    }

    get listPosition() {
        var curWord = this.word;
        var slice = this.getSliceIndexes(this.word[0]);
        while(slice.from !== slice.to) {
            curWord = curWord.replace(curWord[0], '');
            var curWordAnagram = new Anagram(curWord);
            var newWordSlice = curWordAnagram.getSliceIndexes(curWord[0]);
            slice.from += newWordSlice.from;
            slice.to = slice.from + newWordSlice.to;
        }
        return slice.from + 1;
    }
}

var listPosition = (word) => (new Anagram(word)).listPosition;