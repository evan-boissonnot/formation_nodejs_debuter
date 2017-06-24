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

CREATE TABLE `Cours` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Table des cours';

CREATE TABLE mesnotes.Note (
   Id INT AUTO_INCREMENT NOT NULL,
   DateCreation DATETIME NOT NULL COMMENT 'Date de création',
   Valeur DECIMAL(10,2) NOT NULL COMMENT 'Valeur de la note',
   EleveId INT NOT NULL COMMENT 'Id de l\'élève',
   CoursId INT NOT NULL COMMENT 'Id du cours concerné',
  CONSTRAINT Cours_Note FOREIGN KEY (CoursId) REFERENCES mesnotes.Cours (Id) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT Eleve_Note FOREIGN KEY (EleveId) REFERENCES mesnotes.Eleve (Id) ON UPDATE RESTRICT ON DELETE RESTRICT,
  PRIMARY KEY (Id)
) ENGINE = InnoDB COMMENT = 'Table des notes d\'un élève' ROW_FORMAT = DEFAULT;

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

delete from mesnotes.Note;
delete from mesnotes.Cours;

-- INSERTION DES COURS
INSERT INTO mesnotes.Cours
(Nom)
VALUES ('Réseau');

INSERT INTO mesnotes.Cours
(Nom)
VALUES ('Développement');

-- INSERTION DES NOTES --
INSERT INTO mesnotes.Note
(DateCreation, Valeur, EleveId, CoursId) 
select NOW(), FLOOR(1 + (RAND() * 19)), Eleve.Id, Cours.Id
FROM Eleve
join Cours on 1=1;



Pour vérifier :
select 
  CONCAT(Personne.Nom, ' ', Personne.Prenom),
  Cours.Nom,
  Note.Valeur
from Eleve
join Personne on Eleve.PersonneId = Personne.Id
join Note on Note.EleveId = Eleve.Id
join Cours ON Cours.Id = Note.CoursId
order by Personne.Nom, Personne.Prenom





