Travail sur une base créée en mySQL

Voici les scripts :

Pour la table : 
Eleve
 ID
 Nom
 Prenom

 Il faut d'abord créer le schéma mesnotes.

CREATE TABLE `Personne` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(255) NOT NULL,
  `Prenom` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Table mère de toute personne';


CREATE TABLE mesnotes.Eleve (
   Id INT NOT NULL AUTO_INCREMENT,
   PersonneId INT NOT NULL COMMENT 'Héritage des informations de la table parente',
  CONSTRAINT Personne_Eleve FOREIGN KEY (PersonneId) REFERENCES mesnotes.Personne (Id) ON UPDATE RESTRICT ON DELETE RESTRICT,
  PRIMARY KEY (Id, PersonneId)
) ENGINE = InnoDB COMMENT = 'Table gérant les élèves' ROW_FORMAT = DEFAULT;


DELETE FROM Eleve;
DELETE FROM Personne;

INSERT INTO mesnotes.Personne
(Nom, Prenom) 
VALUES ('SEE', 'Sharp');

INSERT INTO mesnotes.Eleve
(PersonneId) 
SELECT LAST_INSERT_ID();


INSERT INTO mesnotes.Personne
(Nom, Prenom) 
VALUES ('NODE', 'Js');

INSERT INTO mesnotes.Eleve
(PersonneId) 
SELECT LAST_INSERT_ID();

