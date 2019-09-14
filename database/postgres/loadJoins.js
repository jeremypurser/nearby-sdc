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

const loadJoins = (i = 1) => {
  pool.connect((err, client) => {
    const stream = client.query(copyFrom('COPY near FROM STDIN'));
    const fileStream = fs.createReadStream(path.join(__dirname, `../../data/nearJoin${i}.tsv`));
    fileStream.on('error', err => {
      console.log(`Error in reading file: ${err}`);
      client.end();
    });
    stream.on('error', err => {
      console.log(`Error in copy command: ${err}`);
      client.end();
    });
    stream.on('end', () => {
      console.log(`Completed loading join ${i}`);
      client.end();
      if (i <= 10) {
        loadJoins(i + 1);
      }
    });
    fileStream.pipe(stream);
  });
};

loadJoins();