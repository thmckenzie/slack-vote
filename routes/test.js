var slack = require('./slack_data');

module.exports.sayHello = function (req, res){
  res.send("<form method='post' action='/asdf'><input type='text' name='inputField'></input><br><input type='submit' name='submitButton'></input></form>");
};

//New Form
module.exports.sayHi = function (req, res){
  res.send("<form method='post' action='/receive'><input type='text' name='inputText'></input><br><input type='submit' name='submit'></input></form>");
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
 
