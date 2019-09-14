CREATE KEYSPACE housemania
  WITH REPLICATION = {
    'class': 'SimpleStrategy',
    'replication_factor': 1
  };

CREATE COLUMNFAMILY houses(
  id int PRIMARY KEY,
  imgUrl text,
  location text,
  type text,
  title text,
  cost varint,
  stars varint,
  reviewCount varint
);

COPY houses(id, imgUrl, location, type, title, cost, stars, reviewCount) \
    FROM '~/Documents/Hack Reactor/sdc/nearby-service/data/nearbyData1.tsv' \
    WITH DELIMITER='\t'

CREATE COLUMNFAMILY near(
  id int PRIMARY KEY,
  houses set<int>
);

COPY near(id, houses) FROM '~/Documents/Hack Reactor/sdc/nearby-service/data/nearJoin1.tsv' WITH DELIMITER='\t';