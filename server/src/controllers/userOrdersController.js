import pool from '../config/db.js';

const getOrders = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}; // admin

const changeOrderStatus = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}; // admin

const getOrderByUserId = async (req, res) => {
    const { name, phone } = req.body;
    try {
        const result = await pool.query('INSERT INTO users (name, phone) VALUES ($1, $2) RETURNING id', [name, phone]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}; // user

const createOrder = async (req, res) => {
    const { id } = req.params;
    const { name, phone, verified } = req.body;
    try {
        const result = await pool.query('UPDATE users SET name = $1, phone = $2, verified = $3 WHERE id = $4 RETURNING id', [name, phone, verified, id]);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}; // user

export default {
    getOrders,
    changeOrderStatus,
    getOrderByUserId,
    createOrder
};