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

    //get data from memory cache or database cache
    async get(key) {
        //check in memory cache
        let cachedData = this.cache.get(key);

        //get day
        const cacheExpires = new Date();
        cacheExpires.setDate(cacheExpires.getDate() - this.daysToInvalid);

        //found in local cache
        if (cachedData) {
            return cachedData;
        }

        // check database for cache
        cachedData = await this.getFromDataBase(key);

        //todo check date on cache
        //todo do I want to return old stale data and clear out old data?

        if (!cachedData) {
            //no cache found in database
            return false;
        }

        const isValid = this.checkDataValid(cachedData, cacheExpires);

        //data is stale and should be deleted but return stale data
        if (!isValid) {
            this.deleteEntry(cachedData.key);
            return cachedData;
        }

        //set memory cache and return old data
        this.set(key, cachedData);
        return cachedData;
    }

    //TODO check data valid
    checkDataValid(data, cacheExpires) {
        if (data.createdAt < cacheExpires) {
            return false;
            // this.model.deleteOne({ test: "test" });
            // this.cache.del(data.key)
        }
        return true;
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
            // console.log("cache saveToDataBase error", error);
            return false;
        }
    }
    async getFromDataBase(key) {
        try {
            const foundItem = await this.model.findOne({ key });

            if (foundItem !== null) {
                // this.set(key, foundItem);
                // return foundItem.data;
                return foundItem;
            }

            return false;
        } catch (error) {
            console.log("cache getFromDataBase error", error);
            return false;
        }
    }

    async deleteEntry(key) {
        await this.model.deleteOne({ key: key });
    }
}

module.exports = CacheService;
