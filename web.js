var express = require('express');

var app = express.createServer();

// var list = Array('SharedNGID');
// var users = Map();

// class User{
//   constructor(uid) {
//     this.uid = uid;
//     this.apendedID = Array();
//   }
  
//   getID(){
//     return this.uid;
//   }
//   addTarget(target){
//     if(!this.apendedID.includes(target)){
//       this.apendedID.push(target);
//       list.push(target);
//     }
//   }
// }

app.get('/uid/:uid/targetid/:target/', function (req, res) {
  // let uid = req.params['uid'];
  // let target = req.params['target'];
  // if(!users.has(uid)){
  //   var u = new User(uid);
  //   users.set(uid,new User(uid));
  //   list.push(target);
  // }
  // var u = users.get(uid);
  // u.addTarget(target);
  // res.send(list);
});

app.get('/',function(req,res){
  //res.send(list);
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Listening on " + port);
});

