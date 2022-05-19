const express = require('express');
const router = express.Router();
const { connection } = require('./db');
const { verifyToken, checkAdmin } = require('./middleware/jwt');
const bodyparser = require('body-parser');
const { check, validationResult } = require('express-validator');

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next();
});

// login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = `SELECT * FROM seller WHERE username = ? AND password = ?`;
    connection.query(sql, [username, password], (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Internal Server Error',
                data: err
            });
        }
        if (result.length === 0) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized',
                data: 'Invalid email or password'
            });
        }
        const token = jwt.sign({ id: result[0].id }, pass, { expiresIn: '5h' });
        return res.status(200).json({
            success: true,
            message: 'Login successful',
            data: {
                token,
                username: result[0].username,
                full_name: result[0].full_name,
                email: result[0].email,
                phone: result[0].phone
            }
        });
    });
});


// add seller
router.post('/add', [
    check('username').isLength({ min: 3 }),
    check('password').isLength({ min: 3 }),
    check('full_name').isLength({ min: 3 }),
    check('email').isEmail(),
    check('phone').isNumeric()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: 'Validation failed',
            data: errors.array()
        });
    }
    const { username, password, full_name, email, phone } = req.body;
    const sql = `INSERT INTO seller (username, password, full_name, email, phone) VALUES (?, ?, ?, ?, ?)`;
    connection.query(sql, [username, password, email, phone, full_name], (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Internal Server Error',
                data: err
            });
        }
        return res.status(200).json({
            success: true,
            message: 'Seller added successfully',
            data: result
        });
    });  
});


module.exports = router;