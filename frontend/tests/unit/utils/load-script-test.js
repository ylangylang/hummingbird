import loadScript from 'frontend/utils/load-script';

module('loadScript');

// Replace this with your real tests.
test('it works', function() {
  var result = loadScript("/assets/frontend.js");
  andThen(function() {
    ok(result);
  });
});
