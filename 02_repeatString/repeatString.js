const repeatString = function(string, numTimes) {
    if (numTimes<0) {return 'ERROR'}
    let stringTimes = []
    while (numTimes > 0) {
        stringTimes.push(string)
        numTimes--
    }
    return stringTimes.join('')
};
// Do not edit below this line
module.exports = repeatString;
