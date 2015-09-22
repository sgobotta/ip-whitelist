Tinytest.add('Does Firewall.allow() return true if there are no whitelisted IPs?', function (test) {

    var firewall = new Firewall(),
        actual = firewall.allow('1.1.1.1', []),
        expected = true;

    test.equal(actual, expected);
});

