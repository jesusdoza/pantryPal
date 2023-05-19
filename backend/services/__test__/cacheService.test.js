const cache = require("../cacheService");

[{ testrecipe: "text" }];
describe("test cache", () => {
    it("should not save if value is empty arr", () => {
        const result = cache.set("bob", []);
        expect(result).toBe(false);
    });
    it("should not save if value is empty", () => {
        const result = cache.set("bob");
        expect(result).toBe(false);
    });
    it("should save a key", () => {
        const result = cache.set("bob", ["cool"]);
        expect(result).toBe(true);
    });

    it("should retrieve a value", () => {
        cache.set("bob", ["cool"]);
        const result = cache.get("bob");
        expect(result).toEqual(["cool"]);
    });
});
