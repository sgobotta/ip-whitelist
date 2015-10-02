Package.describe({
  name: 'simonrycroft:ip-whitelist',
  version: '0.0.1',
  summary: 'Restrict access to your Meteor application to a whitelist of IP addresses.',
  git: 'https://github.com/simonrycroft/ip-whitelist.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles([
        'src/lib/modules/ip-whitelist.js',
        'src/lib/modules/environment.js',
        'src/lib/modules/firewall.js'
  ], ['server']);
  api.export(['IPWhitelist']);
  api.export(['Environment', 'Firewall'], {testOnly: true});
  api.use('webapp', 'server');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'webapp', 'http']);
  api.use('simonrycroft:ip-whitelist', ['server']);
  
  api.addFiles([
      'test/src/unit/environment-test.js',
      'test/src/unit/firewall-test.js',
      'test/src/integration/ip-whitelist-test.js',
  ], 'server');
});

