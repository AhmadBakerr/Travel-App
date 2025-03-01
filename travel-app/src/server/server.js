const express = require('express');
const app = express();

// Middleware
app.use(express.static('dist'));

// Define a simple route
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'dist' });
});

// Start server
const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
