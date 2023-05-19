const NodeCache = require("node-cache");

class CacheService {
    constructor() {
        this.cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });
    }

    set(key, data) {
        if (!data) return false; //no data
        if (data instanceof Array && !data.length) return false; //empty data
        return this.cache.set(key, data);
    }
    get(key) {
        let result = this.cache.get(key);
        console.log("checking cache", result);
        return result;
    }
}

const cache = new CacheService();

module.exports = cache;
