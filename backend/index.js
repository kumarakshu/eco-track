const express = require('express');
const cors = require("cors");
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const weatherRoutes = require('./routes/weatherRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("I am the Root");
});

app.use('/api', weatherRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});