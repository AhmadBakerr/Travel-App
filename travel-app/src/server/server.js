const express = require('express');
const path = require('path');

const app = express();
const PORT = 8081;

// جعل المجلد "dist" متاحًا كملفات ثابتة
app.use(express.static(path.join(__dirname, '../../dist')));

// عند زيارة الصفحة الرئيسية "/"، أرسل index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

// تشغيل السيرفر
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
