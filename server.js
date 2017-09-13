var path = require('path');
var express = require('express');
var logger = require('morgan');
var app = express();

// Log the requests
app.use(logger('dev'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/book_slot', function(req, res) {
  res.send('booked');
  console.log('Booking ');
});

// Route for everything else.
app.get('*', function(req, res){
  res.send('Page does not exist');
});

// Fire it up!
app.listen(8080);
console.log('Listening on port 8080');
