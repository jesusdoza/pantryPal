const cache = require("../cacheService");

const daysToInvalid = 5;
let oldDate = new Date();
let goodDate = new Date();
oldDate.setDate(oldDate.getDate() - (daysToInvalid + 2));

let cacheInstance;
let testData;

const mockModel = {
    create: jest.fn((obj) => obj),
    deleteOne: jest.fn((obj) => {
        testData[obj.key] = null;
        return { ok: 1, deletedCount: 1, n: 1 };
    }),
    findOne: jest.fn((obj) => {
        if (obj.key == "getFail") {
            return testData.getFail;
        } else if (obj.key == "oldData") {
            return testData.oldData;
        } else {
            return testData.goodData;
        }
    }),
};

beforeEach(() => {
    cacheInstance = new cache(mockModel, daysToInvalid);
    testData = {
        getFail: null,
        oldData: {
            key: "oldData",
            data: [{ recipe: "oldData" }, { recipe: "oldData" }],
            createdAt: oldDate,
        },
        goodData: {
            key: "goodData",
            data: [{ recipe: "data" }, { recipe: "data" }],
            createdAt: goodDate,
        },
    };
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
        expect(Array.isArray(result.data)).toBe(true);
    });

    it("should CheckDataValid from cache database", () => {
        let result = null;
        result = cacheInstance.checkDataValid(testData.oldData, goodDate);
        expect(result).toBe(false);
        result = cacheInstance.checkDataValid(testData.goodData, goodDate);
        expect(result).toBe(true);
    });
    it("should not return old cache on second call", async () => {
        // console.log("oldDate", oldDate);
        let result = await cacheInstance.get("oldData");
        console.log("result", result);
        expect(result).toBeTruthy();

        result = await cacheInstance.get("oldData");
        console.log("result after second", result);
        expect(result).toBe(false);
    });
    it("should not delete valid data ", async () => {
        // console.log("oldDate", oldDate);
        let result = await cacheInstance.get("goodData");
        console.log("result", result);
        expect(result).toBeTruthy();

        result = await cacheInstance.get("goodData");
        console.log("result after second", result);
        expect(result).toBeTruthy();
    });
});
