var React = require('react');

var WeatherResult = React.createClass({
	
	getDefaultProps: function(){
		return {
			city: 'Fucksville'
		};
	},

	render: function(){

		var city = this.props.city;
		var temp = this.props.temp;
		var country = this.props.country;
		return(
			<div><h4>The temperature in {city}, {country} is {temp} degrees :D</h4></div>
		);
	}
});

module.exports = WeatherResult;