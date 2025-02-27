🌍 Travel App
A web application that helps users plan their trips by fetching location details, weather forecasts, and images using APIs.

📌 Features
Search for a destination.
Get geographical coordinates using the Geonames API.
Retrieve weather forecasts using the Weatherbit API.
Display images of the destination using the Pixabay API.
🛠️ Installation
Clone the repository

git clone https://github.com/your-repo/travel-app.git
cd travel-app
Install dependencies


npm install
Create a .env file and add your API keys:

GEONAMES_USERNAME=your_username
WEATHERBIT_API_KEY=your_api_key
PIXABAY_API_KEY=your_api_key

🚀 Usage
Start the Development Server

npm run build-dev
This will launch the app in development mode.

Build and Run in Production

npm run build-prod
npm start
📂 Project Structure
pgsql


Root
├── package.json
├── README.md
├── webpack.config.js
├── .env
├── src
│   ├── client
│   │   ├── index.js
│   │   ├── js
│   │   │   └── app.js
│   │   ├── styles
│   │   │   └── style.scss
│   │   └── views
│   │       └── index.html
│   └── server
│       └── server.js
└── .gitignore
🛠️ Dependencies
Ensure you have Node.js installed (v18 or higher).

Install the required packages:


npm install express cors dotenv node-fetch webpack webpack-cli webpack-dev-server babel-loader sass style-loader css-loader html-webpack-plugin mini-css-extract-plugin
🌎 API References
Geonames API
Weatherbit API
Pixabay API
🛠️ Troubleshooting
If the server does not start, check your .env file and ensure API keys are correctly set.
If npm install fails, try deleting node_modules and running:

rm -rf node_modules package-lock.json
npm install