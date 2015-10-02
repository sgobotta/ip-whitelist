Tinytest.add('Is the request allowed if METEOR_SETTINGS is empty?', function(test){
    
    var response;

    process.env.METEOR_SETTINGS = '{}';

    IPWhitelist();
    response = HTTP.get(Meteor.absoluteUrl());

    test.equal(response.statusCode, 200);

});

Tinytest.add('Is the request allowed if the whitelist is empty?', function(test){
    
    var settings = {
            ipWhitelist: []
        },
        response;

    process.env.METEOR_SETTINGS = JSON.stringify(settings);

    IPWhitelist();
    response = HTTP.get(Meteor.absoluteUrl());

    test.equal(response.statusCode, 200);

});

Tinytest.add('Is the request allowed if my IP is whitelisted?', function(test){
    
    var settings = {
            ipWhitelist: [
                '1.2.3.4',
                '127.0.0.1',
                '5.6.7.8'
            ]
        },
        response;

    process.env.METEOR_SETTINGS = JSON.stringify(settings);

    IPWhitelist();
    response = HTTP.get(Meteor.absoluteUrl());

    test.equal(response.statusCode, 200);

});

Tinytest.add('Is the request blocked if my IP is not whitelisted?', function(test){
    
    var settings = {
            ipWhitelist: [
                '1.2.3.4',
                '127.0.0.12',
                '5.6.7.8'
            ]
        },
        response;

    process.env.METEOR_SETTINGS = JSON.stringify(settings);

    IPWhitelist();

    try {
        response = HTTP.get(Meteor.absoluteUrl());
        test.exception('Response did not match. Expected 404. Actual ' + response.statusCode);
    } catch (e) {
        test.isTrue(e.message.indexOf('404') !== -1, 'Response did not match expected 404: ' + e);
    }

});

