CREATE TABLE `advdata`.`eventos` ( `id` INT NOT NULL AUTO_INCREMENT , `datas` VARCHAR(12) NOT NULL , `titulo` VARCHAR(30) NOT NULL , `meses` VARCHAR(12) NOT NULL ,`responsavel` VARCHAR(20) NOT NULL , `rgt` VARCHAR(12) NOT NULL ,PRIMARY KEY (`id`)) ENGINE = InnoDB; 

CREATE TABLE `advdata`.`usuarios` ( `id` INT NOT NULL AUTO_INCREMENT , `usuario` VARCHAR(30) NOT NULL , `senha` VARCHAR(10) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

INSERT INTO `usuarios` (`id`, `usuario`, `senha`) VALUES 
(NULL, 'Luciano', '159357'), 
(NULL, 'Thiago', '357951'),
(NULL, 'LeandroCx', '147258'),
(NULL, 'LeandroCp', '369321'),
(NULL, 'Israel', '254214'),
(NULL, 'Karina', '658958'),
(NULL, 'Victor', '458789'),
(NULL, 'Silvana', '965369')
