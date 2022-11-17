CREATE TABLE `w3schools-sql`.`categories` (
  `idCategories` INT NOT NULL AUTO_INCREMENT,
  `CategoryName` VARCHAR(45) NOT NULL,
  `Description` VARCHAR(200) NULL DEFAULT 'Descripcion' COMMENT 'Tabla de Categorias de productos',
  PRIMARY KEY (`idCategories`));