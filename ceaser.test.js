const ceaserCipher = require("./ceaser");

test("One letter, one shift", () => {
    expect(ceaserCipher("a",1)).toBe("b");
})

test("One letter, two shift",() => {
    expect(ceaserCipher("a",2)).toBe("c");
})

test("Z Overflow",() => {
    expect(ceaserCipher("z",1)).toBe("a");
})

test("one word",() => {
    expect(ceaserCipher("hello",2)).toBe("jgnnq");
})