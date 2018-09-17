var express = require("express");
var app = express();

app.get('/', function(req, res){
  res.send("Hello ap jan");
})
app.listen(2999, function(){
  console.log("server is driving on 2999 port")
})
