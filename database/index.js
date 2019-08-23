const mongoose = require('mongoose');
const mongoDBUrl = 'mongodb://localhost/nearbyPlaces';


mongoose.connect(mongoDBUrl, { useNewUrlParser: true }, function(err, client) {
  if (err) {
    console.log(err)
  }
});

const db = mongoose.connection;
const collection = db.collection('nearbyhouses');

module.exports = db;