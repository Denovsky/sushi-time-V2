\c sushitimedb postgres
INSERT INTO product_categories (product_id, category_id)
SELECT 
  p.id, 
  (SELECT id FROM categories WHERE title = 'Soups' LIMIT 1)
FROM 
  products p
WHERE 
  p.title IN ('Miso Soup', 'Tom Yum', 'Chicken Noodle', 'Pumpkin Soup', 'Borscht')
ON CONFLICT (product_id, category_id) DO NOTHING;

INSERT INTO product_categories (product_id, category_id)
SELECT 
  p.id, 
  (SELECT id FROM categories WHERE title = 'Sushi' LIMIT 1)
FROM 
  products p
WHERE 
  p.title IN ('Salmon Sushi', 'Tuna Sushi', 'Shrimp Sushi', 'Eel Sushi', 'Avocado Sushi', 'Gunkan Chuka', 'Nigiri Salmon', 'Nigiri Tuna', 'Sashimi Mix', 'Unagi Nigiri', 'Tamago Nigiri')
ON CONFLICT (product_id, category_id) DO NOTHING;

INSERT INTO product_categories (product_id, category_id)
SELECT 
  p.id, 
  (SELECT id FROM categories WHERE title = 'Salads' LIMIT 1)
FROM 
  products p
WHERE 
  p.title IN ('Caesar', 'Greek Salad', 'Seafood Salad', 'Caprese', 'Avocado Salad')
ON CONFLICT (product_id, category_id) DO NOTHING;

INSERT INTO product_categories (product_id, category_id)
SELECT 
  p.id, 
  (SELECT id FROM categories WHERE title = 'Drinks' LIMIT 1)
FROM 
  products p
WHERE 
  p.title IN ('Cola', 'Green Tea', 'Orange Juice', 'Mineral Water', 'Mojito (Non-Alc)')
ON CONFLICT (product_id, category_id) DO NOTHING;

INSERT INTO product_categories (product_id, category_id)
SELECT 
  p.id, 
  (SELECT id FROM categories WHERE title = 'Pizza' LIMIT 1)
FROM 
  products p
WHERE 
  p.title IN ('Margherita', 'Pepperoni', 'Hawaiian', 'Quattro Formaggi', 'BBQ Chicken')
ON CONFLICT (product_id, category_id) DO NOTHING;

INSERT INTO product_categories (product_id, category_id)
SELECT 
  p.id, 
  (SELECT id FROM categories WHERE title = 'Snacks' LIMIT 1)
FROM 
  products p
WHERE 
  p.title IN ('Edamame', 'Chicken Wings', 'Spring Rolls', 'French Fries', 'Garlic Bread')
ON CONFLICT (product_id, category_id) DO NOTHING;

INSERT INTO product_categories (product_id, category_id)
SELECT 
  p.id, 
  (SELECT id FROM categories WHERE title = 'Rolls' LIMIT 1)
FROM 
  products p
WHERE 
  p.title IN ('California Classic Rolls', 'California Salmon Rolls', 'California Eel Rolls', 'Canada Classic Rolls', 'Canada Rolls with Salmon', 'Canada Rolls with Shrimp', 'Philadelphia Rolls with Shrimp', 'Philadelphia Light Rolls', 'Philadelphia Classic Rolls', 'Philadelphia Rolls with Crab', 'Philadelphia Rolls with Eel', 'Tuna Rolls', 'Pyramid Rolls', 'Mizuri Rolls', 'Tori spicy Rolls', 'Osaka Rolls', 'Salmon spicy Rolls', 'Snow Crab Rolls', 'Alaska Rolls', 'Bonito Rolls with Smoked Salmon', 'Bonito Rolls with Chicken', 'Carolina Rolls', 'White Sesame Rolls', 'Maki Rolls with Salmon', 'Maki Rolls with Crab', 'Maki Rolls with Chicken', 'Maki Rolls with Smoked Salmon', 'Maki Rolls with Cucumber', 'Maki Rolls with Eel', 'Maki Rolls with Tuna', 'Maki Rolls with Shrimp', 'Maki Rolls with Avocado', 'Maki Rolls with Tobiko', 'Maki Rolls with Tomago', 'Salmon Rolls', 'Eel Rolls', 'Shrimp Rolls', 'Tuna Rolls', 'Vegetable Rolls', 'Lirra Rolls', 'Baked Salmon Rolls', 'Baked Eel Rolls', 'Baked Tuna Rolls', 'Baked Crab Rolls', 'Baked Chicken Rolls', 'Baked Shrimp Rolls', 'Baked Spicy Salmon Rolls', 'Baked Spicy Eel Rolls', 'Baked Spicy Tuna Rolls', 'Baked Spicy Crab Rolls', 'Baked Spicy Chicken Rolls', 'Baked Spicy Shrimp Rolls', 'Tempura Spicy Eby Rolls', 'Tempura Crab Rolls', 'Tempura Chicken Rolls', 'Tempura Salmon Rolls', 'Tempura Eel Rolls', 'Tempura Tuna Rolls', 'Tempura Shrimp Rolls')
ON CONFLICT (product_id, category_id) DO NOTHING;