DROP TABLE IF EXISTS aiimg;

CREATE TABLE aiimg (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  token TEXT,
  image TEXT,
  description TEXT
);
