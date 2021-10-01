const express = require('express');
const bodyParser= require('body-parser')
const callFunction =  require('./my-function.js');
const app = express();

// You need to make sure that you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))

//get request
app.get('/say', function (req, res) {
  // do something here
  const getOutput = callFunction.myFunction(req)
  res.send(`${getOutput}`)
});

app.listen(3000, function() {
  console.log('listening on 3000')
})