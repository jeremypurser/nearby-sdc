CREATE TABLE houses (
  id SERIAL PRIMARY KEY,
  imgUrl VARCHAR(15),
  location VARCHAR(25),
  type VARCHAR(20),
  title VARCHAR(45),
  cost SMALLINT,
  stars SMALLINT,
  reviewCount SMALLINT
);

CREATE TABLE rentals (
  id SERIAL PRIMARY KEY,
  imgUrl VARCHAR(15),
  location VARCHAR(25),
  type VARCHAR(20),
  title VARCHAR(45),
  cost SMALLINT,
  stars SMALLINT,
  reviewCount SMALLINT,
  zip INT
);

CREATE TABLE near (
  id SERIAL PRIMARY KEY,
  houses INT []
);

CREATE TABLE near (
  id SERIAL PRIMARY KEY,
  houses nearbyhouses
);

CREATE TABLE proximity (
  id SERIAL PRIMARY KEY,
  house1 INT,
  house2 INT
);