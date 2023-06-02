-- 26-05-23 --
CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `uid` VARCHAR(255) NOT NULL,
  `cart_id` INT DEFAULT NULL,
  `email` VARCHAR(255) DEFAULT NULL,
  `full_name` VARCHAR(50) DEFAULT NULL,
  `display_name` VARCHAR(255) DEFAULT NULL,
  `dob` VARCHAR(255) DEFAULT NULL,
  `password` VARCHAR(255) DEFAULT NULL,
  `address_line` VARCHAR(255) DEFAULT NULL,
  `phone_no` VARCHAR(255) DEFAULT NULL,
  `city` VARCHAR(255) DEFAULT NULL,
  `country` VARCHAR(255) DEFAULT NULL,
  `type` ENUM('admin','appuser') NOT NULL DEFAULT 'appuser',
  `status` ENUM('0','1','2','3','4','5','6','7') NOT NULL DEFAULT '1',
  `created_by` INT DEFAULT NULL,
  `created_date` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_by` INT DEFAULT NULL,
  `updated_date` TIMESTAMP(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_by` INT DEFAULT NULL,
  `deleted_date` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(155) NOT NULL,
  `category` ENUM('electronics','homedecorations','accessories','outfit') NOT NULL,
  `description` TEXT,
  `price` DECIMAL(10,2) NOT NULL,
  `quantity` INT NOT NULL,
  `status` ENUM('0','1','2','3','4','5','6','7') NOT NULL DEFAULT '1',
  `created_by` INT DEFAULT NULL,
  `created_date` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_by` INT DEFAULT NULL,
  `updated_date` TIMESTAMP(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_by` INT DEFAULT NULL,
  `deleted_date` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
)
-- 26-05-23 --

-- 31-05-23 --
CREATE TABLE `merchants` (
  `id` INT PRIMARY KEY,
  `m_id` INT NOT NULL,
  `company_name` VARCHAR(255) NOT NULL,
  `transaction_email` VARCHAR(255)  DEFAULT NULL,
  `user_id` INT NOT NULL,
  `contact_name` VARCHAR(255) NOT NULL,
  `contact_email` VARCHAR(255) UNIQUE NOT NULL,
  `contact_phone` VARCHAR(20) NOT NULL,
  `contact_address` VARCHAR(255) NOT NULL,
  `payment_method` SET('upi','card') NOT NULL,
  `payment_details` VARCHAR(255) NOT NULL,
  `profile_image` VARCHAR(255)  DEFAULT NULL,
  `merchant_status` ENUM('verified','not-verified') NOT NULL DEFAULT 'not-verified',
  `status` ENUM('0','1','2','3','4','5','6','7') NOT NULL DEFAULT '1',
  `created_by` INT DEFAULT NULL,
  `created_date` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_by` INT DEFAULT NULL,
  `updated_date` TIMESTAMP(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_by` INT DEFAULT NULL,
  `deleted_date` TIMESTAMP(6) NULL DEFAULT NULL
);
-- 31-05-23 --