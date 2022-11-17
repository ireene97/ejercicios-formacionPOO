CREATE TABLE `w3schools-sql`.`orderdetails` (
  `OrderDetailId` INT NOT NULL AUTO_INCREMENT,
  `OrderId` INT NOT NULL,
  `ProductId` INT NOT NULL COMMENT 'Unidades del producto (int) ',
  `Quantity` INT NULL DEFAULT 1,
  PRIMARY KEY (`OrderDetailId`));