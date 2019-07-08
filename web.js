var express = require('express');
const fetch = require('node-fetch');
var app = express.createServer();
var port = process.env.PORT || 3000;

var day = 0;
var nextday = 0;

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
      if(count > 1 && !list.includes(target)){
        list.push(target);
      }
    }
  }
}

function IfneedResetArray(){
  fetch('https://ntp-a1.nict.go.jp/cgi-bin/time')
        .then(response => {
            if (!response.ok) {
                console.error("サーバーエラー", response);
            } else {
                response.text().then(text=>{
                  let days = text.split(' ');
                  if(days.length == 6){
                    day = Number(days[2]);
                    console.log(day);
                    if(day == nextday){
                      users = Object();
                      list = [];
                    }
                    nextday = day +1;
                  }
                });
            }
        }).catch(error => {
            console.error("ネットワークエラー", error);
        });
}

app.get('/', function (req, res) {
  IfneedResetArray();
  let uid = String(req.query.uid);
  let target = String(req.query.target);
  if(!users[uid]){
    var u = new User(uid);
    users[uid] = u;
  }
  var u = users[uid];
  u.addTarget(target);
  users[uid] = u;

  var values = ''
  for (i in list){
    console.log(list[i]);
    values += list[i];
    values += '\n';
  }
  res.send(values);
});

app

app.get('/',function(req,res){
  IfneedResetArray();
  var values = ''
  for (i in list){
    values += i;
    values += '\n';
  }
  res.send(values);
});

app.listen(port, function(){
  console.log("Listening on " + port);
});

