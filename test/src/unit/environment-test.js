Tinytest.add('Does Environment.getWhitelist() return an empty array if METEOR_SETTINGS does not exist?', function (test) {

    var env = new Environment(),
        actual = env.getWhitelist(),
        expected = [];

    test.equal(actual, expected);
});

Tinytest.add('Does Environment.getWhitelist() return an empty array if ipWhitelist is not defined in METEOR_SETTINGS?', function(test) {

    var settings = {},
        env = new Environment(),
        actual,
        expected = [];

    process.env.METEOR_SETTINGS = JSON.stringify(settings);

    actual = env.getWhitelist();

    test.equal(actual, expected);

});

Tinytest.add('Does Environment.getWhitelist() return the array of IP addresses in METEOR_SETTINGS?', function(test) {

    var settings = {
            ipWhitelist: [
                '1.1.1.1',
                '2.2.2.2',
                '3.3.3.3',
            ]
        },
        env = new Environment(),
        actual,
        expected = settings.ipWhitelist;

    process.env.METEOR_SETTINGS = JSON.stringify(settings);

    actual = env.getWhitelist();

    test.equal(actual, expected);

});

