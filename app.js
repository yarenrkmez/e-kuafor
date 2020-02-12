var express=require('express');
var fs=require('fs');
var path=require('path');
var app=express();
var uniqid=require('uniqid');
var routeMain=(require('./app_server/route/mainRoute'));
var routeBlog=(require('./app_server/route/blogRouter'));
var routeFirsatlar=(require('./app_server/route/firsatlarRouter'));
var routeKuaforler=(require('./app_server/route/kuaforlerRouter'));
var routeMekanlar=(require('./app_server/route/mekanlarRouter'));
var routeMekanSahibi=(require('./app_server/route/mekanSahibiRouter'));
const session = require('express-session');

var bodyparser=require('body-parser');
app.use('/public',express.static(path.join(__dirname,'public')))

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./app_server/views'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use(session({
    secret:uniqid(),
    resave:false,
    saveUninitialized:true,
}))

var db=require('./app_server/models/db');




// app.use(function(req,res,next){
// console.log('gelen istek'+req.url);
// // console.log('tarihi'+Date.now());
// next();
// });
app.use('/',routeMain);
app.use('/',routeBlog);
app.use('/',routeFirsatlar);
app.use('/',routeMekanlar);
app.use('/',routeKuaforler);
app.use('/',routeMekanSahibi);








  
app.listen(8080);

