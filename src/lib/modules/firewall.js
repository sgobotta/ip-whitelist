/**
 * Module the handles the allow/deny IP rule logic. 
 *
 * @module Firewall
 */
Firewall = (function () {

    /**
     * Decides whether or not to allow an IP address.
     *
     * @method allow
     * @public
     *
     * @param {String} The IP address being checked.
     * @param {Array}  The IP address whitelist.
     *
     * @return {Boolean} True if IP is allowed access, false if not.
     */
    var allow = function(ip, whitelist) {
        if (whitelist.length === 0) {
            return true;
        }
        return (whitelist.indexOf(ip) !== -1);
    };

    // The public API
    return {
        allow: allow
    };

});

