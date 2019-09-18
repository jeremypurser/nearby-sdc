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
const lowZip = () => Math.floor(Math.random() * (25000 - 10000 + 1)) + 10000;
const medLowZip = () => Math.floor(Math.random() * (50000 - 25001 + 1)) + 25001;
const medHighZip = () => Math.floor(Math.random() * (75000 - 50001 + 1)) + 50001;
const highZip = () => Math.floor(Math.random() * (99999 - 75001 + 1)) + 75001;
const zip = () => {
  const zipFuncs = [lowZip, medLowZip, medHighZip, highZip, zip];
  const idx = Math.floor(Math.random() * 5);
  return zipFuncs[idx]();
};

const tsvString = (num, mill) => {
  let result = '';
  for (let i = 0; i < num; i++) {
    // https://hrr40-sdc2-jp.s3.us-east-2.amazonaws.com/  <-- add after pulling jpg name from db
    result += `${mill + i + 1}\tsdcimg-${i % 482}.jpg\t${location()}\t${type()}\t${title()}\t${cost()}\t${stars()}\t${reviewCount()}\t${zip()}\n`;
  }
  return result;
};

const genTenMillionRecords = (i = 1, mill = 0) => {
  fs.writeFile(path.join(__dirname, `rentals${i}.tsv`), tsvString(Math.pow(10, 6), mill), err => {
    if (err) { console.log(err); }
    console.log(`File ${i} has been saved!`);
    if (i < 10) {
      genTenMillionRecords(i + 1, mill + Math.pow(10, 6));
    }
  });
};

genTenMillionRecords();