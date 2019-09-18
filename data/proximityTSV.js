const faker = require('faker');
const fs = require('fs');
const path = require('path');

const randNum = (avoid, limit) => {
  let result;
  do {
    result = Math.floor((Math.random() * (limit - 1) + 1));
  } while (result === avoid);
  return result;
};

const tsvJoinString = (num, quarterMill) => {
  let result = '';
  let count = quarterMill * 10;
  for (let i = 0; i < num; i++) {
    const record = quarterMill + i + 1;
    result += `${count += 1}\t${record}\t${randNum(record, 10)}\n`;
    result += `${count += 1}\t${record}\t${randNum(record, 10)}\n`;
    result += `${count += 1}\t${record}\t${randNum(record, 100)}\n`;
    result += `${count += 1}\t${record}\t${randNum(record, 100)}\n`;
    result += `${count += 1}\t${record}\t${randNum(record, 10000)}\n`;
    result += `${count += 1}\t${record}\t${randNum(record, 10000)}\n`;
    result += `${count += 1}\t${record}\t${randNum(record, 10000)}\n`;
    result += `${count += 1}\t${record}\t${randNum(record, Math.pow(10, 5))}\n`;
    result += `${count += 1}\t${record}\t${randNum(record, Math.pow(10, 6))}\n`;
    result += `${count += 1}\t${record}\t${randNum(record, Math.pow(10, 7))}\n`;
  }
  return result;
};

const genProximities = (i = 1, quarterMill = 0) => {
  fs.writeFile(path.join(__dirname, `proximity${i}.tsv`), tsvJoinString(0.25 * Math.pow(10, 6), quarterMill), err => {
    if (err) { console.log(err); }
    console.log(`File ${i} has been saved!`);
    if (i < 40) {
      genProximities(i + 1, quarterMill + 0.25 * Math.pow(10, 6));
    }
  });
};

genProximities();