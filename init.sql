


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table lehrer
# ------------------------------------------------------------

DROP TABLE IF EXISTS `lehrer`;

CREATE TABLE `lehrer` (
  `id` int(11) NOT NULL,
  `vname` varchar(16) NOT NULL,
  `nname` varchar(32) DEFAULT NULL,
  `kuerzel` varchar(4) NOT NULL,
  `email` varchar(64) NOT NULL,
  `geschlecht` varchar(16) NOT NULL,
  `foto` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `kuerzel` (`kuerzel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

LOCK TABLES `lehrer` WRITE;
/*!40000 ALTER TABLE `lehrer` DISABLE KEYS */;

INSERT INTO `lehrer` (`id`, `vname`, `nname`, `kuerzel`, `email`, `geschlecht`, `foto`) VALUES
	(1, 'Veronika', 'Schippani', 'schi', 'schi@HTL-Donaustadt.at', 'Weiblich', 'https://api.susnext.com/schi.jpg');

/*!40000 ALTER TABLE `lehrer` ENABLE KEYS */;
UNLOCK TABLES;



# Dump of table personal
# ------------------------------------------------------------

DROP TABLE IF EXISTS `personal`;

CREATE TABLE `personal` (
  `id` int(6) NOT NULL,
  `kid` int(6) DEFAULT NULL,
  `email` varchar(64) NOT NULL,
  `vname` varchar(16) NOT NULL,
  `nname` varchar(16) NOT NULL,
  `geschlecht` varchar(16) NOT NULL,
  `gebdat` date NOT NULL,
  `gewicht` int(11) NOT NULL,
  `groesse` int(11) NOT NULL,
  `os` varchar(16) NOT NULL,
  `anzahlsport` int(11) NOT NULL,
  `raucher` tinyint(1) NOT NULL,
  `alkie` tinyint(1) NOT NULL,
  `lfach` varchar(4) NOT NULL,
  `bwunsch` varchar(64) NOT NULL,
  `itwissen` varchar(1024) NOT NULL,
  `sazeit` int(3) NOT NULL,
  `sprachen` int(2) NOT NULL,
  `anzProg` int(2) NOT NULL,
  `mediennutzung` int(2) NOT NULL,
  `biografie` varchar(1024) NOT NULL,
  `foto` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `kid` (`kid`),
  CONSTRAINT `personal_ibfk_1` FOREIGN KEY (`kid`) REFERENCES `klasse` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

LOCK TABLES `personal` WRITE;
/*!40000 ALTER TABLE `personal` DISABLE KEYS */;

INSERT INTO `personal` (`id`, `kid`, `email`, `vname`, `nname`, `geschlecht`, `gebdat`, `gewicht`, `groesse`, `os`, `anzahlsport`, `raucher`, `alkie`, `lfach`, `bwunsch`, `itwissen`, `sazeit`, `sprachen`, `anzProg`, `mediennutzung`, `biografie`, `foto`) VALUES
	(160502, 1, '160502@studierende.htl-donaustadt.at', 'Alexander', 'Mayerhofer', 'Männlich', '2003-08-03', 60, 175, 'Windows', 4, 1, 0, 'BSPK', 'Netzwerktechniker?', 'Hab kein Wissen', 55, 3, 1, 3, 'Ihr kennt mich eh ', 'https://api.susnext.com/160502.png'),
	(180185, 1, '180185@studierende.htl-donaustadt.at', 'Tim', 'Altmann', 'Männlich', '2004-06-10', 87, 183, 'Windows', 6, 1, 1, 'BSPK', 'Netzwerktechniker', 'Ich kann pornhub aus meinen cookies löschen', 35, 2, 1, 3, 'Ich bin Tim ich bin 18 Jahre alt und ich bin der Sportlichste Raucher und Alkoholiker den ihr kennt. Schnorr mir Tschick und Snus und ich bin auf deiner Seite.', 'https://api.susnext.com/180185.png'),
	(180191, 1, '180191@studierende.htl-donaustadt.at', 'Umut', 'Sakar', 'Männlich', '2003-02-21', 93, 178, 'Windows', 2, 0, 0, 'WIR3', 'Netzwerkadministrator', 'gibts nicht', 35, 3, 1, 8, 'Ich bin ein ehemaliger Top 30.000 Spieler in Europa in dem First-Person-Shooter Valorant. Ich hab eine Leidenschaft für japanisch/koreanische Manga und Anime entdeckt und ich mag Züge', 'https://api.susnext.com/180191.png'),
	(180194, 1, '180194@studierende.htl-donaustadt.at', 'Philipp', 'Vollmann', 'Männlich', '2004-02-11', 93, 188, 'MacOS', 1, 0, 0, 'WIR3', 'Lokführer', 'Handyerkennung', 110, 2, 4, 9, 'Mein Lebensmotto: immer die Erwartungen unten halten dann kann man nicht enttäuscht werden. Und man sollte andere überraschen. Daran halte ich mich', 'https://api.susnext.com/180194.png'),
	(190181, 1, '190181@studierende.htl-donaustadt.at', 'Florian', 'Hedrich', 'Männlich', '2003-06-11', 81, 172, 'Windows', 1, 1, 1, 'WIR3', 'System-Administrator', 'Server', 15, 2, 6, 4, 'Hey, ich programmiere seit dem ich 13 Jahre alt bin und versuche aktuell nur durch die HTL Lebend zu kommen', 'https://api.susnext.com/190181.png'),
	(190182, 1, '190182@studierende.htl-donaustadt.at', 'Michael', 'Samarati', 'Männlich', '2005-06-03', 62, 180, 'Windows', 1, 0, 0, 'ITP2', 'Dev', 'Fullstack', 16, 3, 1, 7, 'Keine Biografie :(', 'https://api.susnext.com/190182.png'),
	(190187, 1, 'luka.ramljak0@gmail.com', 'Luka', 'Ramljak', 'Männlich', '2005-01-06', 105, 187, 'Windows', 4, 0, 0, 'GGP', 'IT-Support/CyberSecruity Spezialist', 'ZIVKs Unterricht vor allem 1. Semester', 30, 4, 0, 2, 'Luka \"\"Rammeljack\"\" Ramljak ist ein joa Schüler in der HTL Donaustadt. Er ist der Grund warum man jeden 26. März den \"\"Luka-Day\"\" feiert nachdem er im Teams-Meeting der heiligen Frau Professor Bauer jede Frage beantwortet hat. Neben seinen eigenen Feiertag ist der 18 Jähriger für sein größtes Lebenswerk, ein Video mit dem Titel \"\"brauni abi Interview\"\", bekannt. Das Leben von Luka endete leider tragisch am 15. Mai 2023 als er vergessen hat bei der Mathe Schularbeit in GeoGebra TaylorReihe(Ausdruck,Wert,Grad) zu verwenden.', 'https://api.susnext.com/190187.png'),
	(190189, 1, '190189@studierende.htl-donaustadt.at', 'Philipp', 'Lueger', 'Männlich', '2005-01-21', 110, 195, 'MacOS', 2, 0, 1, 'SEW', 'Systemadministration', 'Windows Server (AD), Java SEW', 70, 2, 3, 2, 'Nerdy McNetwork wurde mit einer Leidenschaft für Technologie geboren. Er war von klein auf fasziniert von Computern und wusste, dass er eines Tages ein Meister des Internets werden würde. Seine Begeisterung für Netzwerktechnik führte ihn schließlich dazu, ein Studium in diesem Bereich zu beginnen. ~ChatGPT3', 'https://api.susnext.com/190189.png'),
	(190191, 1, '190191@studierende.htl-donaustadt.at', 'Viktor', 'Trojan', 'Männlich', '2003-05-11', 69, 170, 'Windows', 6, 0, 0, 'SEW', 'Programmierer', 'SEW', 30, 3, 9, 2, 'Ich liebe Programmieren und Calisthenics. Ich programmiere seit ich fünf Jahre alt bin und beherrsche jetzt auch Calisthenics-√úbungen wie Klimmzüge, Liegestütze und Handstandübungen. Ich bleibe fit und treibe meine Programmierprojekte gleichzeitig voran.', 'https://api.susnext.com/190191.png'),
	(190197, 1, 'spqm@og-hosting.com', 'Michael', 'Falk', 'Männlich', '2004-10-23', 80, 190, 'Linux', 3, 0, 1, 'AM', 'Sklaventreiber', 'Alles', 60, 3, 1, 0, 'Der heftigste Typ den es jemals gab', 'https://api.susnext.com/190197.png'),
	(190198, 1, '190198@studierende.htl-donaustadt.at', 'Stefan', 'Milojkovic', 'Männlich', '2005-04-01', 90, 169, 'Windows', 7, 0, 0, 'E', 'Cybersecurity / Administrator', 'Netzwerktechnik', 30, 4, 1, 5, 'Sehr geehrte ANGEhende, Mein Name ist Stefan Milojkovic und bin Schüler der HTL-Donaustadt.', 'https://api.susnext.com/190198.png'),
	(190199, 1, '190199@studierende.htl-donaustadt.at', 'Josip', 'Benkovic', 'Männlich', '2004-06-09', 66, 185, 'Windows', 3, 0, 1, 'BSPK', 'keiner', 'Datenbanken', 30, 3, 1, 2, 'Ich mag Züge', 'https://api.susnext.com/190199.png'),
	(190202, 1, '190202@studierende.htl-donaustadt.at', 'Alexander', 'Pauer', 'Männlich', '2005-04-06', 68, 168, 'Windows', 2, 0, 0, 'NWT1', 'Netzwerktechniker', 'Netzwerktechnik', 45, 2, 3, 4, 'Hallo,ich bin Alexander Pauer und bin seit 2019 Schüler an der HTL-Donaustadt. Kollegen beschreiben mich als kollegial und freundlich. Des Woas! Pfiat di!', 'https://api.susnext.com/190202.png'),
	(190205, 1, '190205@studierende.htl-donaustadt.at', 'Noel', 'Groiß', 'Männlich', '2004-08-01', 92, 186, 'Windows', 4, 0, 1, 'BSPK', 'Netzwerktechniker', '/', 10, 2, 1, 6, 'Ich habe leider keine Biografie :(', 'https://api.susnext.com/190205.png'),
	(190222, 1, '190222@studierende.htl-donaustadt.at', 'Linda', 'Yusupova', 'Weiblich', '2003-12-31', 90, 2, 'Windows', 3, 0, 0, 'D', 'Keine Ahnung', 'keins', 35, 4, 1, 6, 'Linda studiert Netzwerktechnik. Sie hat gelernt, wie man die kompliziertesten Netzwerke einrichtet und überwacht, aber wenn es darum geht, ihr eigenes Handy mit dem WLAN zu verbinden, braucht sie immer noch Hilfe von ihrem kleinen Bruder. Wenn sie nicht gerade damit beschäftigt ist, Netzwerke zu optimieren, spielt Linda gerne Basketball oder macht Yoga. Sie ist auch bekannt dafür, die besten spezial Brownies in der Studentenwohnung zu backen und hofft, dass sie eines Tages eine Karriere als professionelle Brownie-Bäckerin einschlagen kann.', 'https://api.susnext.com/190222.png'),
	(190226, 1, '190226@studierende.htl-donaustadt.at', 'Roberto', 'Ghiriti', 'Männlich', '2005-04-13', 80, 187, 'Windows', 5, 0, 0, 'WIR3', 'Softwareentwickler ', 'Client-Server', 40, 3, 4, 2, 'Ich klaue gerne und betreibe gerne GYM', 'https://api.susnext.com/190226.png'),
	(190251, 1, '190251@studierende.htl-donaustadt.at', 'Zerda', 'Cakir', 'Weiblich', '2005-05-03', 58, 167, 'MacOS', 0, 0, 0, 'AM', 'arbeitslos', '0', 20, 3, 2, 9, 'ich bin lustig genug ohne eine biografie', 'https://api.susnext.com/190251.png'),
	(190252, 1, '190252@studierende.htl-donaustadt.at', 'Salih', 'Bilgin', 'Männlich', '2004-11-17', 80, 180, 'MacOS', 3, 0, 0, 'AM', 'IT-Security', 'mir fällt grad nichts ein', 30, 3, 3, 3, 'einfach ein MACHER', 'https://api.susnext.com/190252.png'),
	(190282, 1, 'tarikcan201@gmail.com', 'Tarik', 'Akpinar', 'Männlich', '2004-10-04', 75, 184, 'Windows', 3, 0, 0, 'ITP2', 'Nw techniker', 'ka', 120, 3, 2, 8, 'ka', 'https://api.susnext.com/190282.png'),
	(190296, 1, 'nagi.ibrahim2004@gmail.com', 'Nagi', 'Ibrahim', 'Männlich', '2004-03-30', 76, 187, 'Windows', 1, 1, 0, 'WIR2', 'Arbeitslos ', 'Netzwerke ', 50, 3, 1, 2, 'Mein Name ist Nagi und mein Land liegt unter Trümmern.', 'https://api.susnext.com/190296.png'),
	(190312, 1, 'lukas.milicic1220@gmail.com', 'Lukas', 'Milicic', 'Männlich', '2005-04-27', 90, 185, 'Windows', 1, 0, 0, 'E', 'Angemayer in 20 Jahren sein', 'Angemayer', 20, 3, 1, 4, 'Ziellose Hüller und Sklave der HTL-Donaustadt', 'https://api.susnext.com/190312.png'),
	(190315, 1, '190315@studierende.htl-donaustadt.at', 'Taisir', 'Khalifa', 'Weiblich', '2004-12-12', 60, 164, 'Windows', 0, 0, 0, 'NW2 ', 'kA', 'Nix besonderes', 15, 3, 0, 3, 'Ich bin 18 Jahre alt. Selbstbewusst und Extrovertiert.', 'https://api.susnext.com/190315.png'),
	(210431, 1, 'hatidza.begagic@gmail.com', 'Hatidza', 'Begagic', 'Weiblich', '2003-01-21', 69, 168, 'Windows', 2, 1, 0, 'WIR3', 'reicher Immobilienhai ', 'Audiobearbeitung ', 50, 3, 2, 2, 'als Kind wurde ich 3 Mal an meinem ersten Geburtstag in die Luft geworfen, 2 Mal auch aufgefangen.', 'https://api.susnext.com/210431.png');

/*!40000 ALTER TABLE `personal` ENABLE KEYS */;
UNLOCK TABLES;



# Dump of table hobby
# ------------------------------------------------------------

DROP TABLE IF EXISTS `hobby`;

CREATE TABLE `hobby` (
  `id` int(11) NOT NULL,
  `hobby` varchar(32) NOT NULL,
  KEY `id` (`id`),
  CONSTRAINT `hobby_ibfk_1` FOREIGN KEY (`id`) REFERENCES `personal` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

LOCK TABLES `hobby` WRITE;
/*!40000 ALTER TABLE `hobby` DISABLE KEYS */;

INSERT INTO `hobby` (`id`, `hobby`) VALUES
	(190226, 'Programmieren'),
	(190226, 'GYM'),
	(190226, 'klauen'),
	(190189, 'Systemadministration'),
	(190189, 'trinken gehen'),
	(190199, 'Fußball'),
	(190199, 'Serien schauen'),
	(180191, 'zocken'),
	(180191, 'Mangas lesen'),
	(180185, 'Videos drehen'),
	(180185, 'Fußball'),
	(180185, 'Kraftsport'),
	(180185, 'raus gehen'),
	(190187, 'Cyber Security'),
	(190187, 'Fitinn'),
	(190187, 'Fußball'),
	(190187, 'Gaming'),
	(190202, 'Netzwerkaufbau'),
	(190202, 'Cybersecurity'),
	(190202, 'Sport'),
	(190282, 'Hobbylos'),
	(190198, 'Basketball'),
	(190296, 'Passwörter missbrauchen'),
	(190296, 'GYM'),
	(190182, 'Web - Dev'),
	(190182, 'nachdenken'),
	(190312, 'Angermayer'),
	(190312, 'Gaming'),
	(190312, 'Volleyball'),
	(190312, 'zeichnen'),
	(190205, 'Sport'),
	(190252, 'programmieren'),
	(190252, 'Autos'),
	(190252, 'Fußball'),
	(180194, 'Controller reparieren'),
	(180194, 'herumschrauben'),
	(180194, 'Sportschutz'),
	(160502, 'Computerspielen'),
	(190181, 'Programmieren'),
	(190181, 'Spieleentwicklung'),
	(190181, 'kochen'),
	(190181, '3D - Modeling'),
	(190197, 'Netzwerktechnik'),
	(190197, 'Menschen jagen (Airsoft)'),
	(190191, 'Programmieren'),
	(190191, 'Bilder bearbeiten'),
	(190191, 'Cyber Security Calisthenics'),
	(190315, 'malen'),
	(190315, 'backen'),
	(190251, 'Netflix'),
	(190251, 'Volleyball'),
	(190222, 'Sport'),
	(210431, 'Lesen'),
	(210431, 'Medientechnik');

/*!40000 ALTER TABLE `hobby` ENABLE KEYS */;
UNLOCK TABLES;



# Dump of table nationalitaet
# ------------------------------------------------------------

DROP TABLE IF EXISTS `nationalitaet`;

CREATE TABLE `nationalitaet` (
  `id` int(11) NOT NULL,
  `Nationalitaet` varchar(32) NOT NULL,
  KEY `id` (`id`),
  CONSTRAINT `nationalitaet_ibfk_1` FOREIGN KEY (`id`) REFERENCES `personal` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

LOCK TABLES `nationalitaet` WRITE;
/*!40000 ALTER TABLE `nationalitaet` DISABLE KEYS */;

INSERT INTO `nationalitaet` (`id`, `Nationalitaet`) VALUES
	(190226, 'Rumänien'),
	(190226, 'Österreich'),
	(190189, 'Österreich'),
	(190199, 'Kroatien'),
	(180191, 'Österreich'),
	(180185, 'Österreich'),
	(190187, 'Kroatien'),
	(190202, 'Österreich'),
	(190282, 'Türkei'),
	(190198, 'Österreich'),
	(190296, 'Syrien'),
	(190182, 'Österreich'),
	(190312, 'Österreich'),
	(190205, 'Österreich'),
	(190252, 'Österreich'),
	(180194, 'Österreich'),
	(160502, 'Österreich'),
	(160502, 'Russland'),
	(190181, 'Österreich'),
	(190197, 'Pakistan'),
	(190191, 'Österreich'),
	(190315, 'Österreich'),
	(190251, 'Kurdistan'),
	(190222, 'Österreich'),
	(210431, 'Österreich'),
	(210431, 'Bosnien');

/*!40000 ALTER TABLE `nationalitaet` ENABLE KEYS */;
UNLOCK TABLES;



# Dump of table klasse
# ------------------------------------------------------------

DROP TABLE IF EXISTS `klasse`;

CREATE TABLE `klasse` (
  `id` int(11) NOT NULL,
  `kv` int(11) NOT NULL,
  `name` varchar(8) NOT NULL,
  `room` varchar(255) DEFAULT NULL,
  `countStudent` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `kv` (`kv`),
  UNIQUE KEY `name` (`name`),
  CONSTRAINT `klasse_ibfk_1` FOREIGN KEY (`kv`) REFERENCES `lehrer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

LOCK TABLES `klasse` WRITE;
/*!40000 ALTER TABLE `klasse` DISABLE KEYS */;

INSERT INTO `klasse` (`id`, `kv`, `name`, `room`, `countStudent`) VALUES
	(1, 1, '4AHITN', 'N303', 23);

/*!40000 ALTER TABLE `klasse` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

