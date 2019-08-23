const express = require('express');
const bodyParser = require('body-parser');
const NearbyHouse = require('../database/NearbyHouse.js');

const app = express();
const port = 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
  NearbyHouse.find(({parentHouseId: 1}))
    .then((houses) => {
      res.send(houses);
    })
    .catch((error) => {
      res.send(error)
    })
});

app.get('/house/:houseId', (req, res) => {
  NearbyHouse.find(({parentHouseId: req.params.houseId}))
    .then((houses) => {
      res.send(houses);
    })
    .catch((error) => {
      res.send(error)
    })
});

app.listen(port, () => console.log(`App listening on port ${port}`));