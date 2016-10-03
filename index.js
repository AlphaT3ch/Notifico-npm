var http = require('http')
var https = require('https')

module.exports = {
    report: function(url, msg, cb) {
      var module
      // If the url begins with https then we need to use the https module, otherwise use http
      if (url.match(/^https/i)) {
        module = https
      } else {
        module = http
      }
        module.get(url + '?payload=' + encodeURIComponent(msg), function (error, response, body) {
            cb('success');
        });
    }
};
