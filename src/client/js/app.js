
async function handleSubmit(event) {
    event.preventDefault();

    const location = document.getElementById("location").value;

    if (!location) {
        alert("Please enter a location.");
        return;
    }

    console.log("Fetching data for:", location);

    try {
        const geoData = await fetch(`http://localhost:8081/geonames?city=${location}`)
            .then(res => res.json());

        if (!geoData || !geoData.lat || !geoData.lng) {
            throw new Error("Invalid location data.");
        }

        const weatherData = await fetch(`http://localhost:8081/weather?lat=${geoData.lat}&lng=${geoData.lng}`)
            .then(res => res.json());

        const imageData = await fetch(`http://localhost:8081/image?city=${location}`)
            .then(res => res.json());

        updateUI(geoData, weatherData, imageData);

    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to get travel data. Please try again.");
    }
}

function updateUI(geoData, weatherData, imageData) {
    document.getElementById("city-name").innerText = geoData.city;
    document.getElementById("temperature").innerText = `${weatherData.temp}°C`;
    document.getElementById("weather-desc").innerText = weatherData.description;
    document.getElementById("city-image").src = imageData.url;
}

export { handleSubmit };
