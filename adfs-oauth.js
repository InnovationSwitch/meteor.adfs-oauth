Accounts.oauth.registerService('adfsoauth');

if (Meteor.isClient) {
  Meteor.loginWithAdfsoauth = function(options, callback) {

    console.log('FROM GENERIC PACKAGE: loginWithAdfsoauth');

    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Adfsoauth.requestCredential(options, credentialRequestCompleteCallback);
  };
}
