var https = require('https');

var string1 = 'services';
var string2 = 'T029A195J/B03GS1WEB';
var string3 = '70joCzsg0a03DgM4qjkviyUy';
var options = {
  hostname: 'hooks.slack.com',
  port: 443,
  path: '/' + string1 + '/' + string2 + '/' + string3,
  method: 'POST'
};

var payload = {
  text: 'test',
  username: "tester",
  icon_url: "http://i.imgur.com/zmrNt1i.jpg"
};

module.exports.sendMessage = function(message){
  var webRequest = https.request(options).on("error", function(e){
    console.log("Got error: " + e.message);
  });
  payload.text = message;
  webRequest.write(JSON.stringify(payload));
  webRequest.end();

};
