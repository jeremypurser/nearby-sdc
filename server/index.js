const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3003;
const connection = require('../database/dbConnect.js');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  connection.NearbyHouse.find(({parentHouseId: 1}))
    .then((houses) => {
      res.send(houses);
    })
});

app.listen(port, () => console.log(`App listening on port ${port}`));