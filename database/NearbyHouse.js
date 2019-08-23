const mongoose = require('mongoose');
const db = require('./index.js');
const Schema = mongoose.Schema;

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


module.exports = NearbyHouse;
