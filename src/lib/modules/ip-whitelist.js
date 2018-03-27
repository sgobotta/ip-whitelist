IPWhitelist = function() {

    var environment = new Environment(),
        firewall = new Firewall(),
        whitelist = environment.getWhitelist(),
        clientIPs,
        ipAddress;

    WebApp.connectHandlers.use(function(request, response, next) {
      console.log(request)
      var ipAddress = request.headers['x-forwarded-for'];

      if (!ipAddress) {
        ipAddress = request.connection.remoteAddress;
      }

      if (ipAddress) {
        clientIPs = ipAddress.replace(" ", "").split(",");
      } else {
        if (!firewall.allow(clientIPs, whitelist)) {
          response.writeHead(404);
          response.end();
        } else {
          next();
        }
      }
    });

};

