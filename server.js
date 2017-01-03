var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);//Must be specified toward the top of app for app wide requirment
//can be declared in the app.get function as well. 
app.get('/about', middleware.requireAuthentication, function(req, res){
        res.send("David Bowman")
        });
app.use(express.static(__dirname + "/public"));
app.listen(PORT, function(){
    console.log("Express server started on " + PORT + "!");
});