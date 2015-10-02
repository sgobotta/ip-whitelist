/**
 * Module that handles reading Meteor environment variables.
 *
 * @module Environment
 */
Environment = (function () {
    
    /**
     * Fetches the METEOR_SETTINGS environment variable data.
     *
     * @method getMeteorSettings
     * @private
     *
     * @return  {Array} The full METEOR_SETTINGS data, if defined. Otherwise an empty array.
     */
    var getMeteorSettings = function() {
        if (typeof process.env.METEOR_SETTINGS === 'undefined') {
            return [];
        } else {
            try {
                return JSON.parse(process.env.METEOR_SETTINGS);
            } catch (e) {
                return [];
            }
        }
    },

    /**
     * Extracts the whitelist of IP addresses from the environment settings.
     *
     * @method getWhiteList
     * @private
     *
     * @return {Array} An array of IP addresses.
     */
    getWhitelist = function() {
        var meteorSettings = getMeteorSettings();
        if (meteorSettings.length === 0) {
            return [];
        }
        if (typeof meteorSettings.ipWhitelist === 'undefined') {
            return [];
        }
        if (meteorSettings.ipWhitelist.constructor.toString().indexOf("Array") === -1) {
            return [];
        }
        return meteorSettings.ipWhitelist;
        
    };

    // The public API
    return {
        getWhitelist: getWhitelist
    };

});

