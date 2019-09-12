CREATE TABLE houses (
  ID SERIAL PRIMARY KEY,
  imgUrl VARCHAR(70),
  location VARCHAR(30),
  type VARCHAR(20),
  title VARCHAR(30),
  cost SMALLINT,
  stars SMALLINT,
  reviewCount SMALLINT
);