const mongoose = require('mongoose');
const mongoDBUrl = 'mongodb://localhost/nearbyPlaces';


mongoose.connect(mongoDBUrl, { useNewUrlParser: true }, function(err, client) {
  if (err) {
    console.log(err)
  }
});

const db = mongoose.connection;
const Schema = mongoose.Schema;
const collection = db.collection('nearbyhouses');

var nearbySchema = new Schema({
  parentHouseId: Number,
  nearbyNum: Number,
  imgUrl: String,
  location: String,
  type: String,
  title: String,
  cost: String,
  stars: Number,
  reviewCount: Number
});

var NearbyHouse = mongoose.model('NearbyHouse', nearbySchema);


module.exports = {
  NearbyHouse: NearbyHouse,
  db: db
};