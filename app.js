// LS object
const ls = new LS();

const weatherLocation = ls.getLocationData();
console.log(weatherLocation)

// Weather object - init location
const weather = new Weather(weatherLocation);

// UI object
const ui = new UI();

const form = document.querySelector("form");
form.addEventListener("submit", newCity)


// get city weather and display it
function newCity(){
	const city = document.querySelector("#change-city").value;
	weather.changeCity(city);
	ls.setLocationData(city);
	getWeather();
	event.preventDefault();
	document.querySelector("#change-city").value = ""
}

function getWeather() {
	weather.getWeather()
	.then(data => {
		ui.drawWeather(data)
	})
	.catch(error => console.log(error))
}

getWeather()