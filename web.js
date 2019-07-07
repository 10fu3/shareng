var express = require('express');

var app = express.createServer();

 var list = Array();//共有NGのリスト
 var users = Array();//一時共有

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
      list.push(target);
    }
  }
}

app.get('/uid/:uid/targetid/:target/', function (req, res) {
  let uid = req.params['uid'];
  let target = req.params['target'];
  if(!users.has(uid)){
    var u = new User(uid);
    users[uid] = u;

  }
  // var u = users[uid];
  // u.addTarget(target);
  // users[uid] = u;
  // res.send(list);
  // res.send('A')
});

app.get('/',function(req,res){
  res.send(list);
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Listening on " + port);
});

