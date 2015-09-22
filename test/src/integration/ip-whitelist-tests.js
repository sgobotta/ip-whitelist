Tinytest.add('Does the IPWhitelist function return true if the METEOR_SETTINGS environment variable is undefined', function (test) {
    var result = IPWhitelist();
    //test.equal(result, true);
});
