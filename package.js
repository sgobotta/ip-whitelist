Package.describe({
  name: 'rycrofts:ip-whitelist',
  version: '0.0.1',
  summary: 'Restrict access to your Meteor application to a whitelist of IP addresses.',
  git: 'https://github.com/subcode-simon/ip-whitelist.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles([
        'src/ip-whitelist.js',
        'src/lib/modules/environment.js'
  ], ['server']);
  api.export(['IPWhitelist']);
  api.export(['Environment'], {testOnly: true});
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rycrofts:ip-whitelist', ['server']);
  api.addFiles([
      'test/src/unit/environment-test.js',
      'test/src/integration/ip-whitelist-tests.js'
  ], 'server');
});

