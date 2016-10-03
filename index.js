var http = require('http');

module.exports = {
    report: function(url, msg, cb) {
        http.get(url + '?payload=' + encodeURIComponent(msg), function (response) {
		        cb('success');
        });
    }
};
