const express = require('express');
const authRoute = require('./src/routes/authRoute');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});