var express = require('express'),
    exphbs = require('express-handlebars'),
    path = require('path');

var app = express();

var hbs = exphbs.create({
    defaultLayout: 'main',
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

//===============ROUTES===============

app.get('/', function(req, res){
  res.render('home', {name: 'World'});
});

app.get('*', function(req, res){
  res.status(404);
  res.render('404');
});

//===============PORT=================
var port = process.env.PORT || 8080;
app.listen(port);
console.log("listening on " + port + "!");