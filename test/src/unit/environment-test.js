Tinytest.add('Does Environment.getWhitelist() return an empty array if METEOR_SETTINGS does not exist', function (test) {

    var env = new Environment(),
        actual = env.getWhitelist(),
        expected = [];

    test.equal(actual, expected);
});

