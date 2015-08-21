var slack = require('./slack_data');

module.exports.sayHello = function (req, res){
  res.send("<form method='post' action='/asdf'><input type='text' name='inputField'></input><br><input type='submit' name='submitButton'></input></form>");
};

//New Form
module.exports.sayHi = function (req, res){
  res.send("<form method='post' action='/receive'>" +
      "<token: input type='text' name='token' value='x0YWCMVbXh0BbGDJHtCInDlm'></input><br>" +
      "<team_id: input type='text' name='team_id' value='T029A195J'></input><br>" +
      "<team_domain: input type='text' name='team_domain' value='timeinc'></input><br>" +
      "<service_id: input type='text' name='service_id' value='9435179584'></input><br>" +
      "<channel_id: input type='text' name='channel_id' value='C03BGDH2U'></input><br>" +
      "<channel_name: input type='text' name='channel_name' value ='si_golf-dev-team'></input></br>" +
      "<timestamp: input type='text' name='timestamp' value='1440171763.000010'></input><br>" +
      "<user_id: input type='text' name='user_id' value='U039HD0HP'></input><br>" +
      "<user_name: input type='text' name='user_name' value='aaron.marasco'></input><br>" +
      "text: input type='text' name='text' value ='stuff test'></input><br>" +
      "trigger_word: input type='text' name='trigger_word' value='stuff'></input></form>");
};

module.exports.goodbye = function (req, res){
  res.send("Goodbye");
};

module.exports.post = function(req, res){
  var text = req.body.inputField;
  slack.sendMessage(text);
  res.send('done');
};

//New Post
module.exports.newPost = function(req, res){
  var textInput = req.body.inputText;
  //slack.sendMessage(textInput);
  console.log(req.body);
  res.send('done');
};
 
/*
{ token: 'x0YWCMVbXh0BbGDJHtCInDlm',
  team_id: 'T029A195J',
  team_domain: 'timeinc',
  service_id: '9435179584',
  channel_id: 'C03BGDH2U',
  channel_name: 'si_golf-dev-team',
  timestamp: '1440171763.000010',
  user_id: 'U039HD0HP',
  user_name: 'aaron.marasco',
  text: 'stuff test',
  trigger_word: 'stuff' }
*/
