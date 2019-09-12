const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const NearbyHouse = require('../database/NearbyHouse.js');
const ObjectId = require('mongoose').Types.ObjectId;

const app = express();
const port = 8081;

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../public')));
app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  next();
});

// CREATE
app.post('/house/:houseId', (req, res) => {
  const {
    nearbyNum, imgUrl, location, type, title, cost, stars, reviewCount, arrIndex
  } = req.body;
  console.log(nearbyNum, imgUrl, location);
  NearbyHouse.create({
    parentHouseId: req.params.houseId,
    nearbyNum, imgUrl, location, type, title, cost, stars, reviewCount, arrIndex
  })
    .then(newHouse => {
      console.log(`Save ${newHouse}`);
      res.send(newHouse);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

// READ
app.get('/house/:houseId', (req, res) => {
  NearbyHouse.find({ parentHouseId: req.params.houseId })
    .then(houses => {
      res.send(houses);
    })
    .catch(error => {
      res.send(error);
    });
});

// UPDATE
app.patch('/house/:houseId/:id', (req, res) => {
  const updateObj = req.body;
  const id = req.params.id;

  NearbyHouse.findByIdAndUpdate({
    _id: id
  }, updateObj)
    .then(updatedHouse => {
      console.log(updatedHouse);
      res.send(updatedHouse);
    })
    .catch(err => {
      console.log(err);
    });
});

// DELETE
app.delete('/house/:houseId/:id', (req, res) => {
  const updateObj = req.body;
  const id = req.params.id;

  NearbyHouse.findByIdAndDelete({
    _id: id
  }, updateObj)
    .then(deleted => {
      res.send();
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
