# 🌍 Travel App  

A web application that allows users to plan trips by entering a destination and getting relevant information such as weather forecasts and images.

## 🚀 Features  
- Enter a destination and receive real-time weather updates.  
- View images related to your destination.  
- Offline functionality using Service Workers.  

## 🛠️ Technologies Used  
- **Frontend:** HTML, SCSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **APIs Used:** Geonames, Weatherbit, Pixabay  
- **Build Tools:** Webpack  

## 📌 Installation & Setup  

1️⃣ **Clone the repository:**  

git clone https://github.com/ا/travel-app.git
cd travel-app
2️⃣ Install dependencies:


npm install
3️⃣ Run the development server:


npm run dev
Your app should now be available at http://localhost:8081/.

4️⃣ Build for production:


npm run build
5️⃣ Start the server:

npm start

📝 Project Structure

travel-app/
│── dist/                   # Production build  
│── src/  
│   ├── client/  
│   │   ├── js/             # Client-side JavaScript  
│   │   ├── styles/         # SCSS styles  
│   │   ├── views/          # HTML files  
│   │   ├── index.js        # Entry point  
│   ├── server/  
│   │   ├── server.js       # Express server  
│── package.json  
│── webpack.config.js  
│── README.md  
✅ Dependencies
Express - Web server framework
Webpack - Bundler
Babel - JavaScript compiler
Node-fetch - API requests
Dotenv - Environment variables
📌 Notes
Ensure you have Node.js (v18 or higher) installed.
Create a .env file for API keys:
env

GEO_API_KEY=your_api_key
WEATHER_API_KEY=your_api_key
PIXABAY_API_KEY=your_api_key
If issues arise, delete node_modules/ and package-lock.json, then reinstall dependencies:

rm -rf node_modules package-lock.json
npm install
🎯 License
This project is licensed under the MIT License.