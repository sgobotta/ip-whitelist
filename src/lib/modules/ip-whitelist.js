IPWhitelist = function() {

    var environment = new Environment(),
        firewall = new Firewall(),
        whitelist = environment.getWhitelist(),
        clientIP;

    WebApp.connectHandlers.use(function(request, response, next) {
        clientIP = request.headers['x-forwarded-for'];
        if (!firewall.allow(clientIP, whitelist)) {
            response.writeHead(404);
            response.end('Page Not Found');
        } else {
            next();
        }
    });
};

