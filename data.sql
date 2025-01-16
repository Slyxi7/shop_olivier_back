-- Création de la table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image VARCHAR(255) NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50) NOT NULL
);

-- Insertion des données
INSERT INTO products (image, title, description, price, category) VALUES
('src/assets/images/macbookpro.PNG', 'Macbook Pro', 'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis', 1500, 'desktop'),
('src/assets/images/levono.PNG', 'Levono Pro', 'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis', 2300, 'desktop'),
('src/assets/images/rider.PNG', 'Rider', 'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis', 1200, 'gamer'),
('src/assets/images/ldlc.PNG', 'LDLC benolo', 'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis', 4500, 'streaming'),
('src/assets/images/asus.PNG', 'Asus gamer', 'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis', 3755, 'gamer'),
('src/assets/images/rog.PNG', 'Rog desktop', 'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis', 2452, 'streaming'),
('src/assets/images/msi.PNG', 'MSI play', 'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis', 1478, 'gamer'),
('src/assets/images/pad.PNG', 'Think pad', 'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis', 899, 'desktop');
