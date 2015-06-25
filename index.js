var request = require('request');

module.exports = {
    report: function(url, msg, cb) {
        request(url + '?payload=' + encodeURIComponent(msg), function (error, response, body) {
		cb('success');
        });
    }
};
