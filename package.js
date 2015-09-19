Package.describe({
  name: 'rycrofts:ip-whitelist',
  version: '0.0.1',
  summary: 'Restrict access to your Meteor application to a whitelist of IP addresses.',
  git: 'https://github.com/subcode-simon/ip-whitelist.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('ip-whitelist.js', ['server']);
  api.export('IPWhitelist');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rycrofts:ip-whitelist', ['server']);
  api.addFiles('ip-whitelist-tests.js', 'server');
});

