const User = require('../models/User');

exports.updateUser = async (req, res) => {
    const { username, email, firstname, lastname, password } = req.body; // Updated to include firstname, lastname, and password
    try {
        await User.findByIdAndUpdate(req.user.id, { email, firstname, lastname, password }); // Updated to include firstname, lastname, and password
        res.json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
