var express = require('express');

var app = express.createServer();

 var list = Array();//共有NGのリスト
 var users = Object();//一時共有

class User{
  constructor(uid) {
    this.uid = uid;
    this.apendedID = Array();
  }
  
  getID(){
    return this.uid;
  }
  addTarget(target){
    if(!this.apendedID.includes(target)){
      this.apendedID.push(target);
      var count = 0;
      Object.keys(users).forEach(function (key) {
        if(users[key].apendedID.includes(target)){
          count += 1;
        }
      });
      if(count > 29 && !list.includes(target)){
        list.push(target);
      }
    }
  }
}

app.get('/uid/:uid/targetid/:target/', function (req, res) {
  let uid = String(req.params['uid']);
  let target = String(req.params['target']);
  if(!users[uid]){
    var u = new User(uid);
    users[uid] = u;
  }
  var u = users[uid];
  u.addTarget(target);
  users[uid] = u;

  var values = ''
  for (i in list){
    values += i;
    values += '\n';
  }
  res.send(values);
});

app.get('/',function(req,res){
  var values = ''
  for (i in list){
    values += i;
    values += '\n';
  }
  res.send(values);
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Listening on " + port);
});

