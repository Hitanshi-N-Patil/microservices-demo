const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: "Hitanshi" },
        { id: 2, name: "Neha" },
        { id: 3, name: "Aarav" }
    ]);
});

app.listen(port, () => {
    console.log(`✅ User Service running on port ${port}`);
});