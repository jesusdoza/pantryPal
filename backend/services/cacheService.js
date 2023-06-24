const NodeCache = require("node-cache");

class CacheService {
    constructor(model, daysToInvalid = 5) {
        this.cache = new NodeCache({ stdTTL: 300, checkperiod: 150 });
        this.model = model;
        this.daysToInvalid = daysToInvalid;
    }

    async set(key, data) {
        //no data
        if (!data) return false;

        //verify data is in an array and is valid before saving to cache
        if (data instanceof Array && !data.length) return false;
        await this.saveToDataBase(key, data);
        return this.cache.set(key, data);
    }
    async get(key) {
        //check in memory cache
        let cachedData = this.cache.get(key);

        //found in local cache
        if (cachedData) {
            return cachedData;
        }

        // check database for cache
        cachedData = await this.getFromDataBase(key);
        console.log("cached data", cachedData);
        //todo check date on cache
        //todo do I want to return old stale data and fetch new?
        if (!cachedData) {
            //no cache found in database
            return false;
        }

        //database returned key also set in memory cache aswell
        // this.set(key, result);//! move to getFromDataBase
        return cachedData;
    }

    async saveToDataBase(key, data) {
        let newItem;
        try {
            key = key.trim();
            newItem = await this.model.create({ key, data });
            return true;
        } catch (error) {
            if (error.code === 11000) {
                // duplicate key already in database error
                return true;
            }
            console.log("cache saveToDataBase error", error);
            return false;
        }
    }
    async getFromDataBase(key) {
        try {
            const foundItem = await this.model.findOne({ key });

            if (foundItem !== null) {
                this.set(key, foundItem);
                // return foundItem.data;
                return foundItem;
            }

            return false;
        } catch (error) {
            console.log("cache getFromDataBase error", error);
            return false;
        }
    }
}

module.exports = CacheService;
