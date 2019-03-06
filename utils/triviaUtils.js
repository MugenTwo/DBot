module.exports.decodeHtml = (str) => {
    var map =
    {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'",
        '&ldquo;': '"'
    };
    return str.replace(/&amp;|&lt;|&gt;|&quot;|&#039;|&ldquo;/g, function (m) { return map[m]; });
}

module.exports.decodeAnswer = (answer) => {
    var map =
    {
        'A': '0',
        'B': '1',
        'C': '2',
        'D': '3'
    };
    return map[answer];
}

module.exports.shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}