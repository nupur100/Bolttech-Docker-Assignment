const express = require('express');
const app = express();
const port = 8084;
const url = process.env.APP_URL
//app.use(function(req, res, next) {
//  res.header('Access-Control-Allow-Origin', '*');
//  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//  next();
//});
app.use(express.static(__dirname + './views'));
let ejs = require('ejs');
app.set('views', './views')
app.set('view engine', 'ejs');
app.get('/', function(req, res){

    res.render('index', {url: process.env.APP_URL})

     });

app.listen(port, () => console.log(`Node app is listening at http://localhost:${port}`))




