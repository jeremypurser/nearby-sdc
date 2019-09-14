const faker = require('faker');
const fs = require('fs');
const path = require('path');

const randNum = () => Math.floor((Math.random() * (Math.pow(10, 6) - 1) + 1));

const twelveRandNums = () => {
  const result = [];
  while (result.length < 12) {
    let num;
    do {
      num = randNum();
    } while (result.includes(num));
    result.push(num);
  }
  return result;
};

const tsvJoinString = (num, mill) => {
  let result = '';
  for (let i = 0; i < num; i++) {
    const houses = twelveRandNums();
    result += `${mill + i + 1}\t{${houses}}\n`;
  }
  return result;
};

const genMilliJoins = (i = 1, mill = 0) => {
  fs.writeFile(path.join(__dirname, `nearJoin${i}.tsv`), tsvJoinString(Math.pow(10, 6), mill), err => {
    if (err) { console.log(err); }
    console.log(`File ${i} has been saved!`);
    if (i < 10) {
      genMilliJoins(i + 1, mill + Math.pow(10, 6));
    }
  });
};

genMilliJoins();