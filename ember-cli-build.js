var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });
  app.import('vendor/bootstrap/dist/css/bootstrap.css');
  app.import('vendor/bootstrap/dist/js/bootstrap.js');
  return app.toTree();
};
