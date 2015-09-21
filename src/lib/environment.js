Environment = function Environment() {

    this.meteorSettings = this.getMeteorSettings();

}

Environment.prototype = {

    getMeteorSettings: function getMeteorSettings() {
        if (typeof process.env.METEOR_SETTINGS === 'undefined') {
            return [];
        } else {
            return JSON.parse(process.env.METEOR_SETTINGS);
        }
    },

    getWhitelist: function getWhitelist() {
        return this.meteorSettings;
    }
};

