-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- Machine: localhost
-- Genereertijd: 19 jun 2012 om 20:13
-- Serverversie: 5.5.20
-- PHP-Versie: 5.3.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hertogin`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `ci_sessions`
--

CREATE TABLE IF NOT EXISTS `ci_sessions` (
  `session_id` varchar(40) COLLATE utf8_bin NOT NULL DEFAULT '0',
  `ip_address` varchar(16) COLLATE utf8_bin NOT NULL DEFAULT '0',
  `user_agent` varchar(150) COLLATE utf8_bin NOT NULL,
  `last_activity` int(10) unsigned NOT NULL DEFAULT '0',
  `user_data` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Gegevens worden uitgevoerd voor tabel `ci_sessions`
--

INSERT INTO `ci_sessions` (`session_id`, `ip_address`, `user_agent`, `last_activity`, `user_data`) VALUES
('ab856f55c277ee69e3e850aca54dd696', '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.56 Safari/536.5', 1340119911, 'a:4:{s:9:"user_data";s:0:"";s:7:"user_id";s:1:"1";s:8:"username";s:0:"";s:6:"status";s:1:"1";}'),
('e0a26998c5aaa15798928dae6438d6a1', '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.56 Safari/536.5', 1340049291, 'a:4:{s:9:"user_data";s:0:"";s:7:"user_id";s:1:"1";s:8:"username";s:0:"";s:6:"status";s:1:"1";}');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `image`
--

CREATE TABLE IF NOT EXISTS `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `workshop_id` int(11) DEFAULT NULL,
  `location` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=20 ;

--
-- Gegevens worden uitgevoerd voor tabel `image`
--

INSERT INTO `image` (`id`, `name`, `workshop_id`, `location`) VALUES
(17, 'Cornelien_Prinsen.jpg', 20, 'data/uploads/workshop_images/17_Cornelien_Prinsen.jpg'),
(18, 'Esmee_Maas_cupcake1.jpg', 20, 'data/uploads/workshop_images/18_Esmee_Maas_cupcake1.jpg'),
(19, 'anja_aalen_korte_workshop.jpg', 21, 'data/uploads/workshop_images/19_anja_aalen_korte_workshop.jpg');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `leader`
--

CREATE TABLE IF NOT EXISTS `leader` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Gegevens worden uitgevoerd voor tabel `leader`
--

INSERT INTO `leader` (`id`, `name`) VALUES
(1, 'Joep Vugts'),
(2, 'Cornelien Prinsen');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `login_attempts`
--

CREATE TABLE IF NOT EXISTS `login_attempts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip_address` varchar(40) COLLATE utf8_bin NOT NULL,
  `login` varchar(50) COLLATE utf8_bin NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `version` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden uitgevoerd voor tabel `migrations`
--

INSERT INTO `migrations` (`version`) VALUES
(4);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `activated` tinyint(1) NOT NULL DEFAULT '1',
  `banned` tinyint(1) NOT NULL DEFAULT '0',
  `ban_reason` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `new_password_key` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `new_password_requested` datetime DEFAULT NULL,
  `new_email` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `new_email_key` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `last_ip` varchar(40) COLLATE utf8_bin NOT NULL,
  `last_login` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `created` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=2 ;

--
-- Gegevens worden uitgevoerd voor tabel `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `activated`, `banned`, `ban_reason`, `new_password_key`, `new_password_requested`, `new_email`, `new_email_key`, `last_ip`, `last_login`, `created`, `modified`) VALUES
(1, '', '$P$BaCkXTAF1AkKglHxBZO0Kmj37GHEQm.', 'admin@test.nl', 1, 0, NULL, NULL, NULL, NULL, NULL, '127.0.0.1', '2012-06-19 15:31:52', '2012-05-10 17:11:38', '2012-06-19 15:31:52');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `user_autologin`
--

CREATE TABLE IF NOT EXISTS `user_autologin` (
  `key_id` char(32) COLLATE utf8_bin NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `user_agent` varchar(150) COLLATE utf8_bin NOT NULL,
  `last_ip` varchar(40) COLLATE utf8_bin NOT NULL,
  `last_login` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`key_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Gegevens worden uitgevoerd voor tabel `user_autologin`
--

