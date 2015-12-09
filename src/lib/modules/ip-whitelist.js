IPWhitelist = function() {

    var environment = new Environment(),
        firewall = new Firewall(),
        log = new Logger('IPWhitelist'),
        whitelist = environment.getWhitelist(),
        clientIPs;

    WebApp.connectHandlers.use(function(request, response, next) {
        clientIPs = request.headers['x-forwarded-for'].split(', ');
        if (!firewall.allow(clientIPs, whitelist)) {
            log.info('Blocking request from non-whitelistd IP');
            response.writeHead(404);
            response.end();
        } else {
            next();
        }
    });
};

