Tinytest.add('Does Firewall.allow() return true if there are no whitelisted IPs?', function (test) {

    var firewall = new Firewall(),
        actual = firewall.allow(['1.1.1.1'], []),
        expected = true;

    test.equal(actual, expected);
});

Tinytest.add('Does Firewall.allow() return true if the client IP is whitelisted?', function (test) {

    var firewall = new Firewall(),
        whitelist = [
            '1.1.1.1',
            '2.2.2.2',
            '3.3.3.3',
        ],
        actual = firewall.allow(['1.1.1.1'], whitelist),
        expected = true;

    test.equal(actual, expected);
});

Tinytest.add('Does Firewall.allow() return false if the client IP is not whitelisted?', function (test) {

    var firewall = new Firewall(),
        whitelist = [
            '1.1.1.1',
            '2.2.2.2',
            '3.3.3.3',
        ],
        actual = firewall.allow(['4.4.4.4'], whitelist),
        expected = false;

    test.equal(actual, expected);
});

