
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `createdAt` DATETIME NOT NULL, 
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
SET FOREIGN_KEY_CHECKS = 1;