const express = require('express');
const app = express();
require('./squalize');

//init home
app.get('/', function(req, res) {
  console.log('server jalan');
  res.send('Server Jalan!');
});

//init body parser => supaya bisa membaca data dari body
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//init route
const todos = require('./routes/Todos');
app.use(todos);

app.listen(5000, function() {
  console.log('express kamu di 5000');
});
