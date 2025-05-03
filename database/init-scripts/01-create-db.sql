CREATE DATABASE sushitimedb;
CREATE USER relanoe_db_user WITH PASSWORD '926737';
GRANT ALL PRIVILEGES ON DATABASE sushitimedb TO relanoe_db_user;

\c sushitimedb postgres

ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO relanoe_db_user;

CREATE TABLE users (
   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
   name VARCHAR(40) COLLATE "C.utf8" NOT NULL,
   verified bool NOT NULL DEFAULT false,
   phone VARCHAR(10) NOT NULL UNIQUE
);

CREATE TABLE admins (
   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
   login VARCHAR(40) NOT NULL,
   password VARCHAR(64) NOT NULL
);

CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	title TEXT NOT NULL COLLATE "C.utf8" NOT NULL,
	description TEXT COLLATE "C.utf8",
	price INTEGER NOT NULL,
	weight INTEGER,
	status INTEGER NOT NULL DEFAULT 0, -- 0: available, 1: not available, 2: deleted
	item_discount INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    changed_at TIMESTAMP DEFAULT NOW()
	-- attributes JSONB, -- sorting
);

CREATE TABLE popular_products (
	id SERIAL PRIMARY KEY,
	product_id INTEGER NOT NULL,
	FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE categories (
	id SERIAL PRIMARY KEY,
	title TEXT NOT NULL,
	parent_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE product_categories (
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
    PRIMARY KEY (product_id, category_id)
);

CREATE TABLE carts (
	id SERIAL PRIMARY KEY,
	user_id UUID REFERENCES users(id) ON DELETE CASCADE,
	description VARCHAR(400),
	status INTEGER NOT NULL DEFAULT 0, -- 0: started, 1: accepted, 2: procced, 3: deliver, 4: ended, 5: canceled
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE cart_products (
	cart_id INTEGER REFERENCES carts(id) ON DELETE CASCADE,
	product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
	number INTEGER NOT NULL DEFAULT 1,
	PRIMARY KEY (cart_id, product_id)
);

CREATE TABLE announcement (
	id SERIAL PRIMARY KEY,
	title TEXT,
	description TEXT,
	discount int2 NOT NULL DEFAULT 0,
	items_id INTEGER[],
	categories_id INTEGER[],
	types_id INTEGER[]
);

CREATE TABLE sort (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
	func TEXT NOT NULL,
	tag TEXT
);

CREATE TABLE popular_items (
	id SERIAL PRIMARY KEY,
	product_id INTEGER NOT NULL,
	FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
)