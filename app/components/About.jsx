var React = require('react');

/*var About = React.createClass({
	render: function(){

		return(
			<h3>About Component</h3>
		);
	}
});*/

// the below can be done for components that only have the render property, i.e. stateless components
var About = (props) => {
	return(
			<div>
			<h1 className="text-center">About the app</h1>
			<p>This app is just a means to the end of getting acquainted with React, Webpack, Foundation and some ES6 and newer experimental syntax.</p>
			<p>The weather data is fetched from the <a href="https://openweathermap.org/api/">Open Weather Map API</a>.</p>
			</div>
		);
};

module.exports = About;