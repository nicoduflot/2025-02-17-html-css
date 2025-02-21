-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 21 fév. 2025 à 15:56
-- Version du serveur : 9.1.0
-- Version de PHP : 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `php-avance`
--

-- --------------------------------------------------------

--
-- Structure de la table `jeux_video`
--

DROP TABLE IF EXISTS `jeux_video`;
CREATE TABLE IF NOT EXISTS `jeux_video` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `possesseur` varchar(255) NOT NULL,
  `console` varchar(255) NOT NULL,
  `prix` double NOT NULL DEFAULT '0',
  `nbre_joueurs_max` int NOT NULL DEFAULT '0',
  `commentaires` text NOT NULL,
  `date_ajout` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_modif` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `ID` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `jeux_video`
--

INSERT INTO `jeux_video` (`id`, `nom`, `possesseur`, `console`, `prix`, `nbre_joueurs_max`, `commentaires`, `date_ajout`, `date_modif`) VALUES
(1, 'Super Mario Bros', 'Florent', 'NES', 4, 1, 'Un jeu d\'anthologie !', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(2, 'Sonic', 'Patrick', 'Megadrive', 2, 1, 'Pour moi, le meilleur jeu du monde !', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(4, 'Mario Kart 64', 'Florent', 'Nintendo 64', 25, 4, 'Un excellent jeu de kart !', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(5, 'Super Smash Bros Melee', 'Michel', 'GameCube', 55, 4, 'Un jeu de baston délirant !', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(6, 'Dead or Alive', 'Patrick', 'Xbox', 60, 4, 'Le plus beau jeu de baston jamais créé', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(7, 'Dead or Alive Xtreme Beach Volley Ball', 'Patrick', 'Xbox', 60, 4, 'Un jeu de beach volley de toute beauté o_O', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(8, 'Enter the Matrix', 'Michel', 'PC', 45, 1, 'Plutôt bof comme jeu, mais ça complète bien le film', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(9, 'Max Payne 2', 'Michel', 'PC', 50, 1, 'Très réaliste, une sorte de film noir sur fond d\'histoire d\'amour. A essayer !', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(10, 'Yoshi\'s Island', 'Florent', 'SuperNES', 6, 1, 'Le paradis des Yoshis :o)', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(11, 'Commandos 3', 'Florent', 'PC', 44, 12, 'Un bon jeu d\'action où on dirige un commando pendant la 2ème guerre mondiale !', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(13, 'Pokemon Rubis', 'Florent', 'GBA', 44, 4, 'Pika-Pika-chu !!!', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(14, 'Starcraft', 'Michel', 'PC', 19, 8, 'Le meilleur jeux pc de tout les temps !', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(15, 'Grand Theft Auto 3', 'Michel', 'PS2', 30, 1, 'Comme dans les autres Gta on ecrase tout le monde :) .', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(16, 'Homeworld 2', 'Michel', 'PC', 45, 6, 'Superbe ! o_O', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(17, 'Aladin', 'Patrick', 'SuperNES', 10, 1, 'Comme le dessin Animé !', '2020-11-19 10:24:00', '2023-06-13 13:45:26'),
(18, 'Super Mario Bros 3', 'Michel', 'SuperNES', 10, 2, 'Le meilleur Mario selon moi.', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(19, 'SSX 3', 'Florent', 'Xbox', 56, 2, 'Un très bon jeu de snow !', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(20, 'Star Wars : Jedi outcast', 'Patrick', 'Xbox', 33, 1, 'Encore un jeu sur star-wars où on se prend pour Luke Skywalker !', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(22, 'Time Crisis 3', 'Florent', 'PS2', 40, 1, 'Un troisième volet efficace mais pas vraiment surprenant', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(23, 'X-FILES', 'Patrick', 'PS', 25, 1, 'Un jeu censé ressembler a la série mais assez raté ...', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(24, 'Soul Calibur 2', 'Patrick', 'Xbox', 54, 1, 'Un jeu bien axé sur le combat', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(26, 'Street Fighter 2', 'Patrick', 'Megadrive', 10, 2, 'Le célèbre jeu de combat !', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(27, 'Gundam Battle Assault 2', 'Florent', 'PS', 29, 1, 'Jeu japonais dont le gameplay est un peu limité. Peu de robots malheureusement', '2020-11-19 10:24:00', '2024-04-05 10:11:52'),
(28, 'Spider-Man', 'Florent', 'Megadrive', 15, 1, 'Vivez l\'aventure de l\'homme araignée', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(29, 'Midtown Madness 3', 'Michel', 'Xbox', 59, 6, 'Dans la suite des autres versions de Midtown Madness', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(30, 'Tetris', 'Florent', 'Gameboy', 5, 1, 'Qui ne connait pas ? ', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(31, 'The Rocketeer', 'Michel', 'NES', 2, 1, 'Un super un film et un jeu de m*rde ...', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(32, 'Pro Evolution Soccer 3', 'Patrick', 'PS2', 59, 2, 'Un petit jeu de foot sur PS2', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(33, 'Ice Hockey', 'Michel', 'NES', 7, 2, 'Jamais joué mais a mon avis ca parle de hockey sur glace ... =)', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(34, 'Sydney 2000', 'Florent', 'Dreamcast', 15, 2, 'Les JO de Sydney dans votre salon !', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(35, 'NBA 2k', 'Patrick', 'Dreamcast', 12, 2, 'A votre avis :p ?', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(36, 'Aliens Versus Predator : Extinction', 'Michel', 'PS2', 20, 2, 'Un shoot\'em up pour pc', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(37, 'Crazy Taxi', 'Florent', 'Dreamcast', 11, 1, 'Conduite de taxi en folie !', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(39, 'FIFA 64', 'Michel', 'Nintendo 64', 25, 2, 'Le premier jeu de foot sur la N64 =) !', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(40, 'Qui Veut Gagner Des Millions', 'Florent', 'PS2', 10, 1, 'Le jeu de l\'émission', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(41, 'Monopoly', 'Sebastien', 'Nintendo 64', 21, 4, 'Bheuuu le monopoly sur N64 !', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(42, 'Taxi 3', 'Corentin', 'PS2', 19, 4, 'Un jeu de voiture sur le film', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(43, 'Indiana Jones Et Le Tombeau De L\'Empereur', 'Florent', 'PS2', 25, 1, 'Notre aventurier préféré est de retour !!!', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(44, 'F-ZERO', 'Mathieu', 'GBA', 25, 4, 'Un super jeu de course futuriste !', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(45, 'Harry Potter Et La Chambre Des Secrets', 'Mathieu', 'Xbox', 30, 1, 'Abracadabra !! Le célebre magicien est de retour !', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(46, 'Half-Life', 'Corentin', 'PC', 15, 32, 'L\'autre meilleur jeu de tout les temps (surtout ses mods).', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(47, 'Myst III Exile', 'Sébastien', 'Xbox', 49, 1, 'Un jeu de réflexion', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(48, 'Wario World', 'Sebastien', 'Gamecube', 40, 4, 'Wario vs Mario ! Qui gagnera ! ?', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(49, 'Rollercoaster Tycoon', 'Florent', 'Xbox', 29, 1, 'Jeu de gestion d\'un parc d\'attraction', '2020-11-19 10:24:00', '2020-11-19 10:24:00'),
(50, 'Splinter Cell', 'Patrick', 'Xbox', 53, 1, 'Jeu magnifique !', '2020-11-19 10:24:00', '2020-11-19 10:24:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
