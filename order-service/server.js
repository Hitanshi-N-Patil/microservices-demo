const express = require('express');
const cors = require('cors');
const app = express();
const port = 7000;

app.use(cors());

app.get('/orders', (req, res) => {
    res.json([
        { id: 101, item: "Laptop", price: 75000 },
        { id: 102, item: "Phone", price: 45000 }
    ]);
});

app.listen(port, () => {
    console.log(`✅ Order Service running on port ${port}`);
});