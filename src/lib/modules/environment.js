Environment = (function () {
    
    // private properties
    var meteorSettings,

    // private methods
    getMeteorSettings = function() {
        if (typeof process.env.METEOR_SETTINGS === 'undefined') {
            return [];
        } else {
            return JSON.parse(process.env.METEOR_SETTINGS);
        }
    },

    getWhitelist = function() {
        var meteorSettings = getMeteorSettings();
        if (meteorSettings.length === 0) {
            return [];
        }
    };

    // public API
    return {
        getWhitelist: getWhitelist
    };

});

