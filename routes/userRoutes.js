const express = require('express');
const { updateUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
router.put('/', authMiddleware, updateUser);

module.exports = router;
