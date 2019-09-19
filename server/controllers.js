const Pool = require('pg').Pool;
const { user, password } = require('../../config.js');

const pool = new Pool({
  user,
  host: 'localhost',
  database: 'housemania',
  password,
  port: 5432
});

exports.createRental = (req, res) => {
  const {
    imgurl, location, type, title, cost, stars, reviewCount, zip
  } = req.body;
  const query = 'INSERT INTO rentals (imgurl, location, type, title, cost, stars, \
    reviewcount, zip) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
  const params = [imgurl, location, type, title, cost, stars, reviewCount, zip];
  pool.query(query, params)
    .then(result => {
      console.log(result.rows[0]);
      res.status(201).json(result);
    })
    .catch(e => {
      console.error(e.stack);
    });
};

exports.findNearbyRentals = (req, res) => {
  const query = 'SELECT * FROM rentals WHERE zip > $1 AND zip < $2';
  const lowZip = req.body.zip - 500;
  const highZip = req.body.zip + 500;
  const params = [lowzip, highZip];
  pool.query(query, params)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(e => {
      console.error(e.stack);
    });
};

exports.updateRental = (req, res) => {
  const {
    id, imgurl, location, type, title, cost, zip
  } = req.body;
  const query = 'UPDATE rentals SET imgurl = $1, location = $2, type = $3, title = $4, \
    cost = $5, zip = $6 WHERE id = $7';
  const params = [imgurl, location, type, title, cost, zip, id];
  pool.query(query, params)
    .then(result => {
      res.status(200).send(`User with id: ${id} updated`);
    })
    .catch(e => {
      console.error(e.stack);
    });
};

exports.deleteRental = (req, res) => {
  const { id } = req.body;
  const query = 'DELETE FROM rentals WHERE id = $1';
  pool.query(query, [id])
    .then(result => {
      res.status(200).send(`User with id: ${id} deleted`);
    })
    .catch(e => {
      console.error(e.stack);
    });
};