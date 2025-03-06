const express = require('express');
const path = require('path');
const fetch = require('node-fetch'); // تأكد من تثبيت هذا باستخدام npm install node-fetch

const app = express();
const PORT = process.env.PORT || 8081;

// استخدام مجلد "dist" كمجلد ثابت
app.use(express.static(path.join(__dirname, '../../dist')));

// المعالجة عند زيارة الصفحة الرئيسية "/"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

// **إضافة نقطة نهاية API لمعالجة طلبات البيانات**
app.get('/geonames', async (req, res) => {
    const city = req.query.city;
    const geonamesURL = `http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=YOUR_USERNAME`;

    try {
        const response = await fetch(geonamesURL);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching Geonames data:', error);
        res.status(500).json({ message: 'Failed to fetch data from Geonames API' });
    }
});

// تشغيل الخادم
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
