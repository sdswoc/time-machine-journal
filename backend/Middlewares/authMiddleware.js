const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const token = req.cookies.jwt;
    
    if (!token) {
        return res.status(401).json({message: 'Access denied!',
          isAuthenticated : false
        });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({message: 'Invalid token!' , 
            isAuthenticated : false
        });
    }
};

module.exports = verifyToken;