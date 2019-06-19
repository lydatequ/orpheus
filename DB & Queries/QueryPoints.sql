CREATE TABLE `app_points` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO APP_POINTS(user_id, points)
VALUES ('1', '100');

INSERT INTO APP_POINTS(user_id, points)
VALUES ('2', '100');

INSERT INTO APP_POINTS(user_id, points)
VALUES ('4', '100');

INSERT INTO APP_POINTS(user_id, points)
VALUES ('5', '100');

INSERT INTO APP_POINTS(user_id, points)
VALUES ('6', '100');

INSERT INTO APP_POINTS(user_id, points)
VALUES ('7', '100');

INSERT INTO APP_POINTS(user_id, points)
VALUES ('8', '100');

INSERT INTO APP_POINTS(user_id, points)
VALUES ('10', '100');

INSERT INTO APP_POINTS(user_id, points)
VALUES ('11', '100');

INSERT INTO APP_POINTS(user_id, points)
VALUES ('12', '100');

INSERT INTO APP_POINTS(user_id, points)
VALUES ('15', '100');