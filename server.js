var express = require('express');
var path = require('path');
var url = require("url");
var queryString = require("querystring");

var app = express();

app.use(function (req, res, next) {    
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');    
    res.setHeader('Access-Control-Allow-Credentials', true);    
    next();
});

app.use(express.static(__dirname + '/app/views'));

app.get('/internallogin', function (req, res) {

    var theUrl = url.parse(req.url);
    var queryObj = queryString.parse(theUrl.query);    
    var password = queryObj.password;
    var username = queryObj.username;


});

app.get('/login', function (req, res) {

    var response = {
        "loginResposne": {
            "token": "As4dRfg56yhU",
            "role": "admin",
            "group": "admins",
            "id": 4,
            "name": "Alex Borsuk",
            "username": "borasik",
            "isLogedin": "false",
            "redirect": false,
            "callBackUrl": "http://localhost:3000/"
        }
    }

    try {
        if (response.loginResposne.isLogedin == 'true') {
            console.log(response.loginResposne.isLogedin);
            res.end(JSON.stringify(response));
        }
        else {
            console.log('redirecting...');
            response = {
                "redirect": true,
                "redirectUrl": "http://localhost:8081/login.html"
            };
            res.end(JSON.stringify(response));
            //res.redirect('/login.html');
        }
    }
    catch (err) {
        console.log(err);
    }
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)

})