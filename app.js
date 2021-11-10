const form = document.querySelector("form");
form.addEventListener("submit", newCity)

// Weather object - init location
const weather = new Weather("Sus");

// UI object
const ui = new UI();

// get city weather and display it
function newCity(){
	const city = document.querySelector("#change-city").value;
	weather.changeCity(city);
	getWeather();
	event.preventDefault();
}

function getWeather() {
	weather.getWeather()
	.then(data => {
		ui.drawWeather(data)
	})
	.catch(error => console.log(error))
}

getWeather()