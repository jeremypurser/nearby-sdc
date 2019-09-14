CREATE TABLE houses (
  imgUrl VARCHAR(15),
  location VARCHAR(25),
  type VARCHAR(20),
  title VARCHAR(45),
  cost SMALLINT,
  stars SMALLINT,
  reviewCount SMALLINT
);

CREATE TABLE near (
  id SERIAL PRIMARY KEY,
  houses INT []
);