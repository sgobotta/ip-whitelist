IPWhitelist = function() {

    var meteorSettings = process.env.METEOR_SETTINGS,
        whitelist;
    
    if (typeof meteorSettings === "undefined") {
        return true;
    }
}

