function reverseString(inputString) {
    let splitString = inputString.split("");
    let reverseSplit = splitString.reverse();
    let newString = reverseSplit.join("");
    return newString;
}

module.exports = reverseString;