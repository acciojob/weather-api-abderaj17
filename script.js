document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn");

    btn.addEventListener("click", () => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9bac5b0780f828c74f54b5c028be6aba&units=metric")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                let existingField = document.getElementById("weatherData");
                if (existingField) {
                    existingField.remove();
                }

                const displayField = document.createElement("div");
                displayField.id = "weatherData";
                displayField.innerHTML = `🌤 Current weather in London: <strong>${data.weather[0].main}</strong>, Temperature: ${data.main.temp}°C`;
                document.body.appendChild(displayField);
            })
            .catch(err => {
                console.error("Error:", err);
                alert("Failed to fetch weather data. Please try again later.");
            });
    });
});
