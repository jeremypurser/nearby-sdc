const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
const { user, password } = require('../../config.js');
const copyFrom = require('pg-copy-streams').from;

const pool = new Pool({
  user,
  host: 'localhost',
  database: 'housemania',
  password,
  port: 5432
});

const loadData = (i = 1) => {
  pool.connect((err, client) => {
    const stream = client.query(copyFrom('COPY houses FROM STDIN'));
    const fileStream = fs.createReadStream(path.join(__dirname, `../../data/nearbyData${i}.tsv`));
    fileStream.on('error', err => {
      console.log(`Error in reading file: ${err}`);
      client.end();
    });
    stream.on('error', err => {
      console.log(`Error in copy command: ${err}`);
      client.end();
    });
    stream.on('end', () => {
      console.log(`Completed loading data ${i}`);
      client.end();
      if (i <= 10) {
        loadData(i + 1);
      }
    });
    fileStream.pipe(stream);
  });
};

loadData();