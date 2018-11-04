DROP DATABASE IF EXISTS pace_db;

DROP USER IF EXISTS pace_db_user;

CREATE USER pace_db_user WITH ENCRYPTED PASSWORD 'password';

CREATE DATABASE pace_db WITH OWNER 'pace_db_user';