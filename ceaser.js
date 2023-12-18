function letterShift(inputLetter,shift) {
    let letterASCII = inputLetter.charCodeAt();
    letterASCII+=shift;
    if(letterASCII>122) {
        let difference = letterASCII - 123;
        letterASCII = 97 + difference;
    }
    return String.fromCharCode(letterASCII);
}

function ceaserCipher(inputString,shift) {
    let newStringArr = [];
    for(let i=0; i<inputString.length; i++) {
        newStringArr.push(letterShift(inputString[i],shift));
    }
    let newString = newStringArr.join("");
    return newString;
}

module.exports = ceaserCipher;