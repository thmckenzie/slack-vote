module.exports.sayHello = function (req, res){
  res.send("<form method='post' action='/asdf'><input type='text'></input><br><input type='submit'></input></form>");
};

module.exports.goodbye = function (req, res){
  res.send("Goodbye");
};

module.exports.post = function(req, res){
  res.send("post");
};
