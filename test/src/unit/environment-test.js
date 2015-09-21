Tinytest.add('Does Environment.getWhitelist() return an empty array if METEOR_SETTINGS does not exist', function (test) {
    var result = Environment.getWhitelist();
    test.equal(result, []);
});

