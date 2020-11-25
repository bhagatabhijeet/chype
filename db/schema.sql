CREATE TABLE `bugdb`.`projects` (
  `project_id` INT NOT NULL AUTO_INCREMENT,
  `project_name` VARCHAR(50) NULL,
  `project_key` VARCHAR(10) NULL,
  `project_description` VARCHAR(300) NULL,
  `created_date` DATE NULL,
  `created_by` VARCHAR(45) NULL,
  PRIMARY KEY (`project_id`),
  UNIQUE INDEX `project_key_UNIQUE` (`project_key` ASC) VISIBLE);



CREATE TABLE `bugdb`.`issue` (
  `issue_id` INT NOT NULL,
  `issue_key` VARCHAR(10) NOT NULL,
  `summary` VARCHAR(255) NULL,
  `description` VARCHAR(4000) NULL,
  `reported_by` VARCHAR(45) NULL,
  `reported_date` DATE NULL,
  `assigned_to` INT NULL,
  `status` INT NULL,
  `priority` VARCHAR(2) NULL,
  `modified_on` DATE NULL,
  `modified_by` INT NULL,
  `project_id` INT NULL,
  PRIMARY KEY (`issue_id`),
  UNIQUE INDEX `issue_key_UNIQUE` (`issue_key` ASC) VISIBLE);
