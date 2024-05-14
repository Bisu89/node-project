const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Thay đổi cổng nếu cần thiết

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});

app.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({ message: 'Data received', data });
});

const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use`);
        console.error(`Port ${process.env} is already in use`);
        process.exit(1);
    } else {
        throw err;
    }
});
