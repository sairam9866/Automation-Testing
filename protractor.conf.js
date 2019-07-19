
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  suites: {
    Homepage: './Test/spec/Homepage_spec.js',
  },
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  params: {
  baseUrl: 'http://localhost:4200/ZiptoDest',
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'Reports/screenshots', 
      screenshotsSubfolder: 'images',
      jsonsSubfolder: 'jsons',
   }).getJasmine2Reporter());
  }
};