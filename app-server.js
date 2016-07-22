var express = require('express')
var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));
app.use(express.static('./node_modules'));

var server = app.listen(3000);

require('./components/alljobs')(server);
console.log("server running localhost - 3000");
