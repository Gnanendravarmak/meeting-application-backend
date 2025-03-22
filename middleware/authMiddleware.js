const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    let token = req.header('Authorization');
    token = token.slice(7);

    if (!token) return res.status(401).json({ message: 'Access denied' });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
