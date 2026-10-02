🌤️ Weather App
A modern, responsive, and minimalist web application that fetches and displays real-time weather updates for any city globally. Built using clean semantic HTML5, a sleek glassmorphic custom CSS3 container, and asynchronous JavaScript (ES6+) interacting with the OpenWeatherMap API.
Developed by @soumya.
✨ Features
• Live Weather Data: Instantly retrieves accurate, up-to-the-minute atmospheric metrics using the OpenWeatherMap data engine.
• Modern Glassmorphic UI: Features a premium, translucent "frosted glass" interface block complete with smooth drop shadows and clean contrast tracking.
• Seamless Keyboard Entry: Form submission is optimized to work seamlessly with either the primary action button or by hitting Enter on standard desktop/mobile keyboards.
• Auto-Metric Converter: Formats temperatures automatically to Celsius (°C) and standardizes raw wind speeds to kilometers per hour (km/h).
• Error Isolation: Gracefully intercepts typos or unmapped region names, displaying localized alerts without breaking the application wrapper.
🛠️ Tech Stack
• Frontend Structure: HTML5 (Semantic architecture focusing on accessibility inputs)
• Interface Styling: CSS3 (Flexbox positioning, linear background gradients, micro-interactions, custom transition timings)
• Application Logic: JavaScript (ES6+, Fetch API integrations, asynchronous async/await blocks, safe DOM manipulation)
• Data Provider: OpenWeatherMap API
🚀 How to Run Locally
1. Clone the Files
Clone this repository to your local computer using your terminal:
bash
git clone https://github.com
cd Weather-App
Use code with caution.
2. Configure Your Private API Key
To protect individual account restrictions, this repository ignores core credential assets inside public version tracking.
1. Create a free profile on OpenWeatherMap.
2. Generate an API token string via your account dashboard.
3. Create a local configuration file named config.js right inside the main folder.
4. Input your private string like this:javascript
const API_KEY = "YOUR_PERSONAL_OPENWEATHERMAP_API_KEY";
Use code with caution.
3. Launch the Project
Simply open the index.html file inside any modern web browser to use your weather app live!
