const analyzeArray = require("./analyzeArray");

test("One element array",() => {
    expect(analyzeArray([1])).toMatchObject(
        {
            average : 1,
            min : 1,
            max : 1,
            length : 1
        }
    )
});

test("Two element array", () => {
    expect(analyzeArray([1,5])).toMatchObject(
        {
            average : 3,
            min : 1,
            max : 5,
            length : 2
        }
    )
})