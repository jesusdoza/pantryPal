const cache = require("../cacheService");

[{ testrecipe: "text" }];
describe("test cache", () => {
    it.todo("should not save if value is empty arr", () => {});
    it("should save a key", () => {
        const result = cache.set("bob", "cool");
        expect(result).toBe(true);
    });

    it.todo("should retrieve a value", () => {});
});
