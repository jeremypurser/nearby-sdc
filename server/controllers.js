const Pool = require('pg').Pool;
const { user, password } = require('../config.js');

const pool = new Pool({
  user,
  host: 'localhost',
  database: 'housemania',
  password,
  port: 5432
});

exports.createRental = (req, res) => {
  const {
    imgurl, location, type, title, cost, zip
  } = req.body;
  const query = 'INSERT INTO rentals (imgurl, location, type, title, cost, stars, \
    reviewcount, zip) VALUES ($1, $2, $3, $4, $5, 0, 0, $6)';
  pool.query(query, [imgurl, location, type, title, cost, zip])
    .then(result => {
      res.status(201).json(result);
    })
    .catch(e => {
      console.error(e.stack);
    });
};

exports.findNearbyRentals = (req, res) => {
  const query = 'SELECT * FROM rentals WHERE zip > $1 AND zip < $2 \
    ORDER by id DESC FETCH FIRST 12 ROW ONLY';
  const searchZip = Number(req.params.zip);
  const params = [(searchZip - 500), (searchZip + 500)];
  pool.query(query, params)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(e => {
      console.error(e.stack);
    });
};

exports.updateRental = (req, res) => {
  const [toBeUpdated] = Object.entries(req.body);
  const query = `UPDATE rentals SET ${toBeUpdated[0]} = $1 WHERE id = $2`;
  const { id } = req.params;
  const params = [toBeUpdated[1], id];
  pool.query(query, params)
    .then(result => {
      res.status(200).send(`User with id: ${id} updated`);
    })
    .catch(e => {
      console.error(e.stack);
    });
};

exports.deleteRental = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM rentals WHERE id = $1';
  pool.query(query, [id])
    .then(result => {
      res.status(200).send(`User with id: ${id} deleted`);
    })
    .catch(e => {
      console.error(e.stack);
    });
};