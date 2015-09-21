Tinytest.add('Does Environment.getMeteorSettings() return and empty array if METEOR_SETTINGS does not exist', function (test) {
    var result = Environment.getMeteorSettings();
    test.equal(result, []);
});

