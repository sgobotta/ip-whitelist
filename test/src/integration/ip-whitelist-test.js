Tinytest.add('Is the request allowed if no whitelist is defined?', function(test){
    
    process.env.METEOR_SETTINGS = '{}';
    var response = HTTP.get('http://localhost:3000');
    IPWhitelist();
    test.equal(response.statusCode, 200);

});

Tinytest.add('Is the request blocked if my IP is not whitelisted?', function(test){
    
    var settings = {
            ipWhitelist: [
                '1.1.1.1'
            ]
        },
        response;
    process.env.METEOR_SETTINGS = JSON.stringify(settings);
    IPWhitelist();
    response = HTTP.get(Meteor.absoluteUrl());
    test.equal(response.statusCode, 404);

});

