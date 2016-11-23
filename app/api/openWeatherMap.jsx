var axios = require('axios');

// convention
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=508609b1a7e39820e2a689182d1a2306&units=metric&';

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=508609b1a7e39820e2a689182d1a2306
module.exports = {

	getTemp: function(city){

		var encodedCity = encodeURIComponent(city);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedCity}`;
		return axios.get(requestUrl).then(function(res){
			debugger;
			if(res.data.cod && res.data.message) {
				throw new Error (res.data.message);
			}
			else {

				return {temp: res.data.main.temp, city: res.data.name, country: res.data.sys.country};
			}

		}, function(err){
			throw new Error ("Not found. Make sure not to type in a stupid-ass nonexistent city, and maybe that'll help =)");
		});
	}
}