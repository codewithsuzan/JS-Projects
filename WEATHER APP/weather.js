const apiKey = "f5fd748d71d720da317c245bdbf2a235";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let cityElement = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind");
let imageForCenter = document.querySelector(".weather img");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

let checkWeather = async (city) => {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);
        cityElement.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°C";
        humidity.innerHTML = data.main.humidity + "%";
        windSpeed.innerHTML = data.wind.speed + "Km/Hr";

        if (data.weather[0].main === "Clouds") {
            imageForCenter.src = "images/clouds.png";
        } else if (data.weather[0].main === "Clear") {
            imageForCenter.src = "images/clear.png";
        } else if (data.weather[0].main === "Mist") {
            imageForCenter.src = "images/mist.png";
        } else if (data.weather[0].main === "Snow") {
            imageForCenter.src = "images/snow.png";
        } else if (data.weather[0].main === "Rain") {
            imageForCenter.src = "images/rain.png";
        } else if (data.weather[0].main === "Drizzle") {
            imageForCenter.src = "images/drizzle.png";  // Ensure this spelling matches the actual image file name
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
};

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
