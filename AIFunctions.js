var apiai = require('apiai');

var app = apiai('33ea78ce776e47a3be419e8cb7956f27');

function AIParse(message, sessionId, callback) {
  if(message === undefined) {
    callback('no message found');
  } else {
    var request = app.textRequest(message, {
      sessionId: sessionId
    });

    request.on('response', function(response) {
      callback(null, response);
    });

    request.on('error', function(error) {
      callback(error);
    });

    request.end();
  }
}

module.exports = AIParse;