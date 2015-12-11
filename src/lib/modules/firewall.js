/**
 * Module the handles the allow/deny IP rule logic. 
 *
 * @module Firewall
 */
Firewall = (function () {

    var log = new Logger('IPWhitelist');

    /**
     * Decides whether or not to allow an IP address.
     *
     * @method allow
     * @public
     *
     * @param {Array} ips The IP addresses being checked.
     * @param {Array} whitelist The IP address whitelist.
     *
     * @return {Boolean} True if IP is allowed access, false if not.
     */
    var allow = function(ips, whitelist) {
        if (ips.length === 0 || whitelist.length === 0) {
            return true;
        }
        if (ips.constructor !== Array) {
            return true;
        }
        var allowed = false;
        ips.forEach(function (ip) {
            if (whitelist.indexOf(ip) !== -1) {
                allowed = true;
            }
        });
        if (!allowed) {
            log.info('Blocking request from non-whitelisted IP(s) ' + JSON.stringify(ips));
        }
        return allowed;
    };

    // The public API
    return {
        allow: allow
    };

});

