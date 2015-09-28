IPWhitelist = function() {

    var environment = new Environment(),
        firewall = new Firewall(),
        whitelist = environment.getWhitelist(),
        clientIP;

    Meteor.onConnection(function(connection) {
        clientIP = connection.clientAddress;
        if (!firewall.allow(clientIP, whitelist)) {
            connection.close();
        }
    });
        
};

