CREATE TABLE `music_platform`.`app_teachers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `instrument` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO APP_TEACHERS(first_name, last_name, instrument)
VALUES ("Lelos", "Kapanelos", "violin");

INSERT INTO APP_TEACHERS(first_name, last_name, instrument)
VALUES ("May", "Jason", "piano");

INSERT INTO APP_TEACHERS(first_name, last_name, instrument)
VALUES ("Jordan", "Peters", "drums");

INSERT INTO APP_TEACHERS(first_name, last_name, instrument)
VALUES ("Helen", "Kroft", "guitar");

INSERT INTO APP_TEACHERS(first_name, last_name, instrument)
VALUES ("Lilian", "Papa", "Music theory");

INSERT INTO APP_TEACHERS(first_name, last_name, instrument)
VALUES ("Paul", "de Roos", "saxophone");