INSERT INTO `user_autologin` (`key_id`, `user_id`, `user_agent`, `last_ip`, `last_login`) VALUES
('d73bb07f09acea8a3f98148bac78b5b5', 1, 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.168 Safari/535.19', '127.0.0.1', '2012-05-10 17:11:46');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `user_profiles`
--

CREATE TABLE IF NOT EXISTS `user_profiles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `country` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `website` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=2 ;

--
-- Gegevens worden uitgevoerd voor tabel `user_profiles`
--

INSERT INTO `user_profiles` (`id`, `user_id`, `country`, `website`) VALUES
(1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `workshop`
--

CREATE TABLE IF NOT EXISTS `workshop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=22 ;

--
-- Gegevens worden uitgevoerd voor tabel `workshop`
--

INSERT INTO `workshop` (`id`, `name`, `description`) VALUES
(20, 'Cupcakes decoreren', '<p style="color: rgb(8, 86, 145); font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; text-align: -webkit-left; "><span class="grijs" style="color: rgb(102, 102, 102); ">Wij zijn Cornelien Prinsen en Joep Vugts wij delen samen de passie voor het maken van lekkere en mooie cupcakes, taarten, gebakjes en andere lekkernijen. Al sinds jaar en dag zijn wij, ieder voor zich, aan het experimenteren met alle mogelijke manieren om lekkere, mooie en stijlvolle gebakjes te maken.</span><br><br><span class="platBold" style="font-weight: bold; color: rgb(102, 102, 102); ">Cornelien Prinsen,</span><br><span class="grijs" style="color: rgb(102, 102, 102); ">Toen ik 2 jaar was, zijn mijn ouders samen met mijn 2 zussen en mij vanuit Tilburg naar Hilvarenbeek verhuisd. Opgroeien in het buitengebied, dieren, natuur en liefde, de ingrediënten voor een superjeugd! Als jongste dochter was ik vaak bij mij moeder in de keuken te vinden, kneden, bakken, kortom de lekkerste dingen maken. Met Kerst en Pasen de boter versieren vond ik en nu nog, prachtig om te doen… Naast mijn passievoor het bakken en decoreren van taarten, cupcakes en koekjes, ben ik altijd bezig met het bedenken en creëren van allerhande producten. Ik maak sieraden voor volwassenen en kinderen, geboorte- en teksthangers en creatieve kadootjes. Het belangrijkste hierin is de voldoening en de originaliteit. Met een positieve instelling en lach op mijn gezicht, heet ik u welkom en hoop u te mogen ontmoeten in de toekomst!</span><br><br><span class="platBold" style="font-weight: bold; color: rgb(102, 102, 102); ">Joep Vugts,</span><br><span class="grijs" style="color: rgb(102, 102, 102); ">Een turbulent leven en een hoop ambities, maar altijd creatief bezig zijn is toch wel mijn grootste passie. Ik ben pas kort bezig met het maken van taarten en cupcakes, het zal dan ook nog wel even duren voordat ik alle ideeen heb uitgewerkt. Maar ik heb al een hoop geleerd van collega’s, ik haal een hoop inspiratie van tv programma’s en heb me veelvuldig ingelezen in alle mogelijkheden en technieken die kmen kijken bij het maken van taarten en cupcakes. Mijn kracht is dus ook de kennis van de materialen en wat je ermee kan Ik maak ook cupcakes en taarten die u kunt vinden op het hightea buffet van De HERTOGIN.</span><br><br><span class="grijs" style="color: rgb(102, 102, 102); ">Nu willen we onze krachten bundelen om de ervaringen en creatieve gedachtes over te brengen.</span><br><span class="grijs" style="color: rgb(102, 102, 102); "><br></span><span class="platBold" style="font-weight: bold; color: rgb(102, 102, 102); ">De workshop</span><span class="grijs" style="color: rgb(102, 102, 102); ">&nbsp;<br>Tijdens de workshop cupcakes decoreren. Gaan we een aantal grote en kleine cupcakes maken. U leert hoe u een cupcake het beste kan bakken. We gaan de cupcakes vervolgens vullen, en vervolgens decoreren met fondant. U leert werken met de fondant en al haar eigenschappen en u leert te werken met vormen en wat de eigenschappen en verschillen zijn. En het leukste van alles is: u mag uw zelf gemaakte cupcakes lekker mee naar huis nemen en opeten!</span><br><br><span class="platBold" style="font-weight: bold; color: rgb(102, 102, 102); ">Duur</span><br><span class="grijs" style="color: rgb(102, 102, 102); ">De duur is gemiddeld 2,5 tot 3 uur.</span><br><br><span class="platBold" style="font-weight: bold; color: rgb(102, 102, 102); ">Aantal personen</span><br><span class="grijs" style="color: rgb(102, 102, 102); ">Minimaal 4 en maximaal 12 personen</span><br><br><span class="platBold" style="font-weight: bold; color: rgb(102, 102, 102); ">Inschrijven</span><br><br><span class="platBold" style="font-weight: bold; color: rgb(102, 102, 102); ">Prijzen</span><br><span class="grijs" style="color: rgb(102, 102, 102); ">Cupcakes; € 23,50 p.p. Kinderworkshops; € 16,50 p.p. (incl. koffie/thee/ranja en benodigde materialen) Op verzoek kan het arrangement uitgebreid worden met een bordje met 3 wisselende hapjes à € 4,50. Of een gezellige High Tea in de Tea Room van DE HERTOGIN. De kosten hiervoor zijn € 18,50 per persoon.</span></p><p class="grijs" style="color: rgb(102, 102, 102); font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; text-align: -webkit-left; "><span class="platBold" style="font-weight: bold; ">Contact / Aanmelden</span><br>DE HERTOGIN: Gelderstraat 8-10 | 5081 AC Hilvarenbeek</p>'),
(21, 'testcase', 'testcatsse');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
