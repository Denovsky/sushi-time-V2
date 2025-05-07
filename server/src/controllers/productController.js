import pool from '../config/db.js';


const getProducts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products;');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// exports.getProductsByCategory = async (req, res) => {
//     const { category_id } = req.params;
//     try {
//         const result = await pool.query('SELECT p.* FROM products p JOIN product_categories pc ON p.id = pc.product_id WHERE pc.category_id = $1', [category_id]);
//         res.status(200).json(result.rows);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

const getProductsCategories = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT
                c.id AS category_id,
                c.title AS category_title,
                c.z_index AS category_z_index,
                p.id AS product_id,
                p.title AS product_title,
                p.z_index AS product_z_index,
                p.price,
                p.description,
                p.weight
            FROM 
                categories c
            JOIN 
                product_categories pc ON c.id = pc.category_id
            JOIN 
                products p ON pc.product_id = p.id
            ORDER BY
                c.z_index ASC,
                p.z_index ASC
        `);
        const items = new Map();
        result.rows.forEach(row => {
            const category = row.category_title;
            if (!items.has(category)) {
                items.set(category, []);
            }
            items.get(category).push({
                id: row.product_id,
                title: row.product_title,
                price: row.price,
                description: row.description,
                weight: row.weight
            });
        });
        console.log(items)
        res.status(200).json(Object.fromEntries(items));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createProduct = async (req, res) => {
    const { title, description, price, weight, status = 0, item_discount = 0 } = req.body;
    try {
        const result = await pool.query('INSERT INTO products (title, description, price, weight, status, item_discount) VALUES ($1, $2, $3, $4, $5, $6);',
            [title, description, price, weight, status, item_discount]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { title, description, price, weight, status = 0, item_discount = 0 } = req.body;
    try {
        const result = await pool.query('UPDATE products SET title = $1, description = $2, price = $3, weight = $4, status = $5, item_discount = $6, changed_at = NOW() WHERE id = $7;',
            [title, description, price, weight, status, item_discount, id]);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM products WHERE id = $1;', [id]);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export default {
    getProducts,
    getProductsCategories,
    createProduct,
    updateProduct,
    deleteProduct
}