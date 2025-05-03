import { Request, Response } from 'express';
import { Product, Category } from '../models/interfaces.ts';
import pool from '../config/db.js';


// exports.getProducts = async (req, res) => {
//     try {
//         const result = await pool.query('SELECT * FROM products;');
//         res.status(200).json(result.rows);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// exports.getProductsByCategory = async (req, res) => {
//     const { category_id } = req.params;
//     try {
//         const result = await pool.query('SELECT p.* FROM products p JOIN product_categories pc ON p.id = pc.product_id WHERE pc.category_id = $1', [category_id]);
//         res.status(200).json(result.rows);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

const getProducts = async (req, res) => {
    try {
        let result = await pool.query('SELECT * FROM categories;');
        const items = new Map<Category, Product[]>();
        result.rows.forEach(async category => {
            result = await pool.query('SELECT id FROM categories WHERE title = $1;', [category.title]);
            console.log()
            result = await pool.query('SELECT p.* FROM products p JOIN product_categories pc ON p.id = pc.product_id WHERE pc.category_id = $1', [result.rows[0].id]);
            items.set(category, result.rows);
        });
        console.log(items)
        res.status(200).json(items);
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
    createProduct,
    updateProduct,
    deleteProduct
}