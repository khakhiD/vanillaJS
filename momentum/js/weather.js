const API_KEY = "db1611a1b24adb1929a97532f7872dde"; // 실습 종료 후 API Key는 비활성화되었습니다.

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json().then(data => {
        const city = document.querySelector("#weather span:last-child");
        const weather = document.querySelector("#weather span:first-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }));
}
function onGeoFailed() {
    console.log("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFailed);