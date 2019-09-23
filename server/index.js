const newrelic = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const http = require('http');
const https = require('https');
const controller = require('./controllers.js');

http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;

const app = express();
const port = 8081;
const host = 'localhost';

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());
app.use(cors());

app.post('/houses', controller.createRental);
app.get('/houses/:zip', controller.findNearbyRentals);
app.patch('/houses/:id', controller.updateRental);
app.delete('/houses/:id', controller.deleteRental);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
