const express = require('express');
const { createEvent, getAllEvents, updateEvent, deleteEvent, checkConflict, disableEvent, getEvent } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createEvent);
router.get('/', authMiddleware, getAllEvents);
router.put('/:id', authMiddleware, updateEvent);
router.delete('/:id', authMiddleware, deleteEvent);
router.post('/check-conflict', authMiddleware, checkConflict);
router.patch('/disable/:id', authMiddleware, disableEvent);
router.get('/:id', authMiddleware, getEvent);
// Additional routes for editing, deleting, and viewing events can be added here.

module.exports = router;
