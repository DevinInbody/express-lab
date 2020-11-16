DROP DATABASE IF EXISTS ExpressShopDB;

CREATE DATABASE ExpressShopDB;

\c ExpressShopDB;

CREATE TABLE IF NOT EXISTS shopping_cart(
    id: serial UNIQUE PRIMARY KEY,
    product: VARCHAR(100),
    price: INT,
    quantity: INT
);

INSERT INTO shopping_cart (product, price, quantity)
VALUES
("Adidas Harden 4", 150, 2),
("Jordan 8", 200, 1),
("Nike LeBron 15", 150, 3)