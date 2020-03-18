var express = require('express');
var app = express();

var http = require('http');

var httpPort = 8080;

var httpServer = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Hello dev.to!');
});

httpServer.listen(httpPort,()=>{
	console.log(`http port ${httpPort}`);
});
