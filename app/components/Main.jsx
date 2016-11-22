var React = require('react');
var Nav = require('Nav');

/*var Main = React.createClass({

	render: function() {

		return (
			<div>
			<Nav/>
			<h2>Main Component</h2>
			{this.props.children}
			</div>
		);
	}
});*/

var Main = (props) => {
	return (
		<div>
		<Nav/>
		<div className="row">
		<div className="small-12 medium-8 large-4 columns small-centered"> {/*small- attributes scale to all sizes*/}
		{props.children}
		</div>
		</div>
		</div>
	);
};

module.exports = Main;