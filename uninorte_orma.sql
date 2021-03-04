/*
 Navicat Premium Data Transfer

 Source Server         : Local
 Source Server Type    : MySQL
 Source Server Version : 50719
 Source Host           : localhost:3306
 Source Schema         : uninorte_orma

 Target Server Type    : MySQL
 Target Server Version : 50719
 File Encoding         : 65001

 Date: 04/03/2021 15:20:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_super_admin` tinyint(1) NULL DEFAULT 0,
  `avatar` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `configs` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `deleted_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `admins_user_id_foreign`(`user_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admins
-- ----------------------------
INSERT INTO `admins` VALUES (3, 10, 'Luis C.', 'Rojano', 1, 'https://obsriomagdalena.uninorte.edu.co/plataforma/api/uploads/profiles/lcrojano@gmail.com/rojano-2-1024x776.jpg', NULL, '2020-06-23 09:12:30', '2020-08-26 05:35:25', NULL);

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `public_desc` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `admin_desc` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `state` tinyint(2) NOT NULL,
  `icon` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `category_id` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES (12, 'Niveles y Caudales', 'Info General', 'default', 1, 'https://www.gravatar.com/avatar/4c8b08531743e02c9ea1c0b6771a1993?d=identicon&r=g&s=48', '2020-11-06 09:04:42', '2020-11-06 09:04:42', NULL, NULL);
INSERT INTO `categories` VALUES (14, 'Velocidad para Caudal Medio ', 'Velocidad para Caudal Medio', 'default', 1, 'https://www.gravatar.com/avatar/9b320ea887701f100ef8c99623474615?d=identicon&r=g&s=48', '2020-11-09 05:45:02', '2020-11-09 05:45:02', NULL, 15);
INSERT INTO `categories` VALUES (15, 'Modelo Libre Aguadas Barranca', 'Modelo_Libre_Aguadas_Barranca', 'default', 1, 'https://www.gravatar.com/avatar/c3c7ef61d03d59351d79e8f5901208b5?d=identicon&r=g&s=48', '2020-11-09 07:47:41', '2020-11-09 07:47:41', NULL, NULL);
INSERT INTO `categories` VALUES (16, 'Caso de estudio Salamina', 'Caso de estudio Salamina', 'default', 1, 'https://www.gravatar.com/avatar/ba8cdccfad81d3984df3aa51b1d5ec4f?d=identicon&r=g&s=48', '2020-11-09 09:11:46', '2020-11-09 09:11:46', NULL, 1);
INSERT INTO `categories` VALUES (17, 'Velocidad', 'Velocidad', 'default', 1, 'https://www.gravatar.com/avatar/ba2130ee3b9e5a1764a271c4bf29d8fd?d=identicon&r=g&s=48', '2020-11-09 09:17:16', '2020-11-17 15:35:10', NULL, 16);
INSERT INTO `categories` VALUES (18, 'Velocidad', 'Velocidad General', 'default', 1, 'https://www.gravatar.com/avatar/62851e1a9741c0362f8a4ce73d3fae23?d=identicon&r=g&s=48', '2020-11-11 04:56:03', '2020-11-17 15:35:02', NULL, 24);
INSERT INTO `categories` VALUES (19, 'Profundidad', 'Profundidad General', 'default', 1, 'https://www.gravatar.com/avatar/39d2c2cf60357b2a6bd60b6cd64449e1?d=identicon&r=g&s=48', '2020-11-11 05:37:22', '2020-11-17 15:49:50', NULL, 24);
INSERT INTO `categories` VALUES (20, 'Profundidad', 'Caso de Estudio Salamina', 'default', 1, 'https://www.gravatar.com/avatar/8b925f69e028b1f1bcc6d2b54a93103a?d=identicon&r=g&s=48', '2020-11-11 06:46:31', '2020-11-11 06:46:31', NULL, 16);
INSERT INTO `categories` VALUES (21, 'Geomorfología', 'Geomorfología', 'default', 1, 'https://www.gravatar.com/avatar/24cd01d678e6697c546d03e1eecb581f?d=identicon&r=g&s=48', '2020-11-13 10:55:20', '2020-11-13 10:55:20', NULL, NULL);
INSERT INTO `categories` VALUES (22, 'Orillas', 'Orillas', 'default', 1, 'https://www.gravatar.com/avatar/d4dca6fc7f3ee79b4553039fd1033f7e?d=identicon&r=g&s=48', '2020-11-13 10:55:53', '2020-11-13 10:55:53', NULL, 21);
INSERT INTO `categories` VALUES (23, 'Navegabilidad', 'Frecuencia de Canal entre otros.', 'default', 1, 'https://www.gravatar.com/avatar/198959341d195a6b5917531caca3fcb0?d=identicon&r=g&s=48', '2020-11-13 10:56:45', '2020-11-13 10:56:45', NULL, NULL);
INSERT INTO `categories` VALUES (24, 'Hidráulica / Hidrodinámica', 'prof y vel', 'default', 1, 'https://www.gravatar.com/avatar/0a5e5dac17b46ac5b7cc4ec4a2ce81d4?d=identicon&r=g&s=48', '2020-11-13 10:57:30', '2020-11-13 10:57:30', NULL, NULL);
INSERT INTO `categories` VALUES (25, 'Profundidad', 'profundidad', 'default', 1, 'https://www.gravatar.com/avatar/8b925f69e028b1f1bcc6d2b54a93103a?d=identicon&r=g&s=48', '2020-11-13 10:57:48', '2020-11-13 10:57:48', NULL, 24);
INSERT INTO `categories` VALUES (26, 'Velocidad', 'Velocidad hidro', 'default', 1, 'https://www.gravatar.com/avatar/75cbdb92e434a4e765988955523524cc?d=identicon&r=g&s=48', '2020-11-13 10:58:16', '2020-11-17 15:47:42', NULL, 24);

-- ----------------------------
-- Table structure for columns
-- ----------------------------
DROP TABLE IF EXISTS `columns`;
CREATE TABLE `columns`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `max_file_size` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of columns
-- ----------------------------
INSERT INTO `columns` VALUES (2, 'Archivos CSV', 'file', '100', '1', 'file-outline', '1', '2020-08-24 04:38:32', '2020-08-24 04:38:32');
INSERT INTO `columns` VALUES (3, 'Frecuencias', 'file', '100', '1', 'file-outline', '1', '2020-08-24 04:39:05', '2020-08-24 04:39:05');
INSERT INTO `columns` VALUES (4, 'Duración', 'file', '100', '1', 'file-outline', '1', '2020-08-24 04:39:13', '2020-08-24 04:39:13');
INSERT INTO `columns` VALUES (5, 'Otros Archivos', 'file', '100', '1', 'file-outline', '1', '2020-08-24 07:17:09', '2020-08-24 07:17:09');
INSERT INTO `columns` VALUES (6, 'Vista de trayecto', 'file', '100', '1', 'file-outline', '1', '2020-11-10 15:46:38', '2020-11-10 15:46:38');
INSERT INTO `columns` VALUES (8, 'Vista en corte', 'file', '100', '1', 'file-outline', '1', '2020-11-10 15:54:19', '2020-11-10 15:54:19');

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for files
-- ----------------------------
DROP TABLE IF EXISTS `files`;
CREATE TABLE `files`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `station_id` bigint(20) UNSIGNED NOT NULL,
  `column_id` bigint(20) UNSIGNED NOT NULL,
  `file_path` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `desc` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `title` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `files_station_id_foreign`(`station_id`) USING BTREE,
  INDEX `files_column_id_foreign`(`column_id`) USING BTREE,
  CONSTRAINT `files_column_id_foreign` FOREIGN KEY (`column_id`) REFERENCES `columns` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `files_station_id_foreign` FOREIGN KEY (`station_id`) REFERENCES `stations` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 147 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of files
-- ----------------------------
INSERT INTO `files` VALUES (72, 15, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/TEBSA/Frecuencias/FRECUENCIA_TEBSA_2.png', 'png', 'FRECUENCIA_TEBSA_2', '1', '2020-09-10 02:53:24', '2020-09-10 02:53:24', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ', 'test');
INSERT INTO `files` VALUES (73, 15, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/TEBSA/Duración/DURACION_TEBSA_2.png', 'png', 'DURACION_TEBSA_2', '1', '2020-09-10 02:53:36', '2020-09-10 02:53:36', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ', 'test');
INSERT INTO `files` VALUES (75, 14, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/CALAMAR/Frecuencias/FRECUENCIA_CALAMAR_2.png', 'png', 'FRECUENCIA_CALAMAR_2', '1', '2020-09-10 02:55:09', '2020-09-10 02:55:09', NULL, NULL);
INSERT INTO `files` VALUES (76, 14, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/CALAMAR/Duración/DURACION_CALAMAR_2.png', 'png', 'DURACION_CALAMAR_2', '1', '2020-09-10 02:55:17', '2020-09-10 02:55:17', NULL, NULL);
INSERT INTO `files` VALUES (78, 9, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/SAN PEDRITO/Duración/San Pedrito AUT_cduracion.png', 'png', 'DURACION_SAN_PEDRITO_2', '1', '2020-09-10 02:57:54', '2020-11-11 09:20:58', NULL, 'Duración de Niveles San Pedrito');
INSERT INTO `files` VALUES (79, 9, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/SAN PEDRITO/Frecuencias/San Pablo_cfreq.png', 'png', 'FRECUENCIA_SAN_PEDRITO_2', '1', '2020-09-10 02:58:05', '2020-11-11 09:23:38', NULL, 'Curva de frecuencias de Niveles Excedidos');
INSERT INTO `files` VALUES (80, 13, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/TENERIFE/Frecuencias/FRECUENCIA_TENERIFE_2.png', 'png', 'FRECUENCIA_TENERIFE_2', '1', '2020-09-10 02:59:14', '2020-09-10 02:59:14', NULL, NULL);
INSERT INTO `files` VALUES (81, 13, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/TENERIFE/Duración/DURACION_TENERIFE_2.png', 'png', 'DURACION_TENERIFE_2', '1', '2020-09-10 02:59:25', '2020-09-10 02:59:25', NULL, NULL);
INSERT INTO `files` VALUES (82, 12, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/PLATO/Duración/DURACION_PLATO_2.png', 'png', 'DURACION_PLATO_2', '1', '2020-09-10 02:59:46', '2020-09-10 02:59:46', NULL, NULL);
INSERT INTO `files` VALUES (83, 12, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/PLATO/Frecuencias/FRECUENCIA_PLATO_2.png', 'png', 'FRECUENCIA_PLATO_2', '1', '2020-09-10 03:00:03', '2020-09-10 03:00:03', NULL, NULL);
INSERT INTO `files` VALUES (84, 11, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/MAGANGUE/Frecuencias/FRECUENCIA_MAGANGUE_2.png', 'png', 'FRECUENCIA_MAGANGUE_2', '1', '2020-09-10 03:00:50', '2020-09-10 03:00:50', NULL, NULL);
INSERT INTO `files` VALUES (85, 11, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/MAGANGUE/Duración/DURACION_MAGANGUE_2.png', 'png', 'DURACION_MAGANGUE_2', '1', '2020-09-10 03:01:15', '2020-09-10 03:01:15', NULL, NULL);
INSERT INTO `files` VALUES (86, 16, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/EL BANCO/Frecuencias/FRECUENCIA_EL_BANCO_2.png', 'png', 'FRECUENCIA_EL_BANCO_2', '1', '2020-09-10 03:04:37', '2020-09-10 03:04:37', NULL, NULL);
INSERT INTO `files` VALUES (87, 16, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/EL BANCO/Duración/DURACION_EL_BANCO_2.png', 'png', 'DURACION_EL_BANCO_2', '1', '2020-09-10 03:05:06', '2020-09-10 03:05:06', NULL, NULL);
INSERT INTO `files` VALUES (88, 17, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ARMENIA/Duración/Armenia_cduracion.png', 'png', 'DURACION_ARMENIA_2', '1', '2020-09-10 03:08:05', '2020-11-11 09:31:03', NULL, 'Curva de Duración de Niveles');
INSERT INTO `files` VALUES (89, 17, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ARMENIA/Frecuencias/Armenia_cfreq.png', 'png', 'FRECUENCIA_ARMENIA_2', '1', '2020-09-10 03:08:12', '2020-11-11 09:30:29', NULL, 'Curvas de frecuencias de niveles excedidos');
INSERT INTO `files` VALUES (90, 18, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/BARBOSA/Frecuencias/Barbosa_cduracion.png', 'png', 'FRECUENCIA_BARBOSA_2', '1', '2020-09-10 03:09:19', '2020-11-11 09:32:33', NULL, 'Curva de duración de niveles');
INSERT INTO `files` VALUES (91, 18, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/BARBOSA/Duración/Barbosa_cfreq.png', 'png', 'DURACION_BARBOSA_2', '1', '2020-09-10 03:09:28', '2020-11-11 09:32:56', NULL, 'Curva de Frecuencia de Niveles Exedidos');
INSERT INTO `files` VALUES (92, 19, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/BARRANCABERMEJA/Duración/Barrancabermeja_cduracion.png', 'png', 'DURACION_BARRANCABERMEJA_2', '1', '2020-09-10 03:10:57', '2020-11-11 09:38:05', NULL, 'Curva de duración de niveles');
INSERT INTO `files` VALUES (93, 19, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/BARRANCABERMEJA/Frecuencias/Barrancabermeja_cfreq.png', 'png', 'FRECUENCIA_BARRANCABERMEJA_2', '1', '2020-09-10 03:11:07', '2020-11-11 09:38:40', NULL, 'Curva de frecuencia de niveles excedidos');
INSERT INTO `files` VALUES (94, 20, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/COYONGAL/Frecuencias/FRECUENCIA_COYONGAL_2.png', 'png', 'FRECUENCIA_COYONGAL_2', '1', '2020-09-10 03:19:37', '2020-09-10 03:19:37', NULL, NULL);
INSERT INTO `files` VALUES (95, 20, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/COYONGAL/Duración/DURACION_COYONGAL_2.png', 'png', 'DURACION_COYONGAL_2', '1', '2020-09-10 03:19:44', '2020-09-10 03:19:44', NULL, NULL);
INSERT INTO `files` VALUES (96, 21, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/EL CONTENTO/Frecuencias/FRECUENCIA_EL_CONTENTO_2.png', 'png', 'FRECUENCIA_EL_CONTENTO_2', '1', '2020-09-10 03:21:57', '2020-09-10 03:21:57', NULL, NULL);
INSERT INTO `files` VALUES (97, 21, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/EL CONTENTO/Duración/DURACION_EL_CONTENTO_2.png', 'png', 'DURACION_EL_CONTENTO_2', '1', '2020-09-10 03:22:14', '2020-09-10 03:22:14', NULL, NULL);
INSERT INTO `files` VALUES (98, 22, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/GAMARRA/Frecuencias/FRECUENCIA_GAMARRA_2.png', 'png', 'FRECUENCIA_GAMARRA_2', '1', '2020-09-10 03:23:56', '2020-09-10 03:23:56', NULL, NULL);
INSERT INTO `files` VALUES (99, 22, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/GAMARRA/Duración/DURACION_GAMARRA_2.png', 'png', 'DURACION_GAMARRA_2', '1', '2020-09-10 03:24:08', '2020-09-10 03:24:08', NULL, NULL);
INSERT INTO `files` VALUES (100, 23, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/GAMARRA AUT/Frecuencias/FRECUENCIA_GAMARRA_AUT_2.png', 'png', 'FRECUENCIA_GAMARRA_AUT_2', '1', '2020-09-10 03:25:02', '2020-09-10 03:25:02', NULL, NULL);
INSERT INTO `files` VALUES (101, 23, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/GAMARRA AUT/Duración/DURACION_GAMARRA_AUT_2.png', 'png', 'DURACION_GAMARRA_AUT_2', '1', '2020-09-10 03:25:12', '2020-09-10 03:25:12', NULL, NULL);
INSERT INTO `files` VALUES (102, 24, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LA GLORIA/Frecuencias/FRECUENCIA_LA_GLORIA_2.png', 'png', 'FRECUENCIA_LA_GLORIA_2', '1', '2020-09-10 03:26:14', '2020-09-10 03:26:14', NULL, NULL);
INSERT INTO `files` VALUES (103, 24, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LA GLORIA/Duración/DURACION_LA_GLORIA_2.png', 'png', 'DURACION_LA_GLORIA_2', '1', '2020-09-10 03:26:22', '2020-09-10 03:26:22', NULL, NULL);
INSERT INTO `files` VALUES (104, 25, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAS AGUADAS/Frecuencias/FRECUENCIA_LAS_AGUADAS_2.png', 'png', 'FRECUENCIA_LAS_AGUADAS_2', '1', '2020-09-10 03:27:16', '2020-09-10 03:27:16', NULL, NULL);
INSERT INTO `files` VALUES (105, 25, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAS AGUADAS/Duración/DURACION_LAS_AGUADAS_2.png', 'png', 'DURACION_LAS_AGUADAS_2', '1', '2020-09-10 03:27:24', '2020-09-10 03:27:24', NULL, NULL);
INSERT INTO `files` VALUES (106, 26, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAS PALOMAS/Frecuencias/FRECUENCIA_LAS_PALOMAS_2.png', 'png', 'FRECUENCIA_LAS_PALOMAS_2', '1', '2020-09-10 03:28:16', '2020-09-10 03:28:16', NULL, NULL);
INSERT INTO `files` VALUES (107, 26, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAS PALOMAS/Duración/DURACION_LAS_PALOMAS_2.png', 'png', 'DURACION_LAS_PALOMAS_2', '1', '2020-09-10 03:28:39', '2020-09-10 03:28:39', NULL, NULL);
INSERT INTO `files` VALUES (108, 27, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/PEÑONCITO/Frecuencias/FRECUENCIA_PEÑONCITO_2.png', 'png', 'FRECUENCIA_PEÑONCITO_2', '1', '2020-09-10 03:29:36', '2020-09-10 03:29:36', NULL, NULL);
INSERT INTO `files` VALUES (109, 27, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/PEÑONCITO/Duración/DURACION_PEÑONCITO_2.png', 'png', 'DURACION_PEÑONCITO_2', '1', '2020-09-10 03:29:49', '2020-09-10 03:29:49', NULL, NULL);
INSERT INTO `files` VALUES (110, 28, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/PUERTO WILCHES/Frecuencias/FRECUENCIA_PUERTO_WILCHES_2.png', 'png', 'FRECUENCIA_PUERTO_WILCHES_2', '1', '2020-09-10 03:31:18', '2020-09-10 03:31:18', NULL, NULL);
INSERT INTO `files` VALUES (111, 28, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/PUERTO WILCHES/Duración/DURACION_PUERTO_WILCHES_2.png', 'png', 'DURACION_PUERTO_WILCHES_2', '1', '2020-09-10 03:31:26', '2020-09-10 03:31:26', NULL, NULL);
INSERT INTO `files` VALUES (112, 29, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/REGIDOR/Frecuencias/FRECUENCIA_REGIDOR_2.png', 'png', 'FRECUENCIA_REGIDOR_2', '1', '2020-09-10 03:32:53', '2020-09-10 03:32:53', NULL, NULL);
INSERT INTO `files` VALUES (113, 29, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/REGIDOR/Duración/DURACION_REGIDOR_2.png', 'png', 'DURACION_REGIDOR_2', '1', '2020-09-10 03:33:03', '2020-09-10 03:33:03', NULL, NULL);
INSERT INTO `files` VALUES (114, 30, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/RIO NUEVO/Frecuencias/FRECUENCIA_RIO_NUEVO_2.png', 'png', 'FRECUENCIA_RIO_NUEVO_2', '1', '2020-09-10 03:34:01', '2020-09-10 03:34:01', NULL, NULL);
INSERT INTO `files` VALUES (115, 30, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/RIO NUEVO/Duración/DURACION_RIO_NUEVO_2.png', 'png', 'DURACION_RIO_NUEVO_2', '1', '2020-09-10 03:34:19', '2020-09-10 03:34:19', NULL, NULL);
INSERT INTO `files` VALUES (116, 31, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/SAN PABLO/Frecuencias/FRECUENCIA_SAN_PABLO_2_2.png', 'png', 'FRECUENCIA_SAN_PABLO_2_2', '1', '2020-09-10 03:35:09', '2020-09-10 03:35:09', NULL, NULL);
INSERT INTO `files` VALUES (117, 31, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/SAN PABLO/Duración/DURACION_SAN_PABLO_2.png', 'png', 'DURACION_SAN_PABLO_2', '1', '2020-09-10 03:35:25', '2020-09-10 03:35:25', NULL, NULL);
INSERT INTO `files` VALUES (118, 32, 3, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/SITIO NUEVO/Frecuencias/FRECUENCIA_SITIO_NUEVO_2.png', 'png', 'FRECUENCIA_SITIO_NUEVO_2', '1', '2020-09-10 03:36:14', '2020-09-10 03:36:14', NULL, NULL);
INSERT INTO `files` VALUES (119, 32, 4, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/SITIO NUEVO/Duración/DURACION_SITIO_NUEVO_2.png', 'png', 'DURACION_SITIO_NUEVO_2', '1', '2020-09-10 03:36:37', '2020-09-10 03:36:37', NULL, NULL);
INSERT INTO `files` VALUES (121, 37, 6, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 1 - El Piñon/Vista de trayecto/PLANTA_PIÑON_01.png', 'png', 'PLANTA_PIÑON_01', '1', '2020-11-10 15:54:01', '2020-11-10 19:44:17', 'Trayecto de embarcación durante la campaña de medición con ADCP en el sector de Salamina - El Piñon', 'Trayecto de embarcación para medición con ADCP - Estación 1');
INSERT INTO `files` VALUES (122, 37, 8, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 1 - El Piñon/Vista en corte/CORTE_PIÑON_01.png', 'png', 'CORTE_PIÑON_01', '1', '2020-11-10 15:55:04', '2020-11-10 19:44:44', 'Vista en corte de velocidades en la campaña de medición con ADCP en el sector El Piñon - Salamina', 'Vista en corte de velocidades medidas con ADCP - Estación 1');
INSERT INTO `files` VALUES (125, 38, 6, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 2 - El Piñon/Vista de trayecto/PLANTA_PIÑON_02.png', 'png', 'PLANTA_PIÑON_02', '1', '2020-11-10 18:41:46', '2020-11-10 18:44:58', 'Trayecto de embarcación durante la campaña de medición con ADCP en el sector de Salamina - El Piñon', 'Trayecto de embarcación para medición con ADCP - Estación 2');
INSERT INTO `files` VALUES (126, 38, 8, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 2 - El Piñon/Vista en corte/CORTE_PIÑON_02.png', 'png', 'CORTE_PIÑON_02', '1', '2020-11-10 18:42:54', '2020-11-10 18:42:54', 'Vista en corte de velocidades en la campaña de medición con ADCP en el sector El Piñon - Salamina', 'Vista en corte de velocidades medidas con ADCP - Estación 2');
INSERT INTO `files` VALUES (127, 39, 6, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 3/Vista de trayecto/PLANTA_PIÑON_03.png', 'png', 'PLANTA_PIÑON_03', '1', '2020-11-10 18:50:55', '2020-11-10 18:50:55', 'Trayecto de embarcación durante la campaña de medición con ADCP en el sector de Salamina - El Piñon', 'Trayecto de embarcación para medición con ADCP - Estación 3');
INSERT INTO `files` VALUES (129, 39, 8, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 3 - El Piñon/Vista en corte/CORTE_PIÑON_03.png', 'png', 'CORTE_PIÑON_03', '1', '2020-11-10 19:05:21', '2020-11-10 19:07:43', 'Vista en corte de velocidades en la campaña de medición con ADCP en el sector El Piñon - Salamina', 'Vista en corte de velocidades medidas con ADCP - Estación 2');
INSERT INTO `files` VALUES (130, 40, 6, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 3 - El Piñon/Vista de trayecto/PLANTA_PIÑON_04.png', 'png', 'PLANTA_PIÑON_04', '1', '2020-11-10 19:09:45', '2020-11-10 19:45:58', 'Trayecto de embarcación durante la campaña de medición con ADCP en el sector de Salamina - El Piñon', 'Trayecto de embarcación para medición con ADCP - Estación 4');
INSERT INTO `files` VALUES (132, 40, 8, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 4 - El Piñon/Vista en corte/CORTE_PIÑON_04.png', 'png', 'CORTE_PIÑON_04', '1', '2020-11-10 19:17:47', '2020-11-10 19:18:22', 'Vista en corte de velocidades en la campaña de medición con ADCP en el sector El Piñon - Salamina', 'Vista en corte de velocidades medidas con ADCP - Estación 2');
INSERT INTO `files` VALUES (133, 41, 6, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 5 - El Piñon/Vista de trayecto/CORTE_PIÑON_05.png', 'png', 'CORTE_PIÑON_06', '1', '2020-11-10 19:22:38', '2020-11-10 19:46:56', 'Trayecto de embarcación durante la campaña de medición con ADCP en el sector de Salamina - El Piñon', 'Trayecto de embarcación para medición con ADCP - Estación 5');
INSERT INTO `files` VALUES (134, 41, 8, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 5 - El Piñon/Vista en corte/PLANTA_PIÑON_05.png', 'png', 'PLANTA_PIÑON_05', '1', '2020-11-10 19:23:28', '2020-11-10 19:23:28', 'Vista en corte de velocidades en la campaña de medición con ADCP en el sector El Piñon - Salamina', 'Vista en corte de velocidades medidas con ADCP - Estación 5');
INSERT INTO `files` VALUES (135, 42, 6, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 6 - El Piñon/Vista de trayecto/PLANTA_PIÑON_06.png', 'png', 'PLANTA_PIÑON_06', '1', '2020-11-10 19:27:38', '2020-11-10 19:27:38', 'Trayecto de embarcación durante la campaña de medición con ADCP en el sector de Salamina - El Piñon', 'Trayecto de embarcación para medición con ADCP - Estación 6');
INSERT INTO `files` VALUES (136, 42, 8, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 6 - El Piñon/Vista en corte/CORTE_PIÑON_06.png', 'png', 'CORTE_PIÑON_06', '1', '2020-11-10 19:28:14', '2020-11-10 19:28:14', 'Vista en corte de velocidades en la campaña de medición con ADCP en el sector El Piñon - Salamina', 'Vista en corte de velocidades medidas con ADCP - Estación 6');
INSERT INTO `files` VALUES (137, 43, 6, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 9 - El Piñon/Vista de trayecto/PLANTA_PIÑON_09.png', 'png', 'PLANTA_PIÑON_09', '1', '2020-11-10 19:30:10', '2020-11-10 19:30:10', 'Trayecto de embarcación durante la campaña de medición con ADCP en el sector de Salamina - El Piñon', 'Trayecto de embarcación para medición con ADCP - Estación 9');
INSERT INTO `files` VALUES (138, 43, 8, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 9 - El Piñon/Vista en corte/CORTE_PIÑON_09.png', 'png', 'CORTE_PIÑON_09', '1', '2020-11-10 19:30:58', '2020-11-10 19:30:58', 'Vista en corte de velocidades en la campaña de medición con ADCP en el sector El Piñon - Salamina', 'Vista en corte de velocidades medidas con ADCP - Estación 9');
INSERT INTO `files` VALUES (139, 44, 6, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 11 - El Piñon/Vista de trayecto/PLANTA_PIÑON_11.png', 'png', 'PLANTA_PIÑON_11', '1', '2020-11-10 19:32:37', '2020-11-10 19:32:37', 'Trayecto de embarcación durante la campaña de medición con ADCP en el sector de Salamina - El Piñon', 'Trayecto de embarcación para medición con ADCP - Estación 11');
INSERT INTO `files` VALUES (140, 44, 8, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 11 - El Piñon/Vista en corte/CORTE_PIÑON_11.png', 'png', 'CORTE_PIÑON_11', '1', '2020-11-10 19:33:20', '2020-11-10 19:33:20', 'Vista en corte de velocidades en la campaña de medición con ADCP en el sector El Piñon - Salamina', 'Vista en corte de velocidades medidas con ADCP - Estación 11');
INSERT INTO `files` VALUES (141, 45, 6, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 12 - El Piñon/Vista de trayecto/PLANTA_PIÑON_12.png', 'png', 'PLANTA_PIÑON_12', '1', '2020-11-10 19:35:07', '2020-11-10 19:36:03', 'Trayecto de embarcación durante la campaña de medición con ADCP en el sector de Salamina - El Piñon', 'Trayecto de embarcación para medición con ADCP - Estación 12');
INSERT INTO `files` VALUES (142, 45, 8, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 12 - El Piñon/Vista en corte/CORTE_PIÑON_12.png', 'png', 'CORTE_PIÑON_12', '1', '2020-11-10 19:36:47', '2020-11-10 19:36:47', 'undefined', 'undefined');
INSERT INTO `files` VALUES (143, 46, 6, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 13 - El Piñon/Vista de trayecto/PLANTA_PIÑON_13.png', 'png', 'PLANTA_PIÑON_13', '1', '2020-11-10 19:38:19', '2020-11-10 19:39:04', 'Trayecto de embarcación durante la campaña de medición con ADCP en el sector de Salamina - El Piñon', 'Trayecto de embarcación para medición con ADCP - Estación 13');
INSERT INTO `files` VALUES (144, 46, 8, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 13 - El Piñon/Vista en corte/CORTE_PIÑON_13.png', 'png', 'CORTE_PIÑON_13', '1', '2020-11-10 19:39:42', '2020-11-10 19:39:42', 'Vista en corte de velocidades en la campaña de medición con ADCP en el sector El Piñon - Salamina', 'Vista en corte de velocidades medidas con ADCP - Estación 13');
INSERT INTO `files` VALUES (145, 47, 6, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 14 - El Piñon/Vista de trayecto/PLANTA_PIÑON_14.png', 'png', 'PLANTA_PIÑON_14', '1', '2020-11-10 19:41:11', '2020-11-10 19:41:11', 'Trayecto de embarcación durante la campaña de medición con ADCP en el sector de Salamina - El Piñon', 'Trayecto de embarcación para medición con ADCP - Estación 14');
INSERT INTO `files` VALUES (146, 47, 8, 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/Estación 14 - El Piñon/Vista en corte/CORTE_PIÑON_14.png', 'png', 'CORTE_PIÑON_14', '1', '2020-11-10 19:41:48', '2020-11-10 19:41:48', 'Vista en corte de velocidades en la campaña de medición con ADCP en el sector El Piñon - Salamina', 'Vista en corte de velocidades medidas con ADCP - Estación 14');

-- ----------------------------
-- Table structure for generals
-- ----------------------------
DROP TABLE IF EXISTS `generals`;
CREATE TABLE `generals`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` enum('Male','Female','Other') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `configs` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `deleted_at` timestamp(0) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `generals_user_id_unique`(`user_id`) USING BTREE,
  CONSTRAINT `generals_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of generals
-- ----------------------------
INSERT INTO `generals` VALUES (2, 45, 'Luis', 'Rojano', 'Male', 'https://obsriomagdalena.uninorte.edu.co/plataforma/api/uploads/profiles/lcrojano@uninorte.edu.co/rojano-2-1024x776_2.jpg', NULL, NULL, '2020-08-26 06:56:31', '2020-08-26 06:56:31');
INSERT INTO `generals` VALUES (4, 49, 'Visitante', 'Registrado', 'Male', 'https://obsriomagdalena.uninorte.edu.co/plataforma/api/uploads/profiles/visitante@gmail.com/InexperiencedGlossyAsiaticgreaterfreshwaterclam-small.gif', NULL, NULL, '2020-08-27 11:54:25', '2020-08-27 11:54:25');
INSERT INTO `generals` VALUES (5, 52, 'Humberto', 'Avila', 'Male', 'https://obsriomagdalena.uninorte.edu.co/plataforma/api/uploads/profiles/havila@uninorte.edu.co/FotoHumbertoAvila.png', NULL, NULL, '2020-09-03 13:44:45', '2020-09-03 13:44:45');
INSERT INTO `generals` VALUES (6, 54, 'test  eee', 'user eee', 'Male', 'https://www.gravatar.com/avatar/8fbdcda70f2c7ff34d8e36b455da1cf5?s=100&r=g&d=wavatar', NULL, NULL, '2020-11-04 07:32:38', '2020-11-04 07:43:56');
INSERT INTO `generals` VALUES (7, 55, 'mari', 'mur', 'Male', 'http://localhost:8000/api/uploads/profiles/roommatesburo@gmail.com/descarga.jfif', NULL, NULL, '2020-11-04 07:33:56', '2020-11-04 07:33:56');

-- ----------------------------
-- Table structure for layers
-- ----------------------------
DROP TABLE IF EXISTS `layers`;
CREATE TABLE `layers`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `position` float(20, 2) NULL DEFAULT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `source` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sourceType` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `glSource` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `glLayers` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `desc` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `convention` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `exclusions` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `isPublic` tinyint(1) NULL DEFAULT NULL,
  `isFixed` tinyint(1) NULL DEFAULT NULL,
  `references` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 87 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of layers
-- ----------------------------
INSERT INTO `layers` VALUES (47, 12, 1.00, 'Análisis de niveles y caudales', 'IDEAM', 'stations', 'layer.svg', '{\"id\":\"IDEAM\",\"type\":\"geojson\",\"data\":{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.90786111111112\",\"10.2682222\"]},\"properties\":{\"id\":9,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"SAN PEDRITO\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.73869444444445\",\"9.2540278\"]},\"properties\":{\"id\":11,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"MAGANGUE\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.80671388888888\",\"9.7884278\"]},\"properties\":{\"id\":12,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"PLATO\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.86408333333333\",\"9.9034722\"]},\"properties\":{\"id\":13,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"TENERIFE\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.91141666666667\",\"10.2538611\"]},\"properties\":{\"id\":14,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"CALAMAR\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.7598888888889\",\"10.9366389\"]},\"properties\":{\"id\":15,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"TEBSA\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-73.96944444\",\"8.992527778\"]},\"properties\":{\"id\":16,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"EL BANCO\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.391308064516764\",\"8.898630781948444\"]},\"properties\":{\"id\":17,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"ARMENIA\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.636964313878863\",\"9.021269481149156\"]},\"properties\":{\"id\":18,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"BARBOSA\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-73.874298123118294\",\"7.060386845631077\"]},\"properties\":{\"id\":19,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"BARRANCABERMEJA\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.4930550611667\",\"8.941110831599277\"]},\"properties\":{\"id\":20,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"COYONGAL\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-73.77341667\",\"8.222333333\"]},\"properties\":{\"id\":21,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"EL CONTENTO\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-73.746787267773882\",\"8.322405384191716\"]},\"properties\":{\"id\":22,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"GAMARRA\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-73.752868916520598\",\"8.283953398780628\"]},\"properties\":{\"id\":23,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"GAMARRA AUT\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-73.80169385897554\",\"8.611510585900945\"]},\"properties\":{\"id\":24,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"LA GLORIA\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.05442797203591\",\"8.955183398087909\"]},\"properties\":{\"id\":25,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"LAS AGUADAS\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.170168127681791\",\"8.830406882576423\"]},\"properties\":{\"id\":26,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"LAS PALOMAS\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-73.94722222\",\"8.989722222\"]},\"properties\":{\"id\":27,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"PE\\u00d1ONCITO\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-73.904532373251953\",\"7.342884586957206\"]},\"properties\":{\"id\":28,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"PUERTO WILCHES\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-73.820000000036572\",\"8.670000000565112\"]},\"properties\":{\"id\":29,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"REGIDOR\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.255302963834382\",\"8.806361451156498\"]},\"properties\":{\"id\":30,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"RIO NUEVO\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-73.918555560028523\",\"7.480333333048705\"]},\"properties\":{\"id\":31,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"SAN PABLO\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-73.800549954953937\",\"7.783654924705154\"]},\"properties\":{\"id\":32,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png\",\"name\":\"SITIO NUEVO\",\"type\":\"stations\"}}]}}', '[{\"layer_id\":47,\"id\":\"layer_47IDEAM\",\"type\":\"symbol\",\"source\":\"IDEAM\",\"paint\":{\"icon-opacity\":0.8},\"layout\":{\"icon-image\":\"{icon}\",\"icon-size\":0.7,\"visibility\":\"visible\",\"text-anchor\":\"left\",\"text-offset\":[1,0],\"text-field\":\"{name}\",\"text-optional\":true,\"icon-allow-overlap\":false}}]', 'Análisis de niveles y caudales realizados por el Observatorio del Río Magdalena con información de las estaciones Limnimétricas/Limnigráficas del Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM)', NULL, '2020-11-06 09:04:54', '2020-11-17 12:14:29', 'points', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (48, 23, 6.00, 'Frecuencia de observación de agua (%)', 'src_48', 'raster', 'layer.svg', '{\"id\":\"src_48\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_48.json\",\"maxzoom\":14,\"minzoom\":6}', '[{\"layer_id\":48,\"type\":\"raster\",\"id\":\"layer_for_src_48\",\"source\":\"src_48\",\"source-layer\":\"data\",\"maxzoom\":14,\"minzoom\":6,\"layout\":{\"visibility\":\"visible\"}}]', 'Frecuencia de observación de agua obtenida de imágenes satelitales de los proyectos Landsat 5, Landsat 7 y Landsat 8 mediante el algoritmo de Water Observation From Space (WOFS), desde el año 2000 hasta el 2018 para determinar la frecuencia de agua superficial en el Río Magdalena.', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/48/Captura2.PNG', '2020-11-08 22:35:50', '2020-11-13 11:03:24', 'raster', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (49, 21, 5.00, 'Resistencia relativa a la erosión fluvial de orillas', 'src_49', 'shape', 'layer.svg', '{\"id\":\"src_49\",\"type\":\"vector\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_49.json\"}', '[{\"filter\":[\"==\",\"R_RELATIVA\",\"Cauce activo 2019\"],\"id\":\"R_RELATIVA = Cauce activo 2019_src_49_0\",\"type\":\"fill\",\"paint\":{\"fill-opacity\":1,\"fill-color\":\"#85E1FF\",\"fill-outline-color\":\"#232323\"},\"source\":\"src_49\",\"source-layer\":\"data\",\"layer_id\":49,\"layout\":{\"visibility\":\"visible\"}},{\"filter\":[\"==\",\"R_RELATIVA\",\"Mar Caribe\"],\"id\":\"R_RELATIVA = Mar Caribe_src_49_1\",\"type\":\"fill\",\"paint\":{\"fill-opacity\":1,\"fill-color\":\"#49D2FF\",\"fill-outline-color\":\"#232323\"},\"source\":\"src_49\",\"source-layer\":\"data\",\"layer_id\":49,\"layout\":{\"visibility\":\"visible\"}},{\"filter\":[\"==\",\"R_RELATIVA\",\"Alta\"],\"id\":\"R_RELATIVA = Alta_src_49_2\",\"type\":\"fill\",\"paint\":{\"fill-opacity\":1,\"fill-color\":\"#7DA93E\",\"fill-outline-color\":\"#232323\"},\"source\":\"src_49\",\"source-layer\":\"data\",\"layer_id\":49,\"layout\":{\"visibility\":\"visible\"}},{\"filter\":[\"==\",\"R_RELATIVA\",\"Media-Alta\"],\"id\":\"R_RELATIVA = Media-Alta_src_49_3\",\"type\":\"fill\",\"paint\":{\"fill-opacity\":1,\"fill-color\":\"#85FFA4\",\"fill-outline-color\":\"#232323\"},\"source\":\"src_49\",\"source-layer\":\"data\",\"layer_id\":49,\"layout\":{\"visibility\":\"visible\"}},{\"filter\":[\"==\",\"R_RELATIVA\",\"Media\"],\"id\":\"R_RELATIVA = Media_src_49_4\",\"type\":\"fill\",\"paint\":{\"fill-opacity\":1,\"fill-color\":\"#D7FF85\",\"fill-outline-color\":\"#232323\"},\"source\":\"src_49\",\"source-layer\":\"data\",\"layer_id\":49,\"layout\":{\"visibility\":\"visible\"}},{\"filter\":[\"==\",\"R_RELATIVA\",\"Media-Baja\"],\"id\":\"R_RELATIVA = Media-Baja_src_49_5\",\"type\":\"fill\",\"paint\":{\"fill-opacity\":1,\"fill-color\":\"#FFDF84\",\"fill-outline-color\":\"#232323\"},\"source\":\"src_49\",\"source-layer\":\"data\",\"layer_id\":49,\"layout\":{\"visibility\":\"visible\"}},{\"filter\":[\"==\",\"R_RELATIVA\",\"Baja\"],\"id\":\"R_RELATIVA = Baja_src_49_6\",\"type\":\"fill\",\"paint\":{\"fill-opacity\":1,\"fill-color\":\"#DD750D\",\"fill-outline-color\":\"#232323\"},\"source\":\"src_49\",\"source-layer\":\"data\",\"layer_id\":49,\"layout\":{\"visibility\":\"visible\"}},{\"filter\":[\"==\",\"R_RELATIVA\",\"Muy Baja\"],\"id\":\"R_RELATIVA = Muy Baja_src_49_7\",\"type\":\"fill\",\"paint\":{\"fill-opacity\":1,\"fill-color\":\"#F80008\",\"fill-outline-color\":\"#232323\"},\"source\":\"src_49\",\"source-layer\":\"data\",\"layer_id\":49,\"layout\":{\"visibility\":\"visible\"}}]', 'Mosaico de Resistencia relativa a la erosión fluvial de orillas. Fuente:\n-Vargas, G. (2002). Estudio Geologico, Geomorfologico, zonificación de la resistencia de materiales a la erosión y susceptibilidad a las inundaciones entre los municipios de Sitio Nuevo y Zapayan. Barranquilla. Esc 1:50.000\nCORMAGDALENA-IDEAM. (2001). Geomorfología y susceptibilidad a la inundación del valle fluvial del Magdalena, Sector Barrancabermeja - Bocas de Ceniza. Esc 1:100.000\n-Universidad del Norte, CORMAGDALENA (2009). Resistencia relativa de orillas. Planos. Contrato 0-0021-2009. Esc 1:100.000\n-Loboguerrero, A. (2016). Diseño de obras de encauzamiento entre Barrancabermeja y Regidor - Informe Final - Anexo 2. Convenio Fedenavi - Cormagdalena.\n-Lancheros, J. (2016). Proyecto de la recuperación de la navegabilidad en el Rio Magdalena - Informe Final - Anexo C. Convenio Navelena - AECOM. Esc 1:100.000', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/49/rreo.PNG', '2020-11-09 04:46:01', '2020-11-13 11:02:02', 'polygons', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (50, 21, 4.00, 'Unidades Geomorfológicas', 'src_50', 'shape', 'layer.svg', '{\"id\":\"src_50\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_50.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":50,\"type\":\"raster\",\"id\":\"layer_for_src_50\",\"source\":\"src_50\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Mosaico de unidades geomorfológicas.', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/50/geomorfologia.PNG', '2020-11-09 05:22:14', '2020-11-17 16:42:06', 'raster', NULL, 1, 0, '<p><strong>Fuentes:</strong>&nbsp;</p><ul><li>-Vargas, G. (2002). Estudio Geologico, Geomorfologico, zonificación de la resistencia de materiales a la erosión y susceptibilidad a las inundaciones entre los municipios de Sitio Nuevo y Zapayan. Barranquilla. Esc 1:50.000</li><li>-CORMAGDALENA-IDEAM. (2001). Geomorfología y susceptibilidad a la inundación del valle fluvial del Magdalena, Sector Barrancabermeja - Bocas de Ceniza. Esc 1:100.000</li><li>-Universidad del Norte, CORMAGDALENA (2009). Resistencia relativa de orillas. Planos. Contrato 0-0021-2009. Esc 1:50.000</li><li>-Loboguerrero, A. (2016). Diseño de obras de encauzamiento entre Barrancabermeja y Regidor - Informe Final - Anexo 2. Convenio Fedenavi - Cormagdalena.</li><li>-Lancheros, J. (2016). Proyecto de la recuperación de la navegabilidad en el Rio Magdalena - Informe Final - Anexo C. Convenio Navelena - AECOM</li></ul>');
INSERT INTO `layers` VALUES (57, 16, 14.10, 'Orillas Río Magdalena - Sector Salamina', 'src_57', 'shape', 'layer.svg', '{\"id\":\"src_57\",\"type\":\"vector\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_57.json\"}', '[{\"filter\":[\"==\",\"Year\",1985],\"id\":\"Year = 1985_src_57_0\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#FFFFCC\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",1986],\"id\":\"Year = 1986_src_57_1\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#F4FBC9\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",1987],\"id\":\"Year = 1987_src_57_2\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#E8F6C6\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",1988],\"id\":\"Year = 1988_src_57_3\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#DCF2C3\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",1989],\"id\":\"Year = 1989_src_57_4\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#D0EDC0\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",1990],\"id\":\"Year = 1990_src_57_5\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#C5E8BD\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",1991],\"id\":\"Year = 1991_src_57_6\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#B9E4BA\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",1996],\"id\":\"Year = 1996_src_57_7\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#ADDFB7\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",1997],\"id\":\"Year = 1997_src_57_8\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#A1DAB4\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",1998],\"id\":\"Year = 1998_src_57_9\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#95D6B6\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",1999],\"id\":\"Year = 1999_src_57_10\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#89D1B8\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2000],\"id\":\"Year = 2000_src_57_11\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#7DCDBA\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2001],\"id\":\"Year = 2001_src_57_12\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#71C8BC\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2002],\"id\":\"Year = 2002_src_57_13\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#65C4BE\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2003],\"id\":\"Year = 2003_src_57_14\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#59BFC0\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2004],\"id\":\"Year = 2004_src_57_15\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#4DBBC2\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2005],\"id\":\"Year = 2005_src_57_16\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#41B6C4\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2006],\"id\":\"Year = 2006_src_57_17\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#3EAFC3\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2007],\"id\":\"Year = 2007_src_57_18\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#3BA8C1\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2008],\"id\":\"Year = 2008_src_57_19\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#39A2C0\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2009],\"id\":\"Year = 2009_src_57_20\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#369BBE\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2010],\"id\":\"Year = 2010_src_57_21\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#3494BD\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2011],\"id\":\"Year = 2011_src_57_22\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#318DBB\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2012],\"id\":\"Year = 2012_src_57_23\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#2E86BA\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2013],\"id\":\"Year = 2013_src_57_24\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#2C7FB8\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2014],\"id\":\"Year = 2014_src_57_25\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#2B76B4\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2015],\"id\":\"Year = 2015_src_57_26\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#2A6CAF\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2016],\"id\":\"Year = 2016_src_57_27\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#2963AB\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2017],\"id\":\"Year = 2017_src_57_28\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#2859A6\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2018],\"id\":\"Year = 2018_src_57_29\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#2750A2\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2019],\"id\":\"Year = 2019_src_57_30\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#26479D\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",2020],\"id\":\"Year = 2020_src_57_31\",\"type\":\"line\",\"paint\":{\"line-opacity\":0,\"line-color\":\"#263D99\",\"line-width\":0,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57},{\"filter\":[\"==\",\"Year\",\"\"],\"id\":\"Year = _src_57_32\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#253494\",\"line-width\":1,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_57\",\"source-layer\":\"data\",\"layer_id\":57}]', 'Orillas del Río Magdalena desde 1985 hasta 2019', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/57/Capturasalamina.PNG', '2020-11-09 09:12:18', '2020-11-17 10:31:03', 'lines', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (58, 17, 15.00, 'Velocidad para Caudal 7600 m3/s', 'src_58', 'raster', 'layer.svg', '{\"id\":\"src_58\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_58.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":58,\"type\":\"raster\",\"id\":\"layer_for_src_58\",\"source\":\"src_58\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Velocidad obtenida de modelación númerica con Delft-3D para caudal 7600m3/s', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/58/Captura.PNG', '2020-11-09 09:21:20', '2020-11-11 22:11:26', 'raster', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (59, 17, 16.00, 'Velocidad para Caudal 8000 m3/s', 'src_59', 'raster', 'layer.svg', '{\"id\":\"src_59\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_59.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":59,\"type\":\"raster\",\"id\":\"layer_for_src_59\",\"source\":\"src_59\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Velocidad obtenida de modelación númerica con Delft-3D para caudal 8000m3/s', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/59/Captura.PNG', '2020-11-09 09:33:51', '2020-11-09 09:41:57', 'raster', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (60, 17, 17.00, 'Velocidad para Caudal 9000 m3/s', 'src_60', 'raster', 'layer.svg', '{\"id\":\"src_60\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_60.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":60,\"type\":\"raster\",\"id\":\"layer_for_src_60\",\"source\":\"src_60\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Velocidad obtenida de modelación númerica con Delft-3D para caudal 9000m3/s', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/60/Captura.PNG', '2020-11-09 09:41:14', '2020-11-09 09:41:54', 'raster', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (61, 17, 18.00, 'Velocidad para Caudal 10000 m3/s', 'src_61', 'raster', 'layer.svg', '{\"id\":\"src_61\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_61.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":61,\"type\":\"raster\",\"id\":\"layer_for_src_61\",\"source\":\"src_61\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Velocidad obtenida de modelación númerica con Delft-3D para caudal 10000m3/s', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/61/Captura.PNG', '2020-11-09 09:49:05', '2020-11-09 10:00:13', 'raster', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (62, 17, 19.00, 'Velocidad para Caudal 11000 m3/s', 'src_62', 'raster', 'layer.svg', '{\"id\":\"src_62\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_62.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":62,\"type\":\"raster\",\"id\":\"layer_for_src_62\",\"source\":\"src_62\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Velocidad obtenida de modelación númerica con Delft-3D para caudal 11000m3/s', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/62/Captura.PNG', '2020-11-09 09:50:18', '2020-11-09 10:00:07', 'raster', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (63, 17, 20.00, 'Velocidad para Caudal 12000 m3/s', 'src_63', 'raster', 'layer.svg', '{\"id\":\"src_63\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_63.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":63,\"type\":\"raster\",\"id\":\"layer_for_src_63\",\"source\":\"src_63\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Velocidad obtenida de modelación númerica con Delft-3D para caudal 12000m3/s', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/63/Captura.PNG', '2020-11-09 09:52:53', '2020-11-09 10:00:37', 'raster', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (65, 12, 2.00, 'Aforos de caudal (ADCP)', 'ADCP', 'stations', 'layer.svg', '{\"id\":\"ADCP\",\"type\":\"geojson\",\"data\":{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.82319731670\",\"10.40877822470\"]},\"properties\":{\"id\":37,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png\",\"name\":\"Estaci\\u00f3n 1 - El Pi\\u00f1on\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.83080056670\",\"10.41832777780\"]},\"properties\":{\"id\":38,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png\",\"name\":\"Estaci\\u00f3n 2 - El Pi\\u00f1on\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.82097073330\",\"10.42603991670\"]},\"properties\":{\"id\":39,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png\",\"name\":\"Estaci\\u00f3n 3 - El Pi\\u00f1on\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.82234444440\",\"10.42983611110\"]},\"properties\":{\"id\":40,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png\",\"name\":\"Estaci\\u00f3n 4 - El Pi\\u00f1on\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.82113611110\",\"10.43421944440\"]},\"properties\":{\"id\":41,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png\",\"name\":\"Estaci\\u00f3n 5 - El Pi\\u00f1on\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.82868611110\",\"10.43467763330\"]},\"properties\":{\"id\":42,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png\",\"name\":\"Estaci\\u00f3n 6 - El Pi\\u00f1on\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.82544485000\",\"10.43182222220\"]},\"properties\":{\"id\":43,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png\",\"name\":\"Estaci\\u00f3n 9 - El Pi\\u00f1on\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.81471245000\",\"10.43405277780\"]},\"properties\":{\"id\":44,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png\",\"name\":\"Estaci\\u00f3n 11 - El Pi\\u00f1on\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.81446363330\",\"10.42860555560\"]},\"properties\":{\"id\":45,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png\",\"name\":\"Estaci\\u00f3n 12 - El Pi\\u00f1on\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.82664590000\",\"10.44334722220\"]},\"properties\":{\"id\":46,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png\",\"name\":\"Estaci\\u00f3n 13 - El Pi\\u00f1on\",\"type\":\"stations\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[\"-74.81645646670\",\"10.44960555560\"]},\"properties\":{\"id\":47,\"icon\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png\",\"name\":\"Estaci\\u00f3n 14 - El Pi\\u00f1on\",\"type\":\"stations\"}}]}}', '[{\"layer_id\":65,\"id\":\"layer_65ADCP\",\"type\":\"symbol\",\"source\":\"ADCP\",\"paint\":{\"icon-opacity\":0.8},\"layout\":{\"icon-image\":\"{icon}\",\"icon-size\":0.7,\"visibility\":\"visible\",\"text-anchor\":\"left\",\"text-offset\":[1,0],\"text-field\":\"{name}\",\"text-optional\":true,\"icon-allow-overlap\":false}}]', 'Estaciones de mediciones ADCP sobre el Río Magdalena', NULL, '2020-11-10 14:27:00', '2020-11-17 12:22:44', 'points', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (66, 23, 6.00, 'Frecuencia de canal navegable (%)', 'src_66', 'raster', 'layer.svg', '{\"id\":\"src_66\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_66.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":66,\"type\":\"raster\",\"id\":\"layer_for_src_66\",\"source\":\"src_66\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Frecuencia de  canal navegable  obtenida a partir de levantamientos batimetricos realizados por Navelena periodo 2015 - 2017 y  tracks GPS de embarcaciones suministradas por Cormagdalena en el periodo 2018 - 2019', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/66/Captura.PNG', '2020-11-11 03:22:11', '2020-11-13 11:05:36', 'raster', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (67, 21, 3.00, 'Orillas del Rio Magdalena', 'src_67', 'shape', 'layer.svg', '{\"id\":\"src_67\",\"type\":\"vector\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_67.json\"}', '[{\"filter\":[\"==\",\"Id\",2001],\"id\":\"Id = 2001_src_67_0\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#018571\",\"line-width\":2,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_67\",\"source-layer\":\"data\",\"layer_id\":67},{\"filter\":[\"==\",\"Id\",2004],\"id\":\"Id = 2004_src_67_1\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#49AE9F\",\"line-width\":2,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_67\",\"source-layer\":\"data\",\"layer_id\":67},{\"filter\":[\"==\",\"Id\",2007],\"id\":\"Id = 2007_src_67_2\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#91D3C9\",\"line-width\":2,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_67\",\"source-layer\":\"data\",\"layer_id\":67},{\"filter\":[\"==\",\"Id\",2011],\"id\":\"Id = 2011_src_67_3\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#D4EAE7\",\"line-width\":2,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_67\",\"source-layer\":\"data\",\"layer_id\":67},{\"filter\":[\"==\",\"Id\",2015],\"id\":\"Id = 2015_src_67_4\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#EFE7D3\",\"line-width\":2,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_67\",\"source-layer\":\"data\",\"layer_id\":67},{\"filter\":[\"==\",\"Id\",2017],\"id\":\"Id = 2017_src_67_5\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#E3CA8E\",\"line-width\":2,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_67\",\"source-layer\":\"data\",\"layer_id\":67},{\"filter\":[\"==\",\"Id\",2019],\"id\":\"Id = 2019_src_67_6\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#C79952\",\"line-width\":2,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_67\",\"source-layer\":\"data\",\"layer_id\":67},{\"filter\":[\"==\",\"Id\",\"\"],\"id\":\"Id = _src_67_7\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#A6611A\",\"line-width\":2,\"line-offset\":0,\"line-dasharray\":[5,2]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_67\",\"source-layer\":\"data\",\"layer_id\":67}]', 'Orillas del Rio Magdalena desde 2000 hasta el 2019 tomadas desde imagenes sateliteles Landsat 7 y Landsat 8', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/67/Captura.PNG', '2020-11-11 04:08:10', '2020-11-13 11:06:01', 'lines', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (69, 18, 13.00, 'Velocidad para Periodo de Retorno de 2.33 años (m/s)', 'src_69', 'raster', 'layer.svg', '{\"id\":\"src_69\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_69.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":69,\"type\":\"raster\",\"id\":\"layer_for_src_69\",\"source\":\"src_69\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Velocidad obtenida de modelación númerica con Delft-3D para el escenario de periodo de retorno de 2.33 años', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/69/Captura.PNG', '2020-11-11 05:29:47', '2020-11-11 22:08:19', 'raster', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (70, 19, 10.00, 'Profundidad para Caudal Medio (m)', 'src_70', 'raster', 'layer.svg', '{\"id\":\"src_70\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_70.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":70,\"type\":\"raster\",\"id\":\"layer_for_src_70\",\"source\":\"src_70\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Profundidad obtenida de modelación númerica con Delft-3D para el escenario de caudal medio', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/70/Captura.PNG', '2020-11-11 05:49:48', '2020-11-11 22:08:39', 'raster', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (71, 19, 9.00, 'Profundidad para Periodo de Retorno de 2.33 años (m)', 'src_71', 'raster', 'layer.svg', '{\"id\":\"src_71\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_71.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":71,\"type\":\"raster\",\"id\":\"layer_for_src_71\",\"source\":\"src_71\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Profundidad obtenida de modelación númerica con Delft-3D para el escenario de periodo de retorno de 2.33 años', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/71/Captura.PNG', '2020-11-11 06:03:01', '2020-11-11 22:09:25', 'raster', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (72, 19, 8.00, 'Profundidad para Nivel de Reducción de 90% (m)', 'src_72', 'raster', 'layer.svg', '{\"id\":\"src_72\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_72.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":72,\"type\":\"raster\",\"id\":\"layer_for_src_72\",\"source\":\"src_72\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Profundidad obtenida de modelación númerica con Delft-3D para el escenario de nivel de reducción del 90%', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/72/Captura.PNG', '2020-11-11 06:14:13', '2020-11-17 11:23:00', 'raster', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (73, 18, 12.00, 'Velocidad para Caudal Medio (m/s)', 'src_73', 'raster', 'layer.svg', '{\"id\":\"src_73\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_73.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":73,\"type\":\"raster\",\"id\":\"layer_for_src_73\",\"source\":\"src_73\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Velocidad obtenida de modelación númerica con Delft-3D para el escenario de caudal medio', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/73/Captura.PNG', '2020-11-11 06:35:56', '2020-11-11 22:06:07', 'raster', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (74, 20, 21.00, 'Profundidad para Caudal 7600 m3/s', 'src_74', 'raster', 'layer.svg', '{\"id\":\"src_74\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_74.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":74,\"type\":\"raster\",\"id\":\"layer_for_src_74\",\"source\":\"src_74\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Profundidad obtenida de modelación númerica con Delft-3D para caudal 7600m3/s', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/74/Captura.PNG', '2020-11-11 06:47:04', '2020-11-11 21:47:16', 'raster', NULL, 0, 0, NULL);
INSERT INTO `layers` VALUES (75, 20, 22.00, 'Profundidad para Caudal 8000 m3/s', 'src_75', 'raster', 'layer.svg', '{\"id\":\"src_75\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_75.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":75,\"type\":\"raster\",\"id\":\"layer_for_src_75\",\"source\":\"src_75\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Profundidad obtenida de modelación númerica con Delft-3D para caudal 8000m3/s', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/75/Captura.PNG', '2020-11-11 06:48:13', '2020-11-11 21:47:21', 'raster', NULL, 0, 0, NULL);
INSERT INTO `layers` VALUES (76, 20, 22.00, 'Profundidad para Caudal 9000 m3/s', 'src_76', 'raster', 'layer.svg', '{\"id\":\"src_76\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_76.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":76,\"type\":\"raster\",\"id\":\"layer_for_src_76\",\"source\":\"src_76\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Profundidad obtenida de modelación númerica con Delft-3D para caudal 9000m3/s', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/76/Captura.PNG', '2020-11-11 06:49:43', '2020-11-11 21:47:25', 'raster', NULL, 0, 0, NULL);
INSERT INTO `layers` VALUES (77, 20, 23.00, 'Profundidad para Caudal 10000 m3/s', 'src_77', 'raster', 'layer.svg', '{\"id\":\"src_77\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_77.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":77,\"type\":\"raster\",\"id\":\"layer_for_src_77\",\"source\":\"src_77\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Profundidad obtenida de modelación númerica con Delft-3D para caudal 10000m3/s', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/77/Captura.PNG', '2020-11-11 06:50:36', '2020-11-11 21:47:29', 'raster', NULL, 0, 0, NULL);
INSERT INTO `layers` VALUES (78, 20, 24.00, 'Profundidad para Caudal 11000 m3/s', 'src_78', 'raster', 'layer.svg', '{\"id\":\"src_78\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_78.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":78,\"type\":\"raster\",\"id\":\"layer_for_src_78\",\"source\":\"src_78\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Profundidad obtenida de modelación númerica con Delft-3D para caudal 11000m3/s', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/78/Captura.PNG', '2020-11-11 06:54:20', '2020-11-11 21:47:33', 'raster', NULL, 0, 0, NULL);
INSERT INTO `layers` VALUES (79, 20, 25.00, 'Profundidad para Caudal 12000 m3/s', 'src_79', 'raster', 'layer.svg', '{\"id\":\"src_79\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_79.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":79,\"type\":\"raster\",\"id\":\"layer_for_src_79\",\"source\":\"src_79\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Profundidad obtenida de modelación númerica con Delft-3D para caudal 12000m3/s', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/79/Captura.PNG', '2020-11-11 06:55:13', '2020-11-11 21:47:36', 'raster', NULL, 0, 0, NULL);
INSERT INTO `layers` VALUES (80, 18, 11.00, 'Velocidad para Nivel de Reducción de 90% (m/s)', 'src_80', 'raster', 'layer.svg', '{\"id\":\"src_80\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_80.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":80,\"type\":\"raster\",\"id\":\"layer_for_src_80\",\"source\":\"src_80\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Velocidad obtenida de modelación númerica con Delft-3D para el escenario de nivel de reducción del 90%', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/80/Captura.PNG', '2020-11-11 08:06:14', '2020-11-17 11:37:55', 'raster', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (81, 24, 7.00, 'Velocidad y Profundidad', 'speedprf.geojson', 'geojson', 'layer.svg', '{\"id\":\"Source81\",\"type\":\"geojson\",\"data\":\"https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/81/speedprf.geojson\"}', '[{\"layer_id\":81,\"id\":\"LayerPolygon81\",\"source\":\"Source81\",\"type\":\"fill\",\"paint\":{\"fill-color\":\"#088\",\"fill-outline-color\":\"#883\",\"fill-opacity\":0.1},\"layout\":{\"visibility\":\"visible\"},\"filter\":[\"==\",\"$type\",\"Polygon\"]}]', '', NULL, '2020-11-13 11:18:36', '2020-11-17 12:16:08', 'polygons', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (82, 23, 6.00, 'Frecuencia de dragado potencial', 'src_82', 'raster', 'layer.svg', '{\"id\":\"src_82\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_82.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":82,\"type\":\"raster\",\"id\":\"layer_for_src_82\",\"source\":\"src_82\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Frecuencia de dragado potencial', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/82/Captura.PNG', '2020-11-17 08:51:58', '2020-11-17 12:15:52', 'raster', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (83, 16, 14.20, 'Cota de Lecho (m.s.n.m)', 'src_83', 'raster', 'layer.svg', '{\"id\":\"src_83\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_83.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":83,\"type\":\"raster\",\"id\":\"layer_for_src_83\",\"source\":\"src_83\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Cota de Lecho', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/83/Captura.PNG', '2020-11-17 09:43:19', '2020-11-17 12:00:50', 'raster', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (84, 16, 14.00, 'Orillas Río Magdalena - Sector Salamina 2020', 'src_84', 'shape', 'layer.svg', '{\"id\":\"src_84\",\"type\":\"vector\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_84.json\"}', '[{\"id\":\"QGIS Simple Symbol_src_84_0\",\"type\":\"line\",\"paint\":{\"line-opacity\":1,\"line-color\":\"#E48928\",\"line-width\":3,\"line-offset\":0,\"line-dasharray\":[5,1]},\"layout\":{\"line-cap\":\"square\",\"line-join\":\"bevel\",\"visibility\":\"visible\"},\"source\":\"src_84\",\"source-layer\":\"data\",\"layer_id\":84}]', 'Orillas del Río Magdalena 2020', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/84/Captura2020.PNG', '2020-11-17 10:11:48', '2020-11-17 12:16:17', 'lines', NULL, 1, 0, NULL);
INSERT INTO `layers` VALUES (85, 19, 8.10, 'Profundidad para Nivel de Reducción de 95% (m)', 'src_85', 'raster', 'layer.svg', '{\"id\":\"src_85\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_85.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":85,\"type\":\"raster\",\"id\":\"layer_for_src_85\",\"source\":\"src_85\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Profundidad  obtenida de modelación númerica con Delft-3D para el escenario de nivel de reducción del 95%', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/85/Captura.PNG', '2020-11-17 11:32:58', '2020-11-17 11:46:45', 'raster', NULL, NULL, 0, NULL);
INSERT INTO `layers` VALUES (86, 18, 11.20, 'Velocidad para Nivel de Reducción de 95% (m/s)', 'src_86', 'raster', 'layer.svg', '{\"id\":\"src_86\",\"type\":\"raster\",\"url\":\"https://obsriomagdalena.uninorte.edu.co/tileserver/data/src_86.json\",\"maxzoom\":15,\"minzoom\":5}', '[{\"layer_id\":86,\"type\":\"raster\",\"id\":\"layer_for_src_86\",\"source\":\"src_86\",\"source-layer\":\"data\",\"maxzoom\":20,\"minzoom\":5,\"layout\":{\"visibility\":\"visible\"}}]', 'Velocidad obtenida de modelación númerica con Delft-3D para el escenario de nivel de reducción del 95%', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/LAYERS/86/Captura.PNG', '2020-11-17 11:44:06', '2020-11-17 11:44:06', 'raster', NULL, NULL, 0, NULL);

-- ----------------------------
-- Table structure for logs
-- ----------------------------
DROP TABLE IF EXISTS `logs`;
CREATE TABLE `logs`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `desc` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `table` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `table_id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `logs_user_id_foreign`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 942 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of logs
-- ----------------------------
INSERT INTO `logs` VALUES (399, 'User (10, Luis C. Rojano): UPDATE   People (24, Humberto Rangel Ávila).', 'people', '24', 10, '2020-08-31 11:20:48', '2020-08-31 11:20:48');
INSERT INTO `logs` VALUES (400, 'User (10, Luis C. Rojano): ADD   People (32, Augusto Herminio Sisa Camargo, M.Sc).', 'people', '32', 10, '2020-08-31 11:24:00', '2020-08-31 11:24:00');
INSERT INTO `logs` VALUES (401, 'User (10, Luis C. Rojano): ADD   People (33, Luis Carlos Rojano).', 'people', '33', 10, '2020-08-31 11:25:10', '2020-08-31 11:25:10');
INSERT INTO `logs` VALUES (402, 'User (10, Luis C. Rojano): ADD   People (34, Wilson Nieto Bernal).', 'people', '34', 10, '2020-08-31 11:26:59', '2020-08-31 11:26:59');
INSERT INTO `logs` VALUES (403, 'User (10, Luis C. Rojano): ADD   People (35, Colaborador).', 'people', '35', 10, '2020-08-31 11:27:46', '2020-08-31 11:27:46');
INSERT INTO `logs` VALUES (404, 'User (10, Luis C. Rojano): ADD   People (36, Colaborador 6).', 'people', '36', 10, '2020-08-31 11:29:13', '2020-08-31 11:29:13');
INSERT INTO `logs` VALUES (405, 'User (10, Luis C. Rojano): ADD   People (37, Colab 7).', 'people', '37', 10, '2020-08-31 11:29:30', '2020-08-31 11:29:30');
INSERT INTO `logs` VALUES (406, 'User (10, Luis C. Rojano): ADD   People (38, colab).', 'people', '38', 10, '2020-08-31 11:29:52', '2020-08-31 11:29:52');
INSERT INTO `logs` VALUES (407, '(10, Luis C. Rojano): DELETE layer (22, cause activo 2).', 'layers', '22', 10, '2020-08-31 11:37:50', '2020-08-31 11:37:50');
INSERT INTO `logs` VALUES (408, 'User (10, Luis C. Rojano): ADD   Layer (23, Cabecera).', 'layers', '23', 10, '2020-08-31 11:38:45', '2020-08-31 11:38:45');
INSERT INTO `logs` VALUES (409, '(10, Luis C. Rojano): Update Visibility (23, Cabecera).', 'layers', '23', 10, '2020-08-31 11:39:03', '2020-08-31 11:39:03');
INSERT INTO `logs` VALUES (410, '(10, Luis C. Rojano): Update exclusions (16, RREO).', 'layers', '16', 10, '2020-08-31 11:42:17', '2020-08-31 11:42:17');
INSERT INTO `logs` VALUES (411, 'User (10, Luis C. Rojano): ADD   Layer (24, Puntos).', 'layers', '24', 10, '2020-08-31 11:45:05', '2020-08-31 11:45:05');
INSERT INTO `logs` VALUES (412, 'User (10, Luis C. Rojano): UPDATE   Layer (23, Cabecera).', 'layers', '23', 10, '2020-08-31 11:46:12', '2020-08-31 11:46:12');
INSERT INTO `logs` VALUES (413, '(10, Luis C. Rojano): Update layer (24, Puntos).', 'layers', '24', 10, '2020-08-31 11:47:36', '2020-08-31 11:47:36');
INSERT INTO `logs` VALUES (414, '(10, Luis C. Rojano): Update Visibility (23, Cabecera).', 'layers', '23', 10, '2020-08-31 11:50:43', '2020-08-31 11:50:43');
INSERT INTO `logs` VALUES (415, 'User (45, Luis Rojano): ADD  station (17, ESTACION 1).', 'stations', '17', 45, '2020-08-31 17:40:30', '2020-08-31 17:40:30');
INSERT INTO `logs` VALUES (416, '(45, Luis Rojano): DELETE station (17, ESTACION 1).', 'stations', '17', 45, '2020-08-31 18:43:32', '2020-08-31 18:43:32');
INSERT INTO `logs` VALUES (417, '(45, Luis Rojano): Update exclusions (21, Plygons 1).', 'layers', '21', 45, '2020-08-31 19:50:46', '2020-08-31 19:50:46');
INSERT INTO `logs` VALUES (418, 'User (45, Luis Rojano): ADD   COLUMN (7, carpeta).', 'columns', '7', 45, '2020-08-31 19:57:49', '2020-08-31 19:57:49');
INSERT INTO `logs` VALUES (419, '(45, Luis Rojano): DELETE column (7, carpeta).', 'columns', '7', 45, '2020-08-31 19:57:57', '2020-08-31 19:57:57');
INSERT INTO `logs` VALUES (420, '(45, Luis Rojano): DELETE layer (21, Plygons 1).', 'layers', '21', 45, '2020-09-03 09:49:49', '2020-09-03 09:49:49');
INSERT INTO `logs` VALUES (421, '(45, Luis Rojano): Update Visibility (23, Cabecera).', 'layers', '23', 45, '2020-09-03 09:49:52', '2020-09-03 09:49:52');
INSERT INTO `logs` VALUES (422, '(45, Luis Rojano): DELETE layer (23, Cabecera).', 'layers', '23', 45, '2020-09-03 09:49:59', '2020-09-03 09:49:59');
INSERT INTO `logs` VALUES (423, '(45, Luis Rojano): DELETE layer (24, Puntos).', 'layers', '24', 45, '2020-09-03 09:50:10', '2020-09-03 09:50:10');
INSERT INTO `logs` VALUES (424, 'User (45, Luis Rojano): ADD   Layer (25, Frecuencia de observación de agua (%)).', 'layers', '25', 45, '2020-09-03 09:53:27', '2020-09-03 09:53:27');
INSERT INTO `logs` VALUES (425, 'User (45, Luis Rojano): UPDATE   Layer (25, Frecuencia de observación de agua).', 'layers', '25', 45, '2020-09-03 09:55:40', '2020-09-03 09:55:40');
INSERT INTO `logs` VALUES (426, '(45, Luis Rojano): DELETE layer (25, Frecuencia de observación de agua).', 'layers', '25', 45, '2020-09-03 09:56:14', '2020-09-03 09:56:14');
INSERT INTO `logs` VALUES (427, 'User (45, Luis Rojano): ADD   Layer (26, Frecuencia de observación de agua).', 'layers', '26', 45, '2020-09-03 09:59:02', '2020-09-03 09:59:02');
INSERT INTO `logs` VALUES (428, 'User (45, Luis Rojano): UPDATE   Layer (26, Frecuencia de observación de agua).', 'layers', '26', 45, '2020-09-03 10:01:44', '2020-09-03 10:01:44');
INSERT INTO `logs` VALUES (429, 'User (45, Luis Rojano): UPDATE   Layer (26, Frecuencia de observación de agua (%)).', 'layers', '26', 45, '2020-09-03 10:02:19', '2020-09-03 10:02:19');
INSERT INTO `logs` VALUES (430, 'User (45, Luis Rojano): UPDATE   Layer (26, Frecuencia de observación de agua (%)).', 'layers', '26', 45, '2020-09-03 10:04:11', '2020-09-03 10:04:11');
INSERT INTO `logs` VALUES (431, 'User (45, Luis Rojano): UPDATE   Layer (26, Frecuencia de observación de agua (%)).', 'layers', '26', 45, '2020-09-03 10:18:24', '2020-09-03 10:18:24');
INSERT INTO `logs` VALUES (432, 'User (45, Luis Rojano): UPDATE   Layer (26, Frecuencia de observación de agua (%)).', 'layers', '26', 45, '2020-09-03 10:19:26', '2020-09-03 10:19:26');
INSERT INTO `logs` VALUES (433, '(45, Luis Rojano): DELETE layer (26, Frecuencia de observación de agua (%)).', 'layers', '26', 45, '2020-09-03 10:55:21', '2020-09-03 10:55:21');
INSERT INTO `logs` VALUES (434, 'User (45, Luis Rojano): ADD   Layer (27, Frecuencia de observación de agua (%)).', 'layers', '27', 45, '2020-09-03 11:43:12', '2020-09-03 11:43:12');
INSERT INTO `logs` VALUES (435, '(45, Luis Rojano): Update Visibility (27, Frecuencia de observación de agua (%)).', 'layers', '27', 45, '2020-09-03 11:44:47', '2020-09-03 11:44:47');
INSERT INTO `logs` VALUES (436, '(45, Luis Rojano): Update exclusions (27, Frecuencia de observación de agua (%)).', 'layers', '27', 45, '2020-09-03 11:45:22', '2020-09-03 11:45:22');
INSERT INTO `logs` VALUES (437, 'User (45, Luis Rojano): UPDATE   Layer (16, Resistencia relativa).', 'layers', '16', 45, '2020-09-03 12:25:24', '2020-09-03 12:25:24');
INSERT INTO `logs` VALUES (438, 'User (45, Luis Rojano): UPDATE   Layer (16, Resistencia relativa).', 'layers', '16', 45, '2020-09-03 12:29:39', '2020-09-03 12:29:39');
INSERT INTO `logs` VALUES (439, 'User (45, Luis Rojano): UPDATE   Layer (17, Cabecera).', 'layers', '17', 45, '2020-09-03 12:34:43', '2020-09-03 12:34:43');
INSERT INTO `logs` VALUES (440, 'User (45, Luis Rojano): ADD   Layer (28, Departamentos).', 'layers', '28', 45, '2020-09-03 12:42:35', '2020-09-03 12:42:35');
INSERT INTO `logs` VALUES (441, 'User (45, Luis Rojano): ADD   Layer (29, Departamentos).', 'layers', '29', 45, '2020-09-03 12:47:01', '2020-09-03 12:47:01');
INSERT INTO `logs` VALUES (442, '(45, Luis Rojano): DELETE layer (28, Departamentos).', 'layers', '28', 45, '2020-09-03 12:47:10', '2020-09-03 12:47:10');
INSERT INTO `logs` VALUES (443, '(45, Luis Rojano): DELETE layer (29, Departamentos).', 'layers', '29', 45, '2020-09-03 12:50:23', '2020-09-03 12:50:23');
INSERT INTO `logs` VALUES (444, 'User (45, Luis Rojano): ADD   Layer (30, Departamentos).', 'layers', '30', 45, '2020-09-03 12:50:45', '2020-09-03 12:50:45');
INSERT INTO `logs` VALUES (445, '(45, Luis Rojano): Update layer (30, Departamentos).', 'layers', '30', 45, '2020-09-03 12:54:56', '2020-09-03 12:54:56');
INSERT INTO `logs` VALUES (446, '(45, Luis Rojano): Update layer (30, Departamentos).', 'layers', '30', 45, '2020-09-03 12:55:29', '2020-09-03 12:55:29');
INSERT INTO `logs` VALUES (447, '(45, Luis Rojano): Update layer (30, Departamentos).', 'layers', '30', 45, '2020-09-03 12:56:45', '2020-09-03 12:56:45');
INSERT INTO `logs` VALUES (448, '(45, Luis Rojano): Update layer (30, Departamentos).', 'layers', '30', 45, '2020-09-03 12:58:49', '2020-09-03 12:58:49');
INSERT INTO `logs` VALUES (449, 'User (45, Luis Rojano): ADD   Layer (31, Vías Completas).', 'layers', '31', 45, '2020-09-03 13:10:16', '2020-09-03 13:10:16');
INSERT INTO `logs` VALUES (450, '(45, Luis Rojano): Update layer (31, Vías Completas).', 'layers', '31', 45, '2020-09-03 13:12:34', '2020-09-03 13:12:34');
INSERT INTO `logs` VALUES (451, '(45, Luis Rojano): Update layer (31, Vías Completas).', 'layers', '31', 45, '2020-09-03 13:13:01', '2020-09-03 13:13:01');
INSERT INTO `logs` VALUES (452, '(45, Luis Rojano): Update layer (31, Vías Completas).', 'layers', '31', 45, '2020-09-03 13:13:39', '2020-09-03 13:13:39');
INSERT INTO `logs` VALUES (453, '(45, Luis Rojano): Update exclusions (31, Vías Completas).', 'layers', '31', 45, '2020-09-03 13:14:06', '2020-09-03 13:14:06');
INSERT INTO `logs` VALUES (454, '(45, Luis Rojano): Update layer (31, Vías Completas).', 'layers', '31', 45, '2020-09-03 13:14:51', '2020-09-03 13:14:51');
INSERT INTO `logs` VALUES (455, '(45, Luis Rojano): Update layer (31, Vías Completas).', 'layers', '31', 45, '2020-09-03 13:15:43', '2020-09-03 13:15:43');
INSERT INTO `logs` VALUES (456, 'User (45, Luis Rojano): UPDATE   Layer (17, Cabecera).', 'layers', '17', 45, '2020-09-03 13:21:48', '2020-09-03 13:21:48');
INSERT INTO `logs` VALUES (457, 'User (45, Luis Rojano): ADD   Layer (32, Cab).', 'layers', '32', 45, '2020-09-03 13:22:54', '2020-09-03 13:22:54');
INSERT INTO `logs` VALUES (458, '(45, Luis Rojano): DELETE layer (32, Cab).', 'layers', '32', 45, '2020-09-03 13:23:01', '2020-09-03 13:23:01');
INSERT INTO `logs` VALUES (459, 'User (45, Luis Rojano): UPDATE   Layer (30, Departamentos).', 'layers', '30', 45, '2020-09-03 13:28:09', '2020-09-03 13:28:09');
INSERT INTO `logs` VALUES (460, '(10, Luis C. Rojano): DELETE layer (17, Cabecera).', 'layers', '17', 10, '2020-09-07 10:16:29', '2020-09-07 10:16:29');
INSERT INTO `logs` VALUES (461, '(10, Luis C. Rojano): DELETE layer (30, Departamentos).', 'layers', '30', 10, '2020-09-07 10:16:33', '2020-09-07 10:16:33');
INSERT INTO `logs` VALUES (462, '(10, Luis C. Rojano): DELETE file (69, Frecuencias).', 'files', '69', 10, '2020-09-08 02:24:22', '2020-09-08 02:24:22');
INSERT INTO `logs` VALUES (463, '(10, Luis C. Rojano): DELETE file (70, Duracion).', 'files', '70', 10, '2020-09-08 02:24:24', '2020-09-08 02:24:24');
INSERT INTO `logs` VALUES (464, '(10, Luis C. Rojano): DELETE file (58, Frecuencias).', 'files', '58', 10, '2020-09-08 02:24:28', '2020-09-08 02:24:28');
INSERT INTO `logs` VALUES (465, '(10, Luis C. Rojano): DELETE file (59, Duracion).', 'files', '59', 10, '2020-09-08 02:24:30', '2020-09-08 02:24:30');
INSERT INTO `logs` VALUES (466, 'User (10, Luis C. Rojano): ADD   Category (8, Cartografía base).', 'categories', '8', 10, '2020-09-08 03:09:11', '2020-09-08 03:09:11');
INSERT INTO `logs` VALUES (467, 'User (10, Luis C. Rojano): ADD   Category (9, Morfología).', 'categories', '9', 10, '2020-09-08 03:10:49', '2020-09-08 03:10:49');
INSERT INTO `logs` VALUES (468, 'User (10, Luis C. Rojano): ADD   Category (10, Navegación).', 'categories', '10', 10, '2020-09-08 03:11:09', '2020-09-08 03:11:09');
INSERT INTO `logs` VALUES (469, '(10, Luis C. Rojano): DELETE category (6, Rasters).', 'categorys', '6', 10, '2020-09-08 03:15:05', '2020-09-08 03:15:05');
INSERT INTO `logs` VALUES (470, '(10, Luis C. Rojano): DELETE category (5, Shapes).', 'categorys', '5', 10, '2020-09-08 03:15:10', '2020-09-08 03:15:10');
INSERT INTO `logs` VALUES (471, 'User (10, Luis C. Rojano): UPDATE   Category (9, Morfología).', 'categories', '9', 10, '2020-09-08 03:19:58', '2020-09-08 03:19:58');
INSERT INTO `logs` VALUES (472, 'User (10, Luis C. Rojano): UPDATE   Category (7, Estaciones).', 'categories', '7', 10, '2020-09-08 03:20:22', '2020-09-08 03:20:22');
INSERT INTO `logs` VALUES (473, 'User (10, Luis C. Rojano): UPDATE   Category (10, Navegación).', 'categories', '10', 10, '2020-09-08 03:20:29', '2020-09-08 03:20:29');
INSERT INTO `logs` VALUES (474, '(10, Luis C. Rojano): Update exclusions (35, IDEAM).', 'layers', '35', 10, '2020-09-08 03:21:49', '2020-09-08 03:21:49');
INSERT INTO `logs` VALUES (475, '(10, Luis C. Rojano): Update exclusions (16, Resistencia relativa).', 'layers', '16', 10, '2020-09-08 03:23:21', '2020-09-08 03:23:21');
INSERT INTO `logs` VALUES (476, '(10, Luis C. Rojano): Update exclusions (27, Frecuencia de observación de agua (%)).', 'layers', '27', 10, '2020-09-08 03:23:59', '2020-09-08 03:23:59');
INSERT INTO `logs` VALUES (477, '(10, Luis C. Rojano): Update exclusions (16, Resistencia relativa).', 'layers', '16', 10, '2020-09-08 03:25:00', '2020-09-08 03:25:00');
INSERT INTO `logs` VALUES (478, '(10, Luis C. Rojano): DELETE file (57, Archivo_Csv).', 'files', '57', 10, '2020-09-08 04:45:28', '2020-09-08 04:45:28');
INSERT INTO `logs` VALUES (479, '(10, Luis C. Rojano): DELETE file (68, Archivo_Csv).', 'files', '68', 10, '2020-09-08 04:45:39', '2020-09-08 04:45:39');
INSERT INTO `logs` VALUES (480, '(10, Luis C. Rojano): DELETE file (61, Duracion).', 'files', '61', 10, '2020-09-08 04:45:45', '2020-09-08 04:45:45');
INSERT INTO `logs` VALUES (481, '(10, Luis C. Rojano): DELETE file (72, Duracion).', 'files', '72', 10, '2020-09-08 04:45:51', '2020-09-08 04:45:51');
INSERT INTO `logs` VALUES (482, '(10, Luis C. Rojano): DELETE file (73, Frecuencias).', 'files', '73', 10, '2020-09-08 04:45:53', '2020-09-08 04:45:53');
INSERT INTO `logs` VALUES (483, '(10, Luis C. Rojano): DELETE file (60, Archivo_Csv).', 'files', '60', 10, '2020-09-08 04:46:47', '2020-09-08 04:46:47');
INSERT INTO `logs` VALUES (484, '(10, Luis C. Rojano): DELETE file (67, Duracion).', 'files', '67', 10, '2020-09-08 04:46:51', '2020-09-08 04:46:51');
INSERT INTO `logs` VALUES (485, '(10, Luis C. Rojano): DELETE file (65, Archivo_Csv).', 'files', '65', 10, '2020-09-08 04:46:58', '2020-09-08 04:46:58');
INSERT INTO `logs` VALUES (486, 'User (10, Luis C. Rojano): UPDATE   Layer (27, Frecuencia de observación de agua (%)).', 'layers', '27', 10, '2020-09-08 20:36:04', '2020-09-08 20:36:04');
INSERT INTO `logs` VALUES (487, 'User (10, Luis C. Rojano): UPDATE   People (35, Stephanie Diaz, Ing.).', 'people', '35', 10, '2020-09-08 20:37:52', '2020-09-08 20:37:52');
INSERT INTO `logs` VALUES (488, 'User (10, Luis C. Rojano): UPDATE   People (36, Ruben Doria, Ing.).', 'people', '36', 10, '2020-09-08 20:37:59', '2020-09-08 20:37:59');
INSERT INTO `logs` VALUES (489, 'User (10, Luis C. Rojano): UPDATE   People (37, Alexander Montalvo).', 'people', '37', 10, '2020-09-08 20:38:06', '2020-09-08 20:38:06');
INSERT INTO `logs` VALUES (490, 'User (10, Luis C. Rojano): UPDATE   People (38, Francisco Gómez Díaz).', 'people', '38', 10, '2020-09-08 20:38:15', '2020-09-08 20:38:15');
INSERT INTO `logs` VALUES (491, 'User (10, Luis C. Rojano): ADD   Layer (36, Cabeceras).', 'layers', '36', 10, '2020-09-09 16:01:43', '2020-09-09 16:01:43');
INSERT INTO `logs` VALUES (492, '(10, Luis C. Rojano): Update layer (36, Cabeceras).', 'layers', '36', 10, '2020-09-09 16:07:43', '2020-09-09 16:07:43');
INSERT INTO `logs` VALUES (493, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-09-09 20:49:56', '2020-09-09 20:49:56');
INSERT INTO `logs` VALUES (494, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-09-09 20:50:35', '2020-09-09 20:50:35');
INSERT INTO `logs` VALUES (495, 'User (10, Luis C. Rojano): UPDATE  station (10, BARRANCA VIEJA).', 'stations', '10', 10, '2020-09-09 20:50:36', '2020-09-09 20:50:36');
INSERT INTO `logs` VALUES (496, 'User (10, Luis C. Rojano): UPDATE  station (15, TEBSA).', 'stations', '15', 10, '2020-09-09 20:51:45', '2020-09-09 20:51:45');
INSERT INTO `logs` VALUES (497, 'User (10, Luis C. Rojano): UPDATE  station (14, CALAMAR).', 'stations', '14', 10, '2020-09-09 20:51:46', '2020-09-09 20:51:46');
INSERT INTO `logs` VALUES (498, 'User (10, Luis C. Rojano): UPDATE  station (13, TENERIFE).', 'stations', '13', 10, '2020-09-09 20:51:47', '2020-09-09 20:51:47');
INSERT INTO `logs` VALUES (499, 'User (10, Luis C. Rojano): UPDATE  station (12, PLATO).', 'stations', '12', 10, '2020-09-09 20:51:47', '2020-09-09 20:51:47');
INSERT INTO `logs` VALUES (500, 'User (10, Luis C. Rojano): UPDATE  station (11, MAGANGUE).', 'stations', '11', 10, '2020-09-09 20:51:48', '2020-09-09 20:51:48');
INSERT INTO `logs` VALUES (501, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-09-09 20:51:49', '2020-09-09 20:51:49');
INSERT INTO `logs` VALUES (502, '(10, Luis C. Rojano): DELETE file (63, Frecuencias).', 'files', '63', 10, '2020-09-09 20:52:08', '2020-09-09 20:52:08');
INSERT INTO `logs` VALUES (503, '(10, Luis C. Rojano): DELETE file (64, Duracion).', 'files', '64', 10, '2020-09-09 20:52:10', '2020-09-09 20:52:10');
INSERT INTO `logs` VALUES (504, '(10, Luis C. Rojano): DELETE layer (31, Vías Completas).', 'layers', '31', 10, '2020-09-09 20:53:20', '2020-09-09 20:53:20');
INSERT INTO `logs` VALUES (505, '(10, Luis C. Rojano): DELETE layer (36, Cabeceras).', 'layers', '36', 10, '2020-09-09 20:53:44', '2020-09-09 20:53:44');
INSERT INTO `logs` VALUES (506, '(10, Luis C. Rojano): DELETE layer (27, Frecuencia de observación de agua (%)).', 'layers', '27', 10, '2020-09-09 20:53:58', '2020-09-09 20:53:58');
INSERT INTO `logs` VALUES (507, '(10, Luis C. Rojano): DELETE layer (16, Resistencia relativa).', 'layers', '16', 10, '2020-09-09 20:54:03', '2020-09-09 20:54:03');
INSERT INTO `logs` VALUES (508, 'User (10, Luis C. Rojano): ADD   Layer (37, Cabeceras).', 'layers', '37', 10, '2020-09-09 21:09:12', '2020-09-09 21:09:12');
INSERT INTO `logs` VALUES (509, '(10, Luis C. Rojano): Update layer (37, Cabeceras).', 'layers', '37', 10, '2020-09-09 21:11:16', '2020-09-09 21:11:16');
INSERT INTO `logs` VALUES (510, '(10, Luis C. Rojano): DELETE layer (37, Cabeceras).', 'layers', '37', 10, '2020-09-09 21:35:31', '2020-09-09 21:35:31');
INSERT INTO `logs` VALUES (511, 'User (10, Luis C. Rojano): ADD   Layer (38, Cabeceras).', 'layers', '38', 10, '2020-09-09 21:45:24', '2020-09-09 21:45:24');
INSERT INTO `logs` VALUES (512, '(10, Luis C. Rojano): Update layer (38, Cabeceras).', 'layers', '38', 10, '2020-09-09 22:26:35', '2020-09-09 22:26:35');
INSERT INTO `logs` VALUES (513, '(10, Luis C. Rojano): Update layer (38, Cabeceras).', 'layers', '38', 10, '2020-09-09 22:26:35', '2020-09-09 22:26:35');
INSERT INTO `logs` VALUES (514, '(10, Luis C. Rojano): Update layer (38, Cabeceras).', 'layers', '38', 10, '2020-09-09 22:27:03', '2020-09-09 22:27:03');
INSERT INTO `logs` VALUES (515, 'User (10, Luis C. Rojano): ADD   Layer (39, Departamentos).', 'layers', '39', 10, '2020-09-09 22:34:25', '2020-09-09 22:34:25');
INSERT INTO `logs` VALUES (516, '(10, Luis C. Rojano): Update layer (39, Departamentos).', 'layers', '39', 10, '2020-09-09 22:35:32', '2020-09-09 22:35:32');
INSERT INTO `logs` VALUES (517, '(10, Luis C. Rojano): Update layer (39, Departamentos).', 'layers', '39', 10, '2020-09-09 22:47:58', '2020-09-09 22:47:58');
INSERT INTO `logs` VALUES (518, '(10, Luis C. Rojano): Update layer (39, Departamentos).', 'layers', '39', 10, '2020-09-09 22:49:18', '2020-09-09 22:49:18');
INSERT INTO `logs` VALUES (519, 'User (10, Luis C. Rojano): UPDATE   Layer (39, Departamentos).', 'layers', '39', 10, '2020-09-09 22:49:52', '2020-09-09 22:49:52');
INSERT INTO `logs` VALUES (520, 'User (10, Luis C. Rojano): ADD   Layer (40, Frecuencia de observación de aguar (%)).', 'layers', '40', 10, '2020-09-09 23:14:03', '2020-09-09 23:14:03');
INSERT INTO `logs` VALUES (521, 'User (10, Luis C. Rojano): UPDATE   Layer (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-09-09 23:15:20', '2020-09-09 23:15:20');
INSERT INTO `logs` VALUES (522, 'User (10, Luis C. Rojano): UPDATE   Layer (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-09-09 23:17:23', '2020-09-09 23:17:23');
INSERT INTO `logs` VALUES (523, 'User (10, Luis C. Rojano): UPDATE   Layer (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-09-09 23:18:37', '2020-09-09 23:18:37');
INSERT INTO `logs` VALUES (524, 'User (10, Luis C. Rojano): UPDATE   Layer (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-09-09 23:19:53', '2020-09-09 23:19:53');
INSERT INTO `logs` VALUES (525, 'User (10, Luis C. Rojano): UPDATE   Layer (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-09-09 23:22:50', '2020-09-09 23:22:50');
INSERT INTO `logs` VALUES (526, 'User (10, Luis C. Rojano): UPDATE   Layer (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-09-09 23:25:05', '2020-09-09 23:25:05');
INSERT INTO `logs` VALUES (527, 'User (10, Luis C. Rojano): UPDATE   Layer (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-09-09 23:38:58', '2020-09-09 23:38:58');
INSERT INTO `logs` VALUES (528, 'User (10, Luis C. Rojano): UPDATE   Layer (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-09-09 23:40:16', '2020-09-09 23:40:16');
INSERT INTO `logs` VALUES (529, 'User (10, Luis C. Rojano): UPDATE   Layer (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-09-09 23:40:44', '2020-09-09 23:40:44');
INSERT INTO `logs` VALUES (530, 'User (10, Luis C. Rojano): UPDATE   Layer (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-09-09 23:42:04', '2020-09-09 23:42:04');
INSERT INTO `logs` VALUES (531, 'User (10, Luis C. Rojano): UPDATE   Layer (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-09-09 23:42:54', '2020-09-09 23:42:54');
INSERT INTO `logs` VALUES (532, 'User (10, Luis C. Rojano): UPDATE   Layer (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-09-09 23:43:49', '2020-09-09 23:43:49');
INSERT INTO `logs` VALUES (533, 'User (10, Luis C. Rojano): UPDATE   Layer (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-09-09 23:44:29', '2020-09-09 23:44:29');
INSERT INTO `logs` VALUES (534, 'User (10, Luis C. Rojano): UPDATE   Layer (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-09-09 23:47:19', '2020-09-09 23:47:19');
INSERT INTO `logs` VALUES (535, 'User (10, Luis C. Rojano): UPDATE   Layer (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-09-09 23:52:26', '2020-09-09 23:52:26');
INSERT INTO `logs` VALUES (536, 'User (10, Luis C. Rojano): UPDATE   Layer (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-09-09 23:55:50', '2020-09-09 23:55:50');
INSERT INTO `logs` VALUES (537, 'User (10, Luis C. Rojano): ADD   Layer (41, Geomorfología).', 'layers', '41', 10, '2020-09-10 00:12:17', '2020-09-10 00:12:17');
INSERT INTO `logs` VALUES (538, 'User (10, Luis C. Rojano): UPDATE   Layer (41, Geomorfología).', 'layers', '41', 10, '2020-09-10 00:15:19', '2020-09-10 00:15:19');
INSERT INTO `logs` VALUES (539, '(10, Luis C. Rojano): Update exclusions (41, Geomorfología).', 'layers', '41', 10, '2020-09-10 00:22:38', '2020-09-10 00:22:38');
INSERT INTO `logs` VALUES (540, 'User (10, Luis C. Rojano): ADD   Layer (42, Frecuencia de trazado de canal navegable).', 'layers', '42', 10, '2020-09-10 00:55:55', '2020-09-10 00:55:55');
INSERT INTO `logs` VALUES (541, 'User (10, Luis C. Rojano): UPDATE   Layer (42, Frecuencia de trazado de canal navegable).', 'layers', '42', 10, '2020-09-10 02:02:44', '2020-09-10 02:02:44');
INSERT INTO `logs` VALUES (542, '(10, Luis C. Rojano): Update Visibility (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-09-10 02:51:10', '2020-09-10 02:51:10');
INSERT INTO `logs` VALUES (543, 'User (10, Luis C. Rojano): UPDATE   Layer (42, Frecuencia de trazado de canal navegable).', 'layers', '42', 10, '2020-09-10 02:51:52', '2020-09-10 02:51:52');
INSERT INTO `logs` VALUES (544, 'User (10, Luis C. Rojano): ADD Files To  FILES (72, FRECUENCIA_TEBSA_2).', 'FILES', '72', 10, '2020-09-10 02:53:24', '2020-09-10 02:53:24');
INSERT INTO `logs` VALUES (545, 'User (10, Luis C. Rojano): ADD Files To  FILES (73, DURACION_TEBSA_2).', 'FILES', '73', 10, '2020-09-10 02:53:36', '2020-09-10 02:53:36');
INSERT INTO `logs` VALUES (546, '(10, Luis C. Rojano): DELETE file (62, Archivo_Csv).', 'files', '62', 10, '2020-09-10 02:54:19', '2020-09-10 02:54:19');
INSERT INTO `logs` VALUES (547, 'User (10, Luis C. Rojano): ADD Files To  FILES (74, DURACION_CALAMAR_2).', 'FILES', '74', 10, '2020-09-10 02:54:56', '2020-09-10 02:54:56');
INSERT INTO `logs` VALUES (548, 'User (10, Luis C. Rojano): ADD Files To  FILES (75, FRECUENCIA_CALAMAR_2).', 'FILES', '75', 10, '2020-09-10 02:55:09', '2020-09-10 02:55:09');
INSERT INTO `logs` VALUES (549, 'User (10, Luis C. Rojano): ADD Files To  FILES (76, DURACION_CALAMAR_2).', 'FILES', '76', 10, '2020-09-10 02:55:17', '2020-09-10 02:55:17');
INSERT INTO `logs` VALUES (550, '(10, Luis C. Rojano): DELETE file (74, DURACION_CALAMAR_2).', 'files', '74', 10, '2020-09-10 02:55:32', '2020-09-10 02:55:32');
INSERT INTO `logs` VALUES (551, 'User (10, Luis C. Rojano): ADD Files To  FILES (77, DURACION_CALAMAR_2).', 'FILES', '77', 10, '2020-09-10 02:56:17', '2020-09-10 02:56:17');
INSERT INTO `logs` VALUES (552, '(10, Luis C. Rojano): DELETE file (77, DURACION_CALAMAR_2).', 'files', '77', 10, '2020-09-10 02:57:05', '2020-09-10 02:57:05');
INSERT INTO `logs` VALUES (553, 'User (10, Luis C. Rojano): ADD Files To  FILES (78, DURACION_SAN_PEDRITO_2).', 'FILES', '78', 10, '2020-09-10 02:57:54', '2020-09-10 02:57:54');
INSERT INTO `logs` VALUES (554, 'User (10, Luis C. Rojano): ADD Files To  FILES (79, FRECUENCIA_SAN_PEDRITO_2).', 'FILES', '79', 10, '2020-09-10 02:58:05', '2020-09-10 02:58:05');
INSERT INTO `logs` VALUES (555, '(10, Luis C. Rojano): DELETE file (66, Archivo_Csv).', 'files', '66', 10, '2020-09-10 02:58:51', '2020-09-10 02:58:51');
INSERT INTO `logs` VALUES (556, 'User (10, Luis C. Rojano): ADD Files To  FILES (80, FRECUENCIA_TENERIFE_2).', 'FILES', '80', 10, '2020-09-10 02:59:14', '2020-09-10 02:59:14');
INSERT INTO `logs` VALUES (557, 'User (10, Luis C. Rojano): ADD Files To  FILES (81, DURACION_TENERIFE_2).', 'FILES', '81', 10, '2020-09-10 02:59:25', '2020-09-10 02:59:25');
INSERT INTO `logs` VALUES (558, 'User (10, Luis C. Rojano): ADD Files To  FILES (82, DURACION_PLATO_2).', 'FILES', '82', 10, '2020-09-10 02:59:46', '2020-09-10 02:59:46');
INSERT INTO `logs` VALUES (559, 'User (10, Luis C. Rojano): ADD Files To  FILES (83, FRECUENCIA_PLATO_2).', 'FILES', '83', 10, '2020-09-10 03:00:03', '2020-09-10 03:00:03');
INSERT INTO `logs` VALUES (560, '(10, Luis C. Rojano): DELETE file (71, Archivo_Csv).', 'files', '71', 10, '2020-09-10 03:00:17', '2020-09-10 03:00:17');
INSERT INTO `logs` VALUES (561, 'User (10, Luis C. Rojano): ADD Files To  FILES (84, FRECUENCIA_MAGANGUE_2).', 'FILES', '84', 10, '2020-09-10 03:00:50', '2020-09-10 03:00:50');
INSERT INTO `logs` VALUES (562, 'User (10, Luis C. Rojano): ADD Files To  FILES (85, DURACION_MAGANGUE_2).', 'FILES', '85', 10, '2020-09-10 03:01:15', '2020-09-10 03:01:15');
INSERT INTO `logs` VALUES (563, 'User (10, Luis C. Rojano): ADD  station (16, EL BANCO).', 'stations', '16', 10, '2020-09-10 03:04:03', '2020-09-10 03:04:03');
INSERT INTO `logs` VALUES (564, 'User (10, Luis C. Rojano): ADD Files To  FILES (86, FRECUENCIA_EL_BANCO_2).', 'FILES', '86', 10, '2020-09-10 03:04:37', '2020-09-10 03:04:37');
INSERT INTO `logs` VALUES (565, 'User (10, Luis C. Rojano): ADD Files To  FILES (87, DURACION_EL_BANCO_2).', 'FILES', '87', 10, '2020-09-10 03:05:06', '2020-09-10 03:05:06');
INSERT INTO `logs` VALUES (566, 'User (10, Luis C. Rojano): ADD  station (17, ARMENIA).', 'stations', '17', 10, '2020-09-10 03:07:47', '2020-09-10 03:07:47');
INSERT INTO `logs` VALUES (567, 'User (10, Luis C. Rojano): ADD Files To  FILES (88, DURACION_ARMENIA_2).', 'FILES', '88', 10, '2020-09-10 03:08:05', '2020-09-10 03:08:05');
INSERT INTO `logs` VALUES (568, 'User (10, Luis C. Rojano): ADD Files To  FILES (89, FRECUENCIA_ARMENIA_2).', 'FILES', '89', 10, '2020-09-10 03:08:12', '2020-09-10 03:08:12');
INSERT INTO `logs` VALUES (569, 'User (10, Luis C. Rojano): ADD  station (18, BARBOSA).', 'stations', '18', 10, '2020-09-10 03:09:05', '2020-09-10 03:09:05');
INSERT INTO `logs` VALUES (570, 'User (10, Luis C. Rojano): ADD Files To  FILES (90, FRECUENCIA_BARBOSA_2).', 'FILES', '90', 10, '2020-09-10 03:09:19', '2020-09-10 03:09:19');
INSERT INTO `logs` VALUES (571, 'User (10, Luis C. Rojano): ADD Files To  FILES (91, DURACION_BARBOSA_2).', 'FILES', '91', 10, '2020-09-10 03:09:28', '2020-09-10 03:09:28');
INSERT INTO `logs` VALUES (572, 'User (10, Luis C. Rojano): ADD  station (19, BARRANCABERMEJA).', 'stations', '19', 10, '2020-09-10 03:10:44', '2020-09-10 03:10:44');
INSERT INTO `logs` VALUES (573, 'User (10, Luis C. Rojano): ADD Files To  FILES (92, DURACION_BARRANCABERMEJA_2).', 'FILES', '92', 10, '2020-09-10 03:10:57', '2020-09-10 03:10:57');
INSERT INTO `logs` VALUES (574, 'User (10, Luis C. Rojano): ADD Files To  FILES (93, FRECUENCIA_BARRANCABERMEJA_2).', 'FILES', '93', 10, '2020-09-10 03:11:07', '2020-09-10 03:11:07');
INSERT INTO `logs` VALUES (575, 'User (10, Luis C. Rojano): ADD  station (20, COYONGAL).', 'stations', '20', 10, '2020-09-10 03:18:59', '2020-09-10 03:18:59');
INSERT INTO `logs` VALUES (576, 'User (10, Luis C. Rojano): UPDATE  station (19, BARRANCABERMEJA).', 'stations', '19', 10, '2020-09-10 03:19:17', '2020-09-10 03:19:17');
INSERT INTO `logs` VALUES (577, 'User (10, Luis C. Rojano): UPDATE  station (20, COYONGAL).', 'stations', '20', 10, '2020-09-10 03:19:18', '2020-09-10 03:19:18');
INSERT INTO `logs` VALUES (578, 'User (10, Luis C. Rojano): ADD Files To  FILES (94, FRECUENCIA_COYONGAL_2).', 'FILES', '94', 10, '2020-09-10 03:19:37', '2020-09-10 03:19:37');
INSERT INTO `logs` VALUES (579, 'User (10, Luis C. Rojano): ADD Files To  FILES (95, DURACION_COYONGAL_2).', 'FILES', '95', 10, '2020-09-10 03:19:44', '2020-09-10 03:19:44');
INSERT INTO `logs` VALUES (580, 'User (10, Luis C. Rojano): ADD  station (21, EL CONTENTO).', 'stations', '21', 10, '2020-09-10 03:21:43', '2020-09-10 03:21:43');
INSERT INTO `logs` VALUES (581, 'User (10, Luis C. Rojano): ADD Files To  FILES (96, FRECUENCIA_EL_CONTENTO_2).', 'FILES', '96', 10, '2020-09-10 03:21:57', '2020-09-10 03:21:57');
INSERT INTO `logs` VALUES (582, 'User (10, Luis C. Rojano): ADD Files To  FILES (97, DURACION_EL_CONTENTO_2).', 'FILES', '97', 10, '2020-09-10 03:22:14', '2020-09-10 03:22:14');
INSERT INTO `logs` VALUES (583, 'User (10, Luis C. Rojano): ADD  station (22, GAMARRA).', 'stations', '22', 10, '2020-09-10 03:23:40', '2020-09-10 03:23:40');
INSERT INTO `logs` VALUES (584, 'User (10, Luis C. Rojano): ADD Files To  FILES (98, FRECUENCIA_GAMARRA_2).', 'FILES', '98', 10, '2020-09-10 03:23:56', '2020-09-10 03:23:56');
INSERT INTO `logs` VALUES (585, 'User (10, Luis C. Rojano): ADD Files To  FILES (99, DURACION_GAMARRA_2).', 'FILES', '99', 10, '2020-09-10 03:24:08', '2020-09-10 03:24:08');
INSERT INTO `logs` VALUES (586, 'User (10, Luis C. Rojano): ADD  station (23, GAMARRA AUT).', 'stations', '23', 10, '2020-09-10 03:24:49', '2020-09-10 03:24:49');
INSERT INTO `logs` VALUES (587, 'User (10, Luis C. Rojano): ADD Files To  FILES (100, FRECUENCIA_GAMARRA_AUT_2).', 'FILES', '100', 10, '2020-09-10 03:25:02', '2020-09-10 03:25:02');
INSERT INTO `logs` VALUES (588, 'User (10, Luis C. Rojano): ADD Files To  FILES (101, DURACION_GAMARRA_AUT_2).', 'FILES', '101', 10, '2020-09-10 03:25:12', '2020-09-10 03:25:12');
INSERT INTO `logs` VALUES (589, 'User (10, Luis C. Rojano): ADD  station (24, LA GLORIA).', 'stations', '24', 10, '2020-09-10 03:26:01', '2020-09-10 03:26:01');
INSERT INTO `logs` VALUES (590, 'CHANGE VISIBILITY TO 1,  station (24, LA GLORIA).', 'stations', '24', 10, '2020-09-10 03:26:02', '2020-09-10 03:26:02');
INSERT INTO `logs` VALUES (591, 'User (10, Luis C. Rojano): ADD Files To  FILES (102, FRECUENCIA_LA_GLORIA_2).', 'FILES', '102', 10, '2020-09-10 03:26:14', '2020-09-10 03:26:14');
INSERT INTO `logs` VALUES (592, 'User (10, Luis C. Rojano): ADD Files To  FILES (103, DURACION_LA_GLORIA_2).', 'FILES', '103', 10, '2020-09-10 03:26:22', '2020-09-10 03:26:22');
INSERT INTO `logs` VALUES (593, 'User (10, Luis C. Rojano): ADD  station (25, LAS AGUADAS).', 'stations', '25', 10, '2020-09-10 03:27:01', '2020-09-10 03:27:01');
INSERT INTO `logs` VALUES (594, 'User (10, Luis C. Rojano): ADD Files To  FILES (104, FRECUENCIA_LAS_AGUADAS_2).', 'FILES', '104', 10, '2020-09-10 03:27:16', '2020-09-10 03:27:16');
INSERT INTO `logs` VALUES (595, 'User (10, Luis C. Rojano): ADD Files To  FILES (105, DURACION_LAS_AGUADAS_2).', 'FILES', '105', 10, '2020-09-10 03:27:24', '2020-09-10 03:27:24');
INSERT INTO `logs` VALUES (596, 'User (10, Luis C. Rojano): ADD  station (26, LAS PALOMAS).', 'stations', '26', 10, '2020-09-10 03:28:02', '2020-09-10 03:28:02');
INSERT INTO `logs` VALUES (597, 'User (10, Luis C. Rojano): ADD Files To  FILES (106, FRECUENCIA_LAS_PALOMAS_2).', 'FILES', '106', 10, '2020-09-10 03:28:16', '2020-09-10 03:28:16');
INSERT INTO `logs` VALUES (598, 'User (10, Luis C. Rojano): ADD Files To  FILES (107, DURACION_LAS_PALOMAS_2).', 'FILES', '107', 10, '2020-09-10 03:28:39', '2020-09-10 03:28:39');
INSERT INTO `logs` VALUES (599, 'User (10, Luis C. Rojano): ADD  station (27, PEÑONCITO).', 'stations', '27', 10, '2020-09-10 03:29:22', '2020-09-10 03:29:22');
INSERT INTO `logs` VALUES (600, 'User (10, Luis C. Rojano): ADD Files To  FILES (108, FRECUENCIA_PEÑONCITO_2).', 'FILES', '108', 10, '2020-09-10 03:29:36', '2020-09-10 03:29:36');
INSERT INTO `logs` VALUES (601, 'User (10, Luis C. Rojano): ADD Files To  FILES (109, DURACION_PEÑONCITO_2).', 'FILES', '109', 10, '2020-09-10 03:29:49', '2020-09-10 03:29:49');
INSERT INTO `logs` VALUES (602, 'User (10, Luis C. Rojano): ADD  station (28, PUERTO WILCHES).', 'stations', '28', 10, '2020-09-10 03:30:59', '2020-09-10 03:30:59');
INSERT INTO `logs` VALUES (603, 'User (10, Luis C. Rojano): ADD Files To  FILES (110, FRECUENCIA_PUERTO_WILCHES_2).', 'FILES', '110', 10, '2020-09-10 03:31:18', '2020-09-10 03:31:18');
INSERT INTO `logs` VALUES (604, 'User (10, Luis C. Rojano): ADD Files To  FILES (111, DURACION_PUERTO_WILCHES_2).', 'FILES', '111', 10, '2020-09-10 03:31:26', '2020-09-10 03:31:26');
INSERT INTO `logs` VALUES (605, 'User (10, Luis C. Rojano): ADD  station (29, REGIDOR).', 'stations', '29', 10, '2020-09-10 03:32:29', '2020-09-10 03:32:29');
INSERT INTO `logs` VALUES (606, 'User (10, Luis C. Rojano): ADD Files To  FILES (112, FRECUENCIA_REGIDOR_2).', 'FILES', '112', 10, '2020-09-10 03:32:53', '2020-09-10 03:32:53');
INSERT INTO `logs` VALUES (607, 'User (10, Luis C. Rojano): ADD Files To  FILES (113, DURACION_REGIDOR_2).', 'FILES', '113', 10, '2020-09-10 03:33:03', '2020-09-10 03:33:03');
INSERT INTO `logs` VALUES (608, 'User (10, Luis C. Rojano): ADD  station (30, RIO NUEVO).', 'stations', '30', 10, '2020-09-10 03:33:42', '2020-09-10 03:33:42');
INSERT INTO `logs` VALUES (609, 'User (10, Luis C. Rojano): ADD Files To  FILES (114, FRECUENCIA_RIO_NUEVO_2).', 'FILES', '114', 10, '2020-09-10 03:34:01', '2020-09-10 03:34:01');
INSERT INTO `logs` VALUES (610, 'User (10, Luis C. Rojano): ADD Files To  FILES (115, DURACION_RIO_NUEVO_2).', 'FILES', '115', 10, '2020-09-10 03:34:19', '2020-09-10 03:34:19');
INSERT INTO `logs` VALUES (611, 'User (10, Luis C. Rojano): ADD  station (31, SAN PABLO).', 'stations', '31', 10, '2020-09-10 03:34:51', '2020-09-10 03:34:51');
INSERT INTO `logs` VALUES (612, 'User (10, Luis C. Rojano): ADD Files To  FILES (116, FRECUENCIA_SAN_PABLO_2_2).', 'FILES', '116', 10, '2020-09-10 03:35:09', '2020-09-10 03:35:09');
INSERT INTO `logs` VALUES (613, 'User (10, Luis C. Rojano): ADD Files To  FILES (117, DURACION_SAN_PABLO_2).', 'FILES', '117', 10, '2020-09-10 03:35:25', '2020-09-10 03:35:25');
INSERT INTO `logs` VALUES (614, 'User (10, Luis C. Rojano): ADD  station (32, SITIO NUEVO).', 'stations', '32', 10, '2020-09-10 03:35:54', '2020-09-10 03:35:54');
INSERT INTO `logs` VALUES (615, 'User (10, Luis C. Rojano): ADD Files To  FILES (118, FRECUENCIA_SITIO_NUEVO_2).', 'FILES', '118', 10, '2020-09-10 03:36:14', '2020-09-10 03:36:14');
INSERT INTO `logs` VALUES (616, 'User (10, Luis C. Rojano): ADD Files To  FILES (119, DURACION_SITIO_NUEVO_2).', 'FILES', '119', 10, '2020-09-10 03:36:37', '2020-09-10 03:36:37');
INSERT INTO `logs` VALUES (617, '(10, Luis C. Rojano): DELETE layer (43, ).', 'layers', '43', 10, '2020-09-10 03:38:13', '2020-09-10 03:38:13');
INSERT INTO `logs` VALUES (618, '(10, Luis C. Rojano): DELETE layer (44, ).', 'layers', '44', 10, '2020-09-10 03:39:56', '2020-09-10 03:39:56');
INSERT INTO `logs` VALUES (619, '(10, Luis C. Rojano): Update layer (35, IDEAM).', 'layers', '35', 10, '2020-09-10 03:41:34', '2020-09-10 03:41:34');
INSERT INTO `logs` VALUES (620, '(10, Luis C. Rojano): Update layer (35, IDEAM).', 'layers', '35', 10, '2020-09-10 03:41:56', '2020-09-10 03:41:56');
INSERT INTO `logs` VALUES (621, 'CHANGE VISIBILITY TO ,  station (10, BARRANCA VIEJA).', 'stations', '10', 10, '2020-09-10 03:45:27', '2020-09-10 03:45:27');
INSERT INTO `logs` VALUES (622, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-09-10 04:06:59', '2020-09-10 04:06:59');
INSERT INTO `logs` VALUES (623, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-09-10 04:07:20', '2020-09-10 04:07:20');
INSERT INTO `logs` VALUES (624, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-09-10 04:12:07', '2020-09-10 04:12:07');
INSERT INTO `logs` VALUES (625, 'User (10, Luis C. Rojano): UPDATE  station (11, MAGANGUE).', 'stations', '11', 10, '2020-09-10 04:12:47', '2020-09-10 04:12:47');
INSERT INTO `logs` VALUES (626, 'User (10, Luis C. Rojano): UPDATE  station (10, BARRANCA VIEJA).', 'stations', '10', 10, '2020-09-10 04:13:45', '2020-09-10 04:13:45');
INSERT INTO `logs` VALUES (627, 'User (10, Luis C. Rojano): UPDATE  station (13, TENERIFE).', 'stations', '13', 10, '2020-09-10 04:13:52', '2020-09-10 04:13:52');
INSERT INTO `logs` VALUES (628, 'User (10, Luis C. Rojano): UPDATE  station (12, PLATO).', 'stations', '12', 10, '2020-09-10 04:13:59', '2020-09-10 04:13:59');
INSERT INTO `logs` VALUES (629, '(10, Luis C. Rojano): Update layer (35, IDEAM).', 'layers', '35', 10, '2020-09-10 04:14:43', '2020-09-10 04:14:43');
INSERT INTO `logs` VALUES (630, 'User (10, Luis C. Rojano): UPDATE  station (14, CALAMAR).', 'stations', '14', 10, '2020-09-10 04:15:37', '2020-09-10 04:15:37');
INSERT INTO `logs` VALUES (631, 'User (10, Luis C. Rojano): UPDATE  station (15, TEBSA).', 'stations', '15', 10, '2020-09-10 04:17:47', '2020-09-10 04:17:47');
INSERT INTO `logs` VALUES (632, 'User (10, Luis C. Rojano): UPDATE  station (14, CALAMAR).', 'stations', '14', 10, '2020-09-10 04:17:48', '2020-09-10 04:17:48');
INSERT INTO `logs` VALUES (633, 'User (10, Luis C. Rojano): UPDATE  station (13, TENERIFE).', 'stations', '13', 10, '2020-09-10 04:17:49', '2020-09-10 04:17:49');
INSERT INTO `logs` VALUES (634, 'User (10, Luis C. Rojano): UPDATE  station (12, PLATO).', 'stations', '12', 10, '2020-09-10 04:17:50', '2020-09-10 04:17:50');
INSERT INTO `logs` VALUES (635, 'User (10, Luis C. Rojano): UPDATE  station (11, MAGANGUE).', 'stations', '11', 10, '2020-09-10 04:17:52', '2020-09-10 04:17:52');
INSERT INTO `logs` VALUES (636, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-09-10 04:17:58', '2020-09-10 04:17:58');
INSERT INTO `logs` VALUES (637, 'User (10, Luis C. Rojano): UPDATE  station (11, MAGANGUE).', 'stations', '11', 10, '2020-09-10 04:19:41', '2020-09-10 04:19:41');
INSERT INTO `logs` VALUES (638, 'User (10, Luis C. Rojano): UPDATE  station (12, PLATO).', 'stations', '12', 10, '2020-09-10 04:19:42', '2020-09-10 04:19:42');
INSERT INTO `logs` VALUES (639, 'User (10, Luis C. Rojano): UPDATE  station (12, PLATO).', 'stations', '12', 10, '2020-09-10 04:19:44', '2020-09-10 04:19:44');
INSERT INTO `logs` VALUES (640, 'User (10, Luis C. Rojano): UPDATE  station (13, TENERIFE).', 'stations', '13', 10, '2020-09-10 04:19:45', '2020-09-10 04:19:45');
INSERT INTO `logs` VALUES (641, 'User (10, Luis C. Rojano): UPDATE  station (14, CALAMAR).', 'stations', '14', 10, '2020-09-10 04:19:46', '2020-09-10 04:19:46');
INSERT INTO `logs` VALUES (642, 'User (10, Luis C. Rojano): UPDATE  station (15, TEBSA).', 'stations', '15', 10, '2020-09-10 04:19:47', '2020-09-10 04:19:47');
INSERT INTO `logs` VALUES (643, 'User (10, Luis C. Rojano): UPDATE  station (16, EL BANCO).', 'stations', '16', 10, '2020-09-10 04:19:48', '2020-09-10 04:19:48');
INSERT INTO `logs` VALUES (644, 'User (10, Luis C. Rojano): UPDATE  station (17, ARMENIA).', 'stations', '17', 10, '2020-09-10 04:19:49', '2020-09-10 04:19:49');
INSERT INTO `logs` VALUES (645, 'User (10, Luis C. Rojano): UPDATE  station (18, BARBOSA).', 'stations', '18', 10, '2020-09-10 04:19:50', '2020-09-10 04:19:50');
INSERT INTO `logs` VALUES (646, 'User (10, Luis C. Rojano): UPDATE  station (28, PUERTO WILCHES).', 'stations', '28', 10, '2020-09-10 04:20:31', '2020-09-10 04:20:31');
INSERT INTO `logs` VALUES (647, 'User (10, Luis C. Rojano): UPDATE  station (27, PEÑONCITO).', 'stations', '27', 10, '2020-09-10 04:20:32', '2020-09-10 04:20:32');
INSERT INTO `logs` VALUES (648, 'User (10, Luis C. Rojano): UPDATE  station (26, LAS PALOMAS).', 'stations', '26', 10, '2020-09-10 04:20:33', '2020-09-10 04:20:33');
INSERT INTO `logs` VALUES (649, 'User (10, Luis C. Rojano): UPDATE  station (25, LAS AGUADAS).', 'stations', '25', 10, '2020-09-10 04:20:34', '2020-09-10 04:20:34');
INSERT INTO `logs` VALUES (650, 'User (10, Luis C. Rojano): UPDATE  station (24, LA GLORIA).', 'stations', '24', 10, '2020-09-10 04:20:35', '2020-09-10 04:20:35');
INSERT INTO `logs` VALUES (651, 'User (10, Luis C. Rojano): UPDATE  station (23, GAMARRA AUT).', 'stations', '23', 10, '2020-09-10 04:20:36', '2020-09-10 04:20:36');
INSERT INTO `logs` VALUES (652, 'User (10, Luis C. Rojano): UPDATE  station (22, GAMARRA).', 'stations', '22', 10, '2020-09-10 04:20:37', '2020-09-10 04:20:37');
INSERT INTO `logs` VALUES (653, 'User (10, Luis C. Rojano): UPDATE  station (21, EL CONTENTO).', 'stations', '21', 10, '2020-09-10 04:20:39', '2020-09-10 04:20:39');
INSERT INTO `logs` VALUES (654, 'User (10, Luis C. Rojano): UPDATE  station (20, COYONGAL).', 'stations', '20', 10, '2020-09-10 04:20:40', '2020-09-10 04:20:40');
INSERT INTO `logs` VALUES (655, 'User (10, Luis C. Rojano): UPDATE  station (19, BARRANCABERMEJA).', 'stations', '19', 10, '2020-09-10 04:20:42', '2020-09-10 04:20:42');
INSERT INTO `logs` VALUES (656, 'User (10, Luis C. Rojano): UPDATE  station (22, GAMARRA).', 'stations', '22', 10, '2020-09-10 04:20:44', '2020-09-10 04:20:44');
INSERT INTO `logs` VALUES (657, 'User (10, Luis C. Rojano): UPDATE  station (30, RIO NUEVO).', 'stations', '30', 10, '2020-09-10 04:20:49', '2020-09-10 04:20:49');
INSERT INTO `logs` VALUES (658, 'User (10, Luis C. Rojano): UPDATE  station (31, SAN PABLO).', 'stations', '31', 10, '2020-09-10 04:20:51', '2020-09-10 04:20:51');
INSERT INTO `logs` VALUES (659, 'User (10, Luis C. Rojano): UPDATE  station (32, SITIO NUEVO).', 'stations', '32', 10, '2020-09-10 04:21:04', '2020-09-10 04:21:04');
INSERT INTO `logs` VALUES (660, 'User (10, Luis C. Rojano): UPDATE  station (31, SAN PABLO).', 'stations', '31', 10, '2020-09-10 04:21:05', '2020-09-10 04:21:05');
INSERT INTO `logs` VALUES (661, 'User (10, Luis C. Rojano): UPDATE  station (30, RIO NUEVO).', 'stations', '30', 10, '2020-09-10 04:21:06', '2020-09-10 04:21:06');
INSERT INTO `logs` VALUES (662, 'User (10, Luis C. Rojano): UPDATE  station (29, REGIDOR).', 'stations', '29', 10, '2020-09-10 04:21:07', '2020-09-10 04:21:07');
INSERT INTO `logs` VALUES (663, '(10, Luis C. Rojano): Update layer (35, IDEAM).', 'layers', '35', 10, '2020-09-10 04:22:23', '2020-09-10 04:22:23');
INSERT INTO `logs` VALUES (664, 'User (10, Luis C. Rojano): UPDATE   People (31, Humberto Rangel Ávila, Ph.D).', 'people', '31', 10, '2020-09-10 04:23:54', '2020-09-10 04:23:54');
INSERT INTO `logs` VALUES (665, 'User (10, Luis C. Rojano): UPDATE   People (32, Augusto Herminio Sisa Camargo, M.Sc).', 'people', '32', 10, '2020-09-10 04:24:46', '2020-09-10 04:24:46');
INSERT INTO `logs` VALUES (666, 'User (10, Luis C. Rojano): UPDATE   People (33, Luis Carlos Rojano).', 'people', '33', 10, '2020-09-10 04:24:53', '2020-09-10 04:24:53');
INSERT INTO `logs` VALUES (667, 'User (10, Luis C. Rojano): UPDATE   People (34, Wilson Nieto Bernal).', 'people', '34', 10, '2020-09-10 04:24:57', '2020-09-10 04:24:57');
INSERT INTO `logs` VALUES (668, 'User (10, Luis C. Rojano): UPDATE   People (35, Stephanie Diaz, Ing.).', 'people', '35', 10, '2020-09-10 04:25:06', '2020-09-10 04:25:06');
INSERT INTO `logs` VALUES (669, 'User (10, Luis C. Rojano): UPDATE   People (36, Ruben Doria, Ing.).', 'people', '36', 10, '2020-09-10 04:25:14', '2020-09-10 04:25:14');
INSERT INTO `logs` VALUES (670, 'User (10, Luis C. Rojano): UPDATE   People (37, Alexander Montalvo).', 'people', '37', 10, '2020-09-10 04:25:21', '2020-09-10 04:25:21');
INSERT INTO `logs` VALUES (671, 'User (10, Luis C. Rojano): UPDATE   People (37, Alexander Montalvo).', 'people', '37', 10, '2020-09-10 04:25:28', '2020-09-10 04:25:28');
INSERT INTO `logs` VALUES (672, 'User (10, Luis C. Rojano): UPDATE   People (38, Francisco Gómez Díaz).', 'people', '38', 10, '2020-09-10 04:25:38', '2020-09-10 04:25:38');
INSERT INTO `logs` VALUES (673, '(10, Luis C. Rojano): Update layer (35, IDEAM).', 'layers', '35', 10, '2020-09-10 04:28:57', '2020-09-10 04:28:57');
INSERT INTO `logs` VALUES (674, '(10, Luis C. Rojano): Update layer (35, IDEAM).', 'layers', '35', 10, '2020-09-10 04:28:57', '2020-09-10 04:28:57');
INSERT INTO `logs` VALUES (675, '(10, Luis C. Rojano): Update layer (35, IDEAM).', 'layers', '35', 10, '2020-09-10 04:28:57', '2020-09-10 04:28:57');
INSERT INTO `logs` VALUES (676, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-09-10 04:29:18', '2020-09-10 04:29:18');
INSERT INTO `logs` VALUES (677, '(10, Luis C. Rojano): Update layer (35, IDEAM).', 'layers', '35', 10, '2020-09-10 04:30:19', '2020-09-10 04:30:19');
INSERT INTO `logs` VALUES (678, '(10, Luis C. Rojano): Update layer (35, IDEAM).', 'layers', '35', 10, '2020-09-10 04:30:43', '2020-09-10 04:30:43');
INSERT INTO `logs` VALUES (679, '(10, Luis C. Rojano): Update exclusions (42, Frecuencia de trazado de canal navegable).', 'layers', '42', 10, '2020-09-10 05:22:45', '2020-09-10 05:22:45');
INSERT INTO `logs` VALUES (680, 'User (10, Luis C. Rojano): UPDATE   Layer (41, Resistencia relativa a la erosión fluvial).', 'layers', '41', 10, '2020-09-10 10:28:50', '2020-09-10 10:28:50');
INSERT INTO `logs` VALUES (681, '(10, Luis C. Rojano): Update Visibility (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-10-14 15:43:13', '2020-10-14 15:43:13');
INSERT INTO `logs` VALUES (682, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-14 15:43:18', '2020-10-14 15:43:18');
INSERT INTO `logs` VALUES (683, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-14 15:43:34', '2020-10-14 15:43:34');
INSERT INTO `logs` VALUES (684, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-14 15:44:23', '2020-10-14 15:44:23');
INSERT INTO `logs` VALUES (685, '(10, Luis C. Rojano): Update Visibility (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-10-14 22:13:37', '2020-10-14 22:13:37');
INSERT INTO `logs` VALUES (686, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-18 00:52:59', '2020-10-18 00:52:59');
INSERT INTO `logs` VALUES (687, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-18 00:53:01', '2020-10-18 00:53:01');
INSERT INTO `logs` VALUES (688, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-18 00:53:01', '2020-10-18 00:53:01');
INSERT INTO `logs` VALUES (689, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-18 00:53:02', '2020-10-18 00:53:02');
INSERT INTO `logs` VALUES (690, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:04:13', '2020-10-21 02:04:13');
INSERT INTO `logs` VALUES (691, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:04:30', '2020-10-21 02:04:30');
INSERT INTO `logs` VALUES (692, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:04:42', '2020-10-21 02:04:42');
INSERT INTO `logs` VALUES (693, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:09:42', '2020-10-21 02:09:42');
INSERT INTO `logs` VALUES (694, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:09:45', '2020-10-21 02:09:45');
INSERT INTO `logs` VALUES (695, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:09:51', '2020-10-21 02:09:51');
INSERT INTO `logs` VALUES (696, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:10:20', '2020-10-21 02:10:20');
INSERT INTO `logs` VALUES (697, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:10:22', '2020-10-21 02:10:22');
INSERT INTO `logs` VALUES (698, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:12:52', '2020-10-21 02:12:52');
INSERT INTO `logs` VALUES (699, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:12:56', '2020-10-21 02:12:56');
INSERT INTO `logs` VALUES (700, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:13:03', '2020-10-21 02:13:03');
INSERT INTO `logs` VALUES (701, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:26:18', '2020-10-21 02:26:18');
INSERT INTO `logs` VALUES (702, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:27:28', '2020-10-21 02:27:28');
INSERT INTO `logs` VALUES (703, '(10, Luis C. Rojano): Update Visibility (38, Cabeceras).', 'layers', '38', 10, '2020-10-21 02:27:46', '2020-10-21 02:27:46');
INSERT INTO `logs` VALUES (704, '(10, Luis C. Rojano): Update Visibility (38, Cabeceras).', 'layers', '38', 10, '2020-10-21 02:28:04', '2020-10-21 02:28:04');
INSERT INTO `logs` VALUES (705, '(10, Luis C. Rojano): Update Visibility (38, Cabeceras).', 'layers', '38', 10, '2020-10-21 02:28:08', '2020-10-21 02:28:08');
INSERT INTO `logs` VALUES (706, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:31:42', '2020-10-21 02:31:42');
INSERT INTO `logs` VALUES (707, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:31:45', '2020-10-21 02:31:45');
INSERT INTO `logs` VALUES (708, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:31:46', '2020-10-21 02:31:46');
INSERT INTO `logs` VALUES (709, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:31:48', '2020-10-21 02:31:48');
INSERT INTO `logs` VALUES (710, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:31:50', '2020-10-21 02:31:50');
INSERT INTO `logs` VALUES (711, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:47:45', '2020-10-21 02:47:45');
INSERT INTO `logs` VALUES (712, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:47:47', '2020-10-21 02:47:47');
INSERT INTO `logs` VALUES (713, '(10, Luis C. Rojano): Update Visibility (35, IDEAM).', 'layers', '35', 10, '2020-10-21 02:47:54', '2020-10-21 02:47:54');
INSERT INTO `logs` VALUES (714, '(10, Luis C. Rojano): DELETE layer (42, Frecuencia de trazado de canal navegable).', 'layers', '42', 10, '2020-10-21 03:32:35', '2020-10-21 03:32:35');
INSERT INTO `logs` VALUES (715, '(10, Luis C. Rojano): DELETE layer (40, Frecuencia de observación de agua (%)).', 'layers', '40', 10, '2020-10-21 03:38:34', '2020-10-21 03:38:34');
INSERT INTO `logs` VALUES (716, '(10, Luis C. Rojano): DELETE layer (43, Resistencia relativa a la erosión fluvial).', 'layers', '43', 10, '2020-10-21 03:47:15', '2020-10-21 03:47:15');
INSERT INTO `logs` VALUES (717, '(10, Luis C. Rojano): Update Visibility (41, Resistencia relativa a la erosión fluvial).', 'layers', '41', 10, '2020-10-21 03:50:16', '2020-10-21 03:50:16');
INSERT INTO `logs` VALUES (718, '(10, Luis C. Rojano): Update Visibility (41, Resistencia relativa a la erosión fluvial).', 'layers', '41', 10, '2020-10-21 03:50:18', '2020-10-21 03:50:18');
INSERT INTO `logs` VALUES (719, '(10, Luis C. Rojano): Update Visibility (41, Resistencia relativa a la erosión fluvial).', 'layers', '41', 10, '2020-10-21 03:50:21', '2020-10-21 03:50:21');
INSERT INTO `logs` VALUES (720, '(10, Luis C. Rojano): Update Visibility (41, Resistencia relativa a la erosión fluvial).', 'layers', '41', 10, '2020-10-21 03:50:22', '2020-10-21 03:50:22');
INSERT INTO `logs` VALUES (721, '(10, Luis C. Rojano): Update Visibility (41, Resistencia relativa a la erosión fluvial).', 'layers', '41', 10, '2020-10-21 03:50:24', '2020-10-21 03:50:24');
INSERT INTO `logs` VALUES (722, '(10, Luis C. Rojano): DELETE layer (44, Resistencia relativa a la erosión fluvial).', 'layers', '44', 10, '2020-10-21 03:51:01', '2020-10-21 03:51:01');
INSERT INTO `logs` VALUES (723, '(10, Luis C. Rojano): DELETE layer (46, Resistencia relativa a la erosión fluvial).', 'layers', '46', 10, '2020-10-21 03:53:58', '2020-10-21 03:53:58');
INSERT INTO `logs` VALUES (724, '(10, Luis C. Rojano): DELETE layer (41, Resistencia relativa a la erosión fluvial).', 'layers', '41', 10, '2020-10-21 03:54:59', '2020-10-21 03:54:59');
INSERT INTO `logs` VALUES (725, '(10, Luis C. Rojano): DELETE layer (47, Resistencia relativa a la erosión fluvial).', 'layers', '47', 10, '2020-10-21 04:06:05', '2020-10-21 04:06:05');
INSERT INTO `logs` VALUES (726, '(10, Luis C. Rojano): DELETE layer (45, Resistencia relativa a la erosión fluvial).', 'layers', '45', 10, '2020-10-21 04:07:40', '2020-10-21 04:07:40');
INSERT INTO `logs` VALUES (727, '(10, Luis C. Rojano): DELETE layer (51, Resistencia relativa a la erosión fluvial).', 'layers', '51', 10, '2020-10-21 04:09:44', '2020-10-21 04:09:44');
INSERT INTO `logs` VALUES (728, '(10, Luis C. Rojano): DELETE layer (48, Resistencia relativa a la erosión fluvial).', 'layers', '48', 10, '2020-10-21 04:10:12', '2020-10-21 04:10:12');
INSERT INTO `logs` VALUES (729, '(10, Luis C. Rojano): DELETE layer (49, Resistencia relativa a la erosión fluvial).', 'layers', '49', 10, '2020-10-21 04:10:56', '2020-10-21 04:10:56');
INSERT INTO `logs` VALUES (730, '(10, Luis C. Rojano): DELETE layer (50, Resistencia relativa a la erosión fluvial).', 'layers', '50', 10, '2020-10-21 04:11:05', '2020-10-21 04:11:05');
INSERT INTO `logs` VALUES (731, '(10, Luis C. Rojano): DELETE layer (53, Resistencia relativa a la erosión fluvial).', 'layers', '53', 10, '2020-10-21 04:11:52', '2020-10-21 04:11:52');
INSERT INTO `logs` VALUES (732, '(10, Luis C. Rojano): Update Visibility (55, Resistencia relativa a la erosión fluvial).', 'layers', '55', 10, '2020-10-21 04:12:02', '2020-10-21 04:12:02');
INSERT INTO `logs` VALUES (733, '(10, Luis C. Rojano): Update Visibility (55, Resistencia relativa a la erosión fluvial).', 'layers', '55', 10, '2020-10-21 04:12:03', '2020-10-21 04:12:03');
INSERT INTO `logs` VALUES (734, '(10, Luis C. Rojano): DELETE layer (54, Resistencia relativa a la erosión fluvial).', 'layers', '54', 10, '2020-10-21 04:12:07', '2020-10-21 04:12:07');
INSERT INTO `logs` VALUES (735, '(10, Luis C. Rojano): DELETE layer (52, Resistencia relativa a la erosión fluvial).', 'layers', '52', 10, '2020-10-21 04:12:11', '2020-10-21 04:12:11');
INSERT INTO `logs` VALUES (736, '(10, Luis C. Rojano): Update Visibility (39, Departamentos).', 'layers', '39', 10, '2020-10-21 04:50:58', '2020-10-21 04:50:58');
INSERT INTO `logs` VALUES (737, '(10, Luis C. Rojano): Update Visibility (55, Resistencia relativa a la erosión fluvial).', 'layers', '55', 10, '2020-10-23 07:16:15', '2020-10-23 07:16:15');
INSERT INTO `logs` VALUES (738, '(10, Luis C. Rojano): Update Visibility (55, Resistencia relativa a la erosión fluvial).', 'layers', '55', 10, '2020-10-23 07:16:21', '2020-10-23 07:16:21');
INSERT INTO `logs` VALUES (739, 'User (10, Luis C. Rojano): ADD  station (33, ESTACION X).', 'stations', '33', 10, '2020-10-27 14:00:04', '2020-10-27 14:00:04');
INSERT INTO `logs` VALUES (740, 'User (10, Luis C. Rojano): ADD Files To  FILES (120, CORTE_PIÑON_02).', 'FILES', '120', 10, '2020-10-27 14:00:34', '2020-10-27 14:00:34');
INSERT INTO `logs` VALUES (741, 'User (10, Luis C. Rojano): ADD Files To  FILES (121, PLANTA_PIÑON_01).', 'FILES', '121', 10, '2020-10-27 14:00:42', '2020-10-27 14:00:42');
INSERT INTO `logs` VALUES (742, 'CHANGE VISIBILITY TO ,  station (33, ESTACION X).', 'stations', '33', 10, '2020-10-27 14:03:12', '2020-10-27 14:03:12');
INSERT INTO `logs` VALUES (743, 'User (10, Luis C. Rojano): ADD   Layer (56, test).', 'layers', '56', 10, '2020-10-29 17:08:33', '2020-10-29 17:08:33');
INSERT INTO `logs` VALUES (744, 'User (10, Luis C. Rojano): UPDATE   Layer (56, test).', 'layers', '56', 10, '2020-10-29 17:31:51', '2020-10-29 17:31:51');
INSERT INTO `logs` VALUES (745, 'User (10, Luis C. Rojano): UPDATE   Layer (56, test).', 'layers', '56', 10, '2020-10-29 17:34:47', '2020-10-29 17:34:47');
INSERT INTO `logs` VALUES (746, 'User (10, Luis C. Rojano): ADD   Layer (59, test2).', 'layers', '59', 10, '2020-10-29 17:38:45', '2020-10-29 17:38:45');
INSERT INTO `logs` VALUES (747, '(10, Luis C. Rojano): Update Visibility (59, test2).', 'layers', '59', 10, '2020-10-29 17:47:31', '2020-10-29 17:47:31');
INSERT INTO `logs` VALUES (748, 'User (10, Luis C. Rojano): UPDATE   Layer (56, test).', 'layers', '56', 10, '2020-10-29 18:08:51', '2020-10-29 18:08:51');
INSERT INTO `logs` VALUES (749, '(10, Luis C. Rojano): DELETE layer (60, ).', 'layers', '60', 10, '2020-10-29 19:53:02', '2020-10-29 19:53:02');
INSERT INTO `logs` VALUES (750, '(10, Luis C. Rojano): DELETE layer (61, ).', 'layers', '61', 10, '2020-10-29 21:56:15', '2020-10-29 21:56:15');
INSERT INTO `logs` VALUES (751, '(10, Luis C. Rojano): DELETE layer (59, test2).', 'layers', '59', 10, '2020-10-29 21:56:19', '2020-10-29 21:56:19');
INSERT INTO `logs` VALUES (752, '(10, Luis C. Rojano): DELETE layer (56, test).', 'layers', '56', 10, '2020-10-29 21:56:23', '2020-10-29 21:56:23');
INSERT INTO `logs` VALUES (753, '(10, Luis C. Rojano): DELETE layer (55, Resistencia relativa a la erosión fluvial).', 'layers', '55', 10, '2020-10-29 21:56:27', '2020-10-29 21:56:27');
INSERT INTO `logs` VALUES (754, '(10, Luis C. Rojano): DELETE layer (39, Departamentos).', 'layers', '39', 10, '2020-10-29 21:56:31', '2020-10-29 21:56:31');
INSERT INTO `logs` VALUES (755, '(10, Luis C. Rojano): DELETE layer (38, Cabeceras).', 'layers', '38', 10, '2020-10-29 21:56:35', '2020-10-29 21:56:35');
INSERT INTO `logs` VALUES (756, '(10, Luis C. Rojano): DELETE layer (35, IDEAM).', 'layers', '35', 10, '2020-10-29 21:59:28', '2020-10-29 21:59:28');
INSERT INTO `logs` VALUES (757, 'User (10, Luis C. Rojano): ADD   Category (13, Estaciones).', 'categories', '13', 10, '2020-10-29 23:05:05', '2020-10-29 23:05:05');
INSERT INTO `logs` VALUES (758, 'User (10, Luis C. Rojano): ADD   Category (14, Morfología).', 'categories', '14', 10, '2020-10-29 23:34:41', '2020-10-29 23:34:41');
INSERT INTO `logs` VALUES (759, '(10, Luis C. Rojano): DELETE category (13, Estaciones).', 'categorys', '13', 10, '2020-10-30 00:29:57', '2020-10-30 00:29:57');
INSERT INTO `logs` VALUES (760, 'User (10, Luis C. Rojano): ADD   Category (15, Estaciones).', 'categories', '15', 10, '2020-10-30 00:53:42', '2020-10-30 00:53:42');
INSERT INTO `logs` VALUES (761, 'User (10, Luis C. Rojano): ADD   Category (16, Cartografía Base).', 'categories', '16', 10, '2020-10-30 00:59:23', '2020-10-30 00:59:23');
INSERT INTO `logs` VALUES (762, 'User (10, Luis C. Rojano): ADD   Category (17, Prueba).', 'categories', '17', 10, '2020-10-30 01:01:14', '2020-10-30 01:01:14');
INSERT INTO `logs` VALUES (763, 'User (10, Luis C. Rojano): ADD   Category (18, Prueba).', 'categories', '18', 10, '2020-10-30 01:01:16', '2020-10-30 01:01:16');
INSERT INTO `logs` VALUES (764, 'User (10, Luis C. Rojano): ADD   Category (19, test2).', 'categories', '19', 10, '2020-10-30 01:04:39', '2020-10-30 01:04:39');
INSERT INTO `logs` VALUES (765, '(10, Luis C. Rojano): DELETE category (19, test2).', 'categorys', '19', 10, '2020-10-30 01:06:06', '2020-10-30 01:06:06');
INSERT INTO `logs` VALUES (766, '(10, Luis C. Rojano): DELETE category (17, Prueba).', 'categorys', '17', 10, '2020-10-30 01:06:16', '2020-10-30 01:06:16');
INSERT INTO `logs` VALUES (767, '(10, Luis C. Rojano): DELETE category (18, Prueba).', 'categorys', '18', 10, '2020-10-30 01:06:22', '2020-10-30 01:06:22');
INSERT INTO `logs` VALUES (768, 'User (10, Luis C. Rojano): ADD   Category (20, asdasd).', 'categories', '20', 10, '2020-10-30 01:09:53', '2020-10-30 01:09:53');
INSERT INTO `logs` VALUES (769, 'User (10, Luis C. Rojano): ADD   Category (21, werwe).', 'categories', '21', 10, '2020-10-30 01:13:36', '2020-10-30 01:13:36');
INSERT INTO `logs` VALUES (770, 'User (10, Luis C. Rojano): ADD   Category (22, asdfsdf).', 'categories', '22', 10, '2020-10-30 01:16:39', '2020-10-30 01:16:39');
INSERT INTO `logs` VALUES (771, '(10, Luis C. Rojano): DELETE category (22, asdfsdf).', 'categorys', '22', 10, '2020-10-30 01:16:59', '2020-10-30 01:16:59');
INSERT INTO `logs` VALUES (772, 'User (10, Luis C. Rojano): ADD   Category (23, test).', 'categories', '23', 10, '2020-10-30 01:17:07', '2020-10-30 01:17:07');
INSERT INTO `logs` VALUES (773, '(10, Luis C. Rojano): DELETE category (23, test).', 'categorys', '23', 10, '2020-10-30 02:12:34', '2020-10-30 02:12:34');
INSERT INTO `logs` VALUES (774, '(10, Luis C. Rojano): DELETE category (21, werwe).', 'categorys', '21', 10, '2020-10-30 02:12:37', '2020-10-30 02:12:37');
INSERT INTO `logs` VALUES (775, '(10, Luis C. Rojano): DELETE category (20, asdasd).', 'categorys', '20', 10, '2020-10-30 02:12:40', '2020-10-30 02:12:40');
INSERT INTO `logs` VALUES (776, 'CHANGE VISIBILITY TO 1,  station (33, ESTACION X).', 'stations', '33', 10, '2020-10-30 02:36:40', '2020-10-30 02:36:40');
INSERT INTO `logs` VALUES (777, 'User (10, Luis C. Rojano): ADD   Category (24, Caso de estudio Salamina).', 'categories', '24', 10, '2020-10-30 02:56:31', '2020-10-30 02:56:31');
INSERT INTO `logs` VALUES (778, 'User (10, Luis C. Rojano): UPDATE   Layer (65, ADCP).', 'layers', '65', 10, '2020-10-30 02:57:09', '2020-10-30 02:57:09');
INSERT INTO `logs` VALUES (779, 'User (10, Luis C. Rojano): ADD   Category (25, Velocidad).', 'categories', '25', 10, '2020-10-30 02:58:37', '2020-10-30 02:58:37');
INSERT INTO `logs` VALUES (780, '(10, Luis C. Rojano): DELETE layer (65, ADCP).', 'layers', '65', 10, '2020-10-30 02:59:05', '2020-10-30 02:59:05');
INSERT INTO `logs` VALUES (781, 'User (10, Luis C. Rojano): ADD   Layer (67, Velocidad para Caudal 7600 m3/s).', 'layers', '67', 10, '2020-10-30 03:01:22', '2020-10-30 03:01:22');
INSERT INTO `logs` VALUES (782, '(10, Luis C. Rojano): Update Visibility (67, Velocidad para Caudal 7600 m3/s).', 'layers', '67', 10, '2020-10-30 03:01:41', '2020-10-30 03:01:41');
INSERT INTO `logs` VALUES (783, 'User (10, Luis C. Rojano): UPDATE   Layer (66, ADCP).', 'layers', '66', 10, '2020-10-30 03:04:22', '2020-10-30 03:04:22');
INSERT INTO `logs` VALUES (784, 'User (10, Luis C. Rojano): UPDATE   Layer (67, Velocidad para Caudal 7600 m3/s).', 'layers', '67', 10, '2020-10-30 14:41:47', '2020-10-30 14:41:47');
INSERT INTO `logs` VALUES (785, 'CHANGE VISIBILITY TO ,  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 16:27:15', '2020-10-30 16:27:15');
INSERT INTO `logs` VALUES (786, 'CHANGE VISIBILITY TO 1,  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 16:27:15', '2020-10-30 16:27:15');
INSERT INTO `logs` VALUES (787, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 16:29:04', '2020-10-30 16:29:04');
INSERT INTO `logs` VALUES (788, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 17:58:36', '2020-10-30 17:58:36');
INSERT INTO `logs` VALUES (789, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 17:59:15', '2020-10-30 17:59:15');
INSERT INTO `logs` VALUES (790, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 18:00:28', '2020-10-30 18:00:28');
INSERT INTO `logs` VALUES (791, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 18:01:05', '2020-10-30 18:01:05');
INSERT INTO `logs` VALUES (792, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 18:01:51', '2020-10-30 18:01:51');
INSERT INTO `logs` VALUES (793, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 18:02:27', '2020-10-30 18:02:27');
INSERT INTO `logs` VALUES (794, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 18:07:16', '2020-10-30 18:07:16');
INSERT INTO `logs` VALUES (795, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 18:08:51', '2020-10-30 18:08:51');
INSERT INTO `logs` VALUES (796, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 18:10:31', '2020-10-30 18:10:31');
INSERT INTO `logs` VALUES (797, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 18:12:38', '2020-10-30 18:12:38');
INSERT INTO `logs` VALUES (798, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 18:45:30', '2020-10-30 18:45:30');
INSERT INTO `logs` VALUES (799, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 18:45:37', '2020-10-30 18:45:37');
INSERT INTO `logs` VALUES (800, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 18:46:47', '2020-10-30 18:46:47');
INSERT INTO `logs` VALUES (801, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 18:46:53', '2020-10-30 18:46:53');
INSERT INTO `logs` VALUES (802, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 18:47:01', '2020-10-30 18:47:01');
INSERT INTO `logs` VALUES (803, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 20:32:00', '2020-10-30 20:32:00');
INSERT INTO `logs` VALUES (804, 'User (10, Luis C. Rojano): UPDATE  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-10-30 20:54:13', '2020-10-30 20:54:13');
INSERT INTO `logs` VALUES (805, 'User (10, Luis C. Rojano): ADD   Layer (69, Estaciones IDEAM).', 'layers', '69', 10, '2020-10-30 22:45:04', '2020-10-30 22:45:04');
INSERT INTO `logs` VALUES (806, '(10, Luis C. Rojano): DELETE layer (69, Estaciones IDEAM).', 'layers', '69', 10, '2020-10-30 22:46:49', '2020-10-30 22:46:49');
INSERT INTO `logs` VALUES (807, 'User (10, Luis C. Rojano): UPDATE   Layer (67, Velocidad para Caudal 7600 m3/s).', 'layers', '67', 10, '2020-10-30 22:47:20', '2020-10-30 22:47:20');
INSERT INTO `logs` VALUES (808, 'User (10, Luis C. Rojano): ADD   Layer (70, Estaciones IDEAM).', 'layers', '70', 10, '2020-10-30 22:48:26', '2020-10-30 22:48:26');
INSERT INTO `logs` VALUES (809, '(10, Luis C. Rojano): Update Visibility (67, Velocidad para Caudal 7600 m3/s).', 'layers', '67', 10, '2020-10-30 22:48:47', '2020-10-30 22:48:47');
INSERT INTO `logs` VALUES (810, '(10, Luis C. Rojano): Update Visibility (70, Estaciones IDEAM).', 'layers', '70', 10, '2020-10-30 22:48:51', '2020-10-30 22:48:51');
INSERT INTO `logs` VALUES (811, '(10, Luis C. Rojano): DELETE layer (70, Estaciones IDEAM).', 'layers', '70', 10, '2020-10-30 22:49:41', '2020-10-30 22:49:41');
INSERT INTO `logs` VALUES (812, 'User (10, Luis C. Rojano): ADD   Layer (71, Estaciones IDEAM).', 'layers', '71', 10, '2020-10-30 22:50:31', '2020-10-30 22:50:31');
INSERT INTO `logs` VALUES (813, '(10, Luis C. Rojano): Update Visibility (71, Estaciones IDEAM).', 'layers', '71', 10, '2020-10-30 22:50:46', '2020-10-30 22:50:46');
INSERT INTO `logs` VALUES (814, 'User (10, Luis C. Rojano): ADD   Layer (72, Estaciones ADCP).', 'layers', '72', 10, '2020-10-31 00:28:52', '2020-10-31 00:28:52');
INSERT INTO `logs` VALUES (815, 'User (10, Luis C. Rojano): ADD   Category (26, Test).', 'categories', '26', 10, '2020-10-31 01:10:17', '2020-10-31 01:10:17');
INSERT INTO `logs` VALUES (816, 'User (10, Luis C. Rojano): ADD   Layer (73, Land).', 'layers', '73', 10, '2020-10-31 01:11:05', '2020-10-31 01:11:05');
INSERT INTO `logs` VALUES (817, '(10, Luis C. Rojano): Update layer (73, Land).', 'layers', '73', 10, '2020-10-31 01:13:43', '2020-10-31 01:13:43');
INSERT INTO `logs` VALUES (818, 'User (10, Luis C. Rojano): UPDATE   Layer (73, Land).', 'layers', '73', 10, '2020-10-31 04:08:30', '2020-10-31 04:08:30');
INSERT INTO `logs` VALUES (819, 'User (10, Luis C. Rojano): ADD   Category (27, Prueba).', 'categories', '27', 10, '2020-10-31 04:14:13', '2020-10-31 04:14:13');
INSERT INTO `logs` VALUES (820, 'User (10, Luis C. Rojano): ADD   Layer (74, geomorfo).', 'layers', '74', 10, '2020-10-31 04:17:56', '2020-10-31 04:17:56');
INSERT INTO `logs` VALUES (821, 'User (10, Luis C. Rojano): ADD   Layer (75, Pruehba shp).', 'layers', '75', 10, '2020-10-31 04:40:59', '2020-10-31 04:40:59');
INSERT INTO `logs` VALUES (822, 'User (10, Luis C. Rojano): ADD   Layer (76, Pruehba shp).', 'layers', '76', 10, '2020-10-31 04:43:51', '2020-10-31 04:43:51');
INSERT INTO `logs` VALUES (823, '(10, Luis C. Rojano): DELETE layer (75, Pruehba shp).', 'layers', '75', 10, '2020-10-31 07:26:33', '2020-10-31 07:26:33');
INSERT INTO `logs` VALUES (824, 'User (10, Luis C. Rojano): UPDATE   Layer (76, Pruehba shp).', 'layers', '76', 10, '2020-10-31 07:27:50', '2020-10-31 07:27:50');
INSERT INTO `logs` VALUES (825, 'User (10, Luis C. Rojano): UPDATE   Layer (76, Pruehba shp).', 'layers', '76', 10, '2020-10-31 07:33:53', '2020-10-31 07:33:53');
INSERT INTO `logs` VALUES (826, '(10, Luis C. Rojano): Update Visibility (76, Pruehba shp).', 'layers', '76', 10, '2020-10-31 08:18:45', '2020-10-31 08:18:45');
INSERT INTO `logs` VALUES (827, '(10, Luis C. Rojano): DELETE layer (76, Pruehba shp).', 'layers', '76', 10, '2020-10-31 08:21:31', '2020-10-31 08:21:31');
INSERT INTO `logs` VALUES (828, 'User (10, Luis C. Rojano): ADD   Layer (77, test).', 'layers', '77', 10, '2020-10-31 08:23:27', '2020-10-31 08:23:27');
INSERT INTO `logs` VALUES (829, '(10, Luis C. Rojano): Update Visibility (77, test).', 'layers', '77', 10, '2020-10-31 08:31:10', '2020-10-31 08:31:10');
INSERT INTO `logs` VALUES (830, 'User (10, Luis C. Rojano): ADD   Layer (78, test).', 'layers', '78', 10, '2020-10-31 19:13:59', '2020-10-31 19:13:59');
INSERT INTO `logs` VALUES (831, '(10, Luis C. Rojano): Update layer (78, test).', 'layers', '78', 10, '2020-11-01 12:57:35', '2020-11-01 12:57:35');
INSERT INTO `logs` VALUES (832, '(10, Luis C. Rojano): DELETE layer (78, test).', 'layers', '78', 10, '2020-11-01 13:02:42', '2020-11-01 13:02:42');
INSERT INTO `logs` VALUES (833, '(10, Luis C. Rojano): DELETE layer (77, test).', 'layers', '77', 10, '2020-11-01 13:02:48', '2020-11-01 13:02:48');
INSERT INTO `logs` VALUES (834, '(10, Luis C. Rojano): Update Visibility (71, Estaciones IDEAM).', 'layers', '71', 10, '2020-11-01 22:15:01', '2020-11-01 22:15:01');
INSERT INTO `logs` VALUES (835, '(10, Luis C. Rojano): Update Visibility (73, Land).', 'layers', '73', 10, '2020-11-01 22:15:05', '2020-11-01 22:15:05');
INSERT INTO `logs` VALUES (836, '(10, Luis C. Rojano): Update Visibility (72, Estaciones ADCP).', 'layers', '72', 10, '2020-11-01 22:15:08', '2020-11-01 22:15:08');
INSERT INTO `logs` VALUES (837, '(10, Luis C. Rojano): Update Visibility (67, Velocidad para Caudal 7600 m3/s).', 'layers', '67', 10, '2020-11-01 22:15:12', '2020-11-01 22:15:12');
INSERT INTO `logs` VALUES (838, '(10, Luis C. Rojano): Update Visibility (74, geomorfo).', 'layers', '74', 10, '2020-11-01 22:15:15', '2020-11-01 22:15:15');
INSERT INTO `logs` VALUES (839, 'CHANGE VISIBILITY TO 1,  station (10, BARRANCA VIEJA).', 'stations', '10', 10, '2020-11-02 04:56:33', '2020-11-02 04:56:33');
INSERT INTO `logs` VALUES (840, 'User (10, Luis C. Rojano): UPDATE  station (33, ESTACION X).', 'stations', '33', 10, '2020-11-02 05:05:34', '2020-11-02 05:05:34');
INSERT INTO `logs` VALUES (841, 'CHANGE VISIBILITY TO ,  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-11-04 03:25:00', '2020-11-04 03:25:00');
INSERT INTO `logs` VALUES (842, 'CHANGE VISIBILITY TO ,  station (10, BARRANCA VIEJA).', 'stations', '10', 10, '2020-11-04 03:25:01', '2020-11-04 03:25:01');
INSERT INTO `logs` VALUES (843, 'CHANGE VISIBILITY TO ,  station (11, MAGANGUE).', 'stations', '11', 10, '2020-11-04 03:25:01', '2020-11-04 03:25:01');
INSERT INTO `logs` VALUES (844, 'CHANGE VISIBILITY TO ,  station (12, PLATO).', 'stations', '12', 10, '2020-11-04 03:25:02', '2020-11-04 03:25:02');
INSERT INTO `logs` VALUES (845, 'CHANGE VISIBILITY TO ,  station (13, TENERIFE).', 'stations', '13', 10, '2020-11-04 03:25:02', '2020-11-04 03:25:02');
INSERT INTO `logs` VALUES (846, 'CHANGE VISIBILITY TO ,  station (15, TEBSA).', 'stations', '15', 10, '2020-11-04 03:25:27', '2020-11-04 03:25:27');
INSERT INTO `logs` VALUES (847, 'CHANGE VISIBILITY TO ,  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-11-04 03:42:39', '2020-11-04 03:42:39');
INSERT INTO `logs` VALUES (848, 'CHANGE VISIBILITY TO 1,  station (9, SAN PEDRITO).', 'stations', '9', 10, '2020-11-04 03:42:45', '2020-11-04 03:42:45');
INSERT INTO `logs` VALUES (849, 'CHANGE VISIBILITY TO 1,  station (15, TEBSA).', 'stations', '15', 10, '2020-11-04 03:43:10', '2020-11-04 03:43:10');
INSERT INTO `logs` VALUES (850, 'CHANGE VISIBILITY TO ,  station (15, TEBSA).', 'stations', '15', 10, '2020-11-04 03:43:11', '2020-11-04 03:43:11');
INSERT INTO `logs` VALUES (851, 'CHANGE VISIBILITY TO 1,  station (15, TEBSA).', 'stations', '15', 10, '2020-11-04 03:44:27', '2020-11-04 03:44:27');
INSERT INTO `logs` VALUES (852, 'CHANGE VISIBILITY TO ,  station (15, TEBSA).', 'stations', '15', 10, '2020-11-04 03:44:29', '2020-11-04 03:44:29');
INSERT INTO `logs` VALUES (853, 'CHANGE VISIBILITY TO 1,  station (15, TEBSA).', 'stations', '15', 10, '2020-11-04 03:46:15', '2020-11-04 03:46:15');
INSERT INTO `logs` VALUES (854, 'CHANGE VISIBILITY TO ,  station (15, TEBSA).', 'stations', '15', 10, '2020-11-04 03:46:16', '2020-11-04 03:46:16');
INSERT INTO `logs` VALUES (855, 'CHANGE VISIBILITY TO 1,  station (15, TEBSA).', 'stations', '15', 10, '2020-11-04 03:49:28', '2020-11-04 03:49:28');
INSERT INTO `logs` VALUES (856, 'CHANGE VISIBILITY TO ,  station (15, TEBSA).', 'stations', '15', 10, '2020-11-04 03:49:29', '2020-11-04 03:49:29');
INSERT INTO `logs` VALUES (857, 'CHANGE VISIBILITY TO 1,  station (15, TEBSA).', 'stations', '15', 10, '2020-11-04 03:49:45', '2020-11-04 03:49:45');
INSERT INTO `logs` VALUES (858, 'User (10, Luis C. Rojano): UPDATE  station (15, TEBSA).', 'stations', '15', 10, '2020-11-04 03:50:17', '2020-11-04 03:50:17');
INSERT INTO `logs` VALUES (859, 'CHANGE VISIBILITY TO 1,  station (15, TEBSA).', 'stations', '15', 10, '2020-11-04 03:50:28', '2020-11-04 03:50:28');
INSERT INTO `logs` VALUES (860, 'User (10, Luis C. Rojano): ADD   Category (28, JSON URL).', 'categories', '28', 10, '2020-11-04 05:35:38', '2020-11-04 05:35:38');
INSERT INTO `logs` VALUES (861, 'User (10, Luis C. Rojano): ADD   Layer (75, Rios).', 'layers', '75', 10, '2020-11-04 05:36:15', '2020-11-04 05:36:15');
INSERT INTO `logs` VALUES (862, 'User (10, Luis C. Rojano): ADD   Layer (76, prueba).', 'layers', '76', 10, '2020-11-04 05:55:55', '2020-11-04 05:55:55');
INSERT INTO `logs` VALUES (863, 'User (10, Luis C. Rojano): ADD   Layer (77, Orillas).', 'layers', '77', 10, '2020-11-04 16:31:18', '2020-11-04 16:31:18');
INSERT INTO `logs` VALUES (864, 'User (10, Luis C. Rojano): UPDATE   Layer (77, Orillas).', 'layers', '77', 10, '2020-11-04 22:25:41', '2020-11-04 22:25:41');
INSERT INTO `logs` VALUES (865, 'User (10, Luis C. Rojano): UPDATE   Layer (77, Orillas).', 'layers', '77', 10, '2020-11-04 22:31:55', '2020-11-04 22:31:55');
INSERT INTO `logs` VALUES (866, 'User (10, Luis C. Rojano): UPDATE   Layer (77, Orillas).', 'layers', '77', 10, '2020-11-04 22:35:24', '2020-11-04 22:35:24');
INSERT INTO `logs` VALUES (867, 'User (10, Luis C. Rojano): UPDATE   Layer (77, Orillas).', 'layers', '77', 10, '2020-11-04 22:38:52', '2020-11-04 22:38:52');
INSERT INTO `logs` VALUES (868, 'User (10, Luis C. Rojano): UPDATE   Layer (77, Orillas).', 'layers', '77', 10, '2020-11-04 22:42:02', '2020-11-04 22:42:02');
INSERT INTO `logs` VALUES (869, 'User (10, Luis C. Rojano): UPDATE   Layer (72, Estaciones ADCP).', 'layers', '72', 10, '2020-11-04 23:44:53', '2020-11-04 23:44:53');
INSERT INTO `logs` VALUES (870, 'User (10, Luis C. Rojano): UPDATE   Layer (72, Estaciones ADCP).', 'layers', '72', 10, '2020-11-05 00:02:16', '2020-11-05 00:02:16');
INSERT INTO `logs` VALUES (871, 'User (10, Luis C. Rojano): UPDATE   Layer (77, Orillas).', 'layers', '77', 10, '2020-11-05 00:04:51', '2020-11-05 00:04:51');
INSERT INTO `logs` VALUES (872, 'User (10, Luis C. Rojano): UPDATE   Layer (72, Estaciones ADCP).', 'layers', '72', 10, '2020-11-05 00:08:19', '2020-11-05 00:08:19');
INSERT INTO `logs` VALUES (873, 'User (10, Luis C. Rojano): UPDATE   Layer (72, Estaciones ADCP).', 'layers', '72', 10, '2020-11-05 00:10:53', '2020-11-05 00:10:53');
INSERT INTO `logs` VALUES (874, 'User (10, Luis C. Rojano): UPDATE   Layer (72, Estaciones ADCP).', 'layers', '72', 10, '2020-11-05 00:14:38', '2020-11-05 00:14:38');
INSERT INTO `logs` VALUES (875, 'User (10, Luis C. Rojano): UPDATE   Layer (77, Orillas).', 'layers', '77', 10, '2020-11-05 00:18:06', '2020-11-05 00:18:06');
INSERT INTO `logs` VALUES (876, 'User (10, Luis C. Rojano): UPDATE   Layer (72, Estaciones ADCP).', 'layers', '72', 10, '2020-11-05 00:18:51', '2020-11-05 00:18:51');
INSERT INTO `logs` VALUES (877, 'User (10, Luis C. Rojano): UPDATE   Layer (77, Orillas).', 'layers', '77', 10, '2020-11-05 00:19:47', '2020-11-05 00:19:47');
INSERT INTO `logs` VALUES (878, '(10, Luis C. Rojano): DELETE layer (76, prueba).', 'layers', '76', 10, '2020-11-05 03:08:18', '2020-11-05 03:08:18');
INSERT INTO `logs` VALUES (879, '(10, Luis C. Rojano): DELETE layer (75, Rios).', 'layers', '75', 10, '2020-11-05 03:08:28', '2020-11-05 03:08:28');
INSERT INTO `logs` VALUES (880, '(10, Luis C. Rojano): DELETE layer (74, geomorfo).', 'layers', '74', 10, '2020-11-05 03:08:49', '2020-11-05 03:08:49');
INSERT INTO `logs` VALUES (881, '(10, Luis C. Rojano): DELETE layer (67, Velocidad para Caudal 7600 m3/s).', 'layers', '67', 10, '2020-11-05 03:08:55', '2020-11-05 03:08:55');
INSERT INTO `logs` VALUES (882, '(10, Luis C. Rojano): DELETE layer (77, Orillas).', 'layers', '77', 10, '2020-11-05 03:08:59', '2020-11-05 03:08:59');
INSERT INTO `logs` VALUES (883, '(10, Luis C. Rojano): DELETE layer (72, Estaciones ADCP).', 'layers', '72', 10, '2020-11-05 03:09:04', '2020-11-05 03:09:04');
INSERT INTO `logs` VALUES (884, '(10, Luis C. Rojano): DELETE layer (73, Land).', 'layers', '73', 10, '2020-11-05 03:09:09', '2020-11-05 03:09:09');
INSERT INTO `logs` VALUES (885, '(10, Luis C. Rojano): DELETE layer (71, Estaciones IDEAM).', 'layers', '71', 10, '2020-11-05 03:09:13', '2020-11-05 03:09:13');
INSERT INTO `logs` VALUES (886, '(10, Luis C. Rojano): DELETE category (28, JSON URL).', 'categorys', '28', 10, '2020-11-05 04:00:08', '2020-11-05 04:00:08');
INSERT INTO `logs` VALUES (887, '(10, Luis C. Rojano): DELETE category (27, Prueba).', 'categorys', '27', 10, '2020-11-05 04:00:11', '2020-11-05 04:00:11');
INSERT INTO `logs` VALUES (888, '(10, Luis C. Rojano): DELETE category (26, Test).', 'categorys', '26', 10, '2020-11-05 04:00:13', '2020-11-05 04:00:13');
INSERT INTO `logs` VALUES (889, 'User (10, Luis C. Rojano): ADD   Category (29, Información General).', 'categories', '29', 10, '2020-11-05 04:01:25', '2020-11-05 04:01:25');
INSERT INTO `logs` VALUES (890, 'User (10, Luis C. Rojano): ADD   Layer (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-05 04:28:37', '2020-11-05 04:28:37');
INSERT INTO `logs` VALUES (891, '(10, Luis C. Rojano): Update Visibility (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-05 04:29:06', '2020-11-05 04:29:06');
INSERT INTO `logs` VALUES (892, '(10, Luis C. Rojano): Update Visibility (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-05 04:29:15', '2020-11-05 04:29:15');
INSERT INTO `logs` VALUES (893, 'User (10, Luis C. Rojano): UPDATE   Layer (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-05 04:32:02', '2020-11-05 04:32:02');
INSERT INTO `logs` VALUES (894, '(10, Luis C. Rojano): Update Visibility (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-05 04:32:15', '2020-11-05 04:32:15');
INSERT INTO `logs` VALUES (895, '(10, Luis C. Rojano): Update Visibility (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-05 04:32:17', '2020-11-05 04:32:17');
INSERT INTO `logs` VALUES (896, '(10, Luis C. Rojano): Update Visibility (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-05 04:32:21', '2020-11-05 04:32:21');
INSERT INTO `logs` VALUES (897, '(10, Luis C. Rojano): Update Visibility (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-05 04:36:01', '2020-11-05 04:36:01');
INSERT INTO `logs` VALUES (898, '(10, Luis C. Rojano): Update Visibility (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-05 04:36:03', '2020-11-05 04:36:03');
INSERT INTO `logs` VALUES (899, '(10, Luis C. Rojano): Update Visibility (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-05 04:36:06', '2020-11-05 04:36:06');
INSERT INTO `logs` VALUES (900, '(10, Luis C. Rojano): Update Visibility (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-05 04:36:08', '2020-11-05 04:36:08');
INSERT INTO `logs` VALUES (901, 'User (10, Luis C. Rojano): UPDATE   Layer (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-06 00:45:55', '2020-11-06 00:45:55');
INSERT INTO `logs` VALUES (902, 'User (10, Luis C. Rojano): UPDATE   Layer (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-06 00:48:21', '2020-11-06 00:48:21');
INSERT INTO `logs` VALUES (903, '(10, Luis C. Rojano): Update Visibility (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-06 01:47:49', '2020-11-06 01:47:49');
INSERT INTO `logs` VALUES (904, '(10, Luis C. Rojano): Update Visibility (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-06 01:51:25', '2020-11-06 01:51:25');
INSERT INTO `logs` VALUES (905, '(10, Luis C. Rojano): Update Visibility (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-06 01:51:27', '2020-11-06 01:51:27');
INSERT INTO `logs` VALUES (906, '(10, Luis C. Rojano): Update Visibility (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-06 01:51:28', '2020-11-06 01:51:28');
INSERT INTO `logs` VALUES (907, '(10, Luis C. Rojano): Update Visibility (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-06 01:51:30', '2020-11-06 01:51:30');
INSERT INTO `logs` VALUES (908, 'User (10, Luis C. Rojano): ADD   Layer (79, Estaciones ADCP).', 'layers', '79', 10, '2020-11-06 05:35:56', '2020-11-06 05:35:56');
INSERT INTO `logs` VALUES (909, '(10, Luis C. Rojano): Update Visibility (79, Estaciones ADCP).', 'layers', '79', 10, '2020-11-06 05:36:41', '2020-11-06 05:36:41');
INSERT INTO `logs` VALUES (910, '(10, Luis C. Rojano): Update Visibility (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-06 05:37:25', '2020-11-06 05:37:25');
INSERT INTO `logs` VALUES (911, '(10, Luis C. Rojano): Update Visibility (78, Estaciones IDEAM).', 'layers', '78', 10, '2020-11-06 06:01:04', '2020-11-06 06:01:04');
INSERT INTO `logs` VALUES (912, 'User (10, Luis C. Rojano): ADD Files To  FILES (122, land1).', 'FILES', '122', 10, '2020-11-06 07:07:09', '2020-11-06 07:07:09');
INSERT INTO `logs` VALUES (913, 'User (10, Luis C. Rojano): Update   Layer (75, FRECUENCIA_CALAMAR_2).', 'files', '75', 10, '2020-11-06 08:13:23', '2020-11-06 08:13:23');
INSERT INTO `logs` VALUES (914, 'User (10, Luis C. Rojano): Update   Layer (75, FRECUENCIA_CALAMAR_2).', 'files', '75', 10, '2020-11-06 08:13:24', '2020-11-06 08:13:24');
INSERT INTO `logs` VALUES (915, '(10, Luis C. Rojano): DELETE file (75, FRECUENCIA_CALAMAR_2).', 'files', '75', 10, '2020-11-06 08:13:49', '2020-11-06 08:13:49');
INSERT INTO `logs` VALUES (916, 'User (10, Luis C. Rojano): ADD Files To  FILES (123, land3).', 'FILES', '123', 10, '2020-11-06 08:14:10', '2020-11-06 08:14:10');
INSERT INTO `logs` VALUES (917, 'User (10, Luis C. Rojano): ADD   Category (30, Prueba).', 'categories', '30', 10, '2020-11-10 06:24:53', '2020-11-10 06:24:53');
INSERT INTO `logs` VALUES (918, 'User (10, Luis C. Rojano): UPDATE   Layer (63, Velocidad para Caudal 12000 m3/s).', 'layers', '63', 10, '2020-11-10 06:27:33', '2020-11-10 06:27:33');
INSERT INTO `logs` VALUES (919, '(10, Luis C. Rojano): DELETE file (79, FRECUENCIA_SAN_PEDRITO_2).', 'files', '79', 10, '2020-11-10 10:45:53', '2020-11-10 10:45:53');
INSERT INTO `logs` VALUES (920, 'User (10, Luis C. Rojano): Update   Layer (78, DURACION_SAN_PEDRITO_2).', 'files', '78', 10, '2020-11-10 10:46:01', '2020-11-10 10:46:01');
INSERT INTO `logs` VALUES (921, '(10, Luis C. Rojano): DELETE column (5, Otros Archivos).', 'columns', '5', 10, '2020-11-10 10:46:15', '2020-11-10 10:46:15');
INSERT INTO `logs` VALUES (922, 'User (10, Luis C. Rojano): ADD   COLUMN (6, Prueba).', 'columns', '6', 10, '2020-11-10 11:08:36', '2020-11-10 11:08:36');
INSERT INTO `logs` VALUES (923, 'User (10, Luis C. Rojano): ADD Files To  FILES (124, soft).', 'FILES', '124', 10, '2020-11-10 11:09:02', '2020-11-10 11:09:02');
INSERT INTO `logs` VALUES (924, '(10, Luis C. Rojano): DELETE file (124, soft).', 'files', '124', 10, '2020-11-10 11:09:23', '2020-11-10 11:09:23');
INSERT INTO `logs` VALUES (925, 'User (10, Luis C. Rojano): ADD Files To  FILES (125, ezgif-6-b3f1e6bc54cb).', 'FILES', '125', 10, '2020-11-10 11:10:06', '2020-11-10 11:10:06');
INSERT INTO `logs` VALUES (926, 'User (10, Luis C. Rojano): Update   Layer (78, DURACION_SAN_PEDRITO_2).', 'files', '78', 10, '2020-11-10 13:13:53', '2020-11-10 13:13:53');
INSERT INTO `logs` VALUES (927, 'User (10, Luis C. Rojano): Update   Layer (78, DURACION_SAN_PEDRITO_2).', 'files', '78', 10, '2020-11-10 13:23:35', '2020-11-10 13:23:35');
INSERT INTO `logs` VALUES (928, 'User (10, Luis C. Rojano): Update   Layer (78, DURACION_SAN_PEDRITO_2).', 'files', '78', 10, '2020-11-10 13:26:09', '2020-11-10 13:26:09');
INSERT INTO `logs` VALUES (929, 'User (10, Luis C. Rojano): Update   Layer (78, DURACION_SAN_PEDRITO_2).', 'files', '78', 10, '2020-11-10 13:31:00', '2020-11-10 13:31:00');
INSERT INTO `logs` VALUES (930, 'User (10, Luis C. Rojano): ADD  station (37, test).', 'stations', '37', 10, '2020-11-10 13:33:44', '2020-11-10 13:33:44');
INSERT INTO `logs` VALUES (931, 'User (10, Luis C. Rojano): ADD Files To  FILES (126, Captura).', 'FILES', '126', 10, '2020-11-10 13:34:13', '2020-11-10 13:34:13');
INSERT INTO `logs` VALUES (932, 'User (10, Luis C. Rojano): UPDATE   Layer (47, Estaciones IDEAM).', 'layers', '47', 10, '2020-11-10 13:37:00', '2020-11-10 13:37:00');
INSERT INTO `logs` VALUES (933, '(10, Luis C. Rojano): Update Visibility (47, Estaciones IDEAM).', 'layers', '47', 10, '2020-11-10 13:37:10', '2020-11-10 13:37:10');
INSERT INTO `logs` VALUES (934, '(10, Luis C. Rojano): DELETE file (125, ezgif-6-b3f1e6bc54cb).', 'files', '125', 10, '2020-11-10 13:48:13', '2020-11-10 13:48:13');
INSERT INTO `logs` VALUES (935, 'User (10, Luis C. Rojano): UPDATE   Category (18, Velocidad).', 'categories', '18', 10, '2020-11-17 15:35:03', '2020-11-17 15:35:03');
INSERT INTO `logs` VALUES (936, 'User (10, Luis C. Rojano): UPDATE   Category (17, Velocidad).', 'categories', '17', 10, '2020-11-17 15:35:10', '2020-11-17 15:35:10');
INSERT INTO `logs` VALUES (937, 'User (10, Luis C. Rojano): UPDATE   Category (26, Velocidad).', 'categories', '26', 10, '2020-11-17 15:47:42', '2020-11-17 15:47:42');
INSERT INTO `logs` VALUES (938, 'User (10, Luis C. Rojano): UPDATE   Category (19, Profundidad).', 'categories', '19', 10, '2020-11-17 15:49:50', '2020-11-17 15:49:50');
INSERT INTO `logs` VALUES (939, 'User (10, Luis C. Rojano): UPDATE   Layer (50, Unidades Geomorfológicas).', 'layers', '50', 10, '2020-11-17 16:33:26', '2020-11-17 16:33:26');
INSERT INTO `logs` VALUES (940, 'User (10, Luis C. Rojano): UPDATE   Layer (50, Unidades Geomorfológicas).', 'layers', '50', 10, '2020-11-17 16:39:43', '2020-11-17 16:39:43');
INSERT INTO `logs` VALUES (941, 'User (10, Luis C. Rojano): UPDATE   Layer (50, Unidades Geomorfológicas).', 'layers', '50', 10, '2020-11-17 16:42:06', '2020-11-17 16:42:06');

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 24 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES (20, '2014_10_12_000000_create_users_table', 5);
INSERT INTO `migrations` VALUES (2, '2014_10_12_100000_create_password_resets_table', 1);
INSERT INTO `migrations` VALUES (3, '2016_06_01_000001_create_oauth_auth_codes_table', 1);
INSERT INTO `migrations` VALUES (4, '2016_06_01_000002_create_oauth_access_tokens_table', 1);
INSERT INTO `migrations` VALUES (5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1);
INSERT INTO `migrations` VALUES (6, '2016_06_01_000004_create_oauth_clients_table', 1);
INSERT INTO `migrations` VALUES (7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1);
INSERT INTO `migrations` VALUES (8, '2019_08_19_000000_create_failed_jobs_table', 1);
INSERT INTO `migrations` VALUES (9, '2020_06_23_070533_create_permission_tables', 1);
INSERT INTO `migrations` VALUES (10, '2020_06_23_071546_create_admins_table', 1);
INSERT INTO `migrations` VALUES (11, '2020_06_23_072219_create_staff_table', 1);
INSERT INTO `migrations` VALUES (23, '2020_06_23_082956_create_generals_table', 6);
INSERT INTO `migrations` VALUES (16, '2020_08_05_071529_create_layers_table', 2);
INSERT INTO `migrations` VALUES (15, '2020_08_04_062756_create_categories_table', 2);
INSERT INTO `migrations` VALUES (17, '2020_08_05_071959_create_stations_table', 3);
INSERT INTO `migrations` VALUES (18, '2020_08_05_071960_create_columns_table', 4);
INSERT INTO `migrations` VALUES (19, '2020_08_05_073640_create_files_table', 4);
INSERT INTO `migrations` VALUES (21, '2020_08_05_073753_create_logs_table', 5);
INSERT INTO `migrations` VALUES (22, '2020_08_23_092039_create_people_table', 5);

-- ----------------------------
-- Table structure for model_has_permissions
-- ----------------------------
DROP TABLE IF EXISTS `model_has_permissions`;
CREATE TABLE `model_has_permissions`  (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`permission_id`, `model_id`, `model_type`) USING BTREE,
  INDEX `model_has_permissions_model_id_model_type_index`(`model_id`, `model_type`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of model_has_permissions
-- ----------------------------

-- ----------------------------
-- Table structure for model_has_roles
-- ----------------------------
DROP TABLE IF EXISTS `model_has_roles`;
CREATE TABLE `model_has_roles`  (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`role_id`, `model_id`, `model_type`) USING BTREE,
  INDEX `model_has_roles_model_id_model_type_index`(`model_id`, `model_type`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of model_has_roles
-- ----------------------------
INSERT INTO `model_has_roles` VALUES (1, 'App\\User', 3);
INSERT INTO `model_has_roles` VALUES (1, 'App\\User', 10);
INSERT INTO `model_has_roles` VALUES (2, 'App\\User', 10);
INSERT INTO `model_has_roles` VALUES (2, 'App\\User', 30);
INSERT INTO `model_has_roles` VALUES (2, 'App\\User', 34);
INSERT INTO `model_has_roles` VALUES (2, 'App\\User', 46);
INSERT INTO `model_has_roles` VALUES (3, 'App\\User', 31);
INSERT INTO `model_has_roles` VALUES (3, 'App\\User', 34);
INSERT INTO `model_has_roles` VALUES (3, 'App\\User', 45);
INSERT INTO `model_has_roles` VALUES (3, 'App\\User', 54);
INSERT INTO `model_has_roles` VALUES (3, 'App\\User', 55);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 5);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 6);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 7);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 8);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 9);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 10);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 11);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 12);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 13);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 14);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 15);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 16);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 17);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 18);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 19);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 20);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 21);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 22);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 23);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 24);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 25);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 28);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 29);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 32);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 33);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 34);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 35);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 36);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 37);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 38);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 39);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 40);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 41);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 42);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 43);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 44);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 45);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 46);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 47);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 54);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 55);
INSERT INTO `model_has_roles` VALUES (4, 'App\\User', 56);
INSERT INTO `model_has_roles` VALUES (10, 'App\\User', 10);
INSERT INTO `model_has_roles` VALUES (10, 'App\\User', 31);
INSERT INTO `model_has_roles` VALUES (10, 'App\\User', 47);

-- ----------------------------
-- Table structure for oauth_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_access_tokens`;
CREATE TABLE `oauth_access_tokens`  (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NULL DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `scopes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `expires_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `oauth_access_tokens_user_id_index`(`user_id`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_access_tokens
-- ----------------------------
INSERT INTO `oauth_access_tokens` VALUES ('8b51808002088c1bb78be76b24d11eef81c765b2b064fa713656781a87f00aefa6150289526493a6', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 01:52:53', '2020-08-11 01:52:53', '2020-08-11 02:02:53');
INSERT INTO `oauth_access_tokens` VALUES ('5cce3747d3af973a346a9b101492d879ef99677c25dd2fe2ffe5c2ba884c05db7c6202a73212d164', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 01:42:29', '2020-08-11 01:42:29', '2020-08-11 01:52:29');
INSERT INTO `oauth_access_tokens` VALUES ('c3e851c947e63db040696ca398eab5b959a27cea7e4af4dd8f13dc6c88f442a54c29a40ae7d9dafc', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 01:30:16', '2020-08-11 01:30:16', '2020-08-11 01:40:16');
INSERT INTO `oauth_access_tokens` VALUES ('268c4230e0e3b3d23a0a1cb5489f6d226731ac822aacc525f2f01dd0726d445ecfd376c723e8c335', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 01:19:46', '2020-08-11 01:19:46', '2020-08-11 01:29:46');
INSERT INTO `oauth_access_tokens` VALUES ('d11472030de4293f3d020b44c1e17b396edb6679e4d190968d5f86ffe82dd6db6b6bfc49500c2d7d', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 22:22:24', '2020-08-10 22:22:24', '2020-08-10 22:32:24');
INSERT INTO `oauth_access_tokens` VALUES ('e0dad6f5e65358cf8a12739cd77abae4e073bf136042b94eb471fbfe51f23a67547b8c5035ec8dcf', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 21:51:39', '2020-08-10 21:51:39', '2020-08-10 22:01:39');
INSERT INTO `oauth_access_tokens` VALUES ('6f7f21c7dee1c1d79ce7da5d4b43d61ce4244f2773787fdb6fd6fe3856118efb17b1d0c00ebfcc74', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 19:50:07', '2020-08-10 19:50:07', '2020-08-10 20:00:07');
INSERT INTO `oauth_access_tokens` VALUES ('ac9d37c853f5dcb1ef81fadf14c31da73d0abd5b9362ddbe94b1b9c79f1c1c8ad6e4baa4478bcb70', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 18:41:56', '2020-08-10 18:41:56', '2020-08-10 18:51:56');
INSERT INTO `oauth_access_tokens` VALUES ('b0b3beef2bd5c80e1541fb59418d8c247f5926c3533ef39b86d4401e233f493adbd94d6c4b8d6f79', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 18:24:37', '2020-08-10 18:24:37', '2020-08-10 18:34:37');
INSERT INTO `oauth_access_tokens` VALUES ('637247e07d806abf7ce393f55678a01138abbe95e08528b771163fbed0632d10fb5ebe762904ae2b', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 18:08:40', '2020-08-10 18:08:40', '2020-08-10 18:18:40');
INSERT INTO `oauth_access_tokens` VALUES ('7282366899fe5556e1500d4c20b9413892f7480767373115710a7041f1fcc60fc17f3ee68913f0d6', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 09:16:04', '2020-08-10 09:16:04', '2020-08-10 09:26:04');
INSERT INTO `oauth_access_tokens` VALUES ('9aa8d0f087cffb964ad2714b2ca87a8873dc00387e0778166057cb9e3e8106abee48e04a62943acb', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 09:05:59', '2020-08-10 09:05:59', '2020-08-10 09:15:59');
INSERT INTO `oauth_access_tokens` VALUES ('a6a4f2b18a9aa3c25f3339043c7746542f469787a4548c93f57341e0766ec9a0b92a29d5c817ef6e', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 08:05:26', '2020-08-10 08:05:26', '2020-08-10 08:15:26');
INSERT INTO `oauth_access_tokens` VALUES ('809aa7f7e069b490ac42be10b9570307985cfdbda3150a109ade57bfdcc53b4898019376cdf29da8', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 07:53:31', '2020-08-10 07:53:31', '2020-08-10 08:03:31');
INSERT INTO `oauth_access_tokens` VALUES ('6416c02e9972d1c6a6bf8f80eba4561d590206e75bda96c684d8bf0119a8b85c2f89bb7b7b16a997', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 07:28:39', '2020-08-10 07:28:39', '2020-08-10 07:38:39');
INSERT INTO `oauth_access_tokens` VALUES ('9db94c962e1d2bcccdc3290a7eeeb2d27dc6706478656e62200fbf38cdd0596092475d587b85e062', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 07:11:40', '2020-08-10 07:11:40', '2020-08-10 07:21:40');
INSERT INTO `oauth_access_tokens` VALUES ('68444ff4d5bc332fad4b6f3fb9572e613f4ec03ce5e0fe6e07a027bb6764dae4cf6901a7548bacb7', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 06:45:42', '2020-08-10 06:45:42', '2020-08-10 06:55:42');
INSERT INTO `oauth_access_tokens` VALUES ('4ae983efd6a8caa07a23f9b9c2967e568f61cee84d818bc6da816b54d3dfe6a3ff19bf012c26258e', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 06:35:41', '2020-08-10 06:35:41', '2020-08-10 06:45:41');
INSERT INTO `oauth_access_tokens` VALUES ('0648c5b1d5be7f923354ece4f4016be9ebc105e4df7e3276269f034f37e412a0a02cf4e166b39741', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 06:23:15', '2020-08-10 06:23:15', '2020-08-10 06:33:15');
INSERT INTO `oauth_access_tokens` VALUES ('a93bf44e85f08b59a007354d61ef188e9ea649607ce79bee6f48cf043a82585840c0a8468dab276d', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 06:03:37', '2020-08-10 06:03:37', '2020-08-10 06:13:37');
INSERT INTO `oauth_access_tokens` VALUES ('1d27616db9527cc4a7ffc4de660eefbe322dd49c61dd2a4cea7a74de3226cce38c6faf4323ac349a', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 00:33:33', '2020-08-10 00:33:33', '2020-08-10 00:43:33');
INSERT INTO `oauth_access_tokens` VALUES ('e5f95914c35e35760149f9e7ff2942600f81c43bc46f2aae744c43b4905d6cd015f42126eb7b12cd', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 00:33:28', '2020-08-10 00:33:28', '2020-08-10 00:43:28');
INSERT INTO `oauth_access_tokens` VALUES ('3cf8a24c4931979f9a7972fa2c57f320a36d3aeaf8386230df6fb7706c4c0c13609922ce824085d6', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 00:22:15', '2020-08-10 00:22:15', '2020-08-10 00:32:15');
INSERT INTO `oauth_access_tokens` VALUES ('9424a390abbe6032f28418c7ccd46d152ac665ea2d99bfeea55c996946a9defbe6ee71b2b1262b46', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 00:12:08', '2020-08-10 00:12:08', '2020-08-10 00:22:08');
INSERT INTO `oauth_access_tokens` VALUES ('80074a44a6739544aeb1cbd5ef6fce9fb7d57af2cee7b4c1d5044ec9654d6ba9200dc44412703f29', 10, 9, NULL, '[\"*\"]', 1, '2020-08-10 00:01:02', '2020-08-10 00:01:02', '2020-08-10 00:11:02');
INSERT INTO `oauth_access_tokens` VALUES ('09dae7e8d30f91186fbb66893538ee4d67d510c38b8ede430479d75a649bf58074c08cf0ea290015', 10, 9, NULL, '[\"*\"]', 1, '2020-08-09 23:49:36', '2020-08-09 23:49:36', '2020-08-09 23:59:36');
INSERT INTO `oauth_access_tokens` VALUES ('681e5fa6e4ccf1bbb24847f3eec9c27d61678ebb412de356dbec8f492f40ae2f4a0eb1cf04c34fc9', 10, 9, NULL, '[\"*\"]', 1, '2020-08-09 23:38:55', '2020-08-09 23:38:55', '2020-08-09 23:48:55');
INSERT INTO `oauth_access_tokens` VALUES ('cf0034db56e1b6a350a2eb5e5aee93ee07802ebd74101406768092948902215ec86eb5d6033b4ddc', 10, 9, NULL, '[\"*\"]', 1, '2020-08-09 23:25:42', '2020-08-09 23:25:42', '2020-08-09 23:35:42');
INSERT INTO `oauth_access_tokens` VALUES ('6fb3b8fef5ed8f2689d096c5d41a06f17b39786a56129fa03b97d570010abc4eecf5175dca861e54', 10, 9, NULL, '[\"*\"]', 1, '2020-08-09 23:14:28', '2020-08-09 23:14:28', '2020-08-09 23:24:28');
INSERT INTO `oauth_access_tokens` VALUES ('367667b196ef3e42d46c53bdfa4d34ea1526a951d45dbca86c165b6ad5e1eacba173117ea4fe6994', 10, 9, NULL, '[\"*\"]', 1, '2020-08-09 21:01:38', '2020-08-09 21:01:38', '2020-08-09 21:11:38');
INSERT INTO `oauth_access_tokens` VALUES ('a05ab2af17d9409254a275c42a813012134c0f7a7ba600f614a2aa239c2c1e6b1edebd22a73c2e5d', 10, 9, NULL, '[\"*\"]', 1, '2020-08-09 21:01:33', '2020-08-09 21:01:33', '2020-08-09 21:11:33');
INSERT INTO `oauth_access_tokens` VALUES ('11516d6c772d7fdc3817cfed8ada4f8565ead3f1fde4e26e922add3748e413149ab98747f8ebf981', 10, 9, NULL, '[\"*\"]', 1, '2020-08-09 20:26:14', '2020-08-09 20:26:14', '2020-08-09 20:36:14');
INSERT INTO `oauth_access_tokens` VALUES ('7c1cd3766f55aafa90299e155669049bac379fd091cfa080567cf8d785f58ef6ac2ac4b141fc3ffa', 10, 9, NULL, '[\"*\"]', 1, '2020-08-09 20:26:07', '2020-08-09 20:26:07', '2020-08-09 20:36:06');
INSERT INTO `oauth_access_tokens` VALUES ('476cfced30d55d5c02713ea1ae7396862017c41c038b463284f081c54177795144e50bd1347a9060', 10, 9, NULL, '[\"*\"]', 1, '2020-08-09 20:12:32', '2020-08-09 20:12:32', '2020-08-09 20:22:32');
INSERT INTO `oauth_access_tokens` VALUES ('edd253960bb1dded0c84b1e701389acbcf24f592cb0d15ba86475f02badbfb47798f01f3e304ee6d', 10, 9, NULL, '[\"*\"]', 1, '2020-08-09 20:12:36', '2020-08-09 20:12:36', '2020-08-09 20:22:36');
INSERT INTO `oauth_access_tokens` VALUES ('131869228ace74cb39d2259e63008265a2da227299e450805ef4a50d1e8b675bd859010de4baa99e', 10, 9, NULL, '[\"*\"]', 1, '2020-08-09 06:35:22', '2020-08-09 06:35:22', '2020-08-09 06:45:22');
INSERT INTO `oauth_access_tokens` VALUES ('c682c596e55d38f45bfaed325cb705755008b783c1959d6d02c2b063ec2acf8de135d229bb2d5a4c', 10, 9, NULL, '[\"*\"]', 1, '2020-08-09 06:35:17', '2020-08-09 06:35:17', '2020-08-09 06:45:17');
INSERT INTO `oauth_access_tokens` VALUES ('5190110c485f3b165eae9a3782b064061b7873c2874bae4c33e538494b48f99a7edeb0afac304e48', 10, 9, NULL, '[\"*\"]', 1, '2020-08-09 06:19:46', '2020-08-09 06:19:46', '2020-08-09 06:29:46');
INSERT INTO `oauth_access_tokens` VALUES ('0e4c26ef6eb03f841776222b7976effdf79d25dfa3d1117d86310f9e7df1586f4d3cd2ed49159f65', 10, 9, NULL, '[\"*\"]', 1, '2020-08-09 05:57:03', '2020-08-09 05:57:03', '2020-08-09 06:07:03');
INSERT INTO `oauth_access_tokens` VALUES ('867f2716cc83af25a0eaf673f91d488bd77560556323f3ae24cbd6968d7d4f8dd48e8931d3c5d986', 10, 9, NULL, '[\"*\"]', 1, '2020-08-09 06:08:27', '2020-08-09 06:08:27', '2020-08-09 06:18:26');
INSERT INTO `oauth_access_tokens` VALUES ('c98140a7c5bd19bd62a3639e5fe83a6753f79ced955dc5fd6d601c402e4d17432500b1e194585180', 10, 9, NULL, '[\"*\"]', 1, '2020-08-09 05:57:02', '2020-08-09 05:57:02', '2020-08-09 06:07:02');
INSERT INTO `oauth_access_tokens` VALUES ('67f8986c7f935df96bd2fedb3fb2e2c06951783d3befd95a02c98ff3aebcce031afe5d041c5c23ac', 10, 9, NULL, '[\"*\"]', 1, '2020-08-09 00:28:59', '2020-08-09 00:28:59', '2020-08-09 00:38:59');
INSERT INTO `oauth_access_tokens` VALUES ('0d59aa5db9589bf825bd50861c08426f1d6bb5a8bb96b441c95d06415f8b6f940064986642e28f47', 10, 9, NULL, '[\"*\"]', 1, '2020-08-08 23:08:13', '2020-08-08 23:08:13', '2020-08-08 23:18:13');
INSERT INTO `oauth_access_tokens` VALUES ('93e7cd7347e6264b7d49fdcb41342f7889b6be8e6aeb14d76691775772dc493e4bbf968fac521d68', 10, 9, NULL, '[\"*\"]', 1, '2020-08-08 23:08:01', '2020-08-08 23:08:01', '2020-08-08 23:18:01');
INSERT INTO `oauth_access_tokens` VALUES ('53f7af6c4f36237d56a088baf67953823855c68e8a24e180af570809e62bece81e0243fd97cf53cc', 10, 9, NULL, '[\"*\"]', 1, '2020-08-08 20:49:56', '2020-08-08 20:49:56', '2020-08-08 20:59:56');
INSERT INTO `oauth_access_tokens` VALUES ('05b4c6a91d8e08944598ad478418031236961ac0547fce16a47d80ca4d36ea21a67cb73779b0351d', 10, 9, NULL, '[\"*\"]', 1, '2020-08-08 20:08:49', '2020-08-08 20:08:49', '2020-08-08 20:18:49');
INSERT INTO `oauth_access_tokens` VALUES ('84df37615c40935d8b7493ba95a97cca626b68e5babe752fa9e549939c2d8ba0f4a43c7603015d1e', 10, 9, NULL, '[\"*\"]', 1, '2020-08-08 20:08:47', '2020-08-08 20:08:47', '2020-08-08 20:18:47');
INSERT INTO `oauth_access_tokens` VALUES ('6c83058c40249f7644b4e8a1f6949238a6bc960915996e4fba39c7bca5e867861ae64f2caf071fa6', 10, 9, NULL, '[\"*\"]', 1, '2020-08-08 17:25:52', '2020-08-08 17:25:52', '2020-08-08 17:35:52');
INSERT INTO `oauth_access_tokens` VALUES ('f174304c15662c700b4925a03386ba0a7f4236e9975115c5331a8081e3ab0def5059f7ad8128f483', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 20:23:33', '2020-08-05 20:23:33', '2020-08-05 20:33:33');
INSERT INTO `oauth_access_tokens` VALUES ('d2cd0d16ab9bd6f30873ed01eaa4165c6cd09b946d6093c9bf84722366bcf30752648d0404f14bfc', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 20:21:02', '2020-08-05 20:21:02', '2020-08-05 20:31:02');
INSERT INTO `oauth_access_tokens` VALUES ('0a4f57316e4b96bd89642820a90e840be6b7c52a33691006adcd81b09e08c0dd9dc0ef994fdf305b', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 19:54:11', '2020-08-05 19:54:11', '2020-08-05 20:04:11');
INSERT INTO `oauth_access_tokens` VALUES ('316d864d791cfe69de7a4a0f7aabd028107bbba8e8f424344508ef6e06af451918c19fbbffe51e6d', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 19:54:09', '2020-08-05 19:54:09', '2020-08-05 20:04:09');
INSERT INTO `oauth_access_tokens` VALUES ('946714a8e38d0d7ed93c28e728ff6fb888566f895a13abdd8acce658bfbbf5652e0b168ddc1885ab', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 19:38:24', '2020-08-05 19:38:24', '2020-08-05 19:48:24');
INSERT INTO `oauth_access_tokens` VALUES ('1b922ce24dc2ab1ca12923705c30a47d266224206c82ac7f23f6577ba741effca1e6e55956d967bc', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 19:38:23', '2020-08-05 19:38:23', '2020-08-05 19:48:23');
INSERT INTO `oauth_access_tokens` VALUES ('abae0ba7a0aefca0d02820039a2d37f444411caf8a25f1ce8935c6b6e27f4fe3e4c86b02bb5c886a', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 19:28:18', '2020-08-05 19:28:18', '2020-08-05 19:38:18');
INSERT INTO `oauth_access_tokens` VALUES ('f86899346047a25a9031be44be9a59b1a8d354d4cfbe257d0a870e17b7c0939a3c1ff4dd473e8db3', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 19:28:17', '2020-08-05 19:28:17', '2020-08-05 19:38:17');
INSERT INTO `oauth_access_tokens` VALUES ('b8a3b8976e9c79d0e554d5bb8e3ee9f08efd49c1ad8f1ef2abfaa7a7f789bb365b78b642b9404194', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 19:16:57', '2020-08-05 19:16:57', '2020-08-05 19:26:57');
INSERT INTO `oauth_access_tokens` VALUES ('154f353a8e726fd9cf30bce06c481cb610d5b69b58229f117ae08ab5cb873ae5459454193bcb84ca', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 19:16:56', '2020-08-05 19:16:56', '2020-08-05 19:26:56');
INSERT INTO `oauth_access_tokens` VALUES ('b1d27d4934c3dc50e47d81ea8fc251781a05f0e9d62552d991ca237404a7899e2be89b56a9c3aa69', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 19:06:03', '2020-08-05 19:06:03', '2020-08-05 19:16:03');
INSERT INTO `oauth_access_tokens` VALUES ('52347ae72e47a1b67d1cb67ef793c4475c3933c9b37686003ad2133ad39df48d43690dcf5ebe995d', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 19:06:02', '2020-08-05 19:06:02', '2020-08-05 19:16:01');
INSERT INTO `oauth_access_tokens` VALUES ('1759a41b2fc04d4a867051aa1ed5a8d4ad4e2175b9316c1f990a61c40465ac7a32c37a1c6409ae0d', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 18:53:10', '2020-08-05 18:53:10', '2020-08-05 19:03:10');
INSERT INTO `oauth_access_tokens` VALUES ('7b6d7864103ee935076a6cc35c5acba9315d112e0defc8e409fd9b9454459b9563ad34dd7da031b6', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 18:53:08', '2020-08-05 18:53:08', '2020-08-05 19:03:07');
INSERT INTO `oauth_access_tokens` VALUES ('9a392e280da84d1f4b5f02999d5ac0f2754e5da00ecc16d85e6a605074d86d8124c868f9bef4561a', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 16:33:31', '2020-08-05 16:33:31', '2020-08-05 16:43:31');
INSERT INTO `oauth_access_tokens` VALUES ('5cef4fa00fb96a2fbef79b9b20d2c09a84192f9562df44f34dd03c10561ed96ca6751dee5e820b65', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 16:33:29', '2020-08-05 16:33:29', '2020-08-05 16:43:29');
INSERT INTO `oauth_access_tokens` VALUES ('fd8fa3174c8a5eb98014e0ce7701059e39e82f2d0b2564b56e2526929d9d682fc2082d4d7d7fb208', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 16:20:44', '2020-08-05 16:20:44', '2020-08-05 16:30:44');
INSERT INTO `oauth_access_tokens` VALUES ('11083515cb7c4bd700406c927b865986af22e2701354ed40ca1d404ea12855a6c1cad001218a3a5c', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 16:20:43', '2020-08-05 16:20:43', '2020-08-05 16:30:43');
INSERT INTO `oauth_access_tokens` VALUES ('0d9918e478394d964fb3953bd9aeedf4754ed88d4cd16aecc332a006c5d53a357aa286cc0a8a4da9', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 16:07:09', '2020-08-05 16:07:09', '2020-08-05 16:17:09');
INSERT INTO `oauth_access_tokens` VALUES ('e9883bc1dd228fea09aa6e9dd63139edeb6220cec8fadfd1231e6d74e7aa09b88754dd5afa19a78a', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 16:07:07', '2020-08-05 16:07:07', '2020-08-05 16:17:07');
INSERT INTO `oauth_access_tokens` VALUES ('a0e096ba1f60f7c3a4ac998f6c52983dd5881a2ee98cd59270576ceefa5996531513ccb99b74d8a5', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 15:45:51', '2020-08-05 15:45:51', '2020-08-05 15:55:51');
INSERT INTO `oauth_access_tokens` VALUES ('7fc994f2b9d865d2be33587f16a8b556ad48535a99c2e45c46515e81d8df14791fae8bcfe4a224e4', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 15:45:50', '2020-08-05 15:45:50', '2020-08-05 15:55:49');
INSERT INTO `oauth_access_tokens` VALUES ('6716a94b93f452650e72b148acbb3747a922ee64de40823d58a788c6bddce2f80c2d2e4a4998f7aa', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 15:27:36', '2020-08-05 15:27:36', '2020-08-05 15:37:36');
INSERT INTO `oauth_access_tokens` VALUES ('13936f0eb4ed192bcc5f0c57e0bbcd4da04b4c7efa61f6510c761e6276423339a48f77b34cf18261', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 15:27:35', '2020-08-05 15:27:35', '2020-08-05 15:37:35');
INSERT INTO `oauth_access_tokens` VALUES ('c3d8d649d891d23e9af95cf44bc1a030dc9a702473a29cabddd9d92d08a56c38245bbea58e4fd7ec', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 14:42:31', '2020-08-05 14:42:31', '2020-08-05 14:52:31');
INSERT INTO `oauth_access_tokens` VALUES ('97c8ac2d80fcb557151db15a24ff5c8f5df463dd0d3850be5049d63e37e42886210fd2988e1bc61e', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 14:42:30', '2020-08-05 14:42:30', '2020-08-05 14:52:29');
INSERT INTO `oauth_access_tokens` VALUES ('fdf24772f0bbd4a84888c207e83c8f38cfdcf2f428a38d49848aa33832a4c7b379b03e33a7bbd611', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 14:27:45', '2020-08-05 14:27:45', '2020-08-05 14:37:45');
INSERT INTO `oauth_access_tokens` VALUES ('bb8feb6f482b0f8fb2c40dfb4cf88a2f86a04a307b88c31f0e8591d6960547d76659c84aac7d8ad0', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 14:27:44', '2020-08-05 14:27:44', '2020-08-05 14:37:44');
INSERT INTO `oauth_access_tokens` VALUES ('e10c5c868f559578bc787f17211c1bf1c8a85edc494dea047d572434d36d23e2e7a3b0df9c0ffbc6', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 14:16:39', '2020-08-05 14:16:39', '2020-08-05 14:26:39');
INSERT INTO `oauth_access_tokens` VALUES ('d8f0aaaa0231c62249f108b72dc3a643335f2ca03c17af8f99f2ad504debf93a7f35cff90b025bdb', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 14:16:38', '2020-08-05 14:16:38', '2020-08-05 14:26:38');
INSERT INTO `oauth_access_tokens` VALUES ('f60518dca120a9c77823a8a3de7f54cb873ae6e37285ee924e677ad35881fa47886985684bb39a53', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 13:57:35', '2020-08-05 13:57:35', '2020-08-05 14:07:35');
INSERT INTO `oauth_access_tokens` VALUES ('7f3a73031b9e8f6cda120973c6dd4a9dc241ed6bb721b94ad5df9973b33e336f4b54d9ee2956a2b2', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 13:57:34', '2020-08-05 13:57:34', '2020-08-05 14:07:34');
INSERT INTO `oauth_access_tokens` VALUES ('47bd685a3c3a358444e6d6be44b281d2b5f118be808e6c610e6eb6ce0d8d281f9b71ab57e8362c1b', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 13:47:03', '2020-08-05 13:47:03', '2020-08-05 13:57:03');
INSERT INTO `oauth_access_tokens` VALUES ('1cad7a3f78e060579adb7613ba2448ed56a9d0a3565f7a8f63270a183ab933d8b6bdfb8bacf8d4cf', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 13:47:02', '2020-08-05 13:47:02', '2020-08-05 13:57:01');
INSERT INTO `oauth_access_tokens` VALUES ('7d9f4e76ebbfe1c90f31224eb2dd0849f9bc724b4f5d0ce826579427c1dc789f5a243cb23f1710f7', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 13:27:47', '2020-08-05 13:27:47', '2020-08-05 13:37:47');
INSERT INTO `oauth_access_tokens` VALUES ('79f6e12711765d18ead2303dbe07f650c3cec9e818259ef1c0688582e4cde016dac1f129132df683', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 13:27:46', '2020-08-05 13:27:46', '2020-08-05 13:37:46');
INSERT INTO `oauth_access_tokens` VALUES ('c32db2129b75cce46508aad1054f185424068f4e85a63fae6215ff85ea9fb244490f9ca74c9e02e6', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 13:17:09', '2020-08-05 13:17:09', '2020-08-05 13:27:09');
INSERT INTO `oauth_access_tokens` VALUES ('bda47084543f77b149676189dca82a077f887e7b6e3f1a16285c9ff8987ccb91d100be30e6a4c1b5', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 13:17:08', '2020-08-05 13:17:08', '2020-08-05 13:27:08');
INSERT INTO `oauth_access_tokens` VALUES ('9298b5479d0bf9e4c51dcc17da158cfb8d10bf7faa296f8c334eaabd54c4d6d3b82f8754a8eb642d', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 13:03:47', '2020-08-05 13:03:47', '2020-08-05 13:13:46');
INSERT INTO `oauth_access_tokens` VALUES ('e04d8f1ea05f001da51d6507d33af06096eeeeba9b2ad3e2581c7c66494a514982e8caa9a7246af8', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 13:02:04', '2020-08-05 13:02:04', '2020-08-05 13:12:04');
INSERT INTO `oauth_access_tokens` VALUES ('6f750ebaf74f3ab286f7dfd2a6572afdd39c77356f9c6546bd990e75956b44d39a70e8a2a567470e', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 13:02:03', '2020-08-05 13:02:03', '2020-08-05 13:12:03');
INSERT INTO `oauth_access_tokens` VALUES ('6d972329a189303da225e5515d4100f4bef4f72284e6403faa893611bf446b807d30cb22a8e89fa0', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 12:48:44', '2020-08-05 12:48:44', '2020-08-05 12:58:44');
INSERT INTO `oauth_access_tokens` VALUES ('b88ea58e41efa25f5d6bb3c866d86ea0f94128ef80ed7eab6246e6125ff28794d9dce360cf4dd2da', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 12:48:43', '2020-08-05 12:48:43', '2020-08-05 12:58:42');
INSERT INTO `oauth_access_tokens` VALUES ('7cfdd516f381bf1cb7b03f44111d13fac29151dfa08f98cb9dab119780ed791bae082b443b420879', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 12:38:18', '2020-08-05 12:38:18', '2020-08-05 12:48:17');
INSERT INTO `oauth_access_tokens` VALUES ('492139f4120da98ded70fb3ef1f9980b0051bdf8d34298c489e08c6c3b64383bb5602f0533ab71b7', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 12:38:20', '2020-08-05 12:38:20', '2020-08-05 12:48:20');
INSERT INTO `oauth_access_tokens` VALUES ('e67e3f331b767da16c98e849f3ba4647f67dec031ca308772b6a49acbc802314a77d4bca497d97ac', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 05:56:27', '2020-08-05 05:56:27', '2020-08-05 06:06:27');
INSERT INTO `oauth_access_tokens` VALUES ('30e41bfa8487f9c74853703b9c6a0028034fd06d85ebc750d6bc1e96c65fb588b5f25dbe96780bf4', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 05:46:25', '2020-08-05 05:46:25', '2020-08-05 05:56:24');
INSERT INTO `oauth_access_tokens` VALUES ('07014803eabd084b77a0745eebe473f2fa4a20b59c4b1188ae26a71f8594492f665dcaf5770ba3e7', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 05:35:41', '2020-08-05 05:35:41', '2020-08-05 05:45:41');
INSERT INTO `oauth_access_tokens` VALUES ('d593ec79b23aa7a5b707abba66d73881a13b4957ef4cad2aae163e8f4af74e75ac23c391b61a231d', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 05:46:22', '2020-08-05 05:46:22', '2020-08-05 05:56:22');
INSERT INTO `oauth_access_tokens` VALUES ('3d5c94758da9d527b27722763983524746111ac68bdc3c12b8a04acd6a78fb91ff87c3e2d4f40eed', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 05:35:40', '2020-08-05 05:35:40', '2020-08-05 05:45:40');
INSERT INTO `oauth_access_tokens` VALUES ('b22c5875706eca16db2a7eb61fa1ce1074c961e46587db15dd751ef29faa9662718bb3b49b8f2f7d', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 05:19:44', '2020-08-05 05:19:44', '2020-08-05 05:29:44');
INSERT INTO `oauth_access_tokens` VALUES ('553d223be465e3e7fddfd201a9d45929b004bb2108fe29e74bcf53d57678d93fc2b91fa95d326a5c', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 05:04:58', '2020-08-05 05:04:58', '2020-08-05 05:14:58');
INSERT INTO `oauth_access_tokens` VALUES ('de95876a81911bcecdb508df9047141ccbf11b74451f94016c4c7534c89b4c79c1633a79ef6a26ca', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 05:19:42', '2020-08-05 05:19:42', '2020-08-05 05:29:42');
INSERT INTO `oauth_access_tokens` VALUES ('6b83c05cc0fbc15e919c6ad736e3305ff62154303cf4817beaf5c36a7464ed4a9a7827c8dec3da3a', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 05:04:56', '2020-08-05 05:04:56', '2020-08-05 05:14:56');
INSERT INTO `oauth_access_tokens` VALUES ('bc087ebaa73c6a8828a474087cdcd80c9138062ae4facc419d3ac0e6fe2fe857f0ed5ec819d4df51', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 04:52:27', '2020-08-05 04:52:27', '2020-08-05 05:02:27');
INSERT INTO `oauth_access_tokens` VALUES ('b7ed266f8e278c192533ebca68becc1e9a585b5499db28f1d7eb30f151d1d2742e0ba9ac89515050', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 04:04:49', '2020-08-05 04:04:49', '2020-08-05 04:14:49');
INSERT INTO `oauth_access_tokens` VALUES ('102e0eb72858cff8827cb86e71b6eccd4eaad47afcdf24c2ce9c5ed70cd0d86e68b09b9499269438', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 04:52:25', '2020-08-05 04:52:25', '2020-08-05 05:02:24');
INSERT INTO `oauth_access_tokens` VALUES ('1d4184e4d14563c9ab71a41c2d64a10859746018b674ed644eb102467d8e0799278cd291de115107', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 04:04:48', '2020-08-05 04:04:48', '2020-08-05 04:14:48');
INSERT INTO `oauth_access_tokens` VALUES ('f5cc248d381a291c44d761758b6b1b4e5af15b44842f1012ce86d78a2e66d873efbe62a0faa6c236', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 03:54:28', '2020-08-05 03:54:28', '2020-08-05 04:04:27');
INSERT INTO `oauth_access_tokens` VALUES ('64385afd0eecb17d0db9e4a3d212666d70d600013224b32fa705b09f0726e643f7ea1d9b439a8aec', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 03:09:09', '2020-08-05 03:09:09', '2020-08-05 03:19:09');
INSERT INTO `oauth_access_tokens` VALUES ('33445a5aff06f323559a352d8c548df12bf9035e579f887d86cb8dd436ebace257c12268a70b0cb6', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 03:20:05', '2020-08-05 03:20:05', '2020-08-05 03:30:04');
INSERT INTO `oauth_access_tokens` VALUES ('cda203d7968f4d9365cc0daf7a8ee389f9bf8a54975169230161d2a7447156294815b82702b19287', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 07:49:07', '2020-08-05 07:49:07', '2020-08-05 07:59:07');
INSERT INTO `oauth_access_tokens` VALUES ('118c954682e8b1e29c8eaeb98447f719ab4d8df87734fa989877ff87a93f6e3fd84645f77367b283', 31, 9, NULL, '[\"*\"]', 0, '2020-08-05 07:49:06', '2020-08-05 07:49:06', '2020-08-05 07:59:06');
INSERT INTO `oauth_access_tokens` VALUES ('0077d6465ef02eb96c7a3e940a27bd2579a2fbb7463e5610225b5aeedf4f8a95aee2586401ad22e9', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 05:58:17', '2020-08-05 05:58:17', '2020-08-05 06:08:16');
INSERT INTO `oauth_access_tokens` VALUES ('7b1ec022a1d42cdfae3ca92f2ef7f8cf16f6f306eb9064cb97bcae01dc0517786d3617565ebb7665', 31, 9, NULL, '[\"*\"]', 1, '2020-08-05 05:59:27', '2020-08-05 05:59:27', '2020-08-05 06:09:27');
INSERT INTO `oauth_access_tokens` VALUES ('7c2c798d85fa02102a35dd16d115011f681b24b4ee479143332de66bf08a687171a7c9e065060a1c', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 03:21:43', '2020-08-05 03:21:43', '2020-08-05 03:31:43');
INSERT INTO `oauth_access_tokens` VALUES ('8914a336ce577f3ec6333512846dbee37d3dea2cd8f2bbf240d256e12defaded7ab2edbf760e5571', 30, 9, NULL, '[\"*\"]', 1, '2020-08-05 03:20:46', '2020-08-05 03:20:46', '2020-08-05 03:30:46');
INSERT INTO `oauth_access_tokens` VALUES ('e6f5982b84ab8c66d3504e4fca4f6bfa3be0f819cdc9c9c70ef03e409f2cc4d473d71f9d9d62281f', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 03:14:00', '2020-08-05 03:14:00', '2020-08-05 03:24:00');
INSERT INTO `oauth_access_tokens` VALUES ('5a1c271380ac75ccb1b829fa84ddb51f5a3d0cd501603539f3a5f753c6dcc9887d3c1186e8b6f9d6', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 03:13:11', '2020-08-05 03:13:11', '2020-08-05 03:23:11');
INSERT INTO `oauth_access_tokens` VALUES ('cb27bf3dddaa86cdfa8488faeb18aba44099cecdb0b10abff8e9ddcb0374125d4cfeb3ce2b41b677', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 03:12:22', '2020-08-05 03:12:22', '2020-08-05 03:22:22');
INSERT INTO `oauth_access_tokens` VALUES ('856870fd377afc4b82695ae62eeb12e72492ef2a496cb2be3c181f06ada1d07349b9f4a5ecfe9aa8', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 03:12:09', '2020-08-05 03:12:09', '2020-08-05 03:22:09');
INSERT INTO `oauth_access_tokens` VALUES ('323bf0643eef37b7e7bf181faea8f77b61cf5cbe9ad378a1182f98bf3d49c2b43d96df9aead2e12b', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 02:59:21', '2020-08-05 02:59:21', '2020-08-05 03:09:21');
INSERT INTO `oauth_access_tokens` VALUES ('10a8a93ef64b159404278d64746ac6035d5f54d01f38aac01ce7e8c0f210a122ceee6e20210e5779', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 03:11:58', '2020-08-05 03:11:58', '2020-08-05 03:21:58');
INSERT INTO `oauth_access_tokens` VALUES ('f4a1dbbeaf4e648f6c278fa31c922c12e876f0d49f754c29df17ee364e5db8558e7ccb50cb60e1e9', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 02:19:48', '2020-08-05 02:19:48', '2020-08-05 02:29:48');
INSERT INTO `oauth_access_tokens` VALUES ('d458451333e3e138372d2929d6d8f51225026b5032369ee6c954d72bb24b5f6593eb764cea2331f6', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 02:12:54', '2020-08-05 02:12:54', '2020-08-05 02:22:54');
INSERT INTO `oauth_access_tokens` VALUES ('e4169981fc63608477965e5703a624b31c9b198a328217b88ec00977a37cb19fb54032b9ec6ec3ce', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 02:10:37', '2020-08-05 02:10:37', '2020-08-05 02:20:37');
INSERT INTO `oauth_access_tokens` VALUES ('d68956366bf4b8459bbc027f542bd1b89852b19b47d78584180283a13f711689c01a3cd7a527c554', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 02:11:21', '2020-08-05 02:11:21', '2020-08-05 02:21:21');
INSERT INTO `oauth_access_tokens` VALUES ('9f7ad33b5f8a58c8888788ed410a245e3748380eafaaf2ed8cf78672a6ddd718d77ac8ea925156b8', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 02:07:14', '2020-08-05 02:07:14', '2020-08-05 02:17:14');
INSERT INTO `oauth_access_tokens` VALUES ('26648433172e0a067cb1e61e3fe004ea497b9d935630cbbf25ace8bd4d4fa2f1dd17de62292f4fcf', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 02:00:38', '2020-08-05 02:00:38', '2020-08-05 02:10:38');
INSERT INTO `oauth_access_tokens` VALUES ('6e05c67ddea69121d44ca3a606abe2eddda9a0ba02b4e3a64146c01121aa1c143873656a9a1f24d1', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 01:59:50', '2020-08-05 01:59:50', '2020-08-05 02:09:50');
INSERT INTO `oauth_access_tokens` VALUES ('605896cf9489b30b62dcc784ff5051dcaf8359ca36be4ebb7619f019f7269bb358ccc7385e5fd114', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 01:59:04', '2020-08-05 01:59:04', '2020-08-05 02:09:04');
INSERT INTO `oauth_access_tokens` VALUES ('db0e381d8dffe11d26a289403208f9a651609efb3167abd56cb347ebf1c99de291579dbe86e39502', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 01:59:15', '2020-08-05 01:59:15', '2020-08-05 02:09:15');
INSERT INTO `oauth_access_tokens` VALUES ('cda4a553e7c77a4ce06dfe5c6895899973ca2f26a5fe155e88a7c66158abadd294bade4bd965d5eb', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 01:52:44', '2020-08-05 01:52:44', '2020-08-05 02:02:44');
INSERT INTO `oauth_access_tokens` VALUES ('26e67b1e1f5819a81a6cfdfed331bb59023c5e90378b5f671a4aed786be415f392b6aad11b39d7aa', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 01:51:53', '2020-08-05 01:51:53', '2020-08-05 02:01:53');
INSERT INTO `oauth_access_tokens` VALUES ('290e19c940bf0f1d8613efecb4d44fa9c74d48f6fc62f035d40815a3620be197acca378447d5f47c', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 01:52:02', '2020-08-05 01:52:02', '2020-08-05 02:02:02');
INSERT INTO `oauth_access_tokens` VALUES ('9ce9f9e2e57c3a82d23218e29e9209ebcdedf37ca5e55c5f1a83d5fcabe7efe491ea965df3782baf', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 01:50:24', '2020-08-05 01:50:24', '2020-08-05 02:00:24');
INSERT INTO `oauth_access_tokens` VALUES ('cbf1bff1ed940f0b3de16ea3a7c78ac2e923a0a0787a76ba2dd7db2789a8688e53a9d3f41d5a0aac', 10, 9, NULL, '[\"*\"]', 1, '2020-08-05 01:43:09', '2020-08-05 01:43:09', '2020-08-05 01:53:09');
INSERT INTO `oauth_access_tokens` VALUES ('2af78a3ae2e2ae869cc506cbaf05b0dc9b8dd55cb0e71c2023efd80c04cd2ee0547d28c70c30ea3a', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 02:03:33', '2020-08-11 02:03:33', '2020-08-11 02:13:33');
INSERT INTO `oauth_access_tokens` VALUES ('e1abf8edd3e955e0bbfc7db163231ceb8a3d1918ad573fa67601b001d94862aed2ed7ce0dfcfc045', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 02:32:49', '2020-08-11 02:32:49', '2020-08-11 02:42:49');
INSERT INTO `oauth_access_tokens` VALUES ('41d059543d1ca004ea1ad5f72b72d6b6a469b1fee23e04141f3c4711d70c38d042d5f91e17766b12', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 02:43:14', '2020-08-11 02:43:14', '2020-08-11 02:53:14');
INSERT INTO `oauth_access_tokens` VALUES ('eb91e90053abb15aee8420fe37768b44abf46a69cfa5821a5527d2150a0a0a8a29ca1bce608a76ab', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 02:54:36', '2020-08-11 02:54:36', '2020-08-11 03:04:36');
INSERT INTO `oauth_access_tokens` VALUES ('785bebc61cf4ff1067e0e427976238e3449fe1a53c262066a287d01d7bc193fa0c0502e411fd76d3', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 03:05:29', '2020-08-11 03:05:29', '2020-08-11 03:15:29');
INSERT INTO `oauth_access_tokens` VALUES ('b3dae9679ed4ed56996ee98f83691c8d5db1f2e66ee918c42af696343a794d5fc8beb28b616b1d6f', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 03:17:41', '2020-08-11 03:17:41', '2020-08-11 03:27:41');
INSERT INTO `oauth_access_tokens` VALUES ('f1630dafc837e5cfca8bd62b1db8e3a43e7987a5eaeedab57fba0d4c9bf11b258d789702facff06c', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 03:28:29', '2020-08-11 03:28:29', '2020-08-11 03:38:29');
INSERT INTO `oauth_access_tokens` VALUES ('388330fd1e5587bae42370d69c7071569f1ff96ca5b8556cf77ca839babd6ef3c131ce444cdaf92a', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 03:42:31', '2020-08-11 03:42:31', '2020-08-11 03:52:31');
INSERT INTO `oauth_access_tokens` VALUES ('86ad75322eb954e8a3911d915e3bb3f2ec25f09ac3ddbaddc2317ddb269e8128c35a2d1fbeffbb94', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 06:25:55', '2020-08-11 06:25:55', '2020-08-11 06:35:55');
INSERT INTO `oauth_access_tokens` VALUES ('77123cb3cc17312f14c0475c7389a2542db1f7db4e9b5bfa8ec3b59f9906f65759b2c9209afc7004', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 06:56:51', '2020-08-11 06:56:51', '2020-08-11 07:06:51');
INSERT INTO `oauth_access_tokens` VALUES ('85316cde3527a77e9b81bf52cfad835574cff4d21d1dc42040323c9626a49d4013564f37fbe4c673', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 12:06:06', '2020-08-11 12:06:06', '2020-08-11 12:16:06');
INSERT INTO `oauth_access_tokens` VALUES ('00b7063aefcf62858b4413ccb384434b83736331dfbf40d46b1b676c2c9cdab9e7feb6020511ba93', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 12:41:04', '2020-08-11 12:41:04', '2020-08-11 12:51:04');
INSERT INTO `oauth_access_tokens` VALUES ('9dabb19298e761b31c993e3e7b674b8d2204f36fb05dcf73687388056e97b3a916df6b6494f4e394', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 12:52:00', '2020-08-11 12:52:00', '2020-08-11 13:02:00');
INSERT INTO `oauth_access_tokens` VALUES ('e10292a99ebc01f1643e7da453c4416b922f70c18b26d642dd60be40cb0fe77c37924100eedfb0df', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 13:24:45', '2020-08-11 13:24:45', '2020-08-11 13:34:45');
INSERT INTO `oauth_access_tokens` VALUES ('77ca899e82da4b797c069c7fa7cac604313014a83ba47356cd0fe6f773b6889664bcd2d9f10114f1', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 13:35:46', '2020-08-11 13:35:46', '2020-08-11 13:45:46');
INSERT INTO `oauth_access_tokens` VALUES ('c52470559cf459dd9d0a5d5151f95e22590539db6dd5dd16c20167aa2b0871cd76d4df0c6a25743e', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 13:47:04', '2020-08-11 13:47:04', '2020-08-11 13:57:04');
INSERT INTO `oauth_access_tokens` VALUES ('3aa94ea0b5c3ebf8170bc019cb6bfdc67427cdc289c672f53fa8d2198b4f3b155d025013778009cf', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 13:57:49', '2020-08-11 13:57:49', '2020-08-11 14:07:49');
INSERT INTO `oauth_access_tokens` VALUES ('2a26d24119b529012a5c8d8880324ec769be6c61bbf26cc91f369935bfc112a9a345cf8a490093d9', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 17:10:31', '2020-08-11 17:10:31', '2020-08-11 17:20:31');
INSERT INTO `oauth_access_tokens` VALUES ('2c99bbedaaed9d7e18d6827c50bee9614e09239ec4e80105d72176848e1c9ad3e53789ba6833a5cb', 10, 9, NULL, '[\"*\"]', 1, '2020-08-11 22:14:47', '2020-08-11 22:14:47', '2020-08-11 22:24:47');
INSERT INTO `oauth_access_tokens` VALUES ('2666c9c903dc846a121b5cc0f81436252a41dddaf817eda556e39bce0fe7f6e3d5de172608830891', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 17:51:54', '2020-08-12 17:51:54', '2020-08-12 18:01:54');
INSERT INTO `oauth_access_tokens` VALUES ('cdaa7a40a1441a4e16bbc2a8faf7a34277474756e3859ef20c2412f9d277d6b9118dcd1694fe5a79', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 18:15:39', '2020-08-12 18:15:39', '2020-08-12 18:25:39');
INSERT INTO `oauth_access_tokens` VALUES ('0888b8f64ec4db8404b1f426fb8044d02f497fb5dd67d3350c36366ff08657756fb22dc4dc764969', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 18:28:35', '2020-08-12 18:28:35', '2020-08-12 18:38:35');
INSERT INTO `oauth_access_tokens` VALUES ('c028f6514cf0596daaf1c2889c666c06ae94e36841391c163d872afe7914f32336398732b27e558b', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 19:32:33', '2020-08-12 19:32:33', '2020-08-12 19:42:33');
INSERT INTO `oauth_access_tokens` VALUES ('c5fde31b8960c520e7bb544a575b96bed7f8dbd190ee17c7a48ca374ad343decb398f1c99b220dc3', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 19:35:40', '2020-08-12 19:35:40', '2020-08-12 19:45:40');
INSERT INTO `oauth_access_tokens` VALUES ('f57a4427d8efbcbceaabd20d443608677894ea0482c65d4723b1a277fa5f59d1c05296de21cfd16b', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 19:39:50', '2020-08-12 19:39:50', '2020-08-12 19:49:50');
INSERT INTO `oauth_access_tokens` VALUES ('a141b504348b1afebb97809c3fb85ae6f7dd5ac18f5ea6a84996d6bf63f4dcb59250cc9fd3ffe925', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 19:41:06', '2020-08-12 19:41:06', '2020-08-12 19:51:06');
INSERT INTO `oauth_access_tokens` VALUES ('7479a26ceb91bec02f0035327da7c15641f5ee9c7693b03819280d2729aac039fad77caa8238f76d', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 19:50:14', '2020-08-12 19:50:14', '2020-08-12 20:00:14');
INSERT INTO `oauth_access_tokens` VALUES ('9d7ea11c96937ea814a60dbdcd60b8ab0015ea158206b7dc4ab192fefc42803b59322bab71746d87', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 20:06:08', '2020-08-12 20:06:08', '2020-08-12 20:16:08');
INSERT INTO `oauth_access_tokens` VALUES ('5adb8a99501dea187e2442d6cd2b1d459bc9c93ff4fceda63e5693842457fb96c6af28182d40fb55', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 20:22:47', '2020-08-12 20:22:47', '2020-08-12 20:32:47');
INSERT INTO `oauth_access_tokens` VALUES ('8b53a53677c85bfb2f91782aafeb2b84004a546d43cb894233a0a52b2799fede25949d7f82371ba9', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 20:32:50', '2020-08-12 20:32:50', '2020-08-12 20:42:50');
INSERT INTO `oauth_access_tokens` VALUES ('2b71cd004cc5bf18b1c535061b49b1bbf98897f22a99f44b7d70b95fd5f878f6251ccc0e83384258', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 20:45:59', '2020-08-12 20:45:59', '2020-08-12 20:55:59');
INSERT INTO `oauth_access_tokens` VALUES ('0ce7b560e003e24dbe0b3ef63b4a31c17f92e176a04ee95d87f58bd1a94272579dbda4e2ac9956e8', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 20:57:01', '2020-08-12 20:57:01', '2020-08-12 21:07:01');
INSERT INTO `oauth_access_tokens` VALUES ('e8dca6b8dee0acfec2c42621351b7cd3c011db9f846805fd83c88949b595037484402b927fefa540', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 21:07:37', '2020-08-12 21:07:37', '2020-08-12 21:17:37');
INSERT INTO `oauth_access_tokens` VALUES ('7094f52ee599bbfdc63160a72026030f36242621bd9780f11ac51406bac15511f2faeb990bc7eccf', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 21:57:54', '2020-08-12 21:57:54', '2020-08-12 22:07:54');
INSERT INTO `oauth_access_tokens` VALUES ('d7c8a78980c5bf699157438d472c1d8d25ac4f9d9ce1cb9cc39f3698de58fbab12aaf0cd4ed9d84e', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 22:11:31', '2020-08-12 22:11:31', '2020-08-12 22:21:31');
INSERT INTO `oauth_access_tokens` VALUES ('a508ecd23599972ca7fca7f8b3aa3d8364ec0a8b3fa42cceab919da75207c5c3d86107f8087d3aa1', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 22:44:33', '2020-08-12 22:44:33', '2020-08-12 22:54:33');
INSERT INTO `oauth_access_tokens` VALUES ('93b5ff7f894b1308d9c84149862ece074f41079f6ccb757bfe1eae8fa9dec71cc5efa74b91ffa49b', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 22:55:49', '2020-08-12 22:55:49', '2020-08-12 23:05:49');
INSERT INTO `oauth_access_tokens` VALUES ('56518561359ca500b692cd3fb7ddaa7fec6b353c9a85d45172fc2232fcefa478714e5320eff6d872', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 23:29:10', '2020-08-12 23:29:10', '2020-08-12 23:39:09');
INSERT INTO `oauth_access_tokens` VALUES ('e76ea443db2fdf0136fd7916ce54819523d5bd019efaed63c18531a3fe41e232b34297d3c5cbc680', 10, 9, NULL, '[\"*\"]', 1, '2020-08-12 23:57:46', '2020-08-12 23:57:46', '2020-08-13 00:07:46');
INSERT INTO `oauth_access_tokens` VALUES ('e50206e5d9139db70aa03ebc54d07c77da962dae9437636155321a5d5634c7bce3a0d4c46fb54359', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 00:07:55', '2020-08-13 00:07:55', '2020-08-13 00:17:55');
INSERT INTO `oauth_access_tokens` VALUES ('f6cac6be187233bc3ec825027008584d257eb2bb5cf194e510c8c5a3d84d2349f2ce59c2219023ce', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 00:32:09', '2020-08-13 00:32:09', '2020-08-13 00:42:09');
INSERT INTO `oauth_access_tokens` VALUES ('b32ce8934ca4d925ee5b398d8155a0d507bdaee4a3d73fe4b0aaac08edf32c9900c932057ca2afbe', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 00:42:20', '2020-08-13 00:42:20', '2020-08-13 00:52:20');
INSERT INTO `oauth_access_tokens` VALUES ('f7dcaa40faa58f5f4b21edc4a2d1a0dbfe584704d54bac86e05670aee2b7972379b42f71edf97a50', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 00:53:14', '2020-08-13 00:53:14', '2020-08-13 01:03:14');
INSERT INTO `oauth_access_tokens` VALUES ('32a52994cbbf5a59f761b0d024cdf974bfe00acfd486d4e379295601a4cef609a572ae8ba19f3a5d', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 01:03:35', '2020-08-13 01:03:35', '2020-08-13 01:13:35');
INSERT INTO `oauth_access_tokens` VALUES ('195467384a4e497dd93edf277b04fa67c485fc1823b8c6ce62b1a8e15f185ce9dd23622d020c794b', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 01:17:27', '2020-08-13 01:17:27', '2020-08-13 01:27:27');
INSERT INTO `oauth_access_tokens` VALUES ('636513923d609b4187c0dc43e9e65a0cae1c9183b640ecbc64cff908ef2956cc9d62008cb9c5419b', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 01:27:30', '2020-08-13 01:27:30', '2020-08-13 01:37:30');
INSERT INTO `oauth_access_tokens` VALUES ('235295036cc8cf345d3c360dfaa09c443d55d7c136e4b0589d77f6eb5e97a40ac30cc2044d4a4134', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 01:46:01', '2020-08-13 01:46:01', '2020-08-13 01:56:01');
INSERT INTO `oauth_access_tokens` VALUES ('f7e29920e60c212190c7460169c5dd607d2004028433c4a548730a2534200ce92c0d0f0d70e366fa', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 01:58:43', '2020-08-13 01:58:43', '2020-08-13 02:08:43');
INSERT INTO `oauth_access_tokens` VALUES ('efd4dc5861b7faec0a6dc02cd5161d0fb7f885925181b915b230b1230e2583f955e271885ddc2225', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 02:18:20', '2020-08-13 02:18:20', '2020-08-13 02:28:20');
INSERT INTO `oauth_access_tokens` VALUES ('34ec153651c4264188c24048e5600af8be90ac8029f51945eadd0e954c05f69e4a5abc910617dc86', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 02:29:17', '2020-08-13 02:29:17', '2020-08-13 02:39:17');
INSERT INTO `oauth_access_tokens` VALUES ('4df162d25bf26afe571696af2e770f3de2ccb460d8e1b230c10dbb4003ac403ad4e85d739906182d', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 02:42:35', '2020-08-13 02:42:35', '2020-08-13 02:52:35');
INSERT INTO `oauth_access_tokens` VALUES ('9e0eca3569ec906a9c10fadd11efe10dc3c150a0511ce564746046decf066cf3582b4e8444d515dd', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 02:42:37', '2020-08-13 02:42:37', '2020-08-13 02:52:37');
INSERT INTO `oauth_access_tokens` VALUES ('59dfdb1b8a4b5d7a210739a31b6d0ae9f7afc02f85f53855b972f65190f5b9a1b69bb0a0f2880993', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 02:53:30', '2020-08-13 02:53:30', '2020-08-13 03:03:30');
INSERT INTO `oauth_access_tokens` VALUES ('9442e252d66bda8f6738f525b6c542d969447b07d6949dda523040c97e2c21ebb6b3cf1f70fe32c6', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 03:07:50', '2020-08-13 03:07:50', '2020-08-13 03:17:50');
INSERT INTO `oauth_access_tokens` VALUES ('cc5301c39101546381b023070367039d4480b249a19f216391491559e99595351e8f780a928f99c4', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 03:08:06', '2020-08-13 03:08:06', '2020-08-13 03:18:06');
INSERT INTO `oauth_access_tokens` VALUES ('33b37517932ebc2c24d196f4a5af4f4d8d55ccb2bf356b55ce098a00f88598b2ef3cd66ddb37ed64', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 03:08:16', '2020-08-13 03:08:16', '2020-08-13 03:18:16');
INSERT INTO `oauth_access_tokens` VALUES ('bc2e36b9406f0c97dc047be4c4cbc1224f82c71186753a7a22dddb973abfe29874e52f746cf1384e', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 03:13:19', '2020-08-13 03:13:19', '2020-08-13 03:23:19');
INSERT INTO `oauth_access_tokens` VALUES ('522f7e1ee6e1b98a9766802a72d893a8c958cd96ee024605858fc2e0729470535a24c0297dc0dc9a', 10, 6, NULL, '[]', 1, '2020-08-13 03:17:51', '2020-08-13 03:17:51', '2020-08-13 03:27:51');
INSERT INTO `oauth_access_tokens` VALUES ('849c2d1c00aa47084ed60bcdbf84b70c03761aa9c0e9a82130149cdbdef70ef5808c489780ef162a', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 03:20:25', '2020-08-13 03:20:25', '2020-08-13 03:30:25');
INSERT INTO `oauth_access_tokens` VALUES ('5d8a64dcc9fb988913a2970e645826b1e0964816798d219b1eb2fa45766b6b7028dec67358ab83a4', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 03:29:55', '2020-08-13 03:29:55', '2020-08-13 03:39:55');
INSERT INTO `oauth_access_tokens` VALUES ('27915c81e64ae56641dd3c17b8ba53e624f1a7120b42fa87851eaf944ab2a34962dbc5f6f5101620', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 03:36:40', '2020-08-13 03:36:40', '2020-08-13 03:46:40');
INSERT INTO `oauth_access_tokens` VALUES ('9f71da9e82cc431c60568fb4312742a38e0bdb8f35bfb6f7c2389c913770183ef05033ca4c03d09f', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 03:42:44', '2020-08-13 03:42:44', '2020-08-13 03:52:44');
INSERT INTO `oauth_access_tokens` VALUES ('d6b45c405b891c291aba448ce73d2b7f1cfbd254e4b20e0fd2a5261917087106c0c11914977bbcce', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 03:47:28', '2020-08-13 03:47:28', '2020-08-13 03:57:28');
INSERT INTO `oauth_access_tokens` VALUES ('fec998ae3cb381fa1bff098add49057090312a9f95aac9d68ee5c0b8e90a1f62b171fb3541f8e232', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 04:00:03', '2020-08-13 04:00:03', '2020-08-13 04:10:03');
INSERT INTO `oauth_access_tokens` VALUES ('52a4c67b5f71a242c6f540b20a2e8203dd985cc51d5969af148fbfb415d8a9fe85b30ebb00e5b0bb', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 04:48:55', '2020-08-13 04:48:55', '2020-08-13 04:58:55');
INSERT INTO `oauth_access_tokens` VALUES ('b60cf2b91d5133b0d17ca97938797473e094918a266b43dff73e25eb7b79df2c7b75a8df662861fe', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 04:49:26', '2020-08-13 04:49:26', '2020-08-13 04:59:26');
INSERT INTO `oauth_access_tokens` VALUES ('f27164be3fbef457f80b1e54e42b3c67366f553f9facd44b7cae9a72dbdd8d62dc77ade6abf4c11b', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 05:02:06', '2020-08-13 05:02:06', '2020-08-13 05:12:06');
INSERT INTO `oauth_access_tokens` VALUES ('4cbb005a24945c498b31977b3021a23220dd3c50019c3ea2e057e24936d8815f606aa5cb5bed8cfb', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 05:12:49', '2020-08-13 05:12:49', '2020-08-13 05:22:48');
INSERT INTO `oauth_access_tokens` VALUES ('49fcce26beb77b127145faa5090689eb54f5b1113ccfde36ce56a5caccff7601bdfac2bbd5896614', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 05:19:51', '2020-08-13 05:19:51', '2020-08-13 05:29:51');
INSERT INTO `oauth_access_tokens` VALUES ('5283a39b654013e9264f2053b18c6e27dd3327212dc5e6a839b9ae644d2ba3c032ec5ace046a55f5', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 05:24:06', '2020-08-13 05:24:06', '2020-08-13 05:34:06');
INSERT INTO `oauth_access_tokens` VALUES ('d3e842570b6f2045315fc3d4a2d962f49c4802109598937ddcc5f1d839688b2d07e2d6737d64ce8c', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 05:34:46', '2020-08-13 05:34:46', '2020-08-13 05:44:46');
INSERT INTO `oauth_access_tokens` VALUES ('6e7a7dece5068b7e5a6bf7a1be230235077346cc313b78c718e3b9a28b152c6f4b817025c84431e7', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 05:45:20', '2020-08-13 05:45:20', '2020-08-13 05:55:20');
INSERT INTO `oauth_access_tokens` VALUES ('9eccc46e308e7364d7a81b51a37f2920421bfff6364c3c98df8932f568e94ef02b723621acd7d5da', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 06:00:05', '2020-08-13 06:00:05', '2020-08-13 06:10:05');
INSERT INTO `oauth_access_tokens` VALUES ('beaa6930cc2271eee0837a5e6c91f5ced0f861c7a15291cdbd3c88eb833c729c59a76a5f6c6668b5', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 06:11:31', '2020-08-13 06:11:31', '2020-08-13 06:21:31');
INSERT INTO `oauth_access_tokens` VALUES ('88d3d56cf2f5de46e2fe3f52a576eba17179418034943f28a66ae69329d090e577d4b7a15ba9a9ea', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 06:25:45', '2020-08-13 06:25:45', '2020-08-13 06:35:45');
INSERT INTO `oauth_access_tokens` VALUES ('8793b495064c720b3a0110bd02d8291df8c348af247f37de67735b6e82246f1839842447a8c9dd05', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 06:36:57', '2020-08-13 06:36:57', '2020-08-13 06:46:57');
INSERT INTO `oauth_access_tokens` VALUES ('8eac0701c3be1e060cb743598f8a1e67b61d98a8cde0e7179b6bf8b05e4ae69bd829ac9134cb930a', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 06:49:13', '2020-08-13 06:49:13', '2020-08-13 06:59:13');
INSERT INTO `oauth_access_tokens` VALUES ('5d226a6313f02daaed70e0848cf5caaa1a313122e5f73ffcb34e70a80eaa20e51b8e68b67e5e9e96', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 07:03:21', '2020-08-13 07:03:21', '2020-08-13 07:13:20');
INSERT INTO `oauth_access_tokens` VALUES ('2a7aa79cc1319bdc971f6e6b8592a665cddeddcd86eb1b2bacb976496dc1e527f0992f7181b01ca7', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 07:13:50', '2020-08-13 07:13:50', '2020-08-13 07:23:50');
INSERT INTO `oauth_access_tokens` VALUES ('9645c5f93a5d3f256fe54b79c547f918b027cf11945bced73381163e8145c18c9f19ab076e7c1ef0', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 07:24:11', '2020-08-13 07:24:11', '2020-08-13 07:34:11');
INSERT INTO `oauth_access_tokens` VALUES ('c34757a40bf2f77224d1bb91b68aa971a6545040ed3639762a3f49a2462cb7cb50d7443e07bd9d40', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 14:20:37', '2020-08-13 14:20:37', '2020-08-13 14:30:37');
INSERT INTO `oauth_access_tokens` VALUES ('75543998773c313690d47e31c0cdf182f905c3581e614439a814885c542fcbd944159d8b58fa5639', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 14:53:53', '2020-08-13 14:53:53', '2020-08-13 15:03:53');
INSERT INTO `oauth_access_tokens` VALUES ('43ed61842ab1cced5cd59ac0fcdcc2a317d683ff912cceec2380eb8c0a2ace9cf6565605d98eec1e', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 15:04:50', '2020-08-13 15:04:50', '2020-08-13 15:14:50');
INSERT INTO `oauth_access_tokens` VALUES ('db4bb0899833e065bc359d6ad2510c878384ff4227aa26a5f297af68d820ecf61c605f7fadca6c62', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 15:15:24', '2020-08-13 15:15:24', '2020-08-13 15:25:24');
INSERT INTO `oauth_access_tokens` VALUES ('0251f2510d72c5ebebfb154db86c5839fa968a3abed89beacd198a66c90ec9cce950b2a44a7b35b9', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 15:26:08', '2020-08-13 15:26:08', '2020-08-13 15:36:08');
INSERT INTO `oauth_access_tokens` VALUES ('5003637bc9475ad4c3676645c50ae90fd0ffa6f8ef0f113861be8b04985b0fef2cffa2590d2eec33', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 15:39:56', '2020-08-13 15:39:56', '2020-08-13 15:49:56');
INSERT INTO `oauth_access_tokens` VALUES ('c5bfeba0c1937e670949ff7c72877d491ebd2d1972e8e356039a957287d55259d95b6655aaa4abf4', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 15:54:32', '2020-08-13 15:54:32', '2020-08-13 16:04:32');
INSERT INTO `oauth_access_tokens` VALUES ('d735b35fdcf9ec8b48423123938484252a8edd42c89b866b5c6ea337bd0cb76940eb0a43fdcdf67c', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 16:05:39', '2020-08-13 16:05:39', '2020-08-13 16:15:39');
INSERT INTO `oauth_access_tokens` VALUES ('53ebad1314114d86a23f2e84b992e1e70a554d51e77e71e58091b8fa1d3b942a77eaeb4e2790122a', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 16:25:02', '2020-08-13 16:25:02', '2020-08-13 16:35:02');
INSERT INTO `oauth_access_tokens` VALUES ('0e35a2f630117f6ff8c059daf6e9c32def38633b3360baa38d7786368c735ea74a5b563e3f36962f', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 16:35:14', '2020-08-13 16:35:14', '2020-08-13 16:45:14');
INSERT INTO `oauth_access_tokens` VALUES ('d07bf7acd455434f1e70f051b8fe5848385403955193ae23bef907f62ce898db5ec3269698c86dd4', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 17:35:01', '2020-08-13 17:35:01', '2020-08-13 17:45:00');
INSERT INTO `oauth_access_tokens` VALUES ('11dad67af60839b3026fd783be7002f57838bd42b3cc12c2f2d0f6aec5e3dc42f11a4f8521a2e7f7', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 22:26:26', '2020-08-13 22:26:26', '2020-08-13 22:36:26');
INSERT INTO `oauth_access_tokens` VALUES ('c4414df26be8169a6e36be68d667849333f54028c963818518e023a5ff471acfdf9d4cf63d6fd739', 10, 9, NULL, '[\"*\"]', 1, '2020-08-13 22:49:55', '2020-08-13 22:49:55', '2020-08-13 22:59:55');
INSERT INTO `oauth_access_tokens` VALUES ('28b0c080c9d130498ce3877c8e2db7a22571049ec2f98128830cc916314a2f57d72d7bc9c9933d22', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 01:45:43', '2020-08-14 01:45:43', '2020-08-14 01:55:43');
INSERT INTO `oauth_access_tokens` VALUES ('1e54edb9531f4409da1194830d953a067aae9c13b41fd9da1d09550084875df20c31bf8e9ce67a96', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 02:11:12', '2020-08-14 02:11:12', '2020-08-14 02:21:11');
INSERT INTO `oauth_access_tokens` VALUES ('a4eba67ea85015a36e002375db58c664ed601639b6970800d9dd633ec330d5118af40b615e70795c', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 02:11:57', '2020-08-14 02:11:57', '2020-08-14 02:21:57');
INSERT INTO `oauth_access_tokens` VALUES ('5274febd4381e7c7e32caf12b2d5923c56f6516190cf9d2160c5e0e967e5bd3cf905edaa889b8da7', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 02:26:46', '2020-08-14 02:26:46', '2020-08-14 02:36:46');
INSERT INTO `oauth_access_tokens` VALUES ('2d251a67f532e651ea684b1cae268464168eb5699b11925c4e78d4133a8a600feaf9080cfe17980f', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 02:37:36', '2020-08-14 02:37:36', '2020-08-14 02:47:36');
INSERT INTO `oauth_access_tokens` VALUES ('2171c5e06e2d9f678913b1bab9ac3b8bfa5a87f59ef6d3a0962c312c0288638eced7604be7eebbc4', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 02:47:49', '2020-08-14 02:47:49', '2020-08-14 02:57:49');
INSERT INTO `oauth_access_tokens` VALUES ('4943945f1c9a777d160427ba4127d630baf081007237aec80d952aef24c5a4c51703fc21c9d4a2e6', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 03:13:42', '2020-08-14 03:13:42', '2020-08-14 03:23:42');
INSERT INTO `oauth_access_tokens` VALUES ('d5fc5a630d2ff3ad63d22bdb06f61cedf2272e12b84e29fc83f6bdc27452fd69c81be4137ee57fec', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 03:24:47', '2020-08-14 03:24:47', '2020-08-14 03:34:47');
INSERT INTO `oauth_access_tokens` VALUES ('0034221527512d180eef4c4309174b26ac84e7a369fffa1cc9bb6ea27646636a9b1bac30eaa80c6a', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 03:34:52', '2020-08-14 03:34:52', '2020-08-14 03:44:52');
INSERT INTO `oauth_access_tokens` VALUES ('da72ee9cf74d7ff746a6b2450d3b0b806aabb65a37e4234f84ac3c9d05fb1d195b3eee4c47f8c85c', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 03:58:19', '2020-08-14 03:58:19', '2020-08-14 04:08:19');
INSERT INTO `oauth_access_tokens` VALUES ('10755ce91290f2916efe6e56d486b4b4d80c99014afbd91e677ac56874ce953d07eb22ed18d5df7f', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 04:00:11', '2020-08-14 04:00:11', '2020-08-14 04:10:11');
INSERT INTO `oauth_access_tokens` VALUES ('4146d80d15bbdb6838a9ddcf720e070cad154ae5013f186a08efd9801b87daffefdb0397ca432976', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 04:26:41', '2020-08-14 04:26:41', '2020-08-14 04:36:41');
INSERT INTO `oauth_access_tokens` VALUES ('7706419f98a76aa8228739c738cdec535a90e62542c53a8f5f0cc59a98ca51d443ffe336ea9c6d3f', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 04:39:50', '2020-08-14 04:39:50', '2020-08-14 04:49:49');
INSERT INTO `oauth_access_tokens` VALUES ('1c7465bd4358d1825620385c211570a22190f755af47bac1ef97eb4818c41e16fe937b6db7e14fef', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 04:54:09', '2020-08-14 04:54:09', '2020-08-14 05:04:08');
INSERT INTO `oauth_access_tokens` VALUES ('f2cb85198ffabfa0ac40e2b2f26abf6b0b9cb1b29d91b8a834b1cd7471b1b7ca46ec6eba41f875d4', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 05:10:53', '2020-08-14 05:10:53', '2020-08-14 05:20:53');
INSERT INTO `oauth_access_tokens` VALUES ('4a4cdaface58d8bc1254b6595f1959b65945079b48d7c6e83ffd7f1c75fc2f9942046070a672f62b', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 05:13:00', '2020-08-14 05:13:00', '2020-08-14 05:23:00');
INSERT INTO `oauth_access_tokens` VALUES ('ec26a75792df34b7a33c28a09168226b2aa72555947c5a5d8671779b3d066c66eaaefc63c49d27e2', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 05:13:01', '2020-08-14 05:13:01', '2020-08-14 05:23:01');
INSERT INTO `oauth_access_tokens` VALUES ('8fb480d3ababc6974b9d9f14ead11d0719c5aac8962b95f44fe589a14f3faf1e560de38bb62e5a72', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 05:41:24', '2020-08-14 05:41:24', '2020-08-14 05:51:24');
INSERT INTO `oauth_access_tokens` VALUES ('1ac42b6b5d75daacb3b13b57e06a981d4e56b59489956a54934bfa7fd7978659d6d792977348a81f', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 05:52:16', '2020-08-14 05:52:16', '2020-08-14 06:02:15');
INSERT INTO `oauth_access_tokens` VALUES ('10efc8328fd75d383a1c4eae1536febdf57903601f5f09fd97395d4eb3a30beaaa9a938b629d34e7', 10, 9, NULL, '[\"*\"]', 1, '2020-08-14 06:04:58', '2020-08-14 06:04:58', '2020-08-14 06:14:58');
INSERT INTO `oauth_access_tokens` VALUES ('07b29168fd7df8a273a105d1d14a969e260cb5463b95466b8b172636647910338824e0760ed966f4', 10, 9, NULL, '[\"*\"]', 1, '2020-08-15 00:32:33', '2020-08-15 00:32:33', '2020-08-15 00:42:33');
INSERT INTO `oauth_access_tokens` VALUES ('5b7ca9e41155c33421d2e79897d1a485a8313560b70424f81c9f74125c063e211b8ab681049a5702', 10, 9, NULL, '[\"*\"]', 1, '2020-08-15 00:44:42', '2020-08-15 00:44:42', '2020-08-15 00:54:42');
INSERT INTO `oauth_access_tokens` VALUES ('2ac194cb7946febace85e0295147320e4f5431c2bc2d2b2103ec49b30fcf07e0fe445626750510cf', 10, 9, NULL, '[\"*\"]', 1, '2020-08-15 00:56:35', '2020-08-15 00:56:35', '2020-08-15 01:06:35');
INSERT INTO `oauth_access_tokens` VALUES ('4e8f90c44f026e0d5fc96c5519d08fff0d0b41320522d9a0b16b9c0e43a55ec6cfba06538988448a', 10, 9, NULL, '[\"*\"]', 1, '2020-08-15 01:13:12', '2020-08-15 01:13:12', '2020-08-15 01:23:12');
INSERT INTO `oauth_access_tokens` VALUES ('1df6ac0d14bf19d6928d4b427e45b87d40657e57253bdea46cb631293d7fcd4182f37f1c7ba8ae6c', 10, 9, NULL, '[\"*\"]', 1, '2020-08-15 01:32:26', '2020-08-15 01:32:26', '2020-08-15 01:42:25');
INSERT INTO `oauth_access_tokens` VALUES ('a9a86f0f1d4d54ec22eb5f037bd4064b39d2f1234826909589bfac423f5d50e44c6de3b4cc786c77', 10, 9, NULL, '[\"*\"]', 1, '2020-08-15 02:01:54', '2020-08-15 02:01:54', '2020-08-15 02:11:54');
INSERT INTO `oauth_access_tokens` VALUES ('cbce102bce4b62cff0900345074e48630e860aa03ed30d275ad6ef67e09f82a0b71a7b6e2020741d', 10, 9, NULL, '[\"*\"]', 1, '2020-08-15 02:12:23', '2020-08-15 02:12:23', '2020-08-15 02:22:23');
INSERT INTO `oauth_access_tokens` VALUES ('411b2ac2391b5af0c5f3677a6bee5c1a517450fa6487e51d4175fbabefe89dd7be4de33d9be60ae3', 10, 9, NULL, '[\"*\"]', 1, '2020-08-15 02:33:08', '2020-08-15 02:33:08', '2020-08-15 02:43:08');
INSERT INTO `oauth_access_tokens` VALUES ('d3a3bd7b6b10675a0e18acf1be0169a40b2e341e54dd41b804c28ac0ba5551041d7472896567ea3e', 10, 9, NULL, '[\"*\"]', 1, '2020-08-15 02:43:19', '2020-08-15 02:43:19', '2020-08-15 02:53:19');
INSERT INTO `oauth_access_tokens` VALUES ('d5bc159dd1b3a8dfc4591d2e162b3a77cf3b26d49467de5d5af8ff2b46033b1aec15844a8a13ef77', 10, 9, NULL, '[\"*\"]', 1, '2020-08-15 02:56:16', '2020-08-15 02:56:16', '2020-08-15 03:06:16');
INSERT INTO `oauth_access_tokens` VALUES ('e872834aab5b355c1e768221dff4ee0037acf10792c1a3b926549858fd02f4f69f347201ead0c010', 10, 9, NULL, '[\"*\"]', 1, '2020-08-15 06:24:15', '2020-08-15 06:24:15', '2020-08-15 06:34:15');
INSERT INTO `oauth_access_tokens` VALUES ('ba7e31e23092c4bcb62800c1b0add73e51476f82a7f42a38d9cadb38d14e39ba972d52104982a835', 10, 9, NULL, '[\"*\"]', 1, '2020-08-15 14:27:26', '2020-08-15 14:27:26', '2020-08-15 14:37:26');
INSERT INTO `oauth_access_tokens` VALUES ('08215261e662861d6400970acbe00d0449752d759ea95fe124149b0c9e86d4eba637fca96cc566a9', 10, 9, NULL, '[\"*\"]', 1, '2020-08-15 14:38:07', '2020-08-15 14:38:07', '2020-08-15 14:48:07');
INSERT INTO `oauth_access_tokens` VALUES ('4b1008f8ca0054c115ae7053199d197e82df48d9ddf1e330428d1b8b8e0aeb7c3716dda38e4913b6', 10, 9, NULL, '[\"*\"]', 1, '2020-08-15 15:07:43', '2020-08-15 15:07:43', '2020-08-15 15:17:43');
INSERT INTO `oauth_access_tokens` VALUES ('87eb218a9360cddfba50f4a8e199d7ec0e11a3449e7a9357fd2528fd323940f50f8067221f754f40', 10, 9, NULL, '[\"*\"]', 1, '2020-08-15 15:18:22', '2020-08-15 15:18:22', '2020-08-15 15:28:22');
INSERT INTO `oauth_access_tokens` VALUES ('97241ef09252aec587e231829df24d29d8b562859ea22494378e4d0f6ba5a911d313e24b2d03168a', 10, 9, NULL, '[\"*\"]', 1, '2020-08-15 20:55:35', '2020-08-15 20:55:35', '2020-08-15 21:05:35');
INSERT INTO `oauth_access_tokens` VALUES ('8ca007fdaf71d8537e8db3c0e45435b3c381f7be41e15b9096554a8466fb908319adaa0928728746', 10, 9, NULL, '[\"*\"]', 1, '2020-08-15 21:28:54', '2020-08-15 21:28:54', '2020-08-15 21:38:54');
INSERT INTO `oauth_access_tokens` VALUES ('d5670177b940d2b6f64f4996e05bc72cb847be8477fb7ad21322049556fbcbceb8e5c4e74f3a4943', 10, 9, NULL, '[\"*\"]', 1, '2020-08-15 21:40:11', '2020-08-15 21:40:11', '2020-08-15 21:50:11');
INSERT INTO `oauth_access_tokens` VALUES ('57cf422c9372c0457d7a450534294bf59e8de04745397bafd39c2cfcb33191cf787592ee1a13e33c', 10, 9, NULL, '[\"*\"]', 1, '2020-08-16 03:23:02', '2020-08-16 03:23:02', '2020-08-16 03:33:02');
INSERT INTO `oauth_access_tokens` VALUES ('b147d00457cdd733694ecc3dc4127727e8c046b724d4cb634efe406fa6263070cbd588adcd491457', 10, 9, NULL, '[\"*\"]', 1, '2020-08-16 03:36:43', '2020-08-16 03:36:43', '2020-08-16 03:46:43');
INSERT INTO `oauth_access_tokens` VALUES ('09e4218d2f036fff7cd09fce2d557101519fca93feb56fecd29cd0882109d3b98d0d365ae866dd14', 10, 9, NULL, '[\"*\"]', 1, '2020-08-16 03:47:16', '2020-08-16 03:47:16', '2020-08-16 03:57:16');
INSERT INTO `oauth_access_tokens` VALUES ('4d1639ae3f443e256e66af4493a90e79e797c33c630f10352cd7f69011a203e7f3a7c8cc53b2952d', 10, 9, NULL, '[\"*\"]', 1, '2020-08-16 03:57:38', '2020-08-16 03:57:38', '2020-08-16 04:07:38');
INSERT INTO `oauth_access_tokens` VALUES ('187ab409929659d9c1771d4d4e1564c2c4d5df8be3011efd631b213f7d3a41d9d44a83db4ae34a60', 10, 9, NULL, '[\"*\"]', 1, '2020-08-16 04:10:07', '2020-08-16 04:10:07', '2020-08-16 04:20:07');
INSERT INTO `oauth_access_tokens` VALUES ('1a648173429abd94cff81fd48aea1014c24a539ac322bec184b5cca56c54aa3702fcc3ffe98a3218', 10, 9, NULL, '[\"*\"]', 1, '2020-08-16 04:39:40', '2020-08-16 04:39:40', '2020-08-16 04:49:40');
INSERT INTO `oauth_access_tokens` VALUES ('f1911adf7eb92e81f31a2e1b5f7eec5f51acafffe576e4407a0b0e1829f8a2a5a58877720d2fd124', 10, 9, NULL, '[\"*\"]', 1, '2020-08-16 04:57:06', '2020-08-16 04:57:06', '2020-08-16 05:07:06');
INSERT INTO `oauth_access_tokens` VALUES ('8c102313edf72edfe98356be95419b877d9f3ac0b58e3f8b2e378173792ef2a7cebd2ba770c1d887', 10, 9, NULL, '[\"*\"]', 1, '2020-08-16 05:07:34', '2020-08-16 05:07:34', '2020-08-16 05:17:34');
INSERT INTO `oauth_access_tokens` VALUES ('dbcdeef3b0f9fa6df1e51232988e5cec100a72d0b2bd7e5a2f115bceb253991514adc776d18c9b36', 10, 9, NULL, '[\"*\"]', 1, '2020-08-16 05:22:23', '2020-08-16 05:22:23', '2020-08-16 22:02:23');
INSERT INTO `oauth_access_tokens` VALUES ('00d152690ba36a43329f1b83b5a4900533128f2e0b83f8e3f3a51f7bae924e51557504ff22108a58', 10, 9, NULL, '[\"*\"]', 1, '2020-08-17 00:05:02', '2020-08-17 00:05:02', '2020-08-17 16:45:02');
INSERT INTO `oauth_access_tokens` VALUES ('3b7206f35be4e1d954f6ffd7a94dba1f723d5d7920f0184db9ebd6fa84e55431c29806db17600e7c', 10, 9, NULL, '[\"*\"]', 1, '2020-08-17 17:30:26', '2020-08-17 17:30:26', '2020-08-18 10:10:26');
INSERT INTO `oauth_access_tokens` VALUES ('dfde96c5c68415cad37cfe0538c170cee3c06cc1d7df5b104d54b460885655bebc680099cd5d593b', 10, 9, NULL, '[\"*\"]', 1, '2020-08-18 01:58:10', '2020-08-18 01:58:10', '2020-08-18 18:38:10');
INSERT INTO `oauth_access_tokens` VALUES ('56532847cde7d49838c149efb177ec5875e49fa693d94526c6043367578abd678366d1de95d75c17', 10, 9, NULL, '[\"*\"]', 1, '2020-08-18 02:25:22', '2020-08-18 02:25:22', '2020-08-18 19:05:22');
INSERT INTO `oauth_access_tokens` VALUES ('b4262fef9aef6959e9869ca0048230eec4871b48ab228dde75273910738a5de522ca41b6cadc295c', 10, 9, NULL, '[\"*\"]', 1, '2020-08-18 02:43:44', '2020-08-18 02:43:44', '2020-08-18 19:23:43');
INSERT INTO `oauth_access_tokens` VALUES ('d851c632c7f15ebc559ca8fea0088c56eb7e19ccf1863316383814c855ed810eb727bc9c4e209703', 41, 9, NULL, '[\"*\"]', 1, '2020-08-18 03:15:45', '2020-08-18 03:15:45', '2020-08-18 19:55:45');
INSERT INTO `oauth_access_tokens` VALUES ('9c388508a965d89fc60f20c369c833bf525d444fccf205e078240c6d0cf880e74ef174a2b3912ec9', 41, 9, NULL, '[\"*\"]', 1, '2020-08-18 03:16:06', '2020-08-18 03:16:06', '2020-08-18 19:56:06');
INSERT INTO `oauth_access_tokens` VALUES ('7d84da7edff8c7e84cc6bbe877cda18998968d102d45566fde340b39ce1e41ebfc4020e8f44a95ac', 41, 9, NULL, '[\"*\"]', 1, '2020-08-18 03:18:15', '2020-08-18 03:18:15', '2020-08-18 19:58:15');
INSERT INTO `oauth_access_tokens` VALUES ('e8287ba709e04445d89feb1723aeea4786d98606c09b1c0d845d3846deeeebfa4f33d1482cf9f3e9', 10, 9, NULL, '[\"*\"]', 1, '2020-08-18 03:19:00', '2020-08-18 03:19:00', '2020-08-18 19:59:00');
INSERT INTO `oauth_access_tokens` VALUES ('fb9cd51662552bafe91cc7815cef637e158c0807a2a83b2721d0e8578e99ed497595dc06fdc9ff90', 10, 9, NULL, '[\"*\"]', 1, '2020-08-18 03:19:42', '2020-08-18 03:19:42', '2020-08-18 19:59:42');
INSERT INTO `oauth_access_tokens` VALUES ('56c6fce6350c35fa8a6cf5330e5e69a926e63d8af809f8107d4c8a288e31fc05905490279065d182', 41, 9, NULL, '[\"*\"]', 1, '2020-08-18 03:20:03', '2020-08-18 03:20:03', '2020-08-18 20:00:03');
INSERT INTO `oauth_access_tokens` VALUES ('a06bfbaf7bf61ab9581844189d334b81b24eb7bbb5270f15ef5a5f02e87a78c42fafaa820d62e552', 10, 9, NULL, '[\"*\"]', 1, '2020-08-18 03:28:13', '2020-08-18 03:28:13', '2020-08-18 20:08:13');
INSERT INTO `oauth_access_tokens` VALUES ('780282bfb280ffc19f56cd57c4187e5574fb8d78ff0c19091640ab01d9605b1a6aaeeb3dea0ba24b', 41, 9, NULL, '[\"*\"]', 0, '2020-08-18 03:29:06', '2020-08-18 03:29:06', '2020-08-18 20:09:06');
INSERT INTO `oauth_access_tokens` VALUES ('9cb54c992b4bbcc92c333506602b7354f6158ac51e477a4dad5fca6bc1a1cd1274c44d7175176217', 41, 9, NULL, '[\"*\"]', 0, '2020-08-18 03:29:51', '2020-08-18 03:29:51', '2020-08-18 20:09:51');
INSERT INTO `oauth_access_tokens` VALUES ('36c33ab92f9c9217c535cb4aa3fac7873632ad3b110cee2ed1ee979172b5e62256c0d6f811269eee', 41, 9, NULL, '[\"*\"]', 0, '2020-08-18 03:30:07', '2020-08-18 03:30:07', '2020-08-18 20:10:07');
INSERT INTO `oauth_access_tokens` VALUES ('c3547ac8e86acf838e9870340e81191e170ef9d7e10071286c6a762e8c02c03c07042d17985b4e55', 41, 9, NULL, '[\"*\"]', 0, '2020-08-18 03:31:08', '2020-08-18 03:31:08', '2020-08-18 20:11:08');
INSERT INTO `oauth_access_tokens` VALUES ('841d8b762d8adf4304142f91241c97fb1327324c3ac879413c622cc30995bf6f04ce2b78de9b2f7e', 44, 9, NULL, '[\"*\"]', 1, '2020-08-18 04:52:13', '2020-08-18 04:52:13', '2020-08-18 21:32:13');
INSERT INTO `oauth_access_tokens` VALUES ('6a9146bc53cea0d9c24720535cd76fd169c81ae30cb5d50d04ab7a907b7525080c5945a549e08997', 10, 9, NULL, '[\"*\"]', 1, '2020-08-18 04:52:56', '2020-08-18 04:52:56', '2020-08-18 21:32:56');
INSERT INTO `oauth_access_tokens` VALUES ('3084b896219f8e385ee1f9c2c9d467ef5429d87c97a3e18874e5cd5fa0c4c1e4ba3e750e5c349a32', 44, 9, NULL, '[\"*\"]', 1, '2020-08-18 04:53:34', '2020-08-18 04:53:34', '2020-08-18 21:33:34');
INSERT INTO `oauth_access_tokens` VALUES ('fa598ae018dd3f534457d914e5ea5990d0e75820a64bd13555dd8af9748b9f6c3f76ccf3094db261', 44, 9, NULL, '[\"*\"]', 1, '2020-08-18 04:54:06', '2020-08-18 04:54:06', '2020-08-18 21:34:06');
INSERT INTO `oauth_access_tokens` VALUES ('6d51a278bfa3f665b93e49e05c1e39d0d11e186da45400f2d8a46bdc1d953c90863f54ab7735aa26', 44, 9, NULL, '[\"*\"]', 1, '2020-08-18 04:55:35', '2020-08-18 04:55:35', '2020-08-18 21:35:35');
INSERT INTO `oauth_access_tokens` VALUES ('4453c19e560e1acf1f146ddeac88b45c29f8b8dd76c16adb0df64ffaee17b1d19ea53bd07b5545c7', 10, 9, NULL, '[\"*\"]', 1, '2020-08-18 04:58:17', '2020-08-18 04:58:17', '2020-08-18 21:38:17');
INSERT INTO `oauth_access_tokens` VALUES ('2c33be20e3c49c137a5078d68cb2279cc84af1e5d1a6fce93301877975485ab6747aaabb189f0654', 44, 9, NULL, '[\"*\"]', 1, '2020-08-18 04:58:47', '2020-08-18 04:58:47', '2020-08-18 21:38:47');
INSERT INTO `oauth_access_tokens` VALUES ('64d461ecf87cd34fc99644c559521c168c18682f0e934ef0f66d70ec1d7ccbdf6f32373588a3ffa5', 10, 9, NULL, '[\"*\"]', 1, '2020-08-18 05:17:35', '2020-08-18 05:17:35', '2020-08-18 21:57:34');
INSERT INTO `oauth_access_tokens` VALUES ('82e600527b562ef1c81ff70fbda720c057db101665c9bfbd6f0ade9caea1164b6ce743095dc85048', 10, 9, NULL, '[\"*\"]', 1, '2020-08-18 05:42:16', '2020-08-18 05:42:16', '2020-08-18 22:22:16');
INSERT INTO `oauth_access_tokens` VALUES ('43566e6875b7daa5521d559841a113565dc006dcf0a548a8bbe503a79a7ae96ebdb65494c166f1ba', 10, 9, NULL, '[\"*\"]', 1, '2020-08-18 05:42:51', '2020-08-18 05:42:51', '2020-08-18 22:22:51');
INSERT INTO `oauth_access_tokens` VALUES ('9ffcb9fae85429797a46f6ecd172d5abf6bb313431f82ed6e81d5ed82d4119f0acee30faa5d31e19', 10, 9, NULL, '[\"*\"]', 1, '2020-08-18 05:52:35', '2020-08-18 05:52:35', '2020-08-18 22:32:35');
INSERT INTO `oauth_access_tokens` VALUES ('4048116c5d9082f2b67bc3d93c97bf82eeb76b286c5d26960674ceb9581be4b274d63765a5ec9517', 10, 9, NULL, '[\"*\"]', 1, '2020-08-18 07:19:46', '2020-08-18 07:19:46', '2020-08-18 23:59:46');
INSERT INTO `oauth_access_tokens` VALUES ('9f6dbad7193f5a69820cdf78448fa52300c3c39c5cc8a4911de66fa72e6bf8c9ade6fbc627753a88', 10, 9, NULL, '[\"*\"]', 1, '2020-08-19 03:35:21', '2020-08-19 03:35:21', '2020-08-19 20:15:21');
INSERT INTO `oauth_access_tokens` VALUES ('3644c63aceac4d46584ec85cc562e6d3b45aec53941327f4a50e24a665d2088492b17fac262741a6', 10, 9, NULL, '[\"*\"]', 1, '2020-08-19 04:37:35', '2020-08-19 04:37:35', '2020-08-19 21:17:35');
INSERT INTO `oauth_access_tokens` VALUES ('4f307d9da632f4ea60399fd71458da699951eb0b054ee360801801476b48c9e638fe57421f3f3a68', 10, 9, NULL, '[\"*\"]', 1, '2020-08-19 19:25:52', '2020-08-19 19:25:52', '2020-08-20 12:05:52');
INSERT INTO `oauth_access_tokens` VALUES ('ac5c7a5c00392ce20d4bbaf434608214b0636e99b89db6b44713f37d7f12f133d27c9b18a09b9e7a', 44, 9, NULL, '[\"*\"]', 1, '2020-08-20 07:34:48', '2020-08-20 07:34:48', '2020-08-21 00:14:48');
INSERT INTO `oauth_access_tokens` VALUES ('5466e5ac852064abe17e454e54e433c3a95e2048d6b59305447598180f89fa75dc12d40f1f40e6da', 10, 9, NULL, '[\"*\"]', 1, '2020-08-20 13:04:27', '2020-08-20 13:04:27', '2020-08-21 05:44:27');
INSERT INTO `oauth_access_tokens` VALUES ('7eb570c85bb78b0a5c4a06cd799ca0653342f6db86864c3bcda89d58fbb64e97c36b00e65d8eb194', 10, 9, NULL, '[\"*\"]', 1, '2020-08-20 20:41:15', '2020-08-20 20:41:15', '2020-08-21 13:21:15');
INSERT INTO `oauth_access_tokens` VALUES ('45375dbdafed3bf76fccf151809203d2282a0fc4899b1648ecd865515e475e34b628494aa2c4976b', 10, 9, NULL, '[\"*\"]', 1, '2020-08-21 01:00:50', '2020-08-21 01:00:50', '2020-08-21 17:40:50');
INSERT INTO `oauth_access_tokens` VALUES ('361ff4a3c973e2852408a27dd935d04d94201f27ebf376f57480572d61c4190db133a3ba83753518', 10, 9, NULL, '[\"*\"]', 1, '2020-08-21 05:05:38', '2020-08-21 05:05:38', '2020-08-21 21:45:38');
INSERT INTO `oauth_access_tokens` VALUES ('3294eddd9c3477225b02d0395e0b11c17dee571be5859653dc371ed862338c25733b1e355235abdf', 10, 9, NULL, '[\"*\"]', 1, '2020-08-21 06:50:40', '2020-08-21 06:50:40', '2020-08-21 23:30:40');
INSERT INTO `oauth_access_tokens` VALUES ('4eeb4842f99250e2836bf72122df7a2f33b5c61d48c1228e756930df6b2ee8218028b1c1a6d1f625', 44, 9, NULL, '[\"*\"]', 1, '2020-08-21 07:23:53', '2020-08-21 07:23:53', '2020-08-22 00:03:53');
INSERT INTO `oauth_access_tokens` VALUES ('65748ce417c02461c5b1b4f4acc8f0d0183277a027bc1fdad20efcad0f06e26dca014658b6f92a89', 44, 9, NULL, '[\"*\"]', 1, '2020-08-21 07:53:15', '2020-08-21 07:53:15', '2020-08-22 00:33:15');
INSERT INTO `oauth_access_tokens` VALUES ('3046e01e0399d9c5869776d0883fc96c61404e6c52c94537b67f68b8ff75ab2b645608013a65aefa', 10, 9, NULL, '[\"*\"]', 1, '2020-08-21 08:03:47', '2020-08-21 08:03:47', '2020-08-22 00:43:47');
INSERT INTO `oauth_access_tokens` VALUES ('e1ba8cadac30977177e8785716b7282b0a03c2f19dd04ff7cef9599bc3d10fd462d5819ccb07f384', 10, 9, NULL, '[\"*\"]', 1, '2020-08-21 08:50:21', '2020-08-21 08:50:21', '2020-08-22 01:30:21');
INSERT INTO `oauth_access_tokens` VALUES ('6c3543d1bb989baa985f0ad4e1cc1cb7ec3ab57b4f70d6b99bca6eb81292e7159922b086136cd82b', 10, 9, NULL, '[\"*\"]', 1, '2020-08-22 01:34:31', '2020-08-22 01:34:31', '2020-08-22 18:14:30');
INSERT INTO `oauth_access_tokens` VALUES ('a7c70d67019fedf5141aac97f23f9a2ed299d48e768f8e31282a385ea4126bb079fcf5c65f0f051b', 10, 9, NULL, '[\"*\"]', 1, '2020-08-22 01:51:04', '2020-08-22 01:51:04', '2020-08-22 18:31:04');
INSERT INTO `oauth_access_tokens` VALUES ('ccd4149246a6d368d4c5e6a50c7199ef5564f12b9c938cdb97dafc6cd843891cf105cf0188d7d295', 44, 9, NULL, '[\"*\"]', 1, '2020-08-22 07:41:40', '2020-08-22 07:41:40', '2020-08-23 00:21:40');
INSERT INTO `oauth_access_tokens` VALUES ('7e59caf7da6725e605675bc38a603dc5b566d313e67d1534ee0add17c39c835f68fd4ba514479bc4', 10, 9, NULL, '[\"*\"]', 1, '2020-08-22 08:04:12', '2020-08-22 08:04:12', '2020-08-23 00:44:12');
INSERT INTO `oauth_access_tokens` VALUES ('b13ebfb80ca0dcda79b15031eeb6c74c6ebe3034d3bdb2b2c8a62bf872902d2e8e42a5d4e50957e7', 10, 9, NULL, '[\"*\"]', 1, '2020-08-22 20:48:28', '2020-08-22 20:48:28', '2020-08-23 13:28:28');
INSERT INTO `oauth_access_tokens` VALUES ('cc326dd0faf3b76a4211a16845700012b2a794ff930e686c4b09c3c9af6991be004f74e4f9c951e0', 10, 9, NULL, '[\"*\"]', 1, '2020-08-23 10:38:15', '2020-08-23 10:38:15', '2020-08-24 03:18:15');
INSERT INTO `oauth_access_tokens` VALUES ('5c9587af29db9666653cf975e32a0a616ce77e62136c85908c64dd77199f005f4371fe8b70c289cf', 10, 9, NULL, '[\"*\"]', 1, '2020-08-23 12:54:55', '2020-08-23 12:54:55', '2020-08-24 05:34:55');
INSERT INTO `oauth_access_tokens` VALUES ('310fc4bf308c3a52b335b26b56d30cd5756701b755bf96b344b18b7d4bceac795f937bba17462199', 10, 9, NULL, '[\"*\"]', 1, '2020-08-23 12:55:40', '2020-08-23 12:55:40', '2020-08-24 05:35:40');
INSERT INTO `oauth_access_tokens` VALUES ('2ddb6ed15ea3293cb7fc394f341834b84927399909153c6408c32e92ef6c6dccf79f384d6a6b96f6', 44, 9, NULL, '[\"*\"]', 1, '2020-08-23 15:11:45', '2020-08-23 15:11:45', '2020-08-24 07:51:45');
INSERT INTO `oauth_access_tokens` VALUES ('aab6eded8fcb860dba4bc5750749a5b7d2e3b1ecb6d35f4091394c36f90ae2e3ddcca6cade844ddb', 10, 9, NULL, '[\"*\"]', 1, '2020-08-24 05:35:47', '2020-08-24 05:35:47', '2020-08-24 22:15:47');
INSERT INTO `oauth_access_tokens` VALUES ('3b63bb4eeaedeeaa40df8840044cdfda28e9ccbaede0c919bbfa53d5e080ad63cea4b3dd6e7d6950', 44, 9, NULL, '[\"*\"]', 1, '2020-08-24 12:22:41', '2020-08-24 12:22:41', '2020-08-25 05:02:41');
INSERT INTO `oauth_access_tokens` VALUES ('6dc5d5107c1b0cc2cdbbff0e130214276337b93123dcc59261097d64f9352dc238001eeca6b422d0', 10, 9, NULL, '[\"*\"]', 1, '2020-08-25 00:19:33', '2020-08-25 00:19:33', '2020-08-25 16:59:33');
INSERT INTO `oauth_access_tokens` VALUES ('5320b768fd9479118ac2ecd0447d3e2099dc9e39da7a780f1f1166804f2558fba7101fb2dc2db120', 44, 9, NULL, '[\"*\"]', 1, '2020-08-25 05:49:15', '2020-08-25 05:49:15', '2020-08-25 22:29:15');
INSERT INTO `oauth_access_tokens` VALUES ('7ba196e2452b80fec11be0f63f35673fdd433b34ed2b5505c7518d9a59748a8ee697b9f3e2954575', 10, 9, NULL, '[\"*\"]', 1, '2020-08-25 09:11:31', '2020-08-25 09:11:31', '2020-08-26 01:51:31');
INSERT INTO `oauth_access_tokens` VALUES ('8ee875edb785b14b4e40cadba5bea15004edf1d69829e658d94a01968de2d491aa60debc72e2c901', 30, 9, NULL, '[\"*\"]', 1, '2020-08-26 00:30:59', '2020-08-26 00:30:59', '2020-08-26 17:10:59');
INSERT INTO `oauth_access_tokens` VALUES ('b2288a165a5297ee8e366ea02ecf180d17a2620972c3232f55253ed7e151b84bd2fe4e4becfd596e', 30, 9, NULL, '[\"*\"]', 1, '2020-08-26 07:13:11', '2020-08-26 07:13:11', '2020-08-26 23:53:11');
INSERT INTO `oauth_access_tokens` VALUES ('564e172e047acee87bbd9ee35e277c7f2f85038c9027e2dc1a2c9e727eebed13d44ee3689d3dfbf5', 10, 9, NULL, '[\"*\"]', 1, '2020-08-26 07:32:26', '2020-08-26 07:32:26', '2020-08-27 00:12:26');
INSERT INTO `oauth_access_tokens` VALUES ('def7952c02e07a1580a490b750d116a066cd3ee23c52dace49e548d19a50422b83e65de18f40e5e8', 30, 9, NULL, '[\"*\"]', 1, '2020-08-26 23:14:32', '2020-08-26 23:14:32', '2020-08-27 15:54:32');
INSERT INTO `oauth_access_tokens` VALUES ('b44c3b62cc3e4859fa7d40f279fbff15ae1b68f283dea1d30318096370da4bdb6059b07a821f007f', 45, 9, NULL, '[\"*\"]', 1, '2020-08-27 10:58:59', '2020-08-27 10:58:59', '2020-08-28 03:38:59');
INSERT INTO `oauth_access_tokens` VALUES ('e5c9a1b2b228a9d5ec575865ec6be0654262f0002123dfa36970c58c13dd6ca2ded610726fa775e7', 45, 9, NULL, '[\"*\"]', 1, '2020-08-29 08:50:03', '2020-08-29 08:50:03', '2020-08-30 01:30:03');
INSERT INTO `oauth_access_tokens` VALUES ('0a9d8271c43a1059fe68e8f6d65594908fc1053d737ad32829bb793d8b8401c0650823d718f631e9', 10, 9, NULL, '[\"*\"]', 1, '2020-08-29 09:25:00', '2020-08-29 09:25:00', '2020-08-30 02:05:00');
INSERT INTO `oauth_access_tokens` VALUES ('cc27367501f0e3680d170e87790e58f33093ae9041c3edd6f31f8d2fec6084e1f4e9dc200bd05ddc', 10, 9, NULL, '[\"*\"]', 1, '2020-08-30 06:59:42', '2020-08-30 06:59:42', '2020-08-30 23:39:42');
INSERT INTO `oauth_access_tokens` VALUES ('4ac78f846e5abfb799ac1c021a37c64ed67d3535a321df20ca3964138f3ff28e76f4644dfabb551c', 10, 9, NULL, '[\"*\"]', 1, '2020-08-31 02:26:14', '2020-08-31 02:26:14', '2020-08-31 19:06:14');
INSERT INTO `oauth_access_tokens` VALUES ('b4d692cb2cdaf09a5b1304fff22fc301c5ac3648855a484fab0f93440af2f8eb140dd17d6ba17160', 10, 9, NULL, '[\"*\"]', 1, '2020-08-31 04:21:41', '2020-08-31 04:21:41', '2020-08-31 21:01:41');
INSERT INTO `oauth_access_tokens` VALUES ('4d8c38e426e270ff6ad3e6b37357a9ee891251aa0dc232bd289ce4a9d22e4e8c978a62c4adbb1c9d', 10, 9, NULL, '[\"*\"]', 1, '2020-08-31 05:52:33', '2020-08-31 05:52:33', '2020-08-31 22:32:33');
INSERT INTO `oauth_access_tokens` VALUES ('6d4c0839fe79aed6488629e18c0b1f7585cc9917963f79391cc3641b29d629fbfa4e96cc9a8cea1f', 10, 9, NULL, '[\"*\"]', 1, '2020-08-31 06:09:48', '2020-08-31 06:09:48', '2020-08-31 22:49:48');
INSERT INTO `oauth_access_tokens` VALUES ('08f2771b60da0aba273f3d3f0c5b3bb3c1724697d2b12fbc0e90147926e29868babbf2058b612ca4', 10, 9, NULL, '[\"*\"]', 1, '2020-08-31 17:44:17', '2020-08-31 17:44:17', '2020-09-01 10:24:16');
INSERT INTO `oauth_access_tokens` VALUES ('0a80c62422da891f9acb862b48815bb383e3c7b51978e06d31d8617d05bb3aa74c5429c910f76917', 45, 9, NULL, '[\"*\"]', 1, '2020-08-31 17:56:50', '2020-08-31 17:56:50', '2020-09-01 10:36:50');
INSERT INTO `oauth_access_tokens` VALUES ('2797a140b4ae32e599ae29cac4e558aa6af3389635e12b0458574001832480ae8cae0ebc6002547a', 45, 9, NULL, '[\"*\"]', 1, '2020-08-31 17:57:31', '2020-08-31 17:57:31', '2020-09-01 10:37:31');
INSERT INTO `oauth_access_tokens` VALUES ('e6668d8785e3d5fe5fe8830ba51f8963f0f3deda1f208b43c3b94bc6ea7f783f4490bd525adb7311', 45, 9, NULL, '[\"*\"]', 1, '2020-08-31 18:26:43', '2020-08-31 18:26:43', '2020-09-01 11:06:42');
INSERT INTO `oauth_access_tokens` VALUES ('37478410eb79d556e18acf9711f4d56d6e93c8e4cad42d34a7aee20d808624deb586d058304c4def', 45, 9, NULL, '[\"*\"]', 1, '2020-09-03 08:17:19', '2020-09-03 08:17:19', '2020-09-04 00:57:19');
INSERT INTO `oauth_access_tokens` VALUES ('bd30f6c06c0f8c6bf24e65de7d1ae686d9acea39580a5b93c7a358cd638d243e6e99890ed5a47196', 45, 9, NULL, '[\"*\"]', 1, '2020-09-07 10:37:19', '2020-09-07 10:37:19', '2020-09-08 03:17:18');
INSERT INTO `oauth_access_tokens` VALUES ('6341db470e7625351c4b1f9c9ff6f3334a08cc195223d5decfd18a3ec1958d12d0032827453adf28', 45, 9, NULL, '[\"*\"]', 1, '2020-09-08 01:36:11', '2020-09-08 01:36:11', '2020-09-08 18:16:11');
INSERT INTO `oauth_access_tokens` VALUES ('6877f769c06c0b49c0093724a66a1ca719839a626171c188518fb301246b44190a8d894a56a8c43d', 46, 9, NULL, '[\"*\"]', 1, '2020-09-08 01:36:45', '2020-09-08 01:36:45', '2020-09-08 18:16:45');
INSERT INTO `oauth_access_tokens` VALUES ('8746d2d20439b18faebfeee1bcb4d3878f49022ba72687a12c3938c7e731d8e4499140b332943df3', 47, 9, NULL, '[\"*\"]', 1, '2020-09-08 01:37:34', '2020-09-08 01:37:34', '2020-09-08 18:17:34');
INSERT INTO `oauth_access_tokens` VALUES ('87cd97b50fe1e1cd3d2ea7543f913da90ef473e232d255d6c9f0a60ba7c599d3dcf5e21aa0d48ab7', 47, 9, NULL, '[\"*\"]', 1, '2020-09-08 18:18:27', '2020-09-08 18:18:27', '2020-09-09 10:58:27');
INSERT INTO `oauth_access_tokens` VALUES ('7aeaf4255c984178f2d001f99d9858fc19522a713c223721bafba1d32c20b9da413c14fbe6a722da', 10, 9, NULL, '[\"*\"]', 1, '2020-09-08 20:15:09', '2020-09-08 20:15:09', '2020-09-09 12:55:08');
INSERT INTO `oauth_access_tokens` VALUES ('23a9c76b3e8be80158ae88c2b65c29d4f7dc5ca373b9196860bb2ab03ac1980fc3ff007e1d774737', 10, 9, NULL, '[\"*\"]', 1, '2020-09-09 12:55:47', '2020-09-09 12:55:47', '2020-09-10 05:35:46');
INSERT INTO `oauth_access_tokens` VALUES ('f9365466922434cd7b7879a2a569ed77207d5a33860e5b5a0ebcedfb0fd8e3927aa7fdaaa5552dcc', 10, 9, NULL, '[\"*\"]', 1, '2020-09-09 19:59:18', '2020-09-09 19:59:18', '2020-09-10 12:39:18');
INSERT INTO `oauth_access_tokens` VALUES ('4763e12317b1c528b81028752cf673b71078edc35b433cebeb64c7c2a9bec9ef20e2b0bdf262be33', 10, 9, NULL, '[\"*\"]', 1, '2020-09-10 05:46:03', '2020-09-10 05:46:03', '2020-09-10 22:26:03');
INSERT INTO `oauth_access_tokens` VALUES ('335437d35e54c5a5345d575742bbc4cc9eb0922dea78da8a2ebe54b98d2dc07e5e744cd7e510ffe6', 10, 9, NULL, '[\"*\"]', 1, '2020-09-10 05:46:05', '2020-09-10 05:46:05', '2020-09-10 22:26:05');
INSERT INTO `oauth_access_tokens` VALUES ('3f5270b731b0d9f5e9b231b399c050f2d9feaa68c3098fa97e5c8a416bc5ecd0c9142bff86453bb1', 10, 9, NULL, '[\"*\"]', 1, '2020-09-10 16:02:16', '2020-09-10 16:02:16', '2020-09-11 08:42:16');
INSERT INTO `oauth_access_tokens` VALUES ('654d87c8e7a398ea04440ea9cd0b22cf036998c6c33629e1a3387cad54097524d9836d0c4325e324', 10, 9, NULL, '[\"*\"]', 1, '2020-09-10 16:06:07', '2020-09-10 16:06:07', '2020-09-11 08:46:07');
INSERT INTO `oauth_access_tokens` VALUES ('06c0adb92c032697aecf7fdfe1afaca472f1005501f1ed1e2ab1cde20102d2c2784a46ac78c13a3b', 10, 9, NULL, '[\"*\"]', 1, '2020-09-10 16:08:47', '2020-09-10 16:08:47', '2020-09-11 08:48:47');
INSERT INTO `oauth_access_tokens` VALUES ('5026b6e72d5eb6d42c8f6622a0fd1573fd4896be0f716694df5998edef199b19ff1d2bb94b663b17', 10, 9, NULL, '[\"*\"]', 1, '2020-09-10 16:09:02', '2020-09-10 16:09:02', '2020-09-11 08:49:02');
INSERT INTO `oauth_access_tokens` VALUES ('dbe1c4af75698a92dc0b849768a540e60776f3d2cc720dc3694f78fbcfbcf94fda46ff7a5eecc772', 10, 9, NULL, '[\"*\"]', 1, '2020-09-10 16:34:22', '2020-09-10 16:34:22', '2020-09-11 09:14:21');
INSERT INTO `oauth_access_tokens` VALUES ('e7831be638f6fd51d9c1b470919d17ca399b9adf90763d5262655d655d48bc3edb2ec42c3e22822a', 10, 9, NULL, '[\"*\"]', 1, '2020-09-10 16:34:38', '2020-09-10 16:34:38', '2020-09-11 09:14:38');
INSERT INTO `oauth_access_tokens` VALUES ('53a6a1fd48e32ec95da353caca028ce5c4dff99c30a53681899e3be8f7432fa0a40028add553c54f', 10, 9, NULL, '[\"*\"]', 1, '2020-09-10 17:16:42', '2020-09-10 17:16:42', '2020-09-11 09:56:42');
INSERT INTO `oauth_access_tokens` VALUES ('4a497c791e47a35e0d709908049bb1075229e275d3f1db3bfd978016068ca30f85eca98d2ab0199e', 10, 9, NULL, '[\"*\"]', 1, '2020-09-10 17:27:05', '2020-09-10 17:27:05', '2020-09-11 10:07:05');
INSERT INTO `oauth_access_tokens` VALUES ('82cf0677ca00653f3b8cdb9bc94e725ef98a23e29e805c01e6cb6ef7b5baa0939470d475b09f3c55', 10, 9, NULL, '[\"*\"]', 1, '2020-09-10 17:31:19', '2020-09-10 17:31:19', '2020-09-11 10:11:19');
INSERT INTO `oauth_access_tokens` VALUES ('aa9dd7046a1d3cdc6e26b0e59772e8712f06cc10e07c33d9e97f7d0e5c2e655957b73561ce4e1b7d', 10, 9, NULL, '[\"*\"]', 1, '2020-09-10 17:37:10', '2020-09-10 17:37:10', '2020-09-11 10:17:10');
INSERT INTO `oauth_access_tokens` VALUES ('cb5d557f293beeafa92da49fd4004e8f3810dcaf440cd283f92e7b5ca166b03a0f1cf2111b7f2e42', 10, 9, NULL, '[\"*\"]', 1, '2020-09-10 17:37:56', '2020-09-10 17:37:56', '2020-09-11 10:17:56');
INSERT INTO `oauth_access_tokens` VALUES ('970ceba1b99aeb48705c4d1a816f9d1a0a40fc59286adf5e94991742a9217fee12eb8e25c733a8a8', 10, 9, NULL, '[\"*\"]', 1, '2020-09-10 17:44:28', '2020-09-10 17:44:28', '2020-09-11 10:24:28');
INSERT INTO `oauth_access_tokens` VALUES ('34725c54ce8fd76fb66a6745fda484f95c2f2d401b0d219eb295d7252b0389aace7dde5cc2d1c0a7', 10, 9, NULL, '[\"*\"]', 1, '2020-09-10 17:49:13', '2020-09-10 17:49:13', '2020-09-11 10:29:13');
INSERT INTO `oauth_access_tokens` VALUES ('5ee06e9b04bb3631afe241e5fa1521fcfe23aa14b30d144f098e7b74810b86d815c08db62c10c5b7', 10, 9, NULL, '[\"*\"]', 1, '2020-09-10 17:49:43', '2020-09-10 17:49:43', '2020-09-11 10:29:43');
INSERT INTO `oauth_access_tokens` VALUES ('e7f2031d5dccee062c178542867e91c3553e585259f450dc67d65add35ad93bb6768a36dfae47ec1', 10, 9, NULL, '[\"*\"]', 1, '2020-09-10 18:22:34', '2020-09-10 18:22:34', '2020-09-11 11:02:33');
INSERT INTO `oauth_access_tokens` VALUES ('78f02d75fc9739e2867bd39b50517506930d84cc57df62eb6666489afb9d2bd30e13b9e7744ddd99', 10, 9, NULL, '[\"*\"]', 1, '2020-09-10 18:29:29', '2020-09-10 18:29:29', '2020-09-11 11:09:29');
INSERT INTO `oauth_access_tokens` VALUES ('488d8ca68b301ee07a959bdfc05408be2cb8d9fae8620e8bc280b3843e1dee6586f38da370c410b4', 10, 9, NULL, '[\"*\"]', 0, '2020-09-10 18:32:05', '2020-09-10 18:32:05', '2020-09-11 11:12:05');
INSERT INTO `oauth_access_tokens` VALUES ('92767a2bd9a350dbf5b4b920b17c09a4942639cf3a92accf0636726296077d22bae601446b6bc3b8', 10, 9, NULL, '[\"*\"]', 0, '2020-09-10 19:20:24', '2020-09-10 19:20:24', '2020-09-11 12:00:24');
INSERT INTO `oauth_access_tokens` VALUES ('7bd19f135d0748249abb0efc3f8147b0769d30833271f1f07cbb4eeba94109865778ba77b9e9fed7', 10, 9, NULL, '[\"*\"]', 0, '2020-09-10 19:20:35', '2020-09-10 19:20:35', '2020-09-11 12:00:35');
INSERT INTO `oauth_access_tokens` VALUES ('f0f604f6a0313d71da8809a09280e16369e6aeba23bb899f8f27736170a28ef43533f4a6dfedbe77', 52, 9, NULL, '[\"*\"]', 0, '2020-09-11 02:58:19', '2020-09-11 02:58:19', '2020-09-11 19:38:19');
INSERT INTO `oauth_access_tokens` VALUES ('752c2115a3bbf7e7d8574510ded0e96ac5dd505f34f4028aa2ac5ac67e619406697e125cfa87c1f8', 52, 9, NULL, '[\"*\"]', 0, '2020-09-11 02:59:00', '2020-09-11 02:59:00', '2020-09-11 19:39:00');
INSERT INTO `oauth_access_tokens` VALUES ('791326ade45e49d630e163e8210ff9c9dce5cbb2b0c62bd7832678ffc029bb93335c71e7508c7a4f', 52, 9, NULL, '[\"*\"]', 0, '2020-09-11 03:22:03', '2020-09-11 03:22:03', '2020-09-11 20:02:03');
INSERT INTO `oauth_access_tokens` VALUES ('fa0cad043d73f34a5bdc1c8bb4e6f8ddf4014fea5f23c0b0ae3e6c6342a9e5000495bf6dd20f151a', 52, 9, NULL, '[\"*\"]', 0, '2020-09-11 03:29:56', '2020-09-11 03:29:56', '2020-09-11 20:09:56');
INSERT INTO `oauth_access_tokens` VALUES ('35d69b1bb4db0597eee4a7015aea8f669348dc02a5b3cad73d090cd1f51ecf49c83783646f7b853b', 52, 9, NULL, '[\"*\"]', 0, '2020-09-11 05:04:22', '2020-09-11 05:04:22', '2020-09-11 21:44:21');
INSERT INTO `oauth_access_tokens` VALUES ('535ee7030bd9ed80267134ce8ef09f00e98655ad21d6d633f6ac3baff580b7644f0ab1dff59b77c4', 52, 9, NULL, '[\"*\"]', 0, '2020-09-11 05:04:54', '2020-09-11 05:04:54', '2020-09-11 21:44:54');
INSERT INTO `oauth_access_tokens` VALUES ('2252ce80ea1486f1f620e1d9d1516120b0f08d53f916f196579a825b7f347063aacd5be3956639a4', 52, 9, NULL, '[\"*\"]', 0, '2020-09-11 05:05:20', '2020-09-11 05:05:20', '2020-09-11 21:45:20');
INSERT INTO `oauth_access_tokens` VALUES ('a5637216ad6b2c478c9f3b01dc3b743b31206930043e24da25be0972ee0601618aa69a96bc5ba5c0', 52, 9, NULL, '[\"*\"]', 0, '2020-09-11 07:42:11', '2020-09-11 07:42:11', '2020-09-12 00:22:11');
INSERT INTO `oauth_access_tokens` VALUES ('c7791d4e0f91fd6f341972f2c60323c5cddc02a000a3250856aa3d96ff3d1c064b4c0d59a0a329a9', 10, 9, NULL, '[\"*\"]', 1, '2020-10-07 22:35:26', '2020-10-07 22:35:26', '2020-10-08 15:15:26');
INSERT INTO `oauth_access_tokens` VALUES ('aae269800ab485a1253e95e08d99158782df2c3d4a1b4c84d1367cf39499f87c92201f51338ad986', 10, 9, NULL, '[\"*\"]', 1, '2020-10-13 15:58:49', '2020-10-13 15:58:49', '2020-10-14 08:38:47');
INSERT INTO `oauth_access_tokens` VALUES ('06a4c2a41609f5bd02afa6c2478e47f1ab645fb7277fc1ba4163868c71e2168d8ee9c90608a9c627', 10, 9, NULL, '[\"*\"]', 1, '2020-10-14 12:36:01', '2020-10-14 12:36:01', '2020-10-15 05:15:59');
INSERT INTO `oauth_access_tokens` VALUES ('49a1b20619cc53ace570d3eeb4c14d1f3c9072a0ebd2058be6c9a9a7feb6e26361ebf0b4c2dbfe02', 10, 9, NULL, '[\"*\"]', 1, '2020-10-15 06:36:55', '2020-10-15 06:36:55', '2020-10-15 23:16:53');
INSERT INTO `oauth_access_tokens` VALUES ('54203c6497e00ad7c2989e33b62e9f0887bce01a4901b063cec40f161a57c884efc24319cb65ac61', 10, 9, NULL, '[\"*\"]', 1, '2020-10-15 23:36:16', '2020-10-15 23:36:16', '2020-10-16 16:16:14');
INSERT INTO `oauth_access_tokens` VALUES ('b670b63aad332cb97cab28f15dce2056b13b26a60b0ba8befcd1bf104439eb557926b7b4564b6f12', 10, 9, NULL, '[\"*\"]', 1, '2020-10-17 18:10:25', '2020-10-17 18:10:25', '2020-10-18 10:50:24');
INSERT INTO `oauth_access_tokens` VALUES ('4850f1ae4a2dff36f93e54f4fb787da66591cf306e562a40fb61aa809f2cdbb53c703e417739eeca', 10, 9, NULL, '[\"*\"]', 1, '2020-10-18 13:12:44', '2020-10-18 13:12:44', '2020-10-19 05:52:43');
INSERT INTO `oauth_access_tokens` VALUES ('2c5d521c24c80705ffe4aafd5952eeb1bb5d71c87de504b88bc6236784f789cbfe34e4d7862e6960', 10, 9, NULL, '[\"*\"]', 1, '2020-10-19 05:55:23', '2020-10-19 05:55:23', '2020-10-19 22:35:23');
INSERT INTO `oauth_access_tokens` VALUES ('35a84555c59d5f9598bdc7e2b689eb22bd5ed27cd99584e552ce221414ee6b2990293644657debbf', 10, 9, NULL, '[\"*\"]', 1, '2020-10-19 22:36:31', '2020-10-19 22:36:31', '2020-10-20 15:16:31');
INSERT INTO `oauth_access_tokens` VALUES ('2e7547f1b63bbcfd9597e850b4645cdef5403e00c4b32d4d20885078c64bbadc6bc6fa953393cf8d', 10, 9, NULL, '[\"*\"]', 0, '2020-10-20 15:50:31', '2020-10-20 15:50:31', '2020-10-21 08:30:30');
INSERT INTO `oauth_access_tokens` VALUES ('6407439acabe80b6d964a7f8a0102f185ab9d039d3506f1b2f0a5b21ba0eecac7493db622910ce48', 10, 9, NULL, '[\"*\"]', 1, '2020-10-21 00:27:04', '2020-10-21 00:27:04', '2020-10-21 17:07:04');
INSERT INTO `oauth_access_tokens` VALUES ('4122716a97683985ec357dd084aed4a498a7bffaaa97671fabd02a53b520b564d8f7405338d271d4', 10, 9, NULL, '[\"*\"]', 0, '2020-10-21 18:06:58', '2020-10-21 18:06:58', '2020-10-22 10:46:56');
INSERT INTO `oauth_access_tokens` VALUES ('5475031aa96340de2266b7f07eb0a8c99f589902bea06c3f8e7bfd1e500d9f2b988539438e8958bf', 10, 9, NULL, '[\"*\"]', 0, '2020-10-22 05:29:47', '2020-10-22 05:29:47', '2020-10-22 22:09:46');
INSERT INTO `oauth_access_tokens` VALUES ('68ae2d8cdda3d318ce8b55cd26eabacd8e757a942bfbef1f766a1286ae76508e09ab9e18e227c2f3', 10, 9, NULL, '[\"*\"]', 0, '2020-10-22 05:59:20', '2020-10-22 05:59:20', '2020-10-22 22:39:20');
INSERT INTO `oauth_access_tokens` VALUES ('0326e9c9b1d94570cd5c685539fd7464e71092934f931b8a91295d1c6fcf35aac8521d7cc29a111a', 10, 9, NULL, '[\"*\"]', 0, '2020-10-22 06:07:09', '2020-10-22 06:07:09', '2020-10-22 22:47:09');
INSERT INTO `oauth_access_tokens` VALUES ('3cc5fa2aea009308c78fb8f86309ea7d6d6297f6e9e41c01a7649f3c069db7da3740c4a40b823fd2', 10, 9, NULL, '[\"*\"]', 0, '2020-10-22 06:13:39', '2020-10-22 06:13:39', '2020-10-22 22:53:39');
INSERT INTO `oauth_access_tokens` VALUES ('75e01244e2548b4e66a4c3f0edd4dece1432c6a24b6c21700fa162397c4531b9785436bef24de741', 10, 9, NULL, '[\"*\"]', 0, '2020-10-22 06:20:51', '2020-10-22 06:20:51', '2020-10-22 23:00:51');
INSERT INTO `oauth_access_tokens` VALUES ('e9a14af721ef94a4bf8bd0a4bafde2ff038e24487efcbd81fb98dac596ddbd1b34123be0dae82bdd', 10, 9, NULL, '[\"*\"]', 0, '2020-10-22 06:29:26', '2020-10-22 06:29:26', '2020-10-22 23:09:26');
INSERT INTO `oauth_access_tokens` VALUES ('1845067c37ae12af28d2531afb825fd43035a995cfcf665b700ed3b623a9d4ca61b88b93ba8c777f', 10, 9, NULL, '[\"*\"]', 0, '2020-10-22 06:37:36', '2020-10-22 06:37:36', '2020-10-22 23:17:36');
INSERT INTO `oauth_access_tokens` VALUES ('17351dd2db3951718d86fd7ab162141658bfe5a50d826be8e57fee33d88b8b4f80f6e84ce7be16aa', 10, 9, NULL, '[\"*\"]', 0, '2020-10-22 07:01:58', '2020-10-22 07:01:58', '2020-10-22 23:41:58');
INSERT INTO `oauth_access_tokens` VALUES ('ac05a7ea5decb11a1de9cf5e512f96d630fc960f7ac116bd0d7ca4d22aa968f63c4fa08387595a1f', 10, 9, NULL, '[\"*\"]', 0, '2020-10-22 07:05:59', '2020-10-22 07:05:59', '2020-10-22 23:45:59');
INSERT INTO `oauth_access_tokens` VALUES ('782330bb6b99d1756bee407cad8ed9aa11f5fdb4c2cd0afa5e351b11690fefda5b80ae8af086b9fc', 10, 9, NULL, '[\"*\"]', 1, '2020-10-22 07:07:08', '2020-10-22 07:07:08', '2020-10-22 23:47:08');
INSERT INTO `oauth_access_tokens` VALUES ('53a7d11f2ac8dbddbd5d114497a45687c2880460afca914da1537a08f2fc3dbd92359698d765456f', 10, 9, NULL, '[\"*\"]', 1, '2020-10-23 06:33:10', '2020-10-23 06:33:10', '2020-10-23 23:13:10');
INSERT INTO `oauth_access_tokens` VALUES ('c7929824934c87592af69154c116229aac8c659019657fcb0110e031632bc98e2dcae1e28c4b72c2', 10, 9, NULL, '[\"*\"]', 1, '2020-10-25 12:38:13', '2020-10-25 12:38:13', '2020-10-26 05:18:12');
INSERT INTO `oauth_access_tokens` VALUES ('ada80fd93fdc9c52900d987d0c640069a876ee3dc6a727f6f6193462539ddba067626418e5948486', 10, 9, NULL, '[\"*\"]', 0, '2020-10-27 13:57:18', '2020-10-27 13:57:18', '2020-10-28 06:37:16');
INSERT INTO `oauth_access_tokens` VALUES ('d0453c79c3dfc54dbeec88d4ca36af7ff3dc32a779ce1857075c3f70b55e9a6bbad7db9450ca9f38', 10, 9, NULL, '[\"*\"]', 1, '2020-10-28 03:26:29', '2020-10-28 03:26:29', '2020-10-28 20:06:29');
INSERT INTO `oauth_access_tokens` VALUES ('c4a215788b2cf7d28087e44ffd4ac3eba8de8576902f724ccc93374ee70bf2cd2a8ad32670a4ce5f', 10, 9, NULL, '[\"*\"]', 1, '2020-10-28 23:05:00', '2020-10-28 23:05:00', '2020-10-29 15:44:59');
INSERT INTO `oauth_access_tokens` VALUES ('7423e0a02dd8c9f2b7b09259d42766cd815859fec5e168e7020970ea52a29542d3fe0af103475835', 10, 9, NULL, '[\"*\"]', 0, '2020-10-29 16:58:22', '2020-10-29 16:58:22', '2020-10-30 09:38:22');
INSERT INTO `oauth_access_tokens` VALUES ('31c7f89683267f86551b6931610d14819a1211e258eaa059e8c54f53c45bf764d38ebbb6a583098b', 10, 9, NULL, '[\"*\"]', 0, '2020-10-29 19:05:50', '2020-10-29 19:05:50', '2020-10-30 11:45:49');
INSERT INTO `oauth_access_tokens` VALUES ('f247799db3ebab8dbeb175add0c04b07f560d10fb30d5ae98516a7785db62464db33c30825cf8cee', 10, 9, NULL, '[\"*\"]', 1, '2020-10-29 19:34:24', '2020-10-29 19:34:24', '2020-10-30 12:14:24');
INSERT INTO `oauth_access_tokens` VALUES ('76fdbffd0fdbcc23bacddfdf188f5b5001f07a9f28cb15d35010c373109e71fbdfd8bee35759945b', 10, 9, NULL, '[\"*\"]', 1, '2020-10-30 14:41:19', '2020-10-30 14:41:19', '2020-10-31 07:21:18');
INSERT INTO `oauth_access_tokens` VALUES ('5a55b410ad2e9a539242d9fadad8f583fcaec496ebafbf751fad2638c25a49f8e57825ee0f868dc8', 10, 9, NULL, '[\"*\"]', 1, '2020-10-31 07:26:16', '2020-10-31 07:26:16', '2020-11-01 00:06:16');
INSERT INTO `oauth_access_tokens` VALUES ('6958429029fae17029c5e3ab223a3ec806f0f7729b4d1116a8d414bf4a45fc575ee9f8f496a5fe92', 10, 9, NULL, '[\"*\"]', 0, '2020-11-01 12:42:53', '2020-11-01 12:42:53', '2020-11-02 05:22:52');
INSERT INTO `oauth_access_tokens` VALUES ('7f37103b6e47940ce4232f6677ff9a74cfc1f3247f769afdc809a6793ebc234e248cd994deecb7f7', 10, 9, NULL, '[\"*\"]', 0, '2020-11-01 21:45:37', '2020-11-01 21:45:37', '2020-11-02 14:25:36');
INSERT INTO `oauth_access_tokens` VALUES ('9ac1b66f708991d9cfb1a88c4bb169e298faeb146757455640bce11758f2730747f04995abf6f9ff', 10, 9, NULL, '[\"*\"]', 0, '2020-11-02 04:39:16', '2020-11-02 04:39:16', '2020-11-02 21:19:15');
INSERT INTO `oauth_access_tokens` VALUES ('fc3cfa76e155a723f995807db48cf60ae39984825a18749febf5973c52b3460e425bb22456bdebc1', 10, 9, NULL, '[\"*\"]', 0, '2020-11-02 10:06:36', '2020-11-02 10:06:36', '2020-11-03 02:46:36');
INSERT INTO `oauth_access_tokens` VALUES ('c30dec3a44f139c2f30eb522d825c423cf7499ac1131aa82e11a949c32462b065d383b9e6d17aed6', 10, 9, NULL, '[\"*\"]', 0, '2020-11-03 01:06:27', '2020-11-03 01:06:27', '2020-11-03 17:46:26');
INSERT INTO `oauth_access_tokens` VALUES ('c57185d7fe4c4f77978bd17adfb89eff63217e88660e8e0c4704fb1513dde5d368f2d8d337deade2', 10, 9, NULL, '[\"*\"]', 0, '2020-11-03 04:44:25', '2020-11-03 04:44:25', '2020-11-03 21:24:24');
INSERT INTO `oauth_access_tokens` VALUES ('a2f10e27a821cbf4fa621a129aaff9f77b8a89a327fbcd3136f603d74bb6d09651728271deac6029', 10, 9, NULL, '[\"*\"]', 0, '2020-11-03 16:41:25', '2020-11-03 16:41:25', '2020-11-04 09:21:25');
INSERT INTO `oauth_access_tokens` VALUES ('cc798d4d6741b20f9b37ddfd6c9b8371abdcc9ccf7e1440231ff93cb585493c3ee13798477f92e73', 10, 9, NULL, '[\"*\"]', 0, '2020-11-04 00:45:56', '2020-11-04 00:45:56', '2020-11-04 17:25:55');
INSERT INTO `oauth_access_tokens` VALUES ('3bbc0c138b73b911b719d52c55e3b385710f8f4d938f0c59e4cfc8daf4ae84082abe0090a45c69b6', 10, 9, NULL, '[\"*\"]', 0, '2020-11-04 02:24:10', '2020-11-04 02:24:10', '2020-11-04 19:04:10');
INSERT INTO `oauth_access_tokens` VALUES ('d9a6c64773c1ac66e30efb564985771d721f20d909b9e4acb1dc0ce1a6854835aeb1402b69ec6584', 10, 9, NULL, '[\"*\"]', 0, '2020-11-04 02:30:34', '2020-11-04 02:30:34', '2020-11-04 19:10:34');
INSERT INTO `oauth_access_tokens` VALUES ('6236c05ec1bf3ffa861124701315e0be9972dfbc4a0fa97e13608fb25043f959ed112bd33c9e3e5e', 10, 9, NULL, '[\"*\"]', 0, '2020-11-04 03:23:34', '2020-11-04 03:23:34', '2020-11-04 20:03:34');
INSERT INTO `oauth_access_tokens` VALUES ('a039805070516d42044ca79241617d88eebd4d9b4b22bce554e533f05ce632d27db537dea35f598b', 10, 9, NULL, '[\"*\"]', 0, '2020-11-04 05:57:43', '2020-11-04 05:57:43', '2020-11-04 22:37:43');
INSERT INTO `oauth_access_tokens` VALUES ('40b9d66a2f2dcd6f2d65736b0bcec564ae2ee02a72bd216de255acfc99f3eb0755eebed63bc61730', 10, 9, NULL, '[\"*\"]', 0, '2020-11-04 16:58:16', '2020-11-04 16:58:16', '2020-11-05 09:38:16');
INSERT INTO `oauth_access_tokens` VALUES ('2e495cbcf1902cfc618673a9512488eed42469c557bf80c255687ee90fab32752db767eea2d6953a', 10, 9, NULL, '[\"*\"]', 0, '2020-11-05 23:45:31', '2020-11-05 23:45:31', '2020-11-06 16:25:30');
INSERT INTO `oauth_access_tokens` VALUES ('9b43e20395f19c1adf75f36596ac22fcc7d0a353d1c9556a38d31a7a597f079f18bfd613980fde40', 10, 9, NULL, '[\"*\"]', 0, '2020-11-06 01:23:38', '2020-11-06 01:23:38', '2020-11-06 18:03:38');
INSERT INTO `oauth_access_tokens` VALUES ('ea94cc66b1253b6a8899fb3c3648c17dd605b1832567ef28be2e893ab87af5b18a8318f8738069bd', 10, 9, NULL, '[\"*\"]', 0, '2020-11-06 05:26:04', '2020-11-06 05:26:04', '2020-11-06 22:06:01');
INSERT INTO `oauth_access_tokens` VALUES ('ca73b0243734bdfc8cd14a34ab885d8f0d0134dc640c3ab659a2c073ee6ecad72e5af3fc42ba58cf', 10, 9, NULL, '[\"*\"]', 0, '2020-11-06 05:35:31', '2020-11-06 05:35:31', '2020-11-06 22:15:31');
INSERT INTO `oauth_access_tokens` VALUES ('a38c2d6555922b125c768fa3645fee0a7211016d43618af70eed3c2d1b446484684e7b99ba5ba042', 10, 9, NULL, '[\"*\"]', 0, '2020-11-06 05:37:17', '2020-11-06 05:37:17', '2020-11-06 22:17:17');
INSERT INTO `oauth_access_tokens` VALUES ('800d96a07d0640756da3ca5b8eb7f4d22647bcba32b2218221963b277c43d7dae7cb17d095cb8cb0', 10, 9, NULL, '[\"*\"]', 0, '2020-11-06 06:00:25', '2020-11-06 06:00:25', '2020-11-06 22:40:24');
INSERT INTO `oauth_access_tokens` VALUES ('68387ea28288e048a905a71afea13e3bb6c398603b1cd1c8ea2b9d6afb061348a561a8bac198434a', 10, 9, NULL, '[\"*\"]', 1, '2020-11-06 09:29:59', '2020-11-06 09:29:59', '2020-11-07 02:09:59');
INSERT INTO `oauth_access_tokens` VALUES ('f08d9d7870202294aef8b55e54e645d8e581fd475b6d0d31cb85139bbd645e4ec35b00383ec4ebf1', 10, 9, NULL, '[\"*\"]', 0, '2020-11-10 03:50:32', '2020-11-10 03:50:32', '2020-11-10 20:30:32');
INSERT INTO `oauth_access_tokens` VALUES ('ce86e5ca12d31dd17964ec2decc8d0a7c17c8c3cc5a7408203f86d209fc61c6aaa5fd6d8cd91c92e', 10, 9, NULL, '[\"*\"]', 0, '2020-11-10 03:50:34', '2020-11-10 03:50:34', '2020-11-10 20:30:34');
INSERT INTO `oauth_access_tokens` VALUES ('cc6650ebe85a7e26aa6c36669fbbd7ec30e064dafec7aa17912e28509fa83ae6ca4ccfac8bca6843', 10, 9, NULL, '[\"*\"]', 0, '2020-11-10 04:13:45', '2020-11-10 04:13:45', '2020-11-10 20:53:45');
INSERT INTO `oauth_access_tokens` VALUES ('cdefc7cf201c880d9c4f1e96cc32b52a9b2b3d0d17fbdfeb65353ad3bfb5add8c741960b3299028c', 10, 9, NULL, '[\"*\"]', 0, '2020-11-10 04:14:06', '2020-11-10 04:14:06', '2020-11-10 20:54:06');
INSERT INTO `oauth_access_tokens` VALUES ('f10059636d18c938442cf0cba5fd843fa7215f35e0b6d7d531cf0b8b770eaaf54064fff8570e0531', 10, 9, NULL, '[\"*\"]', 0, '2020-11-10 04:43:07', '2020-11-10 04:43:07', '2020-11-10 21:23:07');
INSERT INTO `oauth_access_tokens` VALUES ('1a2d836dfbb44ab835fad89cebd8a128f0862e89e48d99cc5c523de65ea683e76f075f9b75db74d5', 10, 9, NULL, '[\"*\"]', 0, '2020-11-10 09:40:47', '2020-11-10 09:40:47', '2020-11-11 02:20:46');
INSERT INTO `oauth_access_tokens` VALUES ('60b826843ca236fab35ad11cf31b093e760c73e82bbfc0c0ad409d0814d8d43b643be115b3355fd2', 10, 9, NULL, '[\"*\"]', 0, '2020-11-10 10:45:33', '2020-11-10 10:45:33', '2020-11-11 03:25:32');
INSERT INTO `oauth_access_tokens` VALUES ('b04e5cfc8664c4286f445367b7f089febf2d8ccb1ccfa45310376267bbca0ab50c14d00b0b19c857', 10, 9, NULL, '[\"*\"]', 0, '2020-11-10 13:45:54', '2020-11-10 13:45:54', '2020-11-11 06:25:54');
INSERT INTO `oauth_access_tokens` VALUES ('e413617d3a460c955efbfa73ef4ec42fae09816086f43d18d66e6c3a8f75ea9017de3207cea5530c', 10, 9, NULL, '[\"*\"]', 1, '2020-11-10 13:47:59', '2020-11-10 13:47:59', '2020-11-11 06:27:59');
INSERT INTO `oauth_access_tokens` VALUES ('4a467a59fa0db206d0313cf8bf1666f726df0951ed9dcd8c999388e4acbc0ed4c6e8da4daf01c032', 10, 9, NULL, '[\"*\"]', 1, '2020-11-17 13:07:46', '2020-11-17 13:07:46', '2020-11-18 05:47:46');
INSERT INTO `oauth_access_tokens` VALUES ('58358af10bd016a9ea99ccebe5b974f300a71f1e2546d4c2bb9edfda9417f2048b87d3c37dd6edd5', 10, 9, NULL, '[\"*\"]', 0, '2020-11-18 10:23:28', '2020-11-18 10:23:28', '2020-11-19 03:03:26');
INSERT INTO `oauth_access_tokens` VALUES ('915b5cc10ced6982839344320887ae96fb188a0e690c832ddfb9ea646e68130278faa2b2092137cb', 10, 9, NULL, '[\"*\"]', 0, '2020-11-18 11:57:32', '2020-11-18 11:57:32', '2020-11-19 04:37:32');
INSERT INTO `oauth_access_tokens` VALUES ('18579a5e9e57134b8eb6f778917e61a695ca81d6fc8c6bf7e90d10b82f2e340d05ab0842716c143b', 10, 9, NULL, '[\"*\"]', 0, '2021-01-21 18:37:02', '2021-01-21 18:37:02', '2021-01-22 11:17:01');
INSERT INTO `oauth_access_tokens` VALUES ('a1c20b88a5cbca6c85db635820b07fc80dffe2b683c6d0556bd4f18faa9e4295d41ff1b57df774e0', 10, 9, NULL, '[\"*\"]', 0, '2021-03-04 02:45:31', '2021-03-04 02:45:31', '2021-03-04 19:25:31');
INSERT INTO `oauth_access_tokens` VALUES ('33c8e1e78d4e7717a9e7b5ed6ef997d2c34f60dd92d27a12899b958830196cf7609769cbff288cb8', 10, 9, NULL, '[\"*\"]', 0, '2021-03-04 02:45:41', '2021-03-04 02:45:41', '2021-03-04 19:25:41');
INSERT INTO `oauth_access_tokens` VALUES ('fee7fc86a0f28aad1e1b96cf3892194e6a86aa555bdb457639e9b860d5434b7a57ba12d94941102f', 10, 9, NULL, '[\"*\"]', 0, '2021-03-04 11:53:08', '2021-03-04 11:53:08', '2021-03-05 04:33:08');
INSERT INTO `oauth_access_tokens` VALUES ('7402e55ae8f19b514350f14f738bf97699ad296610753d790871301358bdba48107c1980a6ce3b0c', 10, 9, NULL, '[\"*\"]', 0, '2021-03-04 12:03:35', '2021-03-04 12:03:35', '2021-03-05 04:43:35');
INSERT INTO `oauth_access_tokens` VALUES ('287ba3f49379f6a3632ef2820935af7177efd9497672344e113b45a4352d95703d2302575745ce10', 10, 9, NULL, '[\"*\"]', 0, '2021-03-04 15:06:34', '2021-03-04 15:06:34', '2021-03-05 07:46:34');

-- ----------------------------
-- Table structure for oauth_auth_codes
-- ----------------------------
DROP TABLE IF EXISTS `oauth_auth_codes`;
CREATE TABLE `oauth_auth_codes`  (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `oauth_auth_codes_user_id_index`(`user_id`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_auth_codes
-- ----------------------------

-- ----------------------------
-- Table structure for oauth_clients
-- ----------------------------
DROP TABLE IF EXISTS `oauth_clients`;
CREATE TABLE `oauth_clients`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) UNSIGNED NULL DEFAULT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `provider` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `redirect` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `oauth_clients_user_id_index`(`user_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_clients
-- ----------------------------
INSERT INTO `oauth_clients` VALUES (1, NULL, 'Laravel Personal Access Client', 'piCbScGU57AN3sGQaZ9NnuEURblJfEVC283jifnR', NULL, 'http://localhost', 1, 0, 0, '2020-06-23 10:07:27', '2020-06-23 10:07:27');
INSERT INTO `oauth_clients` VALUES (2, NULL, 'Laravel Password Grant Client', 'fA3x0yYWuWtJ7N5FNhHwVRFOry155Vk0QaLABi3A', 'users', 'http://localhost', 0, 1, 0, '2020-06-23 10:07:27', '2020-06-23 10:07:27');
INSERT INTO `oauth_clients` VALUES (3, NULL, 'Laravel Personal Access Client', 'eMSdmRQCqefwUA2peA2bzAaZ1H6GAizIeOtTmvId', NULL, 'http://localhost', 1, 0, 0, '2020-06-23 10:12:53', '2020-06-23 10:12:53');
INSERT INTO `oauth_clients` VALUES (4, NULL, 'Laravel Password Grant Client', '3UbOk6zRSkWzI64d56CWIn8pTeZdxaFvPgAhJP7z', 'users', 'http://localhost', 0, 1, 0, '2020-06-23 10:12:53', '2020-06-23 10:12:53');
INSERT INTO `oauth_clients` VALUES (5, NULL, 'Laravel Personal Access Client', '01nSC2caXxG1uqRLH5PdTKU497gnvhlWOeTjJ39a', NULL, 'http://localhost', 1, 0, 0, '2020-06-23 10:12:57', '2020-06-23 10:12:57');
INSERT INTO `oauth_clients` VALUES (6, NULL, 'Laravel Password Grant Client', '1RKkVuC94HBO4jvMWADykUB268IUzssTPyguYeqs', 'users', 'http://localhost', 0, 1, 0, '2020-06-23 10:12:57', '2020-06-23 10:12:57');
INSERT INTO `oauth_clients` VALUES (7, 6, 'orma', 'OfWsJaTugPSdlrhZuRctgpVCfN92BROoEF63m4iK', NULL, 'http://localhost/auth/callback', 0, 0, 0, '2020-08-05 00:36:46', '2020-08-05 00:36:46');
INSERT INTO `oauth_clients` VALUES (8, NULL, 'ORMA LOCAL', 'QDafIepYJbHblZLOifAqBpBwpvp52cFdgTIKCHmu', NULL, '', 0, 1, 0, '2020-08-05 00:50:18', '2020-08-05 00:50:18');
INSERT INTO `oauth_clients` VALUES (9, NULL, 'Laravel Password Grant Client', 'jq1aa3Qyg05qMQwty0Z1REvETptfxGrwn4nPkyZx', 'users', 'http://localhost', 0, 1, 0, '2020-08-05 01:05:15', '2020-08-05 01:05:15');

-- ----------------------------
-- Table structure for oauth_personal_access_clients
-- ----------------------------
DROP TABLE IF EXISTS `oauth_personal_access_clients`;
CREATE TABLE `oauth_personal_access_clients`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of oauth_personal_access_clients
-- ----------------------------
INSERT INTO `oauth_personal_access_clients` VALUES (1, 1, '2020-06-23 10:07:27', '2020-06-23 10:07:27');
INSERT INTO `oauth_personal_access_clients` VALUES (2, 3, '2020-06-23 10:12:53', '2020-06-23 10:12:53');
INSERT INTO `oauth_personal_access_clients` VALUES (3, 5, '2020-06-23 10:12:57', '2020-06-23 10:12:57');

-- ----------------------------
-- Table structure for oauth_refresh_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_refresh_tokens`;
CREATE TABLE `oauth_refresh_tokens`  (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_refresh_tokens
-- ----------------------------
INSERT INTO `oauth_refresh_tokens` VALUES ('7393f9e78f9eb61f9855a28fd8cc1a90265b515345a6a5bfb6decc569bb5fed213591a527f92f122', '388330fd1e5587bae42370d69c7071569f1ff96ca5b8556cf77ca839babd6ef3c131ce444cdaf92a', 1, '2020-08-18 03:42:31');
INSERT INTO `oauth_refresh_tokens` VALUES ('cf37e3299ce6cb3cb0b4fb4f58827f0afd6678a2baa21a8b60f90eefe754c22feebed44f2509a0ab', 'f1630dafc837e5cfca8bd62b1db8e3a43e7987a5eaeedab57fba0d4c9bf11b258d789702facff06c', 1, '2020-08-18 03:28:29');
INSERT INTO `oauth_refresh_tokens` VALUES ('931c4b89c4054d9d004f21e0dfce0d9f69500bde1b8fbefbe7c485197ea7b4aa71ce28e8b63430cb', 'b3dae9679ed4ed56996ee98f83691c8d5db1f2e66ee918c42af696343a794d5fc8beb28b616b1d6f', 1, '2020-08-18 03:17:41');
INSERT INTO `oauth_refresh_tokens` VALUES ('1e0825d8351aca878f7c265900ace62396f83f735b79df9129e4ecc911ee7f8f7eea889db44275dd', '785bebc61cf4ff1067e0e427976238e3449fe1a53c262066a287d01d7bc193fa0c0502e411fd76d3', 1, '2020-08-18 03:05:29');
INSERT INTO `oauth_refresh_tokens` VALUES ('a5dd2bf77e39c6e419c9b973d7d43fc87fd4832eda62fad7ed079d98ef829c76637284659e15eed7', 'eb91e90053abb15aee8420fe37768b44abf46a69cfa5821a5527d2150a0a0a8a29ca1bce608a76ab', 1, '2020-08-18 02:54:36');
INSERT INTO `oauth_refresh_tokens` VALUES ('a35b710249d3ce2ff4382fbdc6637e3fae924759fd5af1e21f2741dfaef6ce132e3b341450a6e27f', '41d059543d1ca004ea1ad5f72b72d6b6a469b1fee23e04141f3c4711d70c38d042d5f91e17766b12', 1, '2020-08-18 02:43:14');
INSERT INTO `oauth_refresh_tokens` VALUES ('eb6a8afda868bb29caff2371eabda65b77347a3ec1a84b7011142be1d19b4f72353d67b1baa02d39', 'e1abf8edd3e955e0bbfc7db163231ceb8a3d1918ad573fa67601b001d94862aed2ed7ce0dfcfc045', 1, '2020-08-18 02:32:49');
INSERT INTO `oauth_refresh_tokens` VALUES ('bea0dd4c5ed864cb309a40ee4bbdde87f227c582abe1dd272c414b9a265cd44ca6660f8da9f825a0', '2af78a3ae2e2ae869cc506cbaf05b0dc9b8dd55cb0e71c2023efd80c04cd2ee0547d28c70c30ea3a', 1, '2020-08-18 02:03:33');
INSERT INTO `oauth_refresh_tokens` VALUES ('37ac832c730a36504ddb163d0268174a53a25452edf2d2cc74052723e8a0e337dbc7471d671bfcf7', '8b51808002088c1bb78be76b24d11eef81c765b2b064fa713656781a87f00aefa6150289526493a6', 1, '2020-08-18 01:52:53');
INSERT INTO `oauth_refresh_tokens` VALUES ('ca21f5fbf4b60d7206337599fba729b33fac8e02f4cc96c838ff6b4630ddca1d6c5eeb30b209d01c', '5cce3747d3af973a346a9b101492d879ef99677c25dd2fe2ffe5c2ba884c05db7c6202a73212d164', 1, '2020-08-18 01:42:29');
INSERT INTO `oauth_refresh_tokens` VALUES ('59c84142ec627d2baaa3cf378a71cb2ce6e266606c1f39102ae0b24d02e06865eeb5ec3bc90db29c', 'c3e851c947e63db040696ca398eab5b959a27cea7e4af4dd8f13dc6c88f442a54c29a40ae7d9dafc', 1, '2020-08-18 01:30:16');
INSERT INTO `oauth_refresh_tokens` VALUES ('7142e0b5c078070ba03d16a0cadafa4aaec0c6ee4d9d6708b12adc37edc8122912694a3b314953a3', '268c4230e0e3b3d23a0a1cb5489f6d226731ac822aacc525f2f01dd0726d445ecfd376c723e8c335', 1, '2020-08-18 01:19:46');
INSERT INTO `oauth_refresh_tokens` VALUES ('e61656abc02d5f4ec270bb8d0033eb04d09a7c3d1bee8fa8e280b01676183fca962d3e33d330b6e8', 'd11472030de4293f3d020b44c1e17b396edb6679e4d190968d5f86ffe82dd6db6b6bfc49500c2d7d', 1, '2020-08-17 22:22:24');
INSERT INTO `oauth_refresh_tokens` VALUES ('c0b2c3714a912cdedcc09ff276306f8ede8566caa6957ae8a53c6c112cb9f93e029d6e33dc2b7d40', 'e0dad6f5e65358cf8a12739cd77abae4e073bf136042b94eb471fbfe51f23a67547b8c5035ec8dcf', 1, '2020-08-17 21:51:39');
INSERT INTO `oauth_refresh_tokens` VALUES ('24403094b15af8d438df7b323a4939f7d2b46e19bc82826b44d586485a484d87fb9e9b36317bf4a0', '6f7f21c7dee1c1d79ce7da5d4b43d61ce4244f2773787fdb6fd6fe3856118efb17b1d0c00ebfcc74', 1, '2020-08-17 19:50:07');
INSERT INTO `oauth_refresh_tokens` VALUES ('fddf842496e5504ed9181765bf30b243a684482bc10d7178fd9ac58c9a7b009d19cb7cfd8c38750c', 'ac9d37c853f5dcb1ef81fadf14c31da73d0abd5b9362ddbe94b1b9c79f1c1c8ad6e4baa4478bcb70', 1, '2020-08-17 18:41:56');
INSERT INTO `oauth_refresh_tokens` VALUES ('0b7f9c2907e715d1e73cba4cd702649af4cec86810848cc92e9db77f5785a929036e56e9ae9c79a0', 'b0b3beef2bd5c80e1541fb59418d8c247f5926c3533ef39b86d4401e233f493adbd94d6c4b8d6f79', 1, '2020-08-17 18:24:37');
INSERT INTO `oauth_refresh_tokens` VALUES ('de77988b15bed564b525414a7c0f655212c323f0b3513ad8c1870a0c27647684cfc34cd4919534cf', '637247e07d806abf7ce393f55678a01138abbe95e08528b771163fbed0632d10fb5ebe762904ae2b', 1, '2020-08-17 18:08:40');
INSERT INTO `oauth_refresh_tokens` VALUES ('d8520504c567d0b1a01b9eb723fc516ab28a691680ec562519e6c05aacbde936350ae77230346487', '7282366899fe5556e1500d4c20b9413892f7480767373115710a7041f1fcc60fc17f3ee68913f0d6', 1, '2020-08-17 09:16:04');
INSERT INTO `oauth_refresh_tokens` VALUES ('f1f7f687fb9b2ac09be36cfd14c548750f96b77aaca8bd502210297027b8be85311d05d101fcc8dc', '9aa8d0f087cffb964ad2714b2ca87a8873dc00387e0778166057cb9e3e8106abee48e04a62943acb', 1, '2020-08-17 09:05:59');
INSERT INTO `oauth_refresh_tokens` VALUES ('fa9101ac346fc12c2af34c383f7188cd8eb6e511c8f769572080af23e59add732066a35b8cacde34', 'a6a4f2b18a9aa3c25f3339043c7746542f469787a4548c93f57341e0766ec9a0b92a29d5c817ef6e', 1, '2020-08-17 08:05:26');
INSERT INTO `oauth_refresh_tokens` VALUES ('551bace217075c8c87d99a4cab0dda550a6062a2daf6443dd3eaf3bcae4c2a5db781409bc06f302f', '809aa7f7e069b490ac42be10b9570307985cfdbda3150a109ade57bfdcc53b4898019376cdf29da8', 1, '2020-08-17 07:53:31');
INSERT INTO `oauth_refresh_tokens` VALUES ('b4d6b6f36bdabd11fcd37e44e1588674fcf2deaf723923a5d3e441fc0b4bf15b751905f93eb3f833', '6416c02e9972d1c6a6bf8f80eba4561d590206e75bda96c684d8bf0119a8b85c2f89bb7b7b16a997', 1, '2020-08-17 07:28:39');
INSERT INTO `oauth_refresh_tokens` VALUES ('9bf60ae825ea5b53535985f76e2867bf05f38377b02d588cfb74eccd936fc90392726d5611085298', '9db94c962e1d2bcccdc3290a7eeeb2d27dc6706478656e62200fbf38cdd0596092475d587b85e062', 1, '2020-08-17 07:11:40');
INSERT INTO `oauth_refresh_tokens` VALUES ('23fc2e9517b3078aa640dfe440c3282a7df9ab5a584da068e44eaceae2e0ea902e6dc5aa8a9844ba', '68444ff4d5bc332fad4b6f3fb9572e613f4ec03ce5e0fe6e07a027bb6764dae4cf6901a7548bacb7', 1, '2020-08-17 06:45:42');
INSERT INTO `oauth_refresh_tokens` VALUES ('821aedf3312e476cb98be57a62debf8b68a88c1272e7b70d3685d0dd75dca234aabd0949115c7177', '4ae983efd6a8caa07a23f9b9c2967e568f61cee84d818bc6da816b54d3dfe6a3ff19bf012c26258e', 1, '2020-08-17 06:35:41');
INSERT INTO `oauth_refresh_tokens` VALUES ('8eab0f9844906b8403e0b99500671fdb6f6b0249cd2fd10b459969b7276c8aef792ee05e390ce09e', '0648c5b1d5be7f923354ece4f4016be9ebc105e4df7e3276269f034f37e412a0a02cf4e166b39741', 1, '2020-08-17 06:23:15');
INSERT INTO `oauth_refresh_tokens` VALUES ('e77eb5a85c62d0fe271edc9d510b681854886bfd6a72b81e5cf47abc410804b3ae181b47ed0bdfbd', 'a93bf44e85f08b59a007354d61ef188e9ea649607ce79bee6f48cf043a82585840c0a8468dab276d', 1, '2020-08-17 06:03:37');
INSERT INTO `oauth_refresh_tokens` VALUES ('219f1feda26c860eb5038c4147dddb069184df30237326099124b6fa2b5c800736d981bce8e30725', '1d27616db9527cc4a7ffc4de660eefbe322dd49c61dd2a4cea7a74de3226cce38c6faf4323ac349a', 1, '2020-08-17 00:33:33');
INSERT INTO `oauth_refresh_tokens` VALUES ('bac8429cbe3be91727f8cdd6434eb21bdccd7ebdde4c2e3bcbd8727053526d89f940c425af866286', 'e5f95914c35e35760149f9e7ff2942600f81c43bc46f2aae744c43b4905d6cd015f42126eb7b12cd', 0, '2020-08-17 00:33:28');
INSERT INTO `oauth_refresh_tokens` VALUES ('db7be918034276ce83d1eff627ce876a729a650a8e1e31af92de169b992a043cd3694fdfc6f9c785', '3cf8a24c4931979f9a7972fa2c57f320a36d3aeaf8386230df6fb7706c4c0c13609922ce824085d6', 1, '2020-08-17 00:22:15');
INSERT INTO `oauth_refresh_tokens` VALUES ('0fe7b39e4b7504e09fcfc7e0980a27767289328d7bc8788bee7b3793552298caeed7b7494fc58c4d', '9424a390abbe6032f28418c7ccd46d152ac665ea2d99bfeea55c996946a9defbe6ee71b2b1262b46', 1, '2020-08-17 00:12:08');
INSERT INTO `oauth_refresh_tokens` VALUES ('aa5b8619ce852c026d078825a7211ef58924b33b35b46ae3d1ea719dff2f9aecc5f6389c27fc6421', '80074a44a6739544aeb1cbd5ef6fce9fb7d57af2cee7b4c1d5044ec9654d6ba9200dc44412703f29', 1, '2020-08-17 00:01:02');
INSERT INTO `oauth_refresh_tokens` VALUES ('bdffed6a9d2f08a2779da3fa6db59043672b7a54cdc2c1245482e4e03570f32878117a128c210459', '09dae7e8d30f91186fbb66893538ee4d67d510c38b8ede430479d75a649bf58074c08cf0ea290015', 1, '2020-08-16 23:49:36');
INSERT INTO `oauth_refresh_tokens` VALUES ('ccaf4276eb66abc6c595b80e693777746530e27f0a48f72ce347eb903ccc8fe416b447aad2154cf3', '681e5fa6e4ccf1bbb24847f3eec9c27d61678ebb412de356dbec8f492f40ae2f4a0eb1cf04c34fc9', 1, '2020-08-16 23:38:55');
INSERT INTO `oauth_refresh_tokens` VALUES ('6ffee62103dfc45fc447fcf044c7bd571dbe3f375b138fa26179fe21a75438d90adb258948342c24', 'cf0034db56e1b6a350a2eb5e5aee93ee07802ebd74101406768092948902215ec86eb5d6033b4ddc', 1, '2020-08-16 23:25:42');
INSERT INTO `oauth_refresh_tokens` VALUES ('f1c829f6a670cfcf0ad719b4c3a657e7322ebe859f3e7ee8e56e00fcd52a35a8d59a072b79219f10', '6fb3b8fef5ed8f2689d096c5d41a06f17b39786a56129fa03b97d570010abc4eecf5175dca861e54', 1, '2020-08-16 23:14:28');
INSERT INTO `oauth_refresh_tokens` VALUES ('157a8a9f2d679d8181309f0bae66fcc1c5c86def809b8689efb5382aec7b517a15950c1f24b2173a', '367667b196ef3e42d46c53bdfa4d34ea1526a951d45dbca86c165b6ad5e1eacba173117ea4fe6994', 1, '2020-08-16 21:01:38');
INSERT INTO `oauth_refresh_tokens` VALUES ('c16b0b12afb4e8fbdc8e369ad10e24a1fbae59df4948e42f9b59e35793a7cf3115cb4dffca9f138d', 'a05ab2af17d9409254a275c42a813012134c0f7a7ba600f614a2aa239c2c1e6b1edebd22a73c2e5d', 0, '2020-08-16 21:01:33');
INSERT INTO `oauth_refresh_tokens` VALUES ('d3c2493973f1aa08f56c825a4959fe6a3d58ab0cc39b39aee0a3d3682156a4b4194bd72000950ebc', '11516d6c772d7fdc3817cfed8ada4f8565ead3f1fde4e26e922add3748e413149ab98747f8ebf981', 1, '2020-08-16 20:26:14');
INSERT INTO `oauth_refresh_tokens` VALUES ('4cca2cee1084747fc2e4ac05e60707ccf636c63b89badce0d1559d9689673b906065bc2b8a6e9533', '7c1cd3766f55aafa90299e155669049bac379fd091cfa080567cf8d785f58ef6ac2ac4b141fc3ffa', 0, '2020-08-16 20:26:06');
INSERT INTO `oauth_refresh_tokens` VALUES ('65757ce6f3deb85d5c5e7e6105b2d2e735c336240980ef36f52ccf30a6dbc83f8c0964b62f6e9855', 'edd253960bb1dded0c84b1e701389acbcf24f592cb0d15ba86475f02badbfb47798f01f3e304ee6d', 1, '2020-08-16 20:12:36');
INSERT INTO `oauth_refresh_tokens` VALUES ('2cd24e0fa3c6a04c088532db86c13f33d8fab4dc0d4e2e060ab8eeb0ae9b459dad2904a3ef74b044', '476cfced30d55d5c02713ea1ae7396862017c41c038b463284f081c54177795144e50bd1347a9060', 0, '2020-08-16 20:12:32');
INSERT INTO `oauth_refresh_tokens` VALUES ('abeecf7ee4e58e7c8199051bc235dd6009acf1349dd532ca54ed58a5e9a15f66353cbe9bf99f85ab', '131869228ace74cb39d2259e63008265a2da227299e450805ef4a50d1e8b675bd859010de4baa99e', 1, '2020-08-16 06:35:22');
INSERT INTO `oauth_refresh_tokens` VALUES ('9279eb03623604b548fbd042549935ce5007462026185847e5e2f6eb8e19e8d1867bc82862650183', 'c682c596e55d38f45bfaed325cb705755008b783c1959d6d02c2b063ec2acf8de135d229bb2d5a4c', 0, '2020-08-16 06:35:17');
INSERT INTO `oauth_refresh_tokens` VALUES ('76be8a5d2cab224668151f1ee1aae6b0af9695a68a6bbeec49973c162825391ff80847796cc8cdc4', '5190110c485f3b165eae9a3782b064061b7873c2874bae4c33e538494b48f99a7edeb0afac304e48', 1, '2020-08-16 06:19:46');
INSERT INTO `oauth_refresh_tokens` VALUES ('d48bb2cb2dacaf80249ccffa0041946654b2080853296491ce1bd9c9862fe7a3e5ff114021ef71d7', '867f2716cc83af25a0eaf673f91d488bd77560556323f3ae24cbd6968d7d4f8dd48e8931d3c5d986', 1, '2020-08-16 06:08:26');
INSERT INTO `oauth_refresh_tokens` VALUES ('315f523750d42eae652286df5ceaaaa10a108f42a1ab29bebd8e3536827c92ee7b2959da8ed5b5d6', '0e4c26ef6eb03f841776222b7976effdf79d25dfa3d1117d86310f9e7df1586f4d3cd2ed49159f65', 1, '2020-08-16 05:57:03');
INSERT INTO `oauth_refresh_tokens` VALUES ('4129530e5fcfd668893d5ceebaa37af7d79874ceb268c9a1a2aee5eee8018701c76d6f7f9a63f03e', 'c98140a7c5bd19bd62a3639e5fe83a6753f79ced955dc5fd6d601c402e4d17432500b1e194585180', 0, '2020-08-16 05:57:02');
INSERT INTO `oauth_refresh_tokens` VALUES ('745624cc5fbeec9c982e905b2686b8f20694f8d0a813e5103ba984328997b17d7f7360af4af77806', '67f8986c7f935df96bd2fedb3fb2e2c06951783d3befd95a02c98ff3aebcce031afe5d041c5c23ac', 1, '2020-08-16 00:28:59');
INSERT INTO `oauth_refresh_tokens` VALUES ('6f74f684cdf999366aac424200f5b00922e3ba144dd5fa7fa20121c7125d50d5ba112b0c9192a954', '0d59aa5db9589bf825bd50861c08426f1d6bb5a8bb96b441c95d06415f8b6f940064986642e28f47', 1, '2020-08-15 23:08:13');
INSERT INTO `oauth_refresh_tokens` VALUES ('4053c735df0b994314f4f265a6b3f6374a8991186e8a77d7237702f7deb501152c10088fa64270d4', '93e7cd7347e6264b7d49fdcb41342f7889b6be8e6aeb14d76691775772dc493e4bbf968fac521d68', 0, '2020-08-15 23:08:01');
INSERT INTO `oauth_refresh_tokens` VALUES ('d6882a17dcb25936e58abca437dbaffae9efc6bc01cb0bbc362d10984a109d2024df2d989be02f5c', '53f7af6c4f36237d56a088baf67953823855c68e8a24e180af570809e62bece81e0243fd97cf53cc', 1, '2020-08-15 20:49:56');
INSERT INTO `oauth_refresh_tokens` VALUES ('092a4174b62f9330538d904a5f5631d1bc21d3371c234459c5ff6d180471c17d5d639522c344d7d3', '05b4c6a91d8e08944598ad478418031236961ac0547fce16a47d80ca4d36ea21a67cb73779b0351d', 1, '2020-08-15 20:08:49');
INSERT INTO `oauth_refresh_tokens` VALUES ('96abc5c0e9d47b3ea6170149d8d2e0a81dc81e5e6534212a1015b982cb265a8054efc1221264472d', '84df37615c40935d8b7493ba95a97cca626b68e5babe752fa9e549939c2d8ba0f4a43c7603015d1e', 0, '2020-08-15 20:08:47');
INSERT INTO `oauth_refresh_tokens` VALUES ('93adc32ab702b31aa1dd0e0154d7f2a870c384af0aa9652189284006443f3f5ec07629904e8259fd', '6c83058c40249f7644b4e8a1f6949238a6bc960915996e4fba39c7bca5e867861ae64f2caf071fa6', 1, '2020-08-15 17:25:52');
INSERT INTO `oauth_refresh_tokens` VALUES ('99fd5e5b7730338bbda006f2900cadfaf52f6ba4c91f14c85414036c8dd47dbedb3542be2570ff44', 'f174304c15662c700b4925a03386ba0a7f4236e9975115c5331a8081e3ab0def5059f7ad8128f483', 0, '2020-08-12 20:23:33');
INSERT INTO `oauth_refresh_tokens` VALUES ('8d42392c1699a16b0a13219da18c2ae47738f59e4444864ddee24542d050f1d70fcbf55432593ade', 'd2cd0d16ab9bd6f30873ed01eaa4165c6cd09b946d6093c9bf84722366bcf30752648d0404f14bfc', 0, '2020-08-12 20:21:02');
INSERT INTO `oauth_refresh_tokens` VALUES ('56f6066fde692d157b3550a9c755263ffa8b3d63fa5ce01dc10c24c7dc6b0ae5689c64d9f2e72ef0', '0a4f57316e4b96bd89642820a90e840be6b7c52a33691006adcd81b09e08c0dd9dc0ef994fdf305b', 0, '2020-08-12 19:54:11');
INSERT INTO `oauth_refresh_tokens` VALUES ('d78a74cac43124abb1cd1dbc9aa830a505ffddf761744d11b33893c4c40036629d1f1cbf5f1d77a1', '316d864d791cfe69de7a4a0f7aabd028107bbba8e8f424344508ef6e06af451918c19fbbffe51e6d', 0, '2020-08-12 19:54:09');
INSERT INTO `oauth_refresh_tokens` VALUES ('1612de3c827a27508570536acc49bb4cba4af9348b818959011889fc537215e29f41762bba5150c9', '946714a8e38d0d7ed93c28e728ff6fb888566f895a13abdd8acce658bfbbf5652e0b168ddc1885ab', 1, '2020-08-12 19:38:24');
INSERT INTO `oauth_refresh_tokens` VALUES ('4db7308b946b16dea7086d8df7941a489783540d7e66e2fab1645f881453ccdea7b35cfadbcee995', '1b922ce24dc2ab1ca12923705c30a47d266224206c82ac7f23f6577ba741effca1e6e55956d967bc', 0, '2020-08-12 19:38:23');
INSERT INTO `oauth_refresh_tokens` VALUES ('1bc8e4a3ab928fa3d20055ddc81df37aaaf94676d53190374b90e7eecbd7be8c36366677a420d797', 'abae0ba7a0aefca0d02820039a2d37f444411caf8a25f1ce8935c6b6e27f4fe3e4c86b02bb5c886a', 1, '2020-08-12 19:28:18');
INSERT INTO `oauth_refresh_tokens` VALUES ('087fa9250fe539d233de3b11668832a994a4222e4694b814b666c24b7c30151bdd1cc423d79d5518', 'f86899346047a25a9031be44be9a59b1a8d354d4cfbe257d0a870e17b7c0939a3c1ff4dd473e8db3', 0, '2020-08-12 19:28:17');
INSERT INTO `oauth_refresh_tokens` VALUES ('d50f2cda88f4cae602e0384d907e68080e24045f140b3a14a56a691509fe3a0b9870068e0b5e2c49', 'b8a3b8976e9c79d0e554d5bb8e3ee9f08efd49c1ad8f1ef2abfaa7a7f789bb365b78b642b9404194', 1, '2020-08-12 19:16:57');
INSERT INTO `oauth_refresh_tokens` VALUES ('ea095dab33c64b4131d9b37ef754e73221aa35a99f844255463b4c6c764bdf7f26281fdd309b1239', '154f353a8e726fd9cf30bce06c481cb610d5b69b58229f117ae08ab5cb873ae5459454193bcb84ca', 0, '2020-08-12 19:16:56');
INSERT INTO `oauth_refresh_tokens` VALUES ('73117a315d1b440465f8b2d74284428c108b17b9688d19b3a6dbf9d1877632703cef0d03b3b51c89', 'b1d27d4934c3dc50e47d81ea8fc251781a05f0e9d62552d991ca237404a7899e2be89b56a9c3aa69', 1, '2020-08-12 19:06:03');
INSERT INTO `oauth_refresh_tokens` VALUES ('60ad309827aa6db8576ca328ec4443b3c77fd26a89d19bacb1f9a8e32b4133fe791e9a1cfe398a8e', '52347ae72e47a1b67d1cb67ef793c4475c3933c9b37686003ad2133ad39df48d43690dcf5ebe995d', 0, '2020-08-12 19:06:01');
INSERT INTO `oauth_refresh_tokens` VALUES ('524659daf88e46ee1f67fcdcdbbc4d8ea28c6e02e32ba7a75e9339d6d82f4a33063a159f5316d74e', '1759a41b2fc04d4a867051aa1ed5a8d4ad4e2175b9316c1f990a61c40465ac7a32c37a1c6409ae0d', 1, '2020-08-12 18:53:10');
INSERT INTO `oauth_refresh_tokens` VALUES ('5fead4929a626119c05a5c16944e707c25a296eb1aaea777433a262320a1845346e62efa075e0bf2', '7b6d7864103ee935076a6cc35c5acba9315d112e0defc8e409fd9b9454459b9563ad34dd7da031b6', 0, '2020-08-12 18:53:07');
INSERT INTO `oauth_refresh_tokens` VALUES ('3db2c9947ac70fe022fcff4927725f2f6ad2b0f1ebea504c352aab4725e966aff81169560283bcd1', '9a392e280da84d1f4b5f02999d5ac0f2754e5da00ecc16d85e6a605074d86d8124c868f9bef4561a', 1, '2020-08-12 16:33:31');
INSERT INTO `oauth_refresh_tokens` VALUES ('21c4d5701f366ed5bfad1442c017b53ca3fb48cda648201af240138a361b7c9981985eb8ea5734cf', '5cef4fa00fb96a2fbef79b9b20d2c09a84192f9562df44f34dd03c10561ed96ca6751dee5e820b65', 0, '2020-08-12 16:33:29');
INSERT INTO `oauth_refresh_tokens` VALUES ('cd1151a9bddde5dd2984575c2bc800ae95a13dc83628c286a553bceb59df24342aa104d5c57915ab', 'fd8fa3174c8a5eb98014e0ce7701059e39e82f2d0b2564b56e2526929d9d682fc2082d4d7d7fb208', 1, '2020-08-12 16:20:44');
INSERT INTO `oauth_refresh_tokens` VALUES ('154456716c716a50bf2bdc298edfb40a970d6c4e38a03287b50a4667c80e0d3c33436ad43805ac2c', '11083515cb7c4bd700406c927b865986af22e2701354ed40ca1d404ea12855a6c1cad001218a3a5c', 0, '2020-08-12 16:20:43');
INSERT INTO `oauth_refresh_tokens` VALUES ('a61f850f352f3f8d972e762b944c84b6d5b44fd9f3584044831ab634573a102ba703867a13d80a08', '0d9918e478394d964fb3953bd9aeedf4754ed88d4cd16aecc332a006c5d53a357aa286cc0a8a4da9', 1, '2020-08-12 16:07:09');
INSERT INTO `oauth_refresh_tokens` VALUES ('a32b8adac8e6dc21cb16d593bde94fe0c5ce17ae228e87b19843f012e67845d7ffc9f66c1cf1b452', 'e9883bc1dd228fea09aa6e9dd63139edeb6220cec8fadfd1231e6d74e7aa09b88754dd5afa19a78a', 0, '2020-08-12 16:07:07');
INSERT INTO `oauth_refresh_tokens` VALUES ('5535cc6b54e483785f69965833b84f6d0409784353a0a51fa8c4e1443cf36aad6fa87ca1ccd71350', 'a0e096ba1f60f7c3a4ac998f6c52983dd5881a2ee98cd59270576ceefa5996531513ccb99b74d8a5', 1, '2020-08-12 15:45:51');
INSERT INTO `oauth_refresh_tokens` VALUES ('e167db3c3d8567ab9cad3007b2058ebb5fca8db78d8ce754e7d90c21e40afd876b71dd9fdd739236', '7fc994f2b9d865d2be33587f16a8b556ad48535a99c2e45c46515e81d8df14791fae8bcfe4a224e4', 0, '2020-08-12 15:45:49');
INSERT INTO `oauth_refresh_tokens` VALUES ('c1f499e2a16875715fcf0eedf8c46def30a44bcc1cc30fbee03ff2a343d667c1ecaba28f02724cf5', '6716a94b93f452650e72b148acbb3747a922ee64de40823d58a788c6bddce2f80c2d2e4a4998f7aa', 1, '2020-08-12 15:27:36');
INSERT INTO `oauth_refresh_tokens` VALUES ('dfcf52f7aa7e81fa43cfb1d27357df96c29628a920dc541cd468f781288dfd389bb45b7d731f105b', '13936f0eb4ed192bcc5f0c57e0bbcd4da04b4c7efa61f6510c761e6276423339a48f77b34cf18261', 0, '2020-08-12 15:27:35');
INSERT INTO `oauth_refresh_tokens` VALUES ('8032c1de5dc28943ad1eab80ef87e4c9ae70f0ee861d9818e6ff7e9b496ae1fe135bb11fa23b823e', 'c3d8d649d891d23e9af95cf44bc1a030dc9a702473a29cabddd9d92d08a56c38245bbea58e4fd7ec', 1, '2020-08-12 14:42:31');
INSERT INTO `oauth_refresh_tokens` VALUES ('d6388bdd45dd26030359177ecb27437143c22707652c3f3ee7dda440f8b98e9321151dbb98a1e25d', '97c8ac2d80fcb557151db15a24ff5c8f5df463dd0d3850be5049d63e37e42886210fd2988e1bc61e', 0, '2020-08-12 14:42:29');
INSERT INTO `oauth_refresh_tokens` VALUES ('f9802f00e3e07d1ef5bb6f0afb53e820edf6dd878ae1f38b551fdb1aa1c211573f5545b109cd20af', 'fdf24772f0bbd4a84888c207e83c8f38cfdcf2f428a38d49848aa33832a4c7b379b03e33a7bbd611', 1, '2020-08-12 14:27:45');
INSERT INTO `oauth_refresh_tokens` VALUES ('4115fcaac93838859142b01e120192d29428489f8d0cbe16b359db04a7dfce5af8d520df2ae9fcd8', 'bb8feb6f482b0f8fb2c40dfb4cf88a2f86a04a307b88c31f0e8591d6960547d76659c84aac7d8ad0', 0, '2020-08-12 14:27:44');
INSERT INTO `oauth_refresh_tokens` VALUES ('4359d48dba802b71cfab2ad9bf5085ed269324663e7ac576a84be974efc4d1812057a2385d466bee', 'e10c5c868f559578bc787f17211c1bf1c8a85edc494dea047d572434d36d23e2e7a3b0df9c0ffbc6', 1, '2020-08-12 14:16:39');
INSERT INTO `oauth_refresh_tokens` VALUES ('3f3ccd7ef065059c9b21aefaabd296ddcf6a9ca58dddd3f2d8d71ac47d8844d58f426ce44c1f8e13', 'd8f0aaaa0231c62249f108b72dc3a643335f2ca03c17af8f99f2ad504debf93a7f35cff90b025bdb', 0, '2020-08-12 14:16:38');
INSERT INTO `oauth_refresh_tokens` VALUES ('8940aaba16e05d11aff1737e3bfaefb9a7758015138e060df18dcd06413d4c32e73f5352463cedd5', 'f60518dca120a9c77823a8a3de7f54cb873ae6e37285ee924e677ad35881fa47886985684bb39a53', 1, '2020-08-12 13:57:35');
INSERT INTO `oauth_refresh_tokens` VALUES ('5f1ccf56e3908c49bc0cd8189f14218567ca50bf573a18f372076d892239f68a0a54d1d6d291fc14', '7f3a73031b9e8f6cda120973c6dd4a9dc241ed6bb721b94ad5df9973b33e336f4b54d9ee2956a2b2', 0, '2020-08-12 13:57:34');
INSERT INTO `oauth_refresh_tokens` VALUES ('776123a2242c4e10524f0611ddbd6d5d3cce7259b30dd14d1a1e273eafd70d9088273b7363bb97b1', '47bd685a3c3a358444e6d6be44b281d2b5f118be808e6c610e6eb6ce0d8d281f9b71ab57e8362c1b', 1, '2020-08-12 13:47:03');
INSERT INTO `oauth_refresh_tokens` VALUES ('af05dc7c832f3a2800d84df69640c3d6f08e3569397ef476731208ace6a24070dcf35ad4edb699ce', '1cad7a3f78e060579adb7613ba2448ed56a9d0a3565f7a8f63270a183ab933d8b6bdfb8bacf8d4cf', 0, '2020-08-12 13:47:01');
INSERT INTO `oauth_refresh_tokens` VALUES ('3740de19ccf338da2d572169bb9da70e38b2e8513635ad884573d2fe00c82b1986c31502acffe2c0', '7d9f4e76ebbfe1c90f31224eb2dd0849f9bc724b4f5d0ce826579427c1dc789f5a243cb23f1710f7', 1, '2020-08-12 13:27:47');
INSERT INTO `oauth_refresh_tokens` VALUES ('533171e2950f3d699b3280b48a245162310bacf6e890fcbf7e97a51f60354184fd4fda35873fe47c', '79f6e12711765d18ead2303dbe07f650c3cec9e818259ef1c0688582e4cde016dac1f129132df683', 0, '2020-08-12 13:27:46');
INSERT INTO `oauth_refresh_tokens` VALUES ('1e9ffbe1ea538e6e49530c4eb0b1c4b6e6c41727a1ae8cfb51bb1d58ed74474c7c206d1970aa61f7', 'c32db2129b75cce46508aad1054f185424068f4e85a63fae6215ff85ea9fb244490f9ca74c9e02e6', 1, '2020-08-12 13:17:09');
INSERT INTO `oauth_refresh_tokens` VALUES ('f7b13dca1b10bb73b755d52a48d6c5306d38177dc1e17d22d89321530f72e27b8d9335dec1a98b6e', 'bda47084543f77b149676189dca82a077f887e7b6e3f1a16285c9ff8987ccb91d100be30e6a4c1b5', 0, '2020-08-12 13:17:08');
INSERT INTO `oauth_refresh_tokens` VALUES ('1f1cd7e031411404c163d166123ebc2c51c8b37bb995246a25946910ea1e0f68967e9248e446f181', '9298b5479d0bf9e4c51dcc17da158cfb8d10bf7faa296f8c334eaabd54c4d6d3b82f8754a8eb642d', 1, '2020-08-12 13:03:46');
INSERT INTO `oauth_refresh_tokens` VALUES ('5cf0e24dda0b06c8aad2d3d42affce0ade44686d7bdb7968d8b037c440f7a68d75ec6a8ba2be5d33', 'e04d8f1ea05f001da51d6507d33af06096eeeeba9b2ad3e2581c7c66494a514982e8caa9a7246af8', 0, '2020-08-12 13:02:04');
INSERT INTO `oauth_refresh_tokens` VALUES ('c61e591fb99de61b611b8447a847bee520d0e3b156664c88ffb60f161df398281effa9ccfb02abc4', '6f750ebaf74f3ab286f7dfd2a6572afdd39c77356f9c6546bd990e75956b44d39a70e8a2a567470e', 0, '2020-08-12 13:02:03');
INSERT INTO `oauth_refresh_tokens` VALUES ('e37b02f7bdfac7f37d45564be9e05dc52f8cb41a44b4f5f8d43dab6abb021f64382e423463ad8730', '6d972329a189303da225e5515d4100f4bef4f72284e6403faa893611bf446b807d30cb22a8e89fa0', 1, '2020-08-12 12:48:44');
INSERT INTO `oauth_refresh_tokens` VALUES ('a3d6bf19b73176f9dfce0efeea6ebc08e2bdd5f27856195807427639dacbdc2bd636c647130ef3ac', 'b88ea58e41efa25f5d6bb3c866d86ea0f94128ef80ed7eab6246e6125ff28794d9dce360cf4dd2da', 0, '2020-08-12 12:48:42');
INSERT INTO `oauth_refresh_tokens` VALUES ('9f1e1d2fb14f414aeeeadff33956e97d672983f277819d8111c2296b1eefdeee685510f560c15e45', '492139f4120da98ded70fb3ef1f9980b0051bdf8d34298c489e08c6c3b64383bb5602f0533ab71b7', 1, '2020-08-12 12:38:20');
INSERT INTO `oauth_refresh_tokens` VALUES ('0e2db9e481516b7d4c7032d9772532777d808f1172462036b37359b7f4cdf386bbba12b111f2eb2e', '7cfdd516f381bf1cb7b03f44111d13fac29151dfa08f98cb9dab119780ed791bae082b443b420879', 0, '2020-08-12 12:38:17');
INSERT INTO `oauth_refresh_tokens` VALUES ('5199995e838922bd41fc441935f39f8c703f38d8e876e56c7d2c4778a30e94ddc1d5a316f0dc55c9', 'e67e3f331b767da16c98e849f3ba4647f67dec031ca308772b6a49acbc802314a77d4bca497d97ac', 1, '2020-08-12 05:56:27');
INSERT INTO `oauth_refresh_tokens` VALUES ('83a5a71510d7a3181944f517b1fd78831b7cac87bbad1d9ed1f8b91c5910f4203bb42f227a494f8f', '30e41bfa8487f9c74853703b9c6a0028034fd06d85ebc750d6bc1e96c65fb588b5f25dbe96780bf4', 1, '2020-08-12 05:46:24');
INSERT INTO `oauth_refresh_tokens` VALUES ('456d58f61cf3000c0db556b4fd66acd07b25f8a8204473c46ea5dbccfad311df3ab9bfd8f6a87a8a', 'd593ec79b23aa7a5b707abba66d73881a13b4957ef4cad2aae163e8f4af74e75ac23c391b61a231d', 0, '2020-08-12 05:46:22');
INSERT INTO `oauth_refresh_tokens` VALUES ('0c0657a3118c2605c82b1d0aff6fd689adc968261b13e168dc88bae832f84fa7fbd242073ae57952', '07014803eabd084b77a0745eebe473f2fa4a20b59c4b1188ae26a71f8594492f665dcaf5770ba3e7', 1, '2020-08-12 05:35:41');
INSERT INTO `oauth_refresh_tokens` VALUES ('0997593b6141e5d0d008095c207dad62de5856db791e6d057fce6610946f9cbe221924e61f56bb71', '3d5c94758da9d527b27722763983524746111ac68bdc3c12b8a04acd6a78fb91ff87c3e2d4f40eed', 0, '2020-08-12 05:35:40');
INSERT INTO `oauth_refresh_tokens` VALUES ('161980d9426b9642733da5d6aeb8f4c8835a7e5e5139a3a9a2b73550827a8dcb6c0090e6466d7f43', 'b22c5875706eca16db2a7eb61fa1ce1074c961e46587db15dd751ef29faa9662718bb3b49b8f2f7d', 1, '2020-08-12 05:19:44');
INSERT INTO `oauth_refresh_tokens` VALUES ('75b60f01753c8bd30a3d3f46cf95c0c520bca67e4eb866b825fefc4b2b41b606c934aadef6464928', 'de95876a81911bcecdb508df9047141ccbf11b74451f94016c4c7534c89b4c79c1633a79ef6a26ca', 0, '2020-08-12 05:19:42');
INSERT INTO `oauth_refresh_tokens` VALUES ('69fc289117705a67827d2cea5ec8da2921fdd9a2cc9c0be4c62009baaba9a91067778aacfeb45b56', '6b83c05cc0fbc15e919c6ad736e3305ff62154303cf4817beaf5c36a7464ed4a9a7827c8dec3da3a', 0, '2020-08-12 05:04:56');
INSERT INTO `oauth_refresh_tokens` VALUES ('18c28fed9c024bc20cd4af2dbf80374a774ef3ba201a10b4243245c891bde582c602dca9e6783a56', '553d223be465e3e7fddfd201a9d45929b004bb2108fe29e74bcf53d57678d93fc2b91fa95d326a5c', 1, '2020-08-12 05:04:58');
INSERT INTO `oauth_refresh_tokens` VALUES ('d059a20e7c757074cd51020e91f52678b40936be5d5c86c0107a37a0ad6ddcf63050ac56c8663bf2', 'bc087ebaa73c6a8828a474087cdcd80c9138062ae4facc419d3ac0e6fe2fe857f0ed5ec819d4df51', 1, '2020-08-12 04:52:27');
INSERT INTO `oauth_refresh_tokens` VALUES ('ec2e849194ced5cb87437af9a576058088c0f52ce230a19fd1c6ab487265f20a897a718a4d72ae71', '102e0eb72858cff8827cb86e71b6eccd4eaad47afcdf24c2ce9c5ed70cd0d86e68b09b9499269438', 0, '2020-08-12 04:52:24');
INSERT INTO `oauth_refresh_tokens` VALUES ('02f62227cde589b3741675c9747ea567e1134747d8c0c80ae2f243dfbba1558a833bf59ee0e68a42', 'b7ed266f8e278c192533ebca68becc1e9a585b5499db28f1d7eb30f151d1d2742e0ba9ac89515050', 1, '2020-08-12 04:04:49');
INSERT INTO `oauth_refresh_tokens` VALUES ('90b2b67d7773870baa6e4fd70c8551b134dbdcbb411c2c49f62ae087b8d293f9ae43a5209bff2bf0', '1d4184e4d14563c9ab71a41c2d64a10859746018b674ed644eb102467d8e0799278cd291de115107', 0, '2020-08-12 04:04:48');
INSERT INTO `oauth_refresh_tokens` VALUES ('63322659c2da2c04576d61fa427429ece0742008e6d58a265fa37a2808599ba62d7e9bd17686a924', '33445a5aff06f323559a352d8c548df12bf9035e579f887d86cb8dd436ebace257c12268a70b0cb6', 1, '2020-08-12 03:20:04');
INSERT INTO `oauth_refresh_tokens` VALUES ('cc59f64dc159b0e8a7ebac9909c3cd1bc79fe186221d16c0ca5e9ea5dd01c3189d2a58bff16513fb', 'f5cc248d381a291c44d761758b6b1b4e5af15b44842f1012ce86d78a2e66d873efbe62a0faa6c236', 1, '2020-08-12 03:54:27');
INSERT INTO `oauth_refresh_tokens` VALUES ('687c080ba8480405718898789f8f568d83b78fc7b0815e20e75142adb607aefc0dda1a9d8ba0e49e', '64385afd0eecb17d0db9e4a3d212666d70d600013224b32fa705b09f0726e643f7ea1d9b439a8aec', 1, '2020-08-12 03:09:09');
INSERT INTO `oauth_refresh_tokens` VALUES ('314e8a11ea4c809d66b75aa8169bf9f8440b7528aea3bdb2b67244743c09d67c85729489419acef3', 'cda203d7968f4d9365cc0daf7a8ee389f9bf8a54975169230161d2a7447156294815b82702b19287', 1, '2020-08-12 07:49:07');
INSERT INTO `oauth_refresh_tokens` VALUES ('c39bf890ab9cab4047a81e20dc8f0bff8c5623f55a6ef6c88c0e09f9974fbdc848e07cba1f9626d5', '118c954682e8b1e29c8eaeb98447f719ab4d8df87734fa989877ff87a93f6e3fd84645f77367b283', 0, '2020-08-12 07:49:06');
INSERT INTO `oauth_refresh_tokens` VALUES ('0eac654df1dfaf5029ba4f152e859c4bc2483eee72cb15c1b39a9bdc1aab1861380f240326b0b1f0', '7b1ec022a1d42cdfae3ca92f2ef7f8cf16f6f306eb9064cb97bcae01dc0517786d3617565ebb7665', 1, '2020-08-12 05:59:27');
INSERT INTO `oauth_refresh_tokens` VALUES ('b5f96805851f4badc7da747c11df80e4bc59f63a197c4b9b65b2f34435daf7b0b5dab6fbf166eae8', '7c2c798d85fa02102a35dd16d115011f681b24b4ee479143332de66bf08a687171a7c9e065060a1c', 1, '2020-08-12 03:21:43');
INSERT INTO `oauth_refresh_tokens` VALUES ('a4c3bde7246bca59a53c4ac34e55aeca7537da2ddb13b60a2514e21c97122e17b034f461c584ec17', '0077d6465ef02eb96c7a3e940a27bd2579a2fbb7463e5610225b5aeedf4f8a95aee2586401ad22e9', 0, '2020-08-12 05:58:16');
INSERT INTO `oauth_refresh_tokens` VALUES ('ef5895bd144316e7c9fe9a77a7dd150b9c45dfc58128534b6a5a22958a4c5d6abc0d59fdf95627a3', '8914a336ce577f3ec6333512846dbee37d3dea2cd8f2bbf240d256e12defaded7ab2edbf760e5571', 0, '2020-08-12 03:20:46');
INSERT INTO `oauth_refresh_tokens` VALUES ('24a7c6177392afaba6d074bafba100fe010937d61f23304acde223c6ae13bedc6bc9e2318de7e950', 'e6f5982b84ab8c66d3504e4fca4f6bfa3be0f819cdc9c9c70ef03e409f2cc4d473d71f9d9d62281f', 0, '2020-08-12 03:14:00');
INSERT INTO `oauth_refresh_tokens` VALUES ('45340ada8aa881a81624e624fe1601a205ae65fdea54116ee05f3b838c19dca1218a56ec3e988e8d', '5a1c271380ac75ccb1b829fa84ddb51f5a3d0cd501603539f3a5f753c6dcc9887d3c1186e8b6f9d6', 0, '2020-08-12 03:13:11');
INSERT INTO `oauth_refresh_tokens` VALUES ('a4402444073d31d35195b0258130b3a8448d8cf5ac24152f58aa3d0bd919eeeb0260c87310f74a35', 'cb27bf3dddaa86cdfa8488faeb18aba44099cecdb0b10abff8e9ddcb0374125d4cfeb3ce2b41b677', 0, '2020-08-12 03:12:22');
INSERT INTO `oauth_refresh_tokens` VALUES ('ad4cfd740bf0fbc11f975029968f7ba5ec27c216122a1d9aa9e2ae7dd8d553e17613ca4c93cf2855', '10a8a93ef64b159404278d64746ac6035d5f54d01f38aac01ce7e8c0f210a122ceee6e20210e5779', 0, '2020-08-12 03:11:58');
INSERT INTO `oauth_refresh_tokens` VALUES ('211296c3dd696e19c7b5e86207d710bed1e0cf7674d7c07facc3efc2bfa315b6f4ce5d0d5316389a', '856870fd377afc4b82695ae62eeb12e72492ef2a496cb2be3c181f06ada1d07349b9f4a5ecfe9aa8', 0, '2020-08-12 03:12:09');
INSERT INTO `oauth_refresh_tokens` VALUES ('8802f436a0c429b25bb201ef4c5d6b5e92a6049a6bcbf5c9d64e6508e55e63aa7fb0446920051925', '323bf0643eef37b7e7bf181faea8f77b61cf5cbe9ad378a1182f98bf3d49c2b43d96df9aead2e12b', 1, '2020-08-12 02:59:21');
INSERT INTO `oauth_refresh_tokens` VALUES ('be0e691f53312e4b4bb1166f6c67a6e498c17f2890da0123e7ab19a1e8b65a9714cd92665c4a2ebe', 'f4a1dbbeaf4e648f6c278fa31c922c12e876f0d49f754c29df17ee364e5db8558e7ccb50cb60e1e9', 1, '2020-08-12 02:19:48');
INSERT INTO `oauth_refresh_tokens` VALUES ('773d0fc522dc0b8207150c1fd82733965d36672ee015559b3db37d0ff51ab93efc3b2753a5bb55a2', 'd458451333e3e138372d2929d6d8f51225026b5032369ee6c954d72bb24b5f6593eb764cea2331f6', 0, '2020-08-12 02:12:54');
INSERT INTO `oauth_refresh_tokens` VALUES ('c49747a4be83d575b88a997dfa8ea493d9afd7ea4b1f04ca3f9fa2b9f458174b6baaa61703affff5', 'd68956366bf4b8459bbc027f542bd1b89852b19b47d78584180283a13f711689c01a3cd7a527c554', 0, '2020-08-12 02:11:21');
INSERT INTO `oauth_refresh_tokens` VALUES ('d5053d0030fce0a37c07de4259bcb3f09034daf450a60173d6a257b7f51032cf97349b3dedd8d624', 'e4169981fc63608477965e5703a624b31c9b198a328217b88ec00977a37cb19fb54032b9ec6ec3ce', 0, '2020-08-12 02:10:37');
INSERT INTO `oauth_refresh_tokens` VALUES ('2cada7f1bcbcac11a8be1b877e877b0d0390d79732991b87c651192ea35ea67c439ea4e58bf4c399', '9f7ad33b5f8a58c8888788ed410a245e3748380eafaaf2ed8cf78672a6ddd718d77ac8ea925156b8', 0, '2020-08-12 02:07:14');
INSERT INTO `oauth_refresh_tokens` VALUES ('bdd35da5fecab00e2fcff0846a72638ca201207b6f44381c4bdcffb3d16e626299a1a852ad546223', '26648433172e0a067cb1e61e3fe004ea497b9d935630cbbf25ace8bd4d4fa2f1dd17de62292f4fcf', 0, '2020-08-12 02:00:38');
INSERT INTO `oauth_refresh_tokens` VALUES ('236b4dacdafceead529b9286d1fc26b4668b201730b3342217a24689d5ff596873d745b6e78c8aae', '6e05c67ddea69121d44ca3a606abe2eddda9a0ba02b4e3a64146c01121aa1c143873656a9a1f24d1', 0, '2020-08-12 01:59:50');
INSERT INTO `oauth_refresh_tokens` VALUES ('91fee359a281d718dc8342069fee3950c8e5ee57854c863b7190a24c760f737c1da025da987a3acd', 'db0e381d8dffe11d26a289403208f9a651609efb3167abd56cb347ebf1c99de291579dbe86e39502', 0, '2020-08-12 01:59:15');
INSERT INTO `oauth_refresh_tokens` VALUES ('d7bacb75d6901affb3b0a1569e4d7e9c06eb99589c2a53b2d0d8020ed2864b6a6d9c25512a92f6b6', '605896cf9489b30b62dcc784ff5051dcaf8359ca36be4ebb7619f019f7269bb358ccc7385e5fd114', 0, '2020-08-12 01:59:04');
INSERT INTO `oauth_refresh_tokens` VALUES ('42ed1c14d57f98e15d9c11961057a4e46ad49080bb1f4f93d32e97dab37f0b532b08c0849e6d44e3', 'cda4a553e7c77a4ce06dfe5c6895899973ca2f26a5fe155e88a7c66158abadd294bade4bd965d5eb', 0, '2020-08-12 01:52:44');
INSERT INTO `oauth_refresh_tokens` VALUES ('4315ec78ed351743029dd7846e209a1ad45aeb58384415f6d82e35d8930574d87660ee9016f4d6a4', '26e67b1e1f5819a81a6cfdfed331bb59023c5e90378b5f671a4aed786be415f392b6aad11b39d7aa', 0, '2020-08-12 01:51:53');
INSERT INTO `oauth_refresh_tokens` VALUES ('c390575c172d45bd450602b1d261fe658c3b32f517cd73ea7ab7d17d5f9ef4d4558f9f00d81c21b8', '290e19c940bf0f1d8613efecb4d44fa9c74d48f6fc62f035d40815a3620be197acca378447d5f47c', 0, '2020-08-12 01:52:02');
INSERT INTO `oauth_refresh_tokens` VALUES ('501f38f6daafc80f50ef0ffc60a4925b76c45cdaa4bbc8bf4cd9c44ffe86cce046743b0ec591104a', 'cbf1bff1ed940f0b3de16ea3a7c78ac2e923a0a0787a76ba2dd7db2789a8688e53a9d3f41d5a0aac', 0, '2020-08-12 01:43:09');
INSERT INTO `oauth_refresh_tokens` VALUES ('8e9f46d9eeebdaf7e7176e4b43a13d9980b8b7e3ef987dfe7938167a12c99bc540ec467a99b8be52', '9ce9f9e2e57c3a82d23218e29e9209ebcdedf37ca5e55c5f1a83d5fcabe7efe491ea965df3782baf', 0, '2020-08-12 01:50:24');
INSERT INTO `oauth_refresh_tokens` VALUES ('e2d314f4f3be94c05981695691845f5ef78272a2396afea94a2d75f0c983205c97d35ea35a50091d', '86ad75322eb954e8a3911d915e3bb3f2ec25f09ac3ddbaddc2317ddb269e8128c35a2d1fbeffbb94', 1, '2020-08-18 06:25:55');
INSERT INTO `oauth_refresh_tokens` VALUES ('7b4829001bbee7302ac9397260cb53d0fff274ee4c1494a5d42575652a6a4f9d6c03ee0949da1422', '77123cb3cc17312f14c0475c7389a2542db1f7db4e9b5bfa8ec3b59f9906f65759b2c9209afc7004', 1, '2020-08-18 06:56:51');
INSERT INTO `oauth_refresh_tokens` VALUES ('06055bb5afe16863840bf68fa4f2727296cefe3908389f805a15033bcc5a4af4e35751acb8eb2dcb', '85316cde3527a77e9b81bf52cfad835574cff4d21d1dc42040323c9626a49d4013564f37fbe4c673', 1, '2020-08-18 12:06:06');
INSERT INTO `oauth_refresh_tokens` VALUES ('09f4a078648601a9ab583b50f22ef78ea42d423336ca5da7e152ee954517c4e6c9d9f5bcbdbe4dd4', '00b7063aefcf62858b4413ccb384434b83736331dfbf40d46b1b676c2c9cdab9e7feb6020511ba93', 1, '2020-08-18 12:41:04');
INSERT INTO `oauth_refresh_tokens` VALUES ('898bf138b4aadb2e25c1b1c4c02fffcce2306af891acd59c980a3cdcb65d0a9333a2e39d31d60efe', '9dabb19298e761b31c993e3e7b674b8d2204f36fb05dcf73687388056e97b3a916df6b6494f4e394', 1, '2020-08-18 12:52:00');
INSERT INTO `oauth_refresh_tokens` VALUES ('a3a4b6df730eb98c0ad001f643f7e0d4b37b94d1b9ce80022d81c24cc464cc434a83e1dc72c56b15', 'e10292a99ebc01f1643e7da453c4416b922f70c18b26d642dd60be40cb0fe77c37924100eedfb0df', 1, '2020-08-18 13:24:45');
INSERT INTO `oauth_refresh_tokens` VALUES ('7ce9025ac7cbc72f359656694039dbd696956411fe526ea5ba3e7260526b909d44943a549f6cb9b8', '77ca899e82da4b797c069c7fa7cac604313014a83ba47356cd0fe6f773b6889664bcd2d9f10114f1', 1, '2020-08-18 13:35:46');
INSERT INTO `oauth_refresh_tokens` VALUES ('877b26cbadfcfad9e86964306c3c1b0ace8ad90802ef188c5aa61a92be78e417b004d8b027a9ec96', 'c52470559cf459dd9d0a5d5151f95e22590539db6dd5dd16c20167aa2b0871cd76d4df0c6a25743e', 1, '2020-08-18 13:47:04');
INSERT INTO `oauth_refresh_tokens` VALUES ('9cedca540809c763e06b70044d05fdbc802a1d6a6dcdeda43ec219b5036532c3c2004bffbfac3204', '3aa94ea0b5c3ebf8170bc019cb6bfdc67427cdc289c672f53fa8d2198b4f3b155d025013778009cf', 1, '2020-08-18 13:57:49');
INSERT INTO `oauth_refresh_tokens` VALUES ('500da70b6532d6b81094fc0f0f3cdbbe6a393b62feb4aacad6b56ee6205d3f074d51879371f4223d', '2a26d24119b529012a5c8d8880324ec769be6c61bbf26cc91f369935bfc112a9a345cf8a490093d9', 1, '2020-08-18 17:10:31');
INSERT INTO `oauth_refresh_tokens` VALUES ('1743e4afeb126660c00c7b79a6ac29e8ca2a1f1d8e58e7a6ee79e9eb0846bba5d0aabe9b966ae59e', '2c99bbedaaed9d7e18d6827c50bee9614e09239ec4e80105d72176848e1c9ad3e53789ba6833a5cb', 1, '2020-08-18 22:14:47');
INSERT INTO `oauth_refresh_tokens` VALUES ('adfbb0f6dc85eec22b475f5a7c5e4defbba50786690fc8770e2dc5dd2d57a191a967874340b56ab8', '2666c9c903dc846a121b5cc0f81436252a41dddaf817eda556e39bce0fe7f6e3d5de172608830891', 1, '2020-08-19 17:51:54');
INSERT INTO `oauth_refresh_tokens` VALUES ('a20b1b6c75593d6afb15098ec43113037f10535b32c6d9bc538bda6be2ae0597b94249164de716be', 'cdaa7a40a1441a4e16bbc2a8faf7a34277474756e3859ef20c2412f9d277d6b9118dcd1694fe5a79', 1, '2020-08-19 18:15:39');
INSERT INTO `oauth_refresh_tokens` VALUES ('f7f82db18d0af4c223ee60f790acbff7b18b1073a375d6c70c2f11b1f3249da7b86113c2bc1d1fcf', '0888b8f64ec4db8404b1f426fb8044d02f497fb5dd67d3350c36366ff08657756fb22dc4dc764969', 1, '2020-08-19 18:28:35');
INSERT INTO `oauth_refresh_tokens` VALUES ('bf5c9fe6397a60ea98bdf30fdf49328835d75b6c86d45a2891b8706f8128903ad1a9a49c0ed27762', 'c028f6514cf0596daaf1c2889c666c06ae94e36841391c163d872afe7914f32336398732b27e558b', 0, '2020-08-19 19:32:33');
INSERT INTO `oauth_refresh_tokens` VALUES ('9a80f657dd19f7eee77ad0b3477b7dc4f464f96e8b22134e42e1298e488f6c22d578b750808ae7ac', 'c5fde31b8960c520e7bb544a575b96bed7f8dbd190ee17c7a48ca374ad343decb398f1c99b220dc3', 0, '2020-08-19 19:35:40');
INSERT INTO `oauth_refresh_tokens` VALUES ('26550e1a2b79ed2761ded0b68cb174ec7250959c874d49b220d83688b45decfee507eda35e936c9f', 'f57a4427d8efbcbceaabd20d443608677894ea0482c65d4723b1a277fa5f59d1c05296de21cfd16b', 0, '2020-08-19 19:39:50');
INSERT INTO `oauth_refresh_tokens` VALUES ('58895c8e9a6cd28adf4aa4496afe35287a55368f6486e64ec0f14040e5ef890244b3c74441a127dc', 'a141b504348b1afebb97809c3fb85ae6f7dd5ac18f5ea6a84996d6bf63f4dcb59250cc9fd3ffe925', 0, '2020-08-19 19:41:06');
INSERT INTO `oauth_refresh_tokens` VALUES ('2686f8ea11b329ff76ffce9a9e9be49164ac16a500093ee0a27cfdf034cfe7b531382fdd89ea4d77', '7479a26ceb91bec02f0035327da7c15641f5ee9c7693b03819280d2729aac039fad77caa8238f76d', 1, '2020-08-19 19:50:14');
INSERT INTO `oauth_refresh_tokens` VALUES ('79b2905eaee331f47c068ab7aebb9d39e7986ea1424a8ee3ee9ee489b5f360be91164fc13f019227', '9d7ea11c96937ea814a60dbdcd60b8ab0015ea158206b7dc4ab192fefc42803b59322bab71746d87', 1, '2020-08-19 20:06:08');
INSERT INTO `oauth_refresh_tokens` VALUES ('a47ec6d90be6a906b3cbe951f95b770d0d7a176affc7f523d9fecde6de955481012c07e68f97dc86', '5adb8a99501dea187e2442d6cd2b1d459bc9c93ff4fceda63e5693842457fb96c6af28182d40fb55', 1, '2020-08-19 20:22:47');
INSERT INTO `oauth_refresh_tokens` VALUES ('c589b76f022335845693ae6e15f4df0fb6b88245901be94fa99721b0b50f79e98dc99c26dc2999d1', '8b53a53677c85bfb2f91782aafeb2b84004a546d43cb894233a0a52b2799fede25949d7f82371ba9', 1, '2020-08-19 20:32:50');
INSERT INTO `oauth_refresh_tokens` VALUES ('a51d8ee512196f7171209c4b006fa4b07b59640082d80ad7e9e0fe15d9195c4feaf777ee731dea07', '2b71cd004cc5bf18b1c535061b49b1bbf98897f22a99f44b7d70b95fd5f878f6251ccc0e83384258', 1, '2020-08-19 20:45:59');
INSERT INTO `oauth_refresh_tokens` VALUES ('3bf82e02943993e3483698f8a8aa47f0adadf93a888fb1013d79867fab76d0748ce6363c970ec33e', '0ce7b560e003e24dbe0b3ef63b4a31c17f92e176a04ee95d87f58bd1a94272579dbda4e2ac9956e8', 1, '2020-08-19 20:57:01');
INSERT INTO `oauth_refresh_tokens` VALUES ('885162320e1a9c5c22c911dd5b192f90bb21cd6e8c62a333c238fdf66e8d09bb8b7fd8b7e38a6368', 'e8dca6b8dee0acfec2c42621351b7cd3c011db9f846805fd83c88949b595037484402b927fefa540', 1, '2020-08-19 21:07:37');
INSERT INTO `oauth_refresh_tokens` VALUES ('e0699dcbc51aefd161ed202a6e71d9e9558ed85374d725926866e6e2a5198200653a52f19ee1b958', '7094f52ee599bbfdc63160a72026030f36242621bd9780f11ac51406bac15511f2faeb990bc7eccf', 1, '2020-08-19 21:57:54');
INSERT INTO `oauth_refresh_tokens` VALUES ('e8371847db914dc5740da95466c586beeaf199e91d75b8da94835d2fdfd695b15215388ae21f51d7', 'd7c8a78980c5bf699157438d472c1d8d25ac4f9d9ce1cb9cc39f3698de58fbab12aaf0cd4ed9d84e', 1, '2020-08-19 22:11:31');
INSERT INTO `oauth_refresh_tokens` VALUES ('7fe254bcfc53994262fbdd466a47d9f6ee596b09e464a450921f6fd625d79fb4714cdf261d4eb629', 'a508ecd23599972ca7fca7f8b3aa3d8364ec0a8b3fa42cceab919da75207c5c3d86107f8087d3aa1', 1, '2020-08-19 22:44:33');
INSERT INTO `oauth_refresh_tokens` VALUES ('73ffbb13a45015ae3352b43d49a70067d4190b960b53eaba397c561b9102a8ae0da04ff9994949dc', '93b5ff7f894b1308d9c84149862ece074f41079f6ccb757bfe1eae8fa9dec71cc5efa74b91ffa49b', 1, '2020-08-19 22:55:49');
INSERT INTO `oauth_refresh_tokens` VALUES ('2670f62ca0c3761bada66d7705307768f4a20e4dacc035d67325280a131dae430fe38e6b621c2bd2', '56518561359ca500b692cd3fb7ddaa7fec6b353c9a85d45172fc2232fcefa478714e5320eff6d872', 1, '2020-08-19 23:29:10');
INSERT INTO `oauth_refresh_tokens` VALUES ('53224f8068a4f7b700babdf9f909b522f1dc26378e17856e1f7b59dc51d2d19ff5d7af87360d5566', 'e76ea443db2fdf0136fd7916ce54819523d5bd019efaed63c18531a3fe41e232b34297d3c5cbc680', 1, '2020-08-19 23:57:46');
INSERT INTO `oauth_refresh_tokens` VALUES ('6337249745ceb73bec47536dfe478c3e7367485e8e8300398ac20baf574b47c8fe9f8b67bd02c231', 'e50206e5d9139db70aa03ebc54d07c77da962dae9437636155321a5d5634c7bce3a0d4c46fb54359', 1, '2020-08-20 00:07:55');
INSERT INTO `oauth_refresh_tokens` VALUES ('9c6cbde16dbc84bed7465db6deebd367e1a736d9506d3e2e7129b60eef84620bdca74cd041cf7a8c', 'f6cac6be187233bc3ec825027008584d257eb2bb5cf194e510c8c5a3d84d2349f2ce59c2219023ce', 1, '2020-08-20 00:32:09');
INSERT INTO `oauth_refresh_tokens` VALUES ('f8b86942a1f94dfbd72b7501ad571b98f98ae61a3d6f2c3203af173abf3d0c03298d3d6ad48f061e', 'b32ce8934ca4d925ee5b398d8155a0d507bdaee4a3d73fe4b0aaac08edf32c9900c932057ca2afbe', 1, '2020-08-20 00:42:20');
INSERT INTO `oauth_refresh_tokens` VALUES ('22e9094d810cc4fe7840872e628a8b237ee89177e88fec054e13007f4c0b9862285508e5cec01d4e', 'f7dcaa40faa58f5f4b21edc4a2d1a0dbfe584704d54bac86e05670aee2b7972379b42f71edf97a50', 1, '2020-08-20 00:53:14');
INSERT INTO `oauth_refresh_tokens` VALUES ('d2b747238465fd9272e4ab8d23564bac5f948aa28232ebeb16ecaf0ec1a0f86407314d7963fa09c6', '32a52994cbbf5a59f761b0d024cdf974bfe00acfd486d4e379295601a4cef609a572ae8ba19f3a5d', 1, '2020-08-20 01:03:35');
INSERT INTO `oauth_refresh_tokens` VALUES ('5eb9dd098c2dfc3b5217026670e32133bd1c2028b8ca79823b6ec1c94c25c88e1fdc6044c3f23e8d', '195467384a4e497dd93edf277b04fa67c485fc1823b8c6ce62b1a8e15f185ce9dd23622d020c794b', 1, '2020-08-20 01:17:27');
INSERT INTO `oauth_refresh_tokens` VALUES ('5631484260a8f161e1324bdf7b1f1451c88b4f7e0053e176861dfe564c6e6dfb487cdb1659b1efaf', '636513923d609b4187c0dc43e9e65a0cae1c9183b640ecbc64cff908ef2956cc9d62008cb9c5419b', 1, '2020-08-20 01:27:30');
INSERT INTO `oauth_refresh_tokens` VALUES ('d031f131ddeb48aa180f68b868dd35671712d705111d520863d35643735fef64af89cc4aa598c4b5', '235295036cc8cf345d3c360dfaa09c443d55d7c136e4b0589d77f6eb5e97a40ac30cc2044d4a4134', 1, '2020-08-20 01:46:01');
INSERT INTO `oauth_refresh_tokens` VALUES ('06d277a549f977801ccf06df27f9873dc4e1d8f05000d7a62e436010440d7c2b5f556ce50522c561', 'f7e29920e60c212190c7460169c5dd607d2004028433c4a548730a2534200ce92c0d0f0d70e366fa', 1, '2020-08-20 01:58:43');
INSERT INTO `oauth_refresh_tokens` VALUES ('44884144b5e42b29e386126a5847a74913cbaad5c1a76eccfb1b45b915a1291934996ce72a473d78', 'efd4dc5861b7faec0a6dc02cd5161d0fb7f885925181b915b230b1230e2583f955e271885ddc2225', 1, '2020-08-20 02:18:20');
INSERT INTO `oauth_refresh_tokens` VALUES ('d00edaed4fe4b2d443845d0e5a935d731dc7db6424a3b4892c216c4f57f9c4ba08be01cb09dab281', '34ec153651c4264188c24048e5600af8be90ac8029f51945eadd0e954c05f69e4a5abc910617dc86', 1, '2020-08-20 02:29:17');
INSERT INTO `oauth_refresh_tokens` VALUES ('c148135f25948266ea2b037ba1b6a74040fa62f32456ce30d294b5560ac6737c6c2d8e68af99025b', '4df162d25bf26afe571696af2e770f3de2ccb460d8e1b230c10dbb4003ac403ad4e85d739906182d', 0, '2020-08-20 02:42:35');
INSERT INTO `oauth_refresh_tokens` VALUES ('faa36d7182bd521e45becb094359d82f2d366e5ceb03a0f554548f0012eedf390a6d6021ffa59420', '9e0eca3569ec906a9c10fadd11efe10dc3c150a0511ce564746046decf066cf3582b4e8444d515dd', 1, '2020-08-20 02:42:37');
INSERT INTO `oauth_refresh_tokens` VALUES ('07ad9dd77b952627db56c208a32f6e557f81a7cbd79c5756fcc4407796b8af77bc0262a32a8ae734', '59dfdb1b8a4b5d7a210739a31b6d0ae9f7afc02f85f53855b972f65190f5b9a1b69bb0a0f2880993', 1, '2020-08-20 02:53:30');
INSERT INTO `oauth_refresh_tokens` VALUES ('a2949bb9ea1ac1816650dcb6e96d5146dac50860cc1acf34ab09226886ffdc9f357977e94830c501', '9442e252d66bda8f6738f525b6c542d969447b07d6949dda523040c97e2c21ebb6b3cf1f70fe32c6', 0, '2020-08-20 03:07:50');
INSERT INTO `oauth_refresh_tokens` VALUES ('38fd41d721629fdccc74fe1e8d47e50ba1b9dacb26a8da47a5b3d2d23bc64748f54dc1753010f37d', 'cc5301c39101546381b023070367039d4480b249a19f216391491559e99595351e8f780a928f99c4', 0, '2020-08-20 03:08:06');
INSERT INTO `oauth_refresh_tokens` VALUES ('fcd955d5a9a7a64111eaf8478fdc83ea05e938b5b06925e48ee462af2d512b749577d6500420d06b', '33b37517932ebc2c24d196f4a5af4f4d8d55ccb2bf356b55ce098a00f88598b2ef3cd66ddb37ed64', 0, '2020-08-20 03:08:16');
INSERT INTO `oauth_refresh_tokens` VALUES ('43634c342c408c1de1c8772a7fb1660c1ca0d2670d22334d8ec05f8e99d9107a1eb655cce74efc77', 'bc2e36b9406f0c97dc047be4c4cbc1224f82c71186753a7a22dddb973abfe29874e52f746cf1384e', 0, '2020-08-20 03:13:19');
INSERT INTO `oauth_refresh_tokens` VALUES ('1296739dbb6c9c870232d6bb41546c38817f037bd5a0ee8b56579eb1c23aa9217f83480e35dd9629', '522f7e1ee6e1b98a9766802a72d893a8c958cd96ee024605858fc2e0729470535a24c0297dc0dc9a', 0, '2020-08-20 03:17:51');
INSERT INTO `oauth_refresh_tokens` VALUES ('588cf9d1a7b3e393d4e6a7a5e9e4c1f29e0c94b660041a49e3a9aebcb2f5d638d43cf75ee8f24955', '849c2d1c00aa47084ed60bcdbf84b70c03761aa9c0e9a82130149cdbdef70ef5808c489780ef162a', 0, '2020-08-20 03:20:25');
INSERT INTO `oauth_refresh_tokens` VALUES ('97df6aec909947372e3664e95c055695088d914b383c2a27fa409fb245e56c42871a95e4f9d797c3', '5d8a64dcc9fb988913a2970e645826b1e0964816798d219b1eb2fa45766b6b7028dec67358ab83a4', 1, '2020-08-20 03:29:55');
INSERT INTO `oauth_refresh_tokens` VALUES ('7c4031f677e393b6af2858ad3836037128f5ea5e4f7abef2219a623356951ee65164b853df50d789', '27915c81e64ae56641dd3c17b8ba53e624f1a7120b42fa87851eaf944ab2a34962dbc5f6f5101620', 1, '2020-08-20 03:36:40');
INSERT INTO `oauth_refresh_tokens` VALUES ('233e477543df2ea155ee5f996f0122d1f11c6219fcc451df32df6b13200e02a2b11111581ff8d1e1', '9f71da9e82cc431c60568fb4312742a38e0bdb8f35bfb6f7c2389c913770183ef05033ca4c03d09f', 1, '2020-08-20 03:42:44');
INSERT INTO `oauth_refresh_tokens` VALUES ('d1e5f22c755ee2f18790e5cbc81c7adc39a2457d9f4b99123f4406581c072d0e89ceee65293488fa', 'd6b45c405b891c291aba448ce73d2b7f1cfbd254e4b20e0fd2a5261917087106c0c11914977bbcce', 1, '2020-08-20 03:47:28');
INSERT INTO `oauth_refresh_tokens` VALUES ('68796d4a9ef74c3ad91c1573ddd8984575c7d8f236a78851ad7b5867a98b8d16e11e9868f11ebf73', 'fec998ae3cb381fa1bff098add49057090312a9f95aac9d68ee5c0b8e90a1f62b171fb3541f8e232', 1, '2020-08-20 04:00:03');
INSERT INTO `oauth_refresh_tokens` VALUES ('f0bc9e0cb9220e92ce158805cad88799613127c06eba7e2975471e0b6a5e9579356e9531866b779e', '52a4c67b5f71a242c6f540b20a2e8203dd985cc51d5969af148fbfb415d8a9fe85b30ebb00e5b0bb', 0, '2020-08-20 04:48:55');
INSERT INTO `oauth_refresh_tokens` VALUES ('6e962dbfa19cbcd59cb88433a28ee92866d37c62a1d955140df2abdddd055f5b4347cc5e4d65c59e', 'b60cf2b91d5133b0d17ca97938797473e094918a266b43dff73e25eb7b79df2c7b75a8df662861fe', 1, '2020-08-20 04:49:26');
INSERT INTO `oauth_refresh_tokens` VALUES ('943e25880b05c87fa0923344b3352cdbc07182676cf78d7e8ea630db6f2a4aa677d1df7b9afb242c', 'f27164be3fbef457f80b1e54e42b3c67366f553f9facd44b7cae9a72dbdd8d62dc77ade6abf4c11b', 1, '2020-08-20 05:02:06');
INSERT INTO `oauth_refresh_tokens` VALUES ('0027e00c0ca6f523f7ecdb2b3a376c0b73241b4b7385dddee567261d150c2a69bc8f9304be68f23d', '4cbb005a24945c498b31977b3021a23220dd3c50019c3ea2e057e24936d8815f606aa5cb5bed8cfb', 1, '2020-08-20 05:12:48');
INSERT INTO `oauth_refresh_tokens` VALUES ('c349c383d2922402ac31e9050e4a59cc01cdc0eb76e222c684fd08ef31c68d5e9f5d75644354428e', '49fcce26beb77b127145faa5090689eb54f5b1113ccfde36ce56a5caccff7601bdfac2bbd5896614', 1, '2020-08-20 05:19:51');
INSERT INTO `oauth_refresh_tokens` VALUES ('4072753174c687c24e54dcbc2b3c3ede9f5ba0efe8ee09056bbc65c5071dccb092c45ce3bb1d6463', '5283a39b654013e9264f2053b18c6e27dd3327212dc5e6a839b9ae644d2ba3c032ec5ace046a55f5', 1, '2020-08-20 05:24:06');
INSERT INTO `oauth_refresh_tokens` VALUES ('8ade0f2662d602f9ebab2db02a8d790e31834b2b9c6c81911e7a367144ffd4698547a753e73798b2', 'd3e842570b6f2045315fc3d4a2d962f49c4802109598937ddcc5f1d839688b2d07e2d6737d64ce8c', 1, '2020-08-20 05:34:46');
INSERT INTO `oauth_refresh_tokens` VALUES ('9b4f72781b9a5f10c7b52eba9eaacafe615f90d1ef81b1c4f5b0c223a57b2eea65eeb3839e8196f5', '6e7a7dece5068b7e5a6bf7a1be230235077346cc313b78c718e3b9a28b152c6f4b817025c84431e7', 1, '2020-08-20 05:45:20');
INSERT INTO `oauth_refresh_tokens` VALUES ('deafb2f273d1bcc31eb698159805eb9a9cc9c1787859307838fd4071129d0f13999ca4b73e8df36a', '9eccc46e308e7364d7a81b51a37f2920421bfff6364c3c98df8932f568e94ef02b723621acd7d5da', 1, '2020-08-20 06:00:05');
INSERT INTO `oauth_refresh_tokens` VALUES ('b83e0076824289c6eb464490ff34e858666d20f99d69f95ddb3bc605f51e5bc337ed7677638c5a49', 'beaa6930cc2271eee0837a5e6c91f5ced0f861c7a15291cdbd3c88eb833c729c59a76a5f6c6668b5', 1, '2020-08-20 06:11:31');
INSERT INTO `oauth_refresh_tokens` VALUES ('ee655621138f92287a18f23b74e1f1f23df8f5bdda95c58854044e32e437694a9513dbd3b748d885', '88d3d56cf2f5de46e2fe3f52a576eba17179418034943f28a66ae69329d090e577d4b7a15ba9a9ea', 1, '2020-08-20 06:25:45');
INSERT INTO `oauth_refresh_tokens` VALUES ('20005b5f572db3d14aed2da056ade1ddd5e4c85715ed761fe3c456b255b7ebc0f74b2c45bc0f2962', '8793b495064c720b3a0110bd02d8291df8c348af247f37de67735b6e82246f1839842447a8c9dd05', 1, '2020-08-20 06:36:57');
INSERT INTO `oauth_refresh_tokens` VALUES ('4dfb3ae72a858f1d584e9894d244737ba3b565627ac0ebe2288eeac654bf4e6a4ab81e6c506be222', '8eac0701c3be1e060cb743598f8a1e67b61d98a8cde0e7179b6bf8b05e4ae69bd829ac9134cb930a', 1, '2020-08-20 06:49:13');
INSERT INTO `oauth_refresh_tokens` VALUES ('5cfef4f1d7fc8f475df6f480ac8b1d666eb2e4cedc487da26da3184fcd37a16d804a2628c211823c', '5d226a6313f02daaed70e0848cf5caaa1a313122e5f73ffcb34e70a80eaa20e51b8e68b67e5e9e96', 1, '2020-08-20 07:03:20');
INSERT INTO `oauth_refresh_tokens` VALUES ('a8b83b665d10ec51e573cbe94d59a8874de8c705139887e561bf73673a181286da7f4249bf800095', '2a7aa79cc1319bdc971f6e6b8592a665cddeddcd86eb1b2bacb976496dc1e527f0992f7181b01ca7', 1, '2020-08-20 07:13:50');
INSERT INTO `oauth_refresh_tokens` VALUES ('30b7e109935e7dc86220eab1197f332eaf32ac4449ac218c05eb740409a31096a40f8551c893da5c', '9645c5f93a5d3f256fe54b79c547f918b027cf11945bced73381163e8145c18c9f19ab076e7c1ef0', 1, '2020-08-20 07:24:11');
INSERT INTO `oauth_refresh_tokens` VALUES ('67bb11e1b47c4cfa8bbbd628530ed601ab02c2f23601704faff7cfec2a40bf8c700cbe891155c040', 'c34757a40bf2f77224d1bb91b68aa971a6545040ed3639762a3f49a2462cb7cb50d7443e07bd9d40', 1, '2020-08-20 14:20:37');
INSERT INTO `oauth_refresh_tokens` VALUES ('1e14cb6d4e9fed1b130cfc80e00223fc645fbd359d0c803cce85fb1ee6eb84c112dc771cd24bdd39', '75543998773c313690d47e31c0cdf182f905c3581e614439a814885c542fcbd944159d8b58fa5639', 1, '2020-08-20 14:53:53');
INSERT INTO `oauth_refresh_tokens` VALUES ('03ef005f7d21cda7997443fc1a9aacfdbb21863689d75b17b634daff76570356c630712094dcaa24', '43ed61842ab1cced5cd59ac0fcdcc2a317d683ff912cceec2380eb8c0a2ace9cf6565605d98eec1e', 1, '2020-08-20 15:04:50');
INSERT INTO `oauth_refresh_tokens` VALUES ('83cee70106a7535e4e954eebf25b75b42f7f7c051be5e736647368631b53696abd60cfb573f09eb9', 'db4bb0899833e065bc359d6ad2510c878384ff4227aa26a5f297af68d820ecf61c605f7fadca6c62', 1, '2020-08-20 15:15:24');
INSERT INTO `oauth_refresh_tokens` VALUES ('257f2f859dd24786df1947c5dabd6dd4ad2d05d7e34474fd147484999857300672f4532432d4e76e', '0251f2510d72c5ebebfb154db86c5839fa968a3abed89beacd198a66c90ec9cce950b2a44a7b35b9', 1, '2020-08-20 15:26:08');
INSERT INTO `oauth_refresh_tokens` VALUES ('b9616378b40d35e9eb68e573499347cfec5f10a4550f80d205c5f9a35ba3433102521d62193b334e', '5003637bc9475ad4c3676645c50ae90fd0ffa6f8ef0f113861be8b04985b0fef2cffa2590d2eec33', 1, '2020-08-20 15:39:56');
INSERT INTO `oauth_refresh_tokens` VALUES ('69ea565b5801e2c838013dbce9bb309b8110c94dfa5bb7a0f32c98ad26f26b05be06d893e299d74f', 'c5bfeba0c1937e670949ff7c72877d491ebd2d1972e8e356039a957287d55259d95b6655aaa4abf4', 1, '2020-08-20 15:54:32');
INSERT INTO `oauth_refresh_tokens` VALUES ('e45b673e58a3186b6ae6c2555b34384e2deb3dd10d190eba43e8a4c4efdb02b91980f0d715552869', 'd735b35fdcf9ec8b48423123938484252a8edd42c89b866b5c6ea337bd0cb76940eb0a43fdcdf67c', 1, '2020-08-20 16:05:39');
INSERT INTO `oauth_refresh_tokens` VALUES ('7f570cddea28115dff9ea87b2cd0bcaad929da35b8c92981d612ff10c6628079456e146e0f07e840', '53ebad1314114d86a23f2e84b992e1e70a554d51e77e71e58091b8fa1d3b942a77eaeb4e2790122a', 1, '2020-08-20 16:25:02');
INSERT INTO `oauth_refresh_tokens` VALUES ('4ef43a4b1a682d0632b2bb64bd7ad973ac4217e1add4d7107a46cac7f9c1ef549057f313301e05f2', '0e35a2f630117f6ff8c059daf6e9c32def38633b3360baa38d7786368c735ea74a5b563e3f36962f', 1, '2020-08-20 16:35:14');
INSERT INTO `oauth_refresh_tokens` VALUES ('7c8cfa4e084d4a478faf52467dfbc0a3dfe6de0d4cdc110107f635c3887c9c7a23f01957327466f7', 'd07bf7acd455434f1e70f051b8fe5848385403955193ae23bef907f62ce898db5ec3269698c86dd4', 1, '2020-08-20 17:35:00');
INSERT INTO `oauth_refresh_tokens` VALUES ('d2a5c65c4287493fc1c379815003513a9c8b78e1a57456941481ee816a396abd19ca806b357ed687', '11dad67af60839b3026fd783be7002f57838bd42b3cc12c2f2d0f6aec5e3dc42f11a4f8521a2e7f7', 1, '2020-08-20 22:26:26');
INSERT INTO `oauth_refresh_tokens` VALUES ('d64cd4cc8ca974309042da1702b40c6ae7f8008d351a581dbb1675f40a018f626081ea7cf0b01be8', 'c4414df26be8169a6e36be68d667849333f54028c963818518e023a5ff471acfdf9d4cf63d6fd739', 1, '2020-08-20 22:49:55');
INSERT INTO `oauth_refresh_tokens` VALUES ('89e6c5da685b2f8188b0497ae88a01b76210821a29f65e7298dc25b14fb830c3214bfd41a6e8a0c7', '28b0c080c9d130498ce3877c8e2db7a22571049ec2f98128830cc916314a2f57d72d7bc9c9933d22', 1, '2020-08-21 01:45:43');
INSERT INTO `oauth_refresh_tokens` VALUES ('8090ce7717550332d291ba1e95560f79e09a01c47d2604dbfbb49167191c5a707619c3c82266e857', '1e54edb9531f4409da1194830d953a067aae9c13b41fd9da1d09550084875df20c31bf8e9ce67a96', 0, '2020-08-21 02:11:11');
INSERT INTO `oauth_refresh_tokens` VALUES ('c45c88a4a5a02691140a808081480014110ab50171a139b693a85220d9cc16cd264023813666b82f', 'a4eba67ea85015a36e002375db58c664ed601639b6970800d9dd633ec330d5118af40b615e70795c', 1, '2020-08-21 02:11:57');
INSERT INTO `oauth_refresh_tokens` VALUES ('2244377e74c4fc01ade3495a84b79f10c730550405583c906d3e09b359e2a7707d7eb1133572abc3', '5274febd4381e7c7e32caf12b2d5923c56f6516190cf9d2160c5e0e967e5bd3cf905edaa889b8da7', 1, '2020-08-21 02:26:46');
INSERT INTO `oauth_refresh_tokens` VALUES ('d378536d54c303fa5b7fa612195167ea38cc721a8ad4f8f6cd978fc37a498258f36c9796bea6e476', '2d251a67f532e651ea684b1cae268464168eb5699b11925c4e78d4133a8a600feaf9080cfe17980f', 1, '2020-08-21 02:37:36');
INSERT INTO `oauth_refresh_tokens` VALUES ('eff2697ec20c66c9dbefb7138195801a1e7c118fe6288dcd714d72ae9b0f9012c4630bd217aa6db0', '2171c5e06e2d9f678913b1bab9ac3b8bfa5a87f59ef6d3a0962c312c0288638eced7604be7eebbc4', 1, '2020-08-21 02:47:49');
INSERT INTO `oauth_refresh_tokens` VALUES ('1a9b6cd2db357c643a341a2087de57203cbdbdc477521fbf65a47370e7868376053f2ae36ccb11d8', '4943945f1c9a777d160427ba4127d630baf081007237aec80d952aef24c5a4c51703fc21c9d4a2e6', 1, '2020-08-21 03:13:42');
INSERT INTO `oauth_refresh_tokens` VALUES ('22c31baf0f27380d211b9daf643795bc94b895f390b8185db262120d1bf9fc7eb55361ea08ddae8a', 'd5fc5a630d2ff3ad63d22bdb06f61cedf2272e12b84e29fc83f6bdc27452fd69c81be4137ee57fec', 1, '2020-08-21 03:24:47');
INSERT INTO `oauth_refresh_tokens` VALUES ('9abf4d5fd472a609efa27525154b07b9b84a7efff29125e61cf466168aca739ec483fc4f2b3ee8ce', '0034221527512d180eef4c4309174b26ac84e7a369fffa1cc9bb6ea27646636a9b1bac30eaa80c6a', 1, '2020-08-21 03:34:52');
INSERT INTO `oauth_refresh_tokens` VALUES ('2748be0caa6a2e67fbb18c18dd995a844f3e3d47ef6c4d94419440490fc4972584d1494d6a4c5d06', 'da72ee9cf74d7ff746a6b2450d3b0b806aabb65a37e4234f84ac3c9d05fb1d195b3eee4c47f8c85c', 0, '2020-08-21 03:58:19');
INSERT INTO `oauth_refresh_tokens` VALUES ('8ab109c6077b4a282f68f5c8032d4f773db8edc3cdbd75988c26b4c5e8fdd5a2f7c11a9b250068f9', '10755ce91290f2916efe6e56d486b4b4d80c99014afbd91e677ac56874ce953d07eb22ed18d5df7f', 1, '2020-08-21 04:00:11');
INSERT INTO `oauth_refresh_tokens` VALUES ('c2bbd8716d516bbcc033a0568676b2fff40e5724e0b500a38940549855485b473ef40f6610272809', '4146d80d15bbdb6838a9ddcf720e070cad154ae5013f186a08efd9801b87daffefdb0397ca432976', 1, '2020-08-21 04:26:41');
INSERT INTO `oauth_refresh_tokens` VALUES ('fbf1c87ff7adb7b8e73e0921345cacd904567c450073b34046e5baefdc80855f86a6c78c603c498d', '7706419f98a76aa8228739c738cdec535a90e62542c53a8f5f0cc59a98ca51d443ffe336ea9c6d3f', 1, '2020-08-21 04:39:49');
INSERT INTO `oauth_refresh_tokens` VALUES ('516f859543ca6153b7f3babb2d02a6b7b723005cb96c7e19a9be8786995ac468cdbbbfd8b3f0a8b5', '1c7465bd4358d1825620385c211570a22190f755af47bac1ef97eb4818c41e16fe937b6db7e14fef', 1, '2020-08-21 04:54:08');
INSERT INTO `oauth_refresh_tokens` VALUES ('e8411011b6280abe43d3cc884e4370ad9d0c57615cf33d5e333407e8995c93932f49e6c2170406ed', 'f2cb85198ffabfa0ac40e2b2f26abf6b0b9cb1b29d91b8a834b1cd7471b1b7ca46ec6eba41f875d4', 1, '2020-08-21 05:10:53');
INSERT INTO `oauth_refresh_tokens` VALUES ('f961bd3939acabe3be201ea6d599bc8a5ce5588443939e32d7211cf82622fa4a6152ffa53e8fa4bb', '4a4cdaface58d8bc1254b6595f1959b65945079b48d7c6e83ffd7f1c75fc2f9942046070a672f62b', 0, '2020-08-21 05:13:00');
INSERT INTO `oauth_refresh_tokens` VALUES ('6d0dc902a819a683b591d0aef7306b0f3b1b2b55560389170ac49d094ab8f00633bb89eab626ac95', 'ec26a75792df34b7a33c28a09168226b2aa72555947c5a5d8671779b3d066c66eaaefc63c49d27e2', 1, '2020-08-21 05:13:01');
INSERT INTO `oauth_refresh_tokens` VALUES ('d6296c4f9bccb9627e43134e5a78b7273f7f1d8ee266aaea04be54484be2e5b159c926992a15fbb9', '8fb480d3ababc6974b9d9f14ead11d0719c5aac8962b95f44fe589a14f3faf1e560de38bb62e5a72', 1, '2020-08-21 05:41:24');
INSERT INTO `oauth_refresh_tokens` VALUES ('a91f4397de4957dc55a2fe81bea11dbd56757f02a238b077ada288b1d64fee829102abe3570f810a', '1ac42b6b5d75daacb3b13b57e06a981d4e56b59489956a54934bfa7fd7978659d6d792977348a81f', 1, '2020-08-21 05:52:16');
INSERT INTO `oauth_refresh_tokens` VALUES ('f26a3b643a6efcc1da765b4a764b1744498abce2deffd1c0b6076de6505b257db4845168130ddf1f', '10efc8328fd75d383a1c4eae1536febdf57903601f5f09fd97395d4eb3a30beaaa9a938b629d34e7', 1, '2020-08-21 06:04:58');
INSERT INTO `oauth_refresh_tokens` VALUES ('b275de3dd8189023069325e3f61d56bd2e17c6d11553d702ddfa4b68ee9545f0ce52e9e5f03756b6', '07b29168fd7df8a273a105d1d14a969e260cb5463b95466b8b172636647910338824e0760ed966f4', 1, '2020-08-22 00:32:33');
INSERT INTO `oauth_refresh_tokens` VALUES ('a8c51c4a9bd19f6653b19ab584ffc4e175f8ab500f1321cff320c4412a7de76a6a53ba01c46d7f66', '5b7ca9e41155c33421d2e79897d1a485a8313560b70424f81c9f74125c063e211b8ab681049a5702', 1, '2020-08-22 00:44:42');
INSERT INTO `oauth_refresh_tokens` VALUES ('90b76c9ba3d3d347589eb38fe728ebd0ce8ca761483391c743062c943cf7f6ce928e22bebad23a21', '2ac194cb7946febace85e0295147320e4f5431c2bc2d2b2103ec49b30fcf07e0fe445626750510cf', 1, '2020-08-22 00:56:35');
INSERT INTO `oauth_refresh_tokens` VALUES ('d409a3485d88fabcdc16a798a6fbc93982c89fbac22eddaf71c45d3f920ad1e435fea032775f2fa9', '4e8f90c44f026e0d5fc96c5519d08fff0d0b41320522d9a0b16b9c0e43a55ec6cfba06538988448a', 1, '2020-08-22 01:13:12');
INSERT INTO `oauth_refresh_tokens` VALUES ('098554d4b4f05d65ccc3946b421590a34683d6bdebd4788d5f4cb959b7d32d5a0600a25a4758f980', '1df6ac0d14bf19d6928d4b427e45b87d40657e57253bdea46cb631293d7fcd4182f37f1c7ba8ae6c', 1, '2020-08-22 01:32:26');
INSERT INTO `oauth_refresh_tokens` VALUES ('52cc19f2a4cf992618201b077c7e671871d1b62617535dc19a6d3678ed5a361d32e7cd6949ee9186', 'a9a86f0f1d4d54ec22eb5f037bd4064b39d2f1234826909589bfac423f5d50e44c6de3b4cc786c77', 1, '2020-08-22 02:01:54');
INSERT INTO `oauth_refresh_tokens` VALUES ('76b463bead75ce9e02ebb70a2d94bbd09ec1d184152e77538da8e1b98ea2d81d369b8efa15ad6612', 'cbce102bce4b62cff0900345074e48630e860aa03ed30d275ad6ef67e09f82a0b71a7b6e2020741d', 1, '2020-08-22 02:12:23');
INSERT INTO `oauth_refresh_tokens` VALUES ('4c718c92d4a4271d5ee3a0e4d61b7809f8474935fcb23c5d36136ba5d74964f2dd00c620c74173fa', '411b2ac2391b5af0c5f3677a6bee5c1a517450fa6487e51d4175fbabefe89dd7be4de33d9be60ae3', 1, '2020-08-22 02:33:08');
INSERT INTO `oauth_refresh_tokens` VALUES ('30468a966c76cdea4552f967fa1a1595daf85349426c6f3bc303982db2320064eaf0bde38e599c3f', 'd3a3bd7b6b10675a0e18acf1be0169a40b2e341e54dd41b804c28ac0ba5551041d7472896567ea3e', 1, '2020-08-22 02:43:19');
INSERT INTO `oauth_refresh_tokens` VALUES ('3d36a09f3fdd9c33990b1d4466d30d3983a3adc86c584e69c83ed2d21f45857a81ea64f25fc8ac5a', 'd5bc159dd1b3a8dfc4591d2e162b3a77cf3b26d49467de5d5af8ff2b46033b1aec15844a8a13ef77', 1, '2020-08-22 02:56:16');
INSERT INTO `oauth_refresh_tokens` VALUES ('2942af0c0139cc75c58be163f1d0db1168cad5ae624614653e655da5d134b1643754f34eb13ab33b', 'e872834aab5b355c1e768221dff4ee0037acf10792c1a3b926549858fd02f4f69f347201ead0c010', 1, '2020-08-22 06:24:15');
INSERT INTO `oauth_refresh_tokens` VALUES ('357363282efd72237742e98fe569900519c032536429dccf8d5660917ac4ce4894af5b39868bd551', 'ba7e31e23092c4bcb62800c1b0add73e51476f82a7f42a38d9cadb38d14e39ba972d52104982a835', 1, '2020-08-22 14:27:26');
INSERT INTO `oauth_refresh_tokens` VALUES ('24ed80e9083e8c1ca54e50953b7b485c9118d1dd0f41f16942ee083364afd68e1c6e7f85c66aba70', '08215261e662861d6400970acbe00d0449752d759ea95fe124149b0c9e86d4eba637fca96cc566a9', 1, '2020-08-22 14:38:07');
INSERT INTO `oauth_refresh_tokens` VALUES ('3d3838e7fcfb7123c5ac1059a271f0e6dc72a9822da8b4268df92b067e74930fdff28449c11aa2ea', '4b1008f8ca0054c115ae7053199d197e82df48d9ddf1e330428d1b8b8e0aeb7c3716dda38e4913b6', 1, '2020-08-22 15:07:43');
INSERT INTO `oauth_refresh_tokens` VALUES ('1524ea23f891dcd57d296016c7e513db9a4e8ff244599efbcc499d13341ddfea968c1beaa2dfce0e', '87eb218a9360cddfba50f4a8e199d7ec0e11a3449e7a9357fd2528fd323940f50f8067221f754f40', 1, '2020-08-22 15:18:22');
INSERT INTO `oauth_refresh_tokens` VALUES ('60219ece1eeb709038a4959b82ca95e853a58bbf56e7ea7bdc8dc1eaf4a4c89455f28e6b72f20334', '97241ef09252aec587e231829df24d29d8b562859ea22494378e4d0f6ba5a911d313e24b2d03168a', 1, '2020-08-22 20:55:35');
INSERT INTO `oauth_refresh_tokens` VALUES ('7cdcbd72253f5ab32a48ef812d39f22f3c56e8a108e0103a0d89cc888be68cb848e15050105b923d', '8ca007fdaf71d8537e8db3c0e45435b3c381f7be41e15b9096554a8466fb908319adaa0928728746', 1, '2020-08-22 21:28:54');
INSERT INTO `oauth_refresh_tokens` VALUES ('55f5e45c3f2730e7f8194f4bda31d96ff6995238886624162a60a9cd90f2efc2f7b88f01bb0c977b', 'd5670177b940d2b6f64f4996e05bc72cb847be8477fb7ad21322049556fbcbceb8e5c4e74f3a4943', 1, '2020-08-22 21:40:11');
INSERT INTO `oauth_refresh_tokens` VALUES ('4b8de4d623df4e594149da59d24fdc01a455df6d90ca4c2ba871ec9b2be5d8d2496bda95f6d987ea', '57cf422c9372c0457d7a450534294bf59e8de04745397bafd39c2cfcb33191cf787592ee1a13e33c', 1, '2020-08-23 03:23:02');
INSERT INTO `oauth_refresh_tokens` VALUES ('5f7beef5551585ea4354e7a818f14e796c08535c9f2100316bd99d97807595664f198a6270e2279c', 'b147d00457cdd733694ecc3dc4127727e8c046b724d4cb634efe406fa6263070cbd588adcd491457', 1, '2020-08-23 03:36:43');
INSERT INTO `oauth_refresh_tokens` VALUES ('a1253f76fdd0fb9444b3f30a6da7e5b32f1d3ff417f15982cd64f14b96a3bf6a97c62f7551fff43b', '09e4218d2f036fff7cd09fce2d557101519fca93feb56fecd29cd0882109d3b98d0d365ae866dd14', 1, '2020-08-23 03:47:16');
INSERT INTO `oauth_refresh_tokens` VALUES ('bb01ef57f64d917cb3e180ad2c7cd0817c6470ec0007799f8dd7fefc6d1226e0d278c860b57d11e9', '4d1639ae3f443e256e66af4493a90e79e797c33c630f10352cd7f69011a203e7f3a7c8cc53b2952d', 1, '2020-08-23 03:57:38');
INSERT INTO `oauth_refresh_tokens` VALUES ('35080dad34b527509f862adf7bcc5c8886cb6a9c12e3376bdae73cbf5fe8ca6f2a9784694f8211a1', '187ab409929659d9c1771d4d4e1564c2c4d5df8be3011efd631b213f7d3a41d9d44a83db4ae34a60', 1, '2020-08-23 04:10:07');
INSERT INTO `oauth_refresh_tokens` VALUES ('c66030e8371d81d4231becc133d3d9bb3f78559ab258a6bd636fead3a912e6c41c92b16184b01328', '1a648173429abd94cff81fd48aea1014c24a539ac322bec184b5cca56c54aa3702fcc3ffe98a3218', 1, '2020-08-23 04:39:40');
INSERT INTO `oauth_refresh_tokens` VALUES ('8aa52312148035740d74037d28fe5fef1ea6ef2973639fc9c6b101bdb1077d4c8df1369c5c458c98', 'f1911adf7eb92e81f31a2e1b5f7eec5f51acafffe576e4407a0b0e1829f8a2a5a58877720d2fd124', 1, '2020-08-23 04:57:06');
INSERT INTO `oauth_refresh_tokens` VALUES ('df2ab1bcee56c1137709328fb5fba3a5a030cf952e89d057fd7e999bd4c14733a46b3e535f83c884', '8c102313edf72edfe98356be95419b877d9f3ac0b58e3f8b2e378173792ef2a7cebd2ba770c1d887', 1, '2020-08-23 05:07:34');
INSERT INTO `oauth_refresh_tokens` VALUES ('4f99a6818682e00ff476c3d9a63c09ff1333b9a969a13483170a8895cf63027e62e45e37d0d473a0', 'dbcdeef3b0f9fa6df1e51232988e5cec100a72d0b2bd7e5a2f115bceb253991514adc776d18c9b36', 1, '2020-08-23 05:22:23');
INSERT INTO `oauth_refresh_tokens` VALUES ('319e6e590c981f2182d398f15cb51b16092d62e40d14edac21edd952a32197145616837303a74cf3', '00d152690ba36a43329f1b83b5a4900533128f2e0b83f8e3f3a51f7bae924e51557504ff22108a58', 0, '2020-08-24 00:05:02');
INSERT INTO `oauth_refresh_tokens` VALUES ('90f7bd7a3de0c16f84130830d8626138380f9288aaba89a4250390338a061583d4b600e652a8dbc9', '3b7206f35be4e1d954f6ffd7a94dba1f723d5d7920f0184db9ebd6fa84e55431c29806db17600e7c', 0, '2020-08-24 17:30:26');
INSERT INTO `oauth_refresh_tokens` VALUES ('946f6cbbcc0f7d7e3c8ee50de802e23142b90deb05937af607c46b25fc252322a05022e5de7f6d25', 'dfde96c5c68415cad37cfe0538c170cee3c06cc1d7df5b104d54b460885655bebc680099cd5d593b', 0, '2020-08-25 01:58:10');
INSERT INTO `oauth_refresh_tokens` VALUES ('156a856148de05a40ac5801152bdaf6f64557cfa0a4fd298a94e513e0f863fe8a0e1bb02153d6196', '56532847cde7d49838c149efb177ec5875e49fa693d94526c6043367578abd678366d1de95d75c17', 0, '2020-08-25 02:25:22');
INSERT INTO `oauth_refresh_tokens` VALUES ('dc2d54a552291819969be58e03eff395f56dffb96249892fd1bb99656bd5eccc1e760f368701d764', 'b4262fef9aef6959e9869ca0048230eec4871b48ab228dde75273910738a5de522ca41b6cadc295c', 0, '2020-08-25 02:43:43');
INSERT INTO `oauth_refresh_tokens` VALUES ('3c3b5110d97fe4719b83b8c0b2ebbbb235bbad3fba2772d9192fd00e7c362a0832d31e708eb5b720', 'd851c632c7f15ebc559ca8fea0088c56eb7e19ccf1863316383814c855ed810eb727bc9c4e209703', 0, '2020-08-25 03:15:45');
INSERT INTO `oauth_refresh_tokens` VALUES ('c7dfffc55b7ca47bea0772c4ccc8cdcc757055b0d319dd6a3c9df6173065bf2998b6b972a1a66bad', '9c388508a965d89fc60f20c369c833bf525d444fccf205e078240c6d0cf880e74ef174a2b3912ec9', 0, '2020-08-25 03:16:06');
INSERT INTO `oauth_refresh_tokens` VALUES ('330b5d05714a1b9265d94725f41bb6dfb0028d2b1ee1b192baf135ac6ba78a0031c8939fdaa4c8ee', '7d84da7edff8c7e84cc6bbe877cda18998968d102d45566fde340b39ce1e41ebfc4020e8f44a95ac', 0, '2020-08-25 03:18:15');
INSERT INTO `oauth_refresh_tokens` VALUES ('440735fe7b2d4468c8d1fc7bc828a2a507516926c399bdec03443d26c2e557c86708d2c391d523aa', 'e8287ba709e04445d89feb1723aeea4786d98606c09b1c0d845d3846deeeebfa4f33d1482cf9f3e9', 0, '2020-08-25 03:19:00');
INSERT INTO `oauth_refresh_tokens` VALUES ('11bf1997f20798c72cfd529ad94842e62f4d1fc6bc64299b5ff07a95a9dca68837e976efc20ac050', 'fb9cd51662552bafe91cc7815cef637e158c0807a2a83b2721d0e8578e99ed497595dc06fdc9ff90', 0, '2020-08-25 03:19:42');
INSERT INTO `oauth_refresh_tokens` VALUES ('dc55aec72f3680ae184f22d868526b5174557bcf04c03646868a4e6a8ab9b205f421ffe5fcd912c2', '56c6fce6350c35fa8a6cf5330e5e69a926e63d8af809f8107d4c8a288e31fc05905490279065d182', 0, '2020-08-25 03:20:03');
INSERT INTO `oauth_refresh_tokens` VALUES ('3c120863fde98424a64c23a9c1837cb68170e6b47a0d1a8784c8d6368666d6b2bb748775f6f56e52', 'a06bfbaf7bf61ab9581844189d334b81b24eb7bbb5270f15ef5a5f02e87a78c42fafaa820d62e552', 0, '2020-08-25 03:28:13');
INSERT INTO `oauth_refresh_tokens` VALUES ('73801a89a5b917cc323ed9c3d44ccf9e26b52933cff099629342c137659ffd8e48c23af31c845d73', '780282bfb280ffc19f56cd57c4187e5574fb8d78ff0c19091640ab01d9605b1a6aaeeb3dea0ba24b', 0, '2020-08-25 03:29:06');
INSERT INTO `oauth_refresh_tokens` VALUES ('f2e8cfda3568b616d32af4f5fa0c088a935e10cf5804a4ba38b8e8003899fa2bfbdbdb31511f6f05', '9cb54c992b4bbcc92c333506602b7354f6158ac51e477a4dad5fca6bc1a1cd1274c44d7175176217', 0, '2020-08-25 03:29:51');
INSERT INTO `oauth_refresh_tokens` VALUES ('a4ccae329f1074835dac16a6e02fbfc0b2d8ae34c42a49f8c0b45724d7a1179ceaa46c581a07889f', '36c33ab92f9c9217c535cb4aa3fac7873632ad3b110cee2ed1ee979172b5e62256c0d6f811269eee', 0, '2020-08-25 03:30:07');
INSERT INTO `oauth_refresh_tokens` VALUES ('fa28b18fc9e69e2400a55d1669d9380cb803a025b6dd873d1a184a827a5336f34986096ede306c21', 'c3547ac8e86acf838e9870340e81191e170ef9d7e10071286c6a762e8c02c03c07042d17985b4e55', 0, '2020-08-25 03:31:08');
INSERT INTO `oauth_refresh_tokens` VALUES ('26e8e67c9fb9f4a14c77bf824c2453bc58b4d7854d18cb0685771e4a1302bd0a2eaf82aab12c8c54', '841d8b762d8adf4304142f91241c97fb1327324c3ac879413c622cc30995bf6f04ce2b78de9b2f7e', 0, '2020-08-25 04:52:13');
INSERT INTO `oauth_refresh_tokens` VALUES ('e77ba0d1ebb6df66aa55dcc0fd088015ff0a496d85aaffd46e84cf0f953dbd313e15819e22e342a3', '6a9146bc53cea0d9c24720535cd76fd169c81ae30cb5d50d04ab7a907b7525080c5945a549e08997', 0, '2020-08-25 04:52:56');
INSERT INTO `oauth_refresh_tokens` VALUES ('b7fadfc9ea34dca87e62a6b2d5bb5eeb1b0d3f73c7f70930c6cb20ba5b78c21d179590c81b275ed7', '3084b896219f8e385ee1f9c2c9d467ef5429d87c97a3e18874e5cd5fa0c4c1e4ba3e750e5c349a32', 0, '2020-08-25 04:53:34');
INSERT INTO `oauth_refresh_tokens` VALUES ('7312cb7fbdfa5cc45131e7f25f21d19652f2c0da5e9169321757a515e14f5e395bcb50f5569d8bcf', 'fa598ae018dd3f534457d914e5ea5990d0e75820a64bd13555dd8af9748b9f6c3f76ccf3094db261', 0, '2020-08-25 04:54:06');
INSERT INTO `oauth_refresh_tokens` VALUES ('949d9a5edf94b6555650fe4bb481b9be8dc91922ad87e2b92a169bc12fd48ba235b1a9469b44296f', '6d51a278bfa3f665b93e49e05c1e39d0d11e186da45400f2d8a46bdc1d953c90863f54ab7735aa26', 1, '2020-08-25 04:55:35');
INSERT INTO `oauth_refresh_tokens` VALUES ('41923e853b8c29e1dbc0fc2739f75446f5023d689bc5beb0c6e1b3bb6305951a97e63450c0cda0e5', '4453c19e560e1acf1f146ddeac88b45c29f8b8dd76c16adb0df64ffaee17b1d19ea53bd07b5545c7', 0, '2020-08-25 04:58:17');
INSERT INTO `oauth_refresh_tokens` VALUES ('c8085d167e1451f3fada4746bd2603914a4743d6d0c4aa22b152397c04e46d296798374954dd3db6', '2c33be20e3c49c137a5078d68cb2279cc84af1e5d1a6fce93301877975485ab6747aaabb189f0654', 0, '2020-08-25 04:58:47');
INSERT INTO `oauth_refresh_tokens` VALUES ('f9a27add911b7ab9f23a621993b5f10ad02fbaf50364c4ecff01e7e486c00759387b4786cec0d48c', '64d461ecf87cd34fc99644c559521c168c18682f0e934ef0f66d70ec1d7ccbdf6f32373588a3ffa5', 0, '2020-08-25 05:17:34');
INSERT INTO `oauth_refresh_tokens` VALUES ('655c644aea59f4da26370958b2d5d7982b55db35583fc211bbd04d7812504ee84b8459c3f85dd04a', '82e600527b562ef1c81ff70fbda720c057db101665c9bfbd6f0ade9caea1164b6ce743095dc85048', 0, '2020-08-25 05:42:16');
INSERT INTO `oauth_refresh_tokens` VALUES ('9055bd0041e36c001f2594c9fc9525316f806f140043874f2e897205622d3f834286bc7623d87043', '43566e6875b7daa5521d559841a113565dc006dcf0a548a8bbe503a79a7ae96ebdb65494c166f1ba', 0, '2020-08-25 05:42:51');
INSERT INTO `oauth_refresh_tokens` VALUES ('3f7896ccf21c9a27924da8049e7180f59eae24c66d13d1b474ddc46279ee023c9f4b2a95bae4b8c2', '9ffcb9fae85429797a46f6ecd172d5abf6bb313431f82ed6e81d5ed82d4119f0acee30faa5d31e19', 0, '2020-08-25 05:52:35');
INSERT INTO `oauth_refresh_tokens` VALUES ('bd152da2901549b5a6208aa3ef0bff4cbaf6a0148194713b92bbb8a554fcf00bcd383641f6c07cc1', '4048116c5d9082f2b67bc3d93c97bf82eeb76b286c5d26960674ceb9581be4b274d63765a5ec9517', 0, '2020-08-25 07:19:46');
INSERT INTO `oauth_refresh_tokens` VALUES ('957417d490fb40e4731a8dce0c90c342967c69d971d9475c63149372c8094a7bc0e97adc308eacd3', '9f6dbad7193f5a69820cdf78448fa52300c3c39c5cc8a4911de66fa72e6bf8c9ade6fbc627753a88', 0, '2020-08-26 03:35:21');
INSERT INTO `oauth_refresh_tokens` VALUES ('faf2d3cb76557ea598cb92bca18bea95c210dcb89d7178c8cd77cc3249fb99802e29d0a9216f0940', '3644c63aceac4d46584ec85cc562e6d3b45aec53941327f4a50e24a665d2088492b17fac262741a6', 0, '2020-08-26 04:37:35');
INSERT INTO `oauth_refresh_tokens` VALUES ('5ff6f4666891a5476c698ce832b24d0b131cc7d0b795c0cc667c677b05bdda9cd404a4bdbf4cb91b', '4f307d9da632f4ea60399fd71458da699951eb0b054ee360801801476b48c9e638fe57421f3f3a68', 1, '2020-08-26 19:25:52');
INSERT INTO `oauth_refresh_tokens` VALUES ('a7b0ce291317b808b9be1fb02729a1057936cc4cebfc878f509e888474b6ecacb89cddf9f304e1f2', 'ac5c7a5c00392ce20d4bbaf434608214b0636e99b89db6b44713f37d7f12f133d27c9b18a09b9e7a', 1, '2020-08-27 07:34:48');
INSERT INTO `oauth_refresh_tokens` VALUES ('9a4c5f3ec96cef4d08d58ea158a2813edf49f13499e056048f767e5bdbc799f6d55d4b3ad18bf9d2', '5466e5ac852064abe17e454e54e433c3a95e2048d6b59305447598180f89fa75dc12d40f1f40e6da', 0, '2020-08-27 13:04:27');
INSERT INTO `oauth_refresh_tokens` VALUES ('10828001aad47401b52c03fd8351018b9f19d4beeb1ac9439fe50be9ead44113aa880a184547506f', '7eb570c85bb78b0a5c4a06cd799ca0653342f6db86864c3bcda89d58fbb64e97c36b00e65d8eb194', 0, '2020-08-27 20:41:15');
INSERT INTO `oauth_refresh_tokens` VALUES ('f08c3923759efd2fb22640d2918dc8e092200014d621ef36bd8a931f86f1a7d8125df36d26f07917', '45375dbdafed3bf76fccf151809203d2282a0fc4899b1648ecd865515e475e34b628494aa2c4976b', 0, '2020-08-28 01:00:50');
INSERT INTO `oauth_refresh_tokens` VALUES ('2ba72e572132d5f1d0271add89f178a97cc22e02bf5f6f4afa91dec8fe4783fd0088d66e79ea80b8', '361ff4a3c973e2852408a27dd935d04d94201f27ebf376f57480572d61c4190db133a3ba83753518', 0, '2020-08-28 05:05:38');
INSERT INTO `oauth_refresh_tokens` VALUES ('82bb3df13bd4fc79c0f4a8bb5cef3c39452b6bc7596c38bb7f43083152cd4ed39ec96595142ef29a', '3294eddd9c3477225b02d0395e0b11c17dee571be5859653dc371ed862338c25733b1e355235abdf', 0, '2020-08-28 06:50:40');
INSERT INTO `oauth_refresh_tokens` VALUES ('1d45ec6663bbcf9404605924417d09ef9a5768826552116ef3cc8e509af89b604a323da02b784aba', '4eeb4842f99250e2836bf72122df7a2f33b5c61d48c1228e756930df6b2ee8218028b1c1a6d1f625', 0, '2020-08-28 07:23:53');
INSERT INTO `oauth_refresh_tokens` VALUES ('985ed197c7af169e76d09c4d82a0d6c88935323f115d32eab6fe0d169bbf6cb0e4b2f142883d4621', '65748ce417c02461c5b1b4f4acc8f0d0183277a027bc1fdad20efcad0f06e26dca014658b6f92a89', 0, '2020-08-28 07:53:15');
INSERT INTO `oauth_refresh_tokens` VALUES ('ee34be97d0f5cda9f5219af3287e063a5b864494fe7efa9ae622ecc9184d1ee0bb43db9f9292a602', '3046e01e0399d9c5869776d0883fc96c61404e6c52c94537b67f68b8ff75ab2b645608013a65aefa', 0, '2020-08-28 08:03:47');
INSERT INTO `oauth_refresh_tokens` VALUES ('95e5b4320165b089536ca87165c8c7252c3e4b613ef67614dc6fdb8ee69e47fc9550963f631d7e0f', 'e1ba8cadac30977177e8785716b7282b0a03c2f19dd04ff7cef9599bc3d10fd462d5819ccb07f384', 1, '2020-08-28 08:50:21');
INSERT INTO `oauth_refresh_tokens` VALUES ('bd1be0af8228e5c562dee610f479bed73526008e746edfb5cf7144720ad2cc5e0956d854c4592ee3', '6c3543d1bb989baa985f0ad4e1cc1cb7ec3ab57b4f70d6b99bca6eb81292e7159922b086136cd82b', 0, '2020-08-29 01:34:31');
INSERT INTO `oauth_refresh_tokens` VALUES ('9d147251b938a9b2d8e9717abb5fe078d3e50d11c306b4c8acea6da3de8f4c9924d14cf9d7222aa4', 'a7c70d67019fedf5141aac97f23f9a2ed299d48e768f8e31282a385ea4126bb079fcf5c65f0f051b', 0, '2020-08-29 01:51:04');
INSERT INTO `oauth_refresh_tokens` VALUES ('4fb839f6a6154746caa4a53a5b0b87e84bda3dd173228f6f7d035ab3ebfd9a8f8320ec4aa8391f94', 'ccd4149246a6d368d4c5e6a50c7199ef5564f12b9c938cdb97dafc6cd843891cf105cf0188d7d295', 0, '2020-08-29 07:41:40');
INSERT INTO `oauth_refresh_tokens` VALUES ('c6474e5144443b9af0df1c44f1e3944d58709aa6e83f0685e9831561b8bb833c979e79e8992e0bf8', '7e59caf7da6725e605675bc38a603dc5b566d313e67d1534ee0add17c39c835f68fd4ba514479bc4', 0, '2020-08-29 08:04:12');
INSERT INTO `oauth_refresh_tokens` VALUES ('51b458ed34c0661fdc086615a3d7f8180640dc311e88eea90f5b5f69531703bf3ffe9413e7fbc213', 'b13ebfb80ca0dcda79b15031eeb6c74c6ebe3034d3bdb2b2c8a62bf872902d2e8e42a5d4e50957e7', 0, '2020-08-29 20:48:28');
INSERT INTO `oauth_refresh_tokens` VALUES ('14d5b050f270ac95bed9e9ccc622a82c82d0577331b76f52ee3c56c904984797861b92fcc9591dfa', 'cc326dd0faf3b76a4211a16845700012b2a794ff930e686c4b09c3c9af6991be004f74e4f9c951e0', 0, '2020-08-30 10:38:15');
INSERT INTO `oauth_refresh_tokens` VALUES ('792e5e45eba2f27456d3d8cbefe44384b1b4dcf338ebe884f43dd8096864903a6a273b130b1eb384', '5c9587af29db9666653cf975e32a0a616ce77e62136c85908c64dd77199f005f4371fe8b70c289cf', 0, '2020-08-30 12:54:55');
INSERT INTO `oauth_refresh_tokens` VALUES ('cdbf92f4accadf8c4564215f867270381322501da1a547b7b2f576dad37ec3718b2df57448e054dc', '310fc4bf308c3a52b335b26b56d30cd5756701b755bf96b344b18b7d4bceac795f937bba17462199', 1, '2020-08-30 12:55:40');
INSERT INTO `oauth_refresh_tokens` VALUES ('78df0c6d05a63080914bd02561e4324edb7d1a712b4027b81f77d5cd8cd0f60420160233679e5941', '2ddb6ed15ea3293cb7fc394f341834b84927399909153c6408c32e92ef6c6dccf79f384d6a6b96f6', 1, '2020-08-30 15:11:45');
INSERT INTO `oauth_refresh_tokens` VALUES ('ff63d912c5f0a1c50ad14d971eb5d77ebba984de55e20a1145aace47552cc37f20ef71335cafebae', 'aab6eded8fcb860dba4bc5750749a5b7d2e3b1ecb6d35f4091394c36f90ae2e3ddcca6cade844ddb', 1, '2020-08-31 05:35:47');
INSERT INTO `oauth_refresh_tokens` VALUES ('82059c27d197bbd1d0b1fac6347fbd84c56d14d23c16d90341f07d782509ff872b180e7270e4ea3c', '3b63bb4eeaedeeaa40df8840044cdfda28e9ccbaede0c919bbfa53d5e080ad63cea4b3dd6e7d6950', 1, '2020-08-31 12:22:41');
INSERT INTO `oauth_refresh_tokens` VALUES ('60b9e75ebe030e76c6fb714b8800417cb9ec0befd1fe814e1abbdf83a857ef0be7df2b03fa2d663e', '6dc5d5107c1b0cc2cdbbff0e130214276337b93123dcc59261097d64f9352dc238001eeca6b422d0', 0, '2020-09-01 00:19:33');
INSERT INTO `oauth_refresh_tokens` VALUES ('fe5b2ea286dfe7c5d9626404cea76e82fd8e1f9f2d676242edde1bc9b7a32c812848806e3f50ae59', '5320b768fd9479118ac2ecd0447d3e2099dc9e39da7a780f1f1166804f2558fba7101fb2dc2db120', 0, '2020-09-01 05:49:15');
INSERT INTO `oauth_refresh_tokens` VALUES ('05526f91f6014a648d3edfcd6d93a181a5a908e379eb26b93e407d70c539c289aa045c6ac93b2a6e', '7ba196e2452b80fec11be0f63f35673fdd433b34ed2b5505c7518d9a59748a8ee697b9f3e2954575', 1, '2020-09-01 09:11:31');
INSERT INTO `oauth_refresh_tokens` VALUES ('85bf0e76899a8de10f8edd2c5ad41497c9bd1f7115821ea21876f93122c848cb1fc937c6c7e08c3f', '8ee875edb785b14b4e40cadba5bea15004edf1d69829e658d94a01968de2d491aa60debc72e2c901', 0, '2020-09-02 00:30:59');
INSERT INTO `oauth_refresh_tokens` VALUES ('4007c6728717b7e48d280b7dffa36b2066b070db27e20b0a7d766eba4b745ae222ec06331a9cb6fa', 'b2288a165a5297ee8e366ea02ecf180d17a2620972c3232f55253ed7e151b84bd2fe4e4becfd596e', 0, '2020-09-02 07:13:11');
INSERT INTO `oauth_refresh_tokens` VALUES ('131bc5e1427b01fe7564d2175dcbc3b51123f76b847dcd856012396248f980005bbc877812f71a9f', '564e172e047acee87bbd9ee35e277c7f2f85038c9027e2dc1a2c9e727eebed13d44ee3689d3dfbf5', 0, '2020-09-02 07:32:26');
INSERT INTO `oauth_refresh_tokens` VALUES ('ede095c6fb4063a905c868e3fd1fd9beed9a2e5d639cf9572a4410ce6658982636b27a586547fd90', 'def7952c02e07a1580a490b750d116a066cd3ee23c52dace49e548d19a50422b83e65de18f40e5e8', 0, '2020-09-02 23:14:32');
INSERT INTO `oauth_refresh_tokens` VALUES ('60f84539481e7214fadbf386e129c93ad4dd67f796a3d996a23ac03c8609406f3260d46c4897331d', 'b44c3b62cc3e4859fa7d40f279fbff15ae1b68f283dea1d30318096370da4bdb6059b07a821f007f', 1, '2020-09-03 10:58:59');
INSERT INTO `oauth_refresh_tokens` VALUES ('b69cd89f5033fbf5687b867662316a7daa1b83e8973ca3b42ecaeacb7b2c0f1da2dcadfdf2b25189', 'e5c9a1b2b228a9d5ec575865ec6be0654262f0002123dfa36970c58c13dd6ca2ded610726fa775e7', 0, '2020-09-05 08:50:03');
INSERT INTO `oauth_refresh_tokens` VALUES ('10ba4951a963b8580cff86d79d0f1d57941ceb6526a0b04c89f598cc6cae817993837ea644ffedfe', '0a9d8271c43a1059fe68e8f6d65594908fc1053d737ad32829bb793d8b8401c0650823d718f631e9', 1, '2020-09-05 09:25:00');
INSERT INTO `oauth_refresh_tokens` VALUES ('6c465df4f7a61e9345f48f8fc2e56a26a2eace044824f0458f7599df45737ff8d22c5799d343904b', 'cc27367501f0e3680d170e87790e58f33093ae9041c3edd6f31f8d2fec6084e1f4e9dc200bd05ddc', 1, '2020-09-06 06:59:42');
INSERT INTO `oauth_refresh_tokens` VALUES ('ad85cd9a324e038a0c7527e5ee104198c22560d3e130e021873105a35396ed65f6bb1de633f7e978', '4ac78f846e5abfb799ac1c021a37c64ed67d3535a321df20ca3964138f3ff28e76f4644dfabb551c', 0, '2020-09-07 02:26:14');
INSERT INTO `oauth_refresh_tokens` VALUES ('6e739eef2510c0a3a81a6f12d208beb6bf0541b5371396df5324f392ce0c9605647eb401be79f9fe', 'b4d692cb2cdaf09a5b1304fff22fc301c5ac3648855a484fab0f93440af2f8eb140dd17d6ba17160', 0, '2020-09-07 04:21:41');
INSERT INTO `oauth_refresh_tokens` VALUES ('4d21f0c8d96b0192718a3c1105066bca86587168b7db14081e69813de716fd6bdabe8490561c7918', '4d8c38e426e270ff6ad3e6b37357a9ee891251aa0dc232bd289ce4a9d22e4e8c978a62c4adbb1c9d', 0, '2020-09-07 05:52:33');
INSERT INTO `oauth_refresh_tokens` VALUES ('d59336def4e9a2d9be53db3244c89f4b3af5821e681bf6e6cdc49c7c3df3fdef9cd7079e450fffa8', '6d4c0839fe79aed6488629e18c0b1f7585cc9917963f79391cc3641b29d629fbfa4e96cc9a8cea1f', 0, '2020-09-07 06:09:48');
INSERT INTO `oauth_refresh_tokens` VALUES ('6c64e9cecaa197df372550fc181bb1b9da380f62b564eb190cb8264eef52ad250cbed4cc8507e2b9', '08f2771b60da0aba273f3d3f0c5b3bb3c1724697d2b12fbc0e90147926e29868babbf2058b612ca4', 0, '2020-09-07 17:44:16');
INSERT INTO `oauth_refresh_tokens` VALUES ('ad152d6e9818e39fed3067f126bf44ab5148582bf60b339e16e0c3748abe005089d5e73ea8b72257', '0a80c62422da891f9acb862b48815bb383e3c7b51978e06d31d8617d05bb3aa74c5429c910f76917', 0, '2020-09-07 17:56:50');
INSERT INTO `oauth_refresh_tokens` VALUES ('d14e431f6bef2f7112cc27a822d0b348c9a8b64c0f2379a6e76c9c3654fd5d7d664450adf02bf9e6', '2797a140b4ae32e599ae29cac4e558aa6af3389635e12b0458574001832480ae8cae0ebc6002547a', 0, '2020-09-07 17:57:31');
INSERT INTO `oauth_refresh_tokens` VALUES ('705ba59950804f4160bb03e79f9574d4f86c50fefd89a6cb7a409470ff26a193201d433697b6a1ae', 'e6668d8785e3d5fe5fe8830ba51f8963f0f3deda1f208b43c3b94bc6ea7f783f4490bd525adb7311', 1, '2020-09-07 18:26:42');
INSERT INTO `oauth_refresh_tokens` VALUES ('535c126c6a83c7b6f3d9a92f28101b3db0b179a7f3769f6edbbea1f035f2c86985d503125e84a76e', '37478410eb79d556e18acf9711f4d56d6e93c8e4cad42d34a7aee20d808624deb586d058304c4def', 1, '2020-09-10 08:17:19');
INSERT INTO `oauth_refresh_tokens` VALUES ('2010f77de253c9ced1ea63996cc053487d7aad5bd7526dc7116e36fe31d6eddf1d06fa2f056a3979', 'bd30f6c06c0f8c6bf24e65de7d1ae686d9acea39580a5b93c7a358cd638d243e6e99890ed5a47196', 0, '2020-09-14 10:37:18');
INSERT INTO `oauth_refresh_tokens` VALUES ('ffda620af2d3a93d66c80d2259cab5d612a53b0ba29c5741f924f43b014040ef7801093fa11ee4d8', '6341db470e7625351c4b1f9c9ff6f3334a08cc195223d5decfd18a3ec1958d12d0032827453adf28', 0, '2020-09-15 01:36:11');
INSERT INTO `oauth_refresh_tokens` VALUES ('25835a46373c72c11aac011c6f0daee6fc2cbb7fb22c13b6b9b73e0bdab9086d65bfbb2ad7984312', '6877f769c06c0b49c0093724a66a1ca719839a626171c188518fb301246b44190a8d894a56a8c43d', 0, '2020-09-15 01:36:45');
INSERT INTO `oauth_refresh_tokens` VALUES ('97c1f5914793ade3e7c0bde5c252b1fa18cd6ae0e001816d279f04c318c683f8b814fa2a9dd48873', '8746d2d20439b18faebfeee1bcb4d3878f49022ba72687a12c3938c7e731d8e4499140b332943df3', 1, '2020-09-15 01:37:34');
INSERT INTO `oauth_refresh_tokens` VALUES ('bd5a7d3358dbb96a6dd38bd8857608e4769104d4445f736d0da1440b918d4eb1d04df10fc12b55c9', '87cd97b50fe1e1cd3d2ea7543f913da90ef473e232d255d6c9f0a60ba7c599d3dcf5e21aa0d48ab7', 0, '2020-09-15 18:18:27');
INSERT INTO `oauth_refresh_tokens` VALUES ('74edc8c368139ababcdda53841d14855b4ca08267ae0b573b1f40579cc7c30a09a70d24a8b09b059', '7aeaf4255c984178f2d001f99d9858fc19522a713c223721bafba1d32c20b9da413c14fbe6a722da', 1, '2020-09-15 20:15:08');
INSERT INTO `oauth_refresh_tokens` VALUES ('815589772bb0eaaab2b8d47f1a8b583890fa9f165014e20be774c41d46eb65bf3af576afa18d62ed', '23a9c76b3e8be80158ae88c2b65c29d4f7dc5ca373b9196860bb2ab03ac1980fc3ff007e1d774737', 1, '2020-09-16 12:55:46');
INSERT INTO `oauth_refresh_tokens` VALUES ('4709dcce043afbb30c02675e1f9d5949d17099184b7bd9761b9cff0afc3d81f01d809e0edeedc4a3', 'f9365466922434cd7b7879a2a569ed77207d5a33860e5b5a0ebcedfb0fd8e3927aa7fdaaa5552dcc', 0, '2020-09-16 19:59:19');
INSERT INTO `oauth_refresh_tokens` VALUES ('b55b903f7fdc94664ad6f61aa0113ff1dd22654a917ab5622a9d2d9c1c1de6d94cfae89a65bed119', '4763e12317b1c528b81028752cf673b71078edc35b433cebeb64c7c2a9bec9ef20e2b0bdf262be33', 0, '2020-09-17 05:46:03');
INSERT INTO `oauth_refresh_tokens` VALUES ('48a43d84da115720b9986d29dde64ff8b49ea4550683bf1ad59cfcef7ec8c5cb7c27fdecbf761f30', '335437d35e54c5a5345d575742bbc4cc9eb0922dea78da8a2ebe54b98d2dc07e5e744cd7e510ffe6', 0, '2020-09-17 05:46:05');
INSERT INTO `oauth_refresh_tokens` VALUES ('b37fd15697138c12495bb2552b0ca3a85e81ec9ec586316cc019c0e087d47d7c41d5fc3eedcd78dd', '3f5270b731b0d9f5e9b231b399c050f2d9feaa68c3098fa97e5c8a416bc5ecd0c9142bff86453bb1', 0, '2020-09-17 16:02:16');
INSERT INTO `oauth_refresh_tokens` VALUES ('2b4a7a18e9fc1bb24a51c6823b42248445d3278fe153b5ece482e94d1c8026946db33fea4b220aa2', '654d87c8e7a398ea04440ea9cd0b22cf036998c6c33629e1a3387cad54097524d9836d0c4325e324', 0, '2020-09-17 16:06:07');
INSERT INTO `oauth_refresh_tokens` VALUES ('c37b55e53e2b6bd3c36e733962772a9e8b181d7b6d7baaa3aca12c1af68d7ba3a36c3e39b80c8fa4', '06c0adb92c032697aecf7fdfe1afaca472f1005501f1ed1e2ab1cde20102d2c2784a46ac78c13a3b', 0, '2020-09-17 16:08:47');
INSERT INTO `oauth_refresh_tokens` VALUES ('73b927de1fd48a4498328a939f04a10704be68ebc7f8c0c8281dce86ef45d6c3599a1e9af6f18d99', '5026b6e72d5eb6d42c8f6622a0fd1573fd4896be0f716694df5998edef199b19ff1d2bb94b663b17', 0, '2020-09-17 16:09:02');
INSERT INTO `oauth_refresh_tokens` VALUES ('d043c2ed2f88b8f0e575cc999adcafcea7ad676ec8304530b16b36074b110a194dbd1a5a8ea475cd', 'dbe1c4af75698a92dc0b849768a540e60776f3d2cc720dc3694f78fbcfbcf94fda46ff7a5eecc772', 0, '2020-09-17 16:34:22');
INSERT INTO `oauth_refresh_tokens` VALUES ('b66fb68aee935791d7e35640f63c25ddee87503b480a1b17b1df54b8b0fbacb64637cba1881407d3', 'e7831be638f6fd51d9c1b470919d17ca399b9adf90763d5262655d655d48bc3edb2ec42c3e22822a', 0, '2020-09-17 16:34:38');
INSERT INTO `oauth_refresh_tokens` VALUES ('7502c159ad93751949dfd43c11e7d68d816b3100a21c8f46365175964682da12134f5b1197dc9729', '53a6a1fd48e32ec95da353caca028ce5c4dff99c30a53681899e3be8f7432fa0a40028add553c54f', 0, '2020-09-17 17:16:42');
INSERT INTO `oauth_refresh_tokens` VALUES ('2a926abdb087755ce3c5258c13c41765156e85b569bb789f50fbf5984ccda7d01df738546b8fdb26', '4a497c791e47a35e0d709908049bb1075229e275d3f1db3bfd978016068ca30f85eca98d2ab0199e', 0, '2020-09-17 17:27:05');
INSERT INTO `oauth_refresh_tokens` VALUES ('79b7355598b5a661955ae485d5a0ff2e07bfb4c39f0681e0d984c3ab8092b1a6e1c2a4684a02d644', '82cf0677ca00653f3b8cdb9bc94e725ef98a23e29e805c01e6cb6ef7b5baa0939470d475b09f3c55', 0, '2020-09-17 17:31:19');
INSERT INTO `oauth_refresh_tokens` VALUES ('ec1f95428389372aff448fb84e0c80386ebc044785285b765d7f394714bf17955cb6bb90fab46b92', 'aa9dd7046a1d3cdc6e26b0e59772e8712f06cc10e07c33d9e97f7d0e5c2e655957b73561ce4e1b7d', 0, '2020-09-17 17:37:10');
INSERT INTO `oauth_refresh_tokens` VALUES ('a87f7f1ce15e43e2010da764c212119578795fba814a6d718176f313c38950323b884b6d54460df0', 'cb5d557f293beeafa92da49fd4004e8f3810dcaf440cd283f92e7b5ca166b03a0f1cf2111b7f2e42', 0, '2020-09-17 17:37:56');
INSERT INTO `oauth_refresh_tokens` VALUES ('3575ecfd74a95bcf75ffcb79c8be3dbc1e5086310d5b4aa722cfff3dd001cf52d7543655fa20080d', '970ceba1b99aeb48705c4d1a816f9d1a0a40fc59286adf5e94991742a9217fee12eb8e25c733a8a8', 0, '2020-09-17 17:44:28');
INSERT INTO `oauth_refresh_tokens` VALUES ('fe13f2a25b56724abc512dcdcf6001fbe671f436d0b7f8bec3a436843e1d769dd74292e3f30355bb', '34725c54ce8fd76fb66a6745fda484f95c2f2d401b0d219eb295d7252b0389aace7dde5cc2d1c0a7', 0, '2020-09-17 17:49:13');
INSERT INTO `oauth_refresh_tokens` VALUES ('114d9abf1333128f818a080944bef0484671ca8c6079ec202324d4b44754eb6daabf273e97838e4a', '5ee06e9b04bb3631afe241e5fa1521fcfe23aa14b30d144f098e7b74810b86d815c08db62c10c5b7', 0, '2020-09-17 17:49:43');
INSERT INTO `oauth_refresh_tokens` VALUES ('82f7c7682aab49fb48fd132c4ceb2a5b660517580cec14fe96929f3b7d19987a79a767533c413dbe', 'e7f2031d5dccee062c178542867e91c3553e585259f450dc67d65add35ad93bb6768a36dfae47ec1', 0, '2020-09-17 18:22:33');
INSERT INTO `oauth_refresh_tokens` VALUES ('f50d4a60860ea2b4d55f590d626f371fd0970a70dd9c1b80035a27aac03c177778fd195d20bb737a', '78f02d75fc9739e2867bd39b50517506930d84cc57df62eb6666489afb9d2bd30e13b9e7744ddd99', 0, '2020-09-17 18:29:29');
INSERT INTO `oauth_refresh_tokens` VALUES ('9bfacb9063f644b8f0e9405bb0df184081262b3f228e849d403e566fb754dde67d9e503cb871874b', '488d8ca68b301ee07a959bdfc05408be2cb8d9fae8620e8bc280b3843e1dee6586f38da370c410b4', 0, '2020-09-17 18:32:05');
INSERT INTO `oauth_refresh_tokens` VALUES ('0c7237504de0a3c546a79fa5f995fec2447f496688a144f1354c1ac389a216f53a61e449d2340227', '92767a2bd9a350dbf5b4b920b17c09a4942639cf3a92accf0636726296077d22bae601446b6bc3b8', 0, '2020-09-17 19:20:24');
INSERT INTO `oauth_refresh_tokens` VALUES ('963a75234895b365a83255d132d9ecb8fdf77c67f896545defc8fc5fb7034f21bc58b13e8dfd2633', '7bd19f135d0748249abb0efc3f8147b0769d30833271f1f07cbb4eeba94109865778ba77b9e9fed7', 0, '2020-09-17 19:20:35');
INSERT INTO `oauth_refresh_tokens` VALUES ('42cce4cc9d8e1d579c5446ff3caa1962cbd10da67cb77d151fe37c7e9a00e360e44b1533155858d6', 'f0f604f6a0313d71da8809a09280e16369e6aeba23bb899f8f27736170a28ef43533f4a6dfedbe77', 0, '2020-09-18 02:58:19');
INSERT INTO `oauth_refresh_tokens` VALUES ('a1977cd480c12d727eab7db596ec4d7a3b86402d8f21e568c33a01044e82e0ce093e6be9a261a995', '752c2115a3bbf7e7d8574510ded0e96ac5dd505f34f4028aa2ac5ac67e619406697e125cfa87c1f8', 0, '2020-09-18 02:59:00');
INSERT INTO `oauth_refresh_tokens` VALUES ('0c09f7815f067cfd0bb8ea4f187c5aa9ade5f4f010f0f0cd013e344b720f7a9210f5b8b9da75f19d', '791326ade45e49d630e163e8210ff9c9dce5cbb2b0c62bd7832678ffc029bb93335c71e7508c7a4f', 0, '2020-09-18 03:22:03');
INSERT INTO `oauth_refresh_tokens` VALUES ('66863d8c604de646ae189b47216703f04159bd44fd0481c431f4c4c9ecd5b4e65a70e919e652ae87', 'fa0cad043d73f34a5bdc1c8bb4e6f8ddf4014fea5f23c0b0ae3e6c6342a9e5000495bf6dd20f151a', 0, '2020-09-18 03:29:56');
INSERT INTO `oauth_refresh_tokens` VALUES ('bbf8968b985ac10598ebe377af15b8f6f6a3789c5201af0885fbf6e7d5ca160f1d9f4b526dc80ca3', '35d69b1bb4db0597eee4a7015aea8f669348dc02a5b3cad73d090cd1f51ecf49c83783646f7b853b', 0, '2020-09-18 05:04:21');
INSERT INTO `oauth_refresh_tokens` VALUES ('0944fd92eed999cfb3fd5d8ffb1c06b6558bb3ae0b5734f83a7a8bf5ee57656819a876f165efb86c', '535ee7030bd9ed80267134ce8ef09f00e98655ad21d6d633f6ac3baff580b7644f0ab1dff59b77c4', 0, '2020-09-18 05:04:54');
INSERT INTO `oauth_refresh_tokens` VALUES ('4476e46fc45a3d65a8d76d4fe651260bb5ea8f9b7cb09eabd89c9f129509d5ad3e1a5a6b341c4464', '2252ce80ea1486f1f620e1d9d1516120b0f08d53f916f196579a825b7f347063aacd5be3956639a4', 0, '2020-09-18 05:05:20');
INSERT INTO `oauth_refresh_tokens` VALUES ('ef8da4ef092381da05a2bad9765e9fc89ae216530979298f5ed1914e299e50943cb0e9020a4372f3', 'a5637216ad6b2c478c9f3b01dc3b743b31206930043e24da25be0972ee0601618aa69a96bc5ba5c0', 0, '2020-09-18 07:42:11');
INSERT INTO `oauth_refresh_tokens` VALUES ('f1729b8dc60a4122c0f1fe363360670a3a53b3f55d4a861a17f026363450490a743f45d8c3214ead', 'c7791d4e0f91fd6f341972f2c60323c5cddc02a000a3250856aa3d96ff3d1c064b4c0d59a0a329a9', 1, '2020-10-14 22:35:26');
INSERT INTO `oauth_refresh_tokens` VALUES ('99a430d72c216c29d81d87c40d3971090fb4b155e92ea135205da63815e2510d5c030cbaacf7eab5', 'aae269800ab485a1253e95e08d99158782df2c3d4a1b4c84d1367cf39499f87c92201f51338ad986', 1, '2020-10-20 15:58:47');
INSERT INTO `oauth_refresh_tokens` VALUES ('cbd42f39061c67233f8ac539ab810f67f186dc9a373ed82f20ba33439bcad62b3204efd0b23ae366', '06a4c2a41609f5bd02afa6c2478e47f1ab645fb7277fc1ba4163868c71e2168d8ee9c90608a9c627', 1, '2020-10-21 12:35:59');
INSERT INTO `oauth_refresh_tokens` VALUES ('c8237803ed1221e1373af6023382300cae34dac9842fd296f88f861709d91a770a7b516e1f8fe646', '49a1b20619cc53ace570d3eeb4c14d1f3c9072a0ebd2058be6c9a9a7feb6e26361ebf0b4c2dbfe02', 1, '2020-10-22 06:36:54');
INSERT INTO `oauth_refresh_tokens` VALUES ('6b5ba160aa632504e81ac6004e75d592c1b55e8eaeb469f820f176d2c5ac2424be7a03d7e9e98a67', '54203c6497e00ad7c2989e33b62e9f0887bce01a4901b063cec40f161a57c884efc24319cb65ac61', 1, '2020-10-22 23:36:14');
INSERT INTO `oauth_refresh_tokens` VALUES ('ee53847048ae3636ead4683329d8f691e608971ec75a5ddb8826ddf0e2ecac795526e0f8f14859d8', 'b670b63aad332cb97cab28f15dce2056b13b26a60b0ba8befcd1bf104439eb557926b7b4564b6f12', 1, '2020-10-24 18:10:24');
INSERT INTO `oauth_refresh_tokens` VALUES ('0ee3af59a4ad3163b666904fc2c0b372abaef969af0d6757d33695de96e5253e98c4902afa59c1e7', '4850f1ae4a2dff36f93e54f4fb787da66591cf306e562a40fb61aa809f2cdbb53c703e417739eeca', 1, '2020-10-25 13:12:43');
INSERT INTO `oauth_refresh_tokens` VALUES ('9e1658ae2f1cb9b71d094e136a67ff6282a155a7d8ce38f387ce504a8e6f10eddf8dcbde258070a8', '2c5d521c24c80705ffe4aafd5952eeb1bb5d71c87de504b88bc6236784f789cbfe34e4d7862e6960', 1, '2020-10-26 05:55:23');
INSERT INTO `oauth_refresh_tokens` VALUES ('f5d6c26c80bf1f4b85c9f79ad9627b7c5bdcfd8c75dbd15c9c7032ec1e38139c3413989a9e521b85', '35a84555c59d5f9598bdc7e2b689eb22bd5ed27cd99584e552ce221414ee6b2990293644657debbf', 1, '2020-10-26 22:36:31');
INSERT INTO `oauth_refresh_tokens` VALUES ('035ed77109cebe40c63d116f170d037fc00618cf7b0d0b2ef7a2179fb1df8adda3a38e3f2e8617bc', '2e7547f1b63bbcfd9597e850b4645cdef5403e00c4b32d4d20885078c64bbadc6bc6fa953393cf8d', 0, '2020-10-27 15:50:30');
INSERT INTO `oauth_refresh_tokens` VALUES ('5b72ef5ff04e4707c61e4523bba64357f49398a8975f08a432b4a22742fd3db4ee051adf170e2d86', '6407439acabe80b6d964a7f8a0102f185ab9d039d3506f1b2f0a5b21ba0eecac7493db622910ce48', 1, '2020-10-28 00:27:04');
INSERT INTO `oauth_refresh_tokens` VALUES ('5bfcaec7cf9c1cea50f8c796b1cd689f5fb3229fae2585abdf11f753d12ac88481fa37fdf8ac4a13', '4122716a97683985ec357dd084aed4a498a7bffaaa97671fabd02a53b520b564d8f7405338d271d4', 0, '2020-10-28 18:06:56');
INSERT INTO `oauth_refresh_tokens` VALUES ('8d8a28c3ca3dee81674ea2b3b0f676987dd94417d61920174bd7bf3cd4abaf3aac5918243adce8e1', '5475031aa96340de2266b7f07eb0a8c99f589902bea06c3f8e7bfd1e500d9f2b988539438e8958bf', 0, '2020-10-29 05:29:47');
INSERT INTO `oauth_refresh_tokens` VALUES ('ebcc9b5624c493b57ca5cd5b60e624b3f7fbb0eaab87cfcdbaf2930f7272d0bf74ef435a6768b116', '68ae2d8cdda3d318ce8b55cd26eabacd8e757a942bfbef1f766a1286ae76508e09ab9e18e227c2f3', 0, '2020-10-29 05:59:20');
INSERT INTO `oauth_refresh_tokens` VALUES ('cbf728a9580df76d7d440321b210215f94cc532c105f8fc99b78abbcb8893a3b31e5183f904754ad', '0326e9c9b1d94570cd5c685539fd7464e71092934f931b8a91295d1c6fcf35aac8521d7cc29a111a', 0, '2020-10-29 06:07:09');
INSERT INTO `oauth_refresh_tokens` VALUES ('3751ec03c2caa51d642bbc5e1e46876cea8f8fb01b7a07ff6c69c52d234f94d87010a825e94adf40', '3cc5fa2aea009308c78fb8f86309ea7d6d6297f6e9e41c01a7649f3c069db7da3740c4a40b823fd2', 0, '2020-10-29 06:13:39');
INSERT INTO `oauth_refresh_tokens` VALUES ('0b0ffde0c99dbe854587894f26fba8abd473150e2ea36f3f72ca15360cf2f183e20379b556583604', '75e01244e2548b4e66a4c3f0edd4dece1432c6a24b6c21700fa162397c4531b9785436bef24de741', 0, '2020-10-29 06:20:51');
INSERT INTO `oauth_refresh_tokens` VALUES ('226aae940e1d6a0ed7e458f3335061902ce3651ba9fd658b56dce16c695cc3246512907240c886e2', 'e9a14af721ef94a4bf8bd0a4bafde2ff038e24487efcbd81fb98dac596ddbd1b34123be0dae82bdd', 0, '2020-10-29 06:29:26');
INSERT INTO `oauth_refresh_tokens` VALUES ('d7b927a7c521e8904352ba70e9496aae07949db23a068aacf024097a2b1e76ed0b869e90846e01a7', '1845067c37ae12af28d2531afb825fd43035a995cfcf665b700ed3b623a9d4ca61b88b93ba8c777f', 0, '2020-10-29 06:37:36');
INSERT INTO `oauth_refresh_tokens` VALUES ('9ae553293f5b64a2dd8cface4bece5a3c03985acfd68991efafd1505e24998de40b4a918dd70a9cf', '17351dd2db3951718d86fd7ab162141658bfe5a50d826be8e57fee33d88b8b4f80f6e84ce7be16aa', 0, '2020-10-29 07:01:58');
INSERT INTO `oauth_refresh_tokens` VALUES ('e76659af73850d982464498a7e31b96c3280f1a53cdd0a43faa6f263ae2fc771ccfa82df581b2eed', 'ac05a7ea5decb11a1de9cf5e512f96d630fc960f7ac116bd0d7ca4d22aa968f63c4fa08387595a1f', 0, '2020-10-29 07:05:59');
INSERT INTO `oauth_refresh_tokens` VALUES ('d3c7d1e003e0312f6825bca2f5dc36d9e387fd90bf92ea3a90a339f1c4c5d1d8605c4bbf74175b48', '782330bb6b99d1756bee407cad8ed9aa11f5fdb4c2cd0afa5e351b11690fefda5b80ae8af086b9fc', 1, '2020-10-29 07:07:08');
INSERT INTO `oauth_refresh_tokens` VALUES ('492de919dec2ac7cc9149adaa1365eed6a638eb0eb48cb28be1037d91ffd6c3fd80172c56df97b75', '53a7d11f2ac8dbddbd5d114497a45687c2880460afca914da1537a08f2fc3dbd92359698d765456f', 1, '2020-10-30 06:33:10');
INSERT INTO `oauth_refresh_tokens` VALUES ('ecc2fe66511946fc68a855797f9b1c113b93acd1554c16ce1911b744aac92b15d5820878adf2c7a9', 'c7929824934c87592af69154c116229aac8c659019657fcb0110e031632bc98e2dcae1e28c4b72c2', 1, '2020-11-01 12:38:12');
INSERT INTO `oauth_refresh_tokens` VALUES ('64242ce91c8d6b0274a8a2a5ed610ea4d5400da436f0ffda95424858fa9ece7b0643d30ebd8811e1', 'ada80fd93fdc9c52900d987d0c640069a876ee3dc6a727f6f6193462539ddba067626418e5948486', 0, '2020-11-03 13:57:17');
INSERT INTO `oauth_refresh_tokens` VALUES ('e8e036b0263bb903d1ed8fd832af90f8f7a0eb296b032be456bb322ef516d09adf1617e767676558', 'd0453c79c3dfc54dbeec88d4ca36af7ff3dc32a779ce1857075c3f70b55e9a6bbad7db9450ca9f38', 1, '2020-11-04 03:26:29');
INSERT INTO `oauth_refresh_tokens` VALUES ('b258599e0175ee3d34c18f40c0d581643bc5f5a99cf30bb0bfd4e726e1093e4b1a035896e39bc77a', 'c4a215788b2cf7d28087e44ffd4ac3eba8de8576902f724ccc93374ee70bf2cd2a8ad32670a4ce5f', 1, '2020-11-04 23:05:00');
INSERT INTO `oauth_refresh_tokens` VALUES ('eee63def50cf77d1a2b277dd1f74029b4ac398d34a5cfe320659596b29eccab76e1852102276d209', '7423e0a02dd8c9f2b7b09259d42766cd815859fec5e168e7020970ea52a29542d3fe0af103475835', 0, '2020-11-05 16:58:22');
INSERT INTO `oauth_refresh_tokens` VALUES ('caa22ceb192ee0f247f51bff9c1a50b7d50434748190527a4a1d7799e04a3eed1d470b7238699df2', '31c7f89683267f86551b6931610d14819a1211e258eaa059e8c54f53c45bf764d38ebbb6a583098b', 0, '2020-11-05 19:05:49');
INSERT INTO `oauth_refresh_tokens` VALUES ('d7ac4cdc61477378a006c0a241872ff96abfe78f9ff4d006a0d07a8d122aae394945a78fd654ca17', 'f247799db3ebab8dbeb175add0c04b07f560d10fb30d5ae98516a7785db62464db33c30825cf8cee', 1, '2020-11-05 19:34:24');
INSERT INTO `oauth_refresh_tokens` VALUES ('e539897d245838e8b086af540043e4dc0347144b2206b5bcf83be51eeb4a5addd26522f335547129', '76fdbffd0fdbcc23bacddfdf188f5b5001f07a9f28cb15d35010c373109e71fbdfd8bee35759945b', 1, '2020-11-06 14:41:18');
INSERT INTO `oauth_refresh_tokens` VALUES ('1aa8e01c9c8e662e23b51be143871ef80c07e74735c07687bd22cad5068ef2b9142986627b72479a', '5a55b410ad2e9a539242d9fadad8f583fcaec496ebafbf751fad2638c25a49f8e57825ee0f868dc8', 1, '2020-11-07 07:26:16');
INSERT INTO `oauth_refresh_tokens` VALUES ('98e5accc7e9bb4b63c1d167e00419fda50c501e34721d336f4a75e5395dc4b9ee457c2b9fa3d8fc9', '6958429029fae17029c5e3ab223a3ec806f0f7729b4d1116a8d414bf4a45fc575ee9f8f496a5fe92', 0, '2020-11-08 12:42:52');
INSERT INTO `oauth_refresh_tokens` VALUES ('31eb8401048db192782aa41f84e20f7bedbbcbfdc7c7b7fc894991d37c1d4f6fa48582579605b8ca', '7f37103b6e47940ce4232f6677ff9a74cfc1f3247f769afdc809a6793ebc234e248cd994deecb7f7', 0, '2020-11-08 21:45:36');
INSERT INTO `oauth_refresh_tokens` VALUES ('3e06edb675c0fc625d040e29f7fd8f32bc3ce35d750b96aa1b9c25a85080f77ad5422e94e8567423', '9ac1b66f708991d9cfb1a88c4bb169e298faeb146757455640bce11758f2730747f04995abf6f9ff', 0, '2020-11-09 04:39:15');
INSERT INTO `oauth_refresh_tokens` VALUES ('60a9cd0e257a0246390fa8fd7ba2f093844d6e436cdaf5fd6274daf13fa304162cdc6c429205e8e4', 'fc3cfa76e155a723f995807db48cf60ae39984825a18749febf5973c52b3460e425bb22456bdebc1', 0, '2020-11-09 10:06:36');
INSERT INTO `oauth_refresh_tokens` VALUES ('77c28be3498aeee2c8a18e206cc43e051f73cfaed60e8ab732229cd7d422ea35c6791dcc236cbfec', 'c30dec3a44f139c2f30eb522d825c423cf7499ac1131aa82e11a949c32462b065d383b9e6d17aed6', 0, '2020-11-10 01:06:26');
INSERT INTO `oauth_refresh_tokens` VALUES ('f668f51e08bfc1d25efc509b53f022c831dcceb8ef4523e2d51cbe14536c5476f213518b98e54c4c', 'c57185d7fe4c4f77978bd17adfb89eff63217e88660e8e0c4704fb1513dde5d368f2d8d337deade2', 0, '2020-11-10 04:44:24');
INSERT INTO `oauth_refresh_tokens` VALUES ('3900c74cb98046c3937d6dd5fca417e6cea8844ba5811bdd6617ad3ef22ec775241eb0d7740447d7', 'a2f10e27a821cbf4fa621a129aaff9f77b8a89a327fbcd3136f603d74bb6d09651728271deac6029', 0, '2020-11-10 16:41:25');
INSERT INTO `oauth_refresh_tokens` VALUES ('8699e68186c1f9f3a3e4260b6e2c83a83848fe5d251b39ac62b24e1a9a050648de7ae7bac9597d56', 'cc798d4d6741b20f9b37ddfd6c9b8371abdcc9ccf7e1440231ff93cb585493c3ee13798477f92e73', 0, '2020-11-11 00:45:55');
INSERT INTO `oauth_refresh_tokens` VALUES ('2c18475dc53e739bda7fc4ccf9f2eb234d8041b8d7605a6c55a342cb3b7c02566f7bdf3e5fd122c3', '3bbc0c138b73b911b719d52c55e3b385710f8f4d938f0c59e4cfc8daf4ae84082abe0090a45c69b6', 0, '2020-11-11 02:24:10');
INSERT INTO `oauth_refresh_tokens` VALUES ('60d4fe60ae9fe9b22188083250e11d130e0f269260bd7b6e40c93357ea35a5fc8f682177284b68a9', 'd9a6c64773c1ac66e30efb564985771d721f20d909b9e4acb1dc0ce1a6854835aeb1402b69ec6584', 0, '2020-11-11 02:30:34');
INSERT INTO `oauth_refresh_tokens` VALUES ('a93ccbc789d297cd354d0086af6ff001d2bfa2355704994300e7dfd2d5c62b45c50d14e6287ae10a', '6236c05ec1bf3ffa861124701315e0be9972dfbc4a0fa97e13608fb25043f959ed112bd33c9e3e5e', 0, '2020-11-11 03:23:34');
INSERT INTO `oauth_refresh_tokens` VALUES ('0bb05c916aa953d41c8d6ab0f364378272768a58a0e8979685c89f3659fcf44818c6f2da2d246e3a', 'a039805070516d42044ca79241617d88eebd4d9b4b22bce554e533f05ce632d27db537dea35f598b', 0, '2020-11-11 05:57:43');
INSERT INTO `oauth_refresh_tokens` VALUES ('87d26305ec28a526de7b1337d1997ed8cc088225e7869aa425496a6a15ded303f551f07eadcb8727', '40b9d66a2f2dcd6f2d65736b0bcec564ae2ee02a72bd216de255acfc99f3eb0755eebed63bc61730', 0, '2020-11-11 16:58:16');
INSERT INTO `oauth_refresh_tokens` VALUES ('3ea206d0366f2932fbb34b66aca8de6d2d1fb97208288200cf3b086b3a4993f7b737921d0c881dca', '2e495cbcf1902cfc618673a9512488eed42469c557bf80c255687ee90fab32752db767eea2d6953a', 0, '2020-11-12 23:45:30');
INSERT INTO `oauth_refresh_tokens` VALUES ('c8b74df23fb21ba106b78196edf9b157874b725ab57b53191c74e7b94a700fc2a79ae80f751110b8', '9b43e20395f19c1adf75f36596ac22fcc7d0a353d1c9556a38d31a7a597f079f18bfd613980fde40', 0, '2020-11-13 01:23:38');
INSERT INTO `oauth_refresh_tokens` VALUES ('fcbd80a462136ecef61a13a123777d054867b0299502bc8adc71d60e8bcbdbeab05915c4f923bd91', 'ea94cc66b1253b6a8899fb3c3648c17dd605b1832567ef28be2e893ab87af5b18a8318f8738069bd', 0, '2020-11-13 05:26:01');
INSERT INTO `oauth_refresh_tokens` VALUES ('a8719e4ec82fcd87a6eebd5ce0081130a8577eb0b0f9a8ff41281616453f35961a260ab65bffe4ab', 'ca73b0243734bdfc8cd14a34ab885d8f0d0134dc640c3ab659a2c073ee6ecad72e5af3fc42ba58cf', 0, '2020-11-13 05:35:31');
INSERT INTO `oauth_refresh_tokens` VALUES ('408cc01537f1f9f020744d88e2f0b6fc8f14cf69473a74c7d30b5d1fc1b9189232ddaa5647ebd442', 'a38c2d6555922b125c768fa3645fee0a7211016d43618af70eed3c2d1b446484684e7b99ba5ba042', 0, '2020-11-13 05:37:17');
INSERT INTO `oauth_refresh_tokens` VALUES ('cc3cef199425cf3d7eda7cfe98ab4be2d58b79dbadc42a42478fa6783ce7662621bc7aa70379f605', '800d96a07d0640756da3ca5b8eb7f4d22647bcba32b2218221963b277c43d7dae7cb17d095cb8cb0', 0, '2020-11-13 06:00:25');
INSERT INTO `oauth_refresh_tokens` VALUES ('586cbcac499446b89bf372ccb45909aafb2ca62172e7bd3c33e12fdf6fbac63ebd5869b30f1e1730', '68387ea28288e048a905a71afea13e3bb6c398603b1cd1c8ea2b9d6afb061348a561a8bac198434a', 1, '2020-11-13 09:29:59');
INSERT INTO `oauth_refresh_tokens` VALUES ('71857244a87e03e1f539d022b291a4b8baa5fd64ee4e4dc196e3c2c325efd5a3d0d36e7d785ded84', 'f08d9d7870202294aef8b55e54e645d8e581fd475b6d0d31cb85139bbd645e4ec35b00383ec4ebf1', 0, '2020-11-17 03:50:32');
INSERT INTO `oauth_refresh_tokens` VALUES ('50086467904d887f588f2613b320703cd46eb07dadef65689612c21e1095396d574127c770504cb0', 'ce86e5ca12d31dd17964ec2decc8d0a7c17c8c3cc5a7408203f86d209fc61c6aaa5fd6d8cd91c92e', 0, '2020-11-17 03:50:34');
INSERT INTO `oauth_refresh_tokens` VALUES ('ed291b6203b2875deb5a227e319c948c8d4bd4721ded5cc7b8ba9447281e38d2f4aa616d1ff34cd7', 'cc6650ebe85a7e26aa6c36669fbbd7ec30e064dafec7aa17912e28509fa83ae6ca4ccfac8bca6843', 0, '2020-11-17 04:13:45');
INSERT INTO `oauth_refresh_tokens` VALUES ('e93dfe11ea68301266eb0b173ee1ac6c08e3cf0e32765859f525a55829b10f977099def19d51709f', 'cdefc7cf201c880d9c4f1e96cc32b52a9b2b3d0d17fbdfeb65353ad3bfb5add8c741960b3299028c', 0, '2020-11-17 04:14:06');
INSERT INTO `oauth_refresh_tokens` VALUES ('102312573ffae9170e245f27679277e86e4374dca585ec6b60d5d634ccd422879677a0bbf8d0bc75', 'f10059636d18c938442cf0cba5fd843fa7215f35e0b6d7d531cf0b8b770eaaf54064fff8570e0531', 0, '2020-11-17 04:43:07');
INSERT INTO `oauth_refresh_tokens` VALUES ('118333392119d5c7c45434e4f2730f3195a6df176e1c0df4d27e14cff18599db43f2fe97625d5824', '1a2d836dfbb44ab835fad89cebd8a128f0862e89e48d99cc5c523de65ea683e76f075f9b75db74d5', 0, '2020-11-17 09:40:46');
INSERT INTO `oauth_refresh_tokens` VALUES ('c3b367f23a89840441dda18d7947c5a7bd88bd0aba048c7b28727dc53d3011db27eaa1d18ebe85c9', '60b826843ca236fab35ad11cf31b093e760c73e82bbfc0c0ad409d0814d8d43b643be115b3355fd2', 0, '2020-11-17 10:45:32');
INSERT INTO `oauth_refresh_tokens` VALUES ('ee311b61bedae37128f022ed39621b5a9a5ed94767bb6f0b0b2fc50f0f7cca51bbbbd32083bc7456', 'b04e5cfc8664c4286f445367b7f089febf2d8ccb1ccfa45310376267bbca0ab50c14d00b0b19c857', 0, '2020-11-17 13:45:54');
INSERT INTO `oauth_refresh_tokens` VALUES ('b6d5c6f9220ca0b15b6de8443e9c52974307b3f0df4775ff1e3ad03db038a35dcd5ff09147911abb', 'e413617d3a460c955efbfa73ef4ec42fae09816086f43d18d66e6c3a8f75ea9017de3207cea5530c', 1, '2020-11-17 13:47:59');
INSERT INTO `oauth_refresh_tokens` VALUES ('be82cf620d73518774a24fa222e11e22545b1225a65ca55bc4b8aea2082e889b6b208a2ffca08e47', '4a467a59fa0db206d0313cf8bf1666f726df0951ed9dcd8c999388e4acbc0ed4c6e8da4daf01c032', 1, '2020-11-24 13:07:46');
INSERT INTO `oauth_refresh_tokens` VALUES ('aac36cc6e66ee991d982caabb0a23ddb83e5f99857b8a86dd589e4d3ab47a66b27a9aa2fcdba9aee', '58358af10bd016a9ea99ccebe5b974f300a71f1e2546d4c2bb9edfda9417f2048b87d3c37dd6edd5', 0, '2020-11-25 10:23:26');
INSERT INTO `oauth_refresh_tokens` VALUES ('cc4a4268bf6e21bf6e9e9a7c1533d21670a0aa3d9f5555186141fa42a4151881aab8a0a81e699166', '915b5cc10ced6982839344320887ae96fb188a0e690c832ddfb9ea646e68130278faa2b2092137cb', 0, '2020-11-25 11:57:32');
INSERT INTO `oauth_refresh_tokens` VALUES ('88cfe4658394eb15e014c5dc28da503689cfa7b131f620dbf11eeb343e5ec1110077f6794f62a7db', '18579a5e9e57134b8eb6f778917e61a695ca81d6fc8c6bf7e90d10b82f2e340d05ab0842716c143b', 0, '2021-01-28 18:37:01');
INSERT INTO `oauth_refresh_tokens` VALUES ('01caadde44eb59fe411149e8459fdf79856ff11f30a16f2f724c87b23fd88a96769b20304549f0a8', 'a1c20b88a5cbca6c85db635820b07fc80dffe2b683c6d0556bd4f18faa9e4295d41ff1b57df774e0', 0, '2021-03-11 02:45:31');
INSERT INTO `oauth_refresh_tokens` VALUES ('6ad18c462205b0fd982f108f5bae08b04f7db61f7da069885d9b64dbe6c21c3f55da88748a779218', '33c8e1e78d4e7717a9e7b5ed6ef997d2c34f60dd92d27a12899b958830196cf7609769cbff288cb8', 0, '2021-03-11 02:45:41');
INSERT INTO `oauth_refresh_tokens` VALUES ('041851b188a5be5f5c696b2277ce43a21f882edab6de4728dbfaad17062f1235ba2112f55695dabb', 'fee7fc86a0f28aad1e1b96cf3892194e6a86aa555bdb457639e9b860d5434b7a57ba12d94941102f', 0, '2021-03-11 11:53:08');
INSERT INTO `oauth_refresh_tokens` VALUES ('6f6b5335968407e12057f25bb6e276c5eb208451ce50730fa1d589ee41af781cdfbe5d72331e5c72', '7402e55ae8f19b514350f14f738bf97699ad296610753d790871301358bdba48107c1980a6ce3b0c', 0, '2021-03-11 12:03:35');
INSERT INTO `oauth_refresh_tokens` VALUES ('ceb628f4e914caad3cc8c466eb0bb84f3e2aabee8d8395bb5b9a949786b96191bf5ade43fc6e7706', '287ba3f49379f6a3632ef2820935af7177efd9497672344e113b45a4352d95703d2302575745ce10', 0, '2021-03-11 15:06:34');

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets`  (
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  INDEX `password_resets_email_index`(`email`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of password_resets
-- ----------------------------
INSERT INTO `password_resets` VALUES ('lcrojano@gmail.com', 'LobGiPTAE6', '2020-11-10 10:43:39');

-- ----------------------------
-- Table structure for people
-- ----------------------------
DROP TABLE IF EXISTS `people`;
CREATE TABLE `people`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `rg` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `avatar` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `icon` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `tag` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `order` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 39 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of people
-- ----------------------------
INSERT INTO `people` VALUES (24, 'Humberto Rangel Ávila', 'Director del Observatorio del Río Magdalena', 'https://www.uninorte.edu.co/web/departamento-de-ingenieria-civil-y-ambiental/profesores?p_p_id=InformacionDocenteUninorte2_WAR_InformacionDocenteV3&docenteID=72002373', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/FotoHumbertoAvila.png', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/FotoHumbertoAvila.png', '1', '7', '2020-08-31 08:42:38', '2020-08-31 10:05:02');
INSERT INTO `people` VALUES (26, 'Doctor Adolfo Meisel', 'Rector', 'https://www.uninorte.edu.co/web/ameisel', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/Rector_Adolfo_Meisel_635x382.jpg', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/Rector_Adolfo_Meisel_635x382.jpg', '2', '0', '2020-08-31 08:49:32', '2020-08-31 08:49:32');
INSERT INTO `people` VALUES (27, 'Javier Paez', 'Decano División de Ingenierías', 'http://www.uninorte.edu.co/web/ingenierias/autoridades-academicas', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/image_gallery.jpg', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/image_gallery.jpg', '3', '1', '2020-08-31 08:53:09', '2020-08-31 08:53:09');
INSERT INTO `people` VALUES (28, 'Raimundo Abello Llanos.', 'Director de Investigación, Desarrollo e Innovación.', 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000070505', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/Nombramientos_de_Abello_y_Amar_2020_1.jpg', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/Nombramientos_de_Abello_y_Amar_2020_1.jpg', '1', '3', '2020-08-31 09:01:55', '2020-08-31 10:04:55');
INSERT INTO `people` VALUES (29, 'Rocío Mendoza', 'Directora Centro de Consultoría y Servicios', 'rmanjarrez@uninorte.edu.co', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/rocio.jpg', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/rocio.jpg', '1', '4', '2020-08-31 09:04:17', '2020-08-31 09:59:55');
INSERT INTO `people` VALUES (30, 'Alma Lucía Díaz Granados Meléndez', 'Vicerrectora Administrativa y Financiera', 'https://www.uninorte.edu.co/web/gestion-administrativa-y-financiera/vicerrectora', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/image_gallery_2.jpg', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/image_gallery_2.jpg', '6', '6', '2020-08-31 10:03:52', '2020-08-31 10:03:52');
INSERT INTO `people` VALUES (31, 'Humberto Rangel Ávila, Ph.D', 'Director del Observatorio del Río Magdalena', 'https://www.researchgate.net/profile/Humberto_Avila/publications', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/FotoHumbertoAvila.png', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/FotoHumbertoAvila.png', '0', '1', '2020-08-31 10:24:08', '2020-08-31 10:24:08');
INSERT INTO `people` VALUES (32, 'Augusto Herminio Sisa Camargo, M.Sc', 'Docente tiempo completo', 'https://www.researchgate.net/profile/Augusto_Sisa', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/FotoAugustoSisa.png', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/FotoAugustoSisa.png', '0', '2', '2020-08-31 11:24:00', '2020-08-31 11:24:00');
INSERT INTO `people` VALUES (33, 'Luis Carlos Rojano', 'Ingeniero de Software', 'https://www.researchgate.net/profile/Luis_Rojano', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/FotoLuisRojano.png', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/FotoLuisRojano.png', '0', '3', '2020-08-31 11:25:10', '2020-08-31 11:25:10');
INSERT INTO `people` VALUES (34, 'Wilson Nieto Bernal', 'Docente tiempo completo Dpto. de Ing. de Sistemas', 'https://www.researchgate.net/profile/Wilson_Bernal', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/FotoWilsonNieto.png', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/FotoWilsonNieto.png', '0', '4', '2020-08-31 11:26:59', '2020-08-31 11:26:59');
INSERT INTO `people` VALUES (35, 'Stephanie Diaz, Ing.', 'Ingeniera Analista', 'http://scienti.colciencias.gov.co:8081/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001576141', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/FotoStephanieDiaz.png', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/FotoStephanieDiaz.png', '0', '4', '2020-08-31 11:27:46', '2020-09-08 20:37:52');
INSERT INTO `people` VALUES (36, 'Ruben Doria, Ing.', 'Ingeniero Analista', 'http://scienti.colciencias.gov.co:8081/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001595078', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/FotoRubenDoria.png', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/FotoRubenDoria.png', '0', '6', '2020-08-31 11:29:13', '2020-09-08 20:37:59');
INSERT INTO `people` VALUES (37, 'Alexander Montalvo', 'Ingeniero Analista', 'http://scienti.colciencias.gov.co:8081/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001652109', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/FotoAlexanderMontalvo.png', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/FotoAlexanderMontalvo.png', '0', '7', '2020-08-31 11:29:30', '2020-09-08 20:38:06');
INSERT INTO `people` VALUES (38, 'Francisco Gómez Díaz', 'Ingeniero analista', 'https://www.researchgate.net/profile/Francisco_Gomez48', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/Francisco_Gomez.png', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/@People/Francisco_Gomez.png', '0', '8', '2020-08-31 11:29:52', '2020-09-08 20:38:15');

-- ----------------------------
-- Table structure for permissions
-- ----------------------------
DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 30 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of permissions
-- ----------------------------
INSERT INTO `permissions` VALUES (1, 'Register General User', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (2, 'Register Admin', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (3, 'Register Staff', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (4, 'View All Users', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (5, 'View Specific User', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (6, 'Edit All Users', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (7, 'Delete All Users', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (8, 'View All Standard', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (9, 'View Specific Standard', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (10, 'Edit All Standard', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (11, 'Delete All Standard', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (12, 'View All Staff', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (13, 'View Specific Staff', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (14, 'Edit All Staff', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (15, 'Delete All Staff', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (16, 'View All Admins', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (17, 'View Specific Admin', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (18, 'Edit All Admins', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (19, 'Delete All Admins', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (20, 'View All Roles', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (21, 'View Specific Role', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (22, 'Edit All Roles', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (23, 'View All Permissions', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13');
INSERT INTO `permissions` VALUES (24, 'Manage Categories', 'api', '2020-08-12 19:34:44', '2020-08-12 19:34:44');
INSERT INTO `permissions` VALUES (25, 'View Side Menu', 'api', '2020-08-18 05:42:00', '2020-08-18 05:42:00');
INSERT INTO `permissions` VALUES (26, 'Manage Stations', 'api', '2020-08-19 04:37:05', '2020-08-19 04:37:05');
INSERT INTO `permissions` VALUES (27, 'Manage People', 'api', '2020-08-23 12:53:54', '2020-08-23 12:53:54');
INSERT INTO `permissions` VALUES (28, 'Manage Layers', 'api', '2020-10-21 00:15:20', '2020-10-21 00:15:20');
INSERT INTO `permissions` VALUES (29, 'Donwload Station PDF', 'api', '2020-11-02 09:56:02', '2020-11-02 09:56:02');

-- ----------------------------
-- Table structure for role_has_permissions
-- ----------------------------
DROP TABLE IF EXISTS `role_has_permissions`;
CREATE TABLE `role_has_permissions`  (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`permission_id`, `role_id`) USING BTREE,
  INDEX `role_has_permissions_role_id_foreign`(`role_id`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of role_has_permissions
-- ----------------------------
INSERT INTO `role_has_permissions` VALUES (1, 1);
INSERT INTO `role_has_permissions` VALUES (1, 2);
INSERT INTO `role_has_permissions` VALUES (1, 3);
INSERT INTO `role_has_permissions` VALUES (2, 1);
INSERT INTO `role_has_permissions` VALUES (2, 2);
INSERT INTO `role_has_permissions` VALUES (3, 1);
INSERT INTO `role_has_permissions` VALUES (3, 2);
INSERT INTO `role_has_permissions` VALUES (4, 1);
INSERT INTO `role_has_permissions` VALUES (4, 2);
INSERT INTO `role_has_permissions` VALUES (5, 1);
INSERT INTO `role_has_permissions` VALUES (5, 2);
INSERT INTO `role_has_permissions` VALUES (6, 1);
INSERT INTO `role_has_permissions` VALUES (6, 2);
INSERT INTO `role_has_permissions` VALUES (7, 1);
INSERT INTO `role_has_permissions` VALUES (7, 2);
INSERT INTO `role_has_permissions` VALUES (8, 1);
INSERT INTO `role_has_permissions` VALUES (8, 2);
INSERT INTO `role_has_permissions` VALUES (8, 3);
INSERT INTO `role_has_permissions` VALUES (9, 1);
INSERT INTO `role_has_permissions` VALUES (9, 2);
INSERT INTO `role_has_permissions` VALUES (9, 3);
INSERT INTO `role_has_permissions` VALUES (10, 1);
INSERT INTO `role_has_permissions` VALUES (10, 2);
INSERT INTO `role_has_permissions` VALUES (11, 1);
INSERT INTO `role_has_permissions` VALUES (11, 2);
INSERT INTO `role_has_permissions` VALUES (12, 1);
INSERT INTO `role_has_permissions` VALUES (12, 2);
INSERT INTO `role_has_permissions` VALUES (12, 3);
INSERT INTO `role_has_permissions` VALUES (13, 1);
INSERT INTO `role_has_permissions` VALUES (13, 2);
INSERT INTO `role_has_permissions` VALUES (13, 3);
INSERT INTO `role_has_permissions` VALUES (14, 1);
INSERT INTO `role_has_permissions` VALUES (14, 2);
INSERT INTO `role_has_permissions` VALUES (15, 1);
INSERT INTO `role_has_permissions` VALUES (15, 2);
INSERT INTO `role_has_permissions` VALUES (16, 1);
INSERT INTO `role_has_permissions` VALUES (16, 2);
INSERT INTO `role_has_permissions` VALUES (16, 3);
INSERT INTO `role_has_permissions` VALUES (17, 1);
INSERT INTO `role_has_permissions` VALUES (17, 2);
INSERT INTO `role_has_permissions` VALUES (18, 1);
INSERT INTO `role_has_permissions` VALUES (18, 2);
INSERT INTO `role_has_permissions` VALUES (19, 1);
INSERT INTO `role_has_permissions` VALUES (19, 2);
INSERT INTO `role_has_permissions` VALUES (20, 1);
INSERT INTO `role_has_permissions` VALUES (20, 2);
INSERT INTO `role_has_permissions` VALUES (21, 1);
INSERT INTO `role_has_permissions` VALUES (21, 2);
INSERT INTO `role_has_permissions` VALUES (22, 1);
INSERT INTO `role_has_permissions` VALUES (22, 2);
INSERT INTO `role_has_permissions` VALUES (23, 1);
INSERT INTO `role_has_permissions` VALUES (23, 2);
INSERT INTO `role_has_permissions` VALUES (24, 2);
INSERT INTO `role_has_permissions` VALUES (24, 3);
INSERT INTO `role_has_permissions` VALUES (25, 2);
INSERT INTO `role_has_permissions` VALUES (25, 3);
INSERT INTO `role_has_permissions` VALUES (26, 2);
INSERT INTO `role_has_permissions` VALUES (26, 3);
INSERT INTO `role_has_permissions` VALUES (27, 2);
INSERT INTO `role_has_permissions` VALUES (27, 3);
INSERT INTO `role_has_permissions` VALUES (28, 2);
INSERT INTO `role_has_permissions` VALUES (28, 3);
INSERT INTO `role_has_permissions` VALUES (29, 2);
INSERT INTO `role_has_permissions` VALUES (29, 3);
INSERT INTO `role_has_permissions` VALUES (29, 4);

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (1, 'Super Admin', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13', 'Unico Administrador, Generalmente Desarrollador');
INSERT INTO `roles` VALUES (2, 'Admin', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13', 'Privilegios superiores, puede editar usuarios, crear administradores. Revisar logs.');
INSERT INTO `roles` VALUES (3, 'Staff', 'api', '2020-06-23 09:07:13', '2020-06-23 09:07:13', 'Usuario Con privilegiós de Gestión de datos');
INSERT INTO `roles` VALUES (4, 'General', 'api', '2020-06-23 09:07:13', '2020-07-28 11:25:14', 'Publico en general, limitado a visualización');

-- ----------------------------
-- Table structure for staff
-- ----------------------------
DROP TABLE IF EXISTS `staff`;
CREATE TABLE `staff`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `last_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `gender` enum('Male','Female','Other') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `avatar` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `configs` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `deleted_at` timestamp(0) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `staff_user_id_unique`(`user_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of staff
-- ----------------------------
INSERT INTO `staff` VALUES (2, 45, 'Luis C.', 'Rojano V.', NULL, 'https://obsriomagdalena.uninorte.edu.co/plataforma/api/uploads/profiles/lcrojano@uninorte.edu.co/rojano-2-1024x776_2.jpg', NULL, NULL, '2020-08-31 17:31:06', '2020-11-04 06:56:21');
INSERT INTO `staff` VALUES (3, 54, 'test  eee', 'user eee', NULL, 'https://www.gravatar.com/avatar/8fbdcda70f2c7ff34d8e36b455da1cf5?s=100&r=g&d=mp', NULL, NULL, '2020-11-04 07:20:27', '2020-11-04 07:58:49');

-- ----------------------------
-- Table structure for stations
-- ----------------------------
DROP TABLE IF EXISTS `stations`;
CREATE TABLE `stations`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `latitude` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `longitude` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT 'IDEAM',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 48 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of stations
-- ----------------------------
INSERT INTO `stations` VALUES (9, 'SAN PEDRITO', '10.2682222', '-74.90786111111112', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-08-26 07:53:37', '2020-11-17 12:14:29', 'IDEAM');
INSERT INTO `stations` VALUES (10, 'BARRANCA VIEJA', '10.1483333', '-74.94861111111112', '0', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-08-26 07:56:01', '2020-09-10 04:13:45', 'IDEAM');
INSERT INTO `stations` VALUES (11, 'MAGANGUE', '9.2540278', '-74.73869444444445', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-08-26 08:02:04', '2020-09-10 04:19:41', 'IDEAM');
INSERT INTO `stations` VALUES (12, 'PLATO', '9.7884278', '-74.80671388888888', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-08-26 08:02:47', '2020-09-10 04:19:44', 'IDEAM');
INSERT INTO `stations` VALUES (13, 'TENERIFE', '9.9034722', '-74.86408333333333', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-08-26 08:15:02', '2020-09-10 04:19:45', 'IDEAM');
INSERT INTO `stations` VALUES (14, 'CALAMAR', '10.2538611', '-74.91141666666667', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-08-26 08:16:50', '2020-09-10 04:19:46', 'IDEAM');
INSERT INTO `stations` VALUES (15, 'TEBSA', '10.9366389', '-74.7598888888889', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-08-26 08:17:35', '2020-09-10 04:19:47', 'IDEAM');
INSERT INTO `stations` VALUES (16, 'EL BANCO', '8.992527778', '-73.96944444', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-09-10 03:04:03', '2020-09-10 04:19:48', 'IDEAM');
INSERT INTO `stations` VALUES (17, 'ARMENIA', '8.898630781948444', '-74.391308064516764', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-09-10 03:07:47', '2020-09-10 04:19:49', 'IDEAM');
INSERT INTO `stations` VALUES (18, 'BARBOSA', '9.021269481149156', '-74.636964313878863', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-09-10 03:09:05', '2020-09-10 04:19:50', 'IDEAM');
INSERT INTO `stations` VALUES (19, 'BARRANCABERMEJA', '7.060386845631077', '-73.874298123118294', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-09-10 03:10:44', '2020-09-10 04:20:42', 'IDEAM');
INSERT INTO `stations` VALUES (20, 'COYONGAL', '8.941110831599277', '-74.4930550611667', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-09-10 03:18:59', '2020-09-10 04:20:40', 'IDEAM');
INSERT INTO `stations` VALUES (21, 'EL CONTENTO', '8.222333333', '-73.77341667', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-09-10 03:21:43', '2020-09-10 04:20:39', 'IDEAM');
INSERT INTO `stations` VALUES (22, 'GAMARRA', '8.322405384191716', '-73.746787267773882', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-09-10 03:23:40', '2020-09-10 04:20:44', 'IDEAM');
INSERT INTO `stations` VALUES (23, 'GAMARRA AUT', '8.283953398780628', '-73.752868916520598', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-09-10 03:24:49', '2020-09-10 04:20:36', 'IDEAM');
INSERT INTO `stations` VALUES (24, 'LA GLORIA', '8.611510585900945', '-73.80169385897554', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-09-10 03:26:01', '2020-09-10 04:20:35', 'IDEAM');
INSERT INTO `stations` VALUES (25, 'LAS AGUADAS', '8.955183398087909', '-74.05442797203591', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-09-10 03:27:01', '2020-09-10 04:20:34', 'IDEAM');
INSERT INTO `stations` VALUES (26, 'LAS PALOMAS', '8.830406882576423', '-74.170168127681791', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-09-10 03:28:02', '2020-09-10 04:20:33', 'IDEAM');
INSERT INTO `stations` VALUES (27, 'PEÑONCITO', '8.989722222', '-73.94722222', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-09-10 03:29:22', '2020-09-10 04:20:32', 'IDEAM');
INSERT INTO `stations` VALUES (28, 'PUERTO WILCHES', '7.342884586957206', '-73.904532373251953', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-09-10 03:30:59', '2020-09-10 04:20:31', 'IDEAM');
INSERT INTO `stations` VALUES (29, 'REGIDOR', '8.670000000565112', '-73.820000000036572', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-09-10 03:32:29', '2020-09-10 04:21:07', 'IDEAM');
INSERT INTO `stations` VALUES (30, 'RIO NUEVO', '8.806361451156498', '-74.255302963834382', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-09-10 03:33:42', '2020-09-10 04:21:06', 'IDEAM');
INSERT INTO `stations` VALUES (31, 'SAN PABLO', '7.480333333048705', '-73.918555560028523', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-09-10 03:34:51', '2020-09-10 04:21:05', 'IDEAM');
INSERT INTO `stations` VALUES (32, 'SITIO NUEVO', '7.783654924705154', '-73.800549954953937', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker2.png', '2020-09-10 03:35:54', '2020-09-10 04:21:04', 'IDEAM');
INSERT INTO `stations` VALUES (37, 'Estación 1 - El Piñon', '10.40877822470', '-74.82319731670', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png', '2020-11-10 15:28:27', '2020-11-17 12:22:44', 'ADCP');
INSERT INTO `stations` VALUES (38, 'Estación 2 - El Piñon', '10.41832777780', '-74.83080056670', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png', '2020-11-10 18:38:39', '2020-11-10 18:38:39', 'ADCP');
INSERT INTO `stations` VALUES (39, 'Estación 3 - El Piñon', '10.42603991670', '-74.82097073330', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png', '2020-11-10 18:50:05', '2020-11-10 18:52:52', 'ADCP');
INSERT INTO `stations` VALUES (40, 'Estación 4 - El Piñon', '10.42983611110', '-74.82234444440', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png', '2020-11-10 19:09:07', '2020-11-10 19:12:20', 'ADCP');
INSERT INTO `stations` VALUES (41, 'Estación 5 - El Piñon', '10.43421944440', '-74.82113611110', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png', '2020-11-10 19:21:39', '2020-11-10 19:21:39', 'ADCP');
INSERT INTO `stations` VALUES (42, 'Estación 6 - El Piñon', '10.43467763330', '-74.82868611110', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png', '2020-11-10 19:27:06', '2020-11-10 19:27:06', 'ADCP');
INSERT INTO `stations` VALUES (43, 'Estación 9 - El Piñon', '10.43182222220', '-74.82544485000', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png', '2020-11-10 19:29:29', '2020-11-10 19:29:29', 'ADCP');
INSERT INTO `stations` VALUES (44, 'Estación 11 - El Piñon', '10.43405277780', '-74.81471245000', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png', '2020-11-10 19:31:58', '2020-11-10 19:31:58', 'ADCP');
INSERT INTO `stations` VALUES (45, 'Estación 12 - El Piñon', '10.42860555560', '-74.81446363330', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png', '2020-11-10 19:34:28', '2020-11-10 19:34:28', 'ADCP');
INSERT INTO `stations` VALUES (46, 'Estación 13 - El Piñon', '10.44334722220', '-74.82664590000', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png', '2020-11-10 19:37:40', '2020-11-10 19:37:40', 'ADCP');
INSERT INTO `stations` VALUES (47, 'Estación 14 - El Piñon', '10.44960555560', '-74.81645646670', '1', 'https://obsriomagdalena.uninorte.edu.co/plataforma/assets/files/shares/plataforma/ICONOS/marker3.png', '2020-11-10 19:40:33', '2020-11-10 19:40:33', 'ADCP');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `base_role` enum('Admin','Staff','General') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verification_code` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp(0) NULL DEFAULT NULL,
  `password` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('Active','Inactive','Final Account') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Inactive',
  `phone_number` varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `alternate_phone_number` varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `last_updated_by` bigint(20) UNSIGNED NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `deleted_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `users_email_unique`(`email`) USING BTREE,
  INDEX `users_last_updated_by_foreign`(`last_updated_by`) USING BTREE,
  CONSTRAINT `users_last_updated_by_foreign` FOREIGN KEY (`last_updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE = InnoDB AUTO_INCREMENT = 57 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (10, 'Admin', 'lcrojano@gmail.com', 'jOJVcUf0z7iKEpoymSEEWbR7PGKVshger3Y7Kxwi', NULL, '$2y$10$mDXAPZDWDbrdWFDXYu9Sde6ZlxtGKg/3MHa.ThXagukm3QLcmHHIS', 'Active', NULL, NULL, 'Bi9Q0gT10O', NULL, '2020-07-29 07:20:33', '2020-08-26 05:35:25', NULL);
INSERT INTO `users` VALUES (45, 'Staff', 'lcrojano@uninorte.edu.co', 'U2uAqGldvRT8Cml4RFv35Ry1t91VKKQIS4jutALW', NULL, '$2y$10$Jop.ajjl8gzpWCAioTTWJ.l5WLKbHXc2CcD2QFUEuRLnqygtoEQGi', 'Active', NULL, NULL, NULL, 10, '2020-08-26 06:56:30', '2020-11-04 07:08:37', NULL);
INSERT INTO `users` VALUES (49, 'General', 'visitante@gmail.com', 'v4NtfCzEgzTDb7lDkj8L9iCsaIG2En0MqJI1PeJ4', NULL, '$2y$10$Zr8mF9e8tNU7vWe2f4lE6OMpq/NnHoeLYIVu7E2j/RpuNoTqr2hwa', 'Active', NULL, NULL, NULL, 10, '2020-08-27 11:54:21', '2020-08-27 11:54:21', NULL);
INSERT INTO `users` VALUES (52, 'General', 'havila@uninorte.edu.co', 'Ub35cDn980uTvcHx7IJ7vTZSifZtRxzzsdb3OesE', NULL, '$2y$10$I4ZBCgTeh/wHjctZmhGqeOlu/L1RQuamYwcY8X8q/S33TKjcDwCKm', 'Active', NULL, NULL, NULL, 10, '2020-09-03 13:44:44', '2020-09-03 13:44:44', NULL);
INSERT INTO `users` VALUES (53, 'General', 'larquez@uninorte.edu.co', 'JxWIjeVVoruWPjKx71Za9bNHvAMnA6cVmKWaJvuZ', NULL, '$2y$10$s7XqNxyySDe0yqKJoZQSvuePdMD75uwVQJBBQrqq1O6sc5mwWP3HW', 'Active', NULL, NULL, NULL, NULL, '2020-09-07 09:34:32', '2020-09-07 09:34:32', NULL);
INSERT INTO `users` VALUES (54, 'Staff', 'inmobiliariarojano@gmail.com', 'dR18VtNPe1mY5rrFEiMRZ8QOhNtG9kIV1aXcYzg3', NULL, '$2y$10$3wgRfof3YsUdQwIy2aHw5.s7xz5KIKyJTm/6Yw7q2O3AEVWds0nOS', 'Active', NULL, NULL, NULL, 10, '2020-11-04 07:20:27', '2020-11-04 07:58:49', NULL);
INSERT INTO `users` VALUES (55, 'General', 'roommatesburo@gmail.com', '3aaFaqLxJiuaLLy0r6Sji1A7uk9DTaRk7pIxhM9D', NULL, '$2y$10$ERw/Hb5TrhhvZgo7R1NYA.frmAOBv0Vb5CUntSBaLWHTSGDySx2WC', 'Active', NULL, NULL, NULL, 10, '2020-11-04 07:33:55', '2020-11-04 07:33:55', NULL);
INSERT INTO `users` VALUES (56, 'General', 'ing.mariemurillo@gmail.com', 'rCKDNLlqxPNbmZ5Hot1nscWp4exQ8o63QY5p5Hj0', NULL, '$2y$10$uDbeiqjdCx2B6cH5bfYmMuFE9R/AbV99G84sYtcpQzzC5qF.e3uLK', 'Inactive', NULL, NULL, NULL, NULL, '2020-11-10 09:54:24', '2020-11-10 09:54:24', NULL);

SET FOREIGN_KEY_CHECKS = 1;
