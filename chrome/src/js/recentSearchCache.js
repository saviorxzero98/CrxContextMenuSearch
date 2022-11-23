let RecentSearchCacheKeyPrefix = 'recent_search';

let RecentSearchCacheService = {
    get: (contextType, callback) => {
        let key = `${RecentSearchCacheKeyPrefix}_${contextType}`;
        if (contextType && callback) {
            chrome.storage.local.get([ key ], (items) => {
                let item = items[key];
                callback(item);
            });
        }
    },

    set: (contextType, value, callback = () => {}) => {
        if (contextType) {
            let key = `${RecentSearchCacheKeyPrefix}_${contextType}`;
            let entity = {};
            entity[key] = value;
            chrome.storage.local.set(entity, callback);
        }
    }
}