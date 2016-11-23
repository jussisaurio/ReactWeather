var React = require('react');
var {Link} = require('react-router');

/*var Examples = React.createClass({
	render: function(){

		return(
			<h3>Examples Component</h3>
		);
	}
});*/

var Examples = (props) => {

		return(
			<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>A few example locations to try out:</p>
			<ol>
			<li>
				<Link to='/?city=Tampere'>Tampere</Link>
			</li>
			<li>
				<Link to='/?city=Phnom%20Penh'>Phnom Penh</Link>
			</li>
			<li>
				<Link to='/?city=Montevideo'>Montevideo</Link>
			</li>
			</ol>
			</div>
		);
	};

module.exports = Examples;