// Once the Server receives it, create the logic to compute the numbers in 1 of 4 different ways: The server should be able to handle (1) addition, (2) subtraction, (3) multiplication, and (4) division. Once the result of the mathematical operation is determined, it should be sent back down to the Client where it will be displayed on the DOM.
//
// Finally, build a clear button that resets the whole experience.
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var calculate = require('./routes/calculate');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/routes/calculate',calculate);
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'public/views/index.html'));
});

app.listen(3000);
