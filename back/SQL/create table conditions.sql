create table conditions (
  id INT(11) AUTO_INCREMENT NOT NULL,
  machine_id INT(11) NOT NULL,
  temp FLOAT(6,3) NOT NULL,
  water_temp FLOAT(6,3),
  create_at timestamp NOT NULL,
  PRIMARY KEY (id)
)