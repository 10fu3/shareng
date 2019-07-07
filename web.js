var express = require('express');

var app = express.createServer();

app.get('/users/:UID/targetID/:target/', function (req, res) {
  res.send(req.params['UID']+req.params['target'])
})

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Listening on " + port);
});

