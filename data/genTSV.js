const faker = require('faker');
const fs = require('fs');
const path = require('path');

/*
******* Old Schema *******
parentHouseId // x
nearbyNum     // x
imgUrl
location
type
title
cost
stars
reviewCount
arrIndex     // x
*/

const capitalize = (string) => {
  return string.split(' ')
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ');
};

const location = () => faker.address.city();
const type = () => faker.lorem.word();
const title = () => capitalize(faker.lorem.words());
const cost = () => Math.floor(Math.random() * 400) + 100;
const stars = () => Math.floor(Math.random() * 6);
const reviewCount = () => Math.floor(Math.random() * 400);

const tsvString = (num) => {
  let result = '';
  for (let i = 0; i < num; i++) {
    // https://hrr40-sdc2-jp.s3.us-east-2.amazonaws.com/  <-- add after pulling jpg name from db
    result += `sdcimg-${i % 482}.jpg\t${location()}\t${type()}\t${title()}\t${cost()}\t${stars()}\t${reviewCount()}\n`;
  }
  return result;
};

const genTenMillionRecords = (i = 1) => {
  fs.writeFile(path.join(__dirname, `nearbyData${i}.tsv`), tsvString(Math.pow(10, 6)), err => {
    if (err) { console.log(err); }
    console.log(`File ${i} has been saved!`);
    i++;
    if (i <= 10) {
      genTenMillionRecords(i);
    }
  });
};

genTenMillionRecords();