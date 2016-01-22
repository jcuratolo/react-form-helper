var fs = require('fs');
var browserify = require('browserify');
browserify('./lib/*.spec.js')
  .transform("babelify", {presets: ["es2015", "react"]})
  .bundle()
  .pipe(fs.createWriteStream("test/bundle.js"));
