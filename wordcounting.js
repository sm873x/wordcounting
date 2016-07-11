
(function() {
    'use strict';

function wordCount (text) {
    var noPunctuation = text.replace(/\'s|'\.|\'|\:|\,|\*|\!|\@|\%|\^|\(|\)|\+|\=|\~|\`|\?|\>|\/|\_/g, '');

    var separatedText = noPunctuation.toLowerCase().split(' ');

    var onlyWords = separatedText.filter(function(fullWords) {
        return fullWords.length >= 2;
    });

    var wordCount = {};

    onlyWords.forEach(function(word) {
        wordCount[word] = wordCount[word] ? wordCount[word]+1 : 1;
    });

    return wordCount;
}

var wordLog = wordCount(text);
console.log(wordLog);

})();
