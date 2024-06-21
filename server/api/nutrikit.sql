DROP TABLE IF EXISTS foods, categories;

CREATE TABLE categories (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

INSERT INTO categories (id, name) VALUES
(0, 'Proteins'),
(1, 'Fruits'),
(2, 'Vegetables'),
(3, 'Dairy'),
(4, 'Grains');

CREATE TABLE foods (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    category_id INT,
    calories INT,
    totalFat DECIMAL(5,2),
    saturatedFat DECIMAL(5,2),
    transFat DECIMAL(5,2),
    protein DECIMAL(5,2),
    carbohydrate DECIMAL(5,2),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO foods (id, name, category_id, calories, totalFat, saturatedFat, transFat, protein, carbohydrate) VALUES
(0, 'steak', 0, 300, 5.73, 2.183, 0.182, 29.44, 0.0),
(1, 'ground beef', 0, 200, 13.1, 5.3, 0.6, 15.18, 0.0),
(2, 'chicken', 0, 100, 9.3, 2.5, 0.1, 27.14, 0.0),
(3, 'fish', 0, 80, 6.34, 1.0, 0.0, 19.84, 0.0),
(4, 'soy', 0, 50, 19.94, 2.884, 0.0, 36.49, 30.16),
(5, 'orange', 1, 300, 0.12, 0.0, 0.0, 0.94, 11.75),
(6, 'banana', 1, 200, 0.33, 0.0, 0.0, 1.09, 22.84),
(7, 'pineapple', 1, 100, 0.12, 0.0, 0.0, 0.54, 13.12),
(8, 'grapes', 1, 80, 0.16, 0.0, 0.0, 0.72, 18.1),
(9, 'blueberries', 1, 50, 0.33, 0.0, 0.0, 0.74, 14.49),
(10, 'romaine', 2, 30, 0.3, 0.0, 0.0, 1.2, 3.3),
(11, 'green beans', 2, 40, 0.22, 0.0, 0.0, 1.83, 6.97),
(12, 'squash', 2, 100, 0.2, 0.0, 0.0, 1.2, 3.4),
(13, 'spinach', 2, 50, 0.4, 0.0, 0.0, 2.9, 3.6),
(14, 'kale', 2, 10, 0.9, 0.0, 0.0, 4.3, 8.8),
(15, 'milk', 3, 300, 3.9, 2.4, 0.0, 3.2, 4.8),
(16, 'yoghurt', 3, 200, 5.0, 0.0, 0.0, 9.0, 3.98),
(17, 'cheddar cheese', 3, 200, 9.0, 6.0, 0.0, 7.0, 0.0),
(18, 'skim milk', 3, 100, 0.2, 0.1, 0.0, 8.3, 12.5),
(19, 'cottage cheese', 3, 80, 4.3, 0.0, 0.0, 11.12, 3.38),
(20, 'bread', 4, 200, 1.1, 0.0, 0.0, 4.0, 13.8),
(21, 'bagel', 4, 300, 1.7, 0.1, 0.0, 13.8, 68),
(22, 'pita', 4, 250, 1.7, 0.3, 0.0, 6.3, 35.2),
(23, 'naan', 4, 210, 3.3, 0.1, 0.0, 2.7, 16.9),
(24, 'tortilla', 4, 120, 0.5, 0.1, 0.0, 1.1, 8.5);
