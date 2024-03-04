DROP TABLE IF EXISTS `applicants`;

CREATE TABLE `applicants` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `dni` varchar(10) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phoneNumber` varchar(10) NOT NULL,
  `urlLinkedin` varchar(250) NOT NULL,
  `birthdate` date NOT NULL,
  `gender_id` int(10) unsigned NOT NULL,
  `photo` varchar(400) DEFAULT 'defaultAvatar.png',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`),
  UNIQUE KEY `email` (`email`),
  KEY `gender_id` (`gender_id`),
  FOREIGN KEY (`gender_id`) REFERENCES `genders` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) 

DROP TABLE IF EXISTS `professions`;

CREATE TABLE `professions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) 

DROP TABLE IF EXISTS `genders`;

CREATE TABLE `genders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) 

DROP TABLE IF EXISTS `applicant_profession`;

CREATE TABLE `applicant_profession` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `applicant_id` int(10) unsigned NOT NULL,
  `profession_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `applicant_id` (`applicant_id`),
  KEY `profession_id` (`profession_id`),
  FOREIGN KEY (`applicant_id`) REFERENCES `applicants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`profession_id`) REFERENCES `professions` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) 