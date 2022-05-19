const express = require('express');
const router = express.Router();
const { connection } = require('./db');
const { verifyToken, checkAdmin } = require('./middleware/jwt');
const bodyparser = require('body-parser');
const { check, validationResult } = require('express-validator');
const { decode } = require('punycode');


router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next();
}, 
// verifyToken
);


// add single product and multiple products
router.post('/add', [
    check('seller_id').isNumeric(),
    check('name').isLength({ min: 3 }),
    check('price').isNumeric(),
    check('img_url').isLength({ min: 3 }),
    check('type').isLength({ min: 3 }),
    check('category').isLength({ min: 3 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: 'Validation failed',
            data: errors.array()
        });
    }
    const { seller_id, name, price, img_url, type, category } = req.body;
    const sql = `INSERT INTO product (seller_id, name, price, img_url, type, category) VALUES (?, ?, ?, ?, ?, ?)`;
    connection.query(sql, [seller_id, name, price, img_url, type, category], (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Internal Server Error',
                data: err
            });
        }
        return res.status(200).json({
            success: true,
            message: 'Product added successfully',
            data: result
        });
    });
});


// update single product
router.post('/update/:id', [
    check('id').isNumeric(),
    check('seller_id').isNumeric(),
    check('name').isLength({ min: 3 }),
    check('price').isNumeric(),
    check('img_url').isLength({ min: 3 }),
    check('type').isLength({ min: 3 }),
    check('category').isLength({ min: 3 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: 'Validation failed',
            data: errors.array()
        });
    }
    const {seller_id,seller_username, name, price, img_url, type, category } = req.body;
    const id = req.params.id;
    if (decide_username==seller_username) {
    const sql = `UPDATE product SET seller_id = ?,seller_username = ?, name = ?, price = ?, img_url = ?, type = ?, category = ? WHERE id = ?`;
    connection.query(sql, [seller_id,seller_username, name, price, img_url, type, category, id], (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Internal Server Error',
                data: err
            });
        }
        return res.status(200).json({
            success: true,
            message: 'Product updated successfully',
            data: result
        });
    });
    }
    })


module.exports = router;