const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    link: { type: String },
    password: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    hostname: { type: String }, // New field added
    setduration: { type: Number } // New field added
});

module.exports = mongoose.model('Event', eventSchema);
