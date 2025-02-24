const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8081;

app.get("/geonames", async (req, res) => {
    res.json({ city: req.query.city, lat: "40.7128", lng: "-74.0060" });
});

app.get("/weather", async (req, res) => {
    res.json({ temp: 25, description: "Sunny" });
});

app.get("/image", async (req, res) => {
    res.json({ url: "https://example.com/image.jpg" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
