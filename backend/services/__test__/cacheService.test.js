const cache = require("../cacheService");

let oldDate = new Date();
let goodDate = new Date();
oldDate.setDate(5);

const mockModel = {
    create: jest.fn((obj) => obj),
    findOne: jest.fn((obj) => {
        if (obj.key == "getFail") {
            return null;
        } else if (obj.key == "oldData") {
            return {
                key: "oldData",
                data: [{ recipe: "oldData" }, { recipe: "oldData" }],
                createdAt: oldDate,
            };
        } else {
            return {
                key: "goodData",
                data: [{ recipe: "data" }, { recipe: "data" }],
                createdAt: goodDate,
            };
        }
    }),
};

let cacheInstance;

beforeEach(() => {
    cacheInstance = new cache(mockModel);
});

describe("test cacheService", () => {
    it("should not return old cache", async () => {
        const result = await cacheInstance.get("oldData");
        expect(result[0].recipe).not.toBe("oldData");
    });

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
