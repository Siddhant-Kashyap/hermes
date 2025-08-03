const authService = require('../services/authService');

function login(req, res) {
    const { username, password } = req.body;
    if (authService.authenticate(username, password)) {
        res.json({ success: true, message: 'Authentication successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
}

module.exports = { login };
