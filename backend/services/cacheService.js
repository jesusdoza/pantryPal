const NodeCache = require("node-cache");

class CacheService {
    constructor(model) {
        this.cache = new NodeCache({ stdTTL: 300, checkperiod: 150 });
        this.model = model;
    }

    async set(key, data) {
        //no data
        if (!data) return false;

        //empty data
        if (data instanceof Array && !data.length) return false;

        await this.saveToDataBase(key, data);

        return this.cache.set(key, data);
    }
    async get(key) {
        //check in memory cache
        let result = this.cache.get(key);

        //found in local cache
        if (result) {
            return result;
        }

        // check database for cache
        result = await this.getFromDataBase(key);
        if (!result) {
            //no cache found in database
            return false;
        }

        //database returned key set in memory cache aswell
        this.set(key, result);
        return result;
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
                return foundItem.data;
            }

            return false;
        } catch (error) {
            console.log("cache getFromDataBase error", error);
            return false;
        }
    }
}

module.exports = CacheService;
