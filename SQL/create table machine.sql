create table machine (
  id INT(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  create_at timestamp NOT NULL DEFAULT 0,
  update_at timestamp NOT NULL on update current_timestamp,
  PRIMARY KEY (id)
)