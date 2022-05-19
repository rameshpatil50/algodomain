const jwt = require('jsonwebtoken');

// const pass = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
const pass = 'dsljfahnlksadmfuaksdgfhjlsdkfh jdb fjkhdsgf kdsfkuasdg fhkljdsf';

function verifyToken(req, res) {
        const token = req.headers['authorization'];
        jwt.verify(token, pass, (err, decoded) => {
            if (err) {
                console.log(1, err);
                res.status(401).json({
                    success: false,
                    message: 'Unauthorized',
                    data: err
                })
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }



module.exports = { verifyToken };