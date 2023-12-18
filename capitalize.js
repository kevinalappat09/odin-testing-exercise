function capitalize(inputString) {
    let newString = inputString[0].toUpperCase() + inputString.substring(1);
    return newString;
}

module.exports = capitalize;