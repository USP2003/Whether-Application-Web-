
// select
const searchBtn = document.querySelector("#btn");
const searchInput = document.querySelector("#search");
const btnText = document.querySelector(".btn-text");
const btnLoader = document.querySelector(".btn-loader");

// event listener
searchBtn.addEventListener("click", async function () {
    const location = searchInput.value.trim();
    if (!location) return;

    // Start loading state
    searchBtn.disabled = true;
    btnText.textContent = "Loading";
    btnLoader.classList.remove("hidden");

    try {
        const data = await fetchWeather(location);
        if (data) {
            updateDOM(data);
        }
    } finally {
        // Stop loading state
        searchBtn.disabled = false;
        btnText.textContent = "Search";
        btnLoader.classList.add("hidden");
        searchInput.value = "";
    }
});


const tempratureElem = document.querySelector(".temprature");
const locationElem = document.querySelector(".location");
const emojiImg = document.querySelector(".emoji");
const timeElem = document.querySelector(".time");
const dayElem = document.querySelector(".Day");
const dateElem = document.querySelector(".Date");
const conditionElem = document.querySelector(".condition");

function updateDOM(data) {
    /***********************filter required data*********************/
    console.log("i will update the dom", data);
    const temp = data.current.temp_c;
    const location = data.location.name;
    const timeData = data.location.localtime;
    const [date, time] = timeData.split(" ");
    const iconLink = data.current.condition.icon;
    const condition = data.current.condition.text;
    /*********************update the dom*************************/
    tempratureElem.textContent = temp + "°C";
    locationElem.textContent = location;
    emojiImg.src = iconLink;
    dateElem.innerText = date;
    timeElem.innerText = time;
    conditionElem.innerText = condition;
}

async function fetchWeather(location) {

    const url = `http://api.weatherapi.com/v1/current.json?key=80cc0e0d5cdf420598c54334261601&q=${location}&aqi=no`
    // fetch -> inbuilt function to get http response from a server
    const response = await fetch(url);
    if (response.status == 400) {
        alert("location is invalid");
        return null;
    } else if (response.status == 200) {
        const json = await response.json();
        return json;
    }
}



//  search button -> click -> input get value -> fetchWeather -> update the UI

/***
 * HTTP packet -> Header-> metdata, status , body -> data 
 * 200 -> success
 * 404 -> page not found
 * 400 -> Bad request
 * 100->
 * 
 * **/ 





