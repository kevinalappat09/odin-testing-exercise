const reverseString = require("./reverse");

test('one letter', () => {
    expect(reverseString("a")).toBe("a");
});

test('one word', () => {
    expect(reverseString("hello")).toBe("olleh");
});

test('one sentence', () => {
    expect(reverseString("Hello my name is Kevin")).toBe("niveK si eman ym olleH");
});

test('numbers', () => {
    expect(reverseString("123")).toBe("321");
});

