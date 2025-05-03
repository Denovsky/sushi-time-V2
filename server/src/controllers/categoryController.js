import pool from '../config/db.js';

const getCategories = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM categories;')
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getCategoryID = async (req, res) => {
    const { category } = req.params;
    try {
        const result = await pool.query('SELECT id FROM categories WHERE title = $1;', [category]);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createCategory = async (req, res) => {
    const { title } = req.body;
    try {
        const result = await pool.query('INSERT INTO categories (title) VALUES ($1);', [title]);
        res.status(201).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { title, parent_id = null } = req.body;
    try {
        const result = await pool.query('UPDATE categories SET title = $1, parent_id = $2 WHERE id = $3;',
            [title, parent_id, id]);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM categories WHERE id = $1;', [id]);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export default {
    getCategories,
    getCategoryID,
    createCategory,
    updateCategory,
    deleteCategory
}