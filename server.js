var express = require('express')

// Create our app - call express library as a function
var app = express();

// tell it which folder you wanna serve. app.use() lets you add functionality to your express application
app.use(express.static('public')); // speciy folder name that we want to expose to web server

// starts the server
app.listen(3000, function () {
  console.log('Express server is up on port 3000')
});
