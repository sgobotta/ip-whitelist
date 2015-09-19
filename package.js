Package.describe({
  name: 'rycrofts:ip-whitelist',
  version: '0.0.1',
  summary: 'Restrict access to your Meteor application to a whitelist of IP addresses.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('ip-whitelist.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rycrofts:ip-whitelist');
  api.addFiles('ip-whitelist-tests.js');
});
