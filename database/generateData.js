const faker = require('faker');
const fs = require('fs');

var generateUsers = function () {
  let users = [];

  var imgArr =['https://housemania.s3-us-west-1.amazonaws.com/aaron-huber-G7sE2S4Lab4-unsplash.jpg','https://housemania.s3-us-west-1.amazonaws.com/annie-spratt-BmjlyHwV1S0-unsplash.jpg', 'https://housemania.s3-us-west-1.amazonaws.com/behy-studio-nATj9ajl_D0-unsplash.jpg', 'https://housemania.s3-us-west-1.amazonaws.com/camylla-battani-l8Y9fVgxrEE-unsplash.jpg', 'https://housemania.s3-us-west-1.amazonaws.com/dallin-hassard-Syerh5b5UN0-unsplash.jpg', 'https://housemania.s3-us-west-1.amazonaws.com/deborah-cortelazzi-gREquCUXQLI-unsplash.jpg', 'https://housemania.s3-us-west-1.amazonaws.com/devin-kleu-4jjzDlartfA-unsplash.jpg', 'https://housemania.s3-us-west-1.amazonaws.com/grovemade-vfIx29EsLHA-unsplash.jpg', 'https://housemania.s3-us-west-1.amazonaws.com/grovemade-vfIx29EsLHA-unsplash.jpg', 'https://housemania.s3-us-west-1.amazonaws.com/minh-pham-7pCFUybP_P8-unsplash.jpg', 'https://housemania.s3-us-west-1.amazonaws.com/nathan-van-egmond-CXpK83c6Y1M-unsplash.jpg', 'https://housemania.s3-us-west-1.amazonaws.com/patrick-perkins-3wylDrjxH-E-unsplash.jpg', 'https://housemania.s3-us-west-1.amazonaws.com/pnEtsdgBeBE.jpg', 'https://housemania.s3-us-west-1.amazonaws.com/rahul-chakraborty-dv9AoOYegRc-unsplash.jpg', 'https://housemania.s3-us-west-1.amazonaws.com/spencer-_-HHWwqWV6d5k-unsplash.jpg', 'https://housemania.s3-us-west-1.amazonaws.com/sweet-ice-cream-photography-lFpqHAmeLZg-unsplash.jpg', 'https://housemania.s3-us-west-1.amazonaws.com/timothy-buck-psrloDbaZc8-unsplash.jpg', 'https://housemania.s3-us-west-1.amazonaws.com/travel-cents-WYLuNY5JG4E-unsplash.jpg'];

  for (let id=1; id <= 100; id++) {
    let nearby = [];
    for (var i = 0; i < 12; i++) {
      let location = faker.address.city();
      let type = faker.lorem.words(1);
      let title = faker.lorem.words(4);
      let cost = faker.random.number({
        'min': 60,
        'max': 800
      });
      let reviewCount = faker.random.number({
        'min': 0,
        'max': 600
      });
      let stars = faker.random.number({
        'min': 3,
        'max': 5
      });
      let nearId = faker.random.number({
        'min': 0,
        'max': 100
      });
      let num = faker.random.number({
        'min': 0,
        'max': 16
      })
      var obj = {
        "nearId": nearId,
        "imgUrl": imgArr[num],
        'location': location,
        'type': type,
        'title': title,
        'cost': `$${cost}/night`,
        'stars': stars,
        'reviewCount': reviewCount
      }
      nearby.push(obj);
    }


    users.push({
        "id": id,
        "nearby": nearby
    });
  }
  return users;
}

let dataObj = generateUsers();
// console.log(dataObj);

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));
