-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-04-2024 a las 05:38:38
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `coffeeoffer`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chat`
--

CREATE TABLE `chat` (
  `pk_id_chat` int(11) NOT NULL,
  `mensaje_chat` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `fecha_chat` timestamp NOT NULL DEFAULT current_timestamp(),
  `fk_id_subasta` int(11) NOT NULL,
  `fk_id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `chat`
--

INSERT INTO `chat` (`pk_id_chat`, `mensaje_chat`, `fecha_chat`, `fk_id_subasta`, `fk_id_usuario`) VALUES
(3, 'Hola, buenas tardes', '2024-02-21 19:40:47', 1, 108000700),
(4, 'Hola, como vamos a cuadrar ?', '2024-02-21 19:40:47', 2, 1084251889);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `finca`
--

CREATE TABLE `finca` (
  `pk_id_fin` int(11) NOT NULL,
  `nombre_fin` varchar(50) NOT NULL,
  `ubicacion_fin` varchar(90) NOT NULL,
  `imagen_fin` varchar(100) NOT NULL,
  `descripcion_fin` varchar(100) DEFAULT NULL,
  `departamento_fin` varchar(50) NOT NULL,
  `municipio_fin` varchar(50) NOT NULL,
  `fk_id_usuario` int(11) NOT NULL,
  `estado_fin` enum('activo','inactivo') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `finca`
--

INSERT INTO `finca` (`pk_id_fin`, `nombre_fin`, `ubicacion_fin`, `imagen_fin`, `descripcion_fin`, `departamento_fin`, `municipio_fin`, `fk_id_usuario`, `estado_fin`) VALUES
(1, 'Napoles', 'Vereda Belén con Longitud: 5.10822578 (W)\r\nLatitud: 41.92771566', '', 'A tan solo 5 minutos del casco urbano ', 'Huila', 'Pitalito', 1084251889, 'inactivo'),
(2, 'La guajira', 'Vereda Guacas con Longitud: 9.10822578 (W)\r\nLatitud: 26.92771566\r\n', '', 'A tan solo 5 minutos del casco urbano', 'Huila', 'Isnos', 108000700, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notificaciones`
--

CREATE TABLE `notificaciones` (
  `pk_id_not` int(11) NOT NULL,
  `tipo_not` enum('oferta','mensaje','cierre') NOT NULL,
  `fecha_not` timestamp NOT NULL DEFAULT current_timestamp(),
  `texto_not` varchar(150) NOT NULL,
  `fk_id_subasta` int(11) NOT NULL,
  `fk_id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `notificaciones`
--

INSERT INTO `notificaciones` (`pk_id_not`, `tipo_not`, `fecha_not`, `texto_not`, `fk_id_subasta`, `fk_id_usuario`) VALUES
(1, 'cierre', '2024-02-21 19:42:06', 'La subasta acaba de dar cierre, vuelve a intentarlo en otro momento', 1, 1084251889),
(2, 'oferta', '2024-02-21 19:42:06', 'Hay una nueva oferta mayor que la tuya, ve a mirarla', 2, 108000700);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `postulacion`
--

CREATE TABLE `postulacion` (
  `pk_id_pos` int(11) NOT NULL,
  `fecha_pos` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `oferta_pos` int(11) NOT NULL,
  `fk_id_usuario` int(11) NOT NULL,
  `fk_id_subasta` int(11) NOT NULL,
  `estado_pos` enum('activo','inactivo') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `postulacion`
--

INSERT INTO `postulacion` (`pk_id_pos`, `fecha_pos`, `oferta_pos`, `fk_id_usuario`, `fk_id_subasta`, `estado_pos`) VALUES
(1, '2024-03-07 08:39:51', 12, 1084251889, 1, 'inactivo'),
(2, '2023-11-28 05:00:00', 2100000, 108000700, 2, NULL),
(4, '2024-03-07 08:25:20', 1565571, 1084251889, 1, 'activo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `produccion`
--

CREATE TABLE `produccion` (
  `pk_id_pro` int(11) NOT NULL,
  `cantidad_pro` int(11) NOT NULL,
  `fk_id_variedad` int(11) NOT NULL,
  `fk_id_finca` int(11) NOT NULL,
  `estado_pro` enum('activo','inactivo') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `produccion`
--

INSERT INTO `produccion` (`pk_id_pro`, `cantidad_pro`, `fk_id_variedad`, `fk_id_finca`, `estado_pro`) VALUES
(1, 20000, 2, 2, NULL),
(2, 15000, 1, 1, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seguimiento`
--

CREATE TABLE `seguimiento` (
  `pk_id_seg` int(11) NOT NULL,
  `nombre_seg` varchar(200) NOT NULL,
  `fecha_seg` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `imagen_seg` varchar(100) DEFAULT NULL,
  `fk_id_produccion` int(11) NOT NULL,
  `fk_id_usuario` int(11) NOT NULL,
  `estado_seg` enum('activo','inactivo') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `seguimiento`
--

INSERT INTO `seguimiento` (`pk_id_seg`, `nombre_seg`, `fecha_seg`, `imagen_seg`, `fk_id_produccion`, `fk_id_usuario`, `estado_seg`) VALUES
(1, '', '2024-02-21 00:00:00', NULL, 1, 1084251889, NULL),
(2, '', '2024-02-20 00:00:00', NULL, 2, 108000700, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subasta`
--

CREATE TABLE `subasta` (
  `pk_id_sub` int(11) NOT NULL,
  `fecha_inicio_sub` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha_fin_sub` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `precio_inicial_sub` int(11) NOT NULL,
  `precio_final_sub` int(11) DEFAULT NULL,
  `estado_sub` enum('abierta','espera','cerrada') NOT NULL,
  `fk_id_produccion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `subasta`
--

INSERT INTO `subasta` (`pk_id_sub`, `fecha_inicio_sub`, `fecha_fin_sub`, `precio_inicial_sub`, `precio_final_sub`, `estado_sub`, `fk_id_produccion`) VALUES
(1, '2024-02-28 10:00:00', '2024-02-28 14:00:30', 180000, NULL, 'espera', 1),
(2, '2024-02-21 12:00:00', '2024-02-29 18:30:00', 150000, NULL, 'espera', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `pk_cedula_user` int(11) NOT NULL,
  `nombre_user` varchar(50) NOT NULL,
  `email_user` varchar(100) NOT NULL,
  `password_user` char(60) NOT NULL,
  `descripcion_user` varchar(170) DEFAULT NULL,
  `imagen_user` blob DEFAULT NULL,
  `telefono_user` varchar(12) NOT NULL,
  `fecha_nacimiento_user` date NOT NULL,
  `rol_user` enum('vendedor','comprador','admin') NOT NULL,
  `estado_user` enum('activo','inactivo') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`pk_cedula_user`, `nombre_user`, `email_user`, `password_user`, `descripcion_user`, `imagen_user`, `telefono_user`, `fecha_nacimiento_user`, `rol_user`, `estado_user`) VALUES
(108000700, 'Pepito', 'pepito@hotmail.com', '7382b', 'hola, esta funcionando ?', NULL, '3207383', '2005-02-01', 'admin', NULL),
(1084251888, 'Juan Camilo Realpe Ceron', 'juanca@gmail.com', '$2b$12$8uET96AEuJQJ8QUqB.AGQu8UDJbv1898LpsZPeJrcs.ziKFqOvate', NULL, NULL, '3157874593', '2005-06-17', 'comprador', 'activo'),
(1084251889, 'Juan Camilo Realpe', 'juan@gmail.com', '123456789', 'Soy un chico amigable', '', '3157874593', '2005-06-17', 'admin', NULL),
(1879534436, 'jorge enrique', 'jorge4@gmail.com', '3203986077Nn', 'Soy amable y amigable ', NULL, '3203986077', '2005-04-04', 'admin', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `variedad`
--

CREATE TABLE `variedad` (
  `pk_id_vari` int(11) NOT NULL,
  `tipo_vari` enum('Tipica','Borbon','Tabi','Caturra','Variedad Colombia') NOT NULL,
  `descripcion_vari` varchar(100) DEFAULT NULL,
  `imagen_vari` varchar(100) DEFAULT NULL,
  `puntuacion_vari` int(11) NOT NULL,
  `estado_vari` enum('activo','inactivo') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `variedad`
--

INSERT INTO `variedad` (`pk_id_vari`, `tipo_vari`, `descripcion_vari`, `imagen_vari`, `puntuacion_vari`, `estado_vari`) VALUES
(1, 'Tipica', 'Este tipo de café tiene un sabor más amargo y un aroma picante', NULL, 9, NULL),
(2, 'Tabi', 'Este tipo de café tiene un sabor dulce', NULL, 9, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`pk_id_chat`),
  ADD KEY `subastac` (`fk_id_subasta`),
  ADD KEY `chatUser` (`fk_id_usuario`);

--
-- Indices de la tabla `finca`
--
ALTER TABLE `finca`
  ADD PRIMARY KEY (`pk_id_fin`),
  ADD KEY `fincaUser` (`fk_id_usuario`);

--
-- Indices de la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  ADD PRIMARY KEY (`pk_id_not`),
  ADD KEY `subastaNo` (`fk_id_subasta`),
  ADD KEY `notificacionUser` (`fk_id_usuario`);

--
-- Indices de la tabla `postulacion`
--
ALTER TABLE `postulacion`
  ADD PRIMARY KEY (`pk_id_pos`),
  ADD KEY `PostulaUser` (`fk_id_usuario`),
  ADD KEY `Postulasub` (`fk_id_subasta`);

--
-- Indices de la tabla `produccion`
--
ALTER TABLE `produccion`
  ADD PRIMARY KEY (`pk_id_pro`),
  ADD KEY `produccionvariedad` (`fk_id_variedad`),
  ADD KEY `produccionFin` (`fk_id_finca`);

--
-- Indices de la tabla `seguimiento`
--
ALTER TABLE `seguimiento`
  ADD PRIMARY KEY (`pk_id_seg`),
  ADD KEY `SeguimiUser` (`fk_id_usuario`),
  ADD KEY `produccionSegui` (`fk_id_produccion`) USING BTREE;

--
-- Indices de la tabla `subasta`
--
ALTER TABLE `subasta`
  ADD PRIMARY KEY (`pk_id_sub`),
  ADD KEY `subastaPro` (`fk_id_produccion`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`pk_cedula_user`);

--
-- Indices de la tabla `variedad`
--
ALTER TABLE `variedad`
  ADD PRIMARY KEY (`pk_id_vari`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `chat`
--
ALTER TABLE `chat`
  MODIFY `pk_id_chat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `finca`
--
ALTER TABLE `finca`
  MODIFY `pk_id_fin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  MODIFY `pk_id_not` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `postulacion`
--
ALTER TABLE `postulacion`
  MODIFY `pk_id_pos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `produccion`
--
ALTER TABLE `produccion`
  MODIFY `pk_id_pro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `seguimiento`
--
ALTER TABLE `seguimiento`
  MODIFY `pk_id_seg` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `subasta`
--
ALTER TABLE `subasta`
  MODIFY `pk_id_sub` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `variedad`
--
ALTER TABLE `variedad`
  MODIFY `pk_id_vari` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `chat`
--
ALTER TABLE `chat`
  ADD CONSTRAINT `chatUser` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuarios` (`pk_cedula_user`),
  ADD CONSTRAINT `subastac` FOREIGN KEY (`fk_id_subasta`) REFERENCES `subasta` (`pk_id_sub`);

--
-- Filtros para la tabla `finca`
--
ALTER TABLE `finca`
  ADD CONSTRAINT `fincaUser` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuarios` (`pk_cedula_user`);

--
-- Filtros para la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  ADD CONSTRAINT `notificacionUser` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuarios` (`pk_cedula_user`),
  ADD CONSTRAINT `subastaNo` FOREIGN KEY (`fk_id_subasta`) REFERENCES `subasta` (`pk_id_sub`);

--
-- Filtros para la tabla `postulacion`
--
ALTER TABLE `postulacion`
  ADD CONSTRAINT `PostulaUser` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuarios` (`pk_cedula_user`),
  ADD CONSTRAINT `Postulasub` FOREIGN KEY (`fk_id_subasta`) REFERENCES `subasta` (`pk_id_sub`);

--
-- Filtros para la tabla `produccion`
--
ALTER TABLE `produccion`
  ADD CONSTRAINT `produccionFin` FOREIGN KEY (`fk_id_finca`) REFERENCES `finca` (`pk_id_fin`),
  ADD CONSTRAINT `produccionvariedad` FOREIGN KEY (`fk_id_variedad`) REFERENCES `variedad` (`pk_id_vari`);

--
-- Filtros para la tabla `seguimiento`
--
ALTER TABLE `seguimiento`
  ADD CONSTRAINT `SeguimiUser` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuarios` (`pk_cedula_user`),
  ADD CONSTRAINT `seguimiento_ibfk_1` FOREIGN KEY (`fk_id_produccion`) REFERENCES `produccion` (`pk_id_pro`) ON DELETE CASCADE;

--
-- Filtros para la tabla `subasta`
--
ALTER TABLE `subasta`
  ADD CONSTRAINT `subastaPro` FOREIGN KEY (`fk_id_produccion`) REFERENCES `produccion` (`pk_id_pro`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
