class Weather{
	constructor(city){
		this.key = "4e6fb3b33d4a7a69591cca21c7882ee9";
		this.city = city;
	}
	async getWeather(){
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)		
		const responseData = await response.json()
		return responseData
	}
	changeCity(city){
		this.city = city;
		
	}
}