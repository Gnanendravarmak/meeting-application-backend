const Event = require('../models/Event');

// Create Event
exports.createEvent = async (req, res) => {
    const { title, description, date, link, password, hostname, setduration } = req.body; // Updated
    const newEvent = new Event({ title, description, date, link, password, hostname, setduration, userId: req.user.id }); // Updated
    try {
        await newEvent.save();
        res.status(201).json({ message: 'Event created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get All Events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find({ userId: req.user.id });
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Event
exports.updateEvent = async (req, res) => {
    const { id } = req.params;
    const { title, description, date, link, password, hostname, setduration } = req.body; // Updated
    try {
        const updatedEvent = await Event.findByIdAndUpdate(id, { title, description, date, link, password, hostname, setduration }, { new: true }); // Updated
        res.json(updatedEvent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Event
exports.deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
        await Event.findByIdAndDelete(id);
        res.json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Check for Conflicts
exports.checkConflict = async (req, res) => {
    const { date } = req.body;
    try {
        const conflict = await Event.findOne({ date, userId: req.user.id });
        if (conflict) {
            return res.status(409).json({ message: 'Conflict detected: Event already scheduled at this time.' });
        }
        res.json({ message: 'No conflicts detected.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
