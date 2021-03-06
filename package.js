Package.describe({
  name: 'innovationswitch:meteor.adfs-oauth',
  version: '0.0.20',
  summary: 'Oauth2 authentication using Microsoft ADFS3 Oauth service (Active Directory)',
  git: 'https://github.com/InnovationSwitch/meteor.adfs-oauth',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use(['underscore', 'random']);
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use(['underscore', 'service-configuration'], ['client', 'server']);
  api.use(['random', 'templating'], 'client');

  api.use('accounts-base', ['client', 'server']);

  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);

  //Add npm module files
  api.addFiles(['adfs-oauth_package.js'], ['server']);

  api.addFiles(['adfs-oauth_configure.html', 'adfs-oauth_configure.js'], 'client');
  api.addFiles('adfs-oauth_server.js', 'server');
  api.addFiles('adfs-oauth_client.js', 'client');
  api.addFiles('adfs-oauth.js');
  api.addFiles('oauth_browser.js');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('snowping:adfs-oauth');
  api.addFiles('adfs-oauth-tests.js');
});

//NPM module dependencies
Npm.depends({
   'jwt-simple': '0.3.1'
});
