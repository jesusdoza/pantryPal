const cache = require("../cacheService");

const mockModel = {
    create: jest.fn((obj) => obj),
    findOne: jest.fn((obj) => {
        if (obj.key == "getFail") {
            return null;
        } else {
            return { data: [{ recipe: "data" }, { recipe: "data" }] };
        }
    }),
};

let cacheInstance;

beforeEach(() => {
    cacheInstance = new cache(mockModel);
});

describe("test cacheService", () => {
    it("should not save if value is empty arr", async () => {
        const result = await cacheInstance.set("bob", []);
        expect(result).toBe(false);
    });
    it("should not save if value is empty", async () => {
        const result = await cacheInstance.set("bob");
        expect(result).toBe(false);
    });
    it("should save a key", async () => {
        const result = await cacheInstance.set("bob", ["cool"]);
        expect(result).toBe(true);
    });

    it("should retrieve a value", async () => {
        await cacheInstance.set("bob", ["cool"]);
        const result = await cacheInstance.get("bob");
        expect(result).toEqual(["cool"]);
    });

    it("should return false when no results found", async () => {
        const result = await cacheInstance.get("getFail");
        expect(result).toEqual(false);
    });
    it("should return array of recipes when in database", async () => {
        const result = await cacheInstance.get("getPass");
        expect(Array.isArray(result)).toBe(true);
    });
});
