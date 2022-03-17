CREATE TABLE `advdata`.`eventos` ( `id` INT NOT NULL AUTO_INCREMENT , `datas` VARCHAR(12) NOT NULL , `titulo` VARCHAR(30) NOT NULL , `meses` VARCHAR(12) NOT NULL ,`responsavel` VARCHAR(20) NOT NULL , `rgt` VARCHAR(12) NOT NULL ,PRIMARY KEY (`id`)) ENGINE = InnoDB; 

CREATE TABLE `advdata`.`usuarios` ( `id` INT NOT NULL AUTO_INCREMENT , `usuario` VARCHAR(30) NOT NULL , `senha` VARCHAR(10) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
