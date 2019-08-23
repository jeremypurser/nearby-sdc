const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3003;
const connection = require('../database/dbConnect.js');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/house', (req, res) => {
  connection.NearbyHouse.find(({parentHouseId: 1}))
    .then((houses) => {
      res.send(houses);
    })
});

app.get('/house/:houseId', (req, res) => {
  console.log(req.params);
  connection.NearbyHouse.find(({parentHouseId: req.params.houseId}))
    .then((houses) => {
      res.send(houses);
    })
});

app.listen(port, () => console.log(`App listening on port ${port}`));