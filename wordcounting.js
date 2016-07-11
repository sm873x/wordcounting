//WORD COUNTING - HOMEWORK 13
(function() {
var sonnets = 'THE SONNETS by William Shakespeare 1 From fairest creatures we desire increase, That thereby beauty\'s rose might never die, But as the riper should by time decease, His tender heir might bear his memory: But thou contracted to thine own bright eyes, Feed\'st thy light\'s flame with self-substantial fuel, Making a famine where abundance lies, Thy self thy foe, to thy sweet self too cruel: Thou that art now the world\'s fresh ornament, And only herald to the gaudy spring, Within thine own bud buriest thy content, And tender churl mak\'st waste in niggarding: Pity the world, or else this glutton be, To eat the world\'s due, by the grave and thee.'


function wordCount (text) {
    var separatedText = sonnets.split(' ');

    var onlyWords = separatedText.filter(function(fullWords) {
        return fullWords.length >= 2;
    });

    // onlyWords.forEach(function(word, i) {
    //     var eachWord = (onlyWord[i]) === (onlyWords[])
    // });


    // var wordList = onlyWords.map(function(word) {
    //     onlyWords.forEach(function(word) {
    //         var word = (onlyWords[i])
    //     })
    // });

    return onlyWords;
}

var wordCount = wordCount(sonnets);
console.log(wordCount);



})();
