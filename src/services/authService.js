// Simple auth service with hardcoded credentials
const USERNAME = 'admin';
const PASSWORD = 'password123';

function authenticate(username, password) {
    return username === USERNAME && password === PASSWORD;
}

module.exports = { authenticate };
