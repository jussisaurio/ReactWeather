var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherResult = require('WeatherResult');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
	
	componentDidMount: function(){

		var city = this.props.location.query.city;

		if (city && city.length>0) this.handleSearch(city);
		window.location.hash='/';
	},

	componentWillReceiveProps: function(newProps){
		var city = newProps.location.query.city;

		if (city && city.length>0) this.handleSearch(city);
		window.location.hash='/';
	},

	getInitialState: function() {
		
		// if (this.props && this.props.params.city) {this.handleSearch(this.props.params.city);}
		return {
			isLoading: false,
		};
	},

	handleSearch: function(city) {
		var parent=this;
		this.setState({
			isLoading: true,
			errorMessage: undefined,
			city: undefined,
			country: undefined,
			temp: undefined
		});

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
				errorMessage: err.message // err is actually a javascript error object
			});
		});

	},

	render: function(){

		var {isLoading, city, temp, country, errorMessage} = this.state;

		function renderResult(){
			if (isLoading) {
				return <div className="loader"/>;
			}
			else if (temp && city && country) {
				return <WeatherResult city={city} country={country} temp={temp}/>;
			}
		}

		function renderError(){
			if (typeof errorMessage === 'string'){
				return (
					<ErrorModal message={errorMessage}/>
				);
			}
		}

		
		return(
			<div>
			<h1 className="text-center page-title">Get Weather</h1>
			<WeatherForm onSearch={this.handleSearch}/>
			{renderResult()}
			{renderError()}
			</div>
		);
	}
});

module.exports = Weather;