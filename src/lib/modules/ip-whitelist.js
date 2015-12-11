IPWhitelist = function() {

    var environment = new Environment(),
        firewall = new Firewall(),
        whitelist = environment.getWhitelist(),
        clientIPs;

    WebApp.connectHandlers.use(function(request, response, next) {
        clientIPs = request.headers['x-forwarded-for']
            .replace(" ", "")
            .split(",");
        if (!firewall.allow(clientIPs, whitelist)) {
            response.writeHead(404);
            response.end();
        } else {
            next();
        }
    });

};

