const capitalize = require("./capitalize");

test('One char', () => {
    expect(capitalize("a")).toBe("A");
})

test("One word", () => {
    expect(capitalize("hello")).toBe("Hello");
})

test("Sentence", () => {
    expect(capitalize("hello my name is Kevin")).toBe("Hello my name is Kevin");
})

test("Would not convert anything other than first word", () => {
    expect(capitalize("Hello my name is kevin")).toBe("Hello my name is kevin");
})

test("Numbers",() => {
    expect(capitalize("123")).toBe("123");
})