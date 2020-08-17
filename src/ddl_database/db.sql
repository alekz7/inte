-- DATA DEFINITION LANGUAGE FOR THE DATABASE 
-- hosted in clever cloud

DROP SCHEMA IF EXISTS restaurant;
CREATE SCHEMA restaurant;
USE restaurant;

CREATE TABLE Restaurants (
  id VARCHAR(50) NOT NULL, -- Unique Identifier of Restaurant
  rating SMALLINT UNSIGNED NOT NULL, -- Number between 0 and 4
  name VARCHAR(50) DEFAULT NULL, -- Name of the restaurant
  site VARCHAR(50) NOT NULL, -- Url of the restaurant
  email VARCHAR(20) NOT NULL,  
  phone VARCHAR(20) NOT NULL,
  street VARCHAR(20) NOT NULL,
  city VARCHAR(30) NOT NULL,
  state VARCHAR(30) NOT NULL,
  lat DECIMAL(10,8) NOT NULL,
  lng DECIMAL(11,8) NOT NULL,) -- Longitude
  last_update TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (id),
  KEY idx_fk_restaurants_id (id),  
);

CREATE TABLE Users(
  id INT(11) SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  username VARCHAR(16) NOT NULL,
  password VARCHAR(60) NOT NULL,
  fullname VARCHAR(100) NOT NULL,
  last_update TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (id),
  KEY idx_users_username (username)
);