const express = require('express')
const router = express.Router();
const pool = require('../models/db')

router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT 2 + 2 AS result')
        res.json({ success: true, result: rows[0].result })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, error: "Database text Failed" })
    }
})

module.exports = router;