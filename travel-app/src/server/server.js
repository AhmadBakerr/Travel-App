const express = require('express');
const path = require('path');
const fetch = require('node-fetch'); // npm install node-fetch
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ تفعيل CORS
app.use(cors());

// ✅ خدمة ملفات الواجهة (dist)
app.use(express.static(path.join(__dirname, '../../dist')));

// ✅ الصفحة الرئيسية
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

// ✅ نقطة نهاية للـ Geonames
app.get('/geonames', async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({ message: 'City parameter is required' });
    }

    const username = process.env.GEONAMES_USERNAME || 'ا'; 
    const geonamesURL = `http://api.geonames.org/searchJSON?q=${encodeURIComponent(city)}&maxRows=10&username=${username}`;

    try {
        const response = await fetch(geonamesURL);
        
        if (!response.ok) {
            throw new Error(`Geonames API error: ${response.statusText}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching Geonames data:', error.message);
        res.status(500).json({ message: 'Failed to fetch data from Geonames API' });
    }
});
app.listen(8108, () => {
    console.log('Server running on port 8108');
  });
  
