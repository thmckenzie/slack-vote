var https = require('https');

var string1 = 'services';
var string2 = 'T029A195J/B09CTLNMT';
var string3 = 'qFcFrade2URq5fdjbkFJgzkF';
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
/*
token=x0YWCMVbXh0BbGDJHtCInDlm
team_id=T0001
team_domain=example
channel_id=C2147483705
channel_name=test
timestamp=1355517523.000005
user_id=U2147483697
user_name=Steve
text=googlebot: What is the air-speed velocity of an unladen swallow?
trigger_word=googlebot:
*/
