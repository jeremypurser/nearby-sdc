const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controller = require('./controllers.js');

const app = express();
const port = 8081;

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

app.post('/house/:houseId', controller.createRental);
app.get('/house/:houseId', controller.findNearbyRentals);
app.put('/house/:houseId/:id', controller.updateRental);
app.delete('/house/:houseId/:id', controller.deleteRental);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
