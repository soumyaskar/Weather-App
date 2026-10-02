
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const weatherForm=document.querySelector("#form form");
const locationInput=document.querySelector("#location");
const weatherCard=document.querySelector("#weather-card");
const cityName= document.querySelector("#city-name");
const tempDisplay=document.querySelector("#temp-display")
const weatherDesc= document.querySelector("#weather-desc");
const humidityDisplay= document.querySelector("#humidity-display");
const windDisplay = document.querySelector("#wind-display");

//form submission
 weatherForm.addEventListener("submit",async (event)=>{
    event.preventDefault();

    const city= locationInput.value.trim();

    if(city ===""){
        alert("Please enter a location namee before searching.");
        return;
    }
    // direct data retrival

    await fetchWeatherData(city);
 } );
//3.fetch api

async function fetchWeatherData(city){
    try{
        const encodedCity = encodeURIComponent(city);
        const apiUrl = `${BASE_URL}?q=${encodedCity}&appid=${API_KEY}&units=metric`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("City not found. Please double-check your spelling!");
            } else if (response.status === 401) {
                throw new Error("Invalid API Key. Please make sure you pasted it correctly.");
            } else {
                throw new Error("Something went wrong. Please try again later.");
            }
        }

        const data = await response.json();
        updateWeatherUI(data);
    } catch (error) {
        alert(error.message);
        console.error(error);
    }
}
function updateWeatherUI(data) {
    // Destructuring metrics directly out of the API response JSON structure
    const { 
        name, 
        main: { temp, humidity }, 
        weather: [{ description }], 
        wind: { speed } 
    } = data;
    
    // Inject variables cleanly back into matching HTML placeholder selectors
    cityName.textContent = name;
    tempDisplay.textContent = `${Math.round(temp)}°C`;
    weatherDesc.textContent = description; // The CSS will capitalize this automatically
    humidityDisplay.textContent = humidity;
    
    // Wind is returned in meters per second (m/s). We multiply by 3.6 to convert to km/h.
    const windSpeedKmh = Math.round(speed * 3.6);
    windDisplay.textContent = windSpeedKmh;

    // Removes the ".hidden" utility class, triggering the CSS fade-in layout animation
    weatherCard.classList.remove("hidden");
}
