const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const NearbyHouse = require('../database/NearbyHouse.js');

const app = express();
const port = 8081;

app.use(bodyParser.urlencoded({ extended: false }));
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


// READ
app.get('/house/:houseId', (req, res) => {
  NearbyHouse.find(({ parentHouseId: req.params.houseId }))
    .then((houses) => {
      res.send(houses);
    })
    .catch((error) => {
      res.send(error);
    });
});

// UPDATE

// DELETE

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
