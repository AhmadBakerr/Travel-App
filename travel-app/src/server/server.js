const express = require('express');
const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
});

const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
