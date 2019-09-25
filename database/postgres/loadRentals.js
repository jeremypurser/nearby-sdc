const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
const copyFrom = require('pg-copy-streams').from;
const { password } = require('../../config.js');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'housemania',
  password,
  port: 5432
});

const loadData = (i = 1) => {
  pool.connect((err, client) => {
    if (err) { return console.log(err); }
    const stream = client.query(copyFrom('COPY rentals FROM STDIN'));
    const fileStream = fs.createReadStream(path.join(__dirname, `../../data/rentals${i}.tsv`));
    
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
