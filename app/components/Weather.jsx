var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherResult = require('WeatherResult');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	
	getInitialState: function() {
		return {
			isLoading: false
		};
	},

	handleSearch: function(city) {

		var parent=this;
		this.setState({isLoading: true});

		openWeatherMap.getTemp(city).then(function(info){
			
			parent.setState({
				isLoading: false,
				city: info.city,
				temp: info.temp,
				country: info.country
			});
		}, function(err){
			parent.setState({
				isLoading: false,
				city: null,
				temp: null,
				country: null
			});
		});

	},

	render: function(){

		var {isLoading, city, temp, country} = this.state;

		function renderResult(){
			if (isLoading) {
				return <h3>Loading...</h3>;
			}
			else if (temp && city && country) {
				return <WeatherResult city={city} country={country} temp={temp}/>;
			}
		}
		return(
			<div>
			<h1 className="text-center">Get Weather</h1>
			<WeatherForm onSearch={this.handleSearch}/>
			{renderResult()}
			</div>
		);
	}
});

module.exports = Weather;